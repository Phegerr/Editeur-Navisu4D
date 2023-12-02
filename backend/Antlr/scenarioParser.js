// Generated from scenario.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import scenarioListener from './scenarioListener.js';
const serializedATN = [4,1,71,213,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,5,0,54,8,0,
10,0,12,0,57,9,0,1,0,1,0,5,0,61,8,0,10,0,12,0,64,9,0,1,0,1,0,1,1,5,1,69,
8,1,10,1,12,1,72,9,1,1,1,1,1,1,2,1,2,5,2,78,8,2,10,2,12,2,81,9,2,1,2,1,2,
1,2,1,2,3,2,87,8,2,1,3,1,3,1,3,1,3,3,3,93,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,3,8,113,8,8,1,9,1,9,1,9,1,
9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,145,8,12,1,13,
1,13,1,13,1,13,3,13,151,8,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,
161,8,15,1,16,1,16,1,16,1,16,3,16,167,8,16,1,17,1,17,1,17,1,17,1,18,1,18,
1,18,1,18,1,18,3,18,178,8,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,
1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,
23,203,8,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,0,0,26,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,0,6,1,0,
1,2,1,0,7,18,1,0,27,28,1,0,35,37,1,0,41,42,3,0,34,34,38,39,49,62,206,0,55,
1,0,0,0,2,70,1,0,0,0,4,75,1,0,0,0,6,88,1,0,0,0,8,94,1,0,0,0,10,100,1,0,0,
0,12,104,1,0,0,0,14,106,1,0,0,0,16,112,1,0,0,0,18,114,1,0,0,0,20,122,1,0,
0,0,22,130,1,0,0,0,24,140,1,0,0,0,26,146,1,0,0,0,28,152,1,0,0,0,30,156,1,
0,0,0,32,162,1,0,0,0,34,168,1,0,0,0,36,172,1,0,0,0,38,179,1,0,0,0,40,183,
1,0,0,0,42,187,1,0,0,0,44,191,1,0,0,0,46,195,1,0,0,0,48,204,1,0,0,0,50,208,
1,0,0,0,52,54,3,2,1,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,
0,0,0,56,62,1,0,0,0,57,55,1,0,0,0,58,61,3,4,2,0,59,61,5,63,0,0,60,58,1,0,
0,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,
0,64,62,1,0,0,0,65,66,5,0,0,1,66,1,1,0,0,0,67,69,7,0,0,0,68,67,1,0,0,0,69,
72,1,0,0,0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,70,1,0,0,0,73,74,
5,64,0,0,74,3,1,0,0,0,75,79,5,70,0,0,76,78,7,0,0,0,77,76,1,0,0,0,78,81,1,
0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,86,1,0,0,0,81,79,1,0,0,0,82,87,3,22,
11,0,83,87,3,24,12,0,84,87,3,10,5,0,85,87,3,6,3,0,86,82,1,0,0,0,86,83,1,
0,0,0,86,84,1,0,0,0,86,85,1,0,0,0,87,5,1,0,0,0,88,89,5,3,0,0,89,92,5,65,
0,0,90,93,3,8,4,0,91,93,5,4,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,7,1,0,0,0,
94,95,5,5,0,0,95,96,5,65,0,0,96,97,5,6,0,0,97,98,5,65,0,0,98,99,7,1,0,0,
99,9,1,0,0,0,100,101,5,19,0,0,101,102,5,65,0,0,102,103,3,12,6,0,103,11,1,
0,0,0,104,105,3,14,7,0,105,13,1,0,0,0,106,107,5,20,0,0,107,108,5,65,0,0,
108,109,3,16,8,0,109,15,1,0,0,0,110,113,3,18,9,0,111,113,3,20,10,0,112,110,
1,0,0,0,112,111,1,0,0,0,113,17,1,0,0,0,114,115,5,21,0,0,115,116,5,65,0,0,
116,117,5,67,0,0,117,118,5,65,0,0,118,119,5,67,0,0,119,120,5,65,0,0,120,
121,5,67,0,0,121,19,1,0,0,0,122,123,5,22,0,0,123,124,5,65,0,0,124,125,5,
67,0,0,125,126,5,65,0,0,126,127,5,67,0,0,127,128,5,65,0,0,128,129,5,67,0,
0,129,21,1,0,0,0,130,131,5,23,0,0,131,132,5,65,0,0,132,133,5,67,0,0,133,
134,5,65,0,0,134,135,5,67,0,0,135,136,5,65,0,0,136,137,5,67,0,0,137,138,
5,65,0,0,138,139,5,67,0,0,139,23,1,0,0,0,140,141,5,24,0,0,141,144,5,65,0,
0,142,145,3,46,23,0,143,145,3,26,13,0,144,142,1,0,0,0,144,143,1,0,0,0,145,
25,1,0,0,0,146,147,5,25,0,0,147,150,5,65,0,0,148,151,3,28,14,0,149,151,3,
30,15,0,150,148,1,0,0,0,150,149,1,0,0,0,151,27,1,0,0,0,152,153,5,26,0,0,
153,154,5,65,0,0,154,155,7,2,0,0,155,29,1,0,0,0,156,157,5,29,0,0,157,160,
5,65,0,0,158,161,3,32,16,0,159,161,3,44,22,0,160,158,1,0,0,0,160,159,1,0,
0,0,161,31,1,0,0,0,162,163,5,30,0,0,163,166,5,65,0,0,164,167,3,34,17,0,165,
167,3,36,18,0,166,164,1,0,0,0,166,165,1,0,0,0,167,33,1,0,0,0,168,169,5,31,
0,0,169,170,5,65,0,0,170,171,5,32,0,0,171,35,1,0,0,0,172,173,5,33,0,0,173,
177,5,65,0,0,174,178,3,40,20,0,175,178,3,38,19,0,176,178,3,42,21,0,177,174,
1,0,0,0,177,175,1,0,0,0,177,176,1,0,0,0,178,37,1,0,0,0,179,180,5,34,0,0,
180,181,5,65,0,0,181,182,7,3,0,0,182,39,1,0,0,0,183,184,5,38,0,0,184,185,
5,65,0,0,185,186,7,3,0,0,186,41,1,0,0,0,187,188,5,39,0,0,188,189,5,65,0,
0,189,190,7,3,0,0,190,43,1,0,0,0,191,192,5,40,0,0,192,193,5,65,0,0,193,194,
7,4,0,0,194,45,1,0,0,0,195,196,5,43,0,0,196,202,5,65,0,0,197,203,5,44,0,
0,198,203,5,45,0,0,199,203,5,46,0,0,200,203,3,48,24,0,201,203,3,50,25,0,
202,197,1,0,0,0,202,198,1,0,0,0,202,199,1,0,0,0,202,200,1,0,0,0,202,201,
1,0,0,0,203,47,1,0,0,0,204,205,5,47,0,0,205,206,5,65,0,0,206,207,5,44,0,
0,207,49,1,0,0,0,208,209,5,48,0,0,209,210,5,65,0,0,210,211,7,5,0,0,211,51,
1,0,0,0,14,55,60,62,70,79,86,92,112,144,150,160,166,177,202];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class scenarioParser extends antlr4.Parser {

    static grammarFileName = "scenario.g4";
    static literalNames = [ null, "' '", "'\\t'", "'navigation'", "'avurnav'", 
                            "'pilotchart'", "'NAC'", "'1'", "'2'", "'3'", 
                            "'4'", "'5'", "'6'", "'7'", "'8'", "'9'", "'10'", 
                            "'11'", "'12'", "'move'", "'flyTo'", "'camera'", 
                            "'ship'", "'bbox'", "'layer'", "'oceanography'", 
                            "'tides'", "'type'", "'oceanogram'", "'currents'", 
                            "'tidalAtlas'", "'2D'", "'max'", "'3D'", "'fromveur'", 
                            "'surface'", "'midle'", "'bottom'", "'manche'", 
                            "'iroise'", "'forecast'", "'static'", "'dynamic'", 
                            "'bathymetry'", "'emodnet'", "'gebco'", "'homonim'", 
                            "'sonar'", "'litto3D'", "'saint-barthelemy'", 
                            "'saint-martin'", "'guadeloupe'", "'finistere'", 
                            "'languedoc-roussillon'", "'provence'", "'eparses'", 
                            "'mayotte'", "'reunion'", "'normandie'", "'bretagne'", 
                            "'morbihan'", "'rance'", "'corse'", null, null, 
                            "','", null, null, null, null, "'*'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "EMPTY_LINE", 
                             "CONTENT", "SEP", "SIGN", "NUMBER", "WORD", 
                             "WS", "STAR", "NL" ];
    static ruleNames = [ "scenario", "comment", "command", "navigation", 
                         "pilotchart", "move", "moveType", "flyTo", "mobile", 
                         "camera", "ship", "bbox", "layer", "oceanography", 
                         "tides", "currents", "tidalAtlas", "oceano2D", 
                         "oceano3D", "fromveur", "manche", "iroise", "forecast", 
                         "bathymetry", "sonar", "litto3D" ];

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
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2 || _la===64) {
	            this.state = 52;
	            this.comment();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63 || _la===70) {
	            this.state = 60;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 70:
	                this.state = 58;
	                this.command();
	                break;
	            case 63:
	                this.state = 59;
	                this.match(scenarioParser.EMPTY_LINE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
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
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 67;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 73;
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
	        this.state = 75;
	        this.match(scenarioParser.STAR);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 76;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===2)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.state = 82;
	            this.bbox();
	            break;
	        case 24:
	            this.state = 83;
	            this.layer();
	            break;
	        case 19:
	            this.state = 84;
	            this.move();
	            break;
	        case 3:
	            this.state = 85;
	            this.navigation();
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



	navigation() {
	    let localctx = new NavigationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, scenarioParser.RULE_navigation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(scenarioParser.T__2);
	        this.state = 89;
	        this.match(scenarioParser.SEP);
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 90;
	            this.pilotchart();
	            break;
	        case 4:
	            this.state = 91;
	            this.match(scenarioParser.T__3);
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
	    this.enterRule(localctx, 8, scenarioParser.RULE_pilotchart);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(scenarioParser.T__4);
	        this.state = 95;
	        this.match(scenarioParser.SEP);
	        this.state = 96;
	        this.match(scenarioParser.T__5);
	        this.state = 97;
	        this.match(scenarioParser.SEP);
	        this.state = 98;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 524160) !== 0))) {
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
	    this.enterRule(localctx, 10, scenarioParser.RULE_move);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(scenarioParser.T__18);
	        this.state = 101;
	        this.match(scenarioParser.SEP);
	        this.state = 102;
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
	    this.enterRule(localctx, 12, scenarioParser.RULE_moveType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
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
	    this.enterRule(localctx, 14, scenarioParser.RULE_flyTo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(scenarioParser.T__19);
	        this.state = 107;
	        this.match(scenarioParser.SEP);
	        this.state = 108;
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
	    this.enterRule(localctx, 16, scenarioParser.RULE_mobile);
	    try {
	        this.state = 112;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.camera();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
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
	    this.enterRule(localctx, 18, scenarioParser.RULE_camera);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(scenarioParser.T__20);
	        this.state = 115;
	        this.match(scenarioParser.SEP);
	        this.state = 116;
	        this.match(scenarioParser.NUMBER);
	        this.state = 117;
	        this.match(scenarioParser.SEP);
	        this.state = 118;
	        this.match(scenarioParser.NUMBER);
	        this.state = 119;
	        this.match(scenarioParser.SEP);
	        this.state = 120;
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



	ship() {
	    let localctx = new ShipContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, scenarioParser.RULE_ship);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(scenarioParser.T__21);
	        this.state = 123;
	        this.match(scenarioParser.SEP);
	        this.state = 124;
	        this.match(scenarioParser.NUMBER);
	        this.state = 125;
	        this.match(scenarioParser.SEP);
	        this.state = 126;
	        this.match(scenarioParser.NUMBER);
	        this.state = 127;
	        this.match(scenarioParser.SEP);
	        this.state = 128;
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
	    this.enterRule(localctx, 22, scenarioParser.RULE_bbox);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(scenarioParser.T__22);
	        this.state = 131;
	        this.match(scenarioParser.SEP);
	        this.state = 132;
	        this.match(scenarioParser.NUMBER);
	        this.state = 133;
	        this.match(scenarioParser.SEP);
	        this.state = 134;
	        this.match(scenarioParser.NUMBER);
	        this.state = 135;
	        this.match(scenarioParser.SEP);
	        this.state = 136;
	        this.match(scenarioParser.NUMBER);
	        this.state = 137;
	        this.match(scenarioParser.SEP);
	        this.state = 138;
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



	layer() {
	    let localctx = new LayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, scenarioParser.RULE_layer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.match(scenarioParser.T__23);
	        this.state = 141;
	        this.match(scenarioParser.SEP);
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	            this.state = 142;
	            this.bathymetry();
	            break;
	        case 25:
	            this.state = 143;
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
	    this.enterRule(localctx, 26, scenarioParser.RULE_oceanography);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(scenarioParser.T__24);
	        this.state = 147;
	        this.match(scenarioParser.SEP);
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.state = 148;
	            this.tides();
	            break;
	        case 29:
	            this.state = 149;
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
	    this.enterRule(localctx, 28, scenarioParser.RULE_tides);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(scenarioParser.T__25);
	        this.state = 153;
	        this.match(scenarioParser.SEP);
	        this.state = 154;
	        _la = this._input.LA(1);
	        if(!(_la===27 || _la===28)) {
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
	    this.enterRule(localctx, 30, scenarioParser.RULE_currents);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(scenarioParser.T__28);
	        this.state = 157;
	        this.match(scenarioParser.SEP);
	        this.state = 160;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.state = 158;
	            this.tidalAtlas();
	            break;
	        case 40:
	            this.state = 159;
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
	    this.enterRule(localctx, 32, scenarioParser.RULE_tidalAtlas);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(scenarioParser.T__29);
	        this.state = 163;
	        this.match(scenarioParser.SEP);
	        this.state = 166;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.state = 164;
	            this.oceano2D();
	            break;
	        case 33:
	            this.state = 165;
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
	    this.enterRule(localctx, 34, scenarioParser.RULE_oceano2D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(scenarioParser.T__30);
	        this.state = 169;
	        this.match(scenarioParser.SEP);
	        this.state = 170;
	        this.match(scenarioParser.T__31);
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
	    this.enterRule(localctx, 36, scenarioParser.RULE_oceano3D);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(scenarioParser.T__32);
	        this.state = 173;
	        this.match(scenarioParser.SEP);
	        this.state = 177;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            this.state = 174;
	            this.manche();
	            break;
	        case 34:
	            this.state = 175;
	            this.fromveur();
	            break;
	        case 39:
	            this.state = 176;
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
	    this.enterRule(localctx, 38, scenarioParser.RULE_fromveur);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(scenarioParser.T__33);
	        this.state = 180;
	        this.match(scenarioParser.SEP);
	        this.state = 181;
	        _la = this._input.LA(1);
	        if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 40, scenarioParser.RULE_manche);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(scenarioParser.T__37);
	        this.state = 184;
	        this.match(scenarioParser.SEP);
	        this.state = 185;
	        _la = this._input.LA(1);
	        if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 42, scenarioParser.RULE_iroise);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(scenarioParser.T__38);
	        this.state = 188;
	        this.match(scenarioParser.SEP);
	        this.state = 189;
	        _la = this._input.LA(1);
	        if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 7) !== 0))) {
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
	    this.enterRule(localctx, 44, scenarioParser.RULE_forecast);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(scenarioParser.T__39);
	        this.state = 192;
	        this.match(scenarioParser.SEP);
	        this.state = 193;
	        _la = this._input.LA(1);
	        if(!(_la===41 || _la===42)) {
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
	    this.enterRule(localctx, 46, scenarioParser.RULE_bathymetry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(scenarioParser.T__42);
	        this.state = 196;
	        this.match(scenarioParser.SEP);
	        this.state = 202;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.state = 197;
	            this.match(scenarioParser.T__43);
	            break;
	        case 45:
	            this.state = 198;
	            this.match(scenarioParser.T__44);
	            break;
	        case 46:
	            this.state = 199;
	            this.match(scenarioParser.T__45);
	            break;
	        case 47:
	            this.state = 200;
	            this.sonar();
	            break;
	        case 48:
	            this.state = 201;
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
	    this.enterRule(localctx, 48, scenarioParser.RULE_sonar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(scenarioParser.T__46);
	        this.state = 205;
	        this.match(scenarioParser.SEP);
	        this.state = 206;
	        this.match(scenarioParser.T__43);
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
	    this.enterRule(localctx, 50, scenarioParser.RULE_litto3D);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(scenarioParser.T__47);
	        this.state = 209;
	        this.match(scenarioParser.SEP);
	        this.state = 210;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 536838193) !== 0))) {
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
scenarioParser.EMPTY_LINE = 63;
scenarioParser.CONTENT = 64;
scenarioParser.SEP = 65;
scenarioParser.SIGN = 66;
scenarioParser.NUMBER = 67;
scenarioParser.WORD = 68;
scenarioParser.WS = 69;
scenarioParser.STAR = 70;
scenarioParser.NL = 71;

scenarioParser.RULE_scenario = 0;
scenarioParser.RULE_comment = 1;
scenarioParser.RULE_command = 2;
scenarioParser.RULE_navigation = 3;
scenarioParser.RULE_pilotchart = 4;
scenarioParser.RULE_move = 5;
scenarioParser.RULE_moveType = 6;
scenarioParser.RULE_flyTo = 7;
scenarioParser.RULE_mobile = 8;
scenarioParser.RULE_camera = 9;
scenarioParser.RULE_ship = 10;
scenarioParser.RULE_bbox = 11;
scenarioParser.RULE_layer = 12;
scenarioParser.RULE_oceanography = 13;
scenarioParser.RULE_tides = 14;
scenarioParser.RULE_currents = 15;
scenarioParser.RULE_tidalAtlas = 16;
scenarioParser.RULE_oceano2D = 17;
scenarioParser.RULE_oceano3D = 18;
scenarioParser.RULE_fromveur = 19;
scenarioParser.RULE_manche = 20;
scenarioParser.RULE_iroise = 21;
scenarioParser.RULE_forecast = 22;
scenarioParser.RULE_bathymetry = 23;
scenarioParser.RULE_sonar = 24;
scenarioParser.RULE_litto3D = 25;

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

	layer() {
	    return this.getTypedRuleContext(LayerContext,0);
	};

	move() {
	    return this.getTypedRuleContext(MoveContext,0);
	};

	navigation() {
	    return this.getTypedRuleContext(NavigationContext,0);
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




scenarioParser.ScenarioContext = ScenarioContext; 
scenarioParser.CommentContext = CommentContext; 
scenarioParser.CommandContext = CommandContext; 
scenarioParser.NavigationContext = NavigationContext; 
scenarioParser.PilotchartContext = PilotchartContext; 
scenarioParser.MoveContext = MoveContext; 
scenarioParser.MoveTypeContext = MoveTypeContext; 
scenarioParser.FlyToContext = FlyToContext; 
scenarioParser.MobileContext = MobileContext; 
scenarioParser.CameraContext = CameraContext; 
scenarioParser.ShipContext = ShipContext; 
scenarioParser.BboxContext = BboxContext; 
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
