-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Lun 25 Avril 2016 à 15:04
-- Version du serveur :  5.7.9
-- Version de PHP :  5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `planif2d`
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
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=latin1;

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
(68, 'Cup DM 68', 'images/ax_dm_cem_68_R.png', 1136, 915, 9.62, 7.75, 0, 0);

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
  `angleCervicoDiaphysaire` float NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `implant`
--

INSERT INTO `implant` (`id`, `nom`, `url`, `widthPx`, `widthCm`, `heightPx`, `heightCm`, `axeFemurHautPxX`, `axeFemurHautPxY`, `axeFemurBasPxX`, `axeFemurBasPxY`, `axeTeteHancheHautPxX`, `axeTeteHancheHautPxY`, `axeTeteHancheBasPxX`, `axeTeteHancheBasPxY`, `distOffsetX`, `angleCervicoDiaphysaire`, `enabled`) VALUES
(1, 'HypeT2', 'images/HypeT2.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, 276, 135, 0),
(2, 'HypeT3', 'images/HypeT3.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, 276.5, 135, 0),
(3, 'HypeT4', 'images/HypeT4.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, 278.5, 135, 0),
(4, 'HypeT5', 'images/HypeT5.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, 282.5, 135, 0),
(5, 'HypeT6', 'images/HypeT6.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, 283, 135, 0),
(6, 'HypeT7', 'images/HypeT7.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, 286, 135, 0),
(7, 'HypeT8', 'images/HypeT8.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, 287.5, 135, 0),
(8, 'HypeT9', 'images/HypeT9.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, 289.5, 135, 0),
(9, 'LibraT2', 'images/LibraT2.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, 174.5, 0, 0),
(10, 'LibraT3', 'images/LibraT3.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, 174.5, 0, 0),
(11, 'LibraT4', 'images/LibraT4.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, 208.5, 0, 0),
(12, 'LibraT5', 'images/LibraT5.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, 210.5, 0, 0),
(13, 'LibraT6', 'images/LibraT6.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, 213, 0, 0),
(14, 'LibraT7', 'images/LibraT7.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, 214, 0, 0),
(15, 'LibraT8', 'images/LibraT8.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, 216.5, 135, 0),
(16, 'LibraT9', 'images/LibraT9.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, 216.5, 135, 0),
(17, 'LibraT2', 'images/LibraT2_R.png', 684, 5.8, 1800, 15.2, 0, 0, 0, 0, 0, 0, 0, 0, -174.5, 0, 0),
(18, 'LibraT3', 'images/LibraT3_R.png', 707, 6, 1923, 16.3, 0, 0, 0, 0, 0, 0, 0, 0, -174.5, 0, 0),
(19, 'LibraT4', 'images/LibraT4_R.png', 725, 6.1, 1978, 16.7, 0, 0, 0, 0, 0, 0, 0, 0, -208.5, 0, 0),
(20, 'LibraT5', 'images/LibraT5_R.png', 745, 6.3, 2040, 17.3, 0, 0, 0, 0, 0, 0, 0, 0, -210.5, 0, 0),
(21, 'LibraT6', 'images/LibraT6_R.png', 764, 6.5, 2087, 17.6, 0, 0, 0, 0, 0, 0, 0, 0, -213, 0, 0),
(22, 'LibraT7', 'images/LibraT7_R.png', 782, 6.6, 2139, 18.1, 0, 0, 0, 0, 0, 0, 0, 0, -214, 0, 0),
(23, 'LibraT8', 'images/LibraT8_R.png', 803, 6.8, 2205, 18.7, 0, 0, 0, 0, 0, 0, 0, 0, -216.5, 135, 0),
(24, 'LibraT9', 'images/LibraT9_R.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, -216.5, 135, 0);

-- --------------------------------------------------------

--
-- Structure de la table `patients`
--

DROP TABLE IF EXISTS `patients`;
CREATE TABLE IF NOT EXISTS `patients` (
  `Nom` varchar(40) NOT NULL,
  `Prenom` varchar(40) NOT NULL,
  `Numero_carte_vitale` bigint(20) NOT NULL,
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `patients`
--

INSERT INTO `patients` (`Nom`, `Prenom`, `Numero_carte_vitale`, `ID`) VALUES
('DUPOND', 'Jacques', 123456789123400, 1),
('CHARLES', 'Adrien', 123456789123403, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
