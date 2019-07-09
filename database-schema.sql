create table student(
	id int PRIMARY KEY AUTO_INCREMENT,
    batch year,
    faculty varchar(10),
    name varchar(100),
    email varchar(200),
    phone varchar(10)
)

create table teachers(
	id int PRIMARY KEY AUTO_INCREMENT,
	name varchar(100),
    email varchar(200),
    phone varchar(10),
    password varchar(200),
    image varchar(200)
)

create table subjects(
	id int PRIMARY KEY AUTO_INCREMENT,
	subject_code varchar(20),
    subject_name varchar(200)
)

create table teacher_subjects(
	id int PRIMARY KEY AUTO_INCREMENT,
    teacher_id int,
    subject_id int,
    `from` date,
    `to` date,
    semester varchar(1),
    FOREIGN KEY (teacher_id) REFERENCES teachers(id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
)

create table student_subject_semesters(
	id int PRIMARY KEY AUTO_INCREMENT,
    student_semester_id int,
    subject_id int,
    FOREIGN KEY (student_semester_id) REFERENCES student_semesters(id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
)

create table attendances(
	id int PRIMARY KEY AUTO_INCREMENT,
	`date` date,
    status varchar(1),
    student_semester_id int,
    subject_id int,
    FOREIGN KEY (student_semester_id) REFERENCES student_semesters(id),
	    FOREIGN KEY (subject_id) REFERENCES subjects(id)

)