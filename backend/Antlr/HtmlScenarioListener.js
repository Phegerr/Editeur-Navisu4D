import antlr4 from 'antlr4';
import fs from "fs";
import ScenarioLexer from './scenarioLexer.js';
import ScenarioParser from './scenarioParser.js';
import ScenarioListener from './scenarioListener.js';

// Fonction pour vérifier si une chaîne est dans le CSV
function isStringInCSV(filePath, searchString) {
    // Lire le contenu du fichier CSV
    const csvContent = fs.readFileSync(filePath, 'utf8');

    // Diviser le contenu en lignes
    const lines = csvContent.split('\n');

    // Rechercher la chaîne dans chaque ligne
    for (let line of lines) {
        if (line.includes(searchString)) {
            return true; // Retourner vrai si la chaîne est trouvée
        }
    }
    return false; // Retourner faux si la chaîne n'est pas trouvée
}

export default class HtmlScenarioListener extends ScenarioListener {
    constructor(res,scenario) {
        super();
        this.Res = res;
        this.mobile = {};
        this.vars = {};
        this.index = -1;
        // this.scenario = {
        //     "title": "Visualisation de données océanographiques",
        //     "description": "",
        //     "origin": "Terre Virtuelle",
        //     "date": {
        //         "date :": "2023-03-03"
        //     },
        //     "cmd": "scenario",
        //     "bbox": {
        //         "s": 48.26,
        //         "w": -4.56,
        //         "n": 48.43,
        //         "e": -4.3
        //     },
        //     "steps": []
        // };
        this.scenario=scenario;
        this.scenario.steps=[];
    }
   
    exitScenario(ctx) {
        this.Res.write(JSON.stringify(this.scenario));
    }

    enterComment(ctx) {
        var comment = ctx.getText();
        this.scenario.steps.push({});
        this.index++;
        this.scenario.steps[this.index].comment = comment;
    }
    
    enterLayer(ctx) {
        this.scenario.steps[this.index].layer = {};
    }

    enterBbox(ctx) {
        var cmdTab = ctx.getText().split(",")
        var bbox = {
            "s": cmdTab[1],
            "w": cmdTab[2],
            "n": cmdTab[3],
            "e": cmdTab[4]
        };
        this.scenario.steps[this.index].bbox = bbox;
    }
    enterBathymetry(ctx) {
        var cmdTab = ctx.getText().split(",");
        if (cmdTab.length === 2) {
            this.vars.bathymetry = cmdTab[1]; 
        }

    }

    exitBathymetry(ctx) {
        this.scenario.steps[this.index].layer.bathymetry = this.vars.bathymetry;
    }

    enterSonar(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.vars.bathymetry = { "sonar": cmdTab[1] };
    }

    exitSonar(ctx) {
    }

    enterLitto3D(ctx) {
        var cmdTab = ctx.getText().split(",");
        if(isStringInCSV("../assets/csv/regions.csv",cmdTab[1])){
        this.vars.bathymetry= {"litto3D":cmdTab[1]};
        }
        else{
            throw new Error('name : '+cmdTab[1]+' not found')
        }
    }

    exitLitto3D(ctx) {
        
    }

    enterMove(ctx) {
        this.scenario.steps[this.index].move = {};
    }

    exitFlyTo(ctx) {
        this.scenario.steps[this.index].move.flyTo = this.mobile;
    }

    enterCamera(ctx) {
        var cmdTab = ctx.getText().split(",")
        if (cmdTab.length === 4) {
            var position = {
                "lon": cmdTab[1],
                "lat": cmdTab[2],
                "alt": cmdTab[3]
            };
            this.mobile = { 'camera': position };
        } else {
        }
    }
    enterShip(ctx) {
        var cmdTab = ctx.getText().split(",")
        if (cmdTab.length === 4) {
            var position = {
                "lon": cmdTab[1],
                "lat": cmdTab[2],
                "alt": cmdTab[3]
            };
            this.mobile = { 'ship': position };
        } else {
        }
    }

    enterOceanography(ctx) {
        this.scenario.steps[this.index].layer.oceanography = {};
    }

    enterCurrents(ctx) {
        this.scenario.steps[this.index].layer.oceanography.currents = {};
    }

    enterTidalAtlas(ctx) {
        this.scenario.steps[this.index].layer.oceanography.currents.tidalAtlas = {};
    }
    enterOceano3D(ctx) {
        var cmdTab = ctx.getText().split(",");
        if (isStringInCSV("../assets/csv/oceano3D.csv", cmdTab[1])) {
            // Création d'un objet pour stocker la propriété
            let litto3DObj = {};
            litto3DObj[cmdTab[1]] = cmdTab[2];
    
            // Affectation de l'objet à la propriété correspondante
            this.scenario.steps[this.index].layer.oceanography.currents.tidalAtlas = {"litto3D": litto3DObj};
        } else {
            throw new Error('name: ' + cmdTab[1] + ' not found');
        }
    }

    enterForecast(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].layer.oceanography.currents.forecast = cmdTab[1];
    }

    enterIroise(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].layer.oceanography.currents.tidalAtlas["3D"].iroise = cmdTab[1];
    }


    enterTides(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].layer.oceanography.tides= cmdTab[1];
    }

    enterNavigation(ctx){
        this.scenario.steps[this.index].navigation= {};
        var cmdTab = ctx.getText().split(",");
        if (cmdTab.length === 2) {
            this.vars.navigation = cmdTab[1]; 
        }

    }

    exitNavigation(ctx){
        this.scenario.steps[this.index].navigation= this.vars.navigation;
    }

    enterPilotchart(ctx){
        var cmdTab = ctx.getText().split(",");
        this.vars.navigation={"pilotchart":{"NAC":cmdTab[2]}};
    }

    enterChart(ctx){
        this.scenario.steps[this.index].chart = {}
    }

    enterRaster(ctx){
        var cmdTab = ctx.getText().split(",");
        if(cmdTab.length===2){
        this.scenario.steps[this.index].chart.raster= cmdTab[1];
        }
        else {
            this.scenario.steps[this.index].chart.raster={}
        }
    }

    enterShom(ctx){
        var cmdTab = ctx.getText().split(",");
        if(isStringInCSV("../assets/csv/SHOM.csv",cmdTab[1])){
        this.scenario.steps[this.index].chart.raster.shom= cmdTab[1];
        }
        else{
            throw new Error('name : '+cmdTab[1]+' not found')
        }
    }

    enterVector(ctx){
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].chart.vector= cmdTab[1];
    }

    enterMbtiles(ctx){
        var cmdTab = ctx.getText().split(",");
        if(isStringInCSV("../assets/csv/mbtiles_name.csv",cmdTab[1])){
            this.scenario.steps[this.index].chart.mbtiles= cmdTab[1];
        }
        else{
            throw new Error('name : '+cmdTab[1]+' not found')
        }
    }

    enterImage(ctx){
        var cmdTab = ctx.getText().split(',');
        if (fs.existsSync("../assets/image/"+cmdTab[1])===false){
            throw new Error('Image : '+cmdTab[1]+' not found')
        }
       
        this.scenario.steps[this.index].image={
            "filename": cmdTab[1],
            "title": cmdTab[2],
            "sizeX": cmdTab[3],
            "sizeY": cmdTab[4]
        };
    
    }

    enterText(ctx){
        var cmdTab = ctx.getText().split(',');
        if (fs.existsSync("../assets/text/"+cmdTab[1])===false){
            throw new Error('Text : '+cmdTab[1]+' not found')
        }
        this.scenario.steps[this.index].text= {
            "filename": cmdTab[1],
            "title": cmdTab[2]
        };
        
    }

    enterImage3D(ctx){
        var cmdTab = ctx.getText().split(',');
        if (fs.existsSync("../assets/image3D/"+cmdTab[1])===false){
            throw new Error('Image3D : '+cmdTab[1]+' not found')
        }
        this.scenario.steps[this.index].image3D={
            "filename": cmdTab[1],
            "title": cmdTab[2],
            "lon": cmdTab[3],
            "lat": cmdTab[4]
        };
    }

    enterVideo(ctx){
        var cmdTab = ctx.getText().split(',');
        if (fs.existsSync("../assets/video/"+cmdTab[1])===false){
            throw new Error('Video : '+cmdTab[1]+' not found')
        }
        this.scenario.steps[this.index].video = {
            "filename": cmdTab[1],
            "title": cmdTab[2],
            "sizeX": cmdTab[3],
            "sizeY": cmdTab[4],
            "posX": cmdTab[5],
            "posY": cmdTab[6]
        };
    }

    enterAudio(ctx){
        var cmdTab = ctx.getText().split(',');
        if (fs.existsSync("../assets/audio/"+cmdTab[1])===false){
            throw new Error('Audio : '+cmdTab[1]+' not found')
        }
        this.scenario.steps[this.index].audio=  {
            "filename": cmdTab[1],
            "title": cmdTab[2],
            "loop": cmdTab[3]
        };
    }


    enterSpeech(ctx){
        var cmdTab = ctx.getText().split(',');
        if (fs.existsSync("../assets/speech/"+cmdTab[1])===false){
            throw new Error('Speech : '+cmdTab[1]+' not found')
        }
        this.scenario.steps[this.index].speech=  {
            "filename": cmdTab[1],
            "title": cmdTab[2]
        };
    }

    enterVideo3D(ctx){
        var cmdTab = ctx.getText().split(',');
        if (fs.existsSync("../assets/video3D/"+cmdTab[1])===false){
            throw new Error('Video3D : '+cmdTab[1]+' not found')
        }
        this.scenario.steps[this.index].video3D= {
            "filename": cmdTab[1],
            "title": cmdTab[2],
            "lon": cmdTab[3],
            "lat": cmdTab[4]
        };
    }

    enterFireworks(ctx){
        var cmdTab = ctx.getText().split(",");
        if (fs.existsSync("../assets/fireworks/"+cmdTab[1])===false){
            throw new Error('Fireworks : '+cmdTab[1]+' not found')
        }
        this.scenario.steps[this.index].fireworks={
            "lon": cmdTab[1],
            "lat": cmdTab[2]
        };
    }

    enterSimulation(ctx){
        this.scenario.steps[this.index].simulation= {};

    }

    enterJson(ctx){
        var cmdTab = ctx.getText().split(",");
      
        var base = {
            "filename" : '',
            "model": 'lithops.glb',
            "track": true,
            "audio": 'silent',
            "speed": 7.0,
            "cww": true,
            "route": true,
            "height": 0,
            "r": 255.0,
            "g": 255.0,
            "b": 55.0,
            "a": 255.0,
        };
    base.filename=cmdTab[1];
    if(cmdTab[6]== 'true'){
        base.meteo= cmdTab[14];
    }
    let keys = Object.keys(base);
    for (let i = 1; i < cmdTab.length-2; i++) { 
            
            let key = keys[i - 1];
                base[key] = cmdTab[i];
        }
    this.scenario.steps[this.index].simulation.json = base;  
    
    }
    
        

}
