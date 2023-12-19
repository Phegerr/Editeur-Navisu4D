import { createServer } from 'http';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import ScenarioLexer from './scenarioLexer.js';
import ScenarioParser from './scenarioParser.js';
import HtmlScenarioListener from './HtmlScenarioListener.js';


class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        throw new Error(`Syntax error at line ${line}:${column} - ${msg}`);
    }
}

createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.write('<html><head><meta charset="UTF-8"/></head><body>');
    try{
    var input = "blablabla*bbox,48.0,-5.0,49.0,2.0*move,flyTo,ship,-4.54,48.57,900000.0*layer,oceanography,currents,tidalAtlas,2D,max*navigation,pilotchart,NAC,3*chart,raster,7311*chart,mbtiles,manche*bbox,48.3,-5.2,48.65,-4.5*simulation,json,track_pizou_height.json,BelEspoirM.glb,true,waves.wav,6.0,true,false,0,0,255,0,240,meteo,arome*layer,bathymetry,emodnet*move,flyTo,camera,-4.54,48.57,90000,0.0,31.0,0.0*layer,bathymetry,litto3D,morbihan*move,flyTo,camera,-4.54,48.57,90000*video,https://www.google.com/search?q=ytb&rlz=1C1CHBF_frFR915FR915&oq=ytb&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEC4YxwEY0QMYgAQyBggCEEUYQDIHCAMQABiABDIJCAQQABgKGIAEMgcIBRAAGIAEMgcIBhAAGIAEMg8IBxAAGAoYgwEYsQMYgATSAQc0MjZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8,fnfa,50,50,50,50";
    var chars = new InputStream(input, true)
    var lexer = new ScenarioLexer(chars);
    var tokens = new CommonTokenStream(lexer);
    var parser = new ScenarioParser(tokens);
    parser.removeErrorListeners(); // Retire les listeners d'erreur par défaut
    parser.addErrorListener(new CustomErrorListener()); // Ajoute votre CustomErrorListener
    
    parser.buildParseTrees = true;
    var tree = parser.scenario();
    var htmlScenario = new HtmlScenarioListener(res);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlScenario, tree);
    res.write('</body></html>');
    res.end();
    }catch (error) {
        console.error(error.message);
        res.write(`Error: ${error.message}`);
        res.end();
        return; // Arrête l'exécution supplémentaire dans cette requête
    }
}).listen(4000);
