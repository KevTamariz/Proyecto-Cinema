-- MySQL dump 10.13  Distrib 5.7.42, for Linux (x86_64)
--
-- Host: localhost    Database: cinemaplus
-- ------------------------------------------------------
-- Server version	5.7.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Asiento`
--

DROP TABLE IF EXISTS `Asiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Asiento` (
  `id_asciento` int(11) NOT NULL,
  `ocupado` tinyint(1) DEFAULT NULL,
  `sala_id` int(11) DEFAULT NULL,
  `nombre_asiento` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id_asciento`),
  KEY `fk_sala3_id` (`sala_id`),
  CONSTRAINT `fk_sala3_id` FOREIGN KEY (`sala_id`) REFERENCES `Sala` (`id_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Asiento`
--

LOCK TABLES `Asiento` WRITE;
/*!40000 ALTER TABLE `Asiento` DISABLE KEYS */;
INSERT INTO `Asiento` VALUES (1,0,1,'A1'),(2,0,1,'A2'),(3,0,1,'A3'),(34,0,1,'D4'),(35,0,1,'D5'),(36,0,1,'D6'),(37,0,1,'D7'),(38,0,1,'D8'),(39,0,1,'D9'),(40,0,1,'D10'),(41,0,1,'E1'),(42,0,1,'E2'),(43,0,1,'E3'),(44,0,1,'E4'),(45,0,1,'E5'),(46,0,1,'E6'),(47,0,1,'E7'),(48,0,1,'E8'),(49,0,1,'E9'),(50,0,1,'E10'),(51,0,2,'A1'),(52,0,2,'A2'),(53,0,2,'A3'),(54,0,2,'A4'),(55,0,2,'A5'),(56,0,2,'A6'),(57,0,2,'A7'),(58,0,2,'A8'),(59,0,2,'A9'),(60,0,2,'A10'),(61,0,2,'B1'),(62,0,2,'B2'),(63,0,2,'B3'),(64,0,2,'B4'),(65,0,2,'B5'),(66,0,2,'B6'),(67,0,2,'B7'),(68,0,2,'B8'),(69,0,2,'B9'),(70,0,2,'B10'),(71,0,2,'C1'),(72,0,2,'C2'),(73,0,2,'C3'),(74,0,2,'C4'),(75,0,2,'C5'),(76,0,2,'C6'),(77,0,2,'C7'),(78,0,2,'C8'),(79,0,2,'C9'),(80,0,2,'C10'),(81,0,2,'D1'),(82,0,2,'D2'),(83,0,2,'D3'),(84,0,2,'D4'),(85,0,2,'D5'),(86,0,2,'D6'),(87,0,2,'D7'),(88,0,2,'D8'),(89,0,2,'D9'),(90,0,2,'D10'),(91,0,2,'E1'),(92,0,2,'E2'),(93,0,2,'E3'),(94,0,2,'E4'),(95,0,2,'E5'),(96,0,2,'E6'),(97,0,2,'E7'),(98,0,2,'E8'),(99,0,2,'E9'),(100,0,2,'E10'),(101,0,3,'A1'),(102,0,3,'A2'),(103,0,3,'A3'),(104,0,3,'A4'),(105,0,3,'A5'),(106,0,3,'A6'),(107,0,3,'A7'),(108,0,3,'A8'),(109,0,3,'A9'),(110,0,3,'A10'),(111,0,3,'B1'),(112,0,3,'B2'),(113,0,3,'B3'),(114,0,3,'B4'),(115,0,3,'B5'),(116,0,3,'B6'),(117,0,3,'B7'),(118,0,3,'B8'),(119,0,3,'B9'),(120,0,3,'B10'),(121,0,3,'C1'),(122,0,3,'C2'),(123,0,3,'C3'),(124,0,3,'C4'),(125,0,3,'C5'),(126,0,3,'C6'),(127,0,3,'C7'),(128,0,3,'C8'),(129,0,3,'C9'),(130,0,3,'C10'),(131,0,3,'D1'),(132,0,3,'D2'),(133,0,3,'D3'),(134,0,3,'D4'),(135,0,3,'D5'),(136,0,3,'D6'),(137,0,3,'D7'),(138,0,3,'D8'),(139,0,3,'D9'),(140,0,3,'D10'),(141,0,3,'E1'),(142,0,3,'E2'),(143,0,3,'E3'),(144,0,3,'E4'),(145,0,3,'E5'),(146,0,3,'E6'),(147,0,3,'E7'),(148,0,3,'E8'),(149,0,3,'E9'),(150,0,3,'E10'),(151,0,7,'A1'),(152,0,7,'A2'),(153,0,7,'A3'),(154,0,7,'A4'),(155,0,7,'A5'),(156,0,7,'A6'),(157,0,7,'A7'),(158,0,7,'A8'),(159,0,7,'A9'),(160,0,7,'A10'),(161,0,7,'B1'),(162,0,7,'B2'),(163,0,7,'B3'),(164,0,7,'B4'),(165,0,7,'B5'),(166,0,7,'B6'),(167,0,7,'B7'),(168,0,7,'B8'),(169,0,7,'B9'),(170,0,7,'B10'),(171,0,7,'C1'),(172,0,7,'C2'),(173,0,7,'C3'),(174,0,7,'C4'),(175,0,7,'C5'),(176,0,7,'C6'),(177,0,7,'C7'),(178,0,7,'C8'),(179,0,7,'C9'),(180,0,7,'C10'),(181,0,7,'D1'),(182,0,7,'D2'),(183,0,7,'D3'),(184,0,7,'D4'),(185,0,7,'D5'),(186,0,7,'D6'),(187,0,7,'D7'),(188,0,7,'D8'),(189,0,7,'D9'),(190,0,7,'D10'),(191,0,7,'E1'),(192,0,7,'E2'),(193,0,7,'E3'),(194,0,7,'E4'),(195,0,7,'E5'),(196,0,7,'E6'),(197,0,7,'E7'),(198,0,7,'E8'),(199,0,7,'E9'),(200,0,7,'E10'),(201,0,8,'A1'),(202,0,8,'A2'),(203,0,8,'A3'),(204,0,8,'A4'),(205,0,8,'A5'),(206,0,8,'A6'),(207,0,8,'A7'),(208,0,8,'A8'),(209,0,8,'A9'),(210,0,8,'A10'),(211,0,8,'B1'),(212,0,8,'B2'),(213,0,8,'B3'),(214,0,8,'B4'),(215,0,8,'B5'),(216,0,8,'B6'),(217,0,8,'B7'),(218,0,8,'B8'),(219,0,8,'B9'),(220,0,8,'B10'),(221,0,8,'C1'),(222,0,8,'C2'),(223,0,8,'C3'),(224,0,8,'C4'),(225,0,8,'C5'),(226,0,8,'C6'),(227,0,8,'C7'),(228,0,8,'C8'),(229,0,8,'C9'),(230,0,8,'C10'),(231,0,8,'D1'),(232,0,8,'D2'),(233,0,8,'D3'),(234,0,8,'D4'),(235,0,8,'D5'),(236,0,8,'D6'),(237,0,8,'D7'),(238,0,8,'D8'),(239,0,8,'D9'),(240,0,8,'D10'),(241,0,8,'E1'),(242,0,8,'E2'),(243,0,8,'E3'),(244,0,8,'E4'),(245,0,8,'E5'),(246,0,8,'E6'),(247,0,8,'E7'),(248,0,8,'E8'),(249,0,8,'E9'),(250,0,8,'E10'),(251,0,9,'A1'),(252,0,9,'A2'),(253,0,9,'A3'),(254,0,9,'A4'),(255,0,9,'A5'),(256,0,9,'A6'),(257,0,9,'A7'),(258,0,9,'A8'),(259,0,9,'A9'),(260,0,9,'A10'),(261,0,9,'B1'),(262,0,9,'B2'),(263,0,9,'B3'),(264,0,9,'B4'),(265,0,9,'B5'),(266,0,9,'B6'),(267,0,9,'B7'),(268,0,9,'B8'),(269,0,9,'B9'),(270,0,9,'B10'),(271,0,9,'C1'),(272,0,9,'C2'),(273,0,9,'C3'),(274,0,9,'C4'),(275,0,9,'C5'),(276,0,9,'C6'),(277,0,9,'C7'),(278,0,9,'C8'),(279,0,9,'C9'),(280,0,9,'C10'),(281,0,9,'D1'),(282,0,9,'D2'),(283,0,9,'D3'),(284,0,9,'D4'),(285,0,9,'D5'),(286,0,9,'D6'),(287,0,9,'D7'),(288,0,9,'D8'),(289,0,9,'D9'),(290,0,9,'D10'),(291,0,9,'E1'),(292,0,9,'E2'),(293,0,9,'E3'),(294,0,9,'E4'),(295,0,9,'E5'),(296,0,9,'E6'),(297,0,9,'E7'),(298,0,9,'E8'),(299,0,9,'E9'),(300,0,9,'E10'),(301,0,13,'A1'),(302,0,13,'A2'),(303,0,13,'A3'),(304,0,13,'A4'),(305,0,13,'A5'),(306,0,13,'A6'),(307,0,13,'A7'),(308,0,13,'A8'),(309,0,13,'A9'),(310,0,13,'A10'),(311,0,13,'B1'),(312,0,13,'B2'),(313,0,13,'B3'),(314,0,13,'B4'),(315,0,13,'B5'),(316,0,13,'B6'),(317,0,13,'B7'),(318,0,13,'B8'),(319,0,13,'B9'),(320,0,13,'B10'),(321,0,13,'C1'),(322,0,13,'C2'),(323,0,13,'C3'),(324,0,13,'C4'),(325,0,13,'C5'),(326,0,13,'C6'),(327,0,13,'C7'),(328,0,13,'C8'),(329,0,13,'C9'),(330,0,13,'C10'),(331,0,13,'D1'),(332,0,13,'D2'),(333,0,13,'D3'),(334,0,13,'D4'),(335,0,13,'D5'),(336,0,13,'D6'),(337,0,13,'D7'),(338,0,13,'D8'),(339,0,13,'D9'),(340,0,13,'D10'),(341,0,13,'E1'),(342,0,13,'E2'),(343,0,13,'E3'),(344,0,13,'E4'),(345,0,13,'E5'),(346,0,13,'E6'),(347,0,13,'E7'),(348,0,13,'E8'),(349,0,13,'E9'),(350,0,13,'E10'),(351,0,14,'A1'),(352,0,14,'A2'),(353,0,14,'A3'),(354,0,14,'A4'),(355,0,14,'A5'),(356,0,14,'A6'),(357,0,14,'A7'),(358,0,14,'A8'),(359,0,14,'A9'),(360,0,14,'A10'),(361,0,14,'B1'),(362,0,14,'B2'),(363,0,14,'B3'),(364,0,14,'B4'),(365,0,14,'B5'),(366,0,14,'B6'),(367,0,14,'B7'),(368,0,14,'B8'),(369,0,14,'B9'),(370,0,14,'B10'),(371,0,14,'C1'),(372,0,14,'C2'),(373,0,14,'C3'),(374,0,14,'C4'),(375,0,14,'C5'),(376,0,14,'C6'),(377,0,14,'C7'),(378,0,14,'C8'),(379,0,14,'C9'),(380,0,14,'C10'),(381,0,14,'D1'),(382,0,14,'D2'),(383,0,14,'D3'),(384,0,14,'D4'),(385,0,14,'D5'),(386,0,14,'D6'),(387,0,14,'D7'),(388,0,14,'D8'),(389,0,14,'D9'),(390,0,14,'D10'),(391,0,14,'E1'),(392,0,14,'E2'),(393,0,14,'E3'),(394,0,14,'E4'),(395,0,14,'E5'),(396,0,14,'E6'),(397,0,14,'E7'),(398,0,14,'E8'),(399,0,14,'E9'),(400,0,14,'E10'),(401,0,15,'A1'),(402,0,15,'A2'),(403,0,15,'A3'),(404,0,15,'A4'),(405,0,15,'A5'),(406,0,15,'A6'),(407,0,15,'A7'),(408,0,15,'A8'),(409,0,15,'A9'),(410,0,15,'A10'),(411,0,15,'B1'),(412,0,15,'B2'),(413,0,15,'B3'),(414,0,15,'B4'),(415,0,15,'B5'),(416,0,15,'B6'),(417,0,15,'B7'),(418,0,15,'B8'),(419,0,15,'B9'),(420,0,15,'B10'),(421,0,15,'C1'),(422,0,15,'C2'),(423,0,15,'C3'),(424,0,15,'C4'),(425,0,15,'C5'),(426,0,15,'C6'),(427,0,15,'C7'),(428,0,15,'C8'),(429,0,15,'C9'),(430,0,15,'C10'),(431,0,15,'D1'),(432,0,15,'D2'),(433,0,15,'D3'),(434,0,15,'D4'),(435,0,15,'D5'),(436,0,15,'D6'),(437,0,15,'D7'),(438,0,15,'D8'),(439,0,15,'D9'),(440,0,15,'D10'),(441,0,15,'E1'),(442,0,15,'E2'),(443,0,15,'E3'),(444,0,15,'E4'),(445,0,15,'E5'),(446,0,15,'E6'),(447,0,15,'E7'),(448,0,15,'E8'),(449,0,15,'E9'),(450,0,15,'E10');
/*!40000 ALTER TABLE `Asiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Boleto`
--

DROP TABLE IF EXISTS `Boleto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Boleto` (
  `id_boleto` int(11) NOT NULL,
  `precio` float DEFAULT NULL,
  `sucursal_id` int(11) DEFAULT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `proyeccion_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_boleto`),
  KEY `fk_sucursal_id` (`sucursal_id`),
  KEY `fk_cliente_id` (`cliente_id`),
  KEY `fk_proyeccion2_id` (`proyeccion_id`),
  CONSTRAINT `fk_cliente_id` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente` (`id_cliente`),
  CONSTRAINT `fk_proyeccion2_id` FOREIGN KEY (`proyeccion_id`) REFERENCES `Proyeccion` (`id_proyeccion`),
  CONSTRAINT `fk_sucursal_id` FOREIGN KEY (`sucursal_id`) REFERENCES `Sucursal` (`id_sucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Boleto`
--

LOCK TABLES `Boleto` WRITE;
/*!40000 ALTER TABLE `Boleto` DISABLE KEYS */;
INSERT INTO `Boleto` VALUES (1,70,1,1,1),(2,70,1,2,1),(3,70,1,3,1);
/*!40000 ALTER TABLE `Boleto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cliente`
--

DROP TABLE IF EXISTS `Cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cliente` (
  `id_cliente` int(11) NOT NULL,
  `correo` varchar(40) DEFAULT NULL,
  `datos_bancarios` varchar(40) DEFAULT NULL,
  `boleto_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  KEY `fk_boleto_id` (`boleto_id`),
  CONSTRAINT `fk_boleto_id` FOREIGN KEY (`boleto_id`) REFERENCES `Boleto` (`id_boleto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cliente`
--

LOCK TABLES `Cliente` WRITE;
/*!40000 ALTER TABLE `Cliente` DISABLE KEYS */;
INSERT INTO `Cliente` VALUES (1,'cliente1@example.com','5267772163883448',1),(2,'cliente2@example.com','5267772163883449',2),(3,'cliente3@example.com','5267772163883450',3);
/*!40000 ALTER TABLE `Cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pelicula`
--

DROP TABLE IF EXISTS `Pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pelicula` (
  `id_pelicula` int(11) NOT NULL,
  `nombre_pelicula` varchar(20) DEFAULT NULL,
  `director` varchar(40) DEFAULT NULL,
  `clasificacion` varchar(5) DEFAULT NULL,
  `idioma` varchar(10) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `proyeccion_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pelicula`),
  KEY `fk_proyeccion4_id` (`proyeccion_id`),
  CONSTRAINT `fk_proyeccion4_id` FOREIGN KEY (`proyeccion_id`) REFERENCES `Proyeccion` (`id_proyeccion`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pelicula`
--

LOCK TABLES `Pelicula` WRITE;
/*!40000 ALTER TABLE `Pelicula` DISABLE KEYS */;
INSERT INTO `Pelicula` VALUES (1,'E.T','Steven Spielberg','A','Castellano',114,1),(2,'Barbie','Greta Gerwig','A','Castellano',120,4),(3,'Gran Torino','Clint Eastwood','B','Ingles',130,1),(4,'La noche del demonio','Steven Spielberg','A','Castellano',114,7),(5,'A Quiet Place','John Krasinski','PG-13','Ingles',120,10),(6,'Spider-Man','Jon Watts','PG-13','Castellano',130,1),(7,'Free Guy','Shawn Levy','PG-13','Inglés',115,7),(8,'Cruella','Craig Gillespie','PG-13','Inglés',134,8),(9,'The Suicide Squad','James Gunn','R','Inglés',132,9),(10,'Black Adam','Jaume Collet-Serra','PG-13','Inglés',110,10);
/*!40000 ALTER TABLE `Pelicula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Proyeccion`
--

DROP TABLE IF EXISTS `Proyeccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Proyeccion` (
  `id_proyeccion` int(11) NOT NULL,
  `horario` time DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `pelicula_id` int(11) DEFAULT NULL,
  `sucursal_id` int(11) DEFAULT NULL,
  `sala_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_proyeccion`),
  KEY `fk_pelicula_id` (`pelicula_id`),
  KEY `fk_sucursal3_id` (`sucursal_id`),
  KEY `fk_sala2_id` (`sala_id`),
  CONSTRAINT `fk_pelicula_id` FOREIGN KEY (`pelicula_id`) REFERENCES `Pelicula` (`id_pelicula`),
  CONSTRAINT `fk_sala2_id` FOREIGN KEY (`sala_id`) REFERENCES `Sala` (`id_sala`),
  CONSTRAINT `fk_sucursal3_id` FOREIGN KEY (`sucursal_id`) REFERENCES `Sucursal` (`id_sucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Proyeccion`
--

LOCK TABLES `Proyeccion` WRITE;
/*!40000 ALTER TABLE `Proyeccion` DISABLE KEYS */;
INSERT INTO `Proyeccion` VALUES (1,'09:00:00','2023-07-05',1,1,1),(2,'10:00:00','2023-07-05',1,1,2),(3,'11:30:00','2023-07-05',1,1,3),(4,'13:30:00','2023-07-05',2,1,4),(5,'15:30:00','2023-07-05',2,1,5),(6,'18:30:00','2023-07-05',2,1,6),(7,'19:30:00','2023-07-05',4,1,1),(8,'20:30:00','2023-07-05',4,1,2),(9,'20:30:00','2023-07-05',4,1,3),(10,'09:00:00','2023-07-05',5,2,7),(11,'10:00:00','2023-07-05',5,2,8),(12,'11:30:00','2023-07-05',5,2,9),(13,'13:30:00','2023-07-05',6,2,10),(14,'16:30:00','2023-07-05',6,2,11),(15,'18:30:00','2023-07-05',6,2,12),(16,'19:30:00','2023-07-05',7,2,7),(17,'20:00:00','2023-07-05',7,2,8),(18,'20:30:00','2023-07-05',7,2,9),(19,'09:00:00','2023-07-05',8,3,13),(20,'10:00:00','2023-07-05',8,3,14),(21,'11:30:00','2023-07-05',8,3,15),(22,'13:30:00','2023-07-05',9,3,16),(23,'15:30:00','2023-07-05',9,3,17),(24,'18:30:00','2023-07-05',9,3,18),(25,'19:30:00','2023-07-05',10,3,13),(26,'20:30:00','2023-07-05',10,3,14),(27,'20:30:00','2023-07-05',10,3,15);
/*!40000 ALTER TABLE `Proyeccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sala`
--

DROP TABLE IF EXISTS `Sala`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sala` (
  `id_sala` int(11) NOT NULL,
  `no_asientos` int(11) DEFAULT NULL,
  `tipo_sala` tinyint(1) DEFAULT NULL,
  `sucursal_id` int(11) DEFAULT NULL,
  `proyeccion_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_sala`),
  KEY `fk_sucursal2_id` (`sucursal_id`),
  KEY `fk_proyeccion3_id` (`proyeccion_id`),
  CONSTRAINT `fk_proyeccion3_id` FOREIGN KEY (`proyeccion_id`) REFERENCES `Proyeccion` (`id_proyeccion`),
  CONSTRAINT `fk_sucursal2_id` FOREIGN KEY (`sucursal_id`) REFERENCES `Sucursal` (`id_sucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sala`
--

LOCK TABLES `Sala` WRITE;
/*!40000 ALTER TABLE `Sala` DISABLE KEYS */;
INSERT INTO `Sala` VALUES (1,50,0,1,1),(2,50,0,1,2),(3,50,0,1,3),(4,50,0,1,4),(5,50,0,1,5),(6,50,1,1,6),(7,50,0,2,10),(8,50,0,2,10),(9,50,0,2,1),(10,50,0,2,13),(11,50,0,2,14),(12,50,1,2,15),(13,50,0,3,19),(14,50,0,3,20),(15,50,0,3,21),(16,50,0,3,22),(17,50,0,3,23),(18,50,1,3,24);
/*!40000 ALTER TABLE `Sala` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sucursal`
--

DROP TABLE IF EXISTS `Sucursal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sucursal` (
  `id_sucursal` int(11) NOT NULL,
  `ciudad` varchar(10) DEFAULT NULL,
  `no_salas` int(11) DEFAULT NULL,
  `sala_id` int(11) DEFAULT NULL,
  `proyeccion_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_sucursal`),
  KEY `fk_sala_id` (`sala_id`),
  KEY `fk_proyeccion_id` (`proyeccion_id`),
  CONSTRAINT `fk_proyeccion_id` FOREIGN KEY (`proyeccion_id`) REFERENCES `Proyeccion` (`id_proyeccion`),
  CONSTRAINT `fk_sala_id` FOREIGN KEY (`sala_id`) REFERENCES `Sala` (`id_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sucursal`
--

LOCK TABLES `Sucursal` WRITE;
/*!40000 ALTER TABLE `Sucursal` DISABLE KEYS */;
INSERT INTO `Sucursal` VALUES (1,'Veracruz',6,1,1),(2,'Xalapa',6,1,1),(3,'Orizaba',6,1,1);
/*!40000 ALTER TABLE `Sucursal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-21 20:34:26
