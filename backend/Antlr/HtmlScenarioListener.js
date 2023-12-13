import antlr4 from 'antlr4';
import ScenarioLexer from './scenarioLexer.js';
import ScenarioParser from './scenarioParser.js';
import ScenarioListener from './scenarioListener.js';
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
        this.vars.bathymetry = { "litto3D": cmdTab[1] };
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
        this.scenario.steps[this.index].layer.oceanography.currents.tidalAtlas = {"3D" :{}};
    }

    enterForecast(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].layer.oceanography.currents.forecast = cmdTab[1];
    }

    enterIroise(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].layer.oceanography.currents.tidalAtlas["3D"].iroise = cmdTab[1];
    }

  
    enterFromveur(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].layer.oceanography.currents.tidalAtlas["3D"].fromveur = cmdTab[1];
    }

    enterManche(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].layer.oceanography.currents.tidalAtlas["3D"].manche= cmdTab[1];
    }

    enterOceano2D(ctx) {
        var cmdTab = ctx.getText().split(",");
        this.scenario.steps[this.index].layer.oceanography.currents.tidalAtlas["2D"]= cmdTab[1];
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


}
