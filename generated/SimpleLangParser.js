// Generated from SimpleLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleLangListener from './SimpleLangListener.js';
import SimpleLangVisitor from './SimpleLangVisitor.js';

const serializedATN = [4,1,25,99,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,
0,10,0,12,0,29,9,0,1,1,1,1,1,1,1,1,3,1,35,8,1,1,1,5,1,38,8,1,10,1,12,1,41,
9,1,1,1,1,1,1,2,1,2,1,2,3,2,48,8,2,1,2,1,2,1,2,5,2,53,8,2,10,2,12,2,56,9,
2,1,2,1,2,1,3,1,3,1,3,5,3,63,8,3,10,3,12,3,66,9,3,1,4,1,4,1,5,1,5,1,5,1,
5,1,5,3,5,75,8,5,1,6,1,6,1,7,1,7,1,7,1,7,5,7,83,8,7,10,7,12,7,86,9,7,1,7,
1,7,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,
14,16,18,20,22,0,4,1,0,2,4,1,0,5,9,1,0,11,12,1,0,22,23,97,0,27,1,0,0,0,2,
30,1,0,0,0,4,44,1,0,0,0,6,59,1,0,0,0,8,67,1,0,0,0,10,74,1,0,0,0,12,76,1,
0,0,0,14,78,1,0,0,0,16,89,1,0,0,0,18,91,1,0,0,0,20,94,1,0,0,0,22,96,1,0,
0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,
0,28,1,1,0,0,0,29,27,1,0,0,0,30,31,5,1,0,0,31,32,3,12,6,0,32,34,5,13,0,0,
33,35,5,25,0,0,34,33,1,0,0,0,34,35,1,0,0,0,35,39,1,0,0,0,36,38,3,4,2,0,37,
36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,39,
1,0,0,0,42,43,5,14,0,0,43,3,1,0,0,0,44,45,7,0,0,0,45,47,3,6,3,0,46,48,3,
8,4,0,47,46,1,0,0,0,47,48,1,0,0,0,48,49,1,0,0,0,49,54,3,10,5,0,50,51,5,10,
0,0,51,53,3,10,5,0,52,50,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,
0,55,57,1,0,0,0,56,54,1,0,0,0,57,58,5,25,0,0,58,5,1,0,0,0,59,64,3,16,8,0,
60,61,5,18,0,0,61,63,3,16,8,0,62,60,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,
64,65,1,0,0,0,65,7,1,0,0,0,66,64,1,0,0,0,67,68,7,1,0,0,68,9,1,0,0,0,69,75,
3,12,6,0,70,75,3,20,10,0,71,75,3,22,11,0,72,75,3,18,9,0,73,75,3,14,7,0,74,
69,1,0,0,0,74,70,1,0,0,0,74,71,1,0,0,0,74,72,1,0,0,0,74,73,1,0,0,0,75,11,
1,0,0,0,76,77,7,2,0,0,77,13,1,0,0,0,78,79,5,15,0,0,79,84,3,10,5,0,80,81,
5,17,0,0,81,83,3,10,5,0,82,80,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,
1,0,0,0,85,87,1,0,0,0,86,84,1,0,0,0,87,88,5,16,0,0,88,15,1,0,0,0,89,90,5,
20,0,0,90,17,1,0,0,0,91,92,5,19,0,0,92,93,5,20,0,0,93,19,1,0,0,0,94,95,5,
21,0,0,95,21,1,0,0,0,96,97,7,3,0,0,97,23,1,0,0,0,8,27,34,39,47,54,64,74,
84];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleLangParser extends antlr4.Parser {

    static grammarFileName = "SimpleLang.g4";
    static literalNames = [ null, "'prueba'", "'dado'", "'cuando'", "'entonces'", 
                            "'es'", "'no es'", "'contiene'", "'existe'", 
                            "'debe'", "'y'", null, null, "'{'", "'}'", "'['", 
                            "']'", "','", "'.'", "'$'", null, null, "'verdadero'", 
                            "'falso'" ];
    static symbolicNames = [ null, "PRUEBA", "DADO", "CUANDO", "ENTONCES", 
                             "ES", "NO_ES", "CONTIENE", "EXISTE", "DEBE", 
                             "Y", "TRIPLE_DOBLE_COMILLA", "TRIPLE_SIMPLE_COMILLA", 
                             "LLAVE_ABRE", "LLAVE_CIERRA", "CORCHETE_ABRE", 
                             "CORCHETE_CIERRA", "COMA", "PUNTO", "DOLAR", 
                             "ID", "NUMBER", "VERDADERO", "FALSO", "WS", 
                             "NEWLINE" ];
    static ruleNames = [ "testSuite", "prueba", "paso", "objeto", "estado", 
                         "valor", "texto", "lista", "identificador", "variable", 
                         "numero", "booleano" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleLangParser.ruleNames;
        this.literalNames = SimpleLangParser.literalNames;
        this.symbolicNames = SimpleLangParser.symbolicNames;
    }



	testSuite() {
	    let localctx = new TestSuiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleLangParser.RULE_testSuite);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 24;
	            this.prueba();
	            this.state = 29;
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



	prueba() {
	    let localctx = new PruebaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleLangParser.RULE_prueba);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(SimpleLangParser.PRUEBA);
	        this.state = 31;
	        this.texto();
	        this.state = 32;
	        this.match(SimpleLangParser.LLAVE_ABRE);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 33;
	            this.match(SimpleLangParser.NEWLINE);
	        }

	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0)) {
	            this.state = 36;
	            this.paso();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(SimpleLangParser.LLAVE_CIERRA);
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



	paso() {
	    let localctx = new PasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleLangParser.RULE_paso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 45;
	        this.objeto();
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0)) {
	            this.state = 46;
	            this.estado();
	        }

	        this.state = 49;
	        this.valor();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 50;
	            this.match(SimpleLangParser.Y);
	            this.state = 51;
	            this.valor();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this.match(SimpleLangParser.NEWLINE);
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



	objeto() {
	    let localctx = new ObjetoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleLangParser.RULE_objeto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.identificador();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 60;
	            this.match(SimpleLangParser.PUNTO);
	            this.state = 61;
	            this.identificador();
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



	estado() {
	    let localctx = new EstadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleLangParser.RULE_estado);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 992) !== 0))) {
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



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleLangParser.RULE_valor);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.texto();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.numero();
	            break;
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.booleano();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 72;
	            this.variable();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 73;
	            this.lista();
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



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleLangParser.RULE_texto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
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



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleLangParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(SimpleLangParser.CORCHETE_ABRE);
	        this.state = 79;
	        this.valor();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 80;
	            this.match(SimpleLangParser.COMA);
	            this.state = 81;
	            this.valor();
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 87;
	        this.match(SimpleLangParser.CORCHETE_CIERRA);
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



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SimpleLangParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(SimpleLangParser.ID);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SimpleLangParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(SimpleLangParser.DOLAR);
	        this.state = 92;
	        this.match(SimpleLangParser.ID);
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



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SimpleLangParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(SimpleLangParser.NUMBER);
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



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SimpleLangParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
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

SimpleLangParser.EOF = antlr4.Token.EOF;
SimpleLangParser.PRUEBA = 1;
SimpleLangParser.DADO = 2;
SimpleLangParser.CUANDO = 3;
SimpleLangParser.ENTONCES = 4;
SimpleLangParser.ES = 5;
SimpleLangParser.NO_ES = 6;
SimpleLangParser.CONTIENE = 7;
SimpleLangParser.EXISTE = 8;
SimpleLangParser.DEBE = 9;
SimpleLangParser.Y = 10;
SimpleLangParser.TRIPLE_DOBLE_COMILLA = 11;
SimpleLangParser.TRIPLE_SIMPLE_COMILLA = 12;
SimpleLangParser.LLAVE_ABRE = 13;
SimpleLangParser.LLAVE_CIERRA = 14;
SimpleLangParser.CORCHETE_ABRE = 15;
SimpleLangParser.CORCHETE_CIERRA = 16;
SimpleLangParser.COMA = 17;
SimpleLangParser.PUNTO = 18;
SimpleLangParser.DOLAR = 19;
SimpleLangParser.ID = 20;
SimpleLangParser.NUMBER = 21;
SimpleLangParser.VERDADERO = 22;
SimpleLangParser.FALSO = 23;
SimpleLangParser.WS = 24;
SimpleLangParser.NEWLINE = 25;

SimpleLangParser.RULE_testSuite = 0;
SimpleLangParser.RULE_prueba = 1;
SimpleLangParser.RULE_paso = 2;
SimpleLangParser.RULE_objeto = 3;
SimpleLangParser.RULE_estado = 4;
SimpleLangParser.RULE_valor = 5;
SimpleLangParser.RULE_texto = 6;
SimpleLangParser.RULE_lista = 7;
SimpleLangParser.RULE_identificador = 8;
SimpleLangParser.RULE_variable = 9;
SimpleLangParser.RULE_numero = 10;
SimpleLangParser.RULE_booleano = 11;

class TestSuiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_testSuite;
    }

	prueba = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PruebaContext);
	    } else {
	        return this.getTypedRuleContext(PruebaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterTestSuite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitTestSuite(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitTestSuite(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PruebaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_prueba;
    }

	PRUEBA() {
	    return this.getToken(SimpleLangParser.PRUEBA, 0);
	};

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	LLAVE_ABRE() {
	    return this.getToken(SimpleLangParser.LLAVE_ABRE, 0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(SimpleLangParser.LLAVE_CIERRA, 0);
	};

	NEWLINE() {
	    return this.getToken(SimpleLangParser.NEWLINE, 0);
	};

	paso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PasoContext);
	    } else {
	        return this.getTypedRuleContext(PasoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterPrueba(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitPrueba(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitPrueba(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_paso;
    }

	objeto() {
	    return this.getTypedRuleContext(ObjetoContext,0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	NEWLINE() {
	    return this.getToken(SimpleLangParser.NEWLINE, 0);
	};

	DADO() {
	    return this.getToken(SimpleLangParser.DADO, 0);
	};

	CUANDO() {
	    return this.getToken(SimpleLangParser.CUANDO, 0);
	};

	ENTONCES() {
	    return this.getToken(SimpleLangParser.ENTONCES, 0);
	};

	estado() {
	    return this.getTypedRuleContext(EstadoContext,0);
	};

	Y = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.Y);
	    } else {
	        return this.getToken(SimpleLangParser.Y, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterPaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitPaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitPaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjetoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_objeto;
    }

	identificador = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentificadorContext);
	    } else {
	        return this.getTypedRuleContext(IdentificadorContext,i);
	    }
	};

	PUNTO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.PUNTO);
	    } else {
	        return this.getToken(SimpleLangParser.PUNTO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterObjeto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitObjeto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitObjeto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EstadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_estado;
    }

	ES() {
	    return this.getToken(SimpleLangParser.ES, 0);
	};

	NO_ES() {
	    return this.getToken(SimpleLangParser.NO_ES, 0);
	};

	CONTIENE() {
	    return this.getToken(SimpleLangParser.CONTIENE, 0);
	};

	EXISTE() {
	    return this.getToken(SimpleLangParser.EXISTE, 0);
	};

	DEBE() {
	    return this.getToken(SimpleLangParser.DEBE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterEstado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitEstado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitEstado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_valor;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_texto;
    }

	TRIPLE_DOBLE_COMILLA() {
	    return this.getToken(SimpleLangParser.TRIPLE_DOBLE_COMILLA, 0);
	};

	TRIPLE_SIMPLE_COMILLA() {
	    return this.getToken(SimpleLangParser.TRIPLE_SIMPLE_COMILLA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_lista;
    }

	CORCHETE_ABRE() {
	    return this.getToken(SimpleLangParser.CORCHETE_ABRE, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	CORCHETE_CIERRA() {
	    return this.getToken(SimpleLangParser.CORCHETE_CIERRA, 0);
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleLangParser.COMA);
	    } else {
	        return this.getToken(SimpleLangParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_identificador;
    }

	ID() {
	    return this.getToken(SimpleLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_variable;
    }

	DOLAR() {
	    return this.getToken(SimpleLangParser.DOLAR, 0);
	};

	ID() {
	    return this.getToken(SimpleLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_numero;
    }

	NUMBER() {
	    return this.getToken(SimpleLangParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleLangParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(SimpleLangParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(SimpleLangParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleLangListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleLangVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleLangParser.TestSuiteContext = TestSuiteContext; 
SimpleLangParser.PruebaContext = PruebaContext; 
SimpleLangParser.PasoContext = PasoContext; 
SimpleLangParser.ObjetoContext = ObjetoContext; 
SimpleLangParser.EstadoContext = EstadoContext; 
SimpleLangParser.ValorContext = ValorContext; 
SimpleLangParser.TextoContext = TextoContext; 
SimpleLangParser.ListaContext = ListaContext; 
SimpleLangParser.IdentificadorContext = IdentificadorContext; 
SimpleLangParser.VariableContext = VariableContext; 
SimpleLangParser.NumeroContext = NumeroContext; 
SimpleLangParser.BooleanoContext = BooleanoContext; 
