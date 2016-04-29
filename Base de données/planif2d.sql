-- phpMyAdmin SQL Dump
-- version 4.2.8
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 29 Avril 2016 à 10:46
-- Version du serveur :  5.6.19
-- Version de PHP :  5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `planif2d`
--

-- --------------------------------------------------------

--
-- Structure de la table `cotyles`
--

CREATE TABLE IF NOT EXISTS `cotyles` (
`ID` int(11) NOT NULL,
  `Nom` varchar(200) NOT NULL,
  `URL` varchar(200) NOT NULL,
  `SizeXPixel` float NOT NULL,
  `SizeYPixel` float NOT NULL,
  `SizeXCm` float NOT NULL,
  `SizeYCm` float NOT NULL,
  `PosCenterX` float NOT NULL,
  `PosCenterY` float NOT NULL
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
-- Structure de la table `implant`
--

CREATE TABLE IF NOT EXISTS `implant` (
`id` int(11) NOT NULL,
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
  `enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=latin1;

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
(24, 'LibraT9', 'images/LibraT9_R.png', 821, 6.9, 2275, 19.2, 0, 0, 0, 0, 0, 0, 0, 0, -216.5, 135, 0),
(25, 'ax_cem_std 1\r\n', 'images/ax_cem_std_T1.png', 630, 5.33, 1332, 11.28, 0, 0, 0, 0, 0, 0, 0, 0, 217.485, 0, 0),
(26, 'ax_cem_std 2', 'images/ax_cem_std_T2.png', 653, 5.53, 1392, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, 221.996, 0, 0),
(27, 'ax_cem_std 3', 'images/ax_cem_std_T3.png', 671, 5.68, 1447, 12.25, 0, 0, 0, 0, 0, 0, 0, 0, 224.454, 0, 0),
(28, 'ax_cem_std 4', 'images/ax_cem_std_T4.png', 699, 5.92, 1538, 13.02, 0, 0, 0, 0, 0, 0, 0, 0, 231.426, 0, 0),
(29, 'ax_cem_std 5', 'images/ax_cem_std_T5.png', 722, 6.11, 1609, 13.62, 0, 0, 0, 0, 0, 0, 0, 0, 235.152, 0, 0),
(30, 'ax_cem_std 6', 'images/ax_cem_std_T6.png', 745, 6.31, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, 238.494, 0, 0),
(31, 'ax_cem_std 7', 'images/ax_cem_std_T7.png', 767, 6.49, 1742, 14.75, 0, 0, 0, 0, 0, 0, 0, 0, 243.455, 0, 0),
(32, 'ax_cem_std 8', 'images/ax_cem_std_T8.png', 790, 6.69, 1809, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, 249.163, 0, 0),
(33, 'ax_cem_std 9', 'images/ax_cem_std_T9.png', 813, 6.88, 1877, 15.89, 0, 0, 0, 0, 0, 0, 0, 0, 252.881, 0, 0),
(34, 'ax_cem_std 10', 'images/ax_cem_std_T10.png', 837, 7.09, 1936, 16.39, 0, 0, 0, 0, 0, 0, 0, 0, 256.176, 0, 0),
(35, 'ax_cem_std 1\r\n', 'images/ax_cem_std_T1_R.png', 630, 5.33, 1332, 11.28, 0, 0, 0, 0, 0, 0, 0, 0, -217.485, 0, 0),
(36, 'ax_cem_std 2', 'images/ax_cem_std_T2_R.png', 653, 5.53, 1392, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, -221.996, 0, 0),
(37, 'ax_cem_std 3', 'images/ax_cem_std_T3_R.png', 671, 5.68, 1447, 12.25, 0, 0, 0, 0, 0, 0, 0, 0, -224.454, 0, 0),
(38, 'ax_cem_std 4', 'images/ax_cem_std_T4_R.png', 699, 5.92, 1538, 13.02, 0, 0, 0, 0, 0, 0, 0, 0, -231.426, 0, 0),
(39, 'ax_cem_std 5', 'images/ax_cem_std_T5_R.png', 722, 6.11, 1609, 13.62, 0, 0, 0, 0, 0, 0, 0, 0, -235.152, 0, 0),
(40, 'ax_cem_std 6', 'images/ax_cem_std_T6_R.png', 745, 6.31, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, -238.494, 0, 0),
(41, 'ax_cem_std 7', 'images/ax_cem_std_T7_R.png', 767, 6.49, 1742, 14.75, 0, 0, 0, 0, 0, 0, 0, 0, -243.455, 0, 0),
(42, 'ax_cem_std 8', 'images/ax_cem_std_T8_R.png', 790, 6.69, 1809, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, -249.163, 0, 0),
(43, 'ax_cem_std 9', 'images/ax_cem_std_T9_R.png', 813, 6.88, 1877, 15.89, 0, 0, 0, 0, 0, 0, 0, 0, -252.881, 0, 0),
(44, 'ax_cem_std 10', 'images/ax_cem_std_T10_R.png', 837, 7.09, 1936, 16.39, 0, 0, 0, 0, 0, 0, 0, 0, -256.176, 0, 0),
(45, 'ax_cem_var 1', 'images/ax_cem_var_T1.png', 661, 5.6, 1284, 10.87, 0, 0, 0, 0, 0, 0, 0, 0, 232.53, 0, 0),
(46, 'ax_cem_var 2', 'images/ax_cem_var_T2.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, 238.569, 0, 0),
(47, 'ax_cem_var 3', 'images/ax_cem_var_T3.png', 704, 5.96, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, 239.785, 0, 0),
(48, 'ax_cem_var 4', 'images/ax_cem_var_T4.png', 735, 6.22, 1480, 12.53, 0, 0, 0, 0, 0, 0, 0, 0, 248.151, 0, 0),
(49, 'ax_cem_var 5', 'images/ax_cem_var_T5.png', 760, 6.43, 1550, 13.12, 0, 0, 0, 0, 0, 0, 0, 0, 254.121, 0, 0),
(50, 'ax_cem_var 6', 'images/ax_cem_var_T6.png', 786, 6.65, 1614, 13.67, 0, 0, 0, 0, 0, 0, 0, 0, 260.03, 0, 0),
(51, 'ax_cem_var 7', 'images/ax_cem_var_T7.png', 810, 6.86, 1676, 14.19, 0, 0, 0, 0, 0, 0, 0, 0, 264.49, 0, 0),
(52, 'ax_cem_var 8', 'images/ax_cem_var_T8.png', 834, 7.06, 1739, 14.72, 0, 0, 0, 0, 0, 0, 0, 0, 269.337, 0, 0),
(53, 'ax_cem_var 9', 'images/ax_cem_var_T9.png', 860, 7.28, 1804, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, 276.429, 0, 0),
(54, 'ax_cem_var 10', 'images/ax_cem_var_T10.png', 885, 7.49, 1860, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, 281.215, 0, 0),
(55, 'ax_cem_var 1', 'images/ax_cem_var_T1_R.png', 661, 5.6, 1284, 10.87, 0, 0, 0, 0, 0, 0, 0, 0, -232.53, 0, 0),
(56, 'ax_cem_var 2', 'images/ax_cem_var_T2_R.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, -238.569, 0, 0),
(57, 'ax_cem_var 3', 'images/ax_cem_var_T3_R.png', 704, 5.96, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, -239.785, 0, 0),
(58, 'ax_cem_var 4', 'images/ax_cem_var_T4_R.png', 735, 6.22, 1480, 12.53, 0, 0, 0, 0, 0, 0, 0, 0, -248.151, 0, 0),
(59, 'ax_cem_var 5', 'images/ax_cem_var_T5_R.png', 760, 6.43, 1550, 13.12, 0, 0, 0, 0, 0, 0, 0, 0, -254.121, 0, 0),
(60, 'ax_cem_var 6', 'images/ax_cem_var_T6_R.png', 786, 6.65, 1614, 13.67, 0, 0, 0, 0, 0, 0, 0, 0, -260.03, 0, 0),
(61, 'ax_cem_var 7', 'images/ax_cem_var_T7_R.png', 810, 6.86, 1676, 14.19, 0, 0, 0, 0, 0, 0, 0, 0, -264.49, 0, 0),
(62, 'ax_cem_var 8', 'images/ax_cem_var_T8_R.png', 834, 7.06, 1739, 14.72, 0, 0, 0, 0, 0, 0, 0, 0, -269.337, 0, 0),
(63, 'ax_cem_var 9', 'images/ax_cem_var_T9_R.png', 860, 7.28, 1804, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, -276.429, 0, 0),
(64, 'ax_cem_var 10', 'images/ax_cem_var_T10_R.png', 885, 7.49, 1860, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, -281.215, 0, 0),
(65, 'ax_ha_std 1', 'images/ax_ha_std_T1.png', 630, 5.33, 1333, 11.29, 0, 0, 0, 0, 0, 0, 0, 0, 217.486, 0, 0),
(66, 'ax_ha_std 2', 'images/ax_ha_std_T2.png', 653, 5.53, 1393, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, 220.816, 0, 0),
(67, 'ax_ha_std 3', 'images/ax_ha_std_T3.png', 671, 5.68, 1448, 12.26, 0, 0, 0, 0, 0, 0, 0, 0, 223.273, 0, 0),
(68, 'ax_ha_std 4', 'images/ax_ha_std_T4.png', 699, 5.92, 1537, 13.01, 0, 0, 0, 0, 0, 0, 0, 0, 230.245, 0, 0),
(69, 'ax_ha_std 5', 'images/ax_ha_std_T5.png', 722, 6.11, 1610, 13.63, 0, 0, 0, 0, 0, 0, 0, 0, 235.152, 0, 0),
(70, 'ax_ha_std 6', 'images/ax_ha_std_T6.png', 745, 6.31, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, 238.494, 0, 0),
(71, 'ax_ha_std 7', 'images/ax_ha_std_T7.png', 767, 6.49, 1743, 14.76, 0, 0, 0, 0, 0, 0, 0, 0, 243.455, 0, 0),
(72, 'ax_ha_std 8', 'images/ax_ha_std_T8.png', 790, 6.69, 1809, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, 247.982, 0, 0),
(73, 'ax_ha_std 9', 'images/ax_ha_std_T9.png', 813, 6.88, 1876, 15.88, 0, 0, 0, 0, 0, 0, 0, 0, 252.881, 0, 0),
(74, 'ax_ha_std 10', 'images/ax_ha_std_T10.png', 837, 7.09, 1936, 16.39, 0, 0, 0, 0, 0, 0, 0, 0, 256.176, 0, 0),
(75, 'ax_ha_std 1', 'images/ax_ha_std_T1_R.png', 630, 5.33, 1333, 11.29, 0, 0, 0, 0, 0, 0, 0, 0, -217.486, 0, 0),
(76, 'ax_ha_std 2', 'images/ax_ha_std_T2_R.png', 653, 5.53, 1393, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, -220.816, 0, 0),
(77, 'ax_ha_std 3', 'images/ax_ha_std_T3_R.png', 671, 5.68, 1448, 12.26, 0, 0, 0, 0, 0, 0, 0, 0, -223.273, 0, 0),
(78, 'ax_ha_std 4', 'images/ax_ha_std_T4_R.png', 699, 5.92, 1537, 13.01, 0, 0, 0, 0, 0, 0, 0, 0, -230.245, 0, 0),
(79, 'ax_ha_std 5', 'images/ax_ha_std_T5_R.png', 722, 6.11, 1610, 13.63, 0, 0, 0, 0, 0, 0, 0, 0, -235.152, 0, 0),
(80, 'ax_ha_std 6', 'images/ax_ha_std_T6_R.png', 745, 6.31, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, -238.494, 0, 0),
(81, 'ax_ha_std 7', 'images/ax_ha_std_T7_R.png', 767, 6.49, 1743, 14.76, 0, 0, 0, 0, 0, 0, 0, 0, -243.455, 0, 0),
(82, 'ax_ha_std 8', 'images/ax_ha_std_T8_R.png', 790, 6.69, 1809, 15.32, 0, 0, 0, 0, 0, 0, 0, 0, -247.982, 0, 0),
(83, 'ax_ha_std 9', 'images/ax_ha_std_T9_R.png', 813, 6.88, 1876, 15.88, 0, 0, 0, 0, 0, 0, 0, 0, -252.881, 0, 0),
(84, 'ax_ha_std 10', 'images/ax_ha_std_T10_R.png', 837, 7.09, 1936, 16.39, 0, 0, 0, 0, 0, 0, 0, 0, -256.176, 0, 0),
(85, 'ax_ha_std_col 1', 'images/ax_ha_std_col_T1.png', 630, 5.33, 1370, 11.6, 0, 0, 0, 0, 0, 0, 0, 0, 217.486, 0, 0),
(86, 'ax_ha_std_col 2', 'images/ax_ha_std_col_T2.png', 653, 5.53, 1393, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, 221.996, 0, 0),
(87, 'ax_ha_std_col 3', 'images/ax_ha_std_col_T3.png', 671, 5.68, 1448, 12.26, 0, 0, 0, 0, 0, 0, 0, 0, 222.092, 0, 0),
(88, 'ax_ha_std_col 4', 'images/ax_ha_std_col_T4.png', 699, 5.92, 1537, 13.01, 0, 0, 0, 0, 0, 0, 0, 0, 230.245, 0, 0),
(89, 'ax_ha_std_col 5', 'images/ax_ha_std_col_T5.png', 721, 6.1, 1610, 13.63, 0, 0, 0, 0, 0, 0, 0, 0, 235.211, 0, 0),
(90, 'ax_ha_std_col 6', 'images/ax_ha_std_col_T6.png', 746, 6.32, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, 238.437, 0, 0),
(91, 'ax_ha_std_col 7', 'images/ax_ha_std_col_T7.png', 767, 6.49, 1742, 14.75, 0, 0, 0, 0, 0, 0, 0, 0, 243.455, 0, 0),
(92, 'ax_ha_std_col 8', 'images/ax_ha_std_col_T8.png', 790, 6.69, 1808, 15.31, 0, 0, 0, 0, 0, 0, 0, 0, 246.801, 0, 0),
(93, 'ax_ha_std_col 9', 'images/ax_ha_std_col_T9.png', 814, 6.89, 1875, 15.88, 0, 0, 0, 0, 0, 0, 0, 0, 252.824, 0, 0),
(94, 'ax_ha_std_col 10', 'images/ax_ha_std_col_T10.png', 837, 7.09, 1936, 16.36, 0, 0, 0, 0, 0, 0, 0, 0, 257.357, 0, 0),
(95, 'ax_ha_std_col 1', 'images/ax_ha_std_col_T1_R.png', 630, 5.33, 1370, 11.6, 0, 0, 0, 0, 0, 0, 0, 0, -217.486, 0, 0),
(96, 'ax_ha_std_col 2', 'images/ax_ha_std_col_T2_R.png', 653, 5.53, 1393, 11.79, 0, 0, 0, 0, 0, 0, 0, 0, -221.996, 0, 0),
(97, 'ax_ha_std_col 3', 'images/ax_ha_std_col_T3_R.png', 671, 5.68, 1448, 12.26, 0, 0, 0, 0, 0, 0, 0, 0, -222.092, 0, 0),
(98, 'ax_ha_std_col 4', 'images/ax_ha_std_col_T4_R.png', 699, 5.92, 1537, 13.01, 0, 0, 0, 0, 0, 0, 0, 0, -230.245, 0, 0),
(99, 'ax_ha_std_col 5', 'images/ax_ha_std_col_T5_R.png', 721, 6.1, 1610, 13.63, 0, 0, 0, 0, 0, 0, 0, 0, -235.211, 0, 0),
(100, 'ax_ha_std_col 6', 'images/ax_ha_std_col_T6_R.png', 746, 6.32, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, -238.437, 0, 0),
(101, 'ax_ha_std_col 7', 'images/ax_ha_std_col_T7_R.png', 767, 6.49, 1742, 14.75, 0, 0, 0, 0, 0, 0, 0, 0, -243.455, 0, 0),
(102, 'ax_ha_std_col 8', 'images/ax_ha_std_col_T8_R.png', 790, 6.69, 1808, 15.31, 0, 0, 0, 0, 0, 0, 0, 0, -246.801, 0, 0),
(103, 'ax_ha_std_col 9', 'images/ax_ha_std_col_T9_R.png', 814, 6.89, 1875, 15.88, 0, 0, 0, 0, 0, 0, 0, 0, -252.824, 0, 0),
(104, 'ax_ha_std_col 10', 'images/ax_ha_std_col_T10_R.png', 837, 7.09, 1936, 16.36, 0, 0, 0, 0, 0, 0, 0, 0, -257.357, 0, 0),
(105, 'ax_ha_var 1', 'images/ax_ha_varT1.png', 661, 5.6, 1284, 10.88, 0, 0, 0, 0, 0, 0, 0, 0, 232.53, 0, 0),
(106, 'ax_ha_var 2', 'images/ax_ha_varT2.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, 237.387, 0, 0),
(107, 'ax_ha_var 3', 'images/ax_ha_varT3.png', 704, 5.96, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, 239.785, 0, 0),
(108, 'ax_ha_var 4', 'images/ax_ha_varT4.png', 736, 6.22, 1481, 12.54, 0, 0, 0, 0, 0, 0, 0, 0, 248.151, 0, 0),
(109, 'ax_ha_var 5', 'images/ax_ha_varT5.png', 760, 6.43, 1549, 13.11, 0, 0, 0, 0, 0, 0, 0, 0, 252.939, 0, 0),
(110, 'ax_ha_var 6', 'images/ax_ha_varT6.png', 786, 6.65, 1614, 13.67, 0, 0, 0, 0, 0, 0, 0, 0, 258.848, 0, 0),
(111, 'ax_ha_var 7', 'images/ax_ha_varT7.png', 810, 6.86, 1676, 14.19, 0, 0, 0, 0, 0, 0, 0, 0, 264.49, 0, 0),
(112, 'ax_ha_var 8', 'images/ax_ha_varT8.png', 834, 7.06, 1740, 14.73, 0, 0, 0, 0, 0, 0, 0, 0, 269.337, 0, 0),
(113, 'ax_ha_var 9', 'images/ax_ha_varT9.png', 860, 7.28, 1803, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, 275.247, 0, 0),
(114, 'ax_ha_var 10', 'images/ax_ha_varT10.png', 885, 7.49, 1861, 15.76, 0, 0, 0, 0, 0, 0, 0, 0, 280.033, 0, 0),
(115, 'ax_ha_var 1', 'images/ax_ha_varT1_R.png', 661, 5.6, 1284, 10.88, 0, 0, 0, 0, 0, 0, 0, 0, -232.53, 0, 0),
(116, 'ax_ha_var 2', 'images/ax_ha_varT2_R.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, -237.387, 0, 0),
(117, 'ax_ha_var 3', 'images/ax_ha_varT3_R.png', 704, 5.96, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, -239.785, 0, 0),
(118, 'ax_ha_var 4', 'images/ax_ha_varT4_R.png', 736, 6.22, 1481, 12.54, 0, 0, 0, 0, 0, 0, 0, 0, -248.151, 0, 0),
(119, 'ax_ha_var 5', 'images/ax_ha_varT5_R.png', 760, 6.43, 1549, 13.11, 0, 0, 0, 0, 0, 0, 0, 0, -252.939, 0, 0),
(120, 'ax_ha_var 6', 'images/ax_ha_varT6_R.png', 786, 6.65, 1614, 13.67, 0, 0, 0, 0, 0, 0, 0, 0, -258.848, 0, 0),
(121, 'ax_ha_var 7', 'images/ax_ha_varT7_R.png', 810, 6.86, 1676, 14.19, 0, 0, 0, 0, 0, 0, 0, 0, -264.49, 0, 0),
(122, 'ax_ha_var 8', 'images/ax_ha_varT8_R.png', 834, 7.06, 1740, 14.73, 0, 0, 0, 0, 0, 0, 0, 0, -269.337, 0, 0),
(123, 'ax_ha_var 9', 'images/ax_ha_varT9_R.png', 860, 7.28, 1803, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, -275.247, 0, 0),
(124, 'ax_ha_var 10', 'images/ax_ha_varT10_R.png', 885, 7.49, 1861, 15.76, 0, 0, 0, 0, 0, 0, 0, 0, -280.033, 0, 0),
(125, 'ax_ha_var_col 1', 'images/ax_ha_var_colT1.png', 660, 5.59, 1285, 10.88, 0, 0, 0, 0, 0, 0, 0, 0, 232.594, 0, 0),
(126, 'ax_ha_var_col 2', 'images/ax_ha_var_colT2.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, 237.388, 0, 0),
(127, 'ax_ha_var_col 3', 'images/ax_ha_var_colT3.png', 705, 5.97, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, 239.724, 0, 0),
(128, 'ax_ha_var_col 4', 'images/ax_ha_var_colT4.png', 735, 6.22, 1480, 12.53, 0, 0, 0, 0, 0, 0, 0, 0, 248.151, 0, 0),
(129, 'ax_ha_var_col 5', 'images/ax_ha_var_colT5.png', 760, 6.43, 1549, 13.11, 0, 0, 0, 0, 0, 0, 0, 0, 254.121, 0, 0),
(130, 'ax_ha_var_col 6', 'images/ax_ha_var_colT6.png', 785, 6.65, 1612, 13.65, 0, 0, 0, 0, 0, 0, 0, 0, 258.519, 0, 0),
(131, 'ax_ha_var_col 7', 'images/ax_ha_var_colT7.png', 810, 6.86, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, 264.49, 0, 0),
(132, 'ax_ha_var_col 8', 'images/ax_ha_var_colT8.png', 834, 7.06, 1736, 14.72, 0, 0, 0, 0, 0, 0, 0, 0, 269.337, 0, 0),
(133, 'ax_ha_var_col 9', 'images/ax_ha_var_colT9.png', 860, 7.28, 1804, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, 276.429, 0, 0),
(134, 'ax_ha_var_col 10', 'images/ax_ha_var_colT10.png', 885, 7.49, 1860, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, 281.215, 0, 0),
(135, 'ax_ha_var_col 1', 'images/ax_ha_var_colT1_R.png', 660, 5.59, 1285, 10.88, 0, 0, 0, 0, 0, 0, 0, 0, -232.594, 0, 0),
(136, 'ax_ha_var_col 2', 'images/ax_ha_var_colT2_R.png', 685, 5.8, 1341, 11.35, 0, 0, 0, 0, 0, 0, 0, 0, -237.388, 0, 0),
(137, 'ax_ha_var_col 3', 'images/ax_ha_var_colT3_R.png', 705, 5.97, 1395, 11.81, 0, 0, 0, 0, 0, 0, 0, 0, -239.724, 0, 0),
(138, 'ax_ha_var_col 4', 'images/ax_ha_var_colT4_R.png', 735, 6.22, 1480, 12.53, 0, 0, 0, 0, 0, 0, 0, 0, -248.151, 0, 0),
(139, 'ax_ha_var_col 5', 'images/ax_ha_var_colT5_R.png', 760, 6.43, 1549, 13.11, 0, 0, 0, 0, 0, 0, 0, 0, -254.121, 0, 0),
(140, 'ax_ha_var_col 6', 'images/ax_ha_var_colT6_R.png', 785, 6.65, 1612, 13.65, 0, 0, 0, 0, 0, 0, 0, 0, -258.519, 0, 0),
(141, 'ax_ha_var_col 7', 'images/ax_ha_var_colT7_R.png', 810, 6.86, 1677, 14.2, 0, 0, 0, 0, 0, 0, 0, 0, -264.49, 0, 0),
(142, 'ax_ha_var_col 8', 'images/ax_ha_var_colT8_R.png', 834, 7.06, 1736, 14.72, 0, 0, 0, 0, 0, 0, 0, 0, -269.337, 0, 0),
(143, 'ax_ha_var_col 9', 'images/ax_ha_var_colT9_R.png', 860, 7.28, 1804, 15.27, 0, 0, 0, 0, 0, 0, 0, 0, -276.429, 0, 0),
(144, 'ax_ha_var_col 10', 'images/ax_ha_var_colT10_R.png', 885, 7.49, 1860, 15.75, 0, 0, 0, 0, 0, 0, 0, 0, -281.215, 0, 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `cotyles`
--
ALTER TABLE `cotyles`
 ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `implant`
--
ALTER TABLE `implant`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `cotyles`
--
ALTER TABLE `cotyles`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=91;
--
-- AUTO_INCREMENT pour la table `implant`
--
ALTER TABLE `implant`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=145;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
