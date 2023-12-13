// Generated from scenario.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import scenarioListener from './scenarioListener.js';
const serializedATN = [4,1,104,408,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,5,0,88,8,0,10,0,12,0,91,9,0,1,0,1,0,5,0,95,8,0,10,0,12,0,98,
9,0,1,0,1,0,1,1,5,1,103,8,1,10,1,12,1,106,9,1,1,1,1,1,1,2,1,2,5,2,112,8,
2,10,2,12,2,115,9,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,3,2,131,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,
1,15,1,15,3,15,247,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,
1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,3,20,267,8,20,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
21,1,21,3,21,289,8,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,
1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,3,24,314,
8,24,1,25,1,25,1,25,1,25,1,25,3,25,321,8,25,1,26,1,26,5,26,325,8,26,10,26,
12,26,328,9,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,3,28,338,8,28,1,29,
1,29,1,29,1,29,3,29,344,8,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,3,31,
354,8,31,1,32,1,32,1,32,1,32,3,32,360,8,32,1,33,1,33,1,33,1,33,1,34,1,34,
1,34,1,34,1,34,3,34,371,8,34,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,37,
1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,
39,396,8,39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,42,0,0,43,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,0,10,1,0,1,2,1,0,6,7,
1,0,17,23,1,0,28,39,1,0,50,52,1,0,56,57,1,0,64,66,1,0,69,70,4,0,50,50,63,
63,67,67,77,90,1,0,91,92,400,0,89,1,0,0,0,2,104,1,0,0,0,4,109,1,0,0,0,6,
132,1,0,0,0,8,136,1,0,0,0,10,164,1,0,0,0,12,168,1,0,0,0,14,178,1,0,0,0,16,
184,1,0,0,0,18,194,1,0,0,0,20,202,1,0,0,0,22,216,1,0,0,0,24,222,1,0,0,0,
26,232,1,0,0,0,28,238,1,0,0,0,30,242,1,0,0,0,32,248,1,0,0,0,34,254,1,0,0,
0,36,258,1,0,0,0,38,260,1,0,0,0,40,266,1,0,0,0,42,288,1,0,0,0,44,290,1,0,
0,0,46,298,1,0,0,0,48,308,1,0,0,0,50,315,1,0,0,0,52,322,1,0,0,0,54,329,1,
0,0,0,56,333,1,0,0,0,58,339,1,0,0,0,60,345,1,0,0,0,62,349,1,0,0,0,64,355,
1,0,0,0,66,361,1,0,0,0,68,365,1,0,0,0,70,372,1,0,0,0,72,376,1,0,0,0,74,380,
1,0,0,0,76,384,1,0,0,0,78,388,1,0,0,0,80,397,1,0,0,0,82,401,1,0,0,0,84,405,
1,0,0,0,86,88,3,2,1,0,87,86,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,
0,0,0,90,96,1,0,0,0,91,89,1,0,0,0,92,95,3,4,2,0,93,95,5,93,0,0,94,92,1,0,
0,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,99,1,0,0,
0,98,96,1,0,0,0,99,100,5,0,0,1,100,1,1,0,0,0,101,103,7,0,0,0,102,101,1,0,
0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,
104,1,0,0,0,107,108,5,96,0,0,108,3,1,0,0,0,109,113,5,103,0,0,110,112,7,0,
0,0,111,110,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,
130,1,0,0,0,115,113,1,0,0,0,116,131,3,46,23,0,117,131,3,56,28,0,118,131,
3,34,17,0,119,131,3,30,15,0,120,131,3,48,24,0,121,131,3,12,6,0,122,131,3,
14,7,0,123,131,3,16,8,0,124,131,3,18,9,0,125,131,3,20,10,0,126,131,3,22,
11,0,127,131,3,24,12,0,128,131,3,26,13,0,129,131,3,6,3,0,130,116,1,0,0,0,
130,117,1,0,0,0,130,118,1,0,0,0,130,119,1,0,0,0,130,120,1,0,0,0,130,121,
1,0,0,0,130,122,1,0,0,0,130,123,1,0,0,0,130,124,1,0,0,0,130,125,1,0,0,0,
130,126,1,0,0,0,130,127,1,0,0,0,130,128,1,0,0,0,130,129,1,0,0,0,131,5,1,
0,0,0,132,133,5,3,0,0,133,134,5,94,0,0,134,135,3,8,4,0,135,7,1,0,0,0,136,
137,5,4,0,0,137,138,5,94,0,0,138,139,5,96,0,0,139,140,5,94,0,0,140,141,5,
96,0,0,141,142,5,94,0,0,142,143,3,84,42,0,143,144,5,94,0,0,144,145,5,96,
0,0,145,146,5,94,0,0,146,147,5,95,0,0,147,148,5,94,0,0,148,149,3,84,42,0,
149,150,5,94,0,0,150,151,3,84,42,0,151,152,5,94,0,0,152,153,5,95,0,0,153,
154,5,94,0,0,154,155,5,95,0,0,155,156,5,94,0,0,156,157,5,95,0,0,157,158,
5,94,0,0,158,159,5,95,0,0,159,160,5,94,0,0,160,161,5,95,0,0,161,162,5,94,
0,0,162,163,3,10,5,0,163,9,1,0,0,0,164,165,5,5,0,0,165,166,5,94,0,0,166,
167,7,1,0,0,167,11,1,0,0,0,168,169,5,8,0,0,169,170,5,94,0,0,170,171,5,96,
0,0,171,172,5,94,0,0,172,173,5,96,0,0,173,174,5,94,0,0,174,175,5,95,0,0,
175,176,5,94,0,0,176,177,5,95,0,0,177,13,1,0,0,0,178,179,5,9,0,0,179,180,
5,94,0,0,180,181,5,96,0,0,181,182,5,94,0,0,182,183,5,96,0,0,183,15,1,0,0,
0,184,185,5,10,0,0,185,186,5,94,0,0,186,187,5,96,0,0,187,188,5,94,0,0,188,
189,5,96,0,0,189,190,5,94,0,0,190,191,5,95,0,0,191,192,5,94,0,0,192,193,
5,95,0,0,193,17,1,0,0,0,194,195,5,11,0,0,195,196,5,94,0,0,196,197,5,96,0,
0,197,198,5,94,0,0,198,199,5,96,0,0,199,200,5,94,0,0,200,201,3,84,42,0,201,
19,1,0,0,0,202,203,5,12,0,0,203,204,5,94,0,0,204,205,5,99,0,0,205,206,5,
94,0,0,206,207,5,96,0,0,207,208,5,94,0,0,208,209,5,95,0,0,209,210,5,94,0,
0,210,211,5,95,0,0,211,212,5,94,0,0,212,213,5,95,0,0,213,214,5,94,0,0,214,
215,5,95,0,0,215,21,1,0,0,0,216,217,5,13,0,0,217,218,5,94,0,0,218,219,5,
96,0,0,219,220,5,94,0,0,220,221,5,96,0,0,221,23,1,0,0,0,222,223,5,14,0,0,
223,224,5,94,0,0,224,225,5,96,0,0,225,226,5,94,0,0,226,227,5,96,0,0,227,
228,5,94,0,0,228,229,5,95,0,0,229,230,5,94,0,0,230,231,5,95,0,0,231,25,1,
0,0,0,232,233,5,15,0,0,233,234,5,94,0,0,234,235,5,95,0,0,235,236,5,94,0,
0,236,237,5,95,0,0,237,27,1,0,0,0,238,239,5,16,0,0,239,240,5,94,0,0,240,
241,7,2,0,0,241,29,1,0,0,0,242,243,5,24,0,0,243,246,5,94,0,0,244,247,3,32,
16,0,245,247,5,25,0,0,246,244,1,0,0,0,246,245,1,0,0,0,247,31,1,0,0,0,248,
249,5,26,0,0,249,250,5,94,0,0,250,251,5,27,0,0,251,252,5,94,0,0,252,253,
7,3,0,0,253,33,1,0,0,0,254,255,5,40,0,0,255,256,5,94,0,0,256,257,3,36,18,
0,257,35,1,0,0,0,258,259,3,38,19,0,259,37,1,0,0,0,260,261,5,41,0,0,261,262,
5,94,0,0,262,263,3,40,20,0,263,39,1,0,0,0,264,267,3,42,21,0,265,267,3,44,
22,0,266,264,1,0,0,0,266,265,1,0,0,0,267,41,1,0,0,0,268,269,5,42,0,0,269,
270,5,94,0,0,270,271,5,95,0,0,271,272,5,94,0,0,272,273,5,95,0,0,273,274,
5,94,0,0,274,289,5,95,0,0,275,276,5,42,0,0,276,277,5,94,0,0,277,278,5,95,
0,0,278,279,5,94,0,0,279,280,5,95,0,0,280,281,5,94,0,0,281,282,5,95,0,0,
282,283,5,94,0,0,283,284,5,95,0,0,284,285,5,94,0,0,285,286,5,95,0,0,286,
287,5,94,0,0,287,289,5,95,0,0,288,268,1,0,0,0,288,275,1,0,0,0,289,43,1,0,
0,0,290,291,5,43,0,0,291,292,5,94,0,0,292,293,5,95,0,0,293,294,5,94,0,0,
294,295,5,95,0,0,295,296,5,94,0,0,296,297,5,95,0,0,297,45,1,0,0,0,298,299,
5,44,0,0,299,300,5,94,0,0,300,301,5,95,0,0,301,302,5,94,0,0,302,303,5,95,
0,0,303,304,5,94,0,0,304,305,5,95,0,0,305,306,5,94,0,0,306,307,5,95,0,0,
307,47,1,0,0,0,308,309,5,45,0,0,309,313,5,94,0,0,310,314,3,50,25,0,311,314,
3,28,14,0,312,314,3,54,27,0,313,310,1,0,0,0,313,311,1,0,0,0,313,312,1,0,
0,0,314,49,1,0,0,0,315,316,5,46,0,0,316,320,5,94,0,0,317,321,3,52,26,0,318,
321,5,47,0,0,319,321,5,48,0,0,320,317,1,0,0,0,320,318,1,0,0,0,320,319,1,
0,0,0,321,51,1,0,0,0,322,326,5,95,0,0,323,325,5,96,0,0,324,323,1,0,0,0,325,
328,1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,53,1,0,0,0,328,326,1,0,0,
0,329,330,5,49,0,0,330,331,5,94,0,0,331,332,7,4,0,0,332,55,1,0,0,0,333,334,
5,53,0,0,334,337,5,94,0,0,335,338,3,78,39,0,336,338,3,58,29,0,337,335,1,
0,0,0,337,336,1,0,0,0,338,57,1,0,0,0,339,340,5,54,0,0,340,343,5,94,0,0,341,
344,3,60,30,0,342,344,3,62,31,0,343,341,1,0,0,0,343,342,1,0,0,0,344,59,1,
0,0,0,345,346,5,55,0,0,346,347,5,94,0,0,347,348,7,5,0,0,348,61,1,0,0,0,349,
350,5,58,0,0,350,353,5,94,0,0,351,354,3,64,32,0,352,354,3,76,38,0,353,351,
1,0,0,0,353,352,1,0,0,0,354,63,1,0,0,0,355,356,5,59,0,0,356,359,5,94,0,0,
357,360,3,66,33,0,358,360,3,68,34,0,359,357,1,0,0,0,359,358,1,0,0,0,360,
65,1,0,0,0,361,362,5,60,0,0,362,363,5,94,0,0,363,364,5,61,0,0,364,67,1,0,
0,0,365,366,5,62,0,0,366,370,5,94,0,0,367,371,3,72,36,0,368,371,3,70,35,
0,369,371,3,74,37,0,370,367,1,0,0,0,370,368,1,0,0,0,370,369,1,0,0,0,371,
69,1,0,0,0,372,373,5,63,0,0,373,374,5,94,0,0,374,375,7,6,0,0,375,71,1,0,
0,0,376,377,5,50,0,0,377,378,5,94,0,0,378,379,7,6,0,0,379,73,1,0,0,0,380,
381,5,67,0,0,381,382,5,94,0,0,382,383,7,6,0,0,383,75,1,0,0,0,384,385,5,68,
0,0,385,386,5,94,0,0,386,387,7,7,0,0,387,77,1,0,0,0,388,389,5,71,0,0,389,
395,5,94,0,0,390,396,5,72,0,0,391,396,5,73,0,0,392,396,5,74,0,0,393,396,
3,80,40,0,394,396,3,82,41,0,395,390,1,0,0,0,395,391,1,0,0,0,395,392,1,0,
0,0,395,393,1,0,0,0,395,394,1,0,0,0,396,79,1,0,0,0,397,398,5,75,0,0,398,
399,5,94,0,0,399,400,5,72,0,0,400,81,1,0,0,0,401,402,5,76,0,0,402,403,5,
94,0,0,403,404,7,8,0,0,404,83,1,0,0,0,405,406,7,9,0,0,406,85,1,0,0,0,18,
89,94,96,104,113,130,246,266,288,313,320,326,337,343,353,359,370,395];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class scenarioParser extends antlr4.Parser {

    static grammarFileName = "scenario.g4";
    static literalNames = [ null, "' '", "'\\t'", "'simulation'", "'json'", 
                            "'meteo'", "'arome'", "'arpege'", "'image'", 
                            "'text'", "'image3D'", "'audio'", "'video'", 
                            "'speech'", "'video3D'", "'fireworks'", "'vector'", 
                            "'depare'", "'hrbare'", "'resare'", "'buoyage'", 
                            "'staticLight'", "'dynamicLight'", "'wrecks'", 
                            "'navigation'", "'avurnav'", "'pilotchart'", 
                            "'NAC'", "'1'", "'2'", "'3'", "'4'", "'5'", 
                            "'6'", "'7'", "'8'", "'9'", "'10'", "'11'", 
                            "'12'", "'move'", "'flyTo'", "'camera'", "'ship'", 
                            "'bbox'", "'chart'", "'raster'", "'openSeaMap'", 
                            "'openTopoMap'", "'mbtiles'", "'manche'", "'atlantiqueNord'", 
                            "'egee'", "'layer'", "'oceanography'", "'tides'", 
                            "'type'", "'oceanogram'", "'currents'", "'tidalAtlas'", 
                            "'2D'", "'max'", "'3D'", "'fromveur'", "'surface'", 
                            "'midle'", "'bottom'", "'iroise'", "'forecast'", 
                            "'static'", "'dynamic'", "'bathymetry'", "'emodnet'", 
                            "'gebco'", "'homonim'", "'sonar'", "'litto3D'", 
                            "'saint-barthelemy'", "'saint-martin'", "'guadeloupe'", 
                            "'finistere'", "'languedoc-roussillon'", "'provence'", 
                            "'eparses'", "'mayotte'", "'reunion'", "'normandie'", 
                            "'bretagne'", "'morbihan'", "'rance'", "'corse'", 
                            "'true'", "'false'", null, "','", null, null, 
                            null, null, null, null, null, null, "'*'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "EMPTY_LINE", 
                             "SEP", "NUMBER", "WORD", "TEXT", "SYMBOLES", 
                             "URL", "HOSTNAME", "PORT", "WS", "STAR", "NL" ];
    static ruleNames = [ "scenario", "comment", "command", "simulation", 
                         "json", "meteo", "image", "text", "image3D", "audio", 
                         "video", "speech", "video3D", "fireworks", "vector", 
                         "navigation", "pilotchart", "move", "moveType", 
                         "flyTo", "mobile", "camera", "ship", "bbox", "chart", 
                         "raster", "shom", "mbtiles", "layer", "oceanography", 
                         "tides", "currents", "tidalAtlas", "oceano2D", 
                         "oceano3D", "fromveur", "manche", "iroise", "forecast", 
                         "bathymetry", "sonar", "litto3D", "bool" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = scenarioParser.ruleNames;
        this.literalNames = scenarioParser.literalNames;
        this.symbolicNames = scenarioParser.symbolicNames;
    }



	scenario() {
	    let localctx = new ScenarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, scenarioParser.RULE_scenario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2 || _la===96) {
	            this.state = 86;
	            this.comment();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===93 || _la===103) {
	            this.state = 94;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 103:
	                this.state = 92;
	                this.command();
	                break;
	            case 93:
	                this.state = 93;
	                this.match(scenarioParser.EMPTY_LINE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
	        this.match(scenarioParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, scenarioParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 101;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 107;
	        this.match(scenarioParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, scenarioParser.RULE_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(scenarioParser.STAR);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 110;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.state = 116;
	            this.bbox();
	            break;
	        case 53:
	            this.state = 117;
	            this.layer();
	            break;
	        case 40:
	            this.state = 118;
	            this.move();
	            break;
	        case 24:
	            this.state = 119;
	            this.navigation();
	            break;
	        case 45:
	            this.state = 120;
	            this.chart();
	            break;
	        case 8:
	            this.state = 121;
	            this.image();
	            break;
	        case 9:
	            this.state = 122;
	            this.text();
	            break;
	        case 10:
	            this.state = 123;
	            this.image3D();
	            break;
	        case 11:
	            this.state = 124;
	            this.audio();
	            break;
	        case 12:
	            this.state = 125;
	            this.video();
	            break;
	        case 13:
	            this.state = 126;
	            this.speech();
	            break;
	        case 14:
	            this.state = 127;
	            this.video3D();
	            break;
	        case 15:
	            this.state = 128;
	            this.fireworks();
	            break;
	        case 3:
	            this.state = 129;
	            this.simulation();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simulation() {
	    let localctx = new SimulationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, scenarioParser.RULE_simulation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(scenarioParser.T__2);
	        this.state = 133;
	        this.match(scenarioParser.SEP);

	        this.state = 134;
	        this.json();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	json() {
	    let localctx = new JsonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, scenarioParser.RULE_json);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(scenarioParser.T__3);
	        this.state = 137;
	        this.match(scenarioParser.SEP);
	        this.state = 138;
	        this.match(scenarioParser.WORD);
	        this.state = 139;
	        this.match(scenarioParser.SEP);
	        this.state = 140;
	        this.match(scenarioParser.WORD);
	        this.state = 141;
	        this.match(scenarioParser.SEP);
	        this.state = 142;
	        this.bool();
	        this.state = 143;
	        this.match(scenarioParser.SEP);
	        this.state = 144;
	        this.match(scenarioParser.WORD);
	        this.state = 145;
	        this.match(scenarioParser.SEP);
	        this.state = 146;
	        this.match(scenarioParser.NUMBER);
	        this.state = 147;
	        this.match(scenarioParser.SEP);
	        this.state = 148;
	        this.bool();
	        this.state = 149;
	        this.match(scenarioParser.SEP);
	        this.state = 150;
	        this.bool();
	        this.state = 151;
	        this.match(scenarioParser.SEP);
	        this.state = 152;
	        this.match(scenarioParser.NUMBER);
	        this.state = 153;
	        this.match(scenarioParser.SEP);
	        this.state = 154;
	        this.match(scenarioParser.NUMBER);
	        this.state = 155;
	        this.match(scenarioParser.SEP);
	        this.state = 156;
	        this.match(scenarioParser.NUMBER);
	        this.state = 157;
	        this.match(scenarioParser.SEP);
	        this.state = 158;
	        this.match(scenarioParser.NUMBER);
	        this.state = 159;
	        this.match(scenarioParser.SEP);
	        this.state = 160;
	        this.match(scenarioParser.NUMBER);
	        this.state = 161;
	        this.match(scenarioParser.SEP);
	        this.state = 162;
	        this.meteo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	meteo() {
	    let localctx = new MeteoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, scenarioParser.RULE_meteo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(scenarioParser.T__4);
	        this.state = 165;
	        this.match(scenarioParser.SEP);
	        this.state = 166;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	image() {
	    let localctx = new ImageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, scenarioParser.RULE_image);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(scenarioParser.T__7);
	        this.state = 169;
	        this.match(scenarioParser.SEP);
	        this.state = 170;
	        this.match(scenarioParser.WORD);
	        this.state = 171;
	        this.match(scenarioParser.SEP);
	        this.state = 172;
	        this.match(scenarioParser.WORD);
	        this.state = 173;
	        this.match(scenarioParser.SEP);
	        this.state = 174;
	        this.match(scenarioParser.NUMBER);
	        this.state = 175;
	        this.match(scenarioParser.SEP);
	        this.state = 176;
	        this.match(scenarioParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, scenarioParser.RULE_text);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(scenarioParser.T__8);
	        this.state = 179;
	        this.match(scenarioParser.SEP);
	        this.state = 180;
	        this.match(scenarioParser.WORD);
	        this.state = 181;
	        this.match(scenarioParser.SEP);
	        this.state = 182;
	        this.match(scenarioParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	image3D() {
	    let localctx = new Image3DContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, scenarioParser.RULE_image3D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(scenarioParser.T__9);
	        this.state = 185;
	        this.match(scenarioParser.SEP);
	        this.state = 186;
	        this.match(scenarioParser.WORD);
	        this.state = 187;
	        this.match(scenarioParser.SEP);
	        this.state = 188;
	        this.match(scenarioParser.WORD);
	        this.state = 189;
	        this.match(scenarioParser.SEP);
	        this.state = 190;
	        this.match(scenarioParser.NUMBER);
	        this.state = 191;
	        this.match(scenarioParser.SEP);
	        this.state = 192;
	        this.match(scenarioParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	audio() {
	    let localctx = new AudioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, scenarioParser.RULE_audio);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(scenarioParser.T__10);
	        this.state = 195;
	        this.match(scenarioParser.SEP);
	        this.state = 196;
	        this.match(scenarioParser.WORD);
	        this.state = 197;
	        this.match(scenarioParser.SEP);
	        this.state = 198;
	        this.match(scenarioParser.WORD);
	        this.state = 199;
	        this.match(scenarioParser.SEP);
	        this.state = 200;
	        this.bool();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	video() {
	    let localctx = new VideoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, scenarioParser.RULE_video);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(scenarioParser.T__11);
	        this.state = 203;
	        this.match(scenarioParser.SEP);
	        this.state = 204;
	        this.match(scenarioParser.URL);
	        this.state = 205;
	        this.match(scenarioParser.SEP);
	        this.state = 206;
	        this.match(scenarioParser.WORD);
	        this.state = 207;
	        this.match(scenarioParser.SEP);
	        this.state = 208;
	        this.match(scenarioParser.NUMBER);
	        this.state = 209;
	        this.match(scenarioParser.SEP);
	        this.state = 210;
	        this.match(scenarioParser.NUMBER);
	        this.state = 211;
	        this.match(scenarioParser.SEP);
	        this.state = 212;
	        this.match(scenarioParser.NUMBER);
	        this.state = 213;
	        this.match(scenarioParser.SEP);
	        this.state = 214;
	        this.match(scenarioParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	speech() {
	    let localctx = new SpeechContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, scenarioParser.RULE_speech);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(scenarioParser.T__12);
	        this.state = 217;
	        this.match(scenarioParser.SEP);
	        this.state = 218;
	        this.match(scenarioParser.WORD);
	        this.state = 219;
	        this.match(scenarioParser.SEP);
	        this.state = 220;
	        this.match(scenarioParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	video3D() {
	    let localctx = new Video3DContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, scenarioParser.RULE_video3D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(scenarioParser.T__13);
	        this.state = 223;
	        this.match(scenarioParser.SEP);
	        this.state = 224;
	        this.match(scenarioParser.WORD);
	        this.state = 225;
	        this.match(scenarioParser.SEP);
	        this.state = 226;
	        this.match(scenarioParser.WORD);
	        this.state = 227;
	        this.match(scenarioParser.SEP);
	        this.state = 228;
	        this.match(scenarioParser.NUMBER);
	        this.state = 229;
	        this.match(scenarioParser.SEP);
	        this.state = 230;
	        this.match(scenarioParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fireworks() {
	    let localctx = new FireworksContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, scenarioParser.RULE_fireworks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(scenarioParser.T__14);
	        this.state = 233;
	        this.match(scenarioParser.SEP);
	        this.state = 234;
	        this.match(scenarioParser.NUMBER);
	        this.state = 235;
	        this.match(scenarioParser.SEP);
	        this.state = 236;
	        this.match(scenarioParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	vector() {
	    let localctx = new VectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, scenarioParser.RULE_vector);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(scenarioParser.T__15);
	        this.state = 239;
	        this.match(scenarioParser.SEP);
	        this.state = 240;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16646144) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	navigation() {
	    let localctx = new NavigationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, scenarioParser.RULE_navigation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(scenarioParser.T__23);
	        this.state = 243;
	        this.match(scenarioParser.SEP);
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.state = 244;
	            this.pilotchart();
	            break;
	        case 25:
	            this.state = 245;
	            this.match(scenarioParser.T__24);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pilotchart() {
	    let localctx = new PilotchartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, scenarioParser.RULE_pilotchart);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(scenarioParser.T__25);
	        this.state = 249;
	        this.match(scenarioParser.SEP);
	        this.state = 250;
	        this.match(scenarioParser.T__26);
	        this.state = 251;
	        this.match(scenarioParser.SEP);
	        this.state = 252;
	        _la = this._input.LA(1);
	        if(!(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 4095) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	move() {
	    let localctx = new MoveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, scenarioParser.RULE_move);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(scenarioParser.T__39);
	        this.state = 255;
	        this.match(scenarioParser.SEP);
	        this.state = 256;
	        this.moveType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	moveType() {
	    let localctx = new MoveTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, scenarioParser.RULE_moveType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.flyTo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	flyTo() {
	    let localctx = new FlyToContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, scenarioParser.RULE_flyTo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(scenarioParser.T__40);
	        this.state = 261;
	        this.match(scenarioParser.SEP);
	        this.state = 262;
	        this.mobile();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mobile() {
	    let localctx = new MobileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, scenarioParser.RULE_mobile);
	    try {
	        this.state = 266;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 264;
	            this.camera();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 265;
	            this.ship();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	camera() {
	    let localctx = new CameraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, scenarioParser.RULE_camera);
	    try {
	        this.state = 288;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 268;
	            this.match(scenarioParser.T__41);

	            this.state = 269;
	            this.match(scenarioParser.SEP);
	            this.state = 270;
	            this.match(scenarioParser.NUMBER);
	            this.state = 271;
	            this.match(scenarioParser.SEP);
	            this.state = 272;
	            this.match(scenarioParser.NUMBER);
	            this.state = 273;
	            this.match(scenarioParser.SEP);
	            this.state = 274;
	            this.match(scenarioParser.NUMBER);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 275;
	            this.match(scenarioParser.T__41);

	            this.state = 276;
	            this.match(scenarioParser.SEP);
	            this.state = 277;
	            this.match(scenarioParser.NUMBER);
	            this.state = 278;
	            this.match(scenarioParser.SEP);
	            this.state = 279;
	            this.match(scenarioParser.NUMBER);
	            this.state = 280;
	            this.match(scenarioParser.SEP);
	            this.state = 281;
	            this.match(scenarioParser.NUMBER);
	            this.state = 282;
	            this.match(scenarioParser.SEP);
	            this.state = 283;
	            this.match(scenarioParser.NUMBER);
	            this.state = 284;
	            this.match(scenarioParser.SEP);
	            this.state = 285;
	            this.match(scenarioParser.NUMBER);
	            this.state = 286;
	            this.match(scenarioParser.SEP);
	            this.state = 287;
	            this.match(scenarioParser.NUMBER);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ship() {
	    let localctx = new ShipContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, scenarioParser.RULE_ship);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(scenarioParser.T__42);
	        this.state = 291;
	        this.match(scenarioParser.SEP);
	        this.state = 292;
	        this.match(scenarioParser.NUMBER);
	        this.state = 293;
	        this.match(scenarioParser.SEP);
	        this.state = 294;
	        this.match(scenarioParser.NUMBER);
	        this.state = 295;
	        this.match(scenarioParser.SEP);
	        this.state = 296;
	        this.match(scenarioParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bbox() {
	    let localctx = new BboxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, scenarioParser.RULE_bbox);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.match(scenarioParser.T__43);
	        this.state = 299;
	        this.match(scenarioParser.SEP);
	        this.state = 300;
	        this.match(scenarioParser.NUMBER);
	        this.state = 301;
	        this.match(scenarioParser.SEP);
	        this.state = 302;
	        this.match(scenarioParser.NUMBER);
	        this.state = 303;
	        this.match(scenarioParser.SEP);
	        this.state = 304;
	        this.match(scenarioParser.NUMBER);
	        this.state = 305;
	        this.match(scenarioParser.SEP);
	        this.state = 306;
	        this.match(scenarioParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chart() {
	    let localctx = new ChartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, scenarioParser.RULE_chart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(scenarioParser.T__44);
	        this.state = 309;
	        this.match(scenarioParser.SEP);
	        this.state = 313;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 46:
	            this.state = 310;
	            this.raster();
	            break;
	        case 16:
	            this.state = 311;
	            this.vector();
	            break;
	        case 49:
	            this.state = 312;
	            this.mbtiles();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	raster() {
	    let localctx = new RasterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, scenarioParser.RULE_raster);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.match(scenarioParser.T__45);
	        this.state = 316;
	        this.match(scenarioParser.SEP);
	        this.state = 320;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 95:
	            this.state = 317;
	            this.shom();
	            break;
	        case 47:
	            this.state = 318;
	            this.match(scenarioParser.T__46);
	            break;
	        case 48:
	            this.state = 319;
	            this.match(scenarioParser.T__47);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	shom() {
	    let localctx = new ShomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, scenarioParser.RULE_shom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(scenarioParser.NUMBER);
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===96) {
	            this.state = 323;
	            this.match(scenarioParser.WORD);
	            this.state = 328;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mbtiles() {
	    let localctx = new MbtilesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, scenarioParser.RULE_mbtiles);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 329;
	        this.match(scenarioParser.T__48);
	        this.state = 330;
	        this.match(scenarioParser.SEP);
	        this.state = 331;
	        _la = this._input.LA(1);
	        if(!(((((_la - 50)) & ~0x1f) === 0 && ((1 << (_la - 50)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	layer() {
	    let localctx = new LayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, scenarioParser.RULE_layer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.match(scenarioParser.T__52);
	        this.state = 334;
	        this.match(scenarioParser.SEP);
	        this.state = 337;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 71:
	            this.state = 335;
	            this.bathymetry();
	            break;
	        case 54:
	            this.state = 336;
	            this.oceanography();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oceanography() {
	    let localctx = new OceanographyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, scenarioParser.RULE_oceanography);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.match(scenarioParser.T__53);
	        this.state = 340;
	        this.match(scenarioParser.SEP);
	        this.state = 343;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 55:
	            this.state = 341;
	            this.tides();
	            break;
	        case 58:
	            this.state = 342;
	            this.currents();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tides() {
	    let localctx = new TidesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, scenarioParser.RULE_tides);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this.match(scenarioParser.T__54);
	        this.state = 346;
	        this.match(scenarioParser.SEP);
	        this.state = 347;
	        _la = this._input.LA(1);
	        if(!(_la===56 || _la===57)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	currents() {
	    let localctx = new CurrentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, scenarioParser.RULE_currents);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.match(scenarioParser.T__57);
	        this.state = 350;
	        this.match(scenarioParser.SEP);
	        this.state = 353;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	            this.state = 351;
	            this.tidalAtlas();
	            break;
	        case 68:
	            this.state = 352;
	            this.forecast();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tidalAtlas() {
	    let localctx = new TidalAtlasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, scenarioParser.RULE_tidalAtlas);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(scenarioParser.T__58);
	        this.state = 356;
	        this.match(scenarioParser.SEP);
	        this.state = 359;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	            this.state = 357;
	            this.oceano2D();
	            break;
	        case 62:
	            this.state = 358;
	            this.oceano3D();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oceano2D() {
	    let localctx = new Oceano2DContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, scenarioParser.RULE_oceano2D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.match(scenarioParser.T__59);
	        this.state = 362;
	        this.match(scenarioParser.SEP);
	        this.state = 363;
	        this.match(scenarioParser.T__60);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oceano3D() {
	    let localctx = new Oceano3DContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, scenarioParser.RULE_oceano3D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(scenarioParser.T__61);
	        this.state = 366;
	        this.match(scenarioParser.SEP);
	        this.state = 370;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 50:
	            this.state = 367;
	            this.manche();
	            break;
	        case 63:
	            this.state = 368;
	            this.fromveur();
	            break;
	        case 67:
	            this.state = 369;
	            this.iroise();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fromveur() {
	    let localctx = new FromveurContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, scenarioParser.RULE_fromveur);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(scenarioParser.T__62);
	        this.state = 373;
	        this.match(scenarioParser.SEP);
	        this.state = 374;
	        _la = this._input.LA(1);
	        if(!(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	manche() {
	    let localctx = new MancheContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, scenarioParser.RULE_manche);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(scenarioParser.T__49);
	        this.state = 377;
	        this.match(scenarioParser.SEP);
	        this.state = 378;
	        _la = this._input.LA(1);
	        if(!(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iroise() {
	    let localctx = new IroiseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, scenarioParser.RULE_iroise);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(scenarioParser.T__66);
	        this.state = 381;
	        this.match(scenarioParser.SEP);
	        this.state = 382;
	        _la = this._input.LA(1);
	        if(!(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forecast() {
	    let localctx = new ForecastContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, scenarioParser.RULE_forecast);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.match(scenarioParser.T__67);
	        this.state = 385;
	        this.match(scenarioParser.SEP);
	        this.state = 386;
	        _la = this._input.LA(1);
	        if(!(_la===69 || _la===70)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bathymetry() {
	    let localctx = new BathymetryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, scenarioParser.RULE_bathymetry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
	        this.match(scenarioParser.T__70);
	        this.state = 389;
	        this.match(scenarioParser.SEP);
	        this.state = 395;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 72:
	            this.state = 390;
	            this.match(scenarioParser.T__71);
	            break;
	        case 73:
	            this.state = 391;
	            this.match(scenarioParser.T__72);
	            break;
	        case 74:
	            this.state = 392;
	            this.match(scenarioParser.T__73);
	            break;
	        case 75:
	            this.state = 393;
	            this.sonar();
	            break;
	        case 76:
	            this.state = 394;
	            this.litto3D();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sonar() {
	    let localctx = new SonarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, scenarioParser.RULE_sonar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(scenarioParser.T__74);
	        this.state = 398;
	        this.match(scenarioParser.SEP);
	        this.state = 399;
	        this.match(scenarioParser.T__71);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	litto3D() {
	    let localctx = new Litto3DContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, scenarioParser.RULE_litto3D);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.match(scenarioParser.T__75);
	        this.state = 402;
	        this.match(scenarioParser.SEP);
	        this.state = 403;
	        _la = this._input.LA(1);
	        if(!(((((_la - 50)) & ~0x1f) === 0 && ((1 << (_la - 50)) & 4160888833) !== 0) || ((((_la - 82)) & ~0x1f) === 0 && ((1 << (_la - 82)) & 511) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bool() {
	    let localctx = new BoolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, scenarioParser.RULE_bool);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        _la = this._input.LA(1);
	        if(!(_la===91 || _la===92)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

scenarioParser.EOF = antlr4.Token.EOF;
scenarioParser.T__0 = 1;
scenarioParser.T__1 = 2;
scenarioParser.T__2 = 3;
scenarioParser.T__3 = 4;
scenarioParser.T__4 = 5;
scenarioParser.T__5 = 6;
scenarioParser.T__6 = 7;
scenarioParser.T__7 = 8;
scenarioParser.T__8 = 9;
scenarioParser.T__9 = 10;
scenarioParser.T__10 = 11;
scenarioParser.T__11 = 12;
scenarioParser.T__12 = 13;
scenarioParser.T__13 = 14;
scenarioParser.T__14 = 15;
scenarioParser.T__15 = 16;
scenarioParser.T__16 = 17;
scenarioParser.T__17 = 18;
scenarioParser.T__18 = 19;
scenarioParser.T__19 = 20;
scenarioParser.T__20 = 21;
scenarioParser.T__21 = 22;
scenarioParser.T__22 = 23;
scenarioParser.T__23 = 24;
scenarioParser.T__24 = 25;
scenarioParser.T__25 = 26;
scenarioParser.T__26 = 27;
scenarioParser.T__27 = 28;
scenarioParser.T__28 = 29;
scenarioParser.T__29 = 30;
scenarioParser.T__30 = 31;
scenarioParser.T__31 = 32;
scenarioParser.T__32 = 33;
scenarioParser.T__33 = 34;
scenarioParser.T__34 = 35;
scenarioParser.T__35 = 36;
scenarioParser.T__36 = 37;
scenarioParser.T__37 = 38;
scenarioParser.T__38 = 39;
scenarioParser.T__39 = 40;
scenarioParser.T__40 = 41;
scenarioParser.T__41 = 42;
scenarioParser.T__42 = 43;
scenarioParser.T__43 = 44;
scenarioParser.T__44 = 45;
scenarioParser.T__45 = 46;
scenarioParser.T__46 = 47;
scenarioParser.T__47 = 48;
scenarioParser.T__48 = 49;
scenarioParser.T__49 = 50;
scenarioParser.T__50 = 51;
scenarioParser.T__51 = 52;
scenarioParser.T__52 = 53;
scenarioParser.T__53 = 54;
scenarioParser.T__54 = 55;
scenarioParser.T__55 = 56;
scenarioParser.T__56 = 57;
scenarioParser.T__57 = 58;
scenarioParser.T__58 = 59;
scenarioParser.T__59 = 60;
scenarioParser.T__60 = 61;
scenarioParser.T__61 = 62;
scenarioParser.T__62 = 63;
scenarioParser.T__63 = 64;
scenarioParser.T__64 = 65;
scenarioParser.T__65 = 66;
scenarioParser.T__66 = 67;
scenarioParser.T__67 = 68;
scenarioParser.T__68 = 69;
scenarioParser.T__69 = 70;
scenarioParser.T__70 = 71;
scenarioParser.T__71 = 72;
scenarioParser.T__72 = 73;
scenarioParser.T__73 = 74;
scenarioParser.T__74 = 75;
scenarioParser.T__75 = 76;
scenarioParser.T__76 = 77;
scenarioParser.T__77 = 78;
scenarioParser.T__78 = 79;
scenarioParser.T__79 = 80;
scenarioParser.T__80 = 81;
scenarioParser.T__81 = 82;
scenarioParser.T__82 = 83;
scenarioParser.T__83 = 84;
scenarioParser.T__84 = 85;
scenarioParser.T__85 = 86;
scenarioParser.T__86 = 87;
scenarioParser.T__87 = 88;
scenarioParser.T__88 = 89;
scenarioParser.T__89 = 90;
scenarioParser.T__90 = 91;
scenarioParser.T__91 = 92;
scenarioParser.EMPTY_LINE = 93;
scenarioParser.SEP = 94;
scenarioParser.NUMBER = 95;
scenarioParser.WORD = 96;
scenarioParser.TEXT = 97;
scenarioParser.SYMBOLES = 98;
scenarioParser.URL = 99;
scenarioParser.HOSTNAME = 100;
scenarioParser.PORT = 101;
scenarioParser.WS = 102;
scenarioParser.STAR = 103;
scenarioParser.NL = 104;

scenarioParser.RULE_scenario = 0;
scenarioParser.RULE_comment = 1;
scenarioParser.RULE_command = 2;
scenarioParser.RULE_simulation = 3;
scenarioParser.RULE_json = 4;
scenarioParser.RULE_meteo = 5;
scenarioParser.RULE_image = 6;
scenarioParser.RULE_text = 7;
scenarioParser.RULE_image3D = 8;
scenarioParser.RULE_audio = 9;
scenarioParser.RULE_video = 10;
scenarioParser.RULE_speech = 11;
scenarioParser.RULE_video3D = 12;
scenarioParser.RULE_fireworks = 13;
scenarioParser.RULE_vector = 14;
scenarioParser.RULE_navigation = 15;
scenarioParser.RULE_pilotchart = 16;
scenarioParser.RULE_move = 17;
scenarioParser.RULE_moveType = 18;
scenarioParser.RULE_flyTo = 19;
scenarioParser.RULE_mobile = 20;
scenarioParser.RULE_camera = 21;
scenarioParser.RULE_ship = 22;
scenarioParser.RULE_bbox = 23;
scenarioParser.RULE_chart = 24;
scenarioParser.RULE_raster = 25;
scenarioParser.RULE_shom = 26;
scenarioParser.RULE_mbtiles = 27;
scenarioParser.RULE_layer = 28;
scenarioParser.RULE_oceanography = 29;
scenarioParser.RULE_tides = 30;
scenarioParser.RULE_currents = 31;
scenarioParser.RULE_tidalAtlas = 32;
scenarioParser.RULE_oceano2D = 33;
scenarioParser.RULE_oceano3D = 34;
scenarioParser.RULE_fromveur = 35;
scenarioParser.RULE_manche = 36;
scenarioParser.RULE_iroise = 37;
scenarioParser.RULE_forecast = 38;
scenarioParser.RULE_bathymetry = 39;
scenarioParser.RULE_sonar = 40;
scenarioParser.RULE_litto3D = 41;
scenarioParser.RULE_bool = 42;

class ScenarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_scenario;
    }

	EOF() {
	    return this.getToken(scenarioParser.EOF, 0);
	};

	comment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommentContext);
	    } else {
	        return this.getTypedRuleContext(CommentContext,i);
	    }
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	EMPTY_LINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.EMPTY_LINE);
	    } else {
	        return this.getToken(scenarioParser.EMPTY_LINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterScenario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitScenario(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_comment;
    }

	WORD() {
	    return this.getToken(scenarioParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitComment(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_command;
    }

	STAR() {
	    return this.getToken(scenarioParser.STAR, 0);
	};

	bbox() {
	    return this.getTypedRuleContext(BboxContext,0);
	};

	layer() {
	    return this.getTypedRuleContext(LayerContext,0);
	};

	move() {
	    return this.getTypedRuleContext(MoveContext,0);
	};

	navigation() {
	    return this.getTypedRuleContext(NavigationContext,0);
	};

	chart() {
	    return this.getTypedRuleContext(ChartContext,0);
	};

	image() {
	    return this.getTypedRuleContext(ImageContext,0);
	};

	text() {
	    return this.getTypedRuleContext(TextContext,0);
	};

	image3D() {
	    return this.getTypedRuleContext(Image3DContext,0);
	};

	audio() {
	    return this.getTypedRuleContext(AudioContext,0);
	};

	video() {
	    return this.getTypedRuleContext(VideoContext,0);
	};

	speech() {
	    return this.getTypedRuleContext(SpeechContext,0);
	};

	video3D() {
	    return this.getTypedRuleContext(Video3DContext,0);
	};

	fireworks() {
	    return this.getTypedRuleContext(FireworksContext,0);
	};

	simulation() {
	    return this.getTypedRuleContext(SimulationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitCommand(this);
		}
	}


}



class SimulationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_simulation;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	json() {
	    return this.getTypedRuleContext(JsonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterSimulation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitSimulation(this);
		}
	}


}



class JsonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_json;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.WORD);
	    } else {
	        return this.getToken(scenarioParser.WORD, i);
	    }
	};


	bool = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BoolContext);
	    } else {
	        return this.getTypedRuleContext(BoolContext,i);
	    }
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	meteo() {
	    return this.getTypedRuleContext(MeteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterJson(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitJson(this);
		}
	}


}



class MeteoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_meteo;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMeteo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMeteo(this);
		}
	}


}



class ImageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_image;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.WORD);
	    } else {
	        return this.getToken(scenarioParser.WORD, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterImage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitImage(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_text;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.WORD);
	    } else {
	        return this.getToken(scenarioParser.WORD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitText(this);
		}
	}


}



class Image3DContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_image3D;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.WORD);
	    } else {
	        return this.getToken(scenarioParser.WORD, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterImage3D(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitImage3D(this);
		}
	}


}



class AudioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_audio;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.WORD);
	    } else {
	        return this.getToken(scenarioParser.WORD, i);
	    }
	};


	bool() {
	    return this.getTypedRuleContext(BoolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterAudio(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitAudio(this);
		}
	}


}



class VideoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_video;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	URL() {
	    return this.getToken(scenarioParser.URL, 0);
	};

	WORD() {
	    return this.getToken(scenarioParser.WORD, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterVideo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitVideo(this);
		}
	}


}



class SpeechContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_speech;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.WORD);
	    } else {
	        return this.getToken(scenarioParser.WORD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterSpeech(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitSpeech(this);
		}
	}


}



class Video3DContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_video3D;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.WORD);
	    } else {
	        return this.getToken(scenarioParser.WORD, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterVideo3D(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitVideo3D(this);
		}
	}


}



class FireworksContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_fireworks;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterFireworks(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitFireworks(this);
		}
	}


}



class VectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_vector;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterVector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitVector(this);
		}
	}


}



class NavigationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_navigation;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	pilotchart() {
	    return this.getTypedRuleContext(PilotchartContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterNavigation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitNavigation(this);
		}
	}


}



class PilotchartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_pilotchart;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterPilotchart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitPilotchart(this);
		}
	}


}



class MoveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_move;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	moveType() {
	    return this.getTypedRuleContext(MoveTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMove(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMove(this);
		}
	}


}



class MoveTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_moveType;
    }

	flyTo() {
	    return this.getTypedRuleContext(FlyToContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMoveType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMoveType(this);
		}
	}


}



class FlyToContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_flyTo;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	mobile() {
	    return this.getTypedRuleContext(MobileContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterFlyTo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitFlyTo(this);
		}
	}


}



class MobileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_mobile;
    }

	camera() {
	    return this.getTypedRuleContext(CameraContext,0);
	};

	ship() {
	    return this.getTypedRuleContext(ShipContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMobile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMobile(this);
		}
	}


}



class CameraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_camera;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterCamera(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitCamera(this);
		}
	}


}



class ShipContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_ship;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterShip(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitShip(this);
		}
	}


}



class BboxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_bbox;
    }

	SEP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.SEP);
	    } else {
	        return this.getToken(scenarioParser.SEP, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.NUMBER);
	    } else {
	        return this.getToken(scenarioParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterBbox(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitBbox(this);
		}
	}


}



class ChartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_chart;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	raster() {
	    return this.getTypedRuleContext(RasterContext,0);
	};

	vector() {
	    return this.getTypedRuleContext(VectorContext,0);
	};

	mbtiles() {
	    return this.getTypedRuleContext(MbtilesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterChart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitChart(this);
		}
	}


}



class RasterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_raster;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	shom() {
	    return this.getTypedRuleContext(ShomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterRaster(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitRaster(this);
		}
	}


}



class ShomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_shom;
    }

	NUMBER() {
	    return this.getToken(scenarioParser.NUMBER, 0);
	};

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(scenarioParser.WORD);
	    } else {
	        return this.getToken(scenarioParser.WORD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterShom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitShom(this);
		}
	}


}



class MbtilesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_mbtiles;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMbtiles(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMbtiles(this);
		}
	}


}



class LayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_layer;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	bathymetry() {
	    return this.getTypedRuleContext(BathymetryContext,0);
	};

	oceanography() {
	    return this.getTypedRuleContext(OceanographyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterLayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitLayer(this);
		}
	}


}



class OceanographyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_oceanography;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	tides() {
	    return this.getTypedRuleContext(TidesContext,0);
	};

	currents() {
	    return this.getTypedRuleContext(CurrentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterOceanography(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitOceanography(this);
		}
	}


}



class TidesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_tides;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterTides(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitTides(this);
		}
	}


}



class CurrentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_currents;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	tidalAtlas() {
	    return this.getTypedRuleContext(TidalAtlasContext,0);
	};

	forecast() {
	    return this.getTypedRuleContext(ForecastContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterCurrents(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitCurrents(this);
		}
	}


}



class TidalAtlasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_tidalAtlas;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	oceano2D() {
	    return this.getTypedRuleContext(Oceano2DContext,0);
	};

	oceano3D() {
	    return this.getTypedRuleContext(Oceano3DContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterTidalAtlas(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitTidalAtlas(this);
		}
	}


}



class Oceano2DContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_oceano2D;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterOceano2D(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitOceano2D(this);
		}
	}


}



class Oceano3DContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_oceano3D;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	manche() {
	    return this.getTypedRuleContext(MancheContext,0);
	};

	fromveur() {
	    return this.getTypedRuleContext(FromveurContext,0);
	};

	iroise() {
	    return this.getTypedRuleContext(IroiseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterOceano3D(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitOceano3D(this);
		}
	}


}



class FromveurContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_fromveur;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterFromveur(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitFromveur(this);
		}
	}


}



class MancheContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_manche;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterManche(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitManche(this);
		}
	}


}



class IroiseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_iroise;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterIroise(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitIroise(this);
		}
	}


}



class ForecastContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_forecast;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterForecast(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitForecast(this);
		}
	}


}



class BathymetryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_bathymetry;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	sonar() {
	    return this.getTypedRuleContext(SonarContext,0);
	};

	litto3D() {
	    return this.getTypedRuleContext(Litto3DContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterBathymetry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitBathymetry(this);
		}
	}


}



class SonarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_sonar;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterSonar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitSonar(this);
		}
	}


}



class Litto3DContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_litto3D;
    }

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterLitto3D(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitLitto3D(this);
		}
	}


}



class BoolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_bool;
    }


	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterBool(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitBool(this);
		}
	}


}




scenarioParser.ScenarioContext = ScenarioContext; 
scenarioParser.CommentContext = CommentContext; 
scenarioParser.CommandContext = CommandContext; 
scenarioParser.SimulationContext = SimulationContext; 
scenarioParser.JsonContext = JsonContext; 
scenarioParser.MeteoContext = MeteoContext; 
scenarioParser.ImageContext = ImageContext; 
scenarioParser.TextContext = TextContext; 
scenarioParser.Image3DContext = Image3DContext; 
scenarioParser.AudioContext = AudioContext; 
scenarioParser.VideoContext = VideoContext; 
scenarioParser.SpeechContext = SpeechContext; 
scenarioParser.Video3DContext = Video3DContext; 
scenarioParser.FireworksContext = FireworksContext; 
scenarioParser.VectorContext = VectorContext; 
scenarioParser.NavigationContext = NavigationContext; 
scenarioParser.PilotchartContext = PilotchartContext; 
scenarioParser.MoveContext = MoveContext; 
scenarioParser.MoveTypeContext = MoveTypeContext; 
scenarioParser.FlyToContext = FlyToContext; 
scenarioParser.MobileContext = MobileContext; 
scenarioParser.CameraContext = CameraContext; 
scenarioParser.ShipContext = ShipContext; 
scenarioParser.BboxContext = BboxContext; 
scenarioParser.ChartContext = ChartContext; 
scenarioParser.RasterContext = RasterContext; 
scenarioParser.ShomContext = ShomContext; 
scenarioParser.MbtilesContext = MbtilesContext; 
scenarioParser.LayerContext = LayerContext; 
scenarioParser.OceanographyContext = OceanographyContext; 
scenarioParser.TidesContext = TidesContext; 
scenarioParser.CurrentsContext = CurrentsContext; 
scenarioParser.TidalAtlasContext = TidalAtlasContext; 
scenarioParser.Oceano2DContext = Oceano2DContext; 
scenarioParser.Oceano3DContext = Oceano3DContext; 
scenarioParser.FromveurContext = FromveurContext; 
scenarioParser.MancheContext = MancheContext; 
scenarioParser.IroiseContext = IroiseContext; 
scenarioParser.ForecastContext = ForecastContext; 
scenarioParser.BathymetryContext = BathymetryContext; 
scenarioParser.SonarContext = SonarContext; 
scenarioParser.Litto3DContext = Litto3DContext; 
scenarioParser.BoolContext = BoolContext; 
