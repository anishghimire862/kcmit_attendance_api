var db = require('./app/Model/db');

for(var i = 1; i<=31; i++) {
    db.query("INSERT INTO attendances(student_semester_id, status, date, subject_id) values(?,?,?,?)", 
        [65, 1, '2019-09-'+ i, 17], (err, data) => {
            if(err)
                console.log(err)
            else 
                console.log('Inserted');
    })
}
