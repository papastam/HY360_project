package Database.Tables;

import java.sql.SQLException;
import Database.mainClasses.Account;

interface DBTable {

    public void addAccountFromJSON(String json) throws SQLException, ClassNotFoundException;
    public void addNewAccount(Account account) throws SQLException, ClassNotFoundException;
    public void createTable() throws SQLException, ClassNotFoundException;
    public String accountToJSON(Account account);
    public Account findAccount(String username, String password) throws SQLException, ClassNotFoundException;
}