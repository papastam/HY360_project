package main.java.Database.Tables;

import Database.Connection.DB_Connection;
import Database.mainClasses.Account;
import com.google.gson.Gson;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;

public class TransactionsTable {

    Gson gson = new Gson();

    public void createTable() throws SQLException, ClassNotFoundException {

        Connection con = DB_Connection.getConnection();
        Statement stmt = con.createStatement();
        String query   = "CREATE TABLE transactions ("
                + "tid INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, "
                + "cli_acc_id INTEGER NOT NULL, "
                + "mer_acc_id INTEGER NOT NULL, "
                + "date DATE NOT NULL, "
                + "ammount DOUBLE NOT NULL);";

        stmt.execute(sql);
        stmt.close();
        con.close();
    }
}