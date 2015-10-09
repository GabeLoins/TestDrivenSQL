package tdsql;

import java.sql.Connection;
import java.util.HashMap;

import spark.ModelAndView;
import spark.Spark;
import spark.template.jade.JadeTemplateEngine;

public class Main {
  static Connection conn;
  public static void main(String[] args) {
    runSparkServer();
  }

  private static void runSparkServer() {
    Spark.externalStaticFileLocation("public/");

    Spark.get("/",
        (request, response) -> new ModelAndView(new HashMap<>(), "index.jade"),
        new JadeTemplateEngine());

    Spark.get("/test", (request, response) -> "Hello World!");
  }
}
