package tdsql.framework;

public class TestResult {
  private boolean pass;

  private TestResult(boolean pass) {
    this.pass = pass;
  }

  public static TestResult pass() {
    return new TestResult(true);
  }

  public static TestResult fail() {
    return new TestResult(false);
  }

  public boolean passed() {
    return pass;
  }
}
