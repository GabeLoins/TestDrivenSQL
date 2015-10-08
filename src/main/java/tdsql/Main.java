package tdsql;

import java.sql.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;

import joptsimple.OptionParser;
import spark.ModelAndView;
import spark.QueryParamsMap;
import spark.Request;
import spark.Response;
import spark.Route;
import spark.Spark;
import spark.TemplateViewRoute;

import com.google.common.collect.ImmutableMap;

public class Main {
  static Connection conn;
  public static void main(String[] args) {
    /*

    Sample jdbc stuff

    try {
      // load the sqlite-JDBC driver using the current class loader
      //conn = DriverManager.getConnection("jdbc:sqlite:/Users/gabe/Documents/Brown/CS/32hta/llo/src/main/resources/data/llo");
    } catch (SQLException e) {
      System.err.println("Error opening database");
      return;
    }
    */
    runSparkServer();
  }

  private static void runSparkServer() {
    // We need to serve some simple static files containing CSS and JavaScript.
    // This tells Spark where to look for urls of the form "/static/*".
    Spark.externalStaticFileLocation("src/main/resources/");

    // we need to have at least one get (even though were just serving static for the time being) so that it doesn't termiante
    Spark.get("/test", (request, response) -> {
      return "Hello";
    });

  }
}
