var express = require('express');
var multer = require('multer');
var router = express();

var multerStorage = require('../../multer');
var upload = multer({ storage: multerStorage.storage });

var validator = require('../../middleware/validator');

var Students = require('../Controller/students.controller');
var StudentSemesters = require('../Controller/student.semesters.controller');

var Teachers = require('../Controller/teachers.controller');
// routes for students

router.get('/students',
    Students.getStudents
);

router.get('/students/:id',
    Students.getStudentById
);

router.post('/students',
    // validator.validateEmptyString,
    upload.single('image'),
    Students.addStudent
);

router.patch('/students',
    upload.single('image'),
    Students.updateStudent
);

router.delete('/students/:id',
    Students.deleteStudent
);

// routes for student_semesters

router.get('/student_semesters',
    StudentSemesters.getStudentSemesters
);

router.get('/student_semesters/:id',
    StudentSemesters.getStudentSemestersByStudentSemesterId
);

                    //returns all semesters studied by a student.
router.get('/student_semesters/all_semesters/:id',
    StudentSemesters.getStudentSemestersByStudentId
);

router.post('/student_semesters',
    StudentSemesters.addStudentSemester
);

router.patch('/student_semesters',
    StudentSemesters.updateStudentSemester
);

router.delete('/student_semesters/:id',
    StudentSemesters.deleteStudentSemester
);

// routes for teachers

router.get('/teachers',
    Teachers.getTeachers
);

router.get('/teachers/:id',
    Teachers.getTeacherById
);

router.post('/teachers',
    upload.single('image'),
    Teachers.addTeacher
);

router.patch('/teachers',
    upload.single('image'),
    Teachers.updateTeacher
);

router.delete('/teachers/:id',
    Teachers.deleteTeacher
);

module.exports = router;