const mysql= require('mysql2');

// dateStrings has been set to true in order to turn off DATE type casting by node
// date returned by MySql is YYYY-MM-DD and after type casting node returns yyyy-MM-ddTHH:mm:ss.000Z

// this wasted my fucking few hourssssssssssssssssssssss

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'kcmit_attendance',
		dateStrings: true
});

module.exports=db;
