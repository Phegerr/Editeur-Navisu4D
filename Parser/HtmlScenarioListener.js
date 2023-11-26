import antlr4 from 'antlr4';
import ScenarioLexer from './scenarioLexer.js';
import ScenarioParser from './scenarioParser.js';
import ScenarioListener  from './scenarioListener.js';

// "blablabla*bbox,48.0,-5.0,49.0,2.0*layer,bathymetry,gebco*move,flyTo,camera,-4.54,48.57,90000"

export default class HtmlScenarioListener extends ScenarioListener {
    constructor(res) {
        super();
        this.Res = res;
        this.mobile = {};
        this.index = -1;
        this.scenario = {"title": "Visualisation de données océanographiques",
            "description": "",
            "origin": "Terre Virtuelle",
            "date": {
                "date :": "2023-03-03"
            },
            "cmd": "scenario",
            "bbox": {
                "s": 48.26,
                "w": -4.56,
                "n": 48.43,
                "e": -4.3
            },
            "steps": []
        };
    }
// Exit a parse tree produced by scenarioParser#scenario.
    exitScenario(ctx) {
        this.Res.write(JSON.stringify(this.scenario));
    }
// Enter a parse tree produced by scenarioParser#coment.
    enterComment(ctx) {
//Init d'une nouvelle etape. Ne doit pas rester ici
        var comment = ctx.getText();
        this.scenario.steps.push({});
        this.index++;
        this.scenario.steps[this.index].comment = comment;
    }
// Enter a parse tree produced by scenarioParser#bbox.
    enterBbox(ctx) {
        var cmdTab = ctx.getText().split(",")
        var bbox = {"s": cmdTab[1],
            "w": cmdTab[2],
            "n": cmdTab[3],
            "e": cmdTab[4]
        };
        this.scenario.steps[this.index].bbox = bbox;
    }
// Enter a parse tree produced by scenarioParser#bathy_0.
    enterBathy_0(ctx) {
        var cmdTab = ctx.getText().split(",")
        var bathy = {"bathy": cmdTab[1]};
        this.scenario.steps[this.index].layer = bathy;
    }
// Enter a parse tree produced by scenarioParser#bathy_1.
    enterBathy_1(ctx) {
//this.Res.write('<br>' + ctx.getText());
        var cmdTab = ctx.getText().split(",")
        var bathy = {"bathy": cmdTab[1]};
        this.scenario.steps[this.index].layer = bathy;
    }
// Enter a parse tree produced by scenarioParser#move.
    enterMove(ctx) {
        this.scenario.steps[this.index].move = {};
    }
// Exit a parse tree produced by scenarioParser#flyTo.
    exitFlyTo(ctx) {
        this.scenario.steps[this.index].move.flyTo = this.mobile;
    }
    // Enter a parse tree produced by scenarioParser#camera.
    enterCamera(ctx) {
        var cmdTab = ctx.getText().split(",")
        //var cam = cmdTab[0]
        if (cmdTab.length === 4) {
            var position = {"lon": cmdTab[1],
                "lat": cmdTab[2],
                "alt": cmdTab[3]};
            this.mobile = {'camera': position};
            //   this.scenario.steps[this.index].move.flyTo = {'camera' : position};
        } else {

        }
    }
}
