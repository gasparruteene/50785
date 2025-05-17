// Generated from c://Users//azcur//ssl-antlr-calculator//SimpleLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SimpleLangParser}.
 */
public interface SimpleLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#testSuite}.
	 * @param ctx the parse tree
	 */
	void enterTestSuite(SimpleLangParser.TestSuiteContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#testSuite}.
	 * @param ctx the parse tree
	 */
	void exitTestSuite(SimpleLangParser.TestSuiteContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#prueba}.
	 * @param ctx the parse tree
	 */
	void enterPrueba(SimpleLangParser.PruebaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#prueba}.
	 * @param ctx the parse tree
	 */
	void exitPrueba(SimpleLangParser.PruebaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#paso}.
	 * @param ctx the parse tree
	 */
	void enterPaso(SimpleLangParser.PasoContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#paso}.
	 * @param ctx the parse tree
	 */
	void exitPaso(SimpleLangParser.PasoContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#objeto}.
	 * @param ctx the parse tree
	 */
	void enterObjeto(SimpleLangParser.ObjetoContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#objeto}.
	 * @param ctx the parse tree
	 */
	void exitObjeto(SimpleLangParser.ObjetoContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#estado}.
	 * @param ctx the parse tree
	 */
	void enterEstado(SimpleLangParser.EstadoContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#estado}.
	 * @param ctx the parse tree
	 */
	void exitEstado(SimpleLangParser.EstadoContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(SimpleLangParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(SimpleLangParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(SimpleLangParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(SimpleLangParser.TextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#lista}.
	 * @param ctx the parse tree
	 */
	void enterLista(SimpleLangParser.ListaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#lista}.
	 * @param ctx the parse tree
	 */
	void exitLista(SimpleLangParser.ListaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#identificador}.
	 * @param ctx the parse tree
	 */
	void enterIdentificador(SimpleLangParser.IdentificadorContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#identificador}.
	 * @param ctx the parse tree
	 */
	void exitIdentificador(SimpleLangParser.IdentificadorContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#variable}.
	 * @param ctx the parse tree
	 */
	void enterVariable(SimpleLangParser.VariableContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#variable}.
	 * @param ctx the parse tree
	 */
	void exitVariable(SimpleLangParser.VariableContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(SimpleLangParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(SimpleLangParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleLangParser#booleano}.
	 * @param ctx the parse tree
	 */
	void enterBooleano(SimpleLangParser.BooleanoContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleLangParser#booleano}.
	 * @param ctx the parse tree
	 */
	void exitBooleano(SimpleLangParser.BooleanoContext ctx);
}