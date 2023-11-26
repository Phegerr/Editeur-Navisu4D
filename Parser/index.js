import { createServer } from 'http';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import ScenarioLexer from './scenarioLexer.js';
import ScenarioParser from './scenarioParser.js';
import HtmlScenarioListener from './HtmlScenarioListener.js';

createServer((req, res) => {
   
   res.writeHead(200, {
       'Content-Type': 'text/html',        
   });

   res.write('<html><head><meta charset="UTF-8"/></head><body>');
   
   var input = "blablabla*bbox,48.0,-5.0,49.0,2.0*layer,bathymetry,gebco*move,flyTo,camera,-4.54,48.57,900000.0";
   var chars = new InputStream(input, true)   
   var lexer = new ScenarioLexer(chars);
   var tokens  = new CommonTokenStream(lexer);
   var parser = new ScenarioParser(tokens);
      
   parser.buildParseTrees = true;   
   var tree = parser.scenario();   
   var htmlScenario = new HtmlScenarioListener(res);
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlScenario, tree);
   
   res.write('</body></html>');
   res.end();

}).listen(4000);
