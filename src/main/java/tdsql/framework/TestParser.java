package tdsql.framework;

import java.util.Arrays;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import tdsql.framework.exceptions.TestTypeNotFoundException;

/**
 * A class to parse *.tdsql files to populate into a test suite.
 */
public class TestParser {
  private JSONParser parser;

  public TestParser() {
    parser = new JSONParser();
  }

  /**
   * Parse function which reads the contents of the *.tdsql JSON file, iterates
   * through all the test cases, and delegates the parsing correctly to specific
   * TestCase implementations.
   * @param filepath The filepath to the .tdsql JSON file.
   * @param suite The TestSuite to populate with these parsed test cases.
   * @throws ParseException Raised if the JSON is deformed.
   * @throws TestTypeNotFoundException Raised if a test case is not of a valid
   *     TestType.
   */
  public void parse(String filepath, TestSuite suite)
      throws ParseException, TestTypeNotFoundException {
    JSONArray cases = (JSONArray) parser.parse(filepath);

    // Iterate through the listed cases.
    for (int i = 0; i < cases.size(); i++) {
      JSONObject caseJson = (JSONObject) cases.get(i);

      // Read and validate the test case type.
      int type = (int) caseJson.get("type");
      if (!Arrays.asList(TestType.values()).contains(type)) {
        throw new TestTypeNotFoundException(type);
      }

      // Delegate the rest of the parsing to the appropriate implementation.
      switch (TestType.values()[type]) {
        case QUERY_MATCHES_EXAMPLE:
          TestCase newCase = new QueryMatchesExample();
          newCase.fromJson((JSONObject) cases.get(i));
          suite.addCase(newCase);
          break;
      }
    }
  }
}
