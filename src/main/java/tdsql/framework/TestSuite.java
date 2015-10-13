package tdsql.framework;

import java.util.ArrayList;
import java.util.List;

/**
 * A class representing a test suite, which is a set of test cases, for a query.
 */
public class TestSuite {
  private String query;
  private List<TestCase> cases;

  /**
   * Basic constructor, use the setters to set the values of this class in a
   * chained fashion.
   */
  public TestSuite() {
    query = "";
    cases = new ArrayList<>();
  }

  public String getQuery() {
    return query;
  }

  public List<TestCase> getCases() {
    return cases;
  }

  /**
   * Set the query that this suite is testing.
   * @param query A SQL query string.
   * @return this for chaining.
   */
  public TestSuite setQuery(String query) {
    this.query = query;
    return this;
  }

  /**
   * Set the test cases that this suite will run the query against.
   * @param cases A list (but probably set) of test cases.
   * @return this for chaining.
   */
  public TestSuite setCases(List<TestCase> cases) {
    this.cases = cases;
    return this;
  }

  /**
   * Add a test case the the list of test cases this suite will test.
   * @param t The test case to add.
   * @return this for chaining.
   */
  public TestSuite addCase(TestCase t) {
    this.cases.add(t);
    return this;
  }

  /**
   * Run all tests in the suite.
   * @return A list of TestResults by calling run separately on each of the
   *    TestCases.
   */
  public List<TestResult> run() {
    List<TestResult> results = new ArrayList<>();
    for (TestCase t : cases) {
      results.add(t.run(query));
    }
    return results;
  }

  /**
   * Run specific tests (at particular indices) from the list of test cases.
   * @param indices
   * @return
   */
  public List<TestResult> run(int ... indices) {
    List<TestResult> results = new ArrayList<>();
    for (int i : indices) {
      results.add(cases.get(i).run(query));
    }
    return results;
  }
}

