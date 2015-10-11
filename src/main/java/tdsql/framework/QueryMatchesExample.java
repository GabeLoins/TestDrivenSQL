package tdsql.framework;

import org.json.simple.JSONObject;

/**
 * TestCase implementation that compares a query executed on user-defined
 * sample test input tables with an expected output table. Runs the test in an
 * embedded in-memory database.
 * 
 * TODO(vqtran): Implement this class. This involves figuring out in-memory ORM
 *     stuff, and maybe how we might want to keep tables around, whether each
 *     test case will have its own table, or we throw them up on the fly.
 *     If we have enough memory for this (this seems like a poor design if this
 *     is supposed to be a server that many people use too).
 */
public class QueryMatchesExample implements TestCase {
  public QueryMatchesExample() {
  }

  @Override
  public TestType getType() {
    return TestType.QUERY_MATCHES_EXAMPLE;
  }

  @Override
  public String getDescription() {
    return null;
  }

  @Override
  public TestResult run(String query) {
    return null;
  }

  @Override
  public JSONObject toJson() {
    return null;
  }

  @Override
  public void fromJson(JSONObject json) {
  }
}
