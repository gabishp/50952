// Generated from c:/Users/VICTUS/50952/gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramaticaListener from './gramaticaListener.js';
import gramaticaVisitor from './gramaticaVisitor.js';

const serializedATN = [4,1,12,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,5,0,26,8,0,
10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,39,8,1,1,2,1,2,1,3,
1,3,1,3,1,3,1,3,3,3,48,8,3,1,4,1,4,1,4,3,4,53,8,4,1,4,1,4,1,4,1,5,1,5,1,
6,1,6,1,6,5,6,63,8,6,10,6,12,6,66,9,6,1,7,1,7,3,7,70,8,7,1,8,1,8,1,9,4,9,
75,8,9,11,9,12,9,76,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,
2,1,0,1,6,1,0,8,11,81,0,22,1,0,0,0,2,38,1,0,0,0,4,40,1,0,0,0,6,42,1,0,0,
0,8,52,1,0,0,0,10,57,1,0,0,0,12,59,1,0,0,0,14,69,1,0,0,0,16,71,1,0,0,0,18,
74,1,0,0,0,20,78,1,0,0,0,22,27,3,2,1,0,23,24,5,12,0,0,24,26,3,2,1,0,25,23,
1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,
0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,39,3,4,2,0,33,39,3,6,3,0,34,39,3,8,4,
0,35,39,3,10,5,0,36,39,3,12,6,0,37,39,3,16,8,0,38,32,1,0,0,0,38,33,1,0,0,
0,38,34,1,0,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,3,1,0,0,0,40,
41,3,18,9,0,41,5,1,0,0,0,42,43,3,18,9,0,43,44,5,8,0,0,44,47,3,18,9,0,45,
46,5,9,0,0,46,48,3,18,9,0,47,45,1,0,0,0,47,48,1,0,0,0,48,7,1,0,0,0,49,53,
3,10,5,0,50,53,3,6,3,0,51,53,3,4,2,0,52,49,1,0,0,0,52,50,1,0,0,0,52,51,1,
0,0,0,53,54,1,0,0,0,54,55,5,9,0,0,55,56,3,18,9,0,56,9,1,0,0,0,57,58,5,10,
0,0,58,11,1,0,0,0,59,64,3,14,7,0,60,61,5,11,0,0,61,63,3,14,7,0,62,60,1,0,
0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,13,1,0,0,0,66,64,1,0,0,
0,67,70,3,4,2,0,68,70,3,6,3,0,69,67,1,0,0,0,69,68,1,0,0,0,70,15,1,0,0,0,
71,72,7,0,0,0,72,17,1,0,0,0,73,75,5,7,0,0,74,73,1,0,0,0,75,76,1,0,0,0,76,
74,1,0,0,0,76,77,1,0,0,0,77,19,1,0,0,0,78,79,7,1,0,0,79,21,1,0,0,0,7,27,
38,47,52,64,69,76];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramaticaParser extends antlr4.Parser {

    static grammarFileName = "gramatica.g4";
    static literalNames = [ null, "'@yearly'", "'@monthly'", "'@weekly'", 
                            "'@daily'", "'@hourly'", "'@reboot'", null, 
                            "'-'", "'/'", "'*'", "','" ];
    static symbolicNames = [ null, "YEARLY", "MONTHLY", "WEEKLY", "DAILY", 
                             "HOURLY", "REBOOT", "DIGIT", "GUION", "BARRA", 
                             "ASTERISCO", "COMA", "WS" ];
    static ruleNames = [ "schedule", "time_field", "value", "range", "step", 
                         "wildcard", "list", "item", "predefined", "number", 
                         "special_char" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gramaticaParser.ruleNames;
        this.literalNames = gramaticaParser.literalNames;
        this.symbolicNames = gramaticaParser.symbolicNames;
    }



	schedule() {
	    let localctx = new ScheduleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gramaticaParser.RULE_schedule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.time_field();
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 23;
	            this.match(gramaticaParser.WS);
	            this.state = 24;
	            this.time_field();
	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 30;
	        this.match(gramaticaParser.EOF);
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



	time_field() {
	    let localctx = new Time_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gramaticaParser.RULE_time_field);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.range();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.step();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 35;
	            this.wildcard();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 36;
	            this.list();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 37;
	            this.predefined();
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gramaticaParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.number();
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



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gramaticaParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.number();
	        this.state = 43;
	        this.match(gramaticaParser.GUION);
	        this.state = 44;
	        this.number();
	        this.state = 47;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 45;
	            this.match(gramaticaParser.BARRA);
	            this.state = 46;
	            this.number();

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



	step() {
	    let localctx = new StepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gramaticaParser.RULE_step);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 49;
	            this.wildcard();
	            break;

	        case 2:
	            this.state = 50;
	            this.range();
	            break;

	        case 3:
	            this.state = 51;
	            this.value();
	            break;

	        }
	        this.state = 54;
	        this.match(gramaticaParser.BARRA);
	        this.state = 55;
	        this.number();
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



	wildcard() {
	    let localctx = new WildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gramaticaParser.RULE_wildcard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(gramaticaParser.ASTERISCO);
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



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, gramaticaParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.item();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 60;
	            this.match(gramaticaParser.COMA);
	            this.state = 61;
	            this.item();
	            this.state = 66;
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, gramaticaParser.RULE_item);
	    try {
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 68;
	            this.range();
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



	predefined() {
	    let localctx = new PredefinedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gramaticaParser.RULE_predefined);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 126) !== 0))) {
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, gramaticaParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 73;
	            this.match(gramaticaParser.DIGIT);
	            this.state = 76; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===7);
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



	special_char() {
	    let localctx = new Special_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gramaticaParser.RULE_special_char);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3840) !== 0))) {
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

gramaticaParser.EOF = antlr4.Token.EOF;
gramaticaParser.YEARLY = 1;
gramaticaParser.MONTHLY = 2;
gramaticaParser.WEEKLY = 3;
gramaticaParser.DAILY = 4;
gramaticaParser.HOURLY = 5;
gramaticaParser.REBOOT = 6;
gramaticaParser.DIGIT = 7;
gramaticaParser.GUION = 8;
gramaticaParser.BARRA = 9;
gramaticaParser.ASTERISCO = 10;
gramaticaParser.COMA = 11;
gramaticaParser.WS = 12;

gramaticaParser.RULE_schedule = 0;
gramaticaParser.RULE_time_field = 1;
gramaticaParser.RULE_value = 2;
gramaticaParser.RULE_range = 3;
gramaticaParser.RULE_step = 4;
gramaticaParser.RULE_wildcard = 5;
gramaticaParser.RULE_list = 6;
gramaticaParser.RULE_item = 7;
gramaticaParser.RULE_predefined = 8;
gramaticaParser.RULE_number = 9;
gramaticaParser.RULE_special_char = 10;

class ScheduleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_schedule;
    }

	time_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Time_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Time_fieldContext,i);
	    }
	};

	EOF() {
	    return this.getToken(gramaticaParser.EOF, 0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramaticaParser.WS);
	    } else {
	        return this.getToken(gramaticaParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterSchedule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitSchedule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitSchedule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Time_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_time_field;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	step() {
	    return this.getTypedRuleContext(StepContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	predefined() {
	    return this.getTypedRuleContext(PredefinedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterTime_field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitTime_field(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitTime_field(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_value;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_range;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	GUION() {
	    return this.getToken(gramaticaParser.GUION, 0);
	};

	BARRA() {
	    return this.getToken(gramaticaParser.BARRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_step;
    }

	BARRA() {
	    return this.getToken(gramaticaParser.BARRA, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitStep(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitStep(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_wildcard;
    }

	ASTERISCO() {
	    return this.getToken(gramaticaParser.ASTERISCO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitWildcard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitWildcard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_list;
    }

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramaticaParser.COMA);
	    } else {
	        return this.getToken(gramaticaParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_item;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredefinedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_predefined;
    }

	YEARLY() {
	    return this.getToken(gramaticaParser.YEARLY, 0);
	};

	MONTHLY() {
	    return this.getToken(gramaticaParser.MONTHLY, 0);
	};

	WEEKLY() {
	    return this.getToken(gramaticaParser.WEEKLY, 0);
	};

	DAILY() {
	    return this.getToken(gramaticaParser.DAILY, 0);
	};

	HOURLY() {
	    return this.getToken(gramaticaParser.HOURLY, 0);
	};

	REBOOT() {
	    return this.getToken(gramaticaParser.REBOOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterPredefined(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitPredefined(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitPredefined(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_number;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gramaticaParser.DIGIT);
	    } else {
	        return this.getToken(gramaticaParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Special_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gramaticaParser.RULE_special_char;
    }

	GUION() {
	    return this.getToken(gramaticaParser.GUION, 0);
	};

	BARRA() {
	    return this.getToken(gramaticaParser.BARRA, 0);
	};

	ASTERISCO() {
	    return this.getToken(gramaticaParser.ASTERISCO, 0);
	};

	COMA() {
	    return this.getToken(gramaticaParser.COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.enterSpecial_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gramaticaListener ) {
	        listener.exitSpecial_char(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof gramaticaVisitor ) {
	        return visitor.visitSpecial_char(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




gramaticaParser.ScheduleContext = ScheduleContext; 
gramaticaParser.Time_fieldContext = Time_fieldContext; 
gramaticaParser.ValueContext = ValueContext; 
gramaticaParser.RangeContext = RangeContext; 
gramaticaParser.StepContext = StepContext; 
gramaticaParser.WildcardContext = WildcardContext; 
gramaticaParser.ListContext = ListContext; 
gramaticaParser.ItemContext = ItemContext; 
gramaticaParser.PredefinedContext = PredefinedContext; 
gramaticaParser.NumberContext = NumberContext; 
gramaticaParser.Special_charContext = Special_charContext; 
