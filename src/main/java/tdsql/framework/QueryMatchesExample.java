package tdsql.framework;

import org.json.simple.JSONObject;

public class QueryMatchesExample implements TestCase {

  TestType type = TestType.QUERY_MATCHES_EXAMPLE;

  public QueryMatchesExample() {
  }

  @Override
  public TestType getType() {
    return type;
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
