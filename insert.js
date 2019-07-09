var db = require('./app/Model/db');
// 2016
var firstStart = '2015-06-01';
var firstEnd = '2015-12-30';
var secondStart = '2016-01-01';
var secondEnd = '2016-06-30';
var thirdStart = '2016-07-01';
var thirdEnd = '2016-12-30';
var fourthStart = '2017-01-01';
var fourthEnd = '2017-05-30';
var fifthStart = '2017-06-01';
var fifthEnd = '2017-12-30';
var sixthStart = '2018-01-01';
var sixthEnd = '2018-05-30';
var seventhStart = '2018-06-01';
var seventhEnd = '2018-12-01';
var eighthStart = '2019-01-01';
var eighthEnd = '2019-10-01';
for(var i = 75; i<=87; i++) {
    db.query("INSERT INTO student_semesters(student_id, `from`, `to`, section, semester) values(?,?,?,?,?)", 
        [i, eighthStart, eighthEnd, 'B', 8], (err, data) => {
            if(err)
                console.log(err)
            else 
                console.log('Inserted');
    })
}