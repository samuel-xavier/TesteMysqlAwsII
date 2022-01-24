const mysql = require("mysql")

//local
//const db = mysql.createConnection({
//    host: "localhost",
//    //port: "",
//    user: "root",
//    password: "123456",
//    database: "bagaco2",
//});

//RDS AWS
const db = mysql.createConnection({
    host: "mysqlaws.co1ozssslcqk.us-east-2.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "setc2430",
    database: "bagaco2",
});

db.connect((err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Database conected.");
});