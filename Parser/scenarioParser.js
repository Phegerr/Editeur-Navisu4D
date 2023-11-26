// Generated from scenario.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import scenarioListener from './scenarioListener.js';
const serializedATN = [4,1,69,236,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,1,0,5,0,68,8,0,10,
0,12,0,71,9,0,1,0,1,0,5,0,75,8,0,10,0,12,0,78,9,0,1,0,1,0,1,1,5,1,83,8,1,
10,1,12,1,86,9,1,1,1,1,1,1,2,1,2,5,2,92,8,2,10,2,12,2,95,9,2,1,2,1,2,1,2,
1,2,3,2,101,8,2,1,3,1,3,1,3,1,3,1,3,3,3,108,8,3,1,4,1,4,3,4,112,8,4,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,3,5,121,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,
1,8,3,8,133,8,8,1,9,1,9,3,9,137,8,9,1,10,1,10,1,10,1,10,3,10,143,8,10,1,
11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,
1,15,1,15,3,15,162,8,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,
1,18,1,18,1,19,1,19,3,19,178,8,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,
1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,25,1,
25,1,26,1,26,1,26,1,26,1,26,3,26,208,8,26,1,27,1,27,1,27,1,27,1,28,1,28,
1,28,1,28,1,29,1,29,1,29,1,29,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,
31,1,31,1,31,1,31,1,32,1,32,1,32,0,0,33,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,0,6,1,0,1,2,
1,0,53,69,1,0,34,36,1,0,42,44,1,0,45,51,2,0,9,9,42,42,224,0,69,1,0,0,0,2,
84,1,0,0,0,4,89,1,0,0,0,6,102,1,0,0,0,8,111,1,0,0,0,10,113,1,0,0,0,12,122,
1,0,0,0,14,126,1,0,0,0,16,132,1,0,0,0,18,136,1,0,0,0,20,138,1,0,0,0,22,144,
1,0,0,0,24,146,1,0,0,0,26,148,1,0,0,0,28,152,1,0,0,0,30,156,1,0,0,0,32,163,
1,0,0,0,34,167,1,0,0,0,36,171,1,0,0,0,38,177,1,0,0,0,40,179,1,0,0,0,42,181,
1,0,0,0,44,183,1,0,0,0,46,185,1,0,0,0,48,198,1,0,0,0,50,200,1,0,0,0,52,202,
1,0,0,0,54,209,1,0,0,0,56,213,1,0,0,0,58,217,1,0,0,0,60,221,1,0,0,0,62,223,
1,0,0,0,64,233,1,0,0,0,66,68,3,2,1,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,
0,0,0,69,70,1,0,0,0,70,76,1,0,0,0,71,69,1,0,0,0,72,75,3,4,2,0,73,75,5,5,
0,0,74,72,1,0,0,0,74,73,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,
0,77,79,1,0,0,0,78,76,1,0,0,0,79,80,5,0,0,1,80,1,1,0,0,0,81,83,7,0,0,0,82,
81,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,0,86,84,
1,0,0,0,87,88,5,6,0,0,88,3,1,0,0,0,89,93,5,11,0,0,90,92,7,0,0,0,91,90,1,
0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,100,1,0,0,0,95,93,1,0,
0,0,96,101,3,62,31,0,97,101,3,6,3,0,98,101,3,46,23,0,99,101,3,52,26,0,100,
96,1,0,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,5,1,0,0,0,102,
103,5,11,0,0,103,104,5,14,0,0,104,107,5,7,0,0,105,108,3,10,5,0,106,108,3,
8,4,0,107,105,1,0,0,0,107,106,1,0,0,0,108,7,1,0,0,0,109,112,3,16,8,0,110,
112,3,18,9,0,111,109,1,0,0,0,111,110,1,0,0,0,112,9,1,0,0,0,113,114,5,24,
0,0,114,120,5,7,0,0,115,121,5,19,0,0,116,121,5,20,0,0,117,121,5,21,0,0,118,
121,3,12,6,0,119,121,5,23,0,0,120,115,1,0,0,0,120,116,1,0,0,0,120,117,1,
0,0,0,120,118,1,0,0,0,120,119,1,0,0,0,121,11,1,0,0,0,122,123,5,22,0,0,123,
124,5,7,0,0,124,125,5,19,0,0,125,13,1,0,0,0,126,127,5,23,0,0,127,128,5,7,
0,0,128,129,7,1,0,0,129,15,1,0,0,0,130,133,3,22,11,0,131,133,3,24,12,0,132,
130,1,0,0,0,132,131,1,0,0,0,133,17,1,0,0,0,134,137,3,38,19,0,135,137,3,20,
10,0,136,134,1,0,0,0,136,135,1,0,0,0,137,19,1,0,0,0,138,139,5,28,0,0,139,
142,5,7,0,0,140,143,3,40,20,0,141,143,3,42,21,0,142,140,1,0,0,0,142,141,
1,0,0,0,143,21,1,0,0,0,144,145,5,29,0,0,145,23,1,0,0,0,146,147,5,32,0,0,
147,25,1,0,0,0,148,149,5,3,0,0,149,150,5,7,0,0,150,151,3,28,14,0,151,27,
1,0,0,0,152,153,5,37,0,0,153,154,5,7,0,0,154,155,3,44,22,0,155,29,1,0,0,
0,156,157,5,4,0,0,157,161,5,7,0,0,158,162,3,32,16,0,159,162,3,34,17,0,160,
162,3,36,18,0,161,158,1,0,0,0,161,159,1,0,0,0,161,160,1,0,0,0,162,31,1,0,
0,0,163,164,5,68,0,0,164,165,5,7,0,0,165,166,3,44,22,0,166,33,1,0,0,0,167,
168,5,69,0,0,168,169,5,7,0,0,169,170,3,44,22,0,170,35,1,0,0,0,171,172,5,
64,0,0,172,173,5,7,0,0,173,174,3,44,22,0,174,37,1,0,0,0,175,178,3,26,13,
0,176,178,3,30,15,0,177,175,1,0,0,0,177,176,1,0,0,0,178,39,1,0,0,0,179,180,
5,30,0,0,180,41,1,0,0,0,181,182,5,31,0,0,182,43,1,0,0,0,183,184,7,2,0,0,
184,45,1,0,0,0,185,186,5,11,0,0,186,187,5,15,0,0,187,188,5,7,0,0,188,189,
5,16,0,0,189,190,5,7,0,0,190,191,5,17,0,0,191,192,5,7,0,0,192,193,3,48,24,
0,193,194,5,7,0,0,194,195,3,48,24,0,195,196,5,7,0,0,196,197,3,50,25,0,197,
47,1,0,0,0,198,199,5,9,0,0,199,49,1,0,0,0,200,201,5,9,0,0,201,51,1,0,0,0,
202,203,5,38,0,0,203,207,5,7,0,0,204,208,3,54,27,0,205,208,3,56,28,0,206,
208,3,58,29,0,207,204,1,0,0,0,207,205,1,0,0,0,207,206,1,0,0,0,208,53,1,0,
0,0,209,210,5,39,0,0,210,211,5,7,0,0,211,212,7,3,0,0,212,55,1,0,0,0,213,
214,5,40,0,0,214,215,5,7,0,0,215,216,7,4,0,0,216,57,1,0,0,0,217,218,5,41,
0,0,218,219,5,7,0,0,219,220,3,64,32,0,220,59,1,0,0,0,221,222,7,5,0,0,222,
61,1,0,0,0,223,224,5,13,0,0,224,225,5,7,0,0,225,226,5,9,0,0,226,227,5,7,
0,0,227,228,5,9,0,0,228,229,5,7,0,0,229,230,5,9,0,0,230,231,5,7,0,0,231,
232,5,9,0,0,232,63,1,0,0,0,233,234,5,52,0,0,234,65,1,0,0,0,15,69,74,76,84,
93,100,107,111,120,132,136,142,161,177,207];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class scenarioParser extends antlr4.Parser {

    static grammarFileName = "scenario.g4";
    static literalNames = [ null, "' '", "'\\t'", "'2D'", "'3D'", null, 
                            null, "','", null, null, null, "'*'", null, 
                            "'bbox'", "'layer'", "'move'", "'flyTo'", "'camera'", 
                            "'altimetry'", "'emodnet'", "'gebco'", "'homonim'", 
                            "'sonar'", "'litto3D'", "'bathymetry'", "'oceanography'", 
                            "'tides'", "'currents'", "'forecast'", "'type'", 
                            "'static'", "'dynamic'", "'oceanogram'", "'tidalAtlas'", 
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
                             "CONTENT", "SEP", "SIGN", "NUMBER", "WS", "STAR", 
                             "NL", "BBOX", "LAYER", "MOVE", "FLYTO", "CAMERA", 
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
    static ruleNames = [ "scenario", "comment", "command", "layerCommand", 
                         "oceanography", "bathymetry", "sonar", "litto3D", 
                         "tidesCommand", "currentsCommand", "forecastCommand", 
                         "type", "oceanogram", "oceano2D", "max", "oceano3D", 
                         "manche", "fromveur", "iroise", "tidalAtlas", "staticCommand", 
                         "dynamicCommand", "layer", "moveCommand", "coordinate", 
                         "altitude", "chart", "rasterType", "vectorType", 
                         "mbtilesType", "shom", "bbox", "name" ];

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
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 70) !== 0)) {
	            this.state = 66;
	            this.comment();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===11) {
	            this.state = 74;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 11:
	                this.state = 72;
	                this.command();
	                break;
	            case 5:
	                this.state = 73;
	                this.match(scenarioParser.EMPTY_LINE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
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
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 81;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 87;
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
	        this.state = 89;
	        this.match(scenarioParser.STAR);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 90;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 96;
	            this.bbox();
	            break;

	        case 2:
	            this.state = 97;
	            this.layerCommand();
	            break;

	        case 3:
	            this.state = 98;
	            this.moveCommand();
	            break;

	        case 4:
	            this.state = 99;
	            this.chart();
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



	layerCommand() {
	    let localctx = new LayerCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, scenarioParser.RULE_layerCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(scenarioParser.STAR);
	        this.state = 103;
	        this.match(scenarioParser.LAYER);
	        this.state = 104;
	        this.match(scenarioParser.SEP);
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.state = 105;
	            this.bathymetry();
	            break;
	        case 3:
	        case 4:
	        case 28:
	        case 29:
	        case 32:
	            this.state = 106;
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
	    this.enterRule(localctx, 8, scenarioParser.RULE_oceanography);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	        case 32:
	            this.state = 109;
	            this.tidesCommand();
	            break;
	        case 3:
	        case 4:
	        case 28:
	            this.state = 110;
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



	bathymetry() {
	    let localctx = new BathymetryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, scenarioParser.RULE_bathymetry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(scenarioParser.BATHYMETRY);
	        this.state = 114;
	        this.match(scenarioParser.SEP);
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.state = 115;
	            this.match(scenarioParser.EMODNET);
	            break;
	        case 20:
	            this.state = 116;
	            this.match(scenarioParser.GEBCO);
	            break;
	        case 21:
	            this.state = 117;
	            this.match(scenarioParser.HOMONIM);
	            break;
	        case 22:
	            this.state = 118;
	            this.sonar();
	            break;
	        case 23:
	            this.state = 119;
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
	    this.enterRule(localctx, 12, scenarioParser.RULE_sonar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(scenarioParser.SONAR);
	        this.state = 123;
	        this.match(scenarioParser.SEP);
	        this.state = 124;
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
	    this.enterRule(localctx, 14, scenarioParser.RULE_litto3D);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(scenarioParser.LITTO3D);
	        this.state = 127;
	        this.match(scenarioParser.SEP);
	        this.state = 128;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 131071) !== 0))) {
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



	tidesCommand() {
	    let localctx = new TidesCommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, scenarioParser.RULE_tidesCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.state = 130;
	            this.type();
	            break;
	        case 32:
	            this.state = 131;
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
	    this.enterRule(localctx, 18, scenarioParser.RULE_currentsCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	            this.state = 134;
	            this.tidalAtlas();
	            break;
	        case 28:
	            this.state = 135;
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
	    this.enterRule(localctx, 20, scenarioParser.RULE_forecastCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(scenarioParser.FORECAST);
	        this.state = 139;
	        this.match(scenarioParser.SEP);
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.state = 140;
	            this.staticCommand();
	            break;
	        case 31:
	            this.state = 141;
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
	    this.enterRule(localctx, 22, scenarioParser.RULE_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
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
	    this.enterRule(localctx, 24, scenarioParser.RULE_oceanogram);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
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
	    this.enterRule(localctx, 26, scenarioParser.RULE_oceano2D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(scenarioParser.T__2);
	        this.state = 149;
	        this.match(scenarioParser.SEP);
	        this.state = 150;
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
	    this.enterRule(localctx, 28, scenarioParser.RULE_max);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(scenarioParser.MAX);
	        this.state = 153;
	        this.match(scenarioParser.SEP);
	        this.state = 154;
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
	    this.enterRule(localctx, 30, scenarioParser.RULE_oceano3D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(scenarioParser.T__3);
	        this.state = 157;
	        this.match(scenarioParser.SEP);
	        this.state = 161;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 68:
	            this.state = 158;
	            this.manche();
	            break;
	        case 69:
	            this.state = 159;
	            this.fromveur();
	            break;
	        case 64:
	            this.state = 160;
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
	    this.enterRule(localctx, 32, scenarioParser.RULE_manche);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(scenarioParser.MANCHE);
	        this.state = 164;
	        this.match(scenarioParser.SEP);
	        this.state = 165;
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
	    this.enterRule(localctx, 34, scenarioParser.RULE_fromveur);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(scenarioParser.FROMVEUR);
	        this.state = 168;
	        this.match(scenarioParser.SEP);
	        this.state = 169;
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
	    this.enterRule(localctx, 36, scenarioParser.RULE_iroise);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(scenarioParser.IROISE);
	        this.state = 172;
	        this.match(scenarioParser.SEP);
	        this.state = 173;
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
	    this.enterRule(localctx, 38, scenarioParser.RULE_tidalAtlas);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 175;
	            this.oceano2D();
	            break;
	        case 4:
	            this.state = 176;
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
	    this.enterRule(localctx, 40, scenarioParser.RULE_staticCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
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
	    this.enterRule(localctx, 42, scenarioParser.RULE_dynamicCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
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
	    this.enterRule(localctx, 44, scenarioParser.RULE_layer);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 46, scenarioParser.RULE_moveCommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(scenarioParser.STAR);
	        this.state = 186;
	        this.match(scenarioParser.MOVE);
	        this.state = 187;
	        this.match(scenarioParser.SEP);
	        this.state = 188;
	        this.match(scenarioParser.FLYTO);
	        this.state = 189;
	        this.match(scenarioParser.SEP);
	        this.state = 190;
	        this.match(scenarioParser.CAMERA);
	        this.state = 191;
	        this.match(scenarioParser.SEP);
	        this.state = 192;
	        this.coordinate();
	        this.state = 193;
	        this.match(scenarioParser.SEP);
	        this.state = 194;
	        this.coordinate();
	        this.state = 195;
	        this.match(scenarioParser.SEP);
	        this.state = 196;
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
	    this.enterRule(localctx, 48, scenarioParser.RULE_coordinate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
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
	    this.enterRule(localctx, 50, scenarioParser.RULE_altitude);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
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
	    this.enterRule(localctx, 52, scenarioParser.RULE_chart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(scenarioParser.CHART);
	        this.state = 203;
	        this.match(scenarioParser.SEP);
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 39:
	            this.state = 204;
	            this.rasterType();
	            break;
	        case 40:
	            this.state = 205;
	            this.vectorType();
	            break;
	        case 41:
	            this.state = 206;
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
	    this.enterRule(localctx, 54, scenarioParser.RULE_rasterType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(scenarioParser.RASTER);
	        this.state = 210;
	        this.match(scenarioParser.SEP);
	        this.state = 211;
	        _la = this._input.LA(1);
	        if(!(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 56, scenarioParser.RULE_vectorType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(scenarioParser.VECTOR);
	        this.state = 214;
	        this.match(scenarioParser.SEP);
	        this.state = 215;
	        _la = this._input.LA(1);
	        if(!(((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 127) !== 0))) {
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
	    this.enterRule(localctx, 58, scenarioParser.RULE_mbtilesType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(scenarioParser.MBTILES);
	        this.state = 218;
	        this.match(scenarioParser.SEP);
	        this.state = 219;
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



	shom() {
	    let localctx = new ShomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, scenarioParser.RULE_shom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===42)) {
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
	    this.enterRule(localctx, 62, scenarioParser.RULE_bbox);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(scenarioParser.BBOX);
	        this.state = 224;
	        this.match(scenarioParser.SEP);
	        this.state = 225;
	        this.match(scenarioParser.NUMBER);
	        this.state = 226;
	        this.match(scenarioParser.SEP);
	        this.state = 227;
	        this.match(scenarioParser.NUMBER);
	        this.state = 228;
	        this.match(scenarioParser.SEP);
	        this.state = 229;
	        this.match(scenarioParser.NUMBER);
	        this.state = 230;
	        this.match(scenarioParser.SEP);
	        this.state = 231;
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, scenarioParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
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
scenarioParser.WS = 10;
scenarioParser.STAR = 11;
scenarioParser.NL = 12;
scenarioParser.BBOX = 13;
scenarioParser.LAYER = 14;
scenarioParser.MOVE = 15;
scenarioParser.FLYTO = 16;
scenarioParser.CAMERA = 17;
scenarioParser.ALTIMETRY = 18;
scenarioParser.EMODNET = 19;
scenarioParser.GEBCO = 20;
scenarioParser.HOMONIM = 21;
scenarioParser.SONAR = 22;
scenarioParser.LITTO3D = 23;
scenarioParser.BATHYMETRY = 24;
scenarioParser.OCEANOGRAPHY = 25;
scenarioParser.TIDES = 26;
scenarioParser.CURRENTS = 27;
scenarioParser.FORECAST = 28;
scenarioParser.TYPE = 29;
scenarioParser.STATIC = 30;
scenarioParser.DYNAMIC = 31;
scenarioParser.OCEANOGRAM = 32;
scenarioParser.TIDALATLAS = 33;
scenarioParser.SURFACE = 34;
scenarioParser.MIDDLE = 35;
scenarioParser.BOTTOM = 36;
scenarioParser.MAX = 37;
scenarioParser.CHART = 38;
scenarioParser.RASTER = 39;
scenarioParser.VECTOR = 40;
scenarioParser.MBTILES = 41;
scenarioParser.SHOM = 42;
scenarioParser.OPEN_SEA_MAP = 43;
scenarioParser.OPEN_TOPO_MAP = 44;
scenarioParser.DEPARE = 45;
scenarioParser.HRBARE = 46;
scenarioParser.RESARE = 47;
scenarioParser.BUOYAGE = 48;
scenarioParser.STATIC_LIGHT = 49;
scenarioParser.DYNAMIC_LIGHT = 50;
scenarioParser.WRECKS = 51;
scenarioParser.NAME = 52;
scenarioParser.SAINT_BARTHELEMY = 53;
scenarioParser.SAINT_MARTIN = 54;
scenarioParser.GUADELOUPE = 55;
scenarioParser.FINISTERE = 56;
scenarioParser.LANGUEDOC_ROUSSILLON = 57;
scenarioParser.PROVENCE = 58;
scenarioParser.EPARSES = 59;
scenarioParser.MAYOTTE = 60;
scenarioParser.REUNION = 61;
scenarioParser.NORMANDIE = 62;
scenarioParser.BRETAGNE = 63;
scenarioParser.IROISE = 64;
scenarioParser.MORBIHAN = 65;
scenarioParser.RANCE = 66;
scenarioParser.CORSE = 67;
scenarioParser.MANCHE = 68;
scenarioParser.FROMVEUR = 69;

scenarioParser.RULE_scenario = 0;
scenarioParser.RULE_comment = 1;
scenarioParser.RULE_command = 2;
scenarioParser.RULE_layerCommand = 3;
scenarioParser.RULE_oceanography = 4;
scenarioParser.RULE_bathymetry = 5;
scenarioParser.RULE_sonar = 6;
scenarioParser.RULE_litto3D = 7;
scenarioParser.RULE_tidesCommand = 8;
scenarioParser.RULE_currentsCommand = 9;
scenarioParser.RULE_forecastCommand = 10;
scenarioParser.RULE_type = 11;
scenarioParser.RULE_oceanogram = 12;
scenarioParser.RULE_oceano2D = 13;
scenarioParser.RULE_max = 14;
scenarioParser.RULE_oceano3D = 15;
scenarioParser.RULE_manche = 16;
scenarioParser.RULE_fromveur = 17;
scenarioParser.RULE_iroise = 18;
scenarioParser.RULE_tidalAtlas = 19;
scenarioParser.RULE_staticCommand = 20;
scenarioParser.RULE_dynamicCommand = 21;
scenarioParser.RULE_layer = 22;
scenarioParser.RULE_moveCommand = 23;
scenarioParser.RULE_coordinate = 24;
scenarioParser.RULE_altitude = 25;
scenarioParser.RULE_chart = 26;
scenarioParser.RULE_rasterType = 27;
scenarioParser.RULE_vectorType = 28;
scenarioParser.RULE_mbtilesType = 29;
scenarioParser.RULE_shom = 30;
scenarioParser.RULE_bbox = 31;
scenarioParser.RULE_name = 32;

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




scenarioParser.ScenarioContext = ScenarioContext; 
scenarioParser.CommentContext = CommentContext; 
scenarioParser.CommandContext = CommandContext; 
scenarioParser.LayerCommandContext = LayerCommandContext; 
scenarioParser.OceanographyContext = OceanographyContext; 
scenarioParser.BathymetryContext = BathymetryContext; 
scenarioParser.SonarContext = SonarContext; 
scenarioParser.Litto3DContext = Litto3DContext; 
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
scenarioParser.ShomContext = ShomContext; 
scenarioParser.BboxContext = BboxContext; 
scenarioParser.NameContext = NameContext; 
