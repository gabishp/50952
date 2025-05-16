// Generated from c:/Users/VICTUS/50952/gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gramaticaListener from './gramaticaListener.js';
import gramaticaVisitor from './gramaticaVisitor.js';

const serializedATN = [4,1,13,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,5,0,24,8,0,10,0,12,0,
27,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,37,8,1,1,2,1,2,1,3,1,3,1,3,1,
3,1,3,3,3,46,8,3,1,4,1,4,1,4,3,4,51,8,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,
5,6,61,8,6,10,6,12,6,64,9,6,1,7,1,7,3,7,68,8,7,1,8,1,8,1,9,4,9,73,8,9,11,
9,12,9,74,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,5,10,78,0,20,1,0,0,
0,2,36,1,0,0,0,4,38,1,0,0,0,6,40,1,0,0,0,8,50,1,0,0,0,10,55,1,0,0,0,12,57,
1,0,0,0,14,67,1,0,0,0,16,69,1,0,0,0,18,72,1,0,0,0,20,25,3,2,1,0,21,22,5,
13,0,0,22,24,3,2,1,0,23,21,1,0,0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,
0,0,26,28,1,0,0,0,27,25,1,0,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,37,3,4,2,0,
31,37,3,6,3,0,32,37,3,8,4,0,33,37,3,10,5,0,34,37,3,12,6,0,35,37,3,16,8,0,
36,30,1,0,0,0,36,31,1,0,0,0,36,32,1,0,0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,
35,1,0,0,0,37,3,1,0,0,0,38,39,3,18,9,0,39,5,1,0,0,0,40,41,3,18,9,0,41,42,
5,1,0,0,42,45,3,18,9,0,43,44,5,2,0,0,44,46,3,18,9,0,45,43,1,0,0,0,45,46,
1,0,0,0,46,7,1,0,0,0,47,51,3,10,5,0,48,51,3,6,3,0,49,51,3,4,2,0,50,47,1,
0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,52,1,0,0,0,52,53,5,2,0,0,53,54,3,18,
9,0,54,9,1,0,0,0,55,56,5,3,0,0,56,11,1,0,0,0,57,62,3,14,7,0,58,59,5,4,0,
0,59,61,3,14,7,0,60,58,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,
63,13,1,0,0,0,64,62,1,0,0,0,65,68,3,4,2,0,66,68,3,6,3,0,67,65,1,0,0,0,67,
66,1,0,0,0,68,15,1,0,0,0,69,70,7,0,0,0,70,17,1,0,0,0,71,73,5,11,0,0,72,71,
1,0,0,0,73,74,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,19,1,0,0,0,7,25,36,
45,50,62,67,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gramaticaParser extends antlr4.Parser {

    static grammarFileName = "gramatica.g4";
    static literalNames = [ null, "'-'", "'/'", "'*'", "','", "'@yearly'", 
                            "'@monthly'", "'@weekly'", "'@daily'", "'@hourly'", 
                            "'@reboot'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "DIGIT", "SPECIAL_CHAR", 
                             "WS" ];
    static ruleNames = [ "schedule", "time_field", "value", "range", "step", 
                         "wildcard", "list", "item", "predefined", "number" ];

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
	        this.state = 20;
	        this.time_field();
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 21;
	            this.match(gramaticaParser.WS);
	            this.state = 22;
	            this.time_field();
	            this.state = 27;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 28;
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.range();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.step();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.wildcard();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 34;
	            this.list();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 35;
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
	        this.state = 38;
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
	        this.state = 40;
	        this.number();
	        this.state = 41;
	        this.match(gramaticaParser.T__0);
	        this.state = 42;
	        this.number();
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 43;
	            this.match(gramaticaParser.T__1);
	            this.state = 44;
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
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 47;
	            this.wildcard();
	            break;

	        case 2:
	            this.state = 48;
	            this.range();
	            break;

	        case 3:
	            this.state = 49;
	            this.value();
	            break;

	        }
	        this.state = 52;
	        this.match(gramaticaParser.T__1);
	        this.state = 53;
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
	        this.state = 55;
	        this.match(gramaticaParser.T__2);
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
	        this.state = 57;
	        this.item();
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 58;
	            this.match(gramaticaParser.T__3);
	            this.state = 59;
	            this.item();
	            this.state = 64;
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.value();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
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
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2016) !== 0))) {
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
	        this.state = 72; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 71;
	            this.match(gramaticaParser.DIGIT);
	            this.state = 74; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===11);
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
gramaticaParser.T__0 = 1;
gramaticaParser.T__1 = 2;
gramaticaParser.T__2 = 3;
gramaticaParser.T__3 = 4;
gramaticaParser.T__4 = 5;
gramaticaParser.T__5 = 6;
gramaticaParser.T__6 = 7;
gramaticaParser.T__7 = 8;
gramaticaParser.T__8 = 9;
gramaticaParser.T__9 = 10;
gramaticaParser.DIGIT = 11;
gramaticaParser.SPECIAL_CHAR = 12;
gramaticaParser.WS = 13;

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
