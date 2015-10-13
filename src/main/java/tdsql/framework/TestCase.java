package tdsql.framework;

import org.json.simple.JSONObject;

/**
 * An interface defining standard methods all types of TestCases will need to
 * implement. A key note here is that TestCase classes will handle their own
 * parsing of JSON so then if then the logic is distributed away from the single
 * parser class, and so then changes for a certain test case will be isolated.
 */
public interface TestCase {

  /**
   * @return The type of the test case. These should be defined in the master
   *     enum.
   */
  public TestType getType();

  /**
   * @return User defined description or comments for an instance of a test
   *     case.
   */
  public String getDescription();

  /**
   * Execute the test on a query.
   * @param query The query to run the test against. It will be executed and
   *     checked to see if it passes.
   * @return A TestResult that it passed or that it failed - with associated
   *     information.
   */
  public TestResult run(String query);

  /**
   * Convert the current object to its JSON format.
   * @return
   */
  public JSONObject toJson();

  /**
   * Populate the current TestCase from its JSON format.
   * @param json
   */
  public void fromJson(JSONObject json);
}
