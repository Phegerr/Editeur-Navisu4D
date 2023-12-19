// Importation des modules nécessaires
const express = require('express');
var cors = require('cors');
const bodyParser = require("body-parser");
const fs = require('fs');
const ScenarioModel = require('./ScenarioModel.js');
const multer = require('multer');
const upload = multer({
  dest: './assets/images', // Changer ce chemin selon votre répertoire désiré
});

// Définition des options CORS (Cross-Origin Resource Sharing)
const corsOptions = {
   origin: '*',               // Autoriser toutes les origines (à adapter selon les besoins)
   credentials: true,          // Autoriser l'envoi des cookies
   optionSuccessStatus: 200,   // Statut de succès pour les requêtes OPTIONS
}

// Définition des constantes pour le serveur
const HOST_NAME = 'localhost';
const PORT_EXT = 8080;

// Initialisation de l'application Express
const app = express();
const router = express.Router();

// Configuration pour gérer les données JSON volumineuses
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Activation du middleware CORS
app.use(cors());
app.options('*', cors()); // Configuration des options CORS pour toutes les routes

// Définition d'une route de base pour tester le serveur
app.get('/', (req, res) => {
    res.send('hi!');
});

// Utilisation du routeur défini
app.use(router);

// Démarrage du serveur sur le port spécifié
app.listen(PORT_EXT, HOST_NAME, function () {
    console.log("Server listen http://" + HOST_NAME + ":" + PORT_EXT);
});
// Ajout de la route pour le téléchargement d'images
router.route('/upload-image')
  .post(upload.single('imageData'), (req, res) => {
    // Traitement du fichier image téléchargé
    const imageFile = req.file; // L'objet file contient des informations sur le fichier image
    if (imageFile) {
        console.log('Image File:', imageFile);
        // Vous pouvez enregistrer le chemin de l'image dans la base de données ou effectuer d'autres opérations nécessaires
        res.json({ message: 'Image uploaded successfully', imagePath: imageFile.path });
    } else {
        res.status(400).json({ message: 'No image file received' });
    }
  });


router.route('/scenarios')
    .get(async function (req, res) {
        // need change here
        const scenariosData = fs.readdirSync(scenariosFolders).map(folder => {
            // maybe a a filter is better
            const scenarioFiles = fs.readdirSync(scenariosFolders + '/' + folder).reduce((acumulator, subContent) => {
                if (subContent.includes('.json')) {
                    const data = fs.readFileSync(scenariosFolders + '/' + folder + '/' + subContent)
                    const scenarioObj = new ScenarioModel(JSON.parse(data));
                    scenarioObj.formatForRes();
                    scenarioObj.fileName = folder;
                    acumulator = {...acumulator, ...scenarioObj};
                }
                return acumulator;
            }, {});
            return scenarioFiles;
        });
        res.json(scenariosData);

    })
    
        // Ajout d'un scénario sur le serveur
    .post((req, res) => {
        // Extraction du corps de la requête contenant le dictionnaire
        const dic = req.body;

        // Appel de la fonction AntlrRes pour transformer les commandes en dictionnaire
        AntlrRes(res, dic)
        .then(result => {
            const scenario = new ScenarioModel(result);
            scenario.save(result.fileName);
            res.end();
            // Retournez la réponse
            return result;
        })
        .catch(error => {
            // Gestion des erreurs : Écrivez le message d'erreur dans la réponse
            res.write(error.message);
            res.end();
            // Retournez la réponse avec l'erreur
            return res;
        });
    })

    .delete(function (req, res) {
        let scenarioName = req.body.title;
        let targetDir = scenariosFolders + scenarioName;
        if (fs.existsSync(targetDir)) {
            fs.rmSync(targetDir, {recursive: true, force: true});
            return res.json('Scenario deleted');
        } else {
            return res.json('Scenario not found');
        }
    })
    .put(function (req, res) {
    });

//
//
//
//Nous n'utilisons pas le code qui suit (sauf la fonction finale). Ce code était déjà présent mais permet des fonctionnalitées que nous n'avons pas implantée
//
//
//
router.route('/scenarioFilesPath')
    .post((req, res) => {
        const main_directory_name = scenariosFolders + '/' + req.body.fileName;
        if (!fs.existsSync(main_directory_name)) {
            return res.json('scenario don"t exist');
        }
        if (!fs.existsSync(main_directory_name + '/' + req.body.fileName + '.pdf')) {
            return res.json('scenario have no exports files');
        }
        let files_paths = {
            'pdf': {'name': 'export', 'path': main_directory_name + '/' + req.body.fileName + '.pdf'},
            'img': [], 'videos': []
        }
        if (fs.existsSync(main_directory_name + '/images')) {
            files_paths.img = fs.readdirSync(main_directory_name + '/images').map(imageName => {
                return {'name': imageName, 'path': main_directory_name + '/images/' + imageName};
            })
            files_paths.videos = fs.readdirSync(main_directory_name + '/videos').map(videoNAme => {
                return {'name': videoNAme, 'path': main_directory_name + '/videos/' + videoNAme};
            })
        }
        return res.json(files_paths);
    })

router.route('/dlFile')
    .get((req, res) => {
        let path = req.query.path;
        if (fs.existsSync(path)) {
            return res.download(path)
        } else {
            return res.json('scenario don"t exist');
        }
    })


router.route('/')
    .post((req, res) => {
      console.log( req.body);
      const data = req.body|| 'No titre received';
      res.json({ data });
});

//
//
//
//Fin du code non utilisé
//
//
//

async function AntlrRes(res,scenario) {
    const { giveRes } = await import('./Antlr/antlrFunction.js');
    return giveRes(res,scenario); 
  }
  
  