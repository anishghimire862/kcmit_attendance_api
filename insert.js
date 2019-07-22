var db = require('./app/Model/db');

for(var i = 75; i<=87; i++) {
    db.query("INSERT INTO student_semesters(student_id, `from`, `to`, section, semester) values(?,?,?,?,?)", 
        [i, eighthStart, eighthEnd, 'B', 8], (err, data) => {
            if(err)
                console.log(err)
            else 
                console.log('Inserted');
    })
}