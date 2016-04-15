-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Ven 15 Avril 2016 à 16:46
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
-- Structure de la table `coordonnee`
--

DROP TABLE IF EXISTS `coordonnee`;
CREATE TABLE IF NOT EXISTS `coordonnee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x1` double NOT NULL,
  `y1` double NOT NULL,
  `x2` double NOT NULL,
  `y2` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `coordonnee`
--

INSERT INTO `coordonnee` (`id`, `x1`, `y1`, `x2`, `y2`) VALUES
(1, 2051.020581113801, 1881.2602905569008, 2068.5, 1363.5),
(2, 2053.5, 1881.2602905569008, 2068.5, 1363.5),
(3, 2042.3426150121065, 1881.2602905569008, 2068.5, 1363.5),
(4, 2039.863196125908, 1881.2602905569008, 2068.5, 1363.5),
(5, 2036.1440677966102, 1881.2602905569008, 2068.5, 1363.5),
(6, 2032.4249394673125, 1882.5, 2068.5, 1363.5),
(7, 2031.185230024213, 1882.5, 2068.5, 1363.5),
(8, 2029.945520581114, 1882.5, 2068.5, 1363.5),
(9, 2028.7058111380147, 1882.5, 2068.5, 1363.5),
(10, 2027.4661016949153, 1882.5, 2068.5, 1363.5),
(11, 2026.226392251816, 1882.5, 2068.5, 1363.5),
(12, 2024.986682808717, 1882.5, 2068.5, 1363.5),
(13, 2023.7469733656176, 1882.5, 2068.5, 1363.5),
(14, 2022.5072639225182, 1882.5, 2068.5, 1363.5),
(15, 2021.2675544794188, 1882.5, 2068.5, 1363.5),
(16, 2020.0278450363196, 1882.5, 2068.5, 1363.5),
(17, 2018.7881355932204, 1882.5, 2068.5, 1363.5),
(18, 2017.548426150121, 1882.5, 2068.5, 1363.5),
(19, 2016.3087167070216, 1882.5, 2068.5, 1363.5),
(20, 2016.3087167070219, 1881.2602905569008, 2068.5, 1363.5),
(21, 2016.308716707022, 1880.0205811138017, 2068.5, 1363.5),
(22, 2016.3087167070219, 1878.7808716707023, 2068.5, 1363.5),
(23, 2017.5484261501213, 1877.5411622276029, 2068.5, 1363.5),
(24, 2017.548426150121, 1876.301452784504, 2068.5, 1363.5),
(25, 2017.548426150121, 1875.0617433414045, 2068.5, 1363.5),
(26, 2016.3087167070219, 1875.0617433414045, 2068.5, 1363.5),
(27, 2015.0690072639227, 1875.0617433414045, 2068.5, 1363.5),
(28, 2015.0690072639227, 1875.0617433414045, 2068.5, 1363.5),
(29, 2037.7602905569008, 1730.5, 2068.5, 1337),
(30, 2036.5205811138017, 1730.5, 2068.5, 1337),
(31, 2035.2808716707023, 1730.5, 2068.5, 1337),
(32, 2034.0411622276029, 1730.5, 2068.5, 1337),
(33, 2032.801452784504, 1730.5, 2068.5, 1337),
(34, 2032.8014527845037, 1731.7397094430994, 2068.5, 1337),
(35, 2032.8014527845037, 1731.7397094430994, 2068.5, 1337),
(36, 2048.760290556901, 1847, 2071, 1378),
(37, 2047.5205811138017, 1847, 2071, 1378),
(38, 2046.2808716707023, 1847, 2071, 1378),
(39, 2045.0411622276029, 1847, 2071, 1378),
(40, 2043.801452784504, 1847, 2071, 1378),
(41, 2041.322033898305, 1847, 2071, 1378),
(42, 2036.363196125908, 1847, 2071, 1378),
(43, 2032.6440677966102, 1848.2397094430994, 2071, 1378),
(44, 2031.4043583535108, 1848.2397094430994, 2071, 1378),
(45, 2030.1646489104119, 1848.2397094430994, 2071, 1378),
(46, 2028.9249394673125, 1848.2397094430994, 2071, 1378),
(47, 2026.445520581114, 1848.2397094430994, 2071, 1378),
(48, 2022.726392251816, 1850.7191283292977, 2071, 1378),
(49, 2020.2469733656176, 1850.7191283292977, 2071, 1378),
(50, 2021.486682808717, 1850.719128329298, 2071, 1378),
(51, 2019.0072639225182, 1851.9588377723971, 2071, 1378),
(52, 2017.7675544794188, 1851.9588377723971, 2071, 1378),
(53, 2017.7675544794188, 1853.1985472154965, 2071, 1378),
(54, 2019.0072639225182, 1854.4382566585957, 2071, 1378),
(55, 2026.445520581114, 1855.677966101695, 2071, 1378),
(56, 2033.8837772397096, 1855.677966101695, 2071, 1378),
(57, 2037.6029055690074, 1856.917675544794, 2071, 1378),
(58, 2041.322033898305, 1856.9176755447943, 2071, 1378),
(59, 2042.5617433414045, 1856.9176755447943, 2071, 1378),
(60, 2043.8014527845037, 1856.9176755447943, 2071, 1378),
(61, 2045.041162227603, 1856.9176755447943, 2071, 1378),
(62, 2046.2808716707023, 1856.9176755447943, 2071, 1378),
(63, 2047.5205811138014, 1856.9176755447943, 2071, 1378),
(64, 2048.760290556901, 1856.9176755447943, 2071, 1378),
(65, 2050, 1856.9176755447943, 2071, 1378),
(66, 2051.2397094430994, 1856.9176755447943, 2071, 1378),
(67, 2052.479418886199, 1856.9176755447943, 2071, 1378),
(68, 2053.7191283292977, 1856.9176755447943, 2071, 1378),
(69, 2054.958837772397, 1856.9176755447943, 2071, 1378),
(70, 2056.1985472154965, 1856.9176755447943, 2071, 1378),
(71, 2057.4382566585955, 1856.9176755447943, 2071, 1378),
(72, 2058.677966101695, 1856.9176755447943, 2071, 1378),
(73, 2058.677966101695, 1856.9176755447943, 2071, 1378),
(74, 2056.1985472154965, 1856.9176755447943, 2071, 1378),
(75, 2053.7191283292977, 1856.9176755447943, 2071, 1378),
(76, 2047.5205811138014, 1856.9176755447943, 2071, 1378),
(77, 2042.5617433414045, 1859.3970944309926, 2071, 1378),
(78, 2037.6029055690074, 1859.3970944309926, 2071, 1378),
(79, 2033.8837772397096, 1859.3970944309926, 2071, 1378),
(80, 2030.1646489104114, 1859.3970944309926, 2071, 1378),
(81, 2027.685230024213, 1859.3970944309926, 2071, 1378),
(82, 2026.4455205811137, 1859.3970944309926, 2071, 1378),
(83, 2023.9661016949153, 1859.3970944309926, 2071, 1378),
(84, 2022.726392251816, 1860.636803874092, 2071, 1378),
(85, 2021.4866828087165, 1860.636803874092, 2071, 1378),
(86, 2021.4866828087165, 1860.636803874092, 2071, 1378);

-- --------------------------------------------------------

--
-- Structure de la table `coordonnee_cercle`
--

DROP TABLE IF EXISTS `coordonnee_cercle`;
CREATE TABLE IF NOT EXISTS `coordonnee_cercle` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x` double NOT NULL,
  `y` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `coordonnee_cercle`
--

INSERT INTO `coordonnee_cercle` (`id`, `x`, `y`) VALUES
(1, 1780, 942),
(2, 1839, 912),
(3, 1832, 909),
(4, 1819, 897),
(5, 1847, 912),
(6, 523, 394),
(7, 562, 275);

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
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `cotyles`
--

INSERT INTO `cotyles` (`ID`, `Nom`, `URL`, `SizeXPixel`, `SizeYPixel`, `SizeXCm`, `SizeYCm`, `PosCenterX`, `PosCenterY`) VALUES
(1, 'Cup49', 'images/Cup49.png', 1136, 915, 0, 0, 0, 0),
(2, 'Cup51', 'images/Cup51.png', 1136, 915, 0, 0, 0, 0),
(3, 'Cup53', 'images/Cup53.png', 1136, 915, 0, 0, 0, 0),
(4, 'Cup55', 'images/Cup55.png', 1136, 915, 0, 0, 0, 0),
(5, 'Cup57', 'images/Cup57.png', 1136, 915, 0, 0, 0, 0),
(6, 'Cup59', 'images/Cup59.png', 1136, 915, 0, 0, 0, 0),
(7, 'Cup61', 'images/Cup61.png', 1136, 915, 0, 0, 0, 0),
(8, 'Cup63', 'images/Cup63.png', 1136, 915, 0, 0, 0, 0),
(9, 'Novae41', 'images/Novae41.png', 1136, 915, 0, 0, 0, 0),
(10, 'Novae43', 'images/Novae43.png', 1136, 915, 0, 0, 0, 0),
(11, 'Novae45', 'images/Novae45.png', 1136, 915, 0, 0, 0, 0),
(12, 'Novae47', 'images/Novae47.png', 1136, 915, 0, 0, 0, 0),
(13, 'Novae49', 'images/Novae49.png', 1136, 915, 0, 0, 0, 0),
(14, 'Novae51', 'images/Novae51.png', 1136, 915, 0, 0, 0, 0),
(15, 'Novae53', 'images/Novae53.png', 1136, 915, 0, 0, 0, 0),
(16, 'Novae55', 'images/Novae55.png', 1136, 915, 0, 0, 0, 0),
(17, 'Novae57', 'images/Novae57.png', 1136, 915, 0, 0, 0, 0),
(18, 'Novae59', 'images/Novae59.png', 1136, 915, 0, 0, 0, 0),
(19, 'Novae61', 'images/Novae61.png', 1136, 915, 0, 0, 0, 0),
(20, 'Novae63', 'images/Novae63.png', 1136, 915, 0, 0, 0, 0),
(21, 'Novae65', 'images/Novae65.png', 1136, 915, 0, 0, 0, 0),
(22, 'Novae67', 'images/Novae67.png', 1136, 915, 0, 0, 0, 0),
(23, 'Novae69', 'images/Novae69.png', 1136, 915, 0, 0, 0, 0),
(24, 'Novae71', 'images/Novae71.png', 1136, 915, 0, 0, 0, 0),
(25, 'Novae73', 'images/Novae73.png', 1136, 915, 0, 0, 0, 0),
(26, 'Novae41', 'images/Novae41_R.png', 1136, 915, 0, 0, 0, 0),
(27, 'Novae43', 'images/Novae43_R.png', 1136, 915, 0, 0, 0, 0),
(28, 'Novae45', 'images/Novae45_R.png', 1136, 915, 0, 0, 0, 0),
(29, 'Novae47', 'images/Novae47_R.png', 1136, 915, 0, 0, 0, 0),
(30, 'Novae49', 'images/Novae49_R.png', 1136, 915, 0, 0, 0, 0),
(31, 'Novae51', 'images/Novae51_R.png', 1136, 915, 0, 0, 0, 0),
(32, 'Novae53', 'images/Novae53_R.png', 1136, 915, 0, 0, 0, 0),
(33, 'Novae55', 'images/Novae55_R.png', 1136, 915, 0, 0, 0, 0),
(34, 'Novae57', 'images/Novae57_R.png', 1136, 915, 0, 0, 0, 0),
(35, 'Novae59', 'images/Novae59_R.png', 1136, 915, 0, 0, 0, 0),
(36, 'Novae61', 'images/Novae61_R.png', 1136, 915, 0, 0, 0, 0),
(37, 'Novae63', 'images/Novae63_R.png', 1136, 915, 0, 0, 0, 0),
(38, 'Novae65', 'images/Novae65_R.png', 1136, 915, 0, 0, 0, 0),
(39, 'Novae67', 'images/Novae67_R.png', 1136, 915, 0, 0, 0, 0),
(40, 'Novae69', 'images/Novae69_R.png', 1136, 915, 0, 0, 0, 0),
(41, 'Novae71', 'images/Novae71_R.png', 1136, 915, 0, 0, 0, 0),
(42, 'Novae73', 'images/Novae73_R.png', 1136, 915, 0, 0, 0, 0);

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
