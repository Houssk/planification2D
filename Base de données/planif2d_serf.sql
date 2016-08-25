-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Jeu 25 Août 2016 à 08:43
-- Version du serveur :  5.7.9
-- Version de PHP :  5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `planif2d_serf`
--

-- --------------------------------------------------------

--
-- Structure de la table `cotyles`
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
-- Contenu de la table `cotyles`
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
-- Structure de la table `cotyle_coptos_th`
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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cotyle_coptos_th`
--

INSERT INTO `cotyle_coptos_th` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`) VALUES
(1, 'Novae COPTOS Th-45', 'images/Novae_T45.png', 1500, 1500, 12.7, 12.7, 0, 0),
(2, 'Novae COPTOS Th-47', 'images/Novae_T47.png', 1500, 1500, 12.7, 12.7, 0, 0),
(3, 'Novae COPTOS Th-49', 'images/Novae_T49.png', 1500, 1500, 12.7, 12.7, 0, 0),
(4, 'Novae COPTOS Th-51', 'images/Novae_T51.png', 1500, 1500, 12.7, 12.7, 0, 0),
(5, 'Novae COPTOS Th-53', 'images/Novae_T53.png', 1500, 1500, 12.7, 12.7, 0, 0),
(6, 'Novae COPTOS Th-55', 'images/Novae_T55.png', 1500, 1500, 12.7, 12.7, 0, 0),
(7, 'Novae COPTOS Th-57', 'images/Novae_T57.png', 1500, 1500, 12.7, 12.7, 0, 0),
(8, 'Novae COPTOS Th-59', 'images/Novae_T59.png', 1500, 1500, 12.7, 12.7, 0, 0),
(9, 'Novae COPTOS Th-61', 'images/Novae_T61.png', 1500, 1500, 12.7, 12.7, 0, 0),
(10, 'Novae COPTOS Th-63', 'images/Novae_T63.png', 1500, 1500, 12.7, 12.7, 0, 0),
(11, 'Novae COPTOS Th-65', 'images/Novae_T65.png', 1500, 1500, 12.7, 12.7, 0, 0),
(12, 'Novae COPTOS Th-45', 'images/Novae_T45_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(13, 'Novae COPTOS Th-47', 'images/Novae_T47_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(14, 'Novae COPTOS Th-49', 'images/Novae_T49_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(15, 'Novae COPTOS Th-51', 'images/Novae_T51_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(16, 'Novae COPTOS Th-53', 'images/Novae_T53_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(17, 'Novae COPTOS Th-55', 'images/Novae_T55_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(18, 'Novae COPTOS Th-57', 'images/Novae_T57_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(19, 'Novae COPTOS Th-59', 'images/Novae_T59_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(20, 'Novae COPTOS Th-61', 'images/Novae_T61_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(21, 'Novae COPTOS Th-63', 'images/Novae_T63_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(22, 'Novae COPTOS Th-65', 'images/Novae_T65_R.png', 1500, 1500, 12.7, 12.7, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `cotyle_hype`
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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cotyle_hype`
--

INSERT INTO `cotyle_hype` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`) VALUES
(1, 'Cup-49', 'images/Cup49.png', 1136, 915, 9.62, 7.75, 0, 0),
(2, 'Cup-51', 'images/Cup51.png', 1136, 915, 9.62, 7.75, 0, 0),
(3, 'Cup-53', 'images/Cup53.png', 1136, 915, 9.62, 7.75, 0, 0),
(4, 'Cup-55', 'images/Cup55.png', 1136, 915, 9.62, 7.75, 0, 0),
(5, 'Cup-57', 'images/Cup57.png', 1136, 915, 9.62, 7.75, 0, 0),
(6, 'Cup-59', 'images/Cup59.png', 1136, 915, 9.62, 7.75, 0, 0),
(7, 'Cup-61', 'images/Cup61.png', 1136, 915, 9.62, 7.75, 0, 0),
(8, 'Cup-63', 'images/Cup63.png', 1136, 915, 9.62, 7.75, 0, 0),
(9, 'Cup-49', 'images/Cup49_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(10, 'Cup-51', 'images/Cup51_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(11, 'Cup-53', 'images/Cup53_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(12, 'Cup-55', 'images/Cup55_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(13, 'Cup-57', 'images/Cup57_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(14, 'Cup-59', 'images/Cup59_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(15, 'Cup-61', 'images/Cup61_R.png', 1136, 915, 9.62, 7.75, 0, 0),
(16, 'Cup-63', 'images/Cup63_R.png', 1136, 915, 9.62, 7.75, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `cotyle_novae`
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
-- Contenu de la table `cotyle_novae`
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
-- Structure de la table `cotyle_novae_e_th`
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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cotyle_novae_e_th`
--

INSERT INTO `cotyle_novae_e_th` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`) VALUES
(1, 'Novae E Th-45', 'images/Novae_T45.png', 1500, 1500, 12.7, 12.7, 0, 0),
(2, 'Novae E Th-47', 'images/Novae_T47.png', 1500, 1500, 12.7, 12.7, 0, 0),
(3, 'Novae E Th-49', 'images/Novae_T49.png', 1500, 1500, 12.7, 12.7, 0, 0),
(4, 'Novae E Th-51', 'images/Novae_T51.png', 1500, 1500, 12.7, 12.7, 0, 0),
(5, 'Novae E Th-53', 'images/Novae_T53.png', 1500, 1500, 12.7, 12.7, 0, 0),
(6, 'Novae E Th-55', 'images/Novae_T55.png', 1500, 1500, 12.7, 12.7, 0, 0),
(7, 'Novae E Th-57', 'images/Novae_T57.png', 1500, 1500, 12.7, 12.7, 0, 0),
(8, 'Novae E Th-59', 'images/Novae_T59.png', 1500, 1500, 12.7, 12.7, 0, 0),
(9, 'Novae E Th-61', 'images/Novae_T61.png', 1500, 1500, 12.7, 12.7, 0, 0),
(10, 'Novae E Th-63', 'images/Novae_T63.png', 1500, 1500, 12.7, 12.7, 0, 0),
(11, 'Novae E Th-65', 'images/Novae_T65.png', 1500, 1500, 12.7, 12.7, 0, 0),
(12, 'Novae E Th-45', 'images/Novae_T45_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(13, 'Novae E Th-47', 'images/Novae_T47_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(14, 'Novae E Th-49', 'images/Novae_T49_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(15, 'Novae E Th-51', 'images/Novae_T51_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(16, 'Novae E Th-53', 'images/Novae_T53_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(17, 'Novae E Th-55', 'images/Novae_T55_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(18, 'Novae E Th-57', 'images/Novae_T57_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(19, 'Novae E Th-59', 'images/Novae_T59_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(20, 'Novae E Th-61', 'images/Novae_T61_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(21, 'Novae E Th-63', 'images/Novae_T63_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(22, 'Novae E Th-65', 'images/Novae_T65_R.png', 1500, 1500, 12.7, 12.7, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `cotyle_stick`
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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cotyle_stick`
--

INSERT INTO `cotyle_stick` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`) VALUES
(1, 'Novae STICK-45', 'images/Novae_T45.png', 1500, 1500, 12.7, 12.7, 0, 0),
(2, 'Novae STICK-47', 'images/Novae_T47.png', 1500, 1500, 12.7, 12.7, 0, 0),
(3, 'Novae STICK-49', 'images/Novae_T49.png', 1500, 1500, 12.7, 12.7, 0, 0),
(4, 'Novae STICK-51', 'images/Novae_T51.png', 1500, 1500, 12.7, 12.7, 0, 0),
(5, 'Novae STICK-53', 'images/Novae_T53.png', 1500, 1500, 12.7, 12.7, 0, 0),
(6, 'Novae STICK-55', 'images/Novae_T55.png', 1500, 1500, 12.7, 12.7, 0, 0),
(7, 'Novae STICK-57', 'images/Novae_T57.png', 1500, 1500, 12.7, 12.7, 0, 0),
(8, 'Novae STICK-59', 'images/Novae_T59.png', 1500, 1500, 12.7, 12.7, 0, 0),
(9, 'Novae STICK-61', 'images/Novae_T61.png', 1500, 1500, 12.7, 12.7, 0, 0),
(10, 'Novae STICK-63', 'images/Novae_T63.png', 1500, 1500, 12.7, 12.7, 0, 0),
(11, 'Novae STICK-65', 'images/Novae_T65.png', 1500, 1500, 12.7, 12.7, 0, 0),
(12, 'Novae STICK-45', 'images/Novae_T45_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(13, 'Novae STICK-47', 'images/Novae_T47_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(14, 'Novae STICK-49', 'images/Novae_T49_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(15, 'Novae STICK-51', 'images/Novae_T51_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(16, 'Novae STICK-53', 'images/Novae_T53_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(17, 'Novae STICK-55', 'images/Novae_T55_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(18, 'Novae STICK-57', 'images/Novae_T57_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(19, 'Novae STICK-59', 'images/Novae_T59_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(20, 'Novae STICK-61', 'images/Novae_T61_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(21, 'Novae STICK-63', 'images/Novae_T63_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(22, 'Novae STICK-65', 'images/Novae_T65_R.png', 1500, 1500, 12.7, 12.7, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `cotyle_sunfit_th`
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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cotyle_sunfit_th`
--

INSERT INTO `cotyle_sunfit_th` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`) VALUES
(1, 'Novae SUNFIT Th-43', 'images/Novae_T43.png', 1500, 1500, 12.7, 12.7, 0, 0),
(2, 'Novae SUNFIT Th-45', 'images/Novae_T45.png', 1500, 1500, 12.7, 12.7, 0, 0),
(3, 'Novae SUNFIT Th-47', 'images/Novae_T47.png', 1500, 1500, 12.7, 12.7, 0, 0),
(4, 'Novae SUNFIT Th-49', 'images/Novae_T49.png', 1500, 1500, 12.7, 12.7, 0, 0),
(5, 'Novae SUNFIT Th-51', 'images/Novae_T51.png', 1500, 1500, 12.7, 12.7, 0, 0),
(6, 'Novae SUNFIT Th-53', 'images/Novae_T53.png', 1500, 1500, 12.7, 12.7, 0, 0),
(7, 'Novae SUNFIT Th-55', 'images/Novae_T55.png', 1500, 1500, 12.7, 12.7, 0, 0),
(8, 'Novae SUNFIT Th-57', 'images/Novae_T57.png', 1500, 1500, 12.7, 12.7, 0, 0),
(9, 'Novae SUNFIT Th-59', 'images/Novae_T59.png', 1500, 1500, 12.7, 12.7, 0, 0),
(10, 'Novae SUNFIT Th-61', 'images/Novae_T61.png', 1500, 1500, 12.7, 12.7, 0, 0),
(11, 'Novae SUNFIT Th-63', 'images/Novae_T63.png', 1500, 1500, 12.7, 12.7, 0, 0),
(12, 'Novae SUNFIT Th-65', 'images/Novae_T65.png', 1500, 1500, 12.7, 12.7, 0, 0),
(13, 'Novae SUNFIT Th-43', 'images/Novae_T43_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(14, 'Novae SUNFIT Th-45', 'images/Novae_T45_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(15, 'Novae SUNFIT Th-47', 'images/Novae_T47_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(16, 'Novae SUNFIT Th-49', 'images/Novae_T49_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(17, 'Novae SUNFIT Th-51', 'images/Novae_T51_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(18, 'Novae SUNFIT Th-53', 'images/Novae_T53_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(19, 'Novae SUNFIT Th-55', 'images/Novae_T55_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(20, 'Novae SUNFIT Th-57', 'images/Novae_T57_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(21, 'Novae SUNFIT Th-59', 'images/Novae_T59_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(22, 'Novae SUNFIT Th-61', 'images/Novae_T61_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(23, 'Novae SUNFIT Th-63', 'images/Novae_T63_R.png', 1500, 1500, 12.7, 12.7, 0, 0),
(24, 'Novae SUNFIT Th-65', 'images/Novae_T65_R.png', 1500, 1500, 12.7, 12.7, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant`
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
-- Contenu de la table `implant`
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
-- Structure de la table `implant_acl_cim_lat`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_acl_cim_lat`
--

INSERT INTO `implant_acl_cim_lat` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype ACL A cimenter Latéralisée-T2', 'images/hype_acl_T2.png', 683, 5.78, 1798, 15.22, 0, 0, 0, 0, 0, 0, 0, 0, 274.5, -256.5, 812, 0, 0),
(2, 'Hype ACL A cimenter Latéralisée-T3', 'images/hype_acl_T3.png', 706, 5.98, 1921, 16.26, 0, 0, 0, 0, 0, 0, 0, 0, 276, -268, 873.5, 0, 0),
(3, 'Hype ACL A cimenter Latéralisée-T4', 'images/hype_acl_T4.png', 725, 6.14, 1976, 16.73, 0, 0, 0, 0, 0, 0, 0, 0, 277.5, -276.5, 900, 0, 0),
(4, 'Hype ACL A cimenter Latéralisée-T5', 'images/hype_acl_T5.png', 744, 6.3, 2038, 17.26, 0, 0, 0, 0, 0, 0, 0, 0, 280, -287, 932, 0, 0),
(5, 'Hype ACL A cimenter Latéralisée-T6', 'images/hype_acl_T6.png', 764, 6.47, 2085, 17.65, 0, 0, 0, 0, 0, 0, 0, 0, 283, -297, 957.5, 0, 0),
(6, 'Hype ACL A cimenter Latéralisée-T7', 'images/hype_acl_T7.png', 782, 6.62, 2138, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, 285, -305, 982, 0, 0),
(7, 'Hype ACL A cimenter Latéralisée-T8', 'images/hype_acl_T8.png', 802, 6.79, 2203, 18.65, 0, 0, 0, 0, 0, 0, 0, 0, 287, -315, 1014.5, 0, 0),
(8, 'Hype ACL A cimenter Latéralisée-T9', 'images/hype_acl_T9.png', 822, 6.26, 2274, 19.25, 0, 0, 0, 0, 0, 0, 0, 0, 289, -323, 1049, 0, 0),
(9, 'Hype ACL A cimenter Latéralisée-T2', 'images/hype_acl_T2_R.png', 683, 5.78, 1798, 15.22, 0, 0, 0, 0, 0, 0, 0, 0, -274.5, 256.5, 812, 0, 0),
(10, 'Hype ACL A cimenter Latéralisée-T3', 'images/hype_acl_T3_R.png', 706, 5.98, 1921, 16.26, 0, 0, 0, 0, 0, 0, 0, 0, -276, 268, 873.5, 0, 0),
(11, 'Hype ACL A cimenter Latéralisée-T4', 'images/hype_acl_T4_R.png', 725, 6.14, 1976, 16.73, 0, 0, 0, 0, 0, 0, 0, 0, -277.5, 276.5, 900, 0, 0),
(12, 'Hype ACL A cimenter Latéralisée-T5', 'images/hype_acl_T5_R.png', 744, 6.3, 2038, 17.26, 0, 0, 0, 0, 0, 0, 0, 0, -280, 287, 932, 0, 0),
(13, 'Hype ACL A cimenter Latéralisée-T6', 'images/hype_acl_T6_R.png', 764, 6.47, 2085, 17.65, 0, 0, 0, 0, 0, 0, 0, 0, -283, 297, 957.5, 0, 0),
(14, 'Hype ACL A cimenter Latéralisée-T7', 'images/hype_acl_T7_R.png', 782, 6.62, 2138, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, -285, 305, 982, 0, 0),
(15, 'Hype ACL A cimenter Latéralisée-T8', 'images/hype_acl_T8_R.png', 802, 6.79, 2203, 18.65, 0, 0, 0, 0, 0, 0, 0, 0, -287, 315, 1014.5, 0, 0),
(16, 'Hype ACL A cimenter Latéralisée-T9', 'images/hype_acl_T9_R.png', 822, 6.26, 2274, 19.25, 0, 0, 0, 0, 0, 0, 0, 0, -289, 323, 1049, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_acs_cim_std`
--

DROP TABLE IF EXISTS `implant_acs_cim_std`;
CREATE TABLE IF NOT EXISTS `implant_acs_cim_std` (
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_acs_cim_std`
--

INSERT INTO `implant_acs_cim_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype ACS A cimenter Standard-T1', 'images/hype_acs_T1.png', 597, 5.05, 1727, 14.62, 0, 0, 0, 0, 0, 0, 0, 0, 235.5, -212.5, 776.5, 0, 0),
(2, 'Hype ACS A cimenter Standard-T2', 'images/hype_acs_T2.png', 613, 5.19, 1790, 15.16, 0, 0, 0, 0, 0, 0, 0, 0, 239.5, -221.5, 809, 0, 0),
(3, 'Hype ACS A cimenter Standard-T3', 'images/hype_acs_T3.png', 634, 5.37, 1907, 16.15, 0, 0, 0, 0, 0, 0, 0, 0, 240, -232, 866.5, 0, 0),
(4, 'Hype ACS A cimenter Standard-T4', 'images/hype_acs_T4.png', 654, 5.54, 1968, 16.66, 0, 0, 0, 0, 0, 0, 0, 0, 242, -242, 897, 0, 0),
(5, 'Hype ACS A cimenter Standard-T5', 'images/hype_acs_T5.png', 673, 5.7, 2029, 17.18, 0, 0, 0, 0, 0, 0, 0, 0, 244.5, -251.5, 927.5, 0, 0),
(6, 'Hype ACS A cimenter Standard-T6', 'images/hype_acs_T6.png', 692, 5.86, 2090, 17.7, 0, 0, 0, 0, 0, 0, 0, 0, 247, -261, 958, 0, 0),
(7, 'Hype ACS A cimenter Standard-T7', 'images/hype_acs_T7.png', 711, 6.02, 2151, 18.21, 0, 0, 0, 0, 0, 0, 0, 0, 249.5, -270.5, 988.5, 0, 0),
(8, 'Hype ACS A cimenter Standard-T8', 'images/hype_acs_T8.png', 731, 6.19, 2213, 18.74, 0, 0, 0, 0, 0, 0, 0, 0, 250.5, -280.5, 1019.5, 0, 0),
(9, 'Hype ACS A cimenter Standard-T9', 'images/hype_acs_T9.png', 749, 6.34, 2271, 19.23, 0, 0, 0, 0, 0, 0, 0, 0, 253.5, -289.5, 1048.5, 0, 0),
(10, 'Hype ACS A cimenter Standard-T10', 'images/hype_acs_T10.png', 767, 6.49, 2337, 19.79, 0, 0, 0, 0, 0, 0, 0, 0, 256.5, -298.5, 1081.5, 0, 0),
(11, 'Hype ACS A cimenter Standard-T11', 'images/hype_acs_T11.png', 779, 6.6, 2403, 20.35, 0, 0, 0, 0, 0, 0, 0, 0, 262.5, -304.5, 1114.5, 0, 0),
(12, 'Hype ACS A cimenter Standard-T1', 'images/hype_acs_T1_R.png', 597, 5.05, 1727, 14.62, 0, 0, 0, 0, 0, 0, 0, 0, -235.5, 212.5, 776.5, 0, 0),
(13, 'Hype ACS A cimenter Standard-T2', 'images/hype_acs_T2_R.png', 613, 5.19, 1790, 15.16, 0, 0, 0, 0, 0, 0, 0, 0, -239.5, 221.5, 809, 0, 0),
(14, 'Hype ACS A cimenter Standard-T3', 'images/hype_acs_T3_R.png', 634, 5.37, 1907, 16.15, 0, 0, 0, 0, 0, 0, 0, 0, -240, 232, 866.5, 0, 0),
(15, 'Hype ACS A cimenter Standard-T4', 'images/hype_acs_T4_R.png', 654, 5.54, 1968, 16.66, 0, 0, 0, 0, 0, 0, 0, 0, -242, 242, 897, 0, 0),
(16, 'Hype ACS A cimenter Standard-T5', 'images/hype_acs_T5_R.png', 673, 5.7, 2029, 17.18, 0, 0, 0, 0, 0, 0, 0, 0, -244.5, 251.5, 927.5, 0, 0),
(17, 'Hype ACS A cimenter Standard-T6', 'images/hype_acs_T6_R.png', 692, 5.86, 2090, 17.7, 0, 0, 0, 0, 0, 0, 0, 0, -247, 261, 958, 0, 0),
(18, 'Hype ACS A cimenter Standard-T7', 'images/hype_acs_T7_R.png', 711, 6.02, 2151, 18.21, 0, 0, 0, 0, 0, 0, 0, 0, -249.5, 270.5, 988.5, 0, 0),
(19, 'Hype ACS A cimenter Standard-T8', 'images/hype_acs_T8_R.png', 731, 6.19, 2213, 18.74, 0, 0, 0, 0, 0, 0, 0, 0, -250.5, 280.5, 1019.5, 0, 0),
(20, 'Hype ACS A cimenter Standard-T9', 'images/hype_acs_T9_R.png', 749, 6.34, 2271, 19.23, 0, 0, 0, 0, 0, 0, 0, 0, -253.5, 289.5, 1048.5, 0, 0),
(21, 'Hype ACS A cimenter Standard-T10', 'images/hype_acs_T10_R.png', 767, 6.49, 2337, 19.79, 0, 0, 0, 0, 0, 0, 0, 0, -256.5, 298.5, 1081.5, 0, 0),
(22, 'Hype ACS A cimenter Standard-T11', 'images/hype_acs_T11_R.png', 779, 6.6, 2403, 20.35, 0, 0, 0, 0, 0, 0, 0, 0, -262.5, 304.5, 1114.5, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_cim_offset`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `implant_cim_std_appui`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `implant_ha_offset`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_ha_offset`
--

INSERT INTO `implant_ha_offset` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Libra HA Offset-T2', 'images/libra_ha_offset_T2.png', 704, 5.96, 2053, 17.38, 0, 0, 0, 0, 0, 0, 0, 0, 262, -269, 931.5, 0, 0),
(2, 'Libra HA Offset-T3', 'images/libra_ha_offset_T3.png', 723, 6.12, 2143, 18.14, 0, 0, 0, 0, 0, 0, 0, 0, 264.5, -278.5, 984.5, 0, 0),
(3, 'Libra HA Offset-T4', 'images/libra_ha_offset_T4.png', 743, 6.29, 2180, 18.46, 0, 0, 0, 0, 0, 0, 0, 0, 265.5, -288.5, 999, 0, 0),
(4, 'Libra HA Offset-T5', 'images/libra_ha_offset_T5.png', 765, 6.48, 2723, 23.05, 0, 0, 0, 0, 0, 0, 0, 0, 267.5, -299.5, 876.5, 0, 0),
(5, 'Libra HA Offset-T6', 'images/libra_ha_offset_T6.png', 782, 6.62, 2723, 23.05, 0, 0, 0, 0, 0, 0, 0, 0, 271, -307, 881.5, 0, 0),
(6, 'Libra HA Offset-T7', 'images/libra_ha_offset_T7.png', 806, 6.8, 2345, 19.85, 0, 0, 0, 0, 0, 0, 0, 0, 270, -320, 1085.5, 0, 0),
(7, 'Libra HA Offset-T8', 'images/libra_ha_offset_T8.png', 821, 6.95, 2529, 21.41, 0, 0, 0, 0, 0, 0, 0, 0, 274.5, -327.5, 1003.5, 0, 0),
(8, 'Libra HA Offset-T9', 'images/libra_ha_offset_T9.png', 842, 7.13, 2530, 21.42, 0, 0, 0, 0, 0, 0, 0, 0, 276, -338, 1065, 0, 0),
(9, 'Libra HA Offset-T2', 'images/libra_ha_offset_T2_R.png', 704, 5.96, 2053, 17.38, 0, 0, 0, 0, 0, 0, 0, 0, -262, 269, 931.5, 0, 0),
(10, 'Libra HA Offset-T3', 'images/libra_ha_offset_T3_R.png', 723, 6.12, 2143, 18.14, 0, 0, 0, 0, 0, 0, 0, 0, -264.5, 278.5, 984.5, 0, 0),
(11, 'Libra HA Offset-T4', 'images/libra_ha_offset_T4_R.png', 743, 6.29, 2180, 18.46, 0, 0, 0, 0, 0, 0, 0, 0, -265.5, 288.5, 999, 0, 0),
(12, 'Libra HA Offset-T5', 'images/libra_ha_offset_T5_R.png', 765, 6.48, 2723, 23.05, 0, 0, 0, 0, 0, 0, 0, 0, -267.5, 299.5, 876.5, 0, 0),
(13, 'Libra HA Offset-T6', 'images/libra_ha_offset_T6_R.png', 782, 6.62, 2723, 23.05, 0, 0, 0, 0, 0, 0, 0, 0, -271, 307, 881.5, 0, 0),
(14, 'Libra HA Offset-T7', 'images/libra_ha_offset_T7_R.png', 806, 6.8, 2345, 19.85, 0, 0, 0, 0, 0, 0, 0, 0, -270, 320, 1085.5, 0, 0),
(15, 'Libra HA Offset-T8', 'images/libra_ha_offset_T8_R.png', 821, 6.95, 2529, 21.41, 0, 0, 0, 0, 0, 0, 0, 0, -274.5, 327.5, 1003.5, 0, 0),
(16, 'Libra HA Offset-T9', 'images/libra_ha_offset_T9_R.png', 842, 7.13, 2530, 21.42, 0, 0, 0, 0, 0, 0, 0, 0, -276, 338, 1065, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_ha_std`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_ha_std`
--

INSERT INTO `implant_ha_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Libra HA Std-T1', 'images/libra_ha_std_T1.png', 615, 5.21, 2190, 18.54, 0, 0, 0, 0, 0, 0, 0, 0, 224.5, -224.5, 943, 0, 0),
(2, 'Libra HA Std-T2', 'images/libra_ha_std_T2.png', 633, 5.36, 2349, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, 226.5, -233.5, 1027.5, 0, 0),
(3, 'Libra HA Std-T3', 'images/libra_ha_std_T3.png', 652, 5.52, 2350, 19.9, 0, 0, 0, 0, 0, 0, 0, 0, 230, -243, 1030, 0, 0),
(4, 'Libra HA Std-T4', 'images/libra_ha_std_T4.png', 673, 5.7, 2350, 19.9, 0, 0, 0, 0, 0, 0, 0, 0, 230.5, -253.5, 1032, 0, 0),
(5, 'Libra HA Std-T5', 'images/libra_ha_std_T5.png', 694, 5.88, 2349, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, 232, -264, 1034.5, 0, 0),
(6, 'Libra HA Std-T6', 'images/libra_ha_std_T6.png', 712, 5.88, 2349, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, 235, -272, 1039.5, 0, 0),
(7, 'Libra HA Std-T7', 'images/libra_ha_std_T7.png', 732, 6.2, 2350, 19.9, 0, 0, 0, 0, 0, 0, 0, 0, 237, -283, 1042, 0, 0),
(8, 'Libra HA Std-T8', 'images/libra_ha_std_T8.png', 750, 6.35, 2349, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, 240, -292, 1051.5, 0, 0),
(9, 'Libra HA Std-T9', 'images/libra_ha_std_T9.png', 771, 6.53, 2373, 20.09, 0, 0, 0, 0, 0, 0, 0, 0, 240.5, -301.5, 1100.5, 0, 0),
(10, 'Libra HA Std-T10', 'images/libra_ha_std_T10.png', 789, 6.68, 2431, 20.58, 0, 0, 0, 0, 0, 0, 0, 0, 243.5, -311.5, 1129.5, 0, 0),
(11, 'Libra HA Std-T1', 'images/libra_ha_std_T1_R.png', 615, 5.21, 2190, 18.54, 0, 0, 0, 0, 0, 0, 0, 0, -224.5, 224.5, 943, 0, 0),
(12, 'Libra HA Std-T2', 'images/libra_ha_std_T2_R.png', 633, 5.36, 2349, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, -226.5, 233.5, 1027.5, 0, 0),
(13, 'Libra HA Std-T3', 'images/libra_ha_std_T3_R.png', 652, 5.52, 2350, 19.9, 0, 0, 0, 0, 0, 0, 0, 0, -230, 243, 1030, 0, 0),
(14, 'Libra HA Std-T4', 'images/libra_ha_std_T4_R.png', 673, 5.7, 2350, 19.9, 0, 0, 0, 0, 0, 0, 0, 0, -230.5, 253.5, 1032, 0, 0),
(15, 'Libra HA Std-T5', 'images/libra_ha_std_T5_R.png', 694, 5.88, 2349, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, -232, 264, 1034.5, 0, 0),
(16, 'Libra HA Std-T6', 'images/libra_ha_std_T6_R.png', 712, 5.88, 2349, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, -235, 272, 1039.5, 0, 0),
(17, 'Libra HA Std-T7', 'images/libra_ha_std_T7_R.png', 732, 6.2, 2350, 19.9, 0, 0, 0, 0, 0, 0, 0, 0, -237, 283, 1042, 0, 0),
(18, 'Libra HA Std-T8', 'images/libra_ha_std_T8_R.png', 750, 6.35, 2349, 19.89, 0, 0, 0, 0, 0, 0, 0, 0, -240, 292, 1051.5, 0, 0),
(19, 'Libra HA Std-T9', 'images/libra_ha_std_T9_R.png', 771, 6.53, 2373, 20.09, 0, 0, 0, 0, 0, 0, 0, 0, -240.5, 301.5, 1100.5, 0, 0),
(20, 'Libra HA Std-T10', 'images/libra_ha_std_T10_R.png', 789, 6.68, 2431, 20.58, 0, 0, 0, 0, 0, 0, 0, 0, -243.5, 311.5, 1129.5, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_ha_std_appui`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `implant_hype`
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
-- Contenu de la table `implant_hype`
--

INSERT INTO `implant_hype` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype-T2', 'images/HypeT2.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, 276, -256, 813, 135, 0),
(2, 'Hype-T3', 'images/HypeT3.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, 276.5, -267.5, 873.5, 135, 0),
(3, 'Hype-T4', 'images/HypeT4.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, 278.5, -275.5, 902, 135, 0),
(4, 'Hype-T5', 'images/HypeT5.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, 282.5, -285.5, 933, 135, 0),
(5, 'Hype-T6', 'images/HypeT6.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, 283, -293, 957.5, 135, 0),
(6, 'Hype-T7', 'images/HypeT7.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, 286, -304, 981.5, 135, 0),
(7, 'Hype-T8', 'images/HypeT8.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, 287.5, -314.5, 1014.5, 135, 0),
(8, 'Hype-T9', 'images/HypeT9.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, 289.5, -323.5, 1049.5, 135, 0),
(9, 'Hype-T2', 'images/HypeT2_R.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, -276, 256, 813, 135, 0),
(10, 'Hype-T3', 'images/HypeT3_R.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, -276.5, 267.5, 873.5, 135, 0),
(11, 'Hype-T4', 'images/HypeT4_R.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, -278.5, 275.5, 902, 135, 0),
(12, 'Hype-T5', 'images/HypeT5_R.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, -282.5, 285.5, 933, 135, 0),
(13, 'Hype-T6', 'images/HypeT6_R.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, -283, 293, 957.5, 135, 0),
(14, 'Hype-T7', 'images/HypeT7_R.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, -286, 304, 981.5, 135, 0),
(15, 'Hype-T8', 'images/HypeT8_R.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, -287.5, 314.5, 1014.5, 135, 0),
(16, 'Hype-T9', 'images/HypeT9_R.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, -289.5, 323.5, 1049.5, 135, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_libra`
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
-- Contenu de la table `implant_libra`
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
-- Structure de la table `implant_scc_mini_std`
--

DROP TABLE IF EXISTS `implant_scc_mini_std`;
CREATE TABLE IF NOT EXISTS `implant_scc_mini_std` (
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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_scc_mini_std`
--

INSERT INTO `implant_scc_mini_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype SCC MINI Standard-T2', 'images/hype_scc_mini_T2.png', 625, 5.29, 1493, 12.64, 0, 0, 0, 0, 0, 0, 0, 0, 234.5, -226.5, 659.5, 0, 0),
(2, 'Hype SCC MINI Standard-T3', 'images/hype_scc_mini_T3.png', 643, 5.44, 1587, 13.44, 0, 0, 0, 0, 0, 0, 0, 0, 232.5, -235.5, 707.5, 0, 0),
(3, 'Hype SCC MINI Standard-T4', 'images/hype_scc_mini_T4.png', 668, 5.66, 1616, 13.68, 0, 0, 0, 0, 0, 0, 0, 0, 236, -248, 720, 0, 0),
(4, 'Hype SCC MINI Standard-T5', 'images/hype_scc_mini_T5.png', 675, 5.72, 1673, 14.16, 0, 0, 0, 0, 0, 0, 0, 0, 231.5, -265.5, 760.5, 0, 0),
(5, 'Hype SCC MINI Standard-T6', 'images/hype_scc_mini_T6.png', 705, 5.97, 1760, 14.9, 0, 0, 0, 0, 0, 0, 0, 0, 238.5, -266.5, 794, 0, 0),
(6, 'Hype SCC MINI Standard-T7', 'images/hype_scc_mini_T7.png', 727, 6.16, 1790, 15.16, 0, 0, 0, 0, 0, 0, 0, 0, 241.5, -277.5, 807, 0, 0),
(7, 'Hype SCC MINI Standard-T2', 'images/hype_scc_mini_T2_R.png', 625, 5.29, 1493, 12.64, 0, 0, 0, 0, 0, 0, 0, 0, -234.5, 226.5, 659.5, 0, 0),
(8, 'Hype SCC MINI Standard-T3', 'images/hype_scc_mini_T3_R.png', 643, 5.44, 1587, 13.44, 0, 0, 0, 0, 0, 0, 0, 0, -232.5, 235.5, 707.5, 0, 0),
(9, 'Hype SCC MINI Standard-T4', 'images/hype_scc_mini_T4_R.png', 668, 5.66, 1616, 13.68, 0, 0, 0, 0, 0, 0, 0, 0, -236, 248, 720, 0, 0),
(10, 'Hype SCC MINI Standard-T5', 'images/hype_scc_mini_T5_R.png', 675, 5.72, 1673, 14.16, 0, 0, 0, 0, 0, 0, 0, 0, -231.5, 265.5, 760.5, 0, 0),
(11, 'Hype SCC MINI Standard-T6', 'images/hype_scc_mini_T6_R.png', 705, 5.97, 1760, 14.9, 0, 0, 0, 0, 0, 0, 0, 0, -238.5, 266.5, 794, 0, 0),
(12, 'Hype SCC MINI Standard-T7', 'images/hype_scc_mini_T7_R.png', 727, 6.16, 1790, 15.16, 0, 0, 0, 0, 0, 0, 0, 0, -241.5, 277.5, 807, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_scc_std_col`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_scc_std_col`
--

INSERT INTO `implant_scc_std_col` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype SCC Standard à colerette-T1', 'images/hype_scc_T1.png', 608, 5.17, 1736, 14.7, 0, 0, 0, 0, 0, 0, 0, 0, 230, -218, 780, 0, 0),
(2, 'Hype SCC Standard à colerette-T2', 'images/hype_scc_T2.png', 625, 5.29, 1799, 15.23, 0, 0, 0, 0, 0, 0, 0, 0, 233.5, -226.5, 812.5, 0, 0),
(3, 'Hype SCC Standard à colerette-T3', 'images/hype_scc_T3.png', 648, 5.49, 1916, 16.22, 0, 0, 0, 0, 0, 0, 0, 0, 234, -239, 871, 0, 0),
(4, 'Hype SCC Standard à colerette-T4', 'images/hype_scc_T4.png', 668, 5.66, 1976, 16.73, 0, 0, 0, 0, 0, 0, 0, 0, 236, -247, 901, 0, 0),
(5, 'Hype SCC Standard à colerette-T5', 'images/hype_scc_T5.png', 685, 5.8, 2037, 17.25, 0, 0, 0, 0, 0, 0, 0, 0, 237.5, -258.5, 932.5, 0, 0),
(6, 'Hype SCC Standard à colerette-T6', 'images/hype_scc_T6.png', 708, 5.99, 2098, 17.76, 0, 0, 0, 0, 0, 0, 0, 0, 239, -268, 962, 0, 0),
(7, 'Hype SCC Standard à colerette-T7', 'images/hype_scc_T7.png', 727, 6.16, 2159, 18.26, 0, 0, 0, 0, 0, 0, 0, 0, 241.5, -277.5, 993.5, 0, 0),
(8, 'Hype SCC Standard à colerette-T8', 'images/hype_scc_T8.png', 748, 6.33, 2220, 18.8, 0, 0, 0, 0, 0, 0, 0, 0, 243, -289, 1024, 0, 0),
(9, 'Hype SCC Standard à colerette-T9', 'images/hype_scc_T9.png', 768, 6.5, 2281, 19.31, 0, 0, 0, 0, 0, 0, 0, 0, 245, -299, 1054.5, 0, 0),
(10, 'Hype SCC Standard à colerette-T10', 'images/hype_scc_T10.png', 784, 6.64, 2344, 19.85, 0, 0, 0, 0, 0, 0, 0, 0, 248, -307, 1084, 0, 0),
(11, 'Hype SCC Standard à colerette-T11', 'images/hype_scc_T11.png', 798, 6.76, 2410, 20.4, 0, 0, 0, 0, 0, 0, 0, 0, 253, -314, 1118, 0, 0),
(12, 'Hype SCC Standard à colerette-T1', 'images/hype_scc_T1_R.png', 608, 5.17, 1736, 14.7, 0, 0, 0, 0, 0, 0, 0, 0, -230, 218, 780, 0, 0),
(13, 'Hype SCC Standard à colerette-T2', 'images/hype_scc_T2_R.png', 625, 5.29, 1799, 15.23, 0, 0, 0, 0, 0, 0, 0, 0, -233.5, 226.5, 812.5, 0, 0),
(14, 'Hype SCC Standard à colerette-T3', 'images/hype_scc_T3_R.png', 648, 5.49, 1916, 16.22, 0, 0, 0, 0, 0, 0, 0, 0, -234, 239, 871, 0, 0),
(15, 'Hype SCC Standard à colerette-T4', 'images/hype_scc_T4_R.png', 668, 5.66, 1976, 16.73, 0, 0, 0, 0, 0, 0, 0, 0, -236, 247, 901, 0, 0),
(16, 'Hype SCC Standard à colerette-T5', 'images/hype_scc_T5_R.png', 685, 5.8, 2037, 17.25, 0, 0, 0, 0, 0, 0, 0, 0, -237.5, 258.5, 932.5, 0, 0),
(17, 'Hype SCC Standard à colerette-T6', 'images/hype_scc_T6_R.png', 708, 5.99, 2098, 17.76, 0, 0, 0, 0, 0, 0, 0, 0, -239, 268, 962, 0, 0),
(18, 'Hype SCC Standard à colerette-T7', 'images/hype_scc_T7_R.png', 727, 6.16, 2159, 18.26, 0, 0, 0, 0, 0, 0, 0, 0, -241.5, 277.5, 993.5, 0, 0),
(19, 'Hype SCC Standard à colerette-T8', 'images/hype_scc_T8_R.png', 748, 6.33, 2220, 18.8, 0, 0, 0, 0, 0, 0, 0, 0, -243, 289, 1024, 0, 0),
(20, 'Hype SCC Standard à colerette-T9', 'images/hype_scc_T9_R.png', 768, 6.5, 2281, 19.31, 0, 0, 0, 0, 0, 0, 0, 0, -245, 299, 1054.5, 0, 0),
(21, 'Hype SCC Standard à colerette-T10', 'images/hype_scc_T10_R.png', 784, 6.64, 2344, 19.85, 0, 0, 0, 0, 0, 0, 0, 0, -248, 307, 1084, 0, 0),
(22, 'Hype SCC Standard à colerette-T11', 'images/hype_scc_T11_R.png', 798, 6.76, 2410, 20.4, 0, 0, 0, 0, 0, 0, 0, 0, -253, 314, 1118, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_scho_high_offset`
--

DROP TABLE IF EXISTS `implant_scho_high_offset`;
CREATE TABLE IF NOT EXISTS `implant_scho_high_offset` (
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_scho_high_offset`
--

INSERT INTO `implant_scho_high_offset` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype SCHO High Offset-T3', 'images/hype_scho_T3.png\r\n', 709, 6, 2052, 17.37, 0, 0, 0, 0, 0, 0, 0, 0, 265.5, -269.5, 940, 0, 0),
(2, 'Hype SCHO High Offset-T4', 'images/hype_scho_T4.png\r\n', 730, 6.18, 2110, 17.86, 0, 0, 0, 0, 0, 0, 0, 0, 267, -279, 969, 0, 0),
(3, 'Hype SCHO High Offset-T5', 'images/hype_scho_T5.png\r\n', 747, 6.32, 2087, 17.67, 0, 0, 0, 0, 0, 0, 0, 0, 267.5, -289.5, 958.5, 0, 0),
(4, 'Hype SCHO High Offset-T6', 'images/hype_scho_T6.png\r\n', 771, 6.53, 2232, 18.9, 0, 0, 0, 0, 0, 0, 0, 0, 270.5, -299.5, 1028, 0, 0),
(5, 'Hype SCHO High Offset-T7', 'images/hype_scho_T7.png\r\n', 791, 6.7, 2294, 19.42, 0, 0, 0, 0, 0, 0, 0, 0, 272.5, -309.5, 1061, 0, 0),
(6, 'Hype SCHO High Offset-T8', 'images/hype_scho_T8.png\r\n', 811, 6.87, 2354, 19.93, 0, 0, 0, 0, 0, 0, 0, 0, 274.5, -319.5, 1092, 0, 0),
(7, 'Hype SCHO High Offset-T9', 'images/hype_scho_T9.png\r\n', 831, 7.04, 2415, 20.45, 0, 0, 0, 0, 0, 0, 0, 0, 276.5, -329.5, 1119.5, 0, 0),
(8, 'Hype SCHO High Offset-T10', 'images/hype_scho_T10.png\r\n', 848, 7.04, 2479, 20.99, 0, 0, 0, 0, 0, 0, 0, 0, 280, -338.5, 1151.5, 0, 0),
(9, 'Hype SCHO High Offset-T11', 'images/hype_scho_T11.png\r\n', 851, 7.21, 2536, 21.47, 0, 0, 0, 0, 0, 0, 0, 0, 279.5, -349.5, 1189, 0, 0),
(10, 'Hype SCHO High Offset-T3', 'images/hype_scho_T3_R.png\r\n', 709, 6, 2052, 17.37, 0, 0, 0, 0, 0, 0, 0, 0, -265.5, 269.5, 940, 0, 0),
(11, 'Hype SCHO High Offset-T4', 'images/hype_scho_T4_R.png\r\n', 730, 6.18, 2110, 17.86, 0, 0, 0, 0, 0, 0, 0, 0, -267, 279, 969, 0, 0),
(12, 'Hype SCHO High Offset-T5', 'images/hype_scho_T5_R.png\r\n', 747, 6.32, 2087, 17.67, 0, 0, 0, 0, 0, 0, 0, 0, -267.5, 289.5, 958.5, 0, 0),
(13, 'Hype SCHO High Offset-T6', 'images/hype_scho_T6_R.png\r\n', 771, 6.53, 2232, 18.9, 0, 0, 0, 0, 0, 0, 0, 0, -270.5, 299.5, 1028, 0, 0),
(14, 'Hype SCHO High Offset-T7', 'images/hype_scho_T7_R.png\r\n', 791, 6.7, 2294, 19.42, 0, 0, 0, 0, 0, 0, 0, 0, -272.5, 309.5, 1061, 0, 0),
(15, 'Hype SCHO High Offset-T8', 'images/hype_scho_T8_R.png\r\n', 811, 6.87, 2354, 19.93, 0, 0, 0, 0, 0, 0, 0, 0, -274.5, 319.5, 1092, 0, 0),
(16, 'Hype SCHO High Offset-T9', 'images/hype_scho_T9_R.png\r\n', 831, 7.04, 2415, 20.45, 0, 0, 0, 0, 0, 0, 0, 0, -276.5, 329.5, 1119.5, 0, 0),
(17, 'Hype SCHO High Offset-T10', 'images/hype_scho_T10_R.png\r\n', 848, 7.04, 2479, 20.99, 0, 0, 0, 0, 0, 0, 0, 0, -280, 338.5, 1151.5, 0, 0),
(18, 'Hype SCHO High Offset-T11', 'images/hype_scho_T11_R.png\r\n', 851, 7.21, 2536, 21.47, 0, 0, 0, 0, 0, 0, 0, 0, -279.5, 349.5, 1189, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_scla_mini_lat`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_scla_mini_lat`
--

INSERT INTO `implant_scla_mini_lat` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype SCLA MINI Latéralisée-T2', 'images/hype_scla_mini_T2.png', 696, 5.89, 1491, 12.62, 0, 0, 0, 0, 0, 0, 0, 0, 269, -262, 658.5, 0, 0),
(2, 'Hype SCLA MINI Latéralisée-T3', 'images/hype_scla_mini_T3.png', 718, 6.08, 1609, 13.62, 0, 0, 0, 0, 0, 0, 0, 0, 269, -274, 717.5, 0, 0),
(3, 'Hype SCLA MINI Latéralisée-T4', 'images/hype_scla_mini_T4.png', 738, 6.25, 1629, 13.79, 0, 0, 0, 0, 0, 0, 0, 0, 271, -283, 727.5, 0, 0),
(4, 'Hype SCLA MINI Latéralisée-T5', 'images/hype_scla_mini_T5.png', 760, 6.43, 1678, 14.21, 0, 0, 0, 0, 0, 0, 0, 0, 273, -295, 752, 0, 0),
(5, 'Hype SCLA MINI Latéralisée-T6', 'images/hype_scla_mini_T6.png', 778, 6.59, 1737, 14.71, 0, 0, 0, 0, 0, 0, 0, 0, 275, -304, 782.5, 0, 0),
(6, 'Hype SCLA MINI Latéralisée-T7', 'images/hype_scla_mini_T7.png', 798, 6.76, 1770, 14.99, 0, 0, 0, 0, 0, 0, 0, 0, 277, -314, 798, 0, 0),
(7, 'Hype SCLA MINI Latéralisée-T2', 'images/hype_scla_mini_T2_R.png', 696, 5.89, 1491, 12.62, 0, 0, 0, 0, 0, 0, 0, 0, -269, 262, 658.5, 0, 0),
(8, 'Hype SCLA MINI Latéralisée-T3', 'images/hype_scla_mini_T3_R.png', 718, 6.08, 1609, 13.62, 0, 0, 0, 0, 0, 0, 0, 0, -269, 274, 717.5, 0, 0),
(9, 'Hype SCLA MINI Latéralisée-T4', 'images/hype_scla_mini_T4_R.png', 738, 6.25, 1629, 13.79, 0, 0, 0, 0, 0, 0, 0, 0, -271, 283, 727.5, 0, 0),
(10, 'Hype SCLA MINI Latéralisée-T5', 'images/hype_scla_mini_T5_R.png', 760, 6.43, 1678, 14.21, 0, 0, 0, 0, 0, 0, 0, 0, -273, 295, 752, 0, 0),
(11, 'Hype SCLA MINI Latéralisée-T6', 'images/hype_scla_mini_T6_R.png', 778, 6.59, 1737, 14.71, 0, 0, 0, 0, 0, 0, 0, 0, -275, 304, 782.5, 0, 0),
(12, 'Hype SCLA MINI Latéralisée-T7', 'images/hype_scla_mini_T7_R.png', 798, 6.76, 1770, 14.99, 0, 0, 0, 0, 0, 0, 0, 0, -277, 314, 798, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_scl_lat`
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_scl_lat`
--

INSERT INTO `implant_scl_lat` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype SCL Latéralisée-T2', 'images/hype_scl_T2.png', 696, 5.89, 1790, 15.16, 0, 0, 0, 0, 0, 0, 0, 0, 269, -262, 808, 0, 0),
(2, 'Hype SCL Latéralisée-T3', 'images/hype_scl_T3.png', 718, 6.08, 1918, 16.24, 0, 0, 0, 0, 0, 0, 0, 0, 269, -274, 873, 0, 0),
(3, 'Hype SCL Latéralisée-T4', 'images/hype_scl_T4.png', 738, 6.25, 1984, 16.8, 0, 0, 0, 0, 0, 0, 0, 0, 271, -283, 906, 0, 0),
(4, 'Hype SCL Latéralisée-T5', 'images/hype_scl_T5.png', 756, 6.4, 2037, 17.25, 0, 0, 0, 0, 0, 0, 0, 0, 272, -295, 932.5, 0, 0),
(5, 'Hype SCL Latéralisée-T6', 'images/hype_scl_T6.png', 778, 6.59, 2136, 18.08, 0, 0, 0, 0, 0, 0, 0, 0, 275, -304, 981, 0, 0),
(6, 'Hype SCL Latéralisée-T7', 'images/hype_scl_T7.png', 798, 6.76, 2197, 18.6, 0, 0, 0, 0, 0, 0, 0, 0, 279, -313, 1011.5, 0, 0),
(7, 'Hype SCL Latéralisée-T8', 'images/hype_scl_T8.png', 818, 6.93, 2258, 19.12, 0, 0, 0, 0, 0, 0, 0, 0, 278, -324, 1042, 0, 0),
(8, 'Hype SCL Latéralisée-T9', 'images/hype_scl_T9.png', 838, 7.1, 2318, 19.63, 0, 0, 0, 0, 0, 0, 0, 0, 280, -334, 1073, 0, 0),
(9, 'Hype SCL Latéralisée-T10', 'images/hype_scl_T10.png', 855, 7.24, 2382, 20.17, 0, 0, 0, 0, 0, 0, 0, 0, 283.5, -341.5, 1104, 0, 0),
(10, 'Hype SCL Latéralisée-T2', 'images/hype_scl_T2_R.png', 696, 5.89, 1790, 15.16, 0, 0, 0, 0, 0, 0, 0, 0, -269, 262, 808, 0, 0),
(11, 'Hype SCL Latéralisée-T3', 'images/hype_scl_T3_R.png', 718, 6.08, 1918, 16.24, 0, 0, 0, 0, 0, 0, 0, 0, -269, 274, 873, 0, 0),
(12, 'Hype SCL Latéralisée-T4', 'images/hype_scl_T4_R.png', 738, 6.25, 1984, 16.8, 0, 0, 0, 0, 0, 0, 0, 0, -271, 283, 906, 0, 0),
(13, 'Hype SCL Latéralisée-T5', 'images/hype_scl_T5_R.png', 756, 6.4, 2037, 17.25, 0, 0, 0, 0, 0, 0, 0, 0, -272, 295, 932.5, 0, 0),
(14, 'Hype SCL Latéralisée-T6', 'images/hype_scl_T6_R.png', 778, 6.59, 2136, 18.08, 0, 0, 0, 0, 0, 0, 0, 0, -275, 304, 981, 0, 0),
(15, 'Hype SCL Latéralisée-T7', 'images/hype_scl_T7_R.png', 798, 6.76, 2197, 18.6, 0, 0, 0, 0, 0, 0, 0, 0, -279, 313, 1011.5, 0, 0),
(16, 'Hype SCL Latéralisée-T8', 'images/hype_scl_T8_R.png', 818, 6.93, 2258, 19.12, 0, 0, 0, 0, 0, 0, 0, 0, -278, 324, 1042, 0, 0),
(17, 'Hype SCL Latéralisée-T9', 'images/hype_scl_T9_R.png', 838, 7.1, 2318, 19.63, 0, 0, 0, 0, 0, 0, 0, 0, -280, 334, 1073, 0, 0),
(18, 'Hype SCL Latéralisée-T10', 'images/hype_scl_T10_R.png', 855, 7.24, 2382, 20.17, 0, 0, 0, 0, 0, 0, 0, 0, -283.5, 341.5, 1104, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_scs_std`
--

DROP TABLE IF EXISTS `implant_scs_std`;
CREATE TABLE IF NOT EXISTS `implant_scs_std` (
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant_scs_std`
--

INSERT INTO `implant_scs_std` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype SCS Standard-T1', 'images/hype_scs_T1.png', 608, 5.15, 1720, 14.56, 0, 0, 0, 0, 0, 0, 0, 0, 230, -219, 773, 0, 0),
(2, 'Hype SCS Standard-T2', 'images/hype_scs_T2.png', 625, 5.29, 1802, 15.26, 0, 0, 0, 0, 0, 0, 0, 0, 234.5, -227.5, 814, 0, 0),
(3, 'Hype SCS Standard-T3', 'images/hype_scs_T3.png', 648, 5.49, 1903, 16.11, 0, 0, 0, 0, 0, 0, 0, 0, 234, -239, 864.5, 0, 0),
(4, 'Hype SCS Standard-T4', 'images/hype_scs_T4.png', 668, 5.66, 1974, 16.71, 0, 0, 0, 0, 0, 0, 0, 0, 236, -250, 901, 0, 0),
(5, 'Hype SCS Standard-T5', 'images/hype_scs_T5.png', 685, 5.8, 2037, 17.25, 0, 0, 0, 0, 0, 0, 0, 0, 236.5, -259.5, 932.5, 0, 0),
(6, 'Hype SCS Standard-T6', 'images/hype_scs_T6.png', 708, 5.99, 2078, 17.59, 0, 0, 0, 0, 0, 0, 0, 0, 239, -268, 952, 0, 0),
(7, 'Hype SCS Standard-T7', 'images/hype_scs_T7.png', 727, 6.16, 2152, 18.22, 0, 0, 0, 0, 0, 0, 0, 0, 241.5, -278.5, 989, 0, 0),
(8, 'Hype SCS Standard-T8', 'images/hype_scs_T8.png', 748, 6.33, 2219, 18.79, 0, 0, 0, 0, 0, 0, 0, 0, 243, -287, 1021.5, 0, 0),
(9, 'Hype SCS Standard-T9', 'images/hype_scs_T9.png', 768, 6.5, 2284, 19.34, 0, 0, 0, 0, 0, 0, 0, 0, 245, -297, 1054, 0, 0),
(10, 'Hype SCS Standard-T10', 'images/hype_scs_T10.png', 784, 6.64, 2355, 19.94, 0, 0, 0, 0, 0, 0, 0, 0, 248, -307, 1091.5, 0, 0),
(11, 'Hype SCS Standard-T11', 'images/hype_scs_T11.png', 798, 6.76, 2394, 20.27, 0, 0, 0, 0, 0, 0, 0, 0, 253, -312, 1109, 0, 0),
(12, 'Hype SCS Standard-T1', 'images/hype_scs_T1_R.png', 608, 5.15, 1720, 14.56, 0, 0, 0, 0, 0, 0, 0, 0, -230, 219, 773, 0, 0),
(13, 'Hype SCS Standard-T2', 'images/hype_scs_T2_R.png', 625, 5.29, 1802, 15.26, 0, 0, 0, 0, 0, 0, 0, 0, -234.5, 227.5, 814, 0, 0),
(14, 'Hype SCS Standard-T3', 'images/hype_scs_T3_R.png', 648, 5.49, 1903, 16.11, 0, 0, 0, 0, 0, 0, 0, 0, -234, 239, 864.5, 0, 0),
(15, 'Hype SCS Standard-T4', 'images/hype_scs_T4_R.png', 668, 5.66, 1974, 16.71, 0, 0, 0, 0, 0, 0, 0, 0, -236, 250, 901, 0, 0),
(16, 'Hype SCS Standard-T5', 'images/hype_scs_T5_R.png', 685, 5.8, 2037, 17.25, 0, 0, 0, 0, 0, 0, 0, 0, -236.5, 259.5, 932.5, 0, 0),
(17, 'Hype SCS Standard-T6', 'images/hype_scs_T6_R.png', 708, 5.99, 2078, 17.59, 0, 0, 0, 0, 0, 0, 0, 0, -239, 268, 952, 0, 0),
(18, 'Hype SCS Standard-T7', 'images/hype_scs_T7_R.png', 727, 6.16, 2152, 18.22, 0, 0, 0, 0, 0, 0, 0, 0, -241.5, 278.5, 989, 0, 0),
(19, 'Hype SCS Standard-T8', 'images/hype_scs_T8_R.png', 748, 6.33, 2219, 18.79, 0, 0, 0, 0, 0, 0, 0, 0, -243, 287, 1021.5, 0, 0),
(20, 'Hype SCS Standard-T9', 'images/hype_scs_T9_R.png', 768, 6.5, 2284, 19.34, 0, 0, 0, 0, 0, 0, 0, 0, -245, 297, 1054, 0, 0),
(21, 'Hype SCS Standard-T10', 'images/hype_scs_T10_R.png', 784, 6.64, 2355, 19.94, 0, 0, 0, 0, 0, 0, 0, 0, -248, 307, 1091.5, 0, 0),
(22, 'Hype SCS Standard-T11', 'images/hype_scs_T11_R.png', 798, 6.76, 2394, 20.27, 0, 0, 0, 0, 0, 0, 0, 0, -253, 312, 1109, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `implant_scv_coxa_vara`
--

DROP TABLE IF EXISTS `implant_scv_coxa_vara`;
CREATE TABLE IF NOT EXISTS `implant_scv_coxa_vara` (
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
-- Contenu de la table `implant_scv_coxa_vara`
--

INSERT INTO `implant_scv_coxa_vara` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `PtMecaHautXPx`, `PtMecaHautYPx`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'Hype SCV Coxa vara-T2', 'images/hype_scv_T2.png', 682, 5.77, 1744, 14.77, 0, 0, 0, 0, 0, 0, 0, 0, 262, -246, 785, 0, 0),
(2, 'Hype SCV Coxa vara-T3', 'images/hype_scv_T3.png', 705, 5.97, 1845, 15.62, 0, 0, 0, 0, 0, 0, 0, 0, 263.5, -256.5, 834.5, 0, 0),
(3, 'Hype SCV Coxa vara-T4', 'images/hype_scv_T4.png', 722, 6.11, 1900, 16.09, 0, 0, 0, 0, 0, 0, 0, 0, 263, -266, 862, 0, 0),
(4, 'Hype SCV Coxa vara-T5', 'images/hype_scv_T5.png', 723, 6.12, 1900, 16.71, 0, 0, 0, 0, 0, 0, 0, 0, 255.5, -282.5, 899, 0, 0),
(5, 'Hype SCV Coxa vara-T6', 'images/hype_scv_T6.png', 758, 6.42, 2028, 17.17, 0, 0, 0, 0, 0, 0, 0, 0, 265, -283, 926, 0, 0),
(6, 'Hype SCV Coxa vara-T7', 'images/hype_scv_T7.png', 776, 6.57, 2080, 17.61, 0, 0, 0, 0, 0, 0, 0, 0, 265, -292, 951, 0, 0),
(7, 'Hype SCV Coxa vara-T8', 'images/hype_scv_T8.png', 794, 6.72, 2144, 18.15, 0, 0, 0, 0, 0, 0, 0, 0, 266, -301, 985, 0, 0),
(8, 'Hype SCV Coxa vara-T9', 'images/hype_scv_T9.png', 812, 6.87, 2190, 18.54, 0, 0, 0, 0, 0, 0, 0, 0, 267, -311, 1008, 0, 0),
(9, 'Hype SCV Coxa vara-T2', 'images/hype_scv_T2_R.png', 682, 5.77, 1744, 14.77, 0, 0, 0, 0, 0, 0, 0, 0, -262, 246, 785, 0, 0),
(10, 'Hype SCV Coxa vara-T3', 'images/hype_scv_T3_R.png', 705, 5.97, 1845, 15.62, 0, 0, 0, 0, 0, 0, 0, 0, -263.5, 256.5, 834.5, 0, 0),
(11, 'Hype SCV Coxa vara-T4', 'images/hype_scv_T4_R.png', 722, 6.11, 1900, 16.09, 0, 0, 0, 0, 0, 0, 0, 0, -263, 266, 862, 0, 0),
(12, 'Hype SCV Coxa vara-T5', 'images/hype_scv_T5_R.png', 723, 6.12, 1900, 16.71, 0, 0, 0, 0, 0, 0, 0, 0, -255.5, 282.5, 899, 0, 0),
(13, 'Hype SCV Coxa vara-T6', 'images/hype_scv_T6_R.png', 758, 6.42, 2028, 17.17, 0, 0, 0, 0, 0, 0, 0, 0, -265, 283, 926, 0, 0),
(14, 'Hype SCV Coxa vara-T7', 'images/hype_scv_T7_R.png', 776, 6.57, 2080, 17.61, 0, 0, 0, 0, 0, 0, 0, 0, -265, 292, 951, 0, 0),
(15, 'Hype SCV Coxa vara-T8', 'images/hype_scv_T8_R.png', 794, 6.72, 2144, 18.15, 0, 0, 0, 0, 0, 0, 0, 0, -266, 301, 985, 0, 0),
(16, 'Hype SCV Coxa vara-T9', 'images/hype_scv_T9_R.png', 812, 6.87, 2190, 18.54, 0, 0, 0, 0, 0, 0, 0, 0, -267, 311, 1008, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
