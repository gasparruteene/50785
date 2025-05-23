// Generated from c://Users//azcur//ssl-antlr-calculator//SimpleLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class SimpleLangLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PRUEBA=1, DADO=2, CUANDO=3, ENTONCES=4, ES=5, NO_ES=6, CONTIENE=7, EXISTE=8, 
		DEBE=9, Y=10, TRIPLE_DOBLE_COMILLA=11, TRIPLE_SIMPLE_COMILLA=12, LLAVE_ABRE=13, 
		LLAVE_CIERRA=14, CORCHETE_ABRE=15, CORCHETE_CIERRA=16, COMA=17, PUNTO=18, 
		DOLAR=19, ID=20, NUMBER=21, VERDADERO=22, FALSO=23, WS=24, NEWLINE=25;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PRUEBA", "DADO", "CUANDO", "ENTONCES", "ES", "NO_ES", "CONTIENE", "EXISTE", 
			"DEBE", "Y", "TRIPLE_DOBLE_COMILLA", "TRIPLE_SIMPLE_COMILLA", "LLAVE_ABRE", 
			"LLAVE_CIERRA", "CORCHETE_ABRE", "CORCHETE_CIERRA", "COMA", "PUNTO", 
			"DOLAR", "ID", "NUMBER", "VERDADERO", "FALSO", "WS", "NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'prueba'", "'dado'", "'cuando'", "'entonces'", "'es'", "'no es'", 
			"'contiene'", "'existe'", "'debe'", "'y'", null, null, "'{'", "'}'", 
			"'['", "']'", "','", "'.'", "'$'", null, null, "'verdadero'", "'falso'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PRUEBA", "DADO", "CUANDO", "ENTONCES", "ES", "NO_ES", "CONTIENE", 
			"EXISTE", "DEBE", "Y", "TRIPLE_DOBLE_COMILLA", "TRIPLE_SIMPLE_COMILLA", 
			"LLAVE_ABRE", "LLAVE_CIERRA", "CORCHETE_ABRE", "CORCHETE_CIERRA", "COMA", 
			"PUNTO", "DOLAR", "ID", "NUMBER", "VERDADERO", "FALSO", "WS", "NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SimpleLangLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SimpleLang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0019\u00c1\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\nu\b\n\n\n\f\nx\t\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0005\u000b\u0083\b\u000b\n\u000b\f\u000b\u0086\t\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0005"+
		"\u0013\u009c\b\u0013\n\u0013\f\u0013\u009f\t\u0013\u0001\u0014\u0004\u0014"+
		"\u00a2\b\u0014\u000b\u0014\f\u0014\u00a3\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0017\u0004\u0017\u00b7\b\u0017\u000b\u0017\f"+
		"\u0017\u00b8\u0001\u0017\u0001\u0017\u0001\u0018\u0003\u0018\u00be\b\u0018"+
		"\u0001\u0018\u0001\u0018\u0002v\u0084\u0000\u0019\u0001\u0001\u0003\u0002"+
		"\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013"+
		"\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u00181\u0019\u0001\u0000"+
		"\u0004\u0003\u0000AZ__az\u0004\u000009AZ__az\u0001\u000009\u0003\u0000"+
		"\t\t\r\r  \u00c6\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000"+
		"%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000"+
		"\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000\u0001"+
		"3\u0001\u0000\u0000\u0000\u0003:\u0001\u0000\u0000\u0000\u0005?\u0001"+
		"\u0000\u0000\u0000\u0007F\u0001\u0000\u0000\u0000\tO\u0001\u0000\u0000"+
		"\u0000\u000bR\u0001\u0000\u0000\u0000\rX\u0001\u0000\u0000\u0000\u000f"+
		"a\u0001\u0000\u0000\u0000\u0011h\u0001\u0000\u0000\u0000\u0013m\u0001"+
		"\u0000\u0000\u0000\u0015o\u0001\u0000\u0000\u0000\u0017}\u0001\u0000\u0000"+
		"\u0000\u0019\u008b\u0001\u0000\u0000\u0000\u001b\u008d\u0001\u0000\u0000"+
		"\u0000\u001d\u008f\u0001\u0000\u0000\u0000\u001f\u0091\u0001\u0000\u0000"+
		"\u0000!\u0093\u0001\u0000\u0000\u0000#\u0095\u0001\u0000\u0000\u0000%"+
		"\u0097\u0001\u0000\u0000\u0000\'\u0099\u0001\u0000\u0000\u0000)\u00a1"+
		"\u0001\u0000\u0000\u0000+\u00a5\u0001\u0000\u0000\u0000-\u00af\u0001\u0000"+
		"\u0000\u0000/\u00b6\u0001\u0000\u0000\u00001\u00bd\u0001\u0000\u0000\u0000"+
		"34\u0005p\u0000\u000045\u0005r\u0000\u000056\u0005u\u0000\u000067\u0005"+
		"e\u0000\u000078\u0005b\u0000\u000089\u0005a\u0000\u00009\u0002\u0001\u0000"+
		"\u0000\u0000:;\u0005d\u0000\u0000;<\u0005a\u0000\u0000<=\u0005d\u0000"+
		"\u0000=>\u0005o\u0000\u0000>\u0004\u0001\u0000\u0000\u0000?@\u0005c\u0000"+
		"\u0000@A\u0005u\u0000\u0000AB\u0005a\u0000\u0000BC\u0005n\u0000\u0000"+
		"CD\u0005d\u0000\u0000DE\u0005o\u0000\u0000E\u0006\u0001\u0000\u0000\u0000"+
		"FG\u0005e\u0000\u0000GH\u0005n\u0000\u0000HI\u0005t\u0000\u0000IJ\u0005"+
		"o\u0000\u0000JK\u0005n\u0000\u0000KL\u0005c\u0000\u0000LM\u0005e\u0000"+
		"\u0000MN\u0005s\u0000\u0000N\b\u0001\u0000\u0000\u0000OP\u0005e\u0000"+
		"\u0000PQ\u0005s\u0000\u0000Q\n\u0001\u0000\u0000\u0000RS\u0005n\u0000"+
		"\u0000ST\u0005o\u0000\u0000TU\u0005 \u0000\u0000UV\u0005e\u0000\u0000"+
		"VW\u0005s\u0000\u0000W\f\u0001\u0000\u0000\u0000XY\u0005c\u0000\u0000"+
		"YZ\u0005o\u0000\u0000Z[\u0005n\u0000\u0000[\\\u0005t\u0000\u0000\\]\u0005"+
		"i\u0000\u0000]^\u0005e\u0000\u0000^_\u0005n\u0000\u0000_`\u0005e\u0000"+
		"\u0000`\u000e\u0001\u0000\u0000\u0000ab\u0005e\u0000\u0000bc\u0005x\u0000"+
		"\u0000cd\u0005i\u0000\u0000de\u0005s\u0000\u0000ef\u0005t\u0000\u0000"+
		"fg\u0005e\u0000\u0000g\u0010\u0001\u0000\u0000\u0000hi\u0005d\u0000\u0000"+
		"ij\u0005e\u0000\u0000jk\u0005b\u0000\u0000kl\u0005e\u0000\u0000l\u0012"+
		"\u0001\u0000\u0000\u0000mn\u0005y\u0000\u0000n\u0014\u0001\u0000\u0000"+
		"\u0000op\u0005\"\u0000\u0000pq\u0005\"\u0000\u0000qr\u0005\"\u0000\u0000"+
		"rv\u0001\u0000\u0000\u0000su\t\u0000\u0000\u0000ts\u0001\u0000\u0000\u0000"+
		"ux\u0001\u0000\u0000\u0000vw\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000"+
		"\u0000wy\u0001\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000yz\u0005\"\u0000"+
		"\u0000z{\u0005\"\u0000\u0000{|\u0005\"\u0000\u0000|\u0016\u0001\u0000"+
		"\u0000\u0000}~\u0005\'\u0000\u0000~\u007f\u0005\'\u0000\u0000\u007f\u0080"+
		"\u0005\'\u0000\u0000\u0080\u0084\u0001\u0000\u0000\u0000\u0081\u0083\t"+
		"\u0000\u0000\u0000\u0082\u0081\u0001\u0000\u0000\u0000\u0083\u0086\u0001"+
		"\u0000\u0000\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0084\u0082\u0001"+
		"\u0000\u0000\u0000\u0085\u0087\u0001\u0000\u0000\u0000\u0086\u0084\u0001"+
		"\u0000\u0000\u0000\u0087\u0088\u0005\'\u0000\u0000\u0088\u0089\u0005\'"+
		"\u0000\u0000\u0089\u008a\u0005\'\u0000\u0000\u008a\u0018\u0001\u0000\u0000"+
		"\u0000\u008b\u008c\u0005{\u0000\u0000\u008c\u001a\u0001\u0000\u0000\u0000"+
		"\u008d\u008e\u0005}\u0000\u0000\u008e\u001c\u0001\u0000\u0000\u0000\u008f"+
		"\u0090\u0005[\u0000\u0000\u0090\u001e\u0001\u0000\u0000\u0000\u0091\u0092"+
		"\u0005]\u0000\u0000\u0092 \u0001\u0000\u0000\u0000\u0093\u0094\u0005,"+
		"\u0000\u0000\u0094\"\u0001\u0000\u0000\u0000\u0095\u0096\u0005.\u0000"+
		"\u0000\u0096$\u0001\u0000\u0000\u0000\u0097\u0098\u0005$\u0000\u0000\u0098"+
		"&\u0001\u0000\u0000\u0000\u0099\u009d\u0007\u0000\u0000\u0000\u009a\u009c"+
		"\u0007\u0001\u0000\u0000\u009b\u009a\u0001\u0000\u0000\u0000\u009c\u009f"+
		"\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009d\u009e"+
		"\u0001\u0000\u0000\u0000\u009e(\u0001\u0000\u0000\u0000\u009f\u009d\u0001"+
		"\u0000\u0000\u0000\u00a0\u00a2\u0007\u0002\u0000\u0000\u00a1\u00a0\u0001"+
		"\u0000\u0000\u0000\u00a2\u00a3\u0001\u0000\u0000\u0000\u00a3\u00a1\u0001"+
		"\u0000\u0000\u0000\u00a3\u00a4\u0001\u0000\u0000\u0000\u00a4*\u0001\u0000"+
		"\u0000\u0000\u00a5\u00a6\u0005v\u0000\u0000\u00a6\u00a7\u0005e\u0000\u0000"+
		"\u00a7\u00a8\u0005r\u0000\u0000\u00a8\u00a9\u0005d\u0000\u0000\u00a9\u00aa"+
		"\u0005a\u0000\u0000\u00aa\u00ab\u0005d\u0000\u0000\u00ab\u00ac\u0005e"+
		"\u0000\u0000\u00ac\u00ad\u0005r\u0000\u0000\u00ad\u00ae\u0005o\u0000\u0000"+
		"\u00ae,\u0001\u0000\u0000\u0000\u00af\u00b0\u0005f\u0000\u0000\u00b0\u00b1"+
		"\u0005a\u0000\u0000\u00b1\u00b2\u0005l\u0000\u0000\u00b2\u00b3\u0005s"+
		"\u0000\u0000\u00b3\u00b4\u0005o\u0000\u0000\u00b4.\u0001\u0000\u0000\u0000"+
		"\u00b5\u00b7\u0007\u0003\u0000\u0000\u00b6\u00b5\u0001\u0000\u0000\u0000"+
		"\u00b7\u00b8\u0001\u0000\u0000\u0000\u00b8\u00b6\u0001\u0000\u0000\u0000"+
		"\u00b8\u00b9\u0001\u0000\u0000\u0000\u00b9\u00ba\u0001\u0000\u0000\u0000"+
		"\u00ba\u00bb\u0006\u0017\u0000\u0000\u00bb0\u0001\u0000\u0000\u0000\u00bc"+
		"\u00be\u0005\r\u0000\u0000\u00bd\u00bc\u0001\u0000\u0000\u0000\u00bd\u00be"+
		"\u0001\u0000\u0000\u0000\u00be\u00bf\u0001\u0000\u0000\u0000\u00bf\u00c0"+
		"\u0005\n\u0000\u0000\u00c02\u0001\u0000\u0000\u0000\u0007\u0000v\u0084"+
		"\u009d\u00a3\u00b8\u00bd\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}