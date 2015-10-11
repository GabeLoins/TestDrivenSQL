package tdsql.framework;

public class TestTypeNotFoundException extends Exception {

  private static final long serialVersionUID = 432272783560258837L; 

  public TestTypeNotFoundException(int invalidType) {
    super("Test case type of "
        + invalidType + " not found to be a valid TestType.");
  }
}
