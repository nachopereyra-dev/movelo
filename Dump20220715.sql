CREATE DATABASE  IF NOT EXISTS `movelo_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
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
  `weight` decimal(10,0) DEFAULT NULL,
  `height` int DEFAULT NULL,
  `width` int DEFAULT NULL,
  `description` longtext NOT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`id_service`),
  KEY `user_service_idx` (`id_user`),
  KEY `servicio_usuarioTipo_idx` (`id_shipment_category`),
  KEY `servicio_frecuencia_idx` (`id_frequency`),
  CONSTRAINT `servicio_frecuencia` FOREIGN KEY (`id_frequency`) REFERENCES `Frequency` (`id_frequency`),
  CONSTRAINT `servicio_usuario` FOREIGN KEY (`id_user`) REFERENCES `Users` (`id_user`),
  CONSTRAINT `servicio_usuarioTipo` FOREIGN KEY (`id_shipment_category`) REFERENCES `Shipments_type` (`id_shipment_category`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Services`
--

LOCK TABLES `Services` WRITE;
/*!40000 ALTER TABLE `Services` DISABLE KEYS */;
INSERT INTO `Services` VALUES (5,10,'San Carlos','Maldonado',1,1,100,100,100,'solo de mañana',50),(7,15,'Montevideo ','Buenos Aires',2,3,2,100,100,'Paquete internacional',300),(9,15,'Maldonado','Salto',1,2,5,100,100,'',300),(11,15,'Buenos Aires','La plata',1,2,10,100,100,'asdad',100),(19,22,'Montevideo','Buenos Aires',2,3,0,0,0,'hola soy una descripcion de 20 caracteres',0),(20,29,'Buenos aires','Salto',1,1,0,0,0,'kjlkhjjkhkjhkjhkhkhjkhkhkjhkhj',0),(21,29,'Montevideo','Maldonado',2,2,20,20,20,'asdasdasdasdasdasdsadasd',100),(22,29,'adad','adad',2,1,0,0,0,'asdasdasdasdasddadsdas',0),(23,29,'sdasdasd','sadasadsad',2,1,0,0,0,'asdsadasdasdsaddsadsd',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
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
  `gender` varchar(45) NOT NULL,
  `id_user_category` int NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  KEY `user_category_idx` (`id_user_category`),
  CONSTRAINT `user_category` FOREIGN KEY (`id_user_category`) REFERENCES `Users_type` (`id_user_category`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (10,'Emiliano','Castellano','emicastellano@gmail.com','12345678','1994-03-11 00:00:00','Masculino',2,'default.png'),(11,'Juan Ignacio','Pereyra Noguez','aaa@gmail.com','nacho48059584','1995-04-08 00:00:00','Femenino',1,'1655250336261_img_.png'),(12,'Ale','Robles','ale@gmail.com','$2a$10$HX3KQezu/bxkOUCAANKJw.RRAG7cb/YSEp8qzmrrWnkIKx3.1iIAW','1901-01-01 00:00:00','Masculino',3,'1655335815766_img_.png'),(13,'Gonzalo','Diaz','hhh@gmail.com','$2a$10$LVycYq52cwe.CZw7Yo3yfexXE.y5W2fWnXT8G./GWKvzrAld2i/6G','2003-03-01 00:00:00','Masculino',2,'default.png'),(14,'Juan Ignacio','Pereyra Noguez','nachopereyranoguez@gmail.com','$2a$10$h/PnBvjQCWuSDxm6oRo.demYCzz52ZYCM1396nprm3vNWK9s9ojLG','1995-04-08 00:00:00','Femenino',1,'1655698506638_img_.JPEG'),(15,'Emiliano','Castellano','ecastellano@gmail.com','$2a$10$ouYHxjF1OReCeL/psL3aEOKyyLKRCmIWCaEee.m8.UwGvmo.P6n.q','1994-03-11 00:00:00','Femenino',2,'1656889963042_img_.png'),(16,'Juan','Perez','juan@gmail.com','$2a$10$lHld6TIl/wAyZwBI/fx/bevYj/qioC3JDBD2ovQvFxCQSZwNSJn4u','1978-05-08 00:00:00','Femenino',2,'1656708474025_img_.png'),(17,'Daniel','Fuentes','daniel@gmail.com','$2a$10$vjVqw4w4JosbXSVFhzAfF.Ct0z/Y03Izcz0xUDPZObLvK1lLiz3T2','1980-01-01 00:00:00','Femenino',2,'default.png'),(18,'Pedro','Perez','pedro@gmail.com','$2a$10$HgZQiVEXmz62OwUwkXePFeKCnPe3LI4sljqkR9EtjZS1Jv7D5.HXm','2001-01-01 00:00:00','Femenino',2,'default.png'),(19,'Juan','perez','juani@gmail.com','$2a$10$dtDb5FLoORmHqEK3DuDclO/iBlZsQGoF95U7vlqHR8y16HN5VHvGC','2004-04-04 00:00:00','Masculino',2,'default.png'),(20,'Facudno','peres','facundo@gmail.com','$2a$10$sgk2MjtIeFRWyKoo19W46.vb/KTix7uEJuAh/KuaPT5fgxxInlCM2','3004-02-01 00:00:00','Femenino',2,'default.png'),(21,'Roberto','Mendez','Rober@gmail.com','$2a$10$yHVX9qHWE5pz6IvweEnis.yacuMwNeGK6apUP7dfxcW1k5yM3owmO','1991-01-01 00:00:00','Masculino',2,'default.png'),(22,'Luis','Lopez','luis@gmail.com','$2a$10$uP.midtrVQnScVtz2PsKVufwUFDzPMZ6d.Qu1kk5I/saLTvvvUTmy','2005-05-05 00:00:00','Femenino',2,'default.png'),(23,'Manuel','Pardo','manu@gmail.com','$2a$10$.2LdvYb15eK23N3YwjhVveXWKOZmlMhqrKX882excHYNX7y6eS55K','2005-07-08 00:00:00','Masculino',2,'default.png'),(24,'Patricio','Lopez','patricio@gmail.com','$2a$10$ylXeVO2SUWVHQxwqA2AVM.8k.JYOZVPvmfvmU3d5liQ2U94Qizh8a','1999-09-09 00:00:00','Masculino',3,'default.png'),(25,'Guzman','lopez','guzman@gmail.com','$2a$10$MgvrtPKM0s1jRkZhW16KI.fbEhwpzmFgWql8JEBw4MQBLo.Jk4zvS','2002-03-03 00:00:00','Femenino',3,'default.png'),(26,'Jorge','Mendez','jorge@gmail.com','$2a$10$Uh7UViVD9G2uSyGi9E1oZOyZ8./6UjagIk7ZVq3/L1ET/JrU984la','1995-04-08 00:00:00','Masculino',2,'default.png'),(27,'Gonzalo','Ramirez','gonza@gmail.com','$2a$10$60t9U/QmUwufa8ODnuikVeWh.LUFhBWRwuDCKKWPa.VHJt5Q63BOC','2003-02-01 00:00:00','Femenino',2,'default.png'),(28,'Rodrigo','Alvarez','rodri@gmail.com','$2a$10$V8FCHp6d8FDvaz.AJyhyJOhfNgktcC0/SID2x9DlS7TU6qEAHj3DW','1995-04-08 00:00:00','Masculino',3,'default.png'),(29,'Luciano','Mendez','luciano@gmail.com','$2a$10$seenH0gCl3n0eDlWNq3EguIlD7J3uLbHfThmcmZrUT89KR43Ba4jm','2019-03-28 00:00:00','Femenino',2,'default.png');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
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

-- Dump completed on 2022-07-15 18:05:07
