-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 21, 2020 at 08:16 AM
-- Server version: 5.7.24
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `planif2d_serf`
--

DELIMITER $$
--
-- Procedures
--
DROP PROCEDURE IF EXISTS `cotyle_hype_loop`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `cotyle_hype_loop` (IN `max` INT, IN `min` INT)  NO SQL
BEGIN
    DECLARE y INT;

    WHILE max >= min DO
     SET y = max + 2;
     UPDATE `cotyle_hype` SET `ID` = y WHERE `ID` = max;
     SET max = max - 1;
    END WHILE; 

    SELECT * FROM `cotyle_hype` WHERE 1;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `cotyles`
--

DROP TABLE IF EXISTS `cotyles`;
CREATE TABLE IF NOT EXISTS `cotyles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `SizeXPixel` float NOT NULL,
  `SizeYPixel` float NOT NULL,
  `SizeXCm` float NOT NULL,
  `SizeYCm` float NOT NULL,
  `PosCenterX` float NOT NULL,
  `PosCenterY` float NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cotyles`
--

INSERT INTO `cotyles` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`) VALUES
(1, 'Cup49', 'images/Cup49.png', 1136, 915, 9.62, 7.75, 0, 0),
(2, 'Cup51', 'images/Cup51.png', 1136, 915, 9.62, 7.75, 0, 0),
(3, 'Cup53', 'images/Cup53.png', 1136, 915, 9.62, 7.75, 0, 0),
(4, 'Cup55', 'images/Cup55.png', 1136, 915, 9.62, 7.75, 0, 0),
(5, 'Cup57', 'images/Cup57.png', 1136, 915, 9.62, 7.75, 0, 0),
(6, 'Cup59', 'images/Cup59.png', 1136, 915, 9.62, 7.75, 0, 0),
(7, 'Cup61', 'images/Cup61.png', 1136, 915, 9.62, 7.75, 0, 0),
(8, 'Cup63', 'images/Cup63.png', 1136, 915, 9.62, 7.75, 0, 0),
(9, 'Novae41', 'images/Novae41.png', 1136, 915, 9.62, 7.75, 0, 0),
(10, 'Novae43', 'images/Novae43.png', 1136, 915, 9.62, 7.75, 0, 0),
(11, 'Novae45', 'images/Novae45.png', 1136, 915, 9.62, 7.75, 0, 0),
(12, 'Novae47', 'images/Novae47.png', 1136, 915, 9.62, 7.75, 0, 0),
(13, 'Novae49', 'images/Novae49.png', 1136, 915, 9.62, 7.75, 0, 0),
(14, 'Novae51', 'images/Novae51.png', 1136, 915, 9.62, 7.75, 0, 0),
(15, 'Novae53', 'images/Novae53.png', 1136, 915, 9.62, 7.75, 0, 0),
(16, 'Novae55', 'images/Novae55.png', 1136, 915, 9.62, 7.75, 0, 0),
(17, 'Novae57', 'images/Novae57.png', 1136, 915, 9.62, 7.75, 0, 0),
(18, 'Novae59', 'images/Novae59.png', 1136, 915, 9.62, 7.75, 0, 0),
(19, 'Novae61', 'images/Novae61.png', 1136, 915, 9.62, 7.75, 0, 0),
(20, 'Novae63', 'images/Novae63.png', 1136, 915, 9.62, 7.75, 0, 0),
(21, 'Novae65', 'images/Novae65.png', 1136, 915, 9.62, 7.75, 0, 0),
(22, 'Novae67', 'images/Novae67.png', 1136, 915, 9.62, 7.75, 0, 0),
(23, 'Novae69', 'images/Novae69.png', 1136, 915, 9.62, 7.75, 0, 0),
(24, 'Novae71', 'images/Novae71.png', 1136, 915, 9.62, 7.75, 0, 0),
(25, 'Novae73', 'images/Novae73.png', 1136, 915, 9.62, 7.75, 0, 0),
(26, 'Novae41', 'images/Novae41_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(27, 'Novae43', 'images/Novae43_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(28, 'Novae45', 'images/Novae45_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(29, 'Novae47', 'images/Novae47_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(30, 'Novae49', 'images/Novae49_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(31, 'Novae51', 'images/Novae51_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(32, 'Novae53', 'images/Novae53_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(33, 'Novae55', 'images/Novae55_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(34, 'Novae57', 'images/Novae57_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(35, 'Novae59', 'images/Novae59_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(36, 'Novae61', 'images/Novae61_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(37, 'Novae63', 'images/Novae63_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(38, 'Novae65', 'images/Novae65_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(39, 'Novae67', 'images/Novae67_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(40, 'Novae69', 'images/Novae69_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(41, 'Novae71', 'images/Novae71_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(42, 'Novae73', 'images/Novae73_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(43, 'Cup DM 44', 'images/ax_dm_cem_44.png', 1136, 915, 9.62, 7.75, 0, 0),
(44, 'Cup DM 46', 'images/ax_dm_cem_46.png', 1136, 915, 9.62, 7.75, 0, 0),
(45, 'Cup DM 48', 'images/ax_dm_cem_48.png', 1136, 915, 9.62, 7.75, 0, 0),
(46, 'Cup DM 50', 'images/ax_dm_cem_50.png', 1136, 915, 9.62, 7.75, 0, 0),
(47, 'Cup DM 52', 'images/ax_dm_cem_52.png', 1136, 915, 9.62, 7.75, 0, 0),
(48, 'Cup DM 54', 'images/ax_dm_cem_54.png', 1136, 915, 9.62, 7.75, 0, 0),
(49, 'Cup DM 56', 'images/ax_dm_cem_56.png', 1136, 915, 9.62, 7.75, 0, 0),
(50, 'Cup DM 58', 'images/ax_dm_cem_58.png', 1136, 915, 9.62, 7.75, 0, 0),
(51, 'Cup DM 60', 'images/ax_dm_cem_60.png', 1136, 915, 9.62, 7.75, 0, 0),
(52, 'Cup DM 62', 'images/ax_dm_cem_62.png', 1136, 915, 9.62, 7.75, 0, 0),
(53, 'Cup DM 64', 'images/ax_dm_cem_64.png', 1136, 915, 9.62, 7.75, 0, 0),
(54, 'Cup DM 66', 'images/ax_dm_cem_66.png', 1136, 915, 9.62, 7.75, 0, 0),
(55, 'Cup DM 68', 'images/ax_dm_cem_68.png', 1136, 915, 9.62, 7.75, 0, 0),
(56, 'Cup DM 44', 'images/ax_dm_cem_44_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(57, 'Cup DM 46', 'images/ax_dm_cem_46_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(58, 'Cup DM 48', 'images/ax_dm_cem_48_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(59, 'Cup DM 50', 'images/ax_dm_cem_50_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(60, 'Cup DM 52', 'images/ax_dm_cem_52_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(61, 'Cup DM 54', 'images/ax_dm_cem_54_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(62, 'Cup DM 56', 'images/ax_dm_cem_56_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(63, 'Cup DM 58', 'images/ax_dm_cem_58_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(64, 'Cup DM 60', 'images/ax_dm_cem_60_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(65, 'Cup DM 62', 'images/ax_dm_cem_62_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(66, 'Cup DM 64', 'images/ax_dm_cem_64_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(67, 'Cup DM 66', 'images/ax_dm_cem_66_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(68, 'Cup DM 68', 'images/ax_dm_cem_68_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(69, 'Cup NA 44', 'images/ax_sm_ne_44.png', 1136, 915, 9.62, 7.75, 0, 0),
(70, 'Cup NA 46', 'images/ax_sm_ne_46.png', 1136, 915, 9.62, 7.75, 0, 0),
(71, 'Cup NA 48', 'images/ax_sm_ne_48.png', 1136, 915, 9.62, 7.75, 0, 0),
(72, 'Cup NA 50', 'images/ax_sm_ne_50.png', 1136, 915, 9.62, 7.75, 0, 0),
(73, 'Cup NA 52', 'images/ax_sm_ne_52.png', 1136, 915, 9.62, 7.75, 0, 0),
(74, 'Cup NA 54', 'images/ax_sm_ne_54.png', 1136, 915, 9.62, 7.75, 0, 0),
(75, 'Cup NA 56', 'images/ax_sm_ne_56.png', 1136, 915, 9.62, 7.75, 0, 0),
(76, 'Cup NA 58', 'images/ax_sm_ne_58.png', 1136, 915, 9.62, 7.75, 0, 0),
(77, 'Cup NA 60', 'images/ax_sm_ne_60.png', 1136, 915, 9.62, 7.75, 0, 0),
(78, 'Cup NA 62', 'images/ax_sm_ne_62.png', 1136, 915, 9.62, 7.75, 0, 0),
(79, 'Cup NA 64', 'images/ax_sm_ne_64.png', 1136, 915, 9.62, 7.75, 0, 0),
(80, 'Cup NA 44', 'images/ax_sm_ne_44_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(81, 'Cup NA 46', 'images/ax_sm_ne_46_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(82, 'Cup NA 48', 'images/ax_sm_ne_48_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(83, 'Cup NA 50', 'images/ax_sm_ne_50_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(84, 'Cup NA 52', 'images/ax_sm_ne_52_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(85, 'Cup NA 54', 'images/ax_sm_ne_54_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(86, 'Cup NA 56', 'images/ax_sm_ne_56_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(87, 'Cup NA 58', 'images/ax_sm_ne_58_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(88, 'Cup NA 60', 'images/ax_sm_ne_60_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(89, 'Cup NA 62', 'images/ax_sm_ne_62_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(90, 'Cup NA 64', 'images/ax_sm_ne_64_R.png', 1136, 915, 9.62, 7.75, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cotyle_coptos_th`
--

DROP TABLE IF EXISTS `cotyle_coptos_th`;
CREATE TABLE IF NOT EXISTS `cotyle_coptos_th` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `SizeXPixel` float NOT NULL,
  `SizeYPixel` float NOT NULL,
  `SizeXCm` float NOT NULL,
  `SizeYCm` float NOT NULL,
  `PosCenterX` float NOT NULL,
  `PosCenterY` float NOT NULL,
  `taille` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cotyle_coptos_th`
--

INSERT INTO `cotyle_coptos_th` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`, `taille`) VALUES
(1, 'Novae COPTOS Th-45', 'images/Novae_T45.png', 1500, 1500, 12.7, 12.7, 0, 0, 45),
(2, 'Novae COPTOS Th-47', 'images/Novae_T47.png', 1500, 1500, 12.7, 12.7, 0, 0, 47),
(3, 'Novae COPTOS Th-49', 'images/Novae_T49.png', 1500, 1500, 12.7, 12.7, 0, 0, 49),
(4, 'Novae COPTOS Th-51', 'images/Novae_T51.png', 1500, 1500, 12.7, 12.7, 0, 0, 51),
(5, 'Novae COPTOS Th-53', 'images/Novae_T53.png', 1500, 1500, 12.7, 12.7, 0, 0, 53),
(6, 'Novae COPTOS Th-55', 'images/Novae_T55.png', 1500, 1500, 12.7, 12.7, 0, 0, 55),
(7, 'Novae COPTOS Th-57', 'images/Novae_T57.png', 1500, 1500, 12.7, 12.7, 0, 0, 57),
(8, 'Novae COPTOS Th-59', 'images/Novae_T59.png', 1500, 1500, 12.7, 12.7, 0, 0, 59),
(9, 'Novae COPTOS Th-61', 'images/Novae_T61.png', 1500, 1500, 12.7, 12.7, 0, 0, 61),
(10, 'Novae COPTOS Th-63', 'images/Novae_T63.png', 1500, 1500, 12.7, 12.7, 0, 0, 63),
(11, 'Novae COPTOS Th-65', 'images/Novae_T65.png', 1500, 1500, 12.7, 12.7, 0, 0, 65),
(12, 'Novae COPTOS Th-45', 'images/Novae_T45_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 45),
(13, 'Novae COPTOS Th-47', 'images/Novae_T47_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 47),
(14, 'Novae COPTOS Th-49', 'images/Novae_T49_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 49),
(15, 'Novae COPTOS Th-51', 'images/Novae_T51_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 51),
(16, 'Novae COPTOS Th-53', 'images/Novae_T53_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 53),
(17, 'Novae COPTOS Th-55', 'images/Novae_T55_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 55),
(18, 'Novae COPTOS Th-57', 'images/Novae_T57_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 57),
(19, 'Novae COPTOS Th-59', 'images/Novae_T59_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 59),
(20, 'Novae COPTOS Th-61', 'images/Novae_T61_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 61),
(21, 'Novae COPTOS Th-63', 'images/Novae_T63_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 63),
(22, 'Novae COPTOS Th-65', 'images/Novae_T65_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 65);

-- --------------------------------------------------------

--
-- Table structure for table `cotyle_hype`
--

DROP TABLE IF EXISTS `cotyle_hype`;
CREATE TABLE IF NOT EXISTS `cotyle_hype` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `SizeXPixel` float NOT NULL,
  `SizeYPixel` float NOT NULL,
  `SizeXCm` float NOT NULL,
  `SizeYCm` float NOT NULL,
  `PosCenterX` float NOT NULL,
  `PosCenterY` float NOT NULL,
  `taille` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cotyle_hype`
--

INSERT INTO `cotyle_hype` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`, `taille`) VALUES
(1, 'Cup-45', 'images/Cup45.png', 260, 271, 6.6, 6.88, 0, 0, 45),
(2, 'Cup-47', 'images/Cup47.png', 279, 276, 7.087, 7.01, 0, 0, 47),
(3, 'Cup-49', 'images/Cup49.png', 1136, 915, 9.62, 7.75, 0, 0, 49),
(4, 'Cup-51', 'images/Cup51.png', 1136, 915, 9.62, 7.75, 0, 0, 51),
(5, 'Cup-53', 'images/Cup53.png', 1136, 915, 9.62, 7.75, 0, 0, 53),
(6, 'Cup-55', 'images/Cup55.png', 1136, 915, 9.62, 7.75, 0, 0, 55),
(7, 'Cup-57', 'images/Cup57.png', 1136, 915, 9.62, 7.75, 0, 0, 57),
(8, 'Cup-59', 'images/Cup59.png', 1136, 915, 9.62, 7.75, 0, 0, 59),
(9, 'Cup-61', 'images/Cup61.png', 1136, 915, 9.62, 7.75, 0, 0, 61),
(10, 'Cup-63', 'images/Cup63.png', 1136, 915, 9.62, 7.75, 0, 0, 63),
(11, 'Cup-45', 'images/Cup45_R.png', 254, 265, 6.452, 6.73, 0, 0, 45),
(12, 'Cup-47', 'images/Cup47_R.png', 236, 247, 5.99, 6.27, 0, 0, 47),
(13, 'Cup-49', 'images/Cup49_R.png', 1136, 915, 9.62, 7.75, 0, 0, 49),
(14, 'Cup-51', 'images/Cup51_R.png', 1136, 915, 9.62, 7.75, 0, 0, 51),
(15, 'Cup-53', 'images/Cup53_R.png', 1136, 915, 9.62, 7.75, 0, 0, 53),
(16, 'Cup-55', 'images/Cup55_R.png', 1136, 915, 9.62, 7.75, 0, 0, 55),
(17, 'Cup-57', 'images/Cup57_R.png', 1136, 915, 9.62, 7.75, 0, 0, 57),
(18, 'Cup-59', 'images/Cup59_R.png', 1136, 915, 9.62, 7.75, 0, 0, 59),
(19, 'Cup-61', 'images/Cup61_R.png', 1136, 915, 9.62, 7.75, 0, 0, 61),
(20, 'Cup-63', 'images/Cup63_R.png', 1136, 915, 9.62, 7.75, 0, 0, 63);

-- --------------------------------------------------------

--
-- Table structure for table `cotyle_novae`
--

DROP TABLE IF EXISTS `cotyle_novae`;
CREATE TABLE IF NOT EXISTS `cotyle_novae` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `SizeXPixel` float NOT NULL,
  `SizeYPixel` float NOT NULL,
  `SizeXCm` float NOT NULL,
  `SizeYCm` float NOT NULL,
  `PosCenterX` float NOT NULL,
  `PosCenterY` float NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cotyle_novae`
--

INSERT INTO `cotyle_novae` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`) VALUES
(1, 'Novae-41', 'images/Novae41.png', 1136, 915, 9.62, 7.75, 0, 0),
(2, 'Novae-43', 'images/Novae43.png', 1136, 915, 9.62, 7.75, 0, 0),
(3, 'Novae-45', 'images/Novae45.png', 1136, 915, 9.62, 7.75, 0, 0),
(4, 'Novae-47', 'images/Novae47.png', 1136, 915, 9.62, 7.75, 0, 0),
(5, 'Novae-49', 'images/Novae49.png', 1136, 915, 9.62, 7.75, 0, 0),
(6, 'Novae-51', 'images/Novae51.png', 1136, 915, 9.62, 7.75, 0, 0),
(7, 'Novae-53', 'images/Novae53.png', 1136, 915, 9.62, 7.75, 0, 0),
(8, 'Novae-55', 'images/Novae55.png', 1136, 915, 9.62, 7.75, 0, 0),
(9, 'Novae-57', 'images/Novae57.png', 1136, 915, 9.62, 7.75, 0, 0),
(10, 'Novae-59', 'images/Novae59.png', 1136, 915, 9.62, 7.75, 0, 0),
(11, 'Novae-61', 'images/Novae61.png', 1136, 915, 9.62, 7.75, 0, 0),
(12, 'Novae-63', 'images/Novae63.png', 1136, 915, 9.62, 7.75, 0, 0),
(13, 'Novae-65', 'images/Novae65.png', 1136, 915, 9.62, 7.75, 0, 0),
(14, 'Novae-67', 'images/Novae67.png', 1136, 915, 9.62, 7.75, 0, 0),
(15, 'Novae-69', 'images/Novae69.png', 1136, 915, 9.62, 7.75, 0, 0),
(16, 'Novae-71', 'images/Novae71.png', 1136, 915, 9.62, 7.75, 0, 0),
(17, 'Novae-73', 'images/Novae73.png', 1136, 915, 9.62, 7.75, 0, 0),
(18, 'Novae-41', 'images/Novae41_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(19, 'Novae-43', 'images/Novae43_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(20, 'Novae-45', 'images/Novae45_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(21, 'Novae-47', 'images/Novae47_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(22, 'Novae-49', 'images/Novae49_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(23, 'Novae-51', 'images/Novae51_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(24, 'Novae-53', 'images/Novae53_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(25, 'Novae-55', 'images/Novae55_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(26, 'Novae-57', 'images/Novae57_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(27, 'Novae-59', 'images/Novae59_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(28, 'Novae-61', 'images/Novae61_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(29, 'Novae-63', 'images/Novae63_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(30, 'Novae-65', 'images/Novae65_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(31, 'Novae-67', 'images/Novae67_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(32, 'Novae-69', 'images/Novae69_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(33, 'Novae-71', 'images/Novae71_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(34, 'Novae-73', 'images/Novae73_R.png', 1136, 915, 9.62, 7.75, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cotyle_novae_e_th`
--

DROP TABLE IF EXISTS `cotyle_novae_e_th`;
CREATE TABLE IF NOT EXISTS `cotyle_novae_e_th` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `SizeXPixel` float NOT NULL,
  `SizeYPixel` float NOT NULL,
  `SizeXCm` float NOT NULL,
  `SizeYCm` float NOT NULL,
  `PosCenterX` float NOT NULL,
  `PosCenterY` float NOT NULL,
  `taille` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cotyle_novae_e_th`
--

INSERT INTO `cotyle_novae_e_th` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`, `taille`) VALUES
(1, 'Novae E Th-45', 'images/Novae_T45.png', 1500, 1500, 12.7, 12.7, 0, 0, 45),
(2, 'Novae E Th-47', 'images/Novae_T47.png', 1500, 1500, 12.7, 12.7, 0, 0, 47),
(3, 'Novae E Th-49', 'images/Novae_T49.png', 1500, 1500, 12.7, 12.7, 0, 0, 49),
(4, 'Novae E Th-51', 'images/Novae_T51.png', 1500, 1500, 12.7, 12.7, 0, 0, 51),
(5, 'Novae E Th-53', 'images/Novae_T53.png', 1500, 1500, 12.7, 12.7, 0, 0, 53),
(6, 'Novae E Th-55', 'images/Novae_T55.png', 1500, 1500, 12.7, 12.7, 0, 0, 55),
(7, 'Novae E Th-57', 'images/Novae_T57.png', 1500, 1500, 12.7, 12.7, 0, 0, 57),
(8, 'Novae E Th-59', 'images/Novae_T59.png', 1500, 1500, 12.7, 12.7, 0, 0, 59),
(9, 'Novae E Th-61', 'images/Novae_T61.png', 1500, 1500, 12.7, 12.7, 0, 0, 61),
(10, 'Novae E Th-63', 'images/Novae_T63.png', 1500, 1500, 12.7, 12.7, 0, 0, 63),
(11, 'Novae E Th-65', 'images/Novae_T65.png', 1500, 1500, 12.7, 12.7, 0, 0, 65),
(12, 'Novae E Th-45', 'images/Novae_T45_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 45),
(13, 'Novae E Th-47', 'images/Novae_T47_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 47),
(14, 'Novae E Th-49', 'images/Novae_T49_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 49),
(15, 'Novae E Th-51', 'images/Novae_T51_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 51),
(16, 'Novae E Th-53', 'images/Novae_T53_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 53),
(17, 'Novae E Th-55', 'images/Novae_T55_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 55),
(18, 'Novae E Th-57', 'images/Novae_T57_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 57),
(19, 'Novae E Th-59', 'images/Novae_T59_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 59),
(20, 'Novae E Th-61', 'images/Novae_T61_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 61),
(21, 'Novae E Th-63', 'images/Novae_T63_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 63),
(22, 'Novae E Th-65', 'images/Novae_T65_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 65);

-- --------------------------------------------------------

--
-- Table structure for table `cotyle_stick`
--

DROP TABLE IF EXISTS `cotyle_stick`;
CREATE TABLE IF NOT EXISTS `cotyle_stick` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `SizeXPixel` float NOT NULL,
  `SizeYPixel` float NOT NULL,
  `SizeXCm` float NOT NULL,
  `SizeYCm` float NOT NULL,
  `PosCenterX` float NOT NULL,
  `PosCenterY` float NOT NULL,
  `taille` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cotyle_stick`
--

INSERT INTO `cotyle_stick` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`, `taille`) VALUES
(1, 'Novae STICK-45', 'images/Novae_T45.png', 1500, 1500, 12.7, 12.7, 0, 0, 45),
(2, 'Novae STICK-47', 'images/Novae_T47.png', 1500, 1500, 12.7, 12.7, 0, 0, 47),
(3, 'Novae STICK-49', 'images/Novae_T49.png', 1500, 1500, 12.7, 12.7, 0, 0, 49),
(4, 'Novae STICK-51', 'images/Novae_T51.png', 1500, 1500, 12.7, 12.7, 0, 0, 51),
(5, 'Novae STICK-53', 'images/Novae_T53.png', 1500, 1500, 12.7, 12.7, 0, 0, 53),
(6, 'Novae STICK-55', 'images/Novae_T55.png', 1500, 1500, 12.7, 12.7, 0, 0, 55),
(7, 'Novae STICK-57', 'images/Novae_T57.png', 1500, 1500, 12.7, 12.7, 0, 0, 57),
(8, 'Novae STICK-59', 'images/Novae_T59.png', 1500, 1500, 12.7, 12.7, 0, 0, 59),
(9, 'Novae STICK-61', 'images/Novae_T61.png', 1500, 1500, 12.7, 12.7, 0, 0, 61),
(10, 'Novae STICK-63', 'images/Novae_T63.png', 1500, 1500, 12.7, 12.7, 0, 0, 63),
(11, 'Novae STICK-65', 'images/Novae_T65.png', 1500, 1500, 12.7, 12.7, 0, 0, 65),
(12, 'Novae STICK-45', 'images/Novae_T45_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 45),
(13, 'Novae STICK-47', 'images/Novae_T47_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 47),
(14, 'Novae STICK-49', 'images/Novae_T49_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 49),
(15, 'Novae STICK-51', 'images/Novae_T51_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 51),
(16, 'Novae STICK-53', 'images/Novae_T53_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 53),
(17, 'Novae STICK-55', 'images/Novae_T55_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 55),
(18, 'Novae STICK-57', 'images/Novae_T57_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 57),
(19, 'Novae STICK-59', 'images/Novae_T59_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 59),
(20, 'Novae STICK-61', 'images/Novae_T61_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 61),
(21, 'Novae STICK-63', 'images/Novae_T63_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 63),
(22, 'Novae STICK-65', 'images/Novae_T65_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 65);

-- --------------------------------------------------------

--
-- Table structure for table `cotyle_sunfit_th`
--

DROP TABLE IF EXISTS `cotyle_sunfit_th`;
CREATE TABLE IF NOT EXISTS `cotyle_sunfit_th` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(200) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `SizeXPixel` float NOT NULL,
  `SizeYPixel` float NOT NULL,
  `SizeXCm` float NOT NULL,
  `SizeYCm` float NOT NULL,
  `PosCenterX` float NOT NULL,
  `PosCenterY` float NOT NULL,
  `taille` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cotyle_sunfit_th`
--

INSERT INTO `cotyle_sunfit_th` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`, `taille`) VALUES
(1, 'Novae SUNFIT Th-43', 'images/Novae_T43.png', 1500, 1500, 12.7, 12.7, 0, 0, 43),
(2, 'Novae SUNFIT Th-45', 'images/Novae_T45.png', 1500, 1500, 12.7, 12.7, 0, 0, 45),
(3, 'Novae SUNFIT Th-47', 'images/Novae_T47.png', 1500, 1500, 12.7, 12.7, 0, 0, 47),
(4, 'Novae SUNFIT Th-49', 'images/Novae_T49.png', 1500, 1500, 12.7, 12.7, 0, 0, 49),
(5, 'Novae SUNFIT Th-51', 'images/Novae_T51.png', 1500, 1500, 12.7, 12.7, 0, 0, 51),
(6, 'Novae SUNFIT Th-53', 'images/Novae_T53.png', 1500, 1500, 12.7, 12.7, 0, 0, 53),
(7, 'Novae SUNFIT Th-55', 'images/Novae_T55.png', 1500, 1500, 12.7, 12.7, 0, 0, 55),
(8, 'Novae SUNFIT Th-57', 'images/Novae_T57.png', 1500, 1500, 12.7, 12.7, 0, 0, 57),
(9, 'Novae SUNFIT Th-59', 'images/Novae_T59.png', 1500, 1500, 12.7, 12.7, 0, 0, 59),
(10, 'Novae SUNFIT Th-61', 'images/Novae_T61.png', 1500, 1500, 12.7, 12.7, 0, 0, 61),
(11, 'Novae SUNFIT Th-63', 'images/Novae_T63.png', 1500, 1500, 12.7, 12.7, 0, 0, 63),
(12, 'Novae SUNFIT Th-65', 'images/Novae_T65.png', 1500, 1500, 12.7, 12.7, 0, 0, 65),
(13, 'Novae SUNFIT Th-43', 'images/Novae_T43_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 43),
(14, 'Novae SUNFIT Th-45', 'images/Novae_T45_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 45),
(15, 'Novae SUNFIT Th-47', 'images/Novae_T47_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 47),
(16, 'Novae SUNFIT Th-49', 'images/Novae_T49_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 49),
(17, 'Novae SUNFIT Th-51', 'images/Novae_T51_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 51),
(18, 'Novae SUNFIT Th-53', 'images/Novae_T53_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 53),
(19, 'Novae SUNFIT Th-55', 'images/Novae_T55_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 55),
(20, 'Novae SUNFIT Th-57', 'images/Novae_T57_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 57),
(21, 'Novae SUNFIT Th-59', 'images/Novae_T59_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 59),
(22, 'Novae SUNFIT Th-61', 'images/Novae_T61_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 61),
(23, 'Novae SUNFIT Th-63', 'images/Novae_T63_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 63),
(24, 'Novae SUNFIT Th-65', 'images/Novae_T65_R.png', 1500, 1500, 12.7, 12.7, 0, 0, 65);

-- --------------------------------------------------------

--
-- Table structure for table `implant`
--

DROP TABLE IF EXISTS `implant`;
CREATE TABLE IF NOT EXISTS `implant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `implant`
--

INSERT INTO `implant` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'HypeT2', 'images/HypeT2.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, 276, 0, 0, 135, 0),
(2, 'HypeT3', 'images/HypeT3.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, 276.5, 0, 0, 135, 0),
(3, 'HypeT4', 'images/HypeT4.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, 278.5, 0, 0, 135, 0),
(4, 'HypeT5', 'images/HypeT5.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, 282.5, 0, 0, 135, 0),
(5, 'HypeT6', 'images/HypeT6.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, 283, 0, 0, 135, 0),
(6, 'HypeT7', 'images/HypeT7.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, 286, 0, 0, 135, 0),
(7, 'HypeT8', 'images/HypeT8.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, 287.5, 0, 0, 135, 0),
(8, 'HypeT9', 'images/HypeT9.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, 289.5, 0, 0, 135, 0),
(9, 'LibraT2', 'images/LibraT2.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, 174.5, 0, 0, 0, 0),
(10, 'LibraT3', 'images/LibraT3.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, 174.5, 0, 0, 0, 0),
(11, 'LibraT4', 'images/LibraT4.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, 208.5, 0, 0, 0, 0),
(12, 'LibraT5', 'images/LibraT5.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, 210.5, 0, 0, 0, 0),
(13, 'LibraT6', 'images/LibraT6.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, 213, 0, 0, 0, 0),
(14, 'LibraT7', 'images/LibraT7.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, 214, 0, 0, 0, 0),
(15, 'LibraT8', 'images/LibraT8.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, 216.5, 0, 0, 135, 0),
(16, 'LibraT9', 'images/LibraT9.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, 216.5, 0, 0, 135, 0),
(17, 'LibraT2', 'images/LibraT2_R.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, -174.5, 0, 0, 0, 0),
(18, 'LibraT3', 'images/LibraT3_R.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, -174.5, 0, 0, 0, 0),
(19, 'LibraT4', 'images/LibraT4_R.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, -208.5, 0, 0, 0, 0),
(20, 'LibraT5', 'images/LibraT5_R.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, -210.5, 0, 0, 0, 0),
(21, 'LibraT6', 'images/LibraT6_R.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, -213, 0, 0, 0, 0),
(22, 'LibraT7', 'images/LibraT7_R.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, -214, 0, 0, 0, 0),
(23, 'LibraT8', 'images/LibraT8_R.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, -216.5, 0, 0, 135, 0),
(24, 'LibraT9', 'images/LibraT9_R.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, -216.5, 0, 0, 135, 0),
(25, 'ax_cem_std 1\r\n', 'images/ax_cem_std_T1.png', 630, 5.33, 1332, 11.28, 0, 0, 0, 0, 0, 0, 0, 0, 182.026, -232, 580, 0, 0),
(26, 'ax_cem_std 2', 'images/ax_cem_std_T2.png', 653, 5.53, 1392, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, 221.996, -243.5, 610, 0, 0),
(27, 'ax_cem_std 3', 'images/ax_cem_std_T3.png', 671, 5.68, 1447, 12.25, 0, 0, 0, 0, 0, 0, 0, 0, 224.454, -252.5, 610, 0, 0),
(28, 'ax_cem_std 4', 'images/ax_cem_std_T4.png', 699, 5.92, 1538, 13.02, 0, 0, 0, 0, 0, 0, 0, 0, 231.426, -266.5, 683, 0, 0),
(29, 'ax_cem_std 5', 'images/ax_cem_std_T5.png', 722, 6.11, 1609, 13.62, 0, 0, 0, 0, 0, 0, 0, 0, 235.152, -277, 718.5, 0, 0),
(30, 'ax_cem_std 6', 'images/ax_cem_std_T6.png', 745, 6.31, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, 238.494, -289.5, 752.5, 0, 0),
(31, 'ax_cem_std 7', 'images/ax_cem_std_T7.png', 767, 6.49, 1742, 14.75, 0, 0, 0, 0, 0, 0, 0, 0, 243.455, -300.5, 785, 0, 0),
(32, 'ax_cem_std 8', 'images/ax_cem_std_T8.png', 790, 6.69, 1809, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, 249.163, -311, 818.5, 0, 0),
(33, 'ax_cem_std 9', 'images/ax_cem_std_T9.png', 813, 6.88, 1877, 15.89, 0, 0, 0, 0, 0, 0, 0, 0, 252.881, -323.5, 852.5, 0, 0),
(34, 'ax_cem_std 10', 'images/ax_cem_std_T10.png', 837, 7.09, 1936, 16.39, 0, 0, 0, 0, 0, 0, 0, 0, 256.176, -334.5, 882, 0, 0),
(35, 'ax_cem_std 1\r\n', 'images/ax_cem_std_T1_R.png', 630, 5.33, 1332, 11.28, 0, 0, 0, 0, 0, 0, 0, 0, -182.026, 232, 580, 0, 0),
(36, 'ax_cem_std 2', 'images/ax_cem_std_T2_R.png', 653, 5.53, 1392, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, -221.996, 243.5, 610, 0, 0),
(37, 'ax_cem_std 3', 'images/ax_cem_std_T3_R.png', 671, 5.68, 1447, 12.25, 0, 0, 0, 0, 0, 0, 0, 0, -224.454, 252.5, 637.5, 0, 0),
(38, 'ax_cem_std 4', 'images/ax_cem_std_T4_R.png', 699, 5.92, 1538, 13.02, 0, 0, 0, 0, 0, 0, 0, 0, -231.426, 266.5, 683, 0, 0),
(39, 'ax_cem_std 5', 'images/ax_cem_std_T5_R.png', 722, 6.11, 1609, 13.62, 0, 0, 0, 0, 0, 0, 0, 0, -235.152, 277, 718.5, 0, 0),
(40, 'ax_cem_std 6', 'images/ax_cem_std_T6_R.png', 745, 6.31, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, -238.494, 289.5, 752.5, 0, 0),
(41, 'ax_cem_std 7', 'images/ax_cem_std_T7_R.png', 767, 6.49, 1742, 14.75, 0, 0, 0, 0, 0, 0, 0, 0, -243.455, 300.5, 785, 0, 0),
(42, 'ax_cem_std 8', 'images/ax_cem_std_T8_R.png', 790, 6.69, 1809, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, -249.163, 311, 818.5, 0, 0),
(43, 'ax_cem_std 9', 'images/ax_cem_std_T9_R.png', 813, 6.88, 1877, 15.89, 0, 0, 0, 0, 0, 0, 0, 0, -252.881, 323.5, 852.5, 0, 0),
(44, 'ax_cem_std 10', 'images/ax_cem_std_T10_R.png', 837, 7.09, 1936, 16.39, 0, 0, 0, 0, 0, 0, 0, 0, -256.176, 334.5, 882, 0, 0),
(45, 'ax_cem_var 1', 'images/ax_cem_var_T1.png', 661, 5.6, 1284, 10.87, 0, 0, 0, 0, 0, 0, 0, 0, 232.53, -251.5, 554, 0, 0),
(46, 'ax_cem_var 2', 'images/ax_cem_var_T2.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, 238.569, -264.5, 582.5, 0, 0),
(47, 'ax_cem_var 3', 'images/ax_cem_var_T3.png', 704, 5.96, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, 239.785, -273, 604.5, 0, 0),
(48, 'ax_cem_var 4', 'images/ax_cem_var_T4.png', 735, 6.22, 1480, 12.53, 0, 0, 0, 0, 0, 0, 0, 0, 248.151, -288.5, 652, 0, 0),
(49, 'ax_cem_var 5', 'images/ax_cem_var_T5.png', 760, 6.43, 1550, 13.12, 0, 0, 0, 0, 0, 0, 0, 0, 254.121, -302, 687, 0, 0),
(50, 'ax_cem_var 6', 'images/ax_cem_var_T6.png', 786, 6.65, 1614, 13.67, 0, 0, 0, 0, 0, 0, 0, 0, 260.03, -315, 750, 0, 0),
(51, 'ax_cem_var 7', 'images/ax_cem_var_T7.png', 810, 6.86, 1676, 14.19, 0, 0, 0, 0, 0, 0, 0, 0, 264.49, -326, 750, 0, 0),
(52, 'ax_cem_var 8', 'images/ax_cem_var_T8.png', 834, 7.06, 1739, 14.72, 0, 0, 0, 0, 0, 0, 0, 0, 269.337, -339, 781.5, 0, 0),
(53, 'ax_cem_var 9', 'images/ax_cem_var_T9.png', 860, 7.28, 1804, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, 276.429, -352, 814, 0, 0),
(54, 'ax_cem_var 10', 'images/ax_cem_var_T10.png', 885, 7.49, 1860, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, 281.215, -363.5, 842, 0, 0),
(55, 'ax_cem_var 1', 'images/ax_cem_var_T1_R.png', 661, 5.6, 1284, 10.87, 0, 0, 0, 0, 0, 0, 0, 0, -232.53, 251.5, 554, 0, 0),
(56, 'ax_cem_var 2', 'images/ax_cem_var_T2_R.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, -238.569, 264.5, 582.5, 0, 0),
(57, 'ax_cem_var 3', 'images/ax_cem_var_T3_R.png', 704, 5.96, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, -239.785, 273, 604.5, 0, 0),
(58, 'ax_cem_var 4', 'images/ax_cem_var_T4_R.png', 735, 6.22, 1480, 12.53, 0, 0, 0, 0, 0, 0, 0, 0, -248.151, 288.5, 652, 0, 0),
(59, 'ax_cem_var 5', 'images/ax_cem_var_T5_R.png', 760, 6.43, 1550, 13.12, 0, 0, 0, 0, 0, 0, 0, 0, -254.121, 302, 687, 0, 0),
(60, 'ax_cem_var 6', 'images/ax_cem_var_T6_R.png', 786, 6.65, 1614, 13.67, 0, 0, 0, 0, 0, 0, 0, 0, -260.03, 315, 750, 0, 0),
(61, 'ax_cem_var 7', 'images/ax_cem_var_T7_R.png', 810, 6.86, 1676, 14.19, 0, 0, 0, 0, 0, 0, 0, 0, -264.49, 326, 750, 0, 0),
(62, 'ax_cem_var 8', 'images/ax_cem_var_T8_R.png', 834, 7.06, 1739, 14.72, 0, 0, 0, 0, 0, 0, 0, 0, -269.337, 339, 781.5, 0, 0),
(63, 'ax_cem_var 9', 'images/ax_cem_var_T9_R.png', 860, 7.28, 1804, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, -276.429, 352, 814, 0, 0),
(64, 'ax_cem_var 10', 'images/ax_cem_var_T10_R.png', 885, 7.49, 1860, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, -281.215, 363.5, 842, 0, 0),
(65, 'ax_ha_std 1', 'images/ax_ha_std_T1.png', 630, 5.33, 1333, 11.29, 0, 0, 0, 0, 0, 0, 0, 0, 217.486, -232, 580.5, 0, 0),
(66, 'ax_ha_std 2', 'images/ax_ha_std_T2.png', 653, 5.53, 1393, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, 220.816, -243.5, 610.5, 0, 0),
(67, 'ax_ha_std 3', 'images/ax_ha_std_T3.png', 671, 5.68, 1448, 12.26, 0, 0, 0, 0, 0, 0, 0, 0, 223.273, -252.5, 683, 0, 0),
(68, 'ax_ha_std 4', 'images/ax_ha_std_T4.png', 699, 5.92, 1537, 13.01, 0, 0, 0, 0, 0, 0, 0, 0, 230.245, -266.5, 682.5, 0, 0),
(69, 'ax_ha_std 5', 'images/ax_ha_std_T5.png', 722, 6.11, 1610, 13.63, 0, 0, 0, 0, 0, 0, 0, 0, 235.152, -277, 719, 0, 0),
(70, 'ax_ha_std 6', 'images/ax_ha_std_T6.png', 745, 6.31, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, 238.494, -289.5, 752.5, 0, 0),
(71, 'ax_ha_std 7', 'images/ax_ha_std_T7.png', 767, 6.49, 1743, 14.76, 0, 0, 0, 0, 0, 0, 0, 0, 243.455, -300.5, 785.5, 0, 0),
(72, 'ax_ha_std 8', 'images/ax_ha_std_T8.png', 790, 6.69, 1809, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, 247.982, -311, 818.5, 0, 0),
(73, 'ax_ha_std 9', 'images/ax_ha_std_T9.png', 813, 6.88, 1876, 15.88, 0, 0, 0, 0, 0, 0, 0, 0, 252.881, -323.5, 852, 0, 0),
(74, 'ax_ha_std 10', 'images/ax_ha_std_T10.png', 837, 7.09, 1936, 16.39, 0, 0, 0, 0, 0, 0, 0, 0, 247.176, -334.5, 882, 0, 0),
(75, 'ax_ha_std 1', 'images/ax_ha_std_T1_R.png', 630, 5.33, 1333, 11.29, 0, 0, 0, 0, 0, 0, 0, 0, -217.486, 232, 580.5, 0, 0),
(76, 'ax_ha_std 2', 'images/ax_ha_std_T2_R.png', 653, 5.53, 1393, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, -220.816, 243.5, 610.5, 0, 0),
(77, 'ax_ha_std 3', 'images/ax_ha_std_T3_R.png', 671, 5.68, 1448, 12.26, 0, 0, 0, 0, 0, 0, 0, 0, -223.273, 252.5, 638, 0, 0),
(78, 'ax_ha_std 4', 'images/ax_ha_std_T4_R.png', 699, 5.92, 1537, 13.01, 0, 0, 0, 0, 0, 0, 0, 0, -230.245, 266.5, 682.5, 0, 0),
(79, 'ax_ha_std 5', 'images/ax_ha_std_T5_R.png', 722, 6.11, 1610, 13.63, 0, 0, 0, 0, 0, 0, 0, 0, -235.152, 277, 719, 0, 0),
(80, 'ax_ha_std 6', 'images/ax_ha_std_T6_R.png', 745, 6.31, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, -238.494, 289.5, 752.5, 0, 0),
(81, 'ax_ha_std 7', 'images/ax_ha_std_T7_R.png', 767, 6.49, 1743, 14.76, 0, 0, 0, 0, 0, 0, 0, 0, -243.455, 300.5, 785.5, 0, 0),
(82, 'ax_ha_std 8', 'images/ax_ha_std_T8_R.png', 790, 6.69, 1809, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, -247.982, 311, 818.5, 0, 0),
(83, 'ax_ha_std 9', 'images/ax_ha_std_T9_R.png', 813, 6.88, 1876, 15.88, 0, 0, 0, 0, 0, 0, 0, 0, -252.881, 323.5, 852, 0, 0),
(84, 'ax_ha_std 10', 'images/ax_ha_std_T10_R.png', 837, 7.09, 1936, 16.39, 0, 0, 0, 0, 0, 0, 0, 0, -247.176, 334.5, 882, 0, 0),
(85, 'ax_ha_std_col 1', 'images/ax_ha_std_col_T1.png', 630, 5.33, 1370, 11.6, 0, 0, 0, 0, 0, 0, 0, 0, 217.486, -232, 598, 0, 0),
(86, 'ax_ha_std_col 2', 'images/ax_ha_std_col_T2.png', 653, 5.53, 1393, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, 221.996, -243.5, 609.5, 0, 0),
(87, 'ax_ha_std_col 3', 'images/ax_ha_std_col_T3.png', 671, 5.68, 1448, 12.26, 0, 0, 0, 0, 0, 0, 0, 0, 222.092, -252.5, 637, 0, 0),
(88, 'ax_ha_std_col 4', 'images/ax_ha_std_col_T4.png', 699, 5.92, 1537, 13.01, 0, 0, 0, 0, 0, 0, 0, 0, 230.245, -266.5, 681.5, 0, 0),
(89, 'ax_ha_std_col 5', 'images/ax_ha_std_col_T5.png', 721, 6.1, 1610, 13.63, 0, 0, 0, 0, 0, 0, 0, 0, 235.211, -276.5, 718, 0, 0),
(90, 'ax_ha_std_col 6', 'images/ax_ha_std_col_T6.png', 746, 6.32, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, 238.437, -289, 751.5, 0, 0),
(91, 'ax_ha_std_col 7', 'images/ax_ha_std_col_T7.png', 767, 6.49, 1742, 14.75, 0, 0, 0, 0, 0, 0, 0, 0, 243.455, -300.5, 784, 0, 0),
(92, 'ax_ha_std_col 8', 'images/ax_ha_std_col_T8.png', 790, 6.69, 1808, 15.31, 0, 0, 0, 0, 0, 0, 0, 0, 246.801, -312, 817, 0, 0),
(93, 'ax_ha_std_col 9', 'images/ax_ha_std_col_T9.png', 814, 6.89, 1875, 15.88, 0, 0, 0, 0, 0, 0, 0, 0, 252.824, -323, 850.5, 0, 0),
(94, 'ax_ha_std_col 10', 'images/ax_ha_std_col_T10.png', 837, 7.09, 1936, 16.36, 0, 0, 0, 0, 0, 0, 0, 0, 257.357, -334.5, 881, 0, 0),
(95, 'ax_ha_std_col 1', 'images/ax_ha_std_col_T1_R.png', 630, 5.33, 1370, 11.6, 0, 0, 0, 0, 0, 0, 0, 0, -217.486, 232, 598, 0, 0),
(96, 'ax_ha_std_col 2', 'images/ax_ha_std_col_T2_R.png', 653, 5.53, 1393, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, -221.996, 243.5, 609.5, 0, 0),
(97, 'ax_ha_std_col 3', 'images/ax_ha_std_col_T3_R.png', 671, 5.68, 1448, 12.26, 0, 0, 0, 0, 0, 0, 0, 0, -222.092, 252.5, 637, 0, 0),
(98, 'ax_ha_std_col 4', 'images/ax_ha_std_col_T4_R.png', 699, 5.92, 1537, 13.01, 0, 0, 0, 0, 0, 0, 0, 0, -230.245, 266.5, 681.5, 0, 0),
(99, 'ax_ha_std_col 5', 'images/ax_ha_std_col_T5_R.png', 721, 6.1, 1610, 13.63, 0, 0, 0, 0, 0, 0, 0, 0, -235.211, 276.5, 718, 0, 0),
(100, 'ax_ha_std_col 6', 'images/ax_ha_std_col_T6_R.png', 746, 6.32, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, -238.437, 289, 751.5, 0, 0),
(101, 'ax_ha_std_col 7', 'images/ax_ha_std_col_T7_R.png', 767, 6.49, 1742, 14.75, 0, 0, 0, 0, 0, 0, 0, 0, -243.455, 300.5, 784, 0, 0),
(102, 'ax_ha_std_col 8', 'images/ax_ha_std_col_T8_R.png', 790, 6.69, 1808, 15.31, 0, 0, 0, 0, 0, 0, 0, 0, -246.801, 312, 817, 0, 0),
(103, 'ax_ha_std_col 9', 'images/ax_ha_std_col_T9_R.png', 814, 6.89, 1875, 15.88, 0, 0, 0, 0, 0, 0, 0, 0, -252.824, 323, 850.5, 0, 0),
(104, 'ax_ha_std_col 10', 'images/ax_ha_std_col_T10_R.png', 837, 7.09, 1936, 16.36, 0, 0, 0, 0, 0, 0, 0, 0, -257.357, 334.5, 881, 0, 0),
(105, 'ax_ha_var 1', 'images/ax_ha_varT1.png', 661, 5.6, 1284, 10.88, 0, 0, 0, 0, 0, 0, 0, 0, 232.53, -252.5, 554.5, 0, 0),
(106, 'ax_ha_var 2', 'images/ax_ha_varT2.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, 375.388, -263.5, 582.5, 0, 0),
(107, 'ax_ha_var 3', 'images/ax_ha_varT3.png', 704, 5.96, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, 239.785, -273, 609.5, 0, 0),
(108, 'ax_ha_var 4', 'images/ax_ha_varT4.png', 736, 6.22, 1481, 12.54, 0, 0, 0, 0, 0, 0, 0, 0, 248.151, -288.5, 652.5, 0, 0),
(109, 'ax_ha_var 5', 'images/ax_ha_varT5.png', 760, 6.43, 1549, 13.11, 0, 0, 0, 0, 0, 0, 0, 0, 252.939, -302, 686.5, 0, 0),
(110, 'ax_ha_var 6', 'images/ax_ha_varT6.png', 786, 6.65, 1614, 13.67, 0, 0, 0, 0, 0, 0, 0, 0, 258.848, -315, 719, 0, 0),
(111, 'ax_ha_var 7', 'images/ax_ha_varT7.png', 810, 6.86, 1676, 14.19, 0, 0, 0, 0, 0, 0, 0, 0, 264.49, -326, 750, 0, 0),
(112, 'ax_ha_var 8', 'images/ax_ha_varT8.png', 834, 7.06, 1740, 14.73, 0, 0, 0, 0, 0, 0, 0, 0, 269.337, -339, 782, 0, 0),
(113, 'ax_ha_var 9', 'images/ax_ha_varT9.png', 860, 7.28, 1803, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, 275.247, -352, 813.5, 0, 0),
(114, 'ax_ha_var 10', 'images/ax_ha_varT10.png', 885, 7.49, 1861, 15.76, 0, 0, 0, 0, 0, 0, 0, 0, 280.033, -364.5, 842.5, 0, 0),
(115, 'ax_ha_var 1', 'images/ax_ha_varT1_R.png', 661, 5.6, 1284, 10.88, 0, 0, 0, 0, 0, 0, 0, 0, -232.53, 252.5, 554.5, 0, 0),
(116, 'ax_ha_var 2', 'images/ax_ha_varT2_R.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, -375.388, 263.5, 582.5, 0, 0),
(117, 'ax_ha_var 3', 'images/ax_ha_varT3_R.png', 704, 5.96, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, -239.785, 273, 609.5, 0, 0),
(118, 'ax_ha_var 4', 'images/ax_ha_varT4_R.png', 736, 6.22, 1481, 12.54, 0, 0, 0, 0, 0, 0, 0, 0, -248.151, 288.5, 652.5, 0, 0),
(119, 'ax_ha_var 5', 'images/ax_ha_varT5_R.png', 760, 6.43, 1549, 13.11, 0, 0, 0, 0, 0, 0, 0, 0, -252.939, 302, 686.5, 0, 0),
(120, 'ax_ha_var 6', 'images/ax_ha_varT6_R.png', 786, 6.65, 1614, 13.67, 0, 0, 0, 0, 0, 0, 0, 0, -258.848, 315, 719, 0, 0),
(121, 'ax_ha_var 7', 'images/ax_ha_varT7_R.png', 810, 6.86, 1676, 14.19, 0, 0, 0, 0, 0, 0, 0, 0, -264.49, 326, 750, 0, 0),
(122, 'ax_ha_var 8', 'images/ax_ha_varT8_R.png', 834, 7.06, 1740, 14.73, 0, 0, 0, 0, 0, 0, 0, 0, -269.337, 339, 782, 0, 0),
(123, 'ax_ha_var 9', 'images/ax_ha_varT9_R.png', 860, 7.28, 1803, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, -275.247, 352, 813.5, 0, 0),
(124, 'ax_ha_var 10', 'images/ax_ha_varT10_R.png', 885, 7.49, 1861, 15.76, 0, 0, 0, 0, 0, 0, 0, 0, -280.033, 364.5, 842.5, 0, 0),
(125, 'ax_ha_var_col 1', 'images/ax_ha_var_colT1.png', 660, 5.59, 1285, 10.88, 0, 0, 0, 0, 0, 0, 0, 0, 232.594, -251, 554.5, 0, 0),
(126, 'ax_ha_var_col 2', 'images/ax_ha_var_colT2.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, 237.388, -263.5, 582.5, 0, 0),
(127, 'ax_ha_var_col 3', 'images/ax_ha_var_colT3.png', 705, 5.97, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, 239.724, -273.5, 609.5, 0, 0),
(128, 'ax_ha_var_col 4', 'images/ax_ha_var_colT4.png', 735, 6.22, 1480, 12.53, 0, 0, 0, 0, 0, 0, 0, 0, 248.151, -289.5, 652, 0, 0),
(129, 'ax_ha_var_col 5', 'images/ax_ha_var_colT5.png', 760, 6.43, 1549, 13.11, 0, 0, 0, 0, 0, 0, 0, 0, 254.121, -301, 686.5, 0, 0),
(130, 'ax_ha_var_col 6', 'images/ax_ha_var_colT6.png', 785, 6.65, 1612, 13.65, 0, 0, 0, 0, 0, 0, 0, 0, 258.519, -314.5, 718, 0, 0),
(131, 'ax_ha_var_col 7', 'images/ax_ha_var_colT7.png', 810, 6.86, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, 264.49, -327, 750.5, 0, 0),
(132, 'ax_ha_var_col 8', 'images/ax_ha_var_colT8.png', 834, 7.06, 1736, 14.72, 0, 0, 0, 0, 0, 0, 0, 0, 269.337, -339, 780, 0, 0),
(133, 'ax_ha_var_col 9', 'images/ax_ha_var_colT9.png', 860, 7.28, 1804, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, 276.429, -352, 814, 0, 0),
(134, 'ax_ha_var_col 10', 'images/ax_ha_var_colT10.png', 885, 7.49, 1860, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, 281.215, -363.5, 842, 0, 0),
(135, 'ax_ha_var_col 1', 'images/ax_ha_var_colT1_R.png', 660, 5.59, 1285, 10.88, 0, 0, 0, 0, 0, 0, 0, 0, -232.594, 251, 554.5, 0, 0),
(136, 'ax_ha_var_col 2', 'images/ax_ha_var_colT2_R.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, -237.388, 263.5, 582.5, 0, 0),
(137, 'ax_ha_var_col 3', 'images/ax_ha_var_colT3_R.png', 705, 5.97, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, -239.724, 273.5, 609.5, 0, 0),
(138, 'ax_ha_var_col 4', 'images/ax_ha_var_colT4_R.png', 735, 6.22, 1480, 12.53, 0, 0, 0, 0, 0, 0, 0, 0, -248.151, 289.5, 652, 0, 0),
(139, 'ax_ha_var_col 5', 'images/ax_ha_var_colT5_R.png', 760, 6.43, 1549, 13.11, 0, 0, 0, 0, 0, 0, 0, 0, -254.121, 301, 686.5, 0, 0),
(140, 'ax_ha_var_col 6', 'images/ax_ha_var_colT6_R.png', 785, 6.65, 1612, 13.65, 0, 0, 0, 0, 0, 0, 0, 0, -258.519, 314.5, 718, 0, 0),
(141, 'ax_ha_var_col 7', 'images/ax_ha_var_colT7_R.png', 810, 6.86, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, -264.49, 327, 750.5, 0, 0),
(142, 'ax_ha_var_col 8', 'images/ax_ha_var_colT8_R.png', 834, 7.06, 1736, 14.72, 0, 0, 0, 0, 0, 0, 0, 0, -269.337, 339, 780, 0, 0),
(143, 'ax_ha_var_col 9', 'images/ax_ha_var_colT9_R.png', 860, 7.28, 1804, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, -276.429, 352, 814, 0, 0),
(144, 'ax_ha_var_col 10', 'images/ax_ha_var_colT10_R.png', 885, 7.49, 1860, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, -281.215, 363.5, 842, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `implant_acl_cim_lat`
--

DROP TABLE IF EXISTS `implant_acl_cim_lat`;
CREATE TABLE IF NOT EXISTS `implant_acl_cim_lat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_acl_cim_lat`
--

INSERT INTO `implant_acl_cim_lat` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype ACL A cimenter Latéralisée-T2', 'images/hype_acl_T2.png', 231, 5.87, 598, 15.19, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -87.5, 270, 0, 0, 2),
(2, 'Hype ACL A cimenter Latéralisée-T3', 'images/hype_acl_T3.png', 239, 6.07, 636, 16.15, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -91.5, 289, 0, 0, 3),
(3, 'Hype ACL A cimenter Latéralisée-T4', 'images/hype_acl_T4.png', 246, 6.25, 673, 17.09, 0, 0, 0, 0, 0, 0, 0, 0, 90, -95, 307.5, 0, 0, 4),
(4, 'Hype ACL A cimenter Latéralisée-T5', 'images/hype_acl_T5.png', 252, 6.4, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, 91, -98, 312.5, 0, 0, 5),
(5, 'Hype ACL A cimenter Latéralisée-T6', 'images/hype_acl_T6.png', 259, 6.58, 709, 18.01, 0, 0, 0, 0, 0, 0, 0, 0, 91.5, -101.5, 325.5, 0, 0, 6),
(6, 'Hype ACL A cimenter Latéralisée-T7', 'images/hype_acl_T7.png', 266, 6.76, 728, 18.49, 0, 0, 0, 0, 0, 0, 0, 0, 92, -105, 335, 0, 0, 7),
(7, 'Hype ACL A cimenter Latéralisée-T8', 'images/hype_acl_T8.png', 272, 6.91, 743, 18.87, 0, 0, 0, 0, 0, 0, 0, 0, 93, -108, 342.5, 0, 0, 8),
(8, 'Hype ACL A cimenter Latéralisée-T9', 'images/hype_acl_T9.png', 278, 7.06, 775, 19.68, 0, 0, 0, 0, 0, 0, 0, 0, 94, -111, 358.5, 0, 0, 9),
(9, 'Hype ACL A cimenter Latéralisée-T2', 'images/hype_acl_T2_R.png', 231, 5.87, 598, 15.19, 0, 0, 0, 0, 0, 0, 0, 0, -89.5, 88.5, 270, 0, 0, 2),
(10, 'Hype ACL A cimenter Latéralisée-T3', 'images/hype_acl_T3_R.png', 239, 6.07, 636, 16.15, 0, 0, 0, 0, 0, 0, 0, 0, -89.5, 92.5, 289, 0, 0, 3),
(11, 'Hype ACL A cimenter Latéralisée-T4', 'images/hype_acl_T4_R.png', 246, 6.25, 673, 17.09, 0, 0, 0, 0, 0, 0, 0, 0, -90, 96, 307.5, 0, 0, 4),
(12, 'Hype ACL A cimenter Latéralisée-T5', 'images/hype_acl_T5_R.png', 252, 6.4, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, -91, 99, 312.5, 0, 0, 5),
(13, 'Hype ACL A cimenter Latéralisée-T6', 'images/hype_acl_T6_R.png', 259, 6.58, 709, 18.01, 0, 0, 0, 0, 0, 0, 0, 0, -91.5, 102.5, 325.5, 0, 0, 6),
(14, 'Hype ACL A cimenter Latéralisée-T7', 'images/hype_acl_T7_R.png', 266, 6.76, 728, 18.49, 0, 0, 0, 0, 0, 0, 0, 0, -92, 106, 335, 0, 0, 7),
(15, 'Hype ACL A cimenter Latéralisée-T8', 'images/hype_acl_T8_R.png', 272, 6.91, 743, 18.87, 0, 0, 0, 0, 0, 0, 0, 0, -93, 108, 342.5, 0, 0, 8),
(16, 'Hype ACL A cimenter Latéralisée-T9', 'images/hype_acl_T9_R.png', 278, 7.06, 775, 19.68, 0, 0, 0, 0, 0, 0, 0, 0, -94, 112, 358.5, 0, 0, 9);

-- --------------------------------------------------------

--
-- Table structure for table `implant_acs_cim_std`
--

DROP TABLE IF EXISTS `implant_acs_cim_std`;
CREATE TABLE IF NOT EXISTS `implant_acs_cim_std` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) CHARACTER SET latin1 NOT NULL,
  `url` varchar(200) CHARACTER SET latin1 NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_acs_cim_std`
--

INSERT INTO `implant_acs_cim_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype ACS A cimenter Standard-T1', 'images/hype_acs_T1.png', 202, 5.13, 584, 14.83, 0, 0, 0, 0, 0, 0, 0, 0, 76, -73, 263, 0, 0, 1),
(2, 'Hype ACS A cimenter Standard-T2', 'images/hype_acs_T2.png', 208, 5.28, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, 78, -76, 273, 0, 0, 2),
(3, 'Hype ACS A cimenter Standard-T3', 'images/hype_acs_T3.png', 216, 5.49, 647, 16.43, 0, 0, 0, 0, 0, 0, 0, 0, 78, -80, 294.5, 0, 0, 3),
(4, 'Hype ACS A cimenter Standard-T4', 'images/hype_acs_T4.png', 222, 5.64, 663, 16.84, 0, 0, 0, 0, 0, 0, 0, 0, 79, -83, 302.5, 0, 0, 4),
(5, 'Hype ACS A cimenter Standard-T5', 'images/hype_acs_T5.png', 228, 5.79, 680, 17.27, 0, 0, 0, 0, 0, 0, 0, 0, 79, -86, 311, 0, 0, 5),
(6, 'Hype ACS A cimenter Standard-T6', 'images/hype_acs_T6.png', 235, 5.97, 707, 17.96, 0, 0, 0, 0, 0, 0, 0, 0, 79.5, -89.5, 324.5, 0, 0, 6),
(7, 'Hype ACS A cimenter Standard-T7', 'images/hype_acs_T7.png', 242, 6.15, 741, 18.82, 0, 0, 0, 0, 0, 0, 0, 0, 80, -93, 341.5, 0, 0, 7),
(8, 'Hype ACS A cimenter Standard-T8', 'images/hype_acs_T8.png', 248, 6.3, 748, 19, 0, 0, 0, 0, 0, 0, 0, 0, 81, -96, 345, 0, 0, 8),
(9, 'Hype ACS A cimenter Standard-T9', 'images/hype_acs_T9.png', 255, 6.48, 764, 19.41, 0, 0, 0, 0, 0, 0, 0, 0, 82.5, -99.5, 353, 0, 0, 9),
(10, 'Hype ACS A cimenter Standard-T10', 'images/hype_acs_T10.png', 261, 6.63, 794, 20.17, 0, 0, 0, 0, 0, 0, 0, 0, 83.5, -102.5, 368, 0, 0, 10),
(11, 'Hype ACS A cimenter Standard-T11', 'images/hype_acs_T11.png', 265, 6.73, 829, 21.06, 0, 0, 0, 0, 0, 0, 0, 0, 84.5, -104.5, 385.5, 0, 0, 11),
(12, 'Hype ACS A cimenter Standard-T1', 'images/hype_acs_T1_R.png', 202, 5.13, 584, 14.83, 0, 0, 0, 0, 0, 0, 0, 0, -76, 73, 263, 0, 0, 1),
(13, 'Hype ACS A cimenter Standard-T2', 'images/hype_acs_T2_R.png', 208, 5.28, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, -78, 70, 273, 0, 0, 2),
(14, 'Hype ACS A cimenter Standard-T3', 'images/hype_acs_T3_R.png', 216, 5.49, 647, 16.43, 0, 0, 0, 0, 0, 0, 0, 0, -78, 72, 294.5, 0, 0, 3),
(15, 'Hype ACS A cimenter Standard-T4', 'images/hype_acs_T4_R.png', 222, 5.64, 663, 16.84, 0, 0, 0, 0, 0, 0, 0, 0, -79, 77, 302.5, 0, 0, 4),
(16, 'Hype ACS A cimenter Standard-T5', 'images/hype_acs_T5_R.png', 228, 5.79, 680, 17.27, 0, 0, 0, 0, 0, 0, 0, 0, -79, 81, 311, 0, 0, 5),
(17, 'Hype ACS A cimenter Standard-T6', 'images/hype_acs_T6_R.png', 235, 5.97, 707, 17.96, 0, 0, 0, 0, 0, 0, 0, 0, -79.5, 90.5, 324.5, 0, 0, 6),
(18, 'Hype ACS A cimenter Standard-T7', 'images/hype_acs_T7_R.png', 242, 6.15, 741, 18.82, 0, 0, 0, 0, 0, 0, 0, 0, -80, 94, 341.5, 0, 0, 7),
(19, 'Hype ACS A cimenter Standard-T8', 'images/hype_acs_T8_R.png', 248, 6.3, 748, 19, 0, 0, 0, 0, 0, 0, 0, 0, -81, 96, 345, 0, 0, 8),
(20, 'Hype ACS A cimenter Standard-T9', 'images/hype_acs_T9_R.png', 255, 6.48, 764, 19.41, 0, 0, 0, 0, 0, 0, 0, 0, -82.5, 100.5, 353, 0, 0, 9),
(21, 'Hype ACS A cimenter Standard-T10', 'images/hype_acs_T10_R.png', 261, 6.63, 794, 20.17, 0, 0, 0, 0, 0, 0, 0, 0, -83.5, 102.5, 368, 0, 0, 10),
(22, 'Hype ACS A cimenter Standard-T11', 'images/hype_acs_T11_R.png', 265, 6.73, 829, 21.06, 0, 0, 0, 0, 0, 0, 0, 0, -84.5, 105.5, 385.5, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_cim_offset`
--

DROP TABLE IF EXISTS `implant_cim_offset`;
CREATE TABLE IF NOT EXISTS `implant_cim_offset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_cim_offset`
--

INSERT INTO `implant_cim_offset` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra HA Offset-T2', 'images/libra_offset_T2.png', 238, 6.05, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, 88, -91, 274, 0, 0, 2),
(2, 'Libra HA Offset-T3', 'images/libra_offset_T3.png', 244, 6.2, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, 88, -94, 294.5, 0, 0, 3),
(3, 'Libra HA Offset-T4', 'images/libra_offset_T4.png', 251, 6.38, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -97.5, 304.5, 0, 0, 4),
(4, 'Libra HA Offset-T5', 'images/libra_offset_T5.png', 258, 6.55, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, 90, -101, 313.5, 0, 0, 5),
(5, 'Libra HA Offset-T6', 'images/libra_offset_T6.png', 264, 6.71, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, 90, -104, 333, 0, 0, 6),
(6, 'Libra HA Offset-T7', 'images/libra_offset_T7.png', 270, 6.86, 742, 18.85, 0, 0, 0, 0, 0, 0, 0, 0, 90, -107, 343, 0, 0, 7),
(7, 'Libra HA Offset-T8', 'images/libra_offset_T8.png', 277, 7.04, 763, 19.38, 0, 0, 0, 0, 0, 0, 0, 0, 91.5, -110.5, 353.5, 0, 0, 8),
(8, 'Libra HA Offset-T9', 'images/libra_offset_T9.png', 284, 7.21, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, 93, -111, 362, 0, 0, 9),
(9, 'Libra HA Offset-T2', 'images/libra_offset_T2_R.png', 238, 6.05, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, -89, 87, 274, 0, 0, 2),
(10, 'Libra HA Offset-T3', 'images/libra_offset_T3_R.png', 244, 6.2, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, -89, 90, 294.5, 0, 0, 3),
(11, 'Libra HA Offset-T4', 'images/libra_offset_T4_R.png', 251, 6.38, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, -90.5, 91.5, 304.5, 0, 0, 4),
(12, 'Libra HA Offset-T5', 'images/libra_offset_T5_R.png', 258, 6.55, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, -91, 97, 313.5, 0, 0, 5),
(13, 'Libra HA Offset-T6', 'images/libra_offset_T6_R.png', 264, 6.71, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, -92, 100, 333, 0, 0, 6),
(14, 'Libra HA Offset-T7', 'images/libra_offset_T7_R.png', 270, 6.86, 742, 18.85, 0, 0, 0, 0, 0, 0, 0, 0, -92, 102, 343, 0, 0, 7),
(15, 'Libra HA Offset-T8', 'images/libra_offset_T8_R.png', 277, 7.04, 763, 19.38, 0, 0, 0, 0, 0, 0, 0, 0, -92.5, 106.5, 353.5, 0, 0, 8),
(16, 'Libra HA Offset-T9', 'images/libra_offset_T9_R.png', 284, 7.21, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, -94, 110, 362, 0, 0, 9);

-- --------------------------------------------------------

--
-- Table structure for table `implant_cim_std`
--

DROP TABLE IF EXISTS `implant_cim_std`;
CREATE TABLE IF NOT EXISTS `implant_cim_std` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_cim_std`
--

INSERT INTO `implant_cim_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra Cim Std-T1', 'images/libra_ha_std_T1.png', 205, 5.21, 546, 13.87, 0, 0, 0, 0, 0, 0, 0, 0, 73.5, -74.5, 245, 0, 0, 1),
(2, 'Libra Cim Std-T2', 'images/libra_ha_std_T2.png', 212, 5.38, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, 74, -78, 274, 0, 0, 2),
(3, 'Libra Cim Std-T3', 'images/libra_ha_std_T3.png', 218, 5.54, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, 75, -81, 294.5, 0, 0, 3),
(4, 'Libra Cim Std-T4', 'images/libra_ha_std_T4.png', 224, 5.69, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, 76, -84, 304.5, 0, 0, 4),
(5, 'Libra Cim Std-T5', 'images/libra_ha_std_T5.png', 232, 5.89, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, 76, -88, 313.5, 0, 0, 5),
(6, 'Libra Cim Std-T6', 'images/libra_ha_std_T6.png', 237, 6.02, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, 76.5, -90.5, 333, 0, 0, 6),
(7, 'Libra Cim Std-T7', 'images/libra_ha_std_T7.png', 244, 6.2, 741, 18.82, 0, 0, 0, 0, 0, 0, 0, 0, 78, -94, 342.5, 0, 0, 7),
(8, 'Libra Cim Std-T8', 'images/libra_ha_std_T8.png', 251, 6.38, 761, 19.33, 0, 0, 0, 0, 0, 0, 0, 0, 78.5, -97.5, 352.5, 0, 0, 8),
(9, 'Libra Cim Std-T9', 'images/libra_ha_std_T9.png', 258, 6.55, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, 79, -101, 362, 0, 0, 9),
(10, 'Libra Cim Std-T10', 'images/libra_ha_std_T10.png', 264, 6.71, 794, 20.17, 0, 0, 0, 0, 0, 0, 0, 0, 80, -104, 369, 0, 0, 10),
(11, 'Libra Cim Std-T1', 'images/libra_ha_std_T1_R.png', 205, 5.21, 546, 13.87, 0, 0, 0, 0, 0, 0, 0, 0, -74.5, 72.5, 245, 0, 0, 1),
(12, 'Libra Cim Std-T2', 'images/libra_ha_std_T2_R.png', 212, 5.38, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, -76, 77, 274, 0, 0, 2),
(13, 'Libra Cim Std-T3', 'images/libra_ha_std_T3_R.png', 218, 5.54, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, -77, 80, 294.5, 0, 0, 3),
(14, 'Libra Cim Std-T4', 'images/libra_ha_std_T4_R.png', 224, 5.69, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, -77, 83, 304.5, 0, 0, 4),
(15, 'Libra Cim Std-T5', 'images/libra_ha_std_T5_R.png', 232, 5.89, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, -78, 87, 313.5, 0, 0, 5),
(16, 'Libra Cim Std-T6', 'images/libra_ha_std_T6_R.png', 237, 6.02, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, -78.5, 90.5, 333, 0, 0, 6),
(17, 'Libra Cim Std-T7', 'images/libra_ha_std_T7_R.png', 244, 6.2, 741, 18.82, 0, 0, 0, 0, 0, 0, 0, 0, -79, 92, 342.5, 0, 0, 7),
(18, 'Libra Cim Std-T8', 'images/libra_ha_std_T8_R.png', 251, 6.38, 761, 19.33, 0, 0, 0, 0, 0, 0, 0, 0, -79.5, 96.5, 352.5, 0, 0, 8),
(19, 'Libra Cim Std-T9', 'images/libra_ha_std_T9_R.png', 258, 6.55, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, -80, 99, 362, 0, 0, 9),
(20, 'Libra Cim Std-T10', 'images/libra_ha_std_T10_R.png', 264, 6.71, 794, 20.17, 0, 0, 0, 0, 0, 0, 0, 0, -81, 103, 369, 0, 0, 10);

-- --------------------------------------------------------

--
-- Table structure for table `implant_cim_std_appui`
--

DROP TABLE IF EXISTS `implant_cim_std_appui`;
CREATE TABLE IF NOT EXISTS `implant_cim_std_appui` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_cim_std_appui`
--

INSERT INTO `implant_cim_std_appui` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra HA Std-T1', 'images/libra_c_std_a_T1.png', 203, 5.16, 548, 13.92, 0, 0, 0, 0, 0, 0, 0, 0, 74.5, -73.5, 244, 0, 0, 1),
(2, 'Libra HA Std-T2', 'images/libra_c_std_a_T2.png', 209, 5.31, 603, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, 75.5, -78.5, 274.5, 0, 0, 2),
(3, 'Libra HA Std-T3', 'images/libra_c_std_a_T3.png', 215, 5.46, 646, 16.41, 0, 0, 0, 0, 0, 0, 0, 0, 80.5, -79.5, 295, 0, 0, 3),
(4, 'Libra HA Std-T4', 'images/libra_c_std_a_T4.png', 222, 5.64, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, 73, -84, 302.5, 0, 0, 4),
(5, 'Libra HA Std-T5', 'images/libra_c_std_a_T5.png', 229, 5.82, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, 77.5, -87.5, 314.5, 0, 0, 5),
(6, 'Libra HA Std-T6', 'images/libra_c_std_a_T6.png', 235, 5.97, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, 77.5, -91.5, 332, 0, 0, 6),
(7, 'Libra HA Std-T7', 'images/libra_c_std_a_T7.png', 242, 6.15, 742, 18.85, 0, 0, 0, 0, 0, 0, 0, 0, 78, -94, 341, 0, 0, 7),
(8, 'Libra HA Std-T8', 'images/libra_c_std_a_T8.png', 248, 6.3, 762, 19.35, 0, 0, 0, 0, 0, 0, 0, 0, 81, -96, 352, 0, 0, 8),
(9, 'Libra HA Std-T9', 'images/libra_c_std_a_T9.png', 255, 6.48, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, 79.5, -102.5, 363, 0, 0, 9),
(10, 'Libra HA Std-T10', 'images/libra_c_std_a_T10.png', 261, 6.63, 795, 20.19, 0, 0, 0, 0, 0, 0, 0, 0, 81.5, -103.5, 368.5, 0, 0, 10),
(11, 'Libra HA Std-T11', 'images/libra_c_std_a_T11.png', 266, 6.76, 818, 20.78, 0, 0, 0, 0, 0, 0, 0, 0, 83, -106, 381, 0, 0, 11),
(12, 'Libra HA Std-T1', 'images/libra_c_std_a_T1_R.png', 203, 5.16, 548, 13.92, 0, 0, 0, 0, 0, 0, 0, 0, -75.5, 72.5, 244, 0, 0, 1),
(13, 'Libra HA Std-T2', 'images/libra_c_std_a_T2_R.png', 209, 5.31, 603, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, -76.5, 76.5, 274.5, 0, 0, 2),
(14, 'Libra HA Std-T3', 'images/libra_c_std_a_T3_R.png', 215, 5.46, 646, 16.41, 0, 0, 0, 0, 0, 0, 0, 0, -77.5, 79.5, 295, 0, 0, 3),
(15, 'Libra HA Std-T4', 'images/libra_c_std_a_T4_R.png', 222, 5.64, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, -78, 82, 302.5, 0, 0, 4),
(16, 'Libra HA Std-T5', 'images/libra_c_std_a_T5_R.png', 229, 5.82, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, -79.5, 86.5, 314.5, 0, 0, 5),
(17, 'Libra HA Std-T6', 'images/libra_c_std_a_T6_R.png', 235, 5.97, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, -79.5, 89.5, 332, 0, 0, 6),
(18, 'Libra HA Std-T7', 'images/libra_c_std_a_T7_R.png', 242, 6.15, 742, 18.85, 0, 0, 0, 0, 0, 0, 0, 0, -80, 92, 341, 0, 0, 7),
(19, 'Libra HA Std-T8', 'images/libra_c_std_a_T8_R.png', 248, 6.3, 762, 19.35, 0, 0, 0, 0, 0, 0, 0, 0, -82, 95, 352, 0, 0, 8),
(20, 'Libra HA Std-T9', 'images/libra_c_std_a_T9_R.png', 255, 6.48, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, -80.5, 100.5, 363, 0, 0, 9),
(21, 'Libra HA Std-T10', 'images/libra_c_std_a_T10_R.png', 261, 6.63, 795, 20.19, 0, 0, 0, 0, 0, 0, 0, 0, -83.5, 101.5, 368.5, 0, 0, 10),
(22, 'Libra HA Std-T11', 'images/libra_c_std_a_T11_R.png', 266, 6.76, 818, 20.78, 0, 0, 0, 0, 0, 0, 0, 0, -84, 105, 381, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_ha_offset`
--

DROP TABLE IF EXISTS `implant_ha_offset`;
CREATE TABLE IF NOT EXISTS `implant_ha_offset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_ha_offset`
--

INSERT INTO `implant_ha_offset` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra HA Offset-T2', 'images/libra_offset_T2.png', 238, 6.05, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, 88, -91, 274, 0, 0, 2),
(2, 'Libra HA Offset-T3', 'images/libra_offset_T3.png', 244, 6.2, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, 88, -94, 294.5, 0, 0, 3),
(3, 'Libra HA Offset-T4', 'images/libra_offset_T4.png', 251, 6.38, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -97.5, 304.5, 0, 0, 4),
(4, 'Libra HA Offset-T5', 'images/libra_offset_T5.png', 258, 6.55, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, 90, -101, 313.5, 0, 0, 5),
(5, 'Libra HA Offset-T6', 'images/libra_offset_T6.png', 264, 6.71, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, 90, -104, 333, 0, 0, 6),
(6, 'Libra HA Offset-T7', 'images/libra_offset_T7.png', 270, 6.86, 742, 18.85, 0, 0, 0, 0, 0, 0, 0, 0, 90, -107, 343, 0, 0, 7),
(7, 'Libra HA Offset-T8', 'images/libra_offset_T8.png', 277, 7.04, 763, 19.38, 0, 0, 0, 0, 0, 0, 0, 0, 91.5, -110.5, 353.5, 0, 0, 8),
(8, 'Libra HA Offset-T9', 'images/libra_offset_T9.png', 284, 7.21, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, 93, -111, 362, 0, 0, 9),
(9, 'Libra HA Offset-T2', 'images/libra_offset_T2_R.png', 238, 6.05, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, -89, 87, 274, 0, 0, 2),
(10, 'Libra HA Offset-T3', 'images/libra_offset_T3_R.png', 244, 6.2, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, -89, 90, 294.5, 0, 0, 3),
(11, 'Libra HA Offset-T4', 'images/libra_offset_T4_R.png', 251, 6.38, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, -90.5, 91.5, 304.5, 0, 0, 4),
(12, 'Libra HA Offset-T5', 'images/libra_offset_T5_R.png', 258, 6.55, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, -91, 97, 313.5, 0, 0, 5),
(13, 'Libra HA Offset-T6', 'images/libra_offset_T6_R.png', 264, 6.71, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, -92, 100, 333, 0, 0, 6),
(14, 'Libra HA Offset-T7', 'images/libra_offset_T7_R.png', 270, 6.86, 742, 18.85, 0, 0, 0, 0, 0, 0, 0, 0, -92, 102, 343, 0, 0, 7),
(15, 'Libra HA Offset-T8', 'images/libra_offset_T8_R.png', 277, 7.04, 763, 19.38, 0, 0, 0, 0, 0, 0, 0, 0, -92.5, 106.5, 353.5, 0, 0, 8),
(16, 'Libra HA Offset-T9', 'images/libra_offset_T9_R.png', 284, 7.21, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, -94, 110, 362, 0, 0, 9);

-- --------------------------------------------------------

--
-- Table structure for table `implant_ha_std`
--

DROP TABLE IF EXISTS `implant_ha_std`;
CREATE TABLE IF NOT EXISTS `implant_ha_std` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_ha_std`
--

INSERT INTO `implant_ha_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra HA Std-T1', 'images/libra_ha_std_T1.png', 205, 5.21, 546, 13.87, 0, 0, 0, 0, 0, 0, 0, 0, 73.5, -74.5, 245, 0, 0, 1),
(2, 'Libra HA Std-T2', 'images/libra_ha_std_T2.png', 212, 5.38, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, 74, -78, 274, 0, 0, 2),
(3, 'Libra HA Std-T3', 'images/libra_ha_std_T3.png', 218, 5.54, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, 75, -81, 294.5, 0, 0, 3),
(4, 'Libra HA Std-T4', 'images/libra_ha_std_T4.png', 224, 5.69, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, 76, -84, 304.5, 0, 0, 4),
(5, 'Libra HA Std-T5', 'images/libra_ha_std_T5.png', 232, 5.89, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, 76, -88, 313.5, 0, 0, 5),
(6, 'Libra HA Std-T6', 'images/libra_ha_std_T6.png', 237, 6.02, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, 76.5, -90.5, 333, 0, 0, 6),
(7, 'Libra HA Std-T7', 'images/libra_ha_std_T7.png', 244, 6.2, 741, 18.82, 0, 0, 0, 0, 0, 0, 0, 0, 78, -94, 342.5, 0, 0, 7),
(8, 'Libra HA Std-T8', 'images/libra_ha_std_T8.png', 251, 6.38, 761, 19.33, 0, 0, 0, 0, 0, 0, 0, 0, 78.5, -97.5, 352.5, 0, 0, 8),
(9, 'Libra HA Std-T9', 'images/libra_ha_std_T9.png', 258, 6.55, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, 79, -101, 362, 0, 0, 9),
(10, 'Libra HA Std-T10', 'images/libra_ha_std_T10.png', 264, 6.71, 794, 20.17, 0, 0, 0, 0, 0, 0, 0, 0, 80, -104, 369, 0, 0, 10),
(11, 'Libra HA Std-T1', 'images/libra_ha_std_T1_R.png', 205, 5.21, 546, 13.87, 0, 0, 0, 0, 0, 0, 0, 0, -74.5, 72.5, 245, 0, 0, 1),
(12, 'Libra HA Std-T2', 'images/libra_ha_std_T2_R.png', 212, 5.38, 604, 15.34, 0, 0, 0, 0, 0, 0, 0, 0, -76, 77, 274, 0, 0, 2),
(13, 'Libra HA Std-T3', 'images/libra_ha_std_T3_R.png', 218, 5.54, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, -77, 80, 294.5, 0, 0, 3),
(14, 'Libra HA Std-T4', 'images/libra_ha_std_T4_R.png', 224, 5.69, 665, 16.89, 0, 0, 0, 0, 0, 0, 0, 0, -77, 83, 304.5, 0, 0, 4),
(15, 'Libra HA Std-T5', 'images/libra_ha_std_T5_R.png', 232, 5.89, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, -78, 87, 313.5, 0, 0, 5),
(16, 'Libra HA Std-T6', 'images/libra_ha_std_T6_R.png', 237, 6.02, 722, 18.34, 0, 0, 0, 0, 0, 0, 0, 0, -78.5, 90.5, 333, 0, 0, 6),
(17, 'Libra HA Std-T7', 'images/libra_ha_std_T7_R.png', 244, 6.2, 741, 18.82, 0, 0, 0, 0, 0, 0, 0, 0, -79, 92, 342.5, 0, 0, 7),
(18, 'Libra HA Std-T8', 'images/libra_ha_std_T8_R.png', 251, 6.38, 761, 19.33, 0, 0, 0, 0, 0, 0, 0, 0, -79.5, 96.5, 352.5, 0, 0, 8),
(19, 'Libra HA Std-T9', 'images/libra_ha_std_T9_R.png', 258, 6.55, 780, 19.81, 0, 0, 0, 0, 0, 0, 0, 0, -80, 99, 362, 0, 0, 9),
(20, 'Libra HA Std-T10', 'images/libra_ha_std_T10_R.png', 264, 6.71, 794, 20.17, 0, 0, 0, 0, 0, 0, 0, 0, -81, 103, 369, 0, 0, 10);

-- --------------------------------------------------------

--
-- Table structure for table `implant_ha_std_appui`
--

DROP TABLE IF EXISTS `implant_ha_std_appui`;
CREATE TABLE IF NOT EXISTS `implant_ha_std_appui` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_ha_std_appui`
--

INSERT INTO `implant_ha_std_appui` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra HA Std-T1', 'images/libra_ha_std_a_T1.png', 209, 5.31, 547, 13.89, 0, 0, 0, 0, 0, 0, 0, 0, 74.5, -73.5, 242.5, 0, 0, 1),
(2, 'Libra HA Std-T2', 'images/libra_ha_std_a_T2.png', 214, 5.44, 607, 15.42, 0, 0, 0, 0, 0, 0, 0, 0, 76, -77, 272.5, 0, 0, 2),
(3, 'Libra HA Std-T3', 'images/libra_ha_std_a_T3.png', 219, 5.56, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, 76.5, -80.5, 294.5, 0, 0, 3),
(4, 'Libra HA Std-T4', 'images/libra_ha_std_a_T4.png', 227, 5.77, 666, 16.92, 0, 0, 0, 0, 0, 0, 0, 0, 75.5, -84.5, 303, 0, 0, 4),
(5, 'Libra HA Std-T5', 'images/libra_ha_std_a_T5.png', 234, 5.94, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, 78, -89, 313.5, 0, 0, 5),
(6, 'Libra HA Std-T6', 'images/libra_ha_std_a_T6.png', 240, 6.1, 724, 18.39, 0, 0, 0, 0, 0, 0, 0, 0, 79, -90, 332, 0, 0, 6),
(7, 'Libra HA Std-T7', 'images/libra_ha_std_a_T7.png', 246, 6.25, 744, 18.9, 0, 0, 0, 0, 0, 0, 0, 0, 78, -93, 341, 0, 0, 7),
(8, 'Libra HA Std-T8', 'images/libra_ha_std_a_T8.png', 252, 6.4, 763, 19.38, 0, 0, 0, 0, 0, 0, 0, 0, 80, -97, 351.5, 0, 0, 8),
(9, 'Libra HA Std-T9', 'images/libra_ha_std_a_T9.png', 259, 6.58, 783, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, 79.5, -100.5, 361.5, 0, 0, 9),
(10, 'Libra HA Std-T10', 'images/libra_ha_std_a_T10.png', 266, 6.76, 796, 20.22, 0, 0, 0, 0, 0, 0, 0, 0, 81, -103, 368, 0, 0, 10),
(11, 'Libra HA Std-T11', 'images/libra_ha_std_a_T11.png', 271, 6.88, 821, 20.85, 0, 0, 0, 0, 0, 0, 0, 0, 80.5, -108.5, 379.5, 0, 0, 11),
(12, 'Libra HA Std-T1', 'images/libra_ha_std_a_T1_R.png', 209, 5.31, 547, 13.89, 0, 0, 0, 0, 0, 0, 0, 0, -75.5, 72.5, 242.5, 0, 0, 1),
(13, 'Libra HA Std-T2', 'images/libra_ha_std_a_T2_R.png', 214, 5.44, 607, 15.42, 0, 0, 0, 0, 0, 0, 0, 0, -78, 76, 272.5, 0, 0, 2),
(14, 'Libra HA Std-T3', 'images/libra_ha_std_a_T3_R.png', 219, 5.56, 645, 16.38, 0, 0, 0, 0, 0, 0, 0, 0, -77.5, 79.5, 294.5, 0, 0, 3),
(15, 'Libra HA Std-T4', 'images/libra_ha_std_a_T4_R.png', 227, 5.77, 666, 16.92, 0, 0, 0, 0, 0, 0, 0, 0, -77.5, 83.5, 303, 0, 0, 4),
(16, 'Libra HA Std-T5', 'images/libra_ha_std_a_T5_R.png', 234, 5.94, 683, 17.35, 0, 0, 0, 0, 0, 0, 0, 0, -78, 87, 313.5, 0, 0, 5),
(17, 'Libra HA Std-T6', 'images/libra_ha_std_a_T6_R.png', 240, 6.1, 724, 18.39, 0, 0, 0, 0, 0, 0, 0, 0, -80, 90, 332, 0, 0, 6),
(18, 'Libra HA Std-T7', 'images/libra_ha_std_a_T7_R.png', 246, 6.25, 744, 18.9, 0, 0, 0, 0, 0, 0, 0, 0, -80, 92, 341, 0, 0, 7),
(19, 'Libra HA Std-T8', 'images/libra_ha_std_a_T8_R.png', 252, 6.4, 763, 19.38, 0, 0, 0, 0, 0, 0, 0, 0, -81, 96, 351.5, 0, 0, 8),
(20, 'Libra HA Std-T9', 'images/libra_ha_std_a_T9_R.png', 259, 6.58, 783, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, -81.5, 100.5, 361.5, 0, 0, 9),
(21, 'Libra HA Std-T10', 'images/libra_ha_std_a_T10_R.png', 266, 6.76, 796, 20.22, 0, 0, 0, 0, 0, 0, 0, 0, -82, 103, 368, 0, 0, 10),
(22, 'Libra HA Std-T11', 'images/libra_ha_std_a_T11_R.png', 271, 6.88, 821, 20.85, 0, 0, 0, 0, 0, 0, 0, 0, -81.5, 107.5, 379.5, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_hype`
--

DROP TABLE IF EXISTS `implant_hype`;
CREATE TABLE IF NOT EXISTS `implant_hype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `implant_hype`
--

INSERT INTO `implant_hype` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype-T2', 'images/HypeT2.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, 276, -256, 813, 135, 0),
(2, 'Hype-T3', 'images/SCHO-3G.png', 239, 6.07, 660, 16.76, 0, 0, 0, 0, 0, 0, 0, 0, 87.5, -91.5, -300, 135, 0),
(3, 'Hype-T4', 'images/SCHO-4G.png', 245, 6.22, 670, 17.02, 0, 0, 0, 0, 0, 0, 0, 0, 88.5, -94.5, -306, 135, 0),
(4, 'Hype-T5', 'images/SCHO-5G.png', 254, 6.45, 692, 17.58, 0, 0, 0, 0, 0, 0, 0, 0, 87, -99, -317, 135, 0),
(5, 'Hype-T6', 'images/SCHO-6G.png', 258, 6.55, 711, 18.06, 0, 0, 0, 0, 0, 0, 0, 0, 90, -101, -325.5, 135, 0),
(6, 'Hype-T7', 'images/HypeT7.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, 286, -304, 981.5, 135, 0),
(7, 'Hype-T8', 'images/HypeT8.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, 287.5, -314.5, 1014.5, 135, 0),
(8, 'Hype-T9', 'images/HypeT9.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, 289.5, -323.5, 1049.5, 135, 0),
(9, 'Hype-T2', 'images/HypeT2_R.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, -276, 256, 813, 135, 0),
(10, 'Hype-T3', 'images/SCHO-3D.png', 239, 6.07, 660, 16.76, 0, 0, 0, 0, 0, 0, 0, 0, -88.5, 90.5, -300, 135, 0),
(11, 'Hype-T4', 'images/SCHO-4D.png', 245, 6.22, 670, 17.02, 0, 0, 0, 0, 0, 0, 0, 0, -89.5, 93.5, -306, 135, 0),
(12, 'Hype-T5', 'images/SCHO-5D.png', 254, 6.45, 692, 17.58, 0, 0, 0, 0, 0, 0, 0, 0, -88, 99, -317, 135, 0),
(13, 'Hype-T6', 'images/SCHO-6D.png', 258, 6.55, 711, 18.06, 0, 0, 0, 0, 0, 0, 0, 0, -91, 100, -325.5, 135, 0),
(14, 'Hype-T7', 'images/HypeT7_R.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, -286, 304, 981.5, 135, 0),
(15, 'Hype-T8', 'images/HypeT8_R.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, -287.5, 314.5, 1014.5, 135, 0),
(16, 'Hype-T9', 'images/HypeT9_R.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, -289.5, 323.5, 1049.5, 135, 0);

-- --------------------------------------------------------

--
-- Table structure for table `implant_libra`
--

DROP TABLE IF EXISTS `implant_libra`;
CREATE TABLE IF NOT EXISTS `implant_libra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `implant_libra`
--

INSERT INTO `implant_libra` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Libra-T2', 'images/LibraT2.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, 206, -255, 813, 0, 0),
(2, 'Libra-T3', 'images/LibraT3.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, 205, -267.5, 873.5, 0, 0),
(3, 'Libra-T4', 'images/LibraT4.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, 208.5, -276.5, 903, 0, 0),
(4, 'Libra-T5', 'images/LibraT5.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, 210.5, -286.5, 934, 0, 0),
(5, 'Libra-T6', 'images/LibraT6.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, 213, -296, 955.5, 0, 0),
(6, 'Libra-T7', 'images/LibraT7.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, 214, -305, 983.5, 0, 0),
(7, 'Libra-T8', 'images/LibraT8.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, 216.5, -315.5, 1014.5, 135, 0),
(8, 'Libra-T9', 'images/LibraT9.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, 216.5, -327.5, 1050.5, 135, 0),
(9, 'Libra-T2', 'images/LibraT2_R.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, -206, 255, 813, 0, 0),
(10, 'Libra-T3', 'images/LibraT3_R.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, -205, 267.5, 873.5, 0, 0),
(11, 'Libra-T4', 'images/LibraT4_R.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, -208.5, 276.5, 903, 0, 0),
(12, 'Libra-T5', 'images/LibraT5_R.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, -210.5, 286.5, 934, 0, 0),
(13, 'Libra-T6', 'images/LibraT6_R.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, -213, 296, 955.5, 0, 0),
(14, 'Libra-T7', 'images/LibraT7_R.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, -214, 305, 983.5, 0, 0),
(15, 'Libra-T8', 'images/LibraT8_R.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, -216.5, 315.5, 1014.5, 135, 0),
(16, 'Libra-T9', 'images/LibraT9_R.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, -216.5, 327.5, 1050.5, 135, 0);

-- --------------------------------------------------------

--
-- Table structure for table `implant_libra_c`
--

DROP TABLE IF EXISTS `implant_libra_c`;
CREATE TABLE IF NOT EXISTS `implant_libra_c` (
  `id` int(2) DEFAULT NULL,
  `nom` varchar(11) DEFAULT NULL,
  `url` varchar(29) DEFAULT NULL,
  `widthPx` int(3) DEFAULT NULL,
  `widthCm` decimal(3,2) DEFAULT NULL,
  `heightPx` int(3) DEFAULT NULL,
  `heightCm` decimal(4,2) DEFAULT NULL,
  `axeFemurHautPxX` int(1) DEFAULT NULL,
  `axeFemurHautPxY` int(1) DEFAULT NULL,
  `axeFemurBasPxX` int(1) DEFAULT NULL,
  `axeFemurBasPxY` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxX` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxY` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxX` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxY` int(1) DEFAULT NULL,
  `distOffsetX` int(3) DEFAULT NULL,
  `PtMecaHautXPx` int(4) DEFAULT NULL,
  `PtMecaHautYPx` int(3) DEFAULT NULL,
  `angleCervicoDiaphysaire` int(1) DEFAULT NULL,
  `enabled` int(1) DEFAULT NULL,
  `taille` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_libra_c`
--

INSERT INTO `implant_libra_c` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra_C-T1', 'images/libra/Libra C 1.png', 210, '5.33', 601, '15.27', 0, 0, 0, 0, 0, 0, 0, 0, 73, -77, 272, 0, 0, 1),
(2, 'Libra_C-T2', 'images/libra/Libra C 2.png', 221, '5.61', 676, '17.17', 0, 0, 0, 0, 0, 0, 0, 0, 71, -82, 310, 0, 0, 2),
(3, 'Libra_C-T3', 'images/libra/Libra C 3.png', 219, '5.56', 713, '18.11', 0, 0, 0, 0, 0, 0, 0, 0, 76, -81, 328, 0, 0, 3),
(4, 'Libra_C-T4', 'images/libra/Libra C 4.png', 225, '5.71', 737, '18.72', 0, 0, 0, 0, 0, 0, 0, 0, 76, -85, 340, 0, 0, 4),
(5, 'Libra_C-T5', 'images/libra/Libra C 5.png', 235, '5.97', 763, '19.38', 0, 0, 0, 0, 0, 0, 0, 0, 75, -89, 353, 0, 0, 5),
(6, 'Libra_C-T6', 'images/libra/Libra C 6.png', 242, '6.15', 792, '20.12', 0, 0, 0, 0, 0, 0, 0, 0, 76, -94, 368, 0, 0, 6),
(7, 'Libra_C-T7', 'images/libra/Libra C 7.png', 245, '6.22', 807, '20.50', 0, 0, 0, 0, 0, 0, 0, 0, 78, -94, 375, 0, 0, 7),
(8, 'Libra_C-T8', 'images/libra/Libra C 8.png', 260, '6.60', 835, '21.21', 0, 0, 0, 0, 0, 0, 0, 0, 75, -102, 389, 0, 0, 8),
(9, 'Libra_C-T9', 'images/libra/Libra C 9.png', 274, '6.96', 840, '21.34', 0, 0, 0, 0, 0, 0, 0, 0, 72, -110, 392, 0, 0, 9),
(10, 'Libra_C-T10', 'images/libra/Libra C 10.png', 276, '7.01', 870, '22.10', 0, 0, 0, 0, 0, 0, 0, 0, 75, -111, 407, 0, 0, 10),
(11, 'Libra_C-T11', 'images/libra/Libra C 11.png', 284, '7.21', 894, '22.71', 0, 0, 0, 0, 0, 0, 0, 0, 75, -114, 419, 0, 0, 11),
(12, 'Libra_C-T1', 'images/libra/Libra C 1 R.png', 210, '5.33', 601, '15.27', 0, 0, 0, 0, 0, 0, 0, 0, -73, 77, 272, 0, 0, 1),
(13, 'Libra_C-T2', 'images/libra/Libra C 2 R.png', 221, '5.61', 676, '17.17', 0, 0, 0, 0, 0, 0, 0, 0, -71, 82, 310, 0, 0, 2),
(14, 'Libra_C-T3', 'images/libra/Libra C 3 R.png', 219, '5.56', 713, '18.11', 0, 0, 0, 0, 0, 0, 0, 0, -76, 81, 328, 0, 0, 3),
(15, 'Libra_C-T4', 'images/libra/Libra C 4 R.png', 225, '5.71', 737, '18.72', 0, 0, 0, 0, 0, 0, 0, 0, -76, 85, 340, 0, 0, 4),
(16, 'Libra_C-T5', 'images/libra/Libra C 5 R.png', 235, '5.97', 763, '19.38', 0, 0, 0, 0, 0, 0, 0, 0, -75, 89, 353, 0, 0, 5),
(17, 'Libra_C-T6', 'images/libra/Libra C 6 R.png', 242, '6.15', 792, '20.12', 0, 0, 0, 0, 0, 0, 0, 0, -76, 94, 368, 0, 0, 6),
(18, 'Libra_C-T7', 'images/libra/Libra C 7 R.png', 245, '6.22', 807, '20.50', 0, 0, 0, 0, 0, 0, 0, 0, -78, 94, 375, 0, 0, 7),
(19, 'Libra_C-T8', 'images/libra/Libra C 8 R.png', 260, '6.60', 835, '21.21', 0, 0, 0, 0, 0, 0, 0, 0, -75, 102, 389, 0, 0, 8),
(20, 'Libra_C-T9', 'images/libra/Libra C 9 R.png', 274, '6.96', 840, '21.34', 0, 0, 0, 0, 0, 0, 0, 0, -72, 110, 392, 0, 0, 9),
(21, 'Libra_C-T10', 'images/libra/Libra C 10 R.png', 276, '7.01', 870, '22.10', 0, 0, 0, 0, 0, 0, 0, 0, -75, 111, 407, 0, 0, 10),
(22, 'Libra_C-T11', 'images/libra/Libra C 11 R.png', 284, '7.21', 894, '22.71', 0, 0, 0, 0, 0, 0, 0, 0, -75, 114, 419, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_libra_c_a`
--

DROP TABLE IF EXISTS `implant_libra_c_a`;
CREATE TABLE IF NOT EXISTS `implant_libra_c_a` (
  `id` int(2) DEFAULT NULL,
  `nom` varchar(13) DEFAULT NULL,
  `url` varchar(31) DEFAULT NULL,
  `widthPx` int(3) DEFAULT NULL,
  `widthCm` decimal(3,2) DEFAULT NULL,
  `heightPx` int(3) DEFAULT NULL,
  `heightCm` decimal(4,2) DEFAULT NULL,
  `axeFemurHautPxX` int(1) DEFAULT NULL,
  `axeFemurHautPxY` int(1) DEFAULT NULL,
  `axeFemurBasPxX` int(1) DEFAULT NULL,
  `axeFemurBasPxY` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxX` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxY` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxX` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxY` int(1) DEFAULT NULL,
  `distOffsetX` int(3) DEFAULT NULL,
  `PtMecaHautXPx` int(4) DEFAULT NULL,
  `PtMecaHautYPx` int(3) DEFAULT NULL,
  `angleCervicoDiaphysaire` int(1) DEFAULT NULL,
  `enabled` int(1) DEFAULT NULL,
  `taille` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_libra_c_a`
--

INSERT INTO `implant_libra_c_a` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra_C_A-T1', 'images/libra/Libra C A 1.png', 218, '5.54', 626, '15.90', 0, 0, 0, 0, 0, 0, 0, 0, 69, -82, 284, 0, 0, 1),
(2, 'Libra_C_A-T2', 'images/libra/Libra C A 2.png', 218, '5.54', 686, '17.42', 0, 0, 0, 0, 0, 0, 0, 0, 72, -82, 314, 0, 0, 2),
(3, 'Libra_C_A-T3', 'images/libra/Libra C A 3.png', 224, '5.69', 728, '18.49', 0, 0, 0, 0, 0, 0, 0, 0, 73, -84, 335, 0, 0, 3),
(4, 'Libra_C_A-T4', 'images/libra/Libra C A 4.png', 230, '5.84', 768, '19.51', 0, 0, 0, 0, 0, 0, 0, 0, 74, -88, 355, 0, 0, 4),
(5, 'Libra_C_A-T5', 'images/libra/Libra C A 5.png', 252, '6.40', 782, '19.86', 0, 0, 0, 0, 0, 0, 0, 0, 72, -95, 362, 0, 0, 5),
(6, 'Libra_C_A-T6', 'images/libra/Libra C A 6.png', 252, '6.40', 806, '20.47', 0, 0, 0, 0, 0, 0, 0, 0, 71, -99, 374, 0, 0, 6),
(7, 'Libra_C_A-T7', 'images/libra/Libra C A 7.png', 254, '6.45', 819, '20.80', 0, 0, 0, 0, 0, 0, 0, 0, 75, -99, 380, 0, 0, 7),
(8, 'Libra_C_A-T8', 'images/libra/Libra C A 8.png', 275, '6.98', 847, '21.51', 0, 0, 0, 0, 0, 0, 0, 0, 79, -98, 394, 0, 0, 8),
(9, 'Libra_C_A-T9', 'images/libra/Libra C A 9.png', 272, '6.91', 867, '22.02', 0, 0, 0, 0, 0, 0, 0, 0, 76, -106, 404, 0, 0, 9),
(10, 'Libra_C_A-T10', 'images/libra/Libra C A 10.png', 278, '7.06', 880, '22.35', 0, 0, 0, 0, 0, 0, 0, 0, 81, -105, 411, 0, 0, 10),
(11, 'Libra_C_A-T11', 'images/libra/Libra C A 11.png', 301, '7.65', 895, '22.73', 0, 0, 0, 0, 0, 0, 0, 0, 80, -110, 418, 0, 0, 11),
(12, 'Libra_C_A-T1', 'images/libra/Libra C A 1 R.png', 218, '5.54', 626, '15.90', 0, 0, 0, 0, 0, 0, 0, 0, -69, 82, 284, 0, 0, 1),
(13, 'Libra_C_A-T2', 'images/libra/Libra C A 2 R.png', 218, '5.54', 686, '17.42', 0, 0, 0, 0, 0, 0, 0, 0, -72, 82, 314, 0, 0, 2),
(14, 'Libra_C_A-T3', 'images/libra/Libra C A 3 R.png', 224, '5.69', 728, '18.49', 0, 0, 0, 0, 0, 0, 0, 0, -73, 84, 335, 0, 0, 3),
(15, 'Libra_C_A-T4', 'images/libra/Libra C A 4 R.png', 230, '5.84', 768, '19.51', 0, 0, 0, 0, 0, 0, 0, 0, -74, 88, 355, 0, 0, 4),
(16, 'Libra_C_A-T5', 'images/libra/Libra C A 5 R.png', 252, '6.40', 782, '19.86', 0, 0, 0, 0, 0, 0, 0, 0, -72, 95, 362, 0, 0, 5),
(17, 'Libra_C_A-T6', 'images/libra/Libra C A 6 R.png', 252, '6.40', 806, '20.47', 0, 0, 0, 0, 0, 0, 0, 0, -71, 99, 374, 0, 0, 6),
(18, 'Libra_C_A-T7', 'images/libra/Libra C A 7 R.png', 254, '6.45', 819, '20.80', 0, 0, 0, 0, 0, 0, 0, 0, -75, 99, 380, 0, 0, 7),
(19, 'Libra_C_A-T8', 'images/libra/Libra C A 8 R.png', 275, '6.98', 847, '21.51', 0, 0, 0, 0, 0, 0, 0, 0, -79, 98, 394, 0, 0, 8),
(20, 'Libra_C_A-T9', 'images/libra/Libra C A 9 R.png', 272, '6.91', 867, '22.02', 0, 0, 0, 0, 0, 0, 0, 0, -76, 106, 404, 0, 0, 9),
(21, 'Libra_C_A-T10', 'images/libra/Libra C A 10 R.png', 278, '7.06', 880, '22.35', 0, 0, 0, 0, 0, 0, 0, 0, -81, 105, 411, 0, 0, 10),
(22, 'Libra_C_A-T11', 'images/libra/Libra C A 11 R.png', 301, '7.65', 895, '22.73', 0, 0, 0, 0, 0, 0, 0, 0, -80, 110, 418, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_libra_c_of`
--

DROP TABLE IF EXISTS `implant_libra_c_of`;
CREATE TABLE IF NOT EXISTS `implant_libra_c_of` (
  `id` int(2) DEFAULT NULL,
  `nom` varchar(13) DEFAULT NULL,
  `url` varchar(31) DEFAULT NULL,
  `widthPx` int(3) DEFAULT NULL,
  `widthCm` decimal(3,2) DEFAULT NULL,
  `heightPx` int(3) DEFAULT NULL,
  `heightCm` decimal(4,2) DEFAULT NULL,
  `axeFemurHautPxX` int(1) DEFAULT NULL,
  `axeFemurHautPxY` int(1) DEFAULT NULL,
  `axeFemurBasPxX` int(1) DEFAULT NULL,
  `axeFemurBasPxY` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxX` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxY` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxX` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxY` int(1) DEFAULT NULL,
  `distOffsetX` int(3) DEFAULT NULL,
  `PtMecaHautXPx` int(4) DEFAULT NULL,
  `PtMecaHautYPx` int(3) DEFAULT NULL,
  `angleCervicoDiaphysaire` int(1) DEFAULT NULL,
  `enabled` int(1) DEFAULT NULL,
  `taille` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_libra_c_of`
--

INSERT INTO `implant_libra_c_of` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra_C_OF-T2', 'images/libra/Libra C OF 2.png', 253, '6.43', 676, '17.17', 0, 0, 0, 0, 0, 0, 0, 0, 78, -98, 311, 0, 0, 2),
(2, 'Libra_C_OF-T3', 'images/libra/Libra C OF 3.png', 249, '6.32', 716, '18.19', 0, 0, 0, 0, 0, 0, 0, 0, 84, -96, 331, 0, 0, 3),
(3, 'Libra_C_OF-T4', 'images/libra/Libra C OF 4.png', 257, '6.53', 771, '19.58', 0, 0, 0, 0, 0, 0, 0, 0, 85, -100, 358, 0, 0, 4),
(4, 'Libra_C_OF-T5', 'images/libra/Libra C OF 5.png', 265, '6.73', 823, '20.90', 0, 0, 0, 0, 0, 0, 0, 0, 84, -104, 384, 0, 0, 5),
(5, 'Libra_C_OF-T6', 'images/libra/Libra C OF 6.png', 273, '6.93', 801, '20.35', 0, 0, 0, 0, 0, 0, 0, 0, 84, -108, 373, 0, 0, 6),
(6, 'Libra_C_OF-T7', 'images/libra/Libra C OF 7.png', 288, '7.32', 819, '20.80', 0, 0, 0, 0, 0, 0, 0, 0, 81, -116, 382, 0, 0, 7),
(7, 'Libra_C_OF-T8', 'images/libra/Libra C OF 8.png', 284, '7.21', 875, '22.22', 0, 0, 0, 0, 0, 0, 0, 0, 87, -114, 410, 0, 0, 8),
(8, 'Libra_C_OF-T9', 'images/libra/Libra C OF 9.png', 303, '7.70', 888, '25.56', 0, 0, 0, 0, 0, 0, 0, 0, 81, -123, 417, 0, 0, 9),
(9, 'Libra_C_OF-T2', 'images/libra/Libra C OF 2 R.png', 253, '6.43', 676, '17.17', 0, 0, 0, 0, 0, 0, 0, 0, -78, 98, 311, 0, 0, 2),
(10, 'Libra_C_OF-T3', 'images/libra/Libra C OF 3 R.png', 249, '6.32', 716, '18.19', 0, 0, 0, 0, 0, 0, 0, 0, -84, 96, 331, 0, 0, 3),
(11, 'Libra_C_OF-T4', 'images/libra/Libra C OF 4 R.png', 257, '6.53', 771, '19.58', 0, 0, 0, 0, 0, 0, 0, 0, -85, 100, 358, 0, 0, 4),
(12, 'Libra_C_OF-T5', 'images/libra/Libra C OF 5 R.png', 265, '6.73', 823, '20.90', 0, 0, 0, 0, 0, 0, 0, 0, -84, 104, 384, 0, 0, 5),
(13, 'Libra_C_OF-T6', 'images/libra/Libra C OF 6 R.png', 273, '6.93', 801, '20.35', 0, 0, 0, 0, 0, 0, 0, 0, -84, 108, 373, 0, 0, 6),
(14, 'Libra_C_OF-T7', 'images/libra/Libra C OF 7 R.png', 288, '7.32', 819, '20.80', 0, 0, 0, 0, 0, 0, 0, 0, -81, 116, 382, 0, 0, 7),
(15, 'Libra_C_OF-T8', 'images/libra/Libra C OF 8 R.png', 284, '7.21', 875, '22.22', 0, 0, 0, 0, 0, 0, 0, 0, -87, 114, 410, 0, 0, 8),
(16, 'Libra_C_OF-T9', 'images/libra/Libra C OF 9 R.png', 303, '7.70', 888, '25.56', 0, 0, 0, 0, 0, 0, 0, 0, -81, 123, 417, 0, 0, 9);

-- --------------------------------------------------------

--
-- Table structure for table `implant_libra_ha`
--

DROP TABLE IF EXISTS `implant_libra_ha`;
CREATE TABLE IF NOT EXISTS `implant_libra_ha` (
  `id` int(2) DEFAULT NULL,
  `nom` varchar(12) DEFAULT NULL,
  `url` varchar(30) DEFAULT NULL,
  `widthPx` int(3) DEFAULT NULL,
  `widthCm` decimal(3,2) DEFAULT NULL,
  `heightPx` int(3) DEFAULT NULL,
  `heightCm` decimal(4,2) DEFAULT NULL,
  `axeFemurHautPxX` int(1) DEFAULT NULL,
  `axeFemurHautPxY` int(1) DEFAULT NULL,
  `axeFemurBasPxX` int(1) DEFAULT NULL,
  `axeFemurBasPxY` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxX` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxY` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxX` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxY` int(1) DEFAULT NULL,
  `distOffsetX` int(3) DEFAULT NULL,
  `PtMecaHautXPx` int(4) DEFAULT NULL,
  `PtMecaHautYPx` int(3) DEFAULT NULL,
  `angleCervicoDiaphysaire` int(1) DEFAULT NULL,
  `enabled` int(1) DEFAULT NULL,
  `taille` int(2) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_libra_ha`
--

INSERT INTO `implant_libra_ha` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra_HA-T1', 'images/libra/Libra HA 1.png', 205, '5.21', 652, '16.56', 0, 0, 0, 0, 0, 0, 0, 0, 75, -76, 298, 0, 0, 1),
(2, 'Libra_HA-T2', 'images/libra/Libra HA 2.png', 212, '5.38', 772, '19.61', 0, 0, 0, 0, 0, 0, 0, 0, 76, -78, 358, 0, 0, 2),
(3, 'Libra_HA-T3', 'images/libra/Libra HA 3.png', 218, '5.54', 733, '18.62', 0, 0, 0, 0, 0, 0, 0, 0, 77, -81, 338, 0, 0, 3),
(4, 'Libra_HA-T4', 'images/libra/Libra HA 4.png', 225, '5.71', 770, '19.56', 0, 0, 0, 0, 0, 0, 0, 0, 77, -84, 357, 0, 0, 4),
(5, 'Libra_HA-T5', 'images/libra/Libra HA 5.png', 232, '5.89', 785, '19.94', 0, 0, 0, 0, 0, 0, 0, 0, 77, -88, 364, 0, 0, 5),
(6, 'Libra_HA-T6', 'images/libra/Libra HA 6.png', 254, '6.45', 818, '20.78', 0, 0, 0, 0, 0, 0, 0, 0, 70, -100, 381, 0, 0, 6),
(7, 'Libra_HA-T7', 'images/libra/Libra HA 7.png', 245, '6.22', 836, '21.23', 0, 0, 0, 0, 0, 0, 0, 0, 79, -94, 390, 0, 0, 7),
(8, 'Libra_HA-T8', 'images/libra/Libra HA 8.png', 252, '6.40', 860, '21.84', 0, 0, 0, 0, 0, 0, 0, 0, 79, -98, 402, 0, 0, 8),
(9, 'Libra_HA-T9', 'images/libra/Libra HA 9.png', 263, '6.68', 884, '22.45', 0, 0, 0, 0, 0, 0, 0, 0, 78, -103, 414, 0, 0, 9),
(10, 'Libra_HA-T10', 'images/libra/Libra HA 10.png', 266, '6.76', 919, '23.34', 0, 0, 0, 0, 0, 0, 0, 0, 81, -105, 431, 0, 0, 10),
(11, 'Libra_HA-T11', 'images/libra/Libra HA 11.png', 279, '7.09', 922, '23.42', 0, 0, 0, 0, 0, 0, 0, 0, 79, -109, 433, 0, 0, 11),
(12, 'Libra_HA-T1', 'images/libra/Libra HA 1 R.png', 205, '5.21', 652, '16.56', 0, 0, 0, 0, 0, 0, 0, 0, -75, 76, 298, 0, 0, 1),
(13, 'Libra_HA-T2', 'images/libra/Libra HA 2 R.png', 212, '5.38', 772, '19.61', 0, 0, 0, 0, 0, 0, 0, 0, -76, 78, 358, 0, 0, 2),
(14, 'Libra_HA-T3', 'images/libra/Libra HA 3 R.png', 218, '5.54', 733, '18.62', 0, 0, 0, 0, 0, 0, 0, 0, -77, 81, 338, 0, 0, 3),
(15, 'Libra_HA-T4', 'images/libra/Libra HA 4 R.png', 225, '5.71', 770, '19.56', 0, 0, 0, 0, 0, 0, 0, 0, -77, 84, 357, 0, 0, 4),
(16, 'Libra_HA-T5', 'images/libra/Libra HA 5 R.png', 232, '5.89', 785, '19.94', 0, 0, 0, 0, 0, 0, 0, 0, -77, 88, 364, 0, 0, 5),
(17, 'Libra_HA-T6', 'images/libra/Libra HA 6 R.png', 254, '6.45', 818, '20.78', 0, 0, 0, 0, 0, 0, 0, 0, -70, 100, 381, 0, 0, 6),
(18, 'Libra_HA-T7', 'images/libra/Libra HA 7 R.png', 245, '6.22', 836, '21.23', 0, 0, 0, 0, 0, 0, 0, 0, -79, 94, 390, 0, 0, 7),
(19, 'Libra_HA-T8', 'images/libra/Libra HA 8 R.png', 252, '6.40', 860, '21.84', 0, 0, 0, 0, 0, 0, 0, 0, -79, 98, 402, 0, 0, 8),
(20, 'Libra_HA-T9', 'images/libra/Libra HA 9 R.png', 263, '6.68', 884, '22.45', 0, 0, 0, 0, 0, 0, 0, 0, -78, 103, 414, 0, 0, 9),
(21, 'Libra_HA-T10', 'images/libra/Libra HA 10 R.png', 266, '6.76', 919, '23.34', 0, 0, 0, 0, 0, 0, 0, 0, -81, 105, 431, 0, 0, 10),
(22, 'Libra_HA-T11', 'images/libra/Libra HA 11 R.png', 279, '7.09', 922, '23.42', 0, 0, 0, 0, 0, 0, 0, 0, -79, 109, 433, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_libra_ha_a`
--

DROP TABLE IF EXISTS `implant_libra_ha_a`;
CREATE TABLE IF NOT EXISTS `implant_libra_ha_a` (
  `id` int(2) DEFAULT NULL,
  `nom` varchar(14) DEFAULT NULL,
  `url` varchar(32) DEFAULT NULL,
  `widthPx` int(3) DEFAULT NULL,
  `widthCm` decimal(3,2) DEFAULT NULL,
  `heightPx` int(3) DEFAULT NULL,
  `heightCm` decimal(4,2) DEFAULT NULL,
  `axeFemurHautPxX` int(1) DEFAULT NULL,
  `axeFemurHautPxY` int(1) DEFAULT NULL,
  `axeFemurBasPxX` int(1) DEFAULT NULL,
  `axeFemurBasPxY` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxX` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxY` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxX` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxY` int(1) DEFAULT NULL,
  `distOffsetX` int(3) DEFAULT NULL,
  `PtMecaHautXPx` int(4) DEFAULT NULL,
  `PtMecaHautYPx` int(3) DEFAULT NULL,
  `angleCervicoDiaphysaire` int(1) DEFAULT NULL,
  `enabled` int(1) DEFAULT NULL,
  `taille` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_libra_ha_a`
--

INSERT INTO `implant_libra_ha_a` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra_HA_A-T1', 'images/libra/Libra HA A 1.png', 220, '5.59', 636, '16.15', 0, 0, 0, 0, 0, 0, 0, 0, 70, -82, 290, 0, 0, 1),
(2, 'Libra_HA_A-T2', 'images/libra/Libra HA A 2.png', 222, '5.64', 684, '17.37', 0, 0, 0, 0, 0, 0, 0, 0, 73, -83, 314, 0, 0, 2),
(3, 'Libra_HA_A-T3', 'images/libra/Libra HA A 3.png', 230, '5.84', 748, '19.00', 0, 0, 0, 0, 0, 0, 0, 0, 73, -87, 346, 0, 0, 3),
(4, 'Libra_HA_A-T4', 'images/libra/Libra HA A 4.png', 233, '5.92', 665, '16.89', 0, 0, 0, 0, 0, 0, 0, 0, 75, -89, 305, 0, 0, 4),
(5, 'Libra_HA_A-T5', 'images/libra/Libra HA A 5.png', 242, '6.15', 689, '17.50', 0, 0, 0, 0, 0, 0, 0, 0, 75, -93, 317, 0, 0, 5),
(6, 'Libra_HA_A-T6', 'images/libra/Libra HA A 6.png', 258, '6.55', 812, '20.62', 0, 0, 0, 0, 0, 0, 0, 0, 70, -101, 378, 0, 0, 6),
(7, 'Libra_HA_A-T7', 'images/libra/Libra HA A 7.png', 265, '6.73', 835, '21.21', 0, 0, 0, 0, 0, 0, 0, 0, 70, -104, 389, 0, 0, 7),
(8, 'Libra_HA_A-T8', 'images/libra/Libra HA A 8.png', 298, '7.57', 908, '23.06', 0, 0, 0, 0, 0, 0, 0, 0, 80, -111, 426, 0, 0, 8),
(9, 'Libra_HA_A-T9', 'images/libra/Libra HA A 9.png', 292, '7.42', 868, '22.05', 0, 0, 0, 0, 0, 0, 0, 0, 83, -101, 406, 0, 0, 9),
(10, 'Libra_HA_A-T10', 'images/libra/Libra HA A 10.png', 278, '7.06', 906, '23.01', 0, 0, 0, 0, 0, 0, 0, 0, 79, -108, 425, 0, 0, 10),
(11, 'Libra_HA_A-T11', 'images/libra/Libra HA A 11.png', 294, '7.47', 935, '23.75', 0, 0, 0, 0, 0, 0, 0, 0, 72, -120, 439, 0, 0, 11),
(12, 'Libra_HA_A-T1', 'images/libra/Libra HA A 1 R.png', 220, '5.59', 636, '16.15', 0, 0, 0, 0, 0, 0, 0, 0, -70, 82, 290, 0, 0, 1),
(13, 'Libra_HA_A-T2', 'images/libra/Libra HA A 2 R.png', 222, '5.64', 684, '17.37', 0, 0, 0, 0, 0, 0, 0, 0, -73, 83, 314, 0, 0, 2),
(14, 'Libra_HA_A-T3', 'images/libra/Libra HA A 3 R.png', 230, '5.84', 748, '19.00', 0, 0, 0, 0, 0, 0, 0, 0, -73, 87, 346, 0, 0, 3),
(15, 'Libra_HA_A-T4', 'images/libra/Libra HA A 4 R.png', 233, '5.92', 665, '16.89', 0, 0, 0, 0, 0, 0, 0, 0, -75, 89, 305, 0, 0, 4),
(16, 'Libra_HA_A-T5', 'images/libra/Libra HA A 5 R.png', 242, '6.15', 689, '17.50', 0, 0, 0, 0, 0, 0, 0, 0, -75, 93, 317, 0, 0, 5),
(17, 'Libra_HA_A-T6', 'images/libra/Libra HA A 6 R.png', 258, '6.55', 812, '20.62', 0, 0, 0, 0, 0, 0, 0, 0, -70, 101, 378, 0, 0, 6),
(18, 'Libra_HA_A-T7', 'images/libra/Libra HA A 7 R.png', 265, '6.73', 835, '21.21', 0, 0, 0, 0, 0, 0, 0, 0, -70, 104, 389, 0, 0, 7),
(19, 'Libra_HA_A-T8', 'images/libra/Libra HA A 8 R.png', 298, '7.57', 908, '23.06', 0, 0, 0, 0, 0, 0, 0, 0, -80, 111, 426, 0, 0, 8),
(20, 'Libra_HA_A-T9', 'images/libra/Libra HA A 9 R.png', 292, '7.42', 868, '22.05', 0, 0, 0, 0, 0, 0, 0, 0, -83, 101, 406, 0, 0, 9),
(21, 'Libra_HA_A-T10', 'images/libra/Libra HA A 10 R.png', 278, '7.06', 906, '23.01', 0, 0, 0, 0, 0, 0, 0, 0, -79, 108, 425, 0, 0, 10),
(22, 'Libra_HA_A-T11', 'images/libra/Libra HA A 11 R.png', 294, '7.47', 935, '23.75', 0, 0, 0, 0, 0, 0, 0, 0, -72, 120, 439, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_libra_ha_of`
--

DROP TABLE IF EXISTS `implant_libra_ha_of`;
CREATE TABLE IF NOT EXISTS `implant_libra_ha_of` (
  `id` int(2) DEFAULT NULL,
  `nom` varchar(14) DEFAULT NULL,
  `url` varchar(32) DEFAULT NULL,
  `widthPx` int(3) DEFAULT NULL,
  `widthCm` decimal(3,2) DEFAULT NULL,
  `heightPx` int(3) DEFAULT NULL,
  `heightCm` decimal(4,2) DEFAULT NULL,
  `axeFemurHautPxX` int(1) DEFAULT NULL,
  `axeFemurHautPxY` int(1) DEFAULT NULL,
  `axeFemurBasPxX` int(1) DEFAULT NULL,
  `axeFemurBasPxY` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxX` int(1) DEFAULT NULL,
  `axeTeteHancheHautPxY` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxX` int(1) DEFAULT NULL,
  `axeTeteHancheBasPxY` int(1) DEFAULT NULL,
  `distOffsetX` int(3) DEFAULT NULL,
  `PtMecaHautXPx` int(4) DEFAULT NULL,
  `PtMecaHautYPx` int(3) DEFAULT NULL,
  `angleCervicoDiaphysaire` int(1) DEFAULT NULL,
  `enabled` int(1) DEFAULT NULL,
  `taille` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_libra_ha_of`
--

INSERT INTO `implant_libra_ha_of` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Libra_HA_OF-T2', 'images/libra/Libra HA OF 2.png', 236, '5.99', 709, '18.01', 0, 0, 0, 0, 0, 0, 0, 0, 88, -90, 326, 0, 0, 2),
(2, 'Libra_HA_OF-T3', 'images/libra/Libra HA OF 3.png', 242, '6.15', 741, '18.82', 0, 0, 0, 0, 0, 0, 0, 0, 89, -93, 342, 0, 0, 3),
(3, 'Libra_HA_OF-T4', 'images/libra/Libra HA OF 4.png', 248, '6.30', 769, '19.53', 0, 0, 0, 0, 0, 0, 0, 0, 89, -96, 356, 0, 0, 4),
(4, 'Libra_HA_OF-T5', 'images/libra/Libra HA OF 5.png', 259, '6.58', 794, '20.17', 0, 0, 0, 0, 0, 0, 0, 0, 87, -101, 369, 0, 0, 5),
(5, 'Libra_HA_OF-T6', 'images/libra/Libra HA OF 6.png', 268, '6.81', 838, '21.29', 0, 0, 0, 0, 0, 0, 0, 0, 87, -106, 391, 0, 0, 6),
(6, 'Libra_HA_OF-T7', 'images/libra/Libra HA OF 7.png', 276, '7.01', 837, '21.26', 0, 0, 0, 0, 0, 0, 0, 0, 87, -110, 390, 0, 0, 7),
(7, 'Libra_HA_OF-T8', 'images/libra/Libra HA OF 8.png', 277, '7.04', 862, '21.89', 0, 0, 0, 0, 0, 0, 0, 0, 90, -110, 403, 0, 0, 8),
(8, 'Libra_HA_OF-T9', 'images/libra/Libra HA OF 9.png', 292, '7.42', 876, '22.25', 0, 0, 0, 0, 0, 0, 0, 0, 88, -117, 410, 0, 0, 9),
(9, 'Libra_HA_OF-T2', 'images/libra/Libra HA OF 2 R.png', 236, '5.99', 709, '18.01', 0, 0, 0, 0, 0, 0, 0, 0, -88, 90, 326, 0, 0, 2),
(10, 'Libra_HA_OF-T3', 'images/libra/Libra HA OF 3 R.png', 242, '6.15', 741, '18.82', 0, 0, 0, 0, 0, 0, 0, 0, -89, 93, 342, 0, 0, 3),
(11, 'Libra_HA_OF-T4', 'images/libra/Libra HA OF 4 R.png', 248, '6.30', 769, '19.53', 0, 0, 0, 0, 0, 0, 0, 0, -89, 96, 356, 0, 0, 4),
(12, 'Libra_HA_OF-T5', 'images/libra/Libra HA OF 5 R.png', 259, '6.58', 794, '20.17', 0, 0, 0, 0, 0, 0, 0, 0, -87, 101, 369, 0, 0, 5),
(13, 'Libra_HA_OF-T6', 'images/libra/Libra HA OF 6 R.png', 268, '6.81', 838, '21.29', 0, 0, 0, 0, 0, 0, 0, 0, -87, 106, 391, 0, 0, 6),
(14, 'Libra_HA_OF-T7', 'images/libra/Libra HA OF 7 R.png', 276, '7.01', 837, '21.26', 0, 0, 0, 0, 0, 0, 0, 0, -87, 110, 390, 0, 0, 7),
(15, 'Libra_HA_OF-T8', 'images/libra/Libra HA OF 8 R.png', 277, '7.04', 862, '21.89', 0, 0, 0, 0, 0, 0, 0, 0, -90, 110, 403, 0, 0, 8),
(16, 'Libra_HA_OF-T9', 'images/libra/Libra HA OF 9 R.png', 292, '7.42', 876, '22.25', 0, 0, 0, 0, 0, 0, 0, 0, -88, 117, 410, 0, 0, 9);

-- --------------------------------------------------------

--
-- Table structure for table `implant_sagitta180`
--

DROP TABLE IF EXISTS `implant_sagitta180`;
CREATE TABLE IF NOT EXISTS `implant_sagitta180` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_sagitta180`
--

INSERT INTO `implant_sagitta180` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Sagitta180-T2', 'images/sagitta/Sagitta EVLR2-180.png', 208, 5.28, 805, 20.45, 0, 0, 0, 0, 0, 0, 0, 0, 68, -77, 374.5, 0, 0, 2),
(2, 'Sagitta180-T3', 'images/sagitta/Sagitta EVLR3-180.png', 224, 5.69, 841, 21.36, 0, 0, 0, 0, 0, 0, 0, 0, 76, -71, 384.5, 0, 0, 3),
(3, 'Sagitta180-T4', 'images/sagitta/Sagitta EVLR4-180.png', 223, 5.66, 834, 21.18, 0, 0, 0, 0, 0, 0, 0, 0, 73.5, -76.5, 383, 0, 0, 4),
(4, 'Sagitta180-T5', 'images/sagitta/Sagitta EVLR5-180.png', 229, 5.82, 823, 20.9, 0, 0, 0, 0, 0, 0, 0, 0, 75.5, -75.5, 374.5, 0, 0, 5),
(5, 'Sagitta180-T6', 'images/sagitta/Sagitta EVLR6-180.png', 231, 5.87, 826, 20.98, 0, 0, 0, 0, 0, 0, 0, 0, 74.5, -78.5, 377, 0, 0, 6),
(6, 'Sagitta180-T2', 'images/sagitta/Sagitta EVLR2-180 R.png', 208, 5.28, 805, 20.45, 0, 0, 0, 0, 0, 0, 0, 0, -68, 77, 374.5, 0, 0, 2),
(7, 'Sagitta180-T3', 'images/sagitta/Sagitta EVLR3-180 R.png', 224, 5.69, 841, 21.36, 0, 0, 0, 0, 0, 0, 0, 0, -75, 71, 384.5, 0, 0, 3),
(8, 'Sagitta180-T4', 'images/sagitta/Sagitta EVLR4-180 R.png', 223, 5.66, 834, 21.18, 0, 0, 0, 0, 0, 0, 0, 0, -73.5, 76.5, 383, 0, 0, 4),
(9, 'Sagitta180-T5', 'images/sagitta/Sagitta EVLR5-180 R.png', 229, 5.82, 823, 20.9, 0, 0, 0, 0, 0, 0, 0, 0, -75.5, 75.5, 374.5, 0, 0, 5),
(10, 'Sagitta180-T6', 'images/sagitta/Sagitta EVLR6-180 R.png', 231, 5.87, 826, 20.98, 0, 0, 0, 0, 0, 0, 0, 0, -75.5, 78.5, 377, 0, 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `implant_sagitta250`
--

DROP TABLE IF EXISTS `implant_sagitta250`;
CREATE TABLE IF NOT EXISTS `implant_sagitta250` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_sagitta250`
--

INSERT INTO `implant_sagitta250` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Sagitta250-T2', 'images/sagitta/Sagitta EVLR2-250.png', 219, 5.56, 1094, 27.79, 0, 0, 0, 0, 0, 0, 0, 0, 73.5, -73.5, 512, 0, 0, 2),
(2, 'Sagitta250-T3', 'images/sagitta/Sagitta EVLR3-250.png', 224, 5.69, 1102, 27.99, 0, 0, 0, 0, 0, 0, 0, 0, 76, -72, 514, 0, 0, 3),
(3, 'Sagitta250-T4', 'images/sagitta/Sagitta EVLR4-250.png', 223, 5.66, 1091, 27.71, 0, 0, 0, 0, 0, 0, 0, 0, 73.5, -76.5, 512.5, 0, 0, 4),
(4, 'Sagitta250-T5', 'images/sagitta/Sagitta EVLR5-250.png', 229, 5.82, 1098, 27.89, 0, 0, 0, 0, 0, 0, 0, 0, 74.5, -76.5, 512, 0, 0, 5),
(5, 'Sagitta250-T6', 'images/sagitta/Sagitta EVLR6-250.png', 232, 5.89, 1094, 27.79, 0, 0, 0, 0, 0, 0, 0, 0, 75, -78, 510, 0, 0, 6),
(6, 'Sagitta250-T2', 'images/sagitta/Sagitta EVLR2-250 R.png', 219, 5.56, 1094, 27.79, 0, 0, 0, 0, 0, 0, 0, 0, -73.5, 72.5, 512, 0, 0, 2),
(7, 'Sagitta250-T3', 'images/sagitta/Sagitta EVLR3-250 R.png', 224, 5.69, 1102, 27.99, 0, 0, 0, 0, 0, 0, 0, 0, -76, 72, 514, 0, 0, 3),
(8, 'Sagitta250-T4', 'images/sagitta/Sagitta EVLR4-250 R.png', 223, 5.66, 1091, 27.71, 0, 0, 0, 0, 0, 0, 0, 0, -73.5, 76.5, 512.5, 0, 0, 4),
(9, 'Sagitta250-T5', 'images/sagitta/Sagitta EVLR5-250 R.png', 229, 5.82, 1098, 27.89, 0, 0, 0, 0, 0, 0, 0, 0, -74.5, 76.5, 512, 0, 0, 5),
(10, 'Sagitta250-T6', 'images/sagitta/Sagitta EVLR6-250 R.png', 232, 5.89, 1094, 27.79, 0, 0, 0, 0, 0, 0, 0, 0, -75, 78, 510, 0, 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `implant_sagitta325`
--

DROP TABLE IF EXISTS `implant_sagitta325`;
CREATE TABLE IF NOT EXISTS `implant_sagitta325` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_sagitta325`
--

INSERT INTO `implant_sagitta325` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Sagitta325-T3', 'images/sagitta/Sagitta EVLR3-325.png', 211, 5.36, 1378, 35, 0, 0, 0, 0, 0, 0, 0, 0, 69.5, -78.5, 662, 0, 0, 3),
(2, 'Sagitta325-T4', 'images/sagitta/Sagitta EVLR4-325.png', 223, 5.66, 1383, 35.13, 0, 0, 0, 0, 0, 0, 0, 0, 73.5, -76.5, 657.5, 0, 0, 4),
(3, 'Sagitta325-T5', 'images/sagitta/Sagitta EVLR5-325.png', 229, 5.82, 1387, 35.23, 0, 0, 0, 0, 0, 0, 0, 0, 74.5, -76.5, 657.5, 0, 0, 5),
(4, 'Sagitta325-T6', 'images/sagitta/Sagitta EVLR6-325.png', 232, 5.89, 1379, 35.03, 0, 0, 0, 0, 0, 0, 0, 0, 75, -78, 655.5, 0, 0, 6),
(5, 'Sagitta325-T3', 'images/sagitta/Sagitta EVLR3-325 R.png', 211, 5.36, 1378, 35, 0, 0, 0, 0, 0, 0, 0, 0, -69.5, 78.5, 662, 0, 0, 3),
(6, 'Sagitta325-T4', 'images/sagitta/Sagitta EVLR4-325 R.png', 223, 5.66, 1383, 35.13, 0, 0, 0, 0, 0, 0, 0, 0, -73.5, 76.5, 657.5, 0, 0, 4),
(7, 'Sagitta325-T5', 'images/sagitta/Sagitta EVLR5-325 R.png', 229, 5.82, 1387, 35.23, 0, 0, 0, 0, 0, 0, 0, 0, -75.5, 76.5, 657.5, 0, 0, 5),
(8, 'Sagitta325-T6', 'images/sagitta/Sagitta EVLR6-325 R.png', 232, 5.89, 1379, 35.03, 0, 0, 0, 0, 0, 0, 0, 0, -75, 78, 655.5, 0, 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `implant_scc_mini_std`
--

DROP TABLE IF EXISTS `implant_scc_mini_std`;
CREATE TABLE IF NOT EXISTS `implant_scc_mini_std` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) CHARACTER SET latin1 NOT NULL,
  `url` varchar(200) CHARACTER SET latin1 NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_scc_mini_std`
--

INSERT INTO `implant_scc_mini_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype SCC MINI Standard-T2', 'images/hype_scc_mini_T2.png', 208, 5.28, 512, 13, 0, 0, 0, 0, 0, 0, 0, 0, 78, -76, 227, 0, 0, 2),
(2, 'Hype SCC MINI Standard-T3', 'images/hype_scc_mini_T3.png', 215, 5.46, 532, 13.51, 0, 0, 0, 0, 0, 0, 0, 0, 77.5, -79.5, 237, 0, 0, 3),
(3, 'Hype SCC MINI Standard-T4', 'images/hype_scc_mini_T4.png', 221, 5.61, 555, 14.1, 0, 0, 0, 0, 0, 0, 0, 0, 78.5, -82.5, 248.5, 0, 0, 4),
(4, 'Hype SCC MINI Standard-T5', 'images/hype_scc_mini_T5.png', 228, 5.79, 581, 14.76, 0, 0, 0, 0, 0, 0, 0, 0, 79, -86, 261.5, 0, 0, 5),
(5, 'Hype SCC MINI Standard-T6', 'images/hype_scc_mini_T6.png', 235, 5.97, 596, 15.14, 0, 0, 0, 0, 0, 0, 0, 0, 79.5, -89.5, 269, 0, 0, 6),
(6, 'Hype SCC MINI Standard-T7', 'images/hype_scc_mini_T7.png', 242, 6.15, 617, 15.67, 0, 0, 0, 0, 0, 0, 0, 0, 80, -93, 279.5, 0, 0, 7),
(7, 'Hype SCC MINI Standard-T2', 'images/hype_scc_mini_T2_R.png', 208, 5.28, 512, 13, 0, 0, 0, 0, 0, 0, 0, 0, -78, 76, 227, 0, 0, 2),
(8, 'Hype SCC MINI Standard-T3', 'images/hype_scc_mini_T3_R.png', 215, 5.46, 532, 13.51, 0, 0, 0, 0, 0, 0, 0, 0, -77.5, 81.5, 237, 0, 0, 3),
(9, 'Hype SCC MINI Standard-T4', 'images/hype_scc_mini_T4_R.png', 221, 5.61, 555, 14.1, 0, 0, 0, 0, 0, 0, 0, 0, -78.5, 83.5, 248.5, 0, 0, 4),
(10, 'Hype SCC MINI Standard-T5', 'images/hype_scc_mini_T5_R.png', 228, 5.79, 581, 14.76, 0, 0, 0, 0, 0, 0, 0, 0, -79, 87, 261.5, 0, 0, 5),
(11, 'Hype SCC MINI Standard-T6', 'images/hype_scc_mini_T6_R.png', 235, 5.97, 596, 15.14, 0, 0, 0, 0, 0, 0, 0, 0, -79.5, 90.5, 269, 0, 0, 6),
(12, 'Hype SCC MINI Standard-T7', 'images/hype_scc_mini_T7_R.png', 242, 6.15, 617, 15.67, 0, 0, 0, 0, 0, 0, 0, 0, -80, 94, 279.5, 0, 0, 7);

-- --------------------------------------------------------

--
-- Table structure for table `implant_scc_std_col`
--

DROP TABLE IF EXISTS `implant_scc_std_col`;
CREATE TABLE IF NOT EXISTS `implant_scc_std_col` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_scc_std_col`
--

INSERT INTO `implant_scc_std_col` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype SCC Standard à colerette-T1', 'images/hype_scc_T1.png', 202, 5.13, 594, 15.09, 0, 0, 0, 0, 0, 0, 0, 0, 77, -73, 268, 0, 0, 1),
(2, 'Hype SCC Standard à colerette-T2', 'images/hype_scc_T2.png', 208, 5.28, 610, 15.49, 0, 0, 0, 0, 0, 0, 0, 0, 78, -76, 276, 0, 0, 2),
(3, 'Hype SCC Standard à colerette-T3', 'images/hype_scc_T3.png', 215, 5.46, 647, 16.43, 0, 0, 0, 0, 0, 0, 0, 0, 77.5, -79.5, 294.5, 0, 0, 3),
(4, 'Hype SCC Standard à colerette-T4', 'images/hype_scc_T4.png', 221, 5.61, 672, 17.07, 0, 0, 0, 0, 0, 0, 0, 0, 78.5, -82.5, 307, 0, 0, 4),
(5, 'Hype SCC Standard à colerette-T5', 'images/hype_scc_T5.png', 228, 5.79, 698, 17.73, 0, 0, 0, 0, 0, 0, 0, 0, 79, -86, 320, 0, 0, 5),
(6, 'Hype SCC Standard à colerette-T6', 'images/hype_scc_T6.png', 235, 5.97, 719, 18.26, 0, 0, 0, 0, 0, 0, 0, 0, 79.5, -89.5, 330.5, 0, 0, 6),
(7, 'Hype SCC Standard à colerette-T7', 'images/hype_scc_T7.png', 242, 6.15, 728, 18.49, 0, 0, 0, 0, 0, 0, 0, 0, 80, -93, 335, 0, 0, 7),
(8, 'Hype SCC Standard à colerette-T8', 'images/hype_scc_T8.png', 248, 6.3, 748, 19, 0, 0, 0, 0, 0, 0, 0, 0, 81, -96, 345, 0, 0, 8),
(9, 'Hype SCC Standard à colerette-T9', 'images/hype_scc_T9.png', 255, 6.48, 771, 19.58, 0, 0, 0, 0, 0, 0, 0, 0, 82.5, -99.5, 356.5, 0, 0, 9),
(10, 'Hype SCC Standard à colerette-T10', 'images/hype_scc_T10.png', 261, 6.63, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 83.5, -102.5, 371, 0, 0, 10),
(11, 'Hype SCC Standard à colerette-T11', 'images/hype_scc_T11.png', 265, 6.73, 833, 21.16, 0, 0, 0, 0, 0, 0, 0, 0, 84.5, -104.5, 387.5, 0, 0, 11),
(12, 'Hype SCC Standard à colerette-T1', 'images/hype_scc_T1_R.png', 202, 5.13, 594, 15.09, 0, 0, 0, 0, 0, 0, 0, 0, -76, 74, 268, 0, 0, 1),
(13, 'Hype SCC Standard à colerette-T2', 'images/hype_scc_T2_R.png', 208, 5.28, 610, 15.49, 0, 0, 0, 0, 0, 0, 0, 0, -78, 76, 276, 0, 0, 2),
(14, 'Hype SCC Standard à colerette-T3', 'images/hype_scc_T3_R.png', 215, 5.46, 647, 16.43, 0, 0, 0, 0, 0, 0, 0, 0, -77.5, 80.5, 294.5, 0, 0, 3),
(15, 'Hype SCC Standard à colerette-T4', 'images/hype_scc_T4_R.png', 221, 5.61, 672, 17.07, 0, 0, 0, 0, 0, 0, 0, 0, -78.5, 83.5, 307, 0, 0, 4),
(16, 'Hype SCC Standard à colerette-T5', 'images/hype_scc_T5_R.png', 228, 5.79, 698, 17.73, 0, 0, 0, 0, 0, 0, 0, 0, -79, 87, 320, 0, 0, 5),
(17, 'Hype SCC Standard à colerette-T6', 'images/hype_scc_T6_R.png', 235, 5.97, 719, 18.26, 0, 0, 0, 0, 0, 0, 0, 0, -79.5, 91.5, 330.5, 0, 0, 6),
(18, 'Hype SCC Standard à colerette-T7', 'images/hype_scc_T7_R.png', 242, 6.15, 728, 18.49, 0, 0, 0, 0, 0, 0, 0, 0, -80, 94, 335, 0, 0, 7),
(19, 'Hype SCC Standard à colerette-T8', 'images/hype_scc_T8_R.png', 248, 6.3, 748, 19, 0, 0, 0, 0, 0, 0, 0, 0, -81, 97, 345, 0, 0, 8),
(20, 'Hype SCC Standard à colerette-T9', 'images/hype_scc_T9_R.png', 255, 6.48, 771, 19.58, 0, 0, 0, 0, 0, 0, 0, 0, -82.5, 99.5, 356.5, 0, 0, 9),
(21, 'Hype SCC Standard à colerette-T10', 'images/hype_scc_T10_R.png', 261, 6.63, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -83.5, 103.5, 371, 0, 0, 10),
(22, 'Hype SCC Standard à colerette-T11', 'images/hype_scc_T11_R.png', 265, 6.73, 833, 21.16, 0, 0, 0, 0, 0, 0, 0, 0, -84.5, 106.5, 387.5, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_scho_high_offset`
--

DROP TABLE IF EXISTS `implant_scho_high_offset`;
CREATE TABLE IF NOT EXISTS `implant_scho_high_offset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) CHARACTER SET latin1 NOT NULL,
  `url` varchar(200) CHARACTER SET latin1 NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_scho_high_offset`
--

INSERT INTO `implant_scho_high_offset` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype SCHO High Offset-T3', 'images/hype_scho_T3.png\n', 237, 6.02, 653, 16.59, 0, 0, 0, 0, 0, 0, 0, 0, 88.5, -90.5, 297.5, 0, 0, 3),
(2, 'Hype SCHO High Offset-T4', 'images/hype_scho_T4.png\n', 244, 6.2, 682, 17.32, 0, 0, 0, 0, 0, 0, 0, 0, 88, -94, 312, 0, 0, 4),
(3, 'Hype SCHO High Offset-T5', 'images/hype_scho_T5.png\n', 251, 6.38, 693, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -97.5, 317.5, 0, 0, 5),
(4, 'Hype SCHO High Offset-T6', 'images/hype_scho_T6.png\n', 257, 6.53, 714, 18.14, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -100.5, 328, 0, 0, 6),
(5, 'Hype SCHO High Offset-T7', 'images/hype_scho_T7.png\n', 264, 6.71, 734, 18.64, 0, 0, 0, 0, 0, 0, 0, 0, 91, -104, 338, 0, 0, 7),
(6, 'Hype SCHO High Offset-T8', 'images/hype_scho_T8.png\n', 271, 6.88, 760, 19.3, 0, 0, 0, 0, 0, 0, 0, 0, 91.5, -107.5, 351, 0, 0, 8),
(7, 'Hype SCHO High Offset-T9', 'images/hype_scho_T9.png\n', 278, 7.06, 785, 19.94, 0, 0, 0, 0, 0, 0, 0, 0, 92, -111, 363.5, 0, 0, 9),
(8, 'Hype SCHO High Offset-T10', 'images/hype_scho_T10.png\n', 283, 7.19, 805, 20.45, 0, 0, 0, 0, 0, 0, 0, 0, 93.5, -113.5, 373.5, 0, 0, 10),
(9, 'Hype SCHO High Offset-T11', 'images/hype_scho_T11.png\n', 288, 7.32, 835, 21.21, 0, 0, 0, 0, 0, 0, 0, 0, 95, -116, 388.5, 0, 0, 11),
(10, 'Hype SCHO High Offset-T3', 'images/hype_scho_T3_R.png\n', 237, 6.02, 653, 16.59, 0, 0, 0, 0, 0, 0, 0, 0, -88.5, 90.5, 297.5, 0, 0, 3),
(11, 'Hype SCHO High Offset-T4', 'images/hype_scho_T4_R.png\n', 244, 6.2, 682, 17.32, 0, 0, 0, 0, 0, 0, 0, 0, -88, 94, 312, 0, 0, 4),
(12, 'Hype SCHO High Offset-T5', 'images/hype_scho_T5_R.png\n', 251, 6.38, 693, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, -89.5, 97.5, 317.5, 0, 0, 5),
(13, 'Hype SCHO High Offset-T6', 'images/hype_scho_T6_R.png\n', 257, 6.53, 714, 18.14, 0, 0, 0, 0, 0, 0, 0, 0, -90.5, 101.5, 328, 0, 0, 6),
(14, 'Hype SCHO High Offset-T7', 'images/hype_scho_T7_R.png\n', 264, 6.71, 734, 18.64, 0, 0, 0, 0, 0, 0, 0, 0, -91, 104, 338, 0, 0, 7),
(15, 'Hype SCHO High Offset-T8', 'images/hype_scho_T8_R.png\n', 271, 6.88, 760, 19.3, 0, 0, 0, 0, 0, 0, 0, 0, -91.5, 107.5, 351, 0, 0, 8),
(16, 'Hype SCHO High Offset-T9', 'images/hype_scho_T9_R.png\n', 278, 7.06, 785, 19.94, 0, 0, 0, 0, 0, 0, 0, 0, -92, 111, 363.5, 0, 0, 9),
(17, 'Hype SCHO High Offset-T10', 'images/hype_scho_T10_R.png\n', 283, 7.19, 805, 20.45, 0, 0, 0, 0, 0, 0, 0, 0, -93.5, 113.5, 373.5, 0, 0, 10),
(18, 'Hype SCHO High Offset-T11', 'images/hype_scho_T11_R.png\n', 288, 7.32, 835, 21.21, 0, 0, 0, 0, 0, 0, 0, 0, -95, 116, 388.5, 0, 0, 11),
(19, 'Hype SCHO High Offset-T11', 'images/hype_scho_T11_R.png\n', 288, 7.32, 835, 21.21, 0, 0, 0, 0, 0, 0, 0, 0, -95, 116, 388.5, 0, 0, 12);

-- --------------------------------------------------------

--
-- Table structure for table `implant_scla_mini_lat`
--

DROP TABLE IF EXISTS `implant_scla_mini_lat`;
CREATE TABLE IF NOT EXISTS `implant_scla_mini_lat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_scla_mini_lat`
--

INSERT INTO `implant_scla_mini_lat` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype SCLA MINI Latéralisée-T2', 'images/hype_scla_mini_T2.png', 231, 5.87, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -87.5, 273.5, 0, 0, 2),
(2, 'Hype SCLA MINI Latéralisée-T3', 'images/hype_scla_mini_T3.png', 239, 6.07, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -91.5, 273.5, 0, 0, 3),
(3, 'Hype SCLA MINI Latéralisée-T4', 'images/hype_scla_mini_T4.png', 245, 6.22, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, 90.5, -94.5, 273.5, 0, 0, 4),
(4, 'Hype SCLA MINI Latéralisée-T5', 'images/hype_scla_mini_T5.png', 252, 6.4, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, 91, -98, 273.5, 0, 0, 5),
(5, 'Hype SCLA MINI Latéralisée-T6', 'images/hype_scla_mini_T6.png', 259, 6.58, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, 91.5, -101.5, 273.5, 0, 0, 6),
(6, 'Hype SCLA MINI Latéralisée-T7', 'images/hype_scla_mini_T7.png', 266, 6.76, 605, 15.35, 0, 0, 0, 0, 0, 0, 0, 0, 92, -105, 273.5, 0, 0, 7),
(7, 'Hype SCLA MINI Latéralisée-T2', 'images/hype_scla_mini_T2_R.png', 231, 5.87, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, -89.5, 88.5, 273.5, 0, 0, 2),
(8, 'Hype SCLA MINI Latéralisée-T3', 'images/hype_scla_mini_T3_R.png', 239, 6.07, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, -89.5, 92.5, 273.5, 0, 0, 3),
(9, 'Hype SCLA MINI Latéralisée-T4', 'images/hype_scla_mini_T4_R.png', 245, 6.22, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, -90.5, 95.5, 273.5, 0, 0, 4),
(10, 'Hype SCLA MINI Latéralisée-T5', 'images/hype_scla_mini_T5_R.png', 252, 6.4, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, -91, 99, 273.5, 0, 0, 5),
(11, 'Hype SCLA MINI Latéralisée-T6', 'images/hype_scla_mini_T6_R.png', 259, 6.58, 605, 15.37, 0, 0, 0, 0, 0, 0, 0, 0, -91.5, 102.5, 273.5, 0, 0, 6),
(12, 'Hype SCLA MINI Latéralisée-T7', 'images/hype_scla_mini_T7_R.png', 266, 6.76, 605, 15.35, 0, 0, 0, 0, 0, 0, 0, 0, -92, 106, 273.5, 0, 0, 7);

-- --------------------------------------------------------

--
-- Table structure for table `implant_scl_lat`
--

DROP TABLE IF EXISTS `implant_scl_lat`;
CREATE TABLE IF NOT EXISTS `implant_scl_lat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_scl_lat`
--

INSERT INTO `implant_scl_lat` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype SCL Latéralisée-T2', 'images/hype_scl_T2.png', 231, 5.87, 633, 16.08, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -87.5, 287.5, 0, 0, 2),
(2, 'Hype SCL Latéralisée-T3', 'images/hype_scl_T3.png', 239, 6.07, 667, 16.94, 0, 0, 0, 0, 0, 0, 0, 0, 89.5, -91.5, 304.5, 0, 0, 3),
(3, 'Hype SCL Latéralisée-T4', 'images/hype_scl_T4.png', 245, 6.22, 685, 17.4, 0, 0, 0, 0, 0, 0, 0, 0, 90.5, -94.5, 313.5, 0, 0, 4),
(4, 'Hype SCL Latéralisée-T5', 'images/hype_scl_T5.png', 252, 6.4, 706, 17.93, 0, 0, 0, 0, 0, 0, 0, 0, 91, -98, 324, 0, 0, 5),
(5, 'Hype SCL Latéralisée-T6', 'images/hype_scl_T6.png', 259, 6.58, 748, 19, 0, 0, 0, 0, 0, 0, 0, 0, 91.5, -101.5, 345, 0, 0, 6),
(6, 'Hype SCL Latéralisée-T7', 'images/hype_scl_T7.png', 266, 6.76, 737, 18.72, 0, 0, 0, 0, 0, 0, 0, 0, 92, -105, 339.5, 0, 0, 7),
(7, 'Hype SCL Latéralisée-T8', 'images/hype_scl_T8.png', 272, 6.91, 768, 19.51, 0, 0, 0, 0, 0, 0, 0, 0, 93, -108, 355, 0, 0, 8),
(8, 'Hype SCL Latéralisée-T9', 'images/hype_scl_T9.png', 278, 7.06, 793, 20.14, 0, 0, 0, 0, 0, 0, 0, 0, 94, -111, 367.5, 0, 0, 9),
(9, 'Hype SCL Latéralisée-T10', 'images/hype_scl_T10.png', 284, 7.21, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 95, -114, 371, 0, 0, 10),
(10, 'Hype SCL Latéralisée-T2', 'images/hype_scl_T2_R.png', 231, 5.87, 633, 16.08, 0, 0, 0, 0, 0, 0, 0, 0, -89.5, 88.5, 287.5, 0, 0, 2),
(11, 'Hype SCL Latéralisée-T3', 'images/hype_scl_T3_R.png', 239, 6.07, 667, 16.94, 0, 0, 0, 0, 0, 0, 0, 0, -89.5, 92.5, 304.5, 0, 0, 3),
(12, 'Hype SCL Latéralisée-T4', 'images/hype_scl_T4_R.png', 245, 6.22, 685, 17.4, 0, 0, 0, 0, 0, 0, 0, 0, -90.5, 95.5, 313.5, 0, 0, 4),
(13, 'Hype SCL Latéralisée-T5', 'images/hype_scl_T5_R.png', 252, 6.4, 706, 17.93, 0, 0, 0, 0, 0, 0, 0, 0, -91, 99, 324, 0, 0, 5),
(14, 'Hype SCL Latéralisée-T6', 'images/hype_scl_T6_R.png', 259, 6.58, 748, 19, 0, 0, 0, 0, 0, 0, 0, 0, -91.5, 102.5, 345, 0, 0, 6),
(15, 'Hype SCL Latéralisée-T7', 'images/hype_scl_T7_R.png', 266, 6.76, 737, 18.72, 0, 0, 0, 0, 0, 0, 0, 0, -92, 106, 339.5, 0, 0, 7),
(16, 'Hype SCL Latéralisée-T8', 'images/hype_scl_T8_R.png', 272, 6.91, 768, 19.51, 0, 0, 0, 0, 0, 0, 0, 0, -93, 109, 355, 0, 0, 8),
(17, 'Hype SCL Latéralisée-T9', 'images/hype_scl_T9_R.png', 278, 7.06, 793, 20.14, 0, 0, 0, 0, 0, 0, 0, 0, -94, 113, 367.5, 0, 0, 9),
(18, 'Hype SCL Latéralisée-T10', 'images/hype_scl_T10_R.png', 284, 7.21, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -95, 116, 371, 0, 0, 10);

-- --------------------------------------------------------

--
-- Table structure for table `implant_scs_std`
--

DROP TABLE IF EXISTS `implant_scs_std`;
CREATE TABLE IF NOT EXISTS `implant_scs_std` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) CHARACTER SET latin1 NOT NULL,
  `url` varchar(200) CHARACTER SET latin1 NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_scs_std`
--

INSERT INTO `implant_scs_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype SCS Standard-T1', 'images/hype_scs_T1.png', 202, 5.13, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 77, -73, 371, 0, 0, 1),
(2, 'Hype SCS Standard-T2', 'images/hype_scs_T2.png', 208, 5.28, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 78, -76, 371, 0, 0, 2),
(3, 'Hype SCS Standard-T3', 'images/hype_scs_T3.png', 215, 5.46, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 77.5, -79.5, 371, 0, 0, 3),
(4, 'Hype SCS Standard-T4', 'images/hype_scs_T4.png', 221, 5.61, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 78.5, -82.5, 371, 0, 0, 4),
(5, 'Hype SCS Standard-T5', 'images/hype_scs_T5.png', 228, 5.79, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 79, -86, 371, 0, 0, 5),
(6, 'Hype SCS Standard-T6', 'images/hype_scs_T6.png', 235, 5.97, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 79.5, -89.5, 371, 0, 0, 6),
(7, 'Hype SCS Standard-T7', 'images/hype_scs_T7.png', 242, 6.15, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 80, -93, 371, 0, 0, 7),
(8, 'Hype SCS Standard-T8', 'images/hype_scs_T8.png', 248, 6.3, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 81, -96, 371, 0, 0, 8),
(9, 'Hype SCS Standard-T9', 'images/hype_scs_T9.png', 255, 6.48, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 82.5, -99.5, 371, 0, 0, 9),
(10, 'Hype SCS Standard-T10', 'images/hype_scs_T10.png', 261, 6.63, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 83.5, -102.5, 371, 0, 0, 10),
(11, 'Hype SCS Standard-T11', 'images/hype_scs_T11.png', 265, 6.73, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, 84.5, -104.5, 371, 0, 0, 11),
(12, 'Hype SCS Standard-T1', 'images/hype_scs_T1_R.png', 202, 5.13, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -77, 73, 371, 0, 0, 1),
(13, 'Hype SCS Standard-T2', 'images/hype_scs_T2_R.png', 208, 5.28, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -78, 76, 371, 0, 0, 2),
(14, 'Hype SCS Standard-T3', 'images/hype_scs_T3_R.png', 215, 5.46, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -77.5, 81.5, 371, 0, 0, 3),
(15, 'Hype SCS Standard-T4', 'images/hype_scs_T4_R.png', 221, 5.61, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -78.5, 83.5, 371, 0, 0, 4),
(16, 'Hype SCS Standard-T5', 'images/hype_scs_T5_R.png', 228, 5.79, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -79, 87, 371, 0, 0, 5),
(17, 'Hype SCS Standard-T6', 'images/hype_scs_T6_R.png', 235, 5.97, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -79.5, 90.5, 371, 0, 0, 6),
(18, 'Hype SCS Standard-T7', 'images/hype_scs_T7_R.png', 242, 6.15, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -80, 94, 371, 0, 0, 7),
(19, 'Hype SCS Standard-T8', 'images/hype_scs_T8_R.png', 248, 6.3, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -81, 97, 371, 0, 0, 8),
(20, 'Hype SCS Standard-T9', 'images/hype_scs_T9_R.png', 255, 6.48, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -82.5, 100.5, 371, 0, 0, 9),
(21, 'Hype SCS Standard-T10', 'images/hype_scs_T10_R.png', 261, 6.63, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -83.5, 103.5, 371, 0, 0, 10),
(22, 'Hype SCS Standard-T11', 'images/hype_scs_T11_R.png', 265, 6.73, 800, 20.32, 0, 0, 0, 0, 0, 0, 0, 0, -84.5, 105.5, 371, 0, 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `implant_scv_coxa_vara`
--

DROP TABLE IF EXISTS `implant_scv_coxa_vara`;
CREATE TABLE IF NOT EXISTS `implant_scv_coxa_vara` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(200) CHARACTER SET latin1 NOT NULL,
  `url` varchar(200) CHARACTER SET latin1 NOT NULL,
  `widthPx` float NOT NULL,
  `widthCm` float NOT NULL,
  `heightPx` float NOT NULL,
  `heightCm` float NOT NULL,
  `axeFemurHautPxX` int(11) NOT NULL,
  `axeFemurHautPxY` int(11) NOT NULL,
  `axeFemurBasPxX` int(11) NOT NULL,
  `axeFemurBasPxY` int(11) NOT NULL,
  `axeTeteHancheHautPxX` int(11) NOT NULL,
  `axeTeteHancheHautPxY` int(11) NOT NULL,
  `axeTeteHancheBasPxX` int(11) NOT NULL,
  `axeTeteHancheBasPxY` int(11) NOT NULL,
  `distOffsetX` float NOT NULL,
  `PtMecaHautXPx` float NOT NULL,
  `PtMecaHautYPx` float NOT NULL,
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `taille` int(11) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `implant_scv_coxa_vara`
--

INSERT INTO `implant_scv_coxa_vara` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`, `taille`) VALUES
(1, 'Hype SCV Coxa vara-T2', 'images/hype_scv_T2.png', 221, 5.61, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, 84.5, -84.5, 346, 0, 0, 2),
(2, 'Hype SCV Coxa vara-T3', 'images/hype_scv_T3.png', 229, 5.82, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, 84.5, -88.5, 346, 0, 0, 3),
(3, 'Hype SCV Coxa vara-T4', 'images/hype_scv_T4.png', 234, 5.94, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, 85, -91, 346, 0, 0, 4),
(4, 'Hype SCV Coxa vara-T5', 'images/hype_scv_T5.png', 241, 6.12, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, 85.5, -94.5, 346, 0, 0, 5),
(5, 'Hype SCV Coxa vara-T6', 'images/hype_scv_T6.png', 247, 6.27, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, 85.5, -97.5, 346, 0, 0, 6),
(6, 'Hype SCV Coxa vara-T7', 'images/hype_scv_T7.png', 253, 6.43, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, 85.5, -100.5, 346, 0, 0, 7),
(7, 'Hype SCV Coxa vara-T8', 'images/hype_scv_T8.png', 258, 6.55, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, 86, -103, 346, 0, 0, 8),
(8, 'Hype SCV Coxa vara-T9', 'images/hype_scv_T9.png', 264, 6.71, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, 86, -106, 346, 0, 0, 9),
(9, 'Hype SCV Coxa vara-T2', 'images/hype_scv_T2_R.png', 221, 5.61, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, -84.5, 85.5, 346, 0, 0, 2),
(10, 'Hype SCV Coxa vara-T3', 'images/hype_scv_T3_R.png', 229, 5.82, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, -84.5, 89.5, 346, 0, 0, 3),
(11, 'Hype SCV Coxa vara-T4', 'images/hype_scv_T4_R.png', 234, 5.94, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, -85, 93, 346, 0, 0, 4),
(12, 'Hype SCV Coxa vara-T5', 'images/hype_scv_T5_R.png', 241, 6.12, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, -85.5, 94.5, 346, 0, 0, 5),
(13, 'Hype SCV Coxa vara-T6', 'images/hype_scv_T6_R.png', 247, 6.27, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, -85.5, 98.5, 346, 0, 0, 6),
(14, 'Hype SCV Coxa vara-T7', 'images/hype_scv_T7_R.png', 253, 6.43, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, -85.5, 101.5, 346, 0, 0, 7),
(15, 'Hype SCV Coxa vara-T8', 'images/hype_scv_T8_R.png', 258, 6.55, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, -86, 104, 346, 0, 0, 8),
(16, 'Hype SCV Coxa vara-T9', 'images/hype_scv_T9_R.png', 264, 6.71, 750, 19.05, 0, 0, 0, 0, 0, 0, 0, 0, -86, 107, 346, 0, 0, 9);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
