// Generated from scenario.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import scenarioListener from './scenarioListener.js';
const serializedATN = [4,1,103,414,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,1,0,5,0,116,8,0,10,0,12,0,119,9,0,1,0,1,0,5,0,123,8,0,10,0,12,0,126,
9,0,1,0,1,0,1,1,5,1,131,8,1,10,1,12,1,134,9,1,1,1,1,1,1,2,1,2,5,2,140,8,
2,10,2,12,2,143,9,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,152,8,2,1,3,1,3,1,3,
1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,
1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,3,
11,191,8,11,1,12,1,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,
3,14,205,8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,17,1,17,1,17,1,17,3,17,255,8,17,1,18,1,18,1,19,1,19,1,20,
1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,26,1,
26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,3,27,286,8,27,1,28,1,28,
1,28,1,28,1,28,1,28,1,28,3,28,295,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,
1,30,1,31,1,31,3,31,307,8,31,1,32,1,32,3,32,311,8,32,1,33,1,33,3,33,315,
8,33,1,34,1,34,1,34,1,34,3,34,321,8,34,1,35,1,35,1,36,1,36,1,37,1,37,1,37,
1,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,3,39,340,8,39,1,40,1,40,
1,40,1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,43,1,43,3,43,356,8,43,
1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,
47,1,47,1,47,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,50,1,50,1,50,3,50,
386,8,50,1,51,1,51,1,51,1,51,1,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,1,54,
1,54,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,0,
0,57,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,106,108,110,112,0,7,1,0,1,2,2,0,19,23,25,25,1,0,87,103,
1,0,68,70,1,0,76,78,1,0,79,85,2,0,9,9,76,76,385,0,117,1,0,0,0,2,132,1,0,
0,0,4,137,1,0,0,0,6,153,1,0,0,0,8,156,1,0,0,0,10,158,1,0,0,0,12,166,1,0,
0,0,14,170,1,0,0,0,16,176,1,0,0,0,18,180,1,0,0,0,20,184,1,0,0,0,22,190,1,
0,0,0,24,192,1,0,0,0,26,196,1,0,0,0,28,198,1,0,0,0,30,206,1,0,0,0,32,228,
1,0,0,0,34,250,1,0,0,0,36,256,1,0,0,0,38,258,1,0,0,0,40,260,1,0,0,0,42,262,
1,0,0,0,44,264,1,0,0,0,46,266,1,0,0,0,48,268,1,0,0,0,50,270,1,0,0,0,52,272,
1,0,0,0,54,280,1,0,0,0,56,287,1,0,0,0,58,296,1,0,0,0,60,300,1,0,0,0,62,306,
1,0,0,0,64,310,1,0,0,0,66,314,1,0,0,0,68,316,1,0,0,0,70,322,1,0,0,0,72,324,
1,0,0,0,74,326,1,0,0,0,76,330,1,0,0,0,78,334,1,0,0,0,80,341,1,0,0,0,82,345,
1,0,0,0,84,349,1,0,0,0,86,355,1,0,0,0,88,357,1,0,0,0,90,359,1,0,0,0,92,361,
1,0,0,0,94,363,1,0,0,0,96,376,1,0,0,0,98,378,1,0,0,0,100,380,1,0,0,0,102,
387,1,0,0,0,104,391,1,0,0,0,106,395,1,0,0,0,108,399,1,0,0,0,110,401,1,0,
0,0,112,403,1,0,0,0,114,116,3,2,1,0,115,114,1,0,0,0,116,119,1,0,0,0,117,
115,1,0,0,0,117,118,1,0,0,0,118,124,1,0,0,0,119,117,1,0,0,0,120,123,3,4,
2,0,121,123,5,5,0,0,122,120,1,0,0,0,122,121,1,0,0,0,123,126,1,0,0,0,124,
122,1,0,0,0,124,125,1,0,0,0,125,127,1,0,0,0,126,124,1,0,0,0,127,128,5,0,
0,1,128,1,1,0,0,0,129,131,7,0,0,0,130,129,1,0,0,0,131,134,1,0,0,0,132,130,
1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,136,5,6,0,0,
136,3,1,0,0,0,137,141,5,17,0,0,138,140,7,0,0,0,139,138,1,0,0,0,140,143,1,
0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,151,1,0,0,0,143,141,1,0,0,0,144,
152,3,112,56,0,145,152,3,54,27,0,146,152,3,94,47,0,147,152,3,100,50,0,148,
152,3,22,11,0,149,152,3,28,14,0,150,152,3,6,3,0,151,144,1,0,0,0,151,145,
1,0,0,0,151,146,1,0,0,0,151,147,1,0,0,0,151,148,1,0,0,0,151,149,1,0,0,0,
151,150,1,0,0,0,152,5,1,0,0,0,153,154,5,17,0,0,154,155,3,8,4,0,155,7,1,0,
0,0,156,157,7,1,0,0,157,9,1,0,0,0,158,159,5,9,0,0,159,160,5,7,0,0,160,161,
5,9,0,0,161,162,5,7,0,0,162,163,5,9,0,0,163,164,5,7,0,0,164,165,5,9,0,0,
165,11,1,0,0,0,166,167,5,19,0,0,167,168,5,7,0,0,168,169,5,26,0,0,169,13,
1,0,0,0,170,171,5,20,0,0,171,172,5,7,0,0,172,173,5,26,0,0,173,174,5,7,0,
0,174,175,3,10,5,0,175,15,1,0,0,0,176,177,5,21,0,0,177,178,5,7,0,0,178,179,
5,26,0,0,179,17,1,0,0,0,180,181,5,22,0,0,181,182,5,7,0,0,182,183,5,26,0,
0,183,19,1,0,0,0,184,185,5,23,0,0,185,186,5,7,0,0,186,187,3,10,5,0,187,21,
1,0,0,0,188,191,3,24,12,0,189,191,5,45,0,0,190,188,1,0,0,0,190,189,1,0,0,
0,191,23,1,0,0,0,192,193,5,44,0,0,193,194,5,7,0,0,194,195,5,46,0,0,195,25,
1,0,0,0,196,197,5,46,0,0,197,27,1,0,0,0,198,199,5,17,0,0,199,200,5,29,0,
0,200,204,5,7,0,0,201,205,3,30,15,0,202,205,3,32,16,0,203,205,3,34,17,0,
204,201,1,0,0,0,204,202,1,0,0,0,204,203,1,0,0,0,205,29,1,0,0,0,206,207,5,
30,0,0,207,208,5,7,0,0,208,209,3,40,20,0,209,210,5,7,0,0,210,211,3,42,21,
0,211,212,5,7,0,0,212,213,3,44,22,0,213,214,5,7,0,0,214,215,3,46,23,0,215,
216,5,7,0,0,216,217,3,48,24,0,217,218,5,7,0,0,218,219,3,44,22,0,219,220,
5,7,0,0,220,221,3,44,22,0,221,222,5,7,0,0,222,223,3,50,25,0,223,224,5,7,
0,0,224,225,3,52,26,0,225,226,5,7,0,0,226,227,3,34,17,0,227,31,1,0,0,0,228,
229,5,31,0,0,229,230,5,7,0,0,230,231,3,40,20,0,231,232,5,7,0,0,232,233,3,
42,21,0,233,234,5,7,0,0,234,235,3,44,22,0,235,236,5,7,0,0,236,237,3,46,23,
0,237,238,5,7,0,0,238,239,3,48,24,0,239,240,5,7,0,0,240,241,3,44,22,0,241,
242,5,7,0,0,242,243,3,44,22,0,243,244,5,7,0,0,244,245,3,50,25,0,245,246,
5,7,0,0,246,247,3,52,26,0,247,248,5,7,0,0,248,249,3,34,17,0,249,33,1,0,0,
0,250,251,5,32,0,0,251,254,5,7,0,0,252,255,3,36,18,0,253,255,3,38,19,0,254,
252,1,0,0,0,254,253,1,0,0,0,255,35,1,0,0,0,256,257,5,33,0,0,257,37,1,0,0,
0,258,259,5,34,0,0,259,39,1,0,0,0,260,261,5,26,0,0,261,41,1,0,0,0,262,263,
5,35,0,0,263,43,1,0,0,0,264,265,5,36,0,0,265,45,1,0,0,0,266,267,5,37,0,0,
267,47,1,0,0,0,268,269,5,38,0,0,269,49,1,0,0,0,270,271,5,39,0,0,271,51,1,
0,0,0,272,273,5,40,0,0,273,274,5,7,0,0,274,275,5,41,0,0,275,276,5,7,0,0,
276,277,5,42,0,0,277,278,5,7,0,0,278,279,5,43,0,0,279,53,1,0,0,0,280,281,
5,17,0,0,281,282,5,48,0,0,282,285,5,7,0,0,283,286,3,56,28,0,284,286,3,62,
31,0,285,283,1,0,0,0,285,284,1,0,0,0,286,55,1,0,0,0,287,288,5,58,0,0,288,
294,5,7,0,0,289,295,5,53,0,0,290,295,5,54,0,0,291,295,5,55,0,0,292,295,3,
58,29,0,293,295,5,57,0,0,294,289,1,0,0,0,294,290,1,0,0,0,294,291,1,0,0,0,
294,292,1,0,0,0,294,293,1,0,0,0,295,57,1,0,0,0,296,297,5,56,0,0,297,298,
5,7,0,0,298,299,5,53,0,0,299,59,1,0,0,0,300,301,5,57,0,0,301,302,5,7,0,0,
302,303,7,2,0,0,303,61,1,0,0,0,304,307,3,64,32,0,305,307,3,66,33,0,306,304,
1,0,0,0,306,305,1,0,0,0,307,63,1,0,0,0,308,311,3,70,35,0,309,311,3,72,36,
0,310,308,1,0,0,0,310,309,1,0,0,0,311,65,1,0,0,0,312,315,3,86,43,0,313,315,
3,68,34,0,314,312,1,0,0,0,314,313,1,0,0,0,315,67,1,0,0,0,316,317,5,62,0,
0,317,320,5,7,0,0,318,321,3,88,44,0,319,321,3,90,45,0,320,318,1,0,0,0,320,
319,1,0,0,0,321,69,1,0,0,0,322,323,5,63,0,0,323,71,1,0,0,0,324,325,5,66,
0,0,325,73,1,0,0,0,326,327,5,3,0,0,327,328,5,7,0,0,328,329,3,76,38,0,329,
75,1,0,0,0,330,331,5,71,0,0,331,332,5,7,0,0,332,333,3,92,46,0,333,77,1,0,
0,0,334,335,5,4,0,0,335,339,5,7,0,0,336,340,3,80,40,0,337,340,3,82,41,0,
338,340,3,84,42,0,339,336,1,0,0,0,339,337,1,0,0,0,339,338,1,0,0,0,340,79,
1,0,0,0,341,342,5,102,0,0,342,343,5,7,0,0,343,344,3,92,46,0,344,81,1,0,0,
0,345,346,5,103,0,0,346,347,5,7,0,0,347,348,3,92,46,0,348,83,1,0,0,0,349,
350,5,98,0,0,350,351,5,7,0,0,351,352,3,92,46,0,352,85,1,0,0,0,353,356,3,
74,37,0,354,356,3,78,39,0,355,353,1,0,0,0,355,354,1,0,0,0,356,87,1,0,0,0,
357,358,5,64,0,0,358,89,1,0,0,0,359,360,5,65,0,0,360,91,1,0,0,0,361,362,
7,3,0,0,362,93,1,0,0,0,363,364,5,17,0,0,364,365,5,49,0,0,365,366,5,7,0,0,
366,367,5,50,0,0,367,368,5,7,0,0,368,369,5,51,0,0,369,370,5,7,0,0,370,371,
3,96,48,0,371,372,5,7,0,0,372,373,3,96,48,0,373,374,5,7,0,0,374,375,3,98,
49,0,375,95,1,0,0,0,376,377,5,9,0,0,377,97,1,0,0,0,378,379,5,9,0,0,379,99,
1,0,0,0,380,381,5,72,0,0,381,385,5,7,0,0,382,386,3,102,51,0,383,386,3,104,
52,0,384,386,3,106,53,0,385,382,1,0,0,0,385,383,1,0,0,0,385,384,1,0,0,0,
386,101,1,0,0,0,387,388,5,73,0,0,388,389,5,7,0,0,389,390,7,4,0,0,390,103,
1,0,0,0,391,392,5,74,0,0,392,393,5,7,0,0,393,394,7,5,0,0,394,105,1,0,0,0,
395,396,5,75,0,0,396,397,5,7,0,0,397,398,3,108,54,0,398,107,1,0,0,0,399,
400,5,86,0,0,400,109,1,0,0,0,401,402,7,6,0,0,402,111,1,0,0,0,403,404,5,47,
0,0,404,405,5,7,0,0,405,406,5,9,0,0,406,407,5,7,0,0,407,408,5,9,0,0,408,
409,5,7,0,0,409,410,5,9,0,0,410,411,5,7,0,0,411,412,5,9,0,0,412,113,1,0,
0,0,18,117,122,124,132,141,151,190,204,254,285,294,306,310,314,320,339,355,
385];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class scenarioParser extends antlr4.Parser {

    static grammarFileName = "scenario.g4";
    static literalNames = [ null, "' '", "'\\t'", "'2D'", "'3D'", null, 
                            null, "','", null, null, null, null, "'http://'", 
                            "'https://'", null, null, null, "'*'", null, 
                            "'image'", "'image3D'", "'video'", "'video3D'", 
                            "'fireworks'", "'speech'", "'text'", null, null, 
                            "'loop'", "'simulation'", "'gpx'", "'nmea'", 
                            "'meteo'", "'arome'", "'arpege'", null, null, 
                            null, null, null, null, null, null, null, "'pilotchart'", 
                            "'avurnav'", null, "'bbox'", "'layer'", "'move'", 
                            "'flyTo'", "'camera'", "'altimetry'", "'emodnet'", 
                            "'gebco'", "'homonim'", "'sonar'", "'litto3D'", 
                            "'bathymetry'", "'oceanography'", "'tides'", 
                            "'currents'", "'forecast'", "'type'", "'static'", 
                            "'dynamic'", "'oceanogram'", "'tidalAtlas'", 
                            "'surface'", "'middle'", "'bottom'", "'max'", 
                            "'chart'", "'raster'", "'vector'", "'mbtiles'", 
                            "'SHOM'", "'openseaMap'", "'openTopoMap'", "'depare'", 
                            "'hrbare'", "'resare'", "'buoyage'", "'staticLight'", 
                            "'dynamicLight'", "'wrecks'", null, "'Saint-Barthelemy'", 
                            "'Saint-Martin'", "'Guadeloupe'", "'Finistere'", 
                            "'Languedoc-Roussillon'", "'Provence'", "'Eparses'", 
                            "'Mayotte'", "'Reunion'", "'Normandie'", "'Bretagne'", 
                            "'iroise'", "'Morbihan'", "'Rance'", "'Corse'", 
                            "'manche'", "'fromveur'" ];
    static symbolicNames = [ null, null, null, null, null, "EMPTY_LINE", 
                             "CONTENT", "SEP", "SIGN", "NUMBER", "WORD", 
                             "DIGIT", "HTTP", "HTTPS", "PATH", "EXTENSION", 
                             "WS", "STAR", "NL", "IMAGE", "IMAGE3D", "VIDEO", 
                             "VIDEO3D", "FIREWORKS", "SPEECH", "TEXT", "FILENAME", 
                             "TEXT_CONTENT", "LOOP", "SIMULATION", "GPX", 
                             "NMEA", "METEO", "AROME", "ARPEGE", "MODEL", 
                             "BOOLEAN", "AUDIO", "SPEED", "HEIGHT", "R", 
                             "G", "B", "A", "PILOTCHART", "AVURNAV", "NAC", 
                             "BBOX", "LAYER", "MOVE", "FLYTO", "CAMERA", 
                             "ALTIMETRY", "EMODNET", "GEBCO", "HOMONIM", 
                             "SONAR", "LITTO3D", "BATHYMETRY", "OCEANOGRAPHY", 
                             "TIDES", "CURRENTS", "FORECAST", "TYPE", "STATIC", 
                             "DYNAMIC", "OCEANOGRAM", "TIDALATLAS", "SURFACE", 
                             "MIDDLE", "BOTTOM", "MAX", "CHART", "RASTER", 
                             "VECTOR", "MBTILES", "SHOM", "OPEN_SEA_MAP", 
                             "OPEN_TOPO_MAP", "DEPARE", "HRBARE", "RESARE", 
                             "BUOYAGE", "STATIC_LIGHT", "DYNAMIC_LIGHT", 
                             "WRECKS", "NAME", "SAINT_BARTHELEMY", "SAINT_MARTIN", 
                             "GUADELOUPE", "FINISTERE", "LANGUEDOC_ROUSSILLON", 
                             "PROVENCE", "EPARSES", "MAYOTTE", "REUNION", 
                             "NORMANDIE", "BRETAGNE", "IROISE", "MORBIHAN", 
                             "RANCE", "CORSE", "MANCHE", "FROMVEUR" ];
    static ruleNames = [ "scenario", "comment", "command", "multimediaCommand", 
                         "multimediaType", "lonlat", "image", "image3D", 
                         "video", "video3D", "fireworks", "navigationCommand", 
                         "pilotchart", "nac", "simulationCommand", "gpx", 
                         "nmea", "meteo", "arome", "arpege", "filename", 
                         "model", "boolean", "audio", "speed", "height", 
                         "color", "layerCommand", "bathymetry", "sonar", 
                         "litto3D", "oceanography", "tidesCommand", "currentsCommand", 
                         "forecastCommand", "type", "oceanogram", "oceano2D", 
                         "max", "oceano3D", "manche", "fromveur", "iroise", 
                         "tidalAtlas", "staticCommand", "dynamicCommand", 
                         "layer", "moveCommand", "coordinate", "altitude", 
                         "chart", "rasterType", "vectorType", "mbtilesType", 
                         "name", "shom", "bbox" ];

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
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 70) !== 0)) {
	            this.state = 114;
	            this.comment();
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===17) {
	            this.state = 122;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	                this.state = 120;
	                this.command();
	                break;
	            case 5:
	                this.state = 121;
	                this.match(scenarioParser.EMPTY_LINE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 127;
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
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 129;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 135;
	        this.match(scenarioParser.CONTENT);
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
	        this.state = 137;
	        this.match(scenarioParser.STAR);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 138;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 144;
	            this.bbox();
	            break;

	        case 2:
	            this.state = 145;
	            this.layerCommand();
	            break;

	        case 3:
	            this.state = 146;
	            this.moveCommand();
	            break;

	        case 4:
	            this.state = 147;
	            this.chart();
	            break;

	        case 5:
	            this.state = 148;
	            this.navigationCommand();
	            break;

	        case 6:
	            this.state = 149;
	            this.simulationCommand();
	            break;

	        case 7:
	            this.state = 150;
	            this.multimediaCommand();
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



	multimediaCommand() {
	    let localctx = new MultimediaCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, scenarioParser.RULE_multimediaCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(scenarioParser.STAR);
	        this.state = 154;
	        this.multimediaType();
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



	multimediaType() {
	    let localctx = new MultimediaTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, scenarioParser.RULE_multimediaType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 49807360) !== 0))) {
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



	lonlat() {
	    let localctx = new LonlatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, scenarioParser.RULE_lonlat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(scenarioParser.NUMBER);
	        this.state = 159;
	        this.match(scenarioParser.SEP);
	        this.state = 160;
	        this.match(scenarioParser.NUMBER);
	        this.state = 161;
	        this.match(scenarioParser.SEP);
	        this.state = 162;
	        this.match(scenarioParser.NUMBER);
	        this.state = 163;
	        this.match(scenarioParser.SEP);
	        this.state = 164;
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



	image() {
	    let localctx = new ImageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, scenarioParser.RULE_image);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(scenarioParser.IMAGE);
	        this.state = 167;
	        this.match(scenarioParser.SEP);
	        this.state = 168;
	        this.match(scenarioParser.FILENAME);
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
	    this.enterRule(localctx, 14, scenarioParser.RULE_image3D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this.match(scenarioParser.IMAGE3D);
	        this.state = 171;
	        this.match(scenarioParser.SEP);
	        this.state = 172;
	        this.match(scenarioParser.FILENAME);
	        this.state = 173;
	        this.match(scenarioParser.SEP);
	        this.state = 174;
	        this.lonlat();
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
	    this.enterRule(localctx, 16, scenarioParser.RULE_video);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
	        this.match(scenarioParser.VIDEO);
	        this.state = 177;
	        this.match(scenarioParser.SEP);
	        this.state = 178;
	        this.match(scenarioParser.FILENAME);
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
	    this.enterRule(localctx, 18, scenarioParser.RULE_video3D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(scenarioParser.VIDEO3D);
	        this.state = 181;
	        this.match(scenarioParser.SEP);
	        this.state = 182;
	        this.match(scenarioParser.FILENAME);
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
	    this.enterRule(localctx, 20, scenarioParser.RULE_fireworks);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(scenarioParser.FIREWORKS);
	        this.state = 185;
	        this.match(scenarioParser.SEP);
	        this.state = 186;
	        this.lonlat();
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



	navigationCommand() {
	    let localctx = new NavigationCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, scenarioParser.RULE_navigationCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.state = 188;
	            this.pilotchart();
	            break;
	        case 45:
	            this.state = 189;
	            this.match(scenarioParser.AVURNAV);
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
	    this.enterRule(localctx, 24, scenarioParser.RULE_pilotchart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(scenarioParser.PILOTCHART);
	        this.state = 193;
	        this.match(scenarioParser.SEP);
	        this.state = 194;
	        this.match(scenarioParser.NAC);
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



	nac() {
	    let localctx = new NacContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, scenarioParser.RULE_nac);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(scenarioParser.NAC);
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



	simulationCommand() {
	    let localctx = new SimulationCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, scenarioParser.RULE_simulationCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(scenarioParser.STAR);
	        this.state = 199;
	        this.match(scenarioParser.SIMULATION);
	        this.state = 200;
	        this.match(scenarioParser.SEP);
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.state = 201;
	            this.gpx();
	            break;
	        case 31:
	            this.state = 202;
	            this.nmea();
	            break;
	        case 32:
	            this.state = 203;
	            this.meteo();
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



	gpx() {
	    let localctx = new GpxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, scenarioParser.RULE_gpx);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(scenarioParser.GPX);
	        this.state = 207;
	        this.match(scenarioParser.SEP);
	        this.state = 208;
	        this.filename();
	        this.state = 209;
	        this.match(scenarioParser.SEP);
	        this.state = 210;
	        this.model();
	        this.state = 211;
	        this.match(scenarioParser.SEP);
	        this.state = 212;
	        this.boolean_();
	        this.state = 213;
	        this.match(scenarioParser.SEP);
	        this.state = 214;
	        this.audio();
	        this.state = 215;
	        this.match(scenarioParser.SEP);
	        this.state = 216;
	        this.speed();
	        this.state = 217;
	        this.match(scenarioParser.SEP);
	        this.state = 218;
	        this.boolean_();
	        this.state = 219;
	        this.match(scenarioParser.SEP);
	        this.state = 220;
	        this.boolean_();
	        this.state = 221;
	        this.match(scenarioParser.SEP);
	        this.state = 222;
	        this.height();
	        this.state = 223;
	        this.match(scenarioParser.SEP);
	        this.state = 224;
	        this.color();
	        this.state = 225;
	        this.match(scenarioParser.SEP);
	        this.state = 226;
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



	nmea() {
	    let localctx = new NmeaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, scenarioParser.RULE_nmea);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(scenarioParser.NMEA);
	        this.state = 229;
	        this.match(scenarioParser.SEP);
	        this.state = 230;
	        this.filename();
	        this.state = 231;
	        this.match(scenarioParser.SEP);
	        this.state = 232;
	        this.model();
	        this.state = 233;
	        this.match(scenarioParser.SEP);
	        this.state = 234;
	        this.boolean_();
	        this.state = 235;
	        this.match(scenarioParser.SEP);
	        this.state = 236;
	        this.audio();
	        this.state = 237;
	        this.match(scenarioParser.SEP);
	        this.state = 238;
	        this.speed();
	        this.state = 239;
	        this.match(scenarioParser.SEP);
	        this.state = 240;
	        this.boolean_();
	        this.state = 241;
	        this.match(scenarioParser.SEP);
	        this.state = 242;
	        this.boolean_();
	        this.state = 243;
	        this.match(scenarioParser.SEP);
	        this.state = 244;
	        this.height();
	        this.state = 245;
	        this.match(scenarioParser.SEP);
	        this.state = 246;
	        this.color();
	        this.state = 247;
	        this.match(scenarioParser.SEP);
	        this.state = 248;
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
	    this.enterRule(localctx, 34, scenarioParser.RULE_meteo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.match(scenarioParser.METEO);
	        this.state = 251;
	        this.match(scenarioParser.SEP);
	        this.state = 254;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	            this.state = 252;
	            this.arome();
	            break;
	        case 34:
	            this.state = 253;
	            this.arpege();
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



	arome() {
	    let localctx = new AromeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, scenarioParser.RULE_arome);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(scenarioParser.AROME);
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



	arpege() {
	    let localctx = new ArpegeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, scenarioParser.RULE_arpege);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(scenarioParser.ARPEGE);
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



	filename() {
	    let localctx = new FilenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, scenarioParser.RULE_filename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(scenarioParser.FILENAME);
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



	model() {
	    let localctx = new ModelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, scenarioParser.RULE_model);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(scenarioParser.MODEL);
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



	boolean_() {
	    let localctx = new BooleanContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, scenarioParser.RULE_boolean);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(scenarioParser.BOOLEAN);
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
	    this.enterRule(localctx, 46, scenarioParser.RULE_audio);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(scenarioParser.AUDIO);
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



	speed() {
	    let localctx = new SpeedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, scenarioParser.RULE_speed);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(scenarioParser.SPEED);
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



	height() {
	    let localctx = new HeightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, scenarioParser.RULE_height);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(scenarioParser.HEIGHT);
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



	color() {
	    let localctx = new ColorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, scenarioParser.RULE_color);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(scenarioParser.R);
	        this.state = 273;
	        this.match(scenarioParser.SEP);
	        this.state = 274;
	        this.match(scenarioParser.G);
	        this.state = 275;
	        this.match(scenarioParser.SEP);
	        this.state = 276;
	        this.match(scenarioParser.B);
	        this.state = 277;
	        this.match(scenarioParser.SEP);
	        this.state = 278;
	        this.match(scenarioParser.A);
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



	layerCommand() {
	    let localctx = new LayerCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, scenarioParser.RULE_layerCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(scenarioParser.STAR);
	        this.state = 281;
	        this.match(scenarioParser.LAYER);
	        this.state = 282;
	        this.match(scenarioParser.SEP);
	        this.state = 285;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.state = 283;
	            this.bathymetry();
	            break;
	        case 3:
	        case 4:
	        case 62:
	        case 63:
	        case 66:
	            this.state = 284;
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



	bathymetry() {
	    let localctx = new BathymetryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, scenarioParser.RULE_bathymetry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(scenarioParser.BATHYMETRY);
	        this.state = 288;
	        this.match(scenarioParser.SEP);
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.state = 289;
	            this.match(scenarioParser.EMODNET);
	            break;
	        case 54:
	            this.state = 290;
	            this.match(scenarioParser.GEBCO);
	            break;
	        case 55:
	            this.state = 291;
	            this.match(scenarioParser.HOMONIM);
	            break;
	        case 56:
	            this.state = 292;
	            this.sonar();
	            break;
	        case 57:
	            this.state = 293;
	            this.match(scenarioParser.LITTO3D);
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
	    this.enterRule(localctx, 58, scenarioParser.RULE_sonar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(scenarioParser.SONAR);
	        this.state = 297;
	        this.match(scenarioParser.SEP);
	        this.state = 298;
	        this.match(scenarioParser.EMODNET);
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
	    this.enterRule(localctx, 60, scenarioParser.RULE_litto3D);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(scenarioParser.LITTO3D);
	        this.state = 301;
	        this.match(scenarioParser.SEP);
	        this.state = 302;
	        _la = this._input.LA(1);
	        if(!(((((_la - 87)) & ~0x1f) === 0 && ((1 << (_la - 87)) & 131071) !== 0))) {
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



	oceanography() {
	    let localctx = new OceanographyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, scenarioParser.RULE_oceanography);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 63:
	        case 66:
	            this.state = 304;
	            this.tidesCommand();
	            break;
	        case 3:
	        case 4:
	        case 62:
	            this.state = 305;
	            this.currentsCommand();
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



	tidesCommand() {
	    let localctx = new TidesCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, scenarioParser.RULE_tidesCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 63:
	            this.state = 308;
	            this.type();
	            break;
	        case 66:
	            this.state = 309;
	            this.oceanogram();
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



	currentsCommand() {
	    let localctx = new CurrentsCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, scenarioParser.RULE_currentsCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	            this.state = 312;
	            this.tidalAtlas();
	            break;
	        case 62:
	            this.state = 313;
	            this.forecastCommand();
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



	forecastCommand() {
	    let localctx = new ForecastCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, scenarioParser.RULE_forecastCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.match(scenarioParser.FORECAST);
	        this.state = 317;
	        this.match(scenarioParser.SEP);
	        this.state = 320;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 64:
	            this.state = 318;
	            this.staticCommand();
	            break;
	        case 65:
	            this.state = 319;
	            this.dynamicCommand();
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, scenarioParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(scenarioParser.TYPE);
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



	oceanogram() {
	    let localctx = new OceanogramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, scenarioParser.RULE_oceanogram);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(scenarioParser.OCEANOGRAM);
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
	    this.enterRule(localctx, 74, scenarioParser.RULE_oceano2D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this.match(scenarioParser.T__2);
	        this.state = 327;
	        this.match(scenarioParser.SEP);
	        this.state = 328;
	        this.max();
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



	max() {
	    let localctx = new MaxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, scenarioParser.RULE_max);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(scenarioParser.MAX);
	        this.state = 331;
	        this.match(scenarioParser.SEP);
	        this.state = 332;
	        this.layer();
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
	    this.enterRule(localctx, 78, scenarioParser.RULE_oceano3D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.match(scenarioParser.T__3);
	        this.state = 335;
	        this.match(scenarioParser.SEP);
	        this.state = 339;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 102:
	            this.state = 336;
	            this.manche();
	            break;
	        case 103:
	            this.state = 337;
	            this.fromveur();
	            break;
	        case 98:
	            this.state = 338;
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



	manche() {
	    let localctx = new MancheContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, scenarioParser.RULE_manche);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(scenarioParser.MANCHE);
	        this.state = 342;
	        this.match(scenarioParser.SEP);
	        this.state = 343;
	        this.layer();
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
	    this.enterRule(localctx, 82, scenarioParser.RULE_fromveur);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this.match(scenarioParser.FROMVEUR);
	        this.state = 346;
	        this.match(scenarioParser.SEP);
	        this.state = 347;
	        this.layer();
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
	    this.enterRule(localctx, 84, scenarioParser.RULE_iroise);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.match(scenarioParser.IROISE);
	        this.state = 350;
	        this.match(scenarioParser.SEP);
	        this.state = 351;
	        this.layer();
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
	    this.enterRule(localctx, 86, scenarioParser.RULE_tidalAtlas);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 353;
	            this.oceano2D();
	            break;
	        case 4:
	            this.state = 354;
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



	staticCommand() {
	    let localctx = new StaticCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, scenarioParser.RULE_staticCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357;
	        this.match(scenarioParser.STATIC);
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



	dynamicCommand() {
	    let localctx = new DynamicCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, scenarioParser.RULE_dynamicCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this.match(scenarioParser.DYNAMIC);
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
	    this.enterRule(localctx, 92, scenarioParser.RULE_layer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        _la = this._input.LA(1);
	        if(!(((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 7) !== 0))) {
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



	moveCommand() {
	    let localctx = new MoveCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, scenarioParser.RULE_moveCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        this.match(scenarioParser.STAR);
	        this.state = 364;
	        this.match(scenarioParser.MOVE);
	        this.state = 365;
	        this.match(scenarioParser.SEP);
	        this.state = 366;
	        this.match(scenarioParser.FLYTO);
	        this.state = 367;
	        this.match(scenarioParser.SEP);
	        this.state = 368;
	        this.match(scenarioParser.CAMERA);
	        this.state = 369;
	        this.match(scenarioParser.SEP);
	        this.state = 370;
	        this.coordinate();
	        this.state = 371;
	        this.match(scenarioParser.SEP);
	        this.state = 372;
	        this.coordinate();
	        this.state = 373;
	        this.match(scenarioParser.SEP);
	        this.state = 374;
	        this.altitude();
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



	coordinate() {
	    let localctx = new CoordinateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, scenarioParser.RULE_coordinate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
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



	altitude() {
	    let localctx = new AltitudeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, scenarioParser.RULE_altitude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 378;
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
	    this.enterRule(localctx, 100, scenarioParser.RULE_chart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(scenarioParser.CHART);
	        this.state = 381;
	        this.match(scenarioParser.SEP);
	        this.state = 385;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 73:
	            this.state = 382;
	            this.rasterType();
	            break;
	        case 74:
	            this.state = 383;
	            this.vectorType();
	            break;
	        case 75:
	            this.state = 384;
	            this.mbtilesType();
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



	rasterType() {
	    let localctx = new RasterTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, scenarioParser.RULE_rasterType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.match(scenarioParser.RASTER);
	        this.state = 388;
	        this.match(scenarioParser.SEP);
	        this.state = 389;
	        _la = this._input.LA(1);
	        if(!(((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 7) !== 0))) {
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



	vectorType() {
	    let localctx = new VectorTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, scenarioParser.RULE_vectorType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 391;
	        this.match(scenarioParser.VECTOR);
	        this.state = 392;
	        this.match(scenarioParser.SEP);
	        this.state = 393;
	        _la = this._input.LA(1);
	        if(!(((((_la - 79)) & ~0x1f) === 0 && ((1 << (_la - 79)) & 127) !== 0))) {
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



	mbtilesType() {
	    let localctx = new MbtilesTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, scenarioParser.RULE_mbtilesType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(scenarioParser.MBTILES);
	        this.state = 396;
	        this.match(scenarioParser.SEP);
	        this.state = 397;
	        this.name();
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, scenarioParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(scenarioParser.NAME);
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
	    this.enterRule(localctx, 110, scenarioParser.RULE_shom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===76)) {
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



	bbox() {
	    let localctx = new BboxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, scenarioParser.RULE_bbox);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.match(scenarioParser.BBOX);
	        this.state = 404;
	        this.match(scenarioParser.SEP);
	        this.state = 405;
	        this.match(scenarioParser.NUMBER);
	        this.state = 406;
	        this.match(scenarioParser.SEP);
	        this.state = 407;
	        this.match(scenarioParser.NUMBER);
	        this.state = 408;
	        this.match(scenarioParser.SEP);
	        this.state = 409;
	        this.match(scenarioParser.NUMBER);
	        this.state = 410;
	        this.match(scenarioParser.SEP);
	        this.state = 411;
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


}

scenarioParser.EOF = antlr4.Token.EOF;
scenarioParser.T__0 = 1;
scenarioParser.T__1 = 2;
scenarioParser.T__2 = 3;
scenarioParser.T__3 = 4;
scenarioParser.EMPTY_LINE = 5;
scenarioParser.CONTENT = 6;
scenarioParser.SEP = 7;
scenarioParser.SIGN = 8;
scenarioParser.NUMBER = 9;
scenarioParser.WORD = 10;
scenarioParser.DIGIT = 11;
scenarioParser.HTTP = 12;
scenarioParser.HTTPS = 13;
scenarioParser.PATH = 14;
scenarioParser.EXTENSION = 15;
scenarioParser.WS = 16;
scenarioParser.STAR = 17;
scenarioParser.NL = 18;
scenarioParser.IMAGE = 19;
scenarioParser.IMAGE3D = 20;
scenarioParser.VIDEO = 21;
scenarioParser.VIDEO3D = 22;
scenarioParser.FIREWORKS = 23;
scenarioParser.SPEECH = 24;
scenarioParser.TEXT = 25;
scenarioParser.FILENAME = 26;
scenarioParser.TEXT_CONTENT = 27;
scenarioParser.LOOP = 28;
scenarioParser.SIMULATION = 29;
scenarioParser.GPX = 30;
scenarioParser.NMEA = 31;
scenarioParser.METEO = 32;
scenarioParser.AROME = 33;
scenarioParser.ARPEGE = 34;
scenarioParser.MODEL = 35;
scenarioParser.BOOLEAN = 36;
scenarioParser.AUDIO = 37;
scenarioParser.SPEED = 38;
scenarioParser.HEIGHT = 39;
scenarioParser.R = 40;
scenarioParser.G = 41;
scenarioParser.B = 42;
scenarioParser.A = 43;
scenarioParser.PILOTCHART = 44;
scenarioParser.AVURNAV = 45;
scenarioParser.NAC = 46;
scenarioParser.BBOX = 47;
scenarioParser.LAYER = 48;
scenarioParser.MOVE = 49;
scenarioParser.FLYTO = 50;
scenarioParser.CAMERA = 51;
scenarioParser.ALTIMETRY = 52;
scenarioParser.EMODNET = 53;
scenarioParser.GEBCO = 54;
scenarioParser.HOMONIM = 55;
scenarioParser.SONAR = 56;
scenarioParser.LITTO3D = 57;
scenarioParser.BATHYMETRY = 58;
scenarioParser.OCEANOGRAPHY = 59;
scenarioParser.TIDES = 60;
scenarioParser.CURRENTS = 61;
scenarioParser.FORECAST = 62;
scenarioParser.TYPE = 63;
scenarioParser.STATIC = 64;
scenarioParser.DYNAMIC = 65;
scenarioParser.OCEANOGRAM = 66;
scenarioParser.TIDALATLAS = 67;
scenarioParser.SURFACE = 68;
scenarioParser.MIDDLE = 69;
scenarioParser.BOTTOM = 70;
scenarioParser.MAX = 71;
scenarioParser.CHART = 72;
scenarioParser.RASTER = 73;
scenarioParser.VECTOR = 74;
scenarioParser.MBTILES = 75;
scenarioParser.SHOM = 76;
scenarioParser.OPEN_SEA_MAP = 77;
scenarioParser.OPEN_TOPO_MAP = 78;
scenarioParser.DEPARE = 79;
scenarioParser.HRBARE = 80;
scenarioParser.RESARE = 81;
scenarioParser.BUOYAGE = 82;
scenarioParser.STATIC_LIGHT = 83;
scenarioParser.DYNAMIC_LIGHT = 84;
scenarioParser.WRECKS = 85;
scenarioParser.NAME = 86;
scenarioParser.SAINT_BARTHELEMY = 87;
scenarioParser.SAINT_MARTIN = 88;
scenarioParser.GUADELOUPE = 89;
scenarioParser.FINISTERE = 90;
scenarioParser.LANGUEDOC_ROUSSILLON = 91;
scenarioParser.PROVENCE = 92;
scenarioParser.EPARSES = 93;
scenarioParser.MAYOTTE = 94;
scenarioParser.REUNION = 95;
scenarioParser.NORMANDIE = 96;
scenarioParser.BRETAGNE = 97;
scenarioParser.IROISE = 98;
scenarioParser.MORBIHAN = 99;
scenarioParser.RANCE = 100;
scenarioParser.CORSE = 101;
scenarioParser.MANCHE = 102;
scenarioParser.FROMVEUR = 103;

scenarioParser.RULE_scenario = 0;
scenarioParser.RULE_comment = 1;
scenarioParser.RULE_command = 2;
scenarioParser.RULE_multimediaCommand = 3;
scenarioParser.RULE_multimediaType = 4;
scenarioParser.RULE_lonlat = 5;
scenarioParser.RULE_image = 6;
scenarioParser.RULE_image3D = 7;
scenarioParser.RULE_video = 8;
scenarioParser.RULE_video3D = 9;
scenarioParser.RULE_fireworks = 10;
scenarioParser.RULE_navigationCommand = 11;
scenarioParser.RULE_pilotchart = 12;
scenarioParser.RULE_nac = 13;
scenarioParser.RULE_simulationCommand = 14;
scenarioParser.RULE_gpx = 15;
scenarioParser.RULE_nmea = 16;
scenarioParser.RULE_meteo = 17;
scenarioParser.RULE_arome = 18;
scenarioParser.RULE_arpege = 19;
scenarioParser.RULE_filename = 20;
scenarioParser.RULE_model = 21;
scenarioParser.RULE_boolean = 22;
scenarioParser.RULE_audio = 23;
scenarioParser.RULE_speed = 24;
scenarioParser.RULE_height = 25;
scenarioParser.RULE_color = 26;
scenarioParser.RULE_layerCommand = 27;
scenarioParser.RULE_bathymetry = 28;
scenarioParser.RULE_sonar = 29;
scenarioParser.RULE_litto3D = 30;
scenarioParser.RULE_oceanography = 31;
scenarioParser.RULE_tidesCommand = 32;
scenarioParser.RULE_currentsCommand = 33;
scenarioParser.RULE_forecastCommand = 34;
scenarioParser.RULE_type = 35;
scenarioParser.RULE_oceanogram = 36;
scenarioParser.RULE_oceano2D = 37;
scenarioParser.RULE_max = 38;
scenarioParser.RULE_oceano3D = 39;
scenarioParser.RULE_manche = 40;
scenarioParser.RULE_fromveur = 41;
scenarioParser.RULE_iroise = 42;
scenarioParser.RULE_tidalAtlas = 43;
scenarioParser.RULE_staticCommand = 44;
scenarioParser.RULE_dynamicCommand = 45;
scenarioParser.RULE_layer = 46;
scenarioParser.RULE_moveCommand = 47;
scenarioParser.RULE_coordinate = 48;
scenarioParser.RULE_altitude = 49;
scenarioParser.RULE_chart = 50;
scenarioParser.RULE_rasterType = 51;
scenarioParser.RULE_vectorType = 52;
scenarioParser.RULE_mbtilesType = 53;
scenarioParser.RULE_name = 54;
scenarioParser.RULE_shom = 55;
scenarioParser.RULE_bbox = 56;

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

	CONTENT() {
	    return this.getToken(scenarioParser.CONTENT, 0);
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

	layerCommand() {
	    return this.getTypedRuleContext(LayerCommandContext,0);
	};

	moveCommand() {
	    return this.getTypedRuleContext(MoveCommandContext,0);
	};

	chart() {
	    return this.getTypedRuleContext(ChartContext,0);
	};

	navigationCommand() {
	    return this.getTypedRuleContext(NavigationCommandContext,0);
	};

	simulationCommand() {
	    return this.getTypedRuleContext(SimulationCommandContext,0);
	};

	multimediaCommand() {
	    return this.getTypedRuleContext(MultimediaCommandContext,0);
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



class MultimediaCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_multimediaCommand;
    }

	STAR() {
	    return this.getToken(scenarioParser.STAR, 0);
	};

	multimediaType() {
	    return this.getTypedRuleContext(MultimediaTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMultimediaCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMultimediaCommand(this);
		}
	}


}



class MultimediaTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_multimediaType;
    }

	IMAGE() {
	    return this.getToken(scenarioParser.IMAGE, 0);
	};

	IMAGE3D() {
	    return this.getToken(scenarioParser.IMAGE3D, 0);
	};

	VIDEO() {
	    return this.getToken(scenarioParser.VIDEO, 0);
	};

	VIDEO3D() {
	    return this.getToken(scenarioParser.VIDEO3D, 0);
	};

	FIREWORKS() {
	    return this.getToken(scenarioParser.FIREWORKS, 0);
	};

	TEXT() {
	    return this.getToken(scenarioParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMultimediaType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMultimediaType(this);
		}
	}


}



class LonlatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_lonlat;
    }

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
	        listener.enterLonlat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitLonlat(this);
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

	IMAGE() {
	    return this.getToken(scenarioParser.IMAGE, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	FILENAME() {
	    return this.getToken(scenarioParser.FILENAME, 0);
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

	IMAGE3D() {
	    return this.getToken(scenarioParser.IMAGE3D, 0);
	};

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


	FILENAME() {
	    return this.getToken(scenarioParser.FILENAME, 0);
	};

	lonlat() {
	    return this.getTypedRuleContext(LonlatContext,0);
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

	VIDEO() {
	    return this.getToken(scenarioParser.VIDEO, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	FILENAME() {
	    return this.getToken(scenarioParser.FILENAME, 0);
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

	VIDEO3D() {
	    return this.getToken(scenarioParser.VIDEO3D, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	FILENAME() {
	    return this.getToken(scenarioParser.FILENAME, 0);
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

	FIREWORKS() {
	    return this.getToken(scenarioParser.FIREWORKS, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	lonlat() {
	    return this.getTypedRuleContext(LonlatContext,0);
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



class NavigationCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_navigationCommand;
    }

	pilotchart() {
	    return this.getTypedRuleContext(PilotchartContext,0);
	};

	AVURNAV() {
	    return this.getToken(scenarioParser.AVURNAV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterNavigationCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitNavigationCommand(this);
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

	PILOTCHART() {
	    return this.getToken(scenarioParser.PILOTCHART, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	NAC() {
	    return this.getToken(scenarioParser.NAC, 0);
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



class NacContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_nac;
    }

	NAC() {
	    return this.getToken(scenarioParser.NAC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterNac(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitNac(this);
		}
	}


}



class SimulationCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_simulationCommand;
    }

	STAR() {
	    return this.getToken(scenarioParser.STAR, 0);
	};

	SIMULATION() {
	    return this.getToken(scenarioParser.SIMULATION, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	gpx() {
	    return this.getTypedRuleContext(GpxContext,0);
	};

	nmea() {
	    return this.getTypedRuleContext(NmeaContext,0);
	};

	meteo() {
	    return this.getTypedRuleContext(MeteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterSimulationCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitSimulationCommand(this);
		}
	}


}



class GpxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_gpx;
    }

	GPX() {
	    return this.getToken(scenarioParser.GPX, 0);
	};

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


	filename() {
	    return this.getTypedRuleContext(FilenameContext,0);
	};

	model() {
	    return this.getTypedRuleContext(ModelContext,0);
	};

	boolean_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BooleanContext);
	    } else {
	        return this.getTypedRuleContext(BooleanContext,i);
	    }
	};

	audio() {
	    return this.getTypedRuleContext(AudioContext,0);
	};

	speed() {
	    return this.getTypedRuleContext(SpeedContext,0);
	};

	height() {
	    return this.getTypedRuleContext(HeightContext,0);
	};

	color() {
	    return this.getTypedRuleContext(ColorContext,0);
	};

	meteo() {
	    return this.getTypedRuleContext(MeteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterGpx(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitGpx(this);
		}
	}


}



class NmeaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_nmea;
    }

	NMEA() {
	    return this.getToken(scenarioParser.NMEA, 0);
	};

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


	filename() {
	    return this.getTypedRuleContext(FilenameContext,0);
	};

	model() {
	    return this.getTypedRuleContext(ModelContext,0);
	};

	boolean_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BooleanContext);
	    } else {
	        return this.getTypedRuleContext(BooleanContext,i);
	    }
	};

	audio() {
	    return this.getTypedRuleContext(AudioContext,0);
	};

	speed() {
	    return this.getTypedRuleContext(SpeedContext,0);
	};

	height() {
	    return this.getTypedRuleContext(HeightContext,0);
	};

	color() {
	    return this.getTypedRuleContext(ColorContext,0);
	};

	meteo() {
	    return this.getTypedRuleContext(MeteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterNmea(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitNmea(this);
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

	METEO() {
	    return this.getToken(scenarioParser.METEO, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	arome() {
	    return this.getTypedRuleContext(AromeContext,0);
	};

	arpege() {
	    return this.getTypedRuleContext(ArpegeContext,0);
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



class AromeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_arome;
    }

	AROME() {
	    return this.getToken(scenarioParser.AROME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterArome(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitArome(this);
		}
	}


}



class ArpegeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_arpege;
    }

	ARPEGE() {
	    return this.getToken(scenarioParser.ARPEGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterArpege(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitArpege(this);
		}
	}


}



class FilenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_filename;
    }

	FILENAME() {
	    return this.getToken(scenarioParser.FILENAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterFilename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitFilename(this);
		}
	}


}



class ModelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_model;
    }

	MODEL() {
	    return this.getToken(scenarioParser.MODEL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterModel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitModel(this);
		}
	}


}



class BooleanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_boolean;
    }

	BOOLEAN() {
	    return this.getToken(scenarioParser.BOOLEAN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterBoolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitBoolean(this);
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

	AUDIO() {
	    return this.getToken(scenarioParser.AUDIO, 0);
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



class SpeedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_speed;
    }

	SPEED() {
	    return this.getToken(scenarioParser.SPEED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterSpeed(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitSpeed(this);
		}
	}


}



class HeightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_height;
    }

	HEIGHT() {
	    return this.getToken(scenarioParser.HEIGHT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterHeight(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitHeight(this);
		}
	}


}



class ColorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_color;
    }

	R() {
	    return this.getToken(scenarioParser.R, 0);
	};

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


	G() {
	    return this.getToken(scenarioParser.G, 0);
	};

	B() {
	    return this.getToken(scenarioParser.B, 0);
	};

	A() {
	    return this.getToken(scenarioParser.A, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterColor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitColor(this);
		}
	}


}



class LayerCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_layerCommand;
    }

	STAR() {
	    return this.getToken(scenarioParser.STAR, 0);
	};

	LAYER() {
	    return this.getToken(scenarioParser.LAYER, 0);
	};

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
	        listener.enterLayerCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitLayerCommand(this);
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

	BATHYMETRY() {
	    return this.getToken(scenarioParser.BATHYMETRY, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	EMODNET() {
	    return this.getToken(scenarioParser.EMODNET, 0);
	};

	GEBCO() {
	    return this.getToken(scenarioParser.GEBCO, 0);
	};

	HOMONIM() {
	    return this.getToken(scenarioParser.HOMONIM, 0);
	};

	sonar() {
	    return this.getTypedRuleContext(SonarContext,0);
	};

	LITTO3D() {
	    return this.getToken(scenarioParser.LITTO3D, 0);
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

	SONAR() {
	    return this.getToken(scenarioParser.SONAR, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	EMODNET() {
	    return this.getToken(scenarioParser.EMODNET, 0);
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

	LITTO3D() {
	    return this.getToken(scenarioParser.LITTO3D, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	SAINT_BARTHELEMY() {
	    return this.getToken(scenarioParser.SAINT_BARTHELEMY, 0);
	};

	SAINT_MARTIN() {
	    return this.getToken(scenarioParser.SAINT_MARTIN, 0);
	};

	GUADELOUPE() {
	    return this.getToken(scenarioParser.GUADELOUPE, 0);
	};

	FINISTERE() {
	    return this.getToken(scenarioParser.FINISTERE, 0);
	};

	LANGUEDOC_ROUSSILLON() {
	    return this.getToken(scenarioParser.LANGUEDOC_ROUSSILLON, 0);
	};

	PROVENCE() {
	    return this.getToken(scenarioParser.PROVENCE, 0);
	};

	EPARSES() {
	    return this.getToken(scenarioParser.EPARSES, 0);
	};

	MAYOTTE() {
	    return this.getToken(scenarioParser.MAYOTTE, 0);
	};

	REUNION() {
	    return this.getToken(scenarioParser.REUNION, 0);
	};

	NORMANDIE() {
	    return this.getToken(scenarioParser.NORMANDIE, 0);
	};

	BRETAGNE() {
	    return this.getToken(scenarioParser.BRETAGNE, 0);
	};

	IROISE() {
	    return this.getToken(scenarioParser.IROISE, 0);
	};

	MORBIHAN() {
	    return this.getToken(scenarioParser.MORBIHAN, 0);
	};

	RANCE() {
	    return this.getToken(scenarioParser.RANCE, 0);
	};

	CORSE() {
	    return this.getToken(scenarioParser.CORSE, 0);
	};

	MANCHE() {
	    return this.getToken(scenarioParser.MANCHE, 0);
	};

	FROMVEUR() {
	    return this.getToken(scenarioParser.FROMVEUR, 0);
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

	tidesCommand() {
	    return this.getTypedRuleContext(TidesCommandContext,0);
	};

	currentsCommand() {
	    return this.getTypedRuleContext(CurrentsCommandContext,0);
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



class TidesCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_tidesCommand;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	oceanogram() {
	    return this.getTypedRuleContext(OceanogramContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterTidesCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitTidesCommand(this);
		}
	}


}



class CurrentsCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_currentsCommand;
    }

	tidalAtlas() {
	    return this.getTypedRuleContext(TidalAtlasContext,0);
	};

	forecastCommand() {
	    return this.getTypedRuleContext(ForecastCommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterCurrentsCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitCurrentsCommand(this);
		}
	}


}



class ForecastCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_forecastCommand;
    }

	FORECAST() {
	    return this.getToken(scenarioParser.FORECAST, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	staticCommand() {
	    return this.getTypedRuleContext(StaticCommandContext,0);
	};

	dynamicCommand() {
	    return this.getTypedRuleContext(DynamicCommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterForecastCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitForecastCommand(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_type;
    }

	TYPE() {
	    return this.getToken(scenarioParser.TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitType(this);
		}
	}


}



class OceanogramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_oceanogram;
    }

	OCEANOGRAM() {
	    return this.getToken(scenarioParser.OCEANOGRAM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterOceanogram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitOceanogram(this);
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

	max() {
	    return this.getTypedRuleContext(MaxContext,0);
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



class MaxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_max;
    }

	MAX() {
	    return this.getToken(scenarioParser.MAX, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	layer() {
	    return this.getTypedRuleContext(LayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMax(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMax(this);
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

	MANCHE() {
	    return this.getToken(scenarioParser.MANCHE, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	layer() {
	    return this.getTypedRuleContext(LayerContext,0);
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

	FROMVEUR() {
	    return this.getToken(scenarioParser.FROMVEUR, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	layer() {
	    return this.getTypedRuleContext(LayerContext,0);
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

	IROISE() {
	    return this.getToken(scenarioParser.IROISE, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	layer() {
	    return this.getTypedRuleContext(LayerContext,0);
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



class StaticCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_staticCommand;
    }

	STATIC() {
	    return this.getToken(scenarioParser.STATIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterStaticCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitStaticCommand(this);
		}
	}


}



class DynamicCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_dynamicCommand;
    }

	DYNAMIC() {
	    return this.getToken(scenarioParser.DYNAMIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterDynamicCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitDynamicCommand(this);
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

	SURFACE() {
	    return this.getToken(scenarioParser.SURFACE, 0);
	};

	MIDDLE() {
	    return this.getToken(scenarioParser.MIDDLE, 0);
	};

	BOTTOM() {
	    return this.getToken(scenarioParser.BOTTOM, 0);
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



class MoveCommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_moveCommand;
    }

	STAR() {
	    return this.getToken(scenarioParser.STAR, 0);
	};

	MOVE() {
	    return this.getToken(scenarioParser.MOVE, 0);
	};

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


	FLYTO() {
	    return this.getToken(scenarioParser.FLYTO, 0);
	};

	CAMERA() {
	    return this.getToken(scenarioParser.CAMERA, 0);
	};

	coordinate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoordinateContext);
	    } else {
	        return this.getTypedRuleContext(CoordinateContext,i);
	    }
	};

	altitude() {
	    return this.getTypedRuleContext(AltitudeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMoveCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMoveCommand(this);
		}
	}


}



class CoordinateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_coordinate;
    }

	NUMBER() {
	    return this.getToken(scenarioParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterCoordinate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitCoordinate(this);
		}
	}


}



class AltitudeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_altitude;
    }

	NUMBER() {
	    return this.getToken(scenarioParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterAltitude(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitAltitude(this);
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

	CHART() {
	    return this.getToken(scenarioParser.CHART, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	rasterType() {
	    return this.getTypedRuleContext(RasterTypeContext,0);
	};

	vectorType() {
	    return this.getTypedRuleContext(VectorTypeContext,0);
	};

	mbtilesType() {
	    return this.getTypedRuleContext(MbtilesTypeContext,0);
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



class RasterTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_rasterType;
    }

	RASTER() {
	    return this.getToken(scenarioParser.RASTER, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	SHOM() {
	    return this.getToken(scenarioParser.SHOM, 0);
	};

	OPEN_SEA_MAP() {
	    return this.getToken(scenarioParser.OPEN_SEA_MAP, 0);
	};

	OPEN_TOPO_MAP() {
	    return this.getToken(scenarioParser.OPEN_TOPO_MAP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterRasterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitRasterType(this);
		}
	}


}



class VectorTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_vectorType;
    }

	VECTOR() {
	    return this.getToken(scenarioParser.VECTOR, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	DEPARE() {
	    return this.getToken(scenarioParser.DEPARE, 0);
	};

	HRBARE() {
	    return this.getToken(scenarioParser.HRBARE, 0);
	};

	RESARE() {
	    return this.getToken(scenarioParser.RESARE, 0);
	};

	BUOYAGE() {
	    return this.getToken(scenarioParser.BUOYAGE, 0);
	};

	STATIC_LIGHT() {
	    return this.getToken(scenarioParser.STATIC_LIGHT, 0);
	};

	DYNAMIC_LIGHT() {
	    return this.getToken(scenarioParser.DYNAMIC_LIGHT, 0);
	};

	WRECKS() {
	    return this.getToken(scenarioParser.WRECKS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterVectorType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitVectorType(this);
		}
	}


}



class MbtilesTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_mbtilesType;
    }

	MBTILES() {
	    return this.getToken(scenarioParser.MBTILES, 0);
	};

	SEP() {
	    return this.getToken(scenarioParser.SEP, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterMbtilesType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitMbtilesType(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = scenarioParser.RULE_name;
    }

	NAME() {
	    return this.getToken(scenarioParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof scenarioListener ) {
	        listener.exitName(this);
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

	SHOM() {
	    return this.getToken(scenarioParser.SHOM, 0);
	};

	NUMBER() {
	    return this.getToken(scenarioParser.NUMBER, 0);
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

	BBOX() {
	    return this.getToken(scenarioParser.BBOX, 0);
	};

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




scenarioParser.ScenarioContext = ScenarioContext; 
scenarioParser.CommentContext = CommentContext; 
scenarioParser.CommandContext = CommandContext; 
scenarioParser.MultimediaCommandContext = MultimediaCommandContext; 
scenarioParser.MultimediaTypeContext = MultimediaTypeContext; 
scenarioParser.LonlatContext = LonlatContext; 
scenarioParser.ImageContext = ImageContext; 
scenarioParser.Image3DContext = Image3DContext; 
scenarioParser.VideoContext = VideoContext; 
scenarioParser.Video3DContext = Video3DContext; 
scenarioParser.FireworksContext = FireworksContext; 
scenarioParser.NavigationCommandContext = NavigationCommandContext; 
scenarioParser.PilotchartContext = PilotchartContext; 
scenarioParser.NacContext = NacContext; 
scenarioParser.SimulationCommandContext = SimulationCommandContext; 
scenarioParser.GpxContext = GpxContext; 
scenarioParser.NmeaContext = NmeaContext; 
scenarioParser.MeteoContext = MeteoContext; 
scenarioParser.AromeContext = AromeContext; 
scenarioParser.ArpegeContext = ArpegeContext; 
scenarioParser.FilenameContext = FilenameContext; 
scenarioParser.ModelContext = ModelContext; 
scenarioParser.BooleanContext = BooleanContext; 
scenarioParser.AudioContext = AudioContext; 
scenarioParser.SpeedContext = SpeedContext; 
scenarioParser.HeightContext = HeightContext; 
scenarioParser.ColorContext = ColorContext; 
scenarioParser.LayerCommandContext = LayerCommandContext; 
scenarioParser.BathymetryContext = BathymetryContext; 
scenarioParser.SonarContext = SonarContext; 
scenarioParser.Litto3DContext = Litto3DContext; 
scenarioParser.OceanographyContext = OceanographyContext; 
scenarioParser.TidesCommandContext = TidesCommandContext; 
scenarioParser.CurrentsCommandContext = CurrentsCommandContext; 
scenarioParser.ForecastCommandContext = ForecastCommandContext; 
scenarioParser.TypeContext = TypeContext; 
scenarioParser.OceanogramContext = OceanogramContext; 
scenarioParser.Oceano2DContext = Oceano2DContext; 
scenarioParser.MaxContext = MaxContext; 
scenarioParser.Oceano3DContext = Oceano3DContext; 
scenarioParser.MancheContext = MancheContext; 
scenarioParser.FromveurContext = FromveurContext; 
scenarioParser.IroiseContext = IroiseContext; 
scenarioParser.TidalAtlasContext = TidalAtlasContext; 
scenarioParser.StaticCommandContext = StaticCommandContext; 
scenarioParser.DynamicCommandContext = DynamicCommandContext; 
scenarioParser.LayerContext = LayerContext; 
scenarioParser.MoveCommandContext = MoveCommandContext; 
scenarioParser.CoordinateContext = CoordinateContext; 
scenarioParser.AltitudeContext = AltitudeContext; 
scenarioParser.ChartContext = ChartContext; 
scenarioParser.RasterTypeContext = RasterTypeContext; 
scenarioParser.VectorTypeContext = VectorTypeContext; 
scenarioParser.MbtilesTypeContext = MbtilesTypeContext; 
scenarioParser.NameContext = NameContext; 
scenarioParser.ShomContext = ShomContext; 
scenarioParser.BboxContext = BboxContext; 
