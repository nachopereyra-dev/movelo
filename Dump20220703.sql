CREATE DATABASE  IF NOT EXISTS `movelo_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `movelo_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: movelo_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Frequency`
--

DROP TABLE IF EXISTS `Frequency`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Frequency` (
  `id_frequency` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_frequency`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Frequency`
--

LOCK TABLES `Frequency` WRITE;
/*!40000 ALTER TABLE `Frequency` DISABLE KEYS */;
INSERT INTO `Frequency` VALUES (1,'diario'),(2,'semanal'),(3,'mensual'),(4,'a coordinar');
/*!40000 ALTER TABLE `Frequency` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `id_order` int NOT NULL AUTO_INCREMENT,
  `date` varchar(45) NOT NULL,
  `id_user` int NOT NULL,
  `id_service` int NOT NULL,
  PRIMARY KEY (`id_order`),
  KEY `order_user_idx` (`id_user`),
  KEY `order_service_idx` (`id_service`),
  CONSTRAINT `order_service` FOREIGN KEY (`id_service`) REFERENCES `Services` (`id_service`),
  CONSTRAINT `order_user` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Services`
--

DROP TABLE IF EXISTS `Services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Services` (
  `id_service` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `origen` varchar(100) NOT NULL,
  `destination` varchar(100) NOT NULL,
  `id_shipment_category` int NOT NULL,
  `id_frequency` int NOT NULL,
  `weight` decimal(10,0) NOT NULL,
  `height` int NOT NULL,
  `width` int NOT NULL,
  `description` longtext,
  `price` int NOT NULL,
  PRIMARY KEY (`id_service`),
  KEY `user_service_idx` (`id_user`),
  KEY `servicio_usuarioTipo_idx` (`id_shipment_category`),
  KEY `servicio_frecuencia_idx` (`id_frequency`),
  CONSTRAINT `servicio_frecuencia` FOREIGN KEY (`id_frequency`) REFERENCES `Frequency` (`id_frequency`),
  CONSTRAINT `servicio_usuario` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id_user`),
  CONSTRAINT `servicio_usuarioTipo` FOREIGN KEY (`id_shipment_category`) REFERENCES `Shipments_type` (`id_shipment_category`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Services`
--

LOCK TABLES `Services` WRITE;
/*!40000 ALTER TABLE `Services` DISABLE KEYS */;
INSERT INTO `Services` VALUES (5,10,'San Carlos','Maldonado',1,1,100,100,100,'solo de mañana',50),(7,15,'Montevideo ','Buenos Aires',2,3,2,100,100,'Paquete internacional',300),(9,15,'Maldonado','Salto',1,2,5,100,100,'',300);
/*!40000 ALTER TABLE `Services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Shipments_type`
--

DROP TABLE IF EXISTS `Shipments_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Shipments_type` (
  `id_shipment_category` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_shipment_category`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shipments_type`
--

LOCK TABLES `Shipments_type` WRITE;
/*!40000 ALTER TABLE `Shipments_type` DISABLE KEYS */;
INSERT INTO `Shipments_type` VALUES (1,'local'),(2,'internacional');
/*!40000 ALTER TABLE `Shipments_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date` datetime NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `id_user_category` int DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_category_idx` (`id_user_category`),
  CONSTRAINT `user_category` FOREIGN KEY (`id_user_category`) REFERENCES `Users_type` (`id_user_category`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (10,'Emiliano','Castellano','emicastellano@gmail.com','12345678','1994-03-11 00:00:00','Masculino',2,'default.png'),(11,'Juan Ignacio','Pereyra Noguez','aaa@gmail.com','nacho48059584','1995-04-08 00:00:00','Femenino',1,'1655250336261_img_.png'),(12,'Ale','Robles','ale@gmail.com','$2a$10$HX3KQezu/bxkOUCAANKJw.RRAG7cb/YSEp8qzmrrWnkIKx3.1iIAW','1901-01-01 00:00:00','Masculino',3,'1655335815766_img_.png'),(13,'Gonzalo','Diaz','hhh@gmail.com','$2a$10$LVycYq52cwe.CZw7Yo3yfexXE.y5W2fWnXT8G./GWKvzrAld2i/6G','2003-03-01 00:00:00','Masculino',2,'default.png'),(14,'Juan Ignacio','Pereyra Noguez','nachopereyranoguez@gmail.com','$2a$10$h/PnBvjQCWuSDxm6oRo.demYCzz52ZYCM1396nprm3vNWK9s9ojLG','1995-04-08 00:00:00','Femenino',1,'1655698506638_img_.JPEG'),(15,'Emiliano','Castellano','ecastellano@gmail.com','$2a$10$ouYHxjF1OReCeL/psL3aEOKyyLKRCmIWCaEee.m8.UwGvmo.P6n.q','1994-03-11 00:00:00','Femenino',2,'1656889963042_img_.png'),(16,'Juan','Perez','juan@gmail.com','$2a$10$lHld6TIl/wAyZwBI/fx/bevYj/qioC3JDBD2ovQvFxCQSZwNSJn4u','1978-05-08 00:00:00','Femenino',2,'1656708474025_img_.png'),(17,'Daniel','Fuentes','daniel@gmail.com','$2a$10$vjVqw4w4JosbXSVFhzAfF.Ct0z/Y03Izcz0xUDPZObLvK1lLiz3T2','1980-01-01 00:00:00','Femenino',2,'default.png');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users_type`
--

DROP TABLE IF EXISTS `Users_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users_type` (
  `id_user_category` int NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_user_category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users_type`
--

LOCK TABLES `Users_type` WRITE;
/*!40000 ALTER TABLE `Users_type` DISABLE KEYS */;
INSERT INTO `Users_type` VALUES (1,'Admin'),(2,'Vendedor'),(3,'Comprador');
/*!40000 ALTER TABLE `Users_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-03 20:14:52
