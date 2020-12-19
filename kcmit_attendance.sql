-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 19, 2020 at 12:36 PM
-- Server version: 10.3.27-MariaDB
-- PHP Version: 7.3.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kcmit_attendance`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendances`
--

CREATE TABLE `attendances` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `status` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `semester` int(11) NOT NULL,
  `teacher_id_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attendances`
--

INSERT INTO `attendances` (`id`, `date`, `status`, `subject_id`, `student_id`, `semester`, `teacher_id_fk`) VALUES
(1, '2020-01-25', '1', 6, 1, 7, 11),
(2, '2020-01-25', '1', 6, 4, 7, 11),
(3, '2020-01-25', '1', 6, 7, 7, 11),
(4, '2020-01-25', '1', 6, 8, 7, 11),
(5, '2020-01-25', '1', 6, 21, 7, 11),
(6, '2020-01-25', '1', 6, 22, 7, 11),
(7, '2020-01-25', '1', 6, 23, 7, 11),
(8, '2020-01-25', '1', 6, 24, 7, 11),
(9, '2020-01-25', '0', 6, 25, 7, 11),
(10, '2020-01-25', '0', 6, 26, 7, 11),
(11, '2020-01-25', '0', 6, 27, 7, 11),
(12, '2020-07-25', '1', 14, 1, 8, 11),
(13, '2020-07-25', '1', 14, 4, 8, 11),
(14, '2020-07-25', '1', 14, 7, 8, 11),
(15, '2020-07-25', '1', 14, 8, 8, 11),
(16, '2020-07-25', '0', 14, 21, 8, 11),
(17, '2020-07-25', '1', 14, 22, 8, 11),
(18, '2020-07-25', '0', 14, 23, 8, 11),
(19, '2020-07-25', '1', 14, 24, 8, 11),
(20, '2020-07-25', '0', 14, 25, 8, 11),
(21, '2020-07-25', '0', 14, 26, 8, 11),
(22, '2020-07-25', '0', 14, 27, 8, 11),
(23, '2020-07-25', '1', 13, 1, 8, 12),
(24, '2020-07-25', '1', 13, 4, 8, 12),
(25, '2020-07-25', '1', 13, 7, 8, 12),
(26, '2020-07-25', '1', 13, 8, 8, 12),
(27, '2020-07-25', '0', 13, 21, 8, 12),
(28, '2020-07-25', '1', 13, 22, 8, 12),
(29, '2020-07-25', '0', 13, 23, 8, 12),
(30, '2020-07-25', '1', 13, 24, 8, 12),
(31, '2020-07-25', '0', 13, 25, 8, 12),
(32, '2020-07-25', '0', 13, 26, 8, 12),
(33, '2020-07-25', '0', 13, 27, 8, 12),
(34, '2020-07-26', '1', 13, 1, 8, 12),
(35, '2020-07-26', '1', 13, 4, 8, 12),
(36, '2020-07-26', '1', 13, 7, 8, 12),
(37, '2020-07-26', '1', 13, 8, 8, 12),
(38, '2020-07-26', '0', 13, 21, 8, 12),
(39, '2020-07-26', '0', 13, 22, 8, 12),
(40, '2020-07-26', '0', 13, 23, 8, 12),
(41, '2020-07-26', '0', 13, 24, 8, 12),
(42, '2020-07-26', '0', 13, 25, 8, 12),
(43, '2020-07-26', '0', 13, 26, 8, 12),
(44, '2020-07-26', '0', 13, 27, 8, 12),
(45, '2020-07-26', '1', 14, 1, 8, 11),
(46, '2020-07-26', '1', 14, 4, 8, 11),
(47, '2020-07-26', '1', 14, 7, 8, 11),
(48, '2020-07-26', '1', 14, 8, 8, 11),
(49, '2020-07-26', '0', 14, 21, 8, 11),
(50, '2020-07-26', '0', 14, 22, 8, 11),
(51, '2020-07-26', '0', 14, 23, 8, 11),
(52, '2020-07-26', '0', 14, 24, 8, 11),
(53, '2020-07-26', '0', 14, 25, 8, 11),
(54, '2020-07-26', '0', 14, 26, 8, 11),
(55, '2020-07-26', '0', 14, 27, 8, 11),
(56, '2020-11-24', '1', 11, 19, 1, 11),
(57, '2020-11-24', '1', 11, 20, 1, 11);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `batch` year(4) DEFAULT NULL,
  `faculty` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `section` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'A',
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'image-1562687330203.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `batch`, `faculty`, `section`, `name`, `email`, `gender`, `phone`, `image`) VALUES
(1, 2016, 'BIM', 'B', 'Anish Ghimire', 'anishghimire862@gmail.com', 'male', 'null', 'image-1574950828280.jpeg'),
(2, 2017, 'BBA', 'A', 'Swastika Thapa', 'swas@gmail.com', 'female', '1234567890', 'image-1562687330203.png'),
(3, 2016, 'BBA', 'A', 'Kriti Gautam', 'kriti@gmail.com', 'female', '1234567890', 'image-1562687330203.png'),
(4, 2016, 'BIM', 'B', 'Dipak Raj Baddu', 'dips@gmail.com', 'male', '1234567890', 'image-1575365210432.png'),
(5, 2017, 'BIM', 'A', 'Sachina Ghimire', 'sachina@gmail.com', 'female', '1234567890', 'image-1562687330203.png'),
(6, 2018, 'BBA', 'A', 'Rajshree Subedi', 'rajshree@email.com', 'female', '1234567890', 'image-1562687330203.png'),
(7, 2016, 'BIM', 'B', 'Saroj Kafle', 'sarose@asjd.com', 'male', NULL, 'image-1562687330203.png'),
(8, 2016, 'BIM', 'B', 'Parshad Ghimire', 'parshad@ha.co', 'male', NULL, 'image-1562687330203.png'),
(9, 2018, 'BBA', 'A', 'Nimidika Baskota', 'nimi@dika.com', 'female', NULL, 'image-1562687330203.png'),
(19, 2019, 'BCA', 'A', 'XYZ XYZ', 'asdfghjkl@dfg.com', 'others', 'undefined', 'image-1562687330203.png'),
(20, 2019, 'BCA', 'A', 'qwe', 'undefined', 'others', 'undefined', 'image-1562687330203.png'),
(21, 2016, 'BIM', 'B', 'Krishna Adhikari', 'krishna@krishna.com', NULL, 'undefined', 'image-1562687330203.png'),
(22, 2016, 'BIM', 'B', 'Aayusha Rana', 'aayusha@gmail.com', NULL, 'undefined', 'image-1562687330203.png'),
(23, 2016, 'BIM', 'B', 'Amir KC', 'amir@hh.com', NULL, 'undefined', 'image-1562687330203.png'),
(24, 2016, 'BIM', 'B', 'Desdemona Dhakal', 'desdu@desdu.co', NULL, 'undefined', 'image-1562687330203.png'),
(25, 2016, 'BIM', 'B', 'Puran Ban', 'puran@puran.com', NULL, 'undefined', 'image-1562687330203.png'),
(26, 2016, 'BIM', 'B', 'Saman Pasa Nakarmi', 'pasa@pasa.com', NULL, 'undefined', 'image-1562687330203.png'),
(27, 2016, 'BIM', 'B', 'Pradip Chapagain', 'pradip@chapagain.com', NULL, 'undefined', 'image-1562687330203.png');

-- --------------------------------------------------------

--
-- Table structure for table `student_semesters`
--

CREATE TABLE `student_semesters` (
  `id` int(11) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `from` date DEFAULT NULL,
  `to` date DEFAULT NULL,
  `section` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `semester` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student_semesters`
--

INSERT INTO `student_semesters` (`id`, `student_id`, `from`, `to`, `section`, `semester`) VALUES
(1, 1, '2019-01-01', '2019-10-31', 'B', '6');

-- --------------------------------------------------------

--
-- Table structure for table `student_subject_semesters`
--

CREATE TABLE `student_subject_semesters` (
  `id` int(11) NOT NULL,
  `student_semester_id` int(11) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `subject_code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject_name` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`id`, `subject_code`, `subject_name`) VALUES
(3, 'IT003', 'C Programming'),
(5, 'OOAD', 'Object Oriented Analysis and Design'),
(6, 'MIS', 'Management Information System'),
(7, 'AI', 'Artificial Intelligience'),
(8, 'CG', 'Computer Graphics'),
(9, 'JAVA', 'Java Programming - II'),
(10, 'OM', 'Operations Management'),
(11, 'DL', 'Digital Logic'),
(12, 'ENTR', 'IT Entrepreneurship and Supply Chain Management'),
(13, 'ECOIT', 'Economics of Information'),
(14, 'OS', 'Operating System'),
(15, 'MW', 'Data Mining and Warehousing');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT 'image-1562687330203.png',
  `role` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'teacher'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `email`, `phone`, `password`, `image`, `role`) VALUES
(1, 'admin', 'admin@kcmit.edu.np', '1234567890', 'admin', 'image-1579513819073.jpeg', 'admin'),
(11, 'Indra PC', 'indra@kcmit.edu.np', '1234567890', 'indra', 'image-1579513846171.png', 'teacher'),
(12, 'Kul Prasad Poudel', 'kul@kcmit.edu.np', '1234567890', 'kul', 'image-1579513859111.png', 'teacher'),
(13, 'Dinesh Bajhracharya', 'dinesh@ss.co', '1234567890', 'JbL\",CXaO6m5*mllgxHs', 'image-1579513834194.png', 'teacher'),
(14, 'Roshan Rijal', 'roshan@ss.co', '1234567890', 'JbLG_d]ZCDb0_U/elhHs', 'image-1562687330203.png', 'teacher'),
(15, 'Pradip Bhochhibhoya', 'pradip@ss.co', '1234567890', 'JbLEe`]Ng#W5%jQMJ>Hs', 'image-1579513874972.png', 'teacher'),
(16, 'Tulsi Bastola', 'ts@ss.co', '1234567890', 'JbL{RCtr>1e$l9`~[4Hs', 'image-1562687330203.png', 'teacher'),
(17, 'Binit Shrestha', 'binit@binit.com', '9866566565', 'JbLt^MT|:d9DuzpHN,Hs', 'image-1595766848649.png', 'teacher');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_subjects`
--

CREATE TABLE `teacher_subjects` (
  `id` int(11) NOT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `semester` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faculty` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teacher_subjects`
--

INSERT INTO `teacher_subjects` (`id`, `teacher_id`, `subject_id`, `semester`, `faculty`) VALUES
(2, 11, 3, '2', 'BIM'),
(3, 13, 5, '7', 'BIM'),
(4, 11, 6, '7', 'BIM'),
(5, 14, 6, '7', 'BIM'),
(6, 11, 8, '5', 'BIM'),
(7, 13, 9, '5', 'BIM'),
(8, 14, 9, '5', 'BIM'),
(9, 16, 10, '5', 'BBA'),
(10, 16, 10, '7', 'BIM'),
(11, 15, 6, '3', 'BBA'),
(12, 11, 11, '1', 'BCA'),
(13, 11, 11, '1', 'BIM'),
(14, 17, 12, '8', 'BIM'),
(15, 12, 13, '8', 'BIM'),
(16, 11, 14, '8', 'BIM'),
(17, 13, 15, '8', 'BIM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendances`
--
ALTER TABLE `attendances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `teacher_id_fk` (`teacher_id_fk`),
  ADD KEY `subject_id` (`subject_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_semesters`
--
ALTER TABLE `student_semesters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `student_subject_semesters`
--
ALTER TABLE `student_subject_semesters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_semester_id` (`student_semester_id`),
  ADD KEY `subject_id` (`subject_id`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teacher_subjects`
--
ALTER TABLE `teacher_subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`teacher_id`),
  ADD KEY `subject_id` (`subject_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attendances`
--
ALTER TABLE `attendances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `student_semesters`
--
ALTER TABLE `student_semesters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student_subject_semesters`
--
ALTER TABLE `student_subject_semesters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `teacher_subjects`
--
ALTER TABLE `teacher_subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attendances`
--
ALTER TABLE `attendances`
  ADD CONSTRAINT `attendances` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `attendances_ibfk_3` FOREIGN KEY (`teacher_id_fk`) REFERENCES `teachers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `attendances_ibfk_4` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `student_semesters`
--
ALTER TABLE `student_semesters`
  ADD CONSTRAINT `student_semesters_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);

--
-- Constraints for table `student_subject_semesters`
--
ALTER TABLE `student_subject_semesters`
  ADD CONSTRAINT `student_subject_semesters_ibfk_1` FOREIGN KEY (`student_semester_id`) REFERENCES `student_semesters` (`id`),
  ADD CONSTRAINT `student_subject_semesters_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`);

--
-- Constraints for table `teacher_subjects`
--
ALTER TABLE `teacher_subjects`
  ADD CONSTRAINT `teacher_subjects_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `teacher_subjects_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
