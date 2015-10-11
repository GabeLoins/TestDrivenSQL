package tdsql.framework;

import java.util.Arrays;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class TestSuiteParser {
  private JSONParser parser;

  public TestSuiteParser() {
    parser = new JSONParser();
  }

  public TestSuite parse(String filepath)
      throws ParseException, TestTypeNotFoundException {
    TestSuite suite = new TestSuite();
    JSONArray cases = (JSONArray) parser.parse(filepath);
    for (int i = 0; i < cases.size(); i++) {
      JSONObject caseJson = (JSONObject) cases.get(i);
      int type = (int) caseJson.get("type");
      if (!Arrays.asList(TestType.values()).contains(type)) {
        throw new TestTypeNotFoundException(type);
      }
      switch (TestType.values()[type]) {
        case QUERY_MATCHES_EXAMPLE:
          TestCase newCase = new QueryMatchesExample();
          newCase.fromJson((JSONObject) cases.get(i));
          suite.addCase(newCase);
          break;
      }
    }
    return suite;
  }
}
