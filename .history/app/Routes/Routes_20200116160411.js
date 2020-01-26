var express = require('express');
var multer = require('multer');
var router = express();

var multerStorage = require('../../multer');
var upload = multer({ storage: multerStorage.storage });

var validator = require('../../middleware/validator');
var auth = require('../../config/middleware/authorization')
var LoginController = require('../Controller/login.controller')

var Students = require('../Controller/students.controller');
var StudentSemesters = require('../Controller/student.semesters.controller');

var Teachers = require('../Controller/teachers.controller');
var TeacherSubjects = require('../Controller/teacher.subjects.controller');

var Subjects = require('../Controller/subjects.controller');
var StudentSubjectSemesters = require('../Controller/student.subject.semesters.controller');

var attendances = require('../Controller/attendances.controller');

var excel = require('../Controller/excel.controller');

// login

router.post('/login',
    LoginController.login
)

router.get('/api/auth/user',
	LoginController.getDetails
)

// routes for students

router.get('/students',
    // auth.permit('teacher'),
    Students.getStudents
);

router.get('/students/:id',
    Students.getStudentById
);

router.get('/students/batch/:batch',
    Students.getStudentByBatch
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

// routes for teacher_subjects

router.get('/teacher_subjects',
    TeacherSubjects.getTeacherSubjects
);

router.get('/teacher_subjects/teacher/:teacherId',
    TeacherSubjects.getTeacherSubjectByTeacherId
);

router.get('/teacher_subjects/subject/:subjectId',
    TeacherSubjects.getTeacherSubjectBySubjectId
);

router.post('/teacher_subjects',
    TeacherSubjects.addTeacherSubject
);

router.patch('/teacher_subjects',
    TeacherSubjects.updateTeacherSubject
);

// subjects

router.get('/subjects',
    Subjects.getSubjects
);

router.get('/subjects/:id',
    Subjects.getSubjectById
);

router.post('/subjects',
    Subjects.addSubject
);

router.patch('/subjects',
    Subjects.updateSubject
);

router.delete('/subjects/:id',
    Subjects.deleteSubject
);

// student_subject_semesters

router.get('/student_subject_semesters',
    StudentSubjectSemesters.getStudentSubjectSemesters
);

router.post('/student_subject_semesters',
    StudentSubjectSemesters.addStudentSubjectSemester
);

// route to get all students of a class provided faculty, section and semester

router.get('/attendance/:faculty/:section/:semester',
    attendances.getStudentsForAttendance
)

// router.get('/attendance/:faculty/:section/:semester',
//     attendances.getStudentsForAttendance
// )

router.post('/attendance',
	attendances.submitAttendance
)

router.get('/attendance_sheet/:semester/:section/:faculty/:subject_code/:from/:to',
	attendances.getAttendance
)

// excel 

router.get('/excel/:semester/:section/:faculty/:subject_code/:from/:to',
	attendances.getAttendanceReport
)


module.exports = router;
