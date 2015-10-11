package tdsql.framework;

import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class TestSuiteParser {
  private JSONParser parser;

  public TestSuiteParser() {
    parser = new JSONParser();
  }

  public TestSuite parse(String filepath) {
    TestSuite suite = new TestSuite();
    try {
      JSONArray cases = (JSONArray) parser.parse(filepath);
      for (int i = 0; i < cases.length(); i++) {
        
      }

    } catch (ParseException e) {
      System.err.println("ERROR: Parsing JSON failed at " + filepath);
    }
  }
}
