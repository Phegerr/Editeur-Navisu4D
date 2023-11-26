// Generated from c://Users//Mathis//Documents//GitHub//PJ_Commande//scenario//scenario.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link scenarioParser}.
 */
public interface scenarioListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link scenarioParser#scenario}.
	 * @param ctx the parse tree
	 */
	void enterScenario(scenarioParser.ScenarioContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#scenario}.
	 * @param ctx the parse tree
	 */
	void exitScenario(scenarioParser.ScenarioContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#comment}.
	 * @param ctx the parse tree
	 */
	void enterComment(scenarioParser.CommentContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#comment}.
	 * @param ctx the parse tree
	 */
	void exitComment(scenarioParser.CommentContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#command}.
	 * @param ctx the parse tree
	 */
	void enterCommand(scenarioParser.CommandContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#command}.
	 * @param ctx the parse tree
	 */
	void exitCommand(scenarioParser.CommandContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#bbox}.
	 * @param ctx the parse tree
	 */
	void enterBbox(scenarioParser.BboxContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#bbox}.
	 * @param ctx the parse tree
	 */
	void exitBbox(scenarioParser.BboxContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#layer}.
	 * @param ctx the parse tree
	 */
	void enterLayer(scenarioParser.LayerContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#layer}.
	 * @param ctx the parse tree
	 */
	void exitLayer(scenarioParser.LayerContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#bathy_0}.
	 * @param ctx the parse tree
	 */
	void enterBathy_0(scenarioParser.Bathy_0Context ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#bathy_0}.
	 * @param ctx the parse tree
	 */
	void exitBathy_0(scenarioParser.Bathy_0Context ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#bathy_1}.
	 * @param ctx the parse tree
	 */
	void enterBathy_1(scenarioParser.Bathy_1Context ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#bathy_1}.
	 * @param ctx the parse tree
	 */
	void exitBathy_1(scenarioParser.Bathy_1Context ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#oceanography}.
	 * @param ctx the parse tree
	 */
	void enterOceanography(scenarioParser.OceanographyContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#oceanography}.
	 * @param ctx the parse tree
	 */
	void exitOceanography(scenarioParser.OceanographyContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#tides}.
	 * @param ctx the parse tree
	 */
	void enterTides(scenarioParser.TidesContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#tides}.
	 * @param ctx the parse tree
	 */
	void exitTides(scenarioParser.TidesContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#move}.
	 * @param ctx the parse tree
	 */
	void enterMove(scenarioParser.MoveContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#move}.
	 * @param ctx the parse tree
	 */
	void exitMove(scenarioParser.MoveContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#moveType}.
	 * @param ctx the parse tree
	 */
	void enterMoveType(scenarioParser.MoveTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#moveType}.
	 * @param ctx the parse tree
	 */
	void exitMoveType(scenarioParser.MoveTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#flyTo}.
	 * @param ctx the parse tree
	 */
	void enterFlyTo(scenarioParser.FlyToContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#flyTo}.
	 * @param ctx the parse tree
	 */
	void exitFlyTo(scenarioParser.FlyToContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#mobile}.
	 * @param ctx the parse tree
	 */
	void enterMobile(scenarioParser.MobileContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#mobile}.
	 * @param ctx the parse tree
	 */
	void exitMobile(scenarioParser.MobileContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#camera}.
	 * @param ctx the parse tree
	 */
	void enterCamera(scenarioParser.CameraContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#camera}.
	 * @param ctx the parse tree
	 */
	void exitCamera(scenarioParser.CameraContext ctx);
	/**
	 * Enter a parse tree produced by {@link scenarioParser#ship}.
	 * @param ctx the parse tree
	 */
	void enterShip(scenarioParser.ShipContext ctx);
	/**
	 * Exit a parse tree produced by {@link scenarioParser#ship}.
	 * @param ctx the parse tree
	 */
	void exitShip(scenarioParser.ShipContext ctx);
}