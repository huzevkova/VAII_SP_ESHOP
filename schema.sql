CREATE DATABASE  IF NOT EXISTS `vaii_sp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vaii_sp`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: vaii_sp
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `blog_posts`
--

DROP TABLE IF EXISTS `blog_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_posts` (
  `id_post` int NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `subtitle` varchar(150) NOT NULL,
  `body` text NOT NULL,
  `published` datetime NOT NULL,
  `book` int DEFAULT NULL,
  PRIMARY KEY (`id_post`),
  UNIQUE KEY `id_post_UNIQUE` (`id_post`),
  KEY `book_id_optional_idx` (`book`),
  CONSTRAINT `book_id_optional` FOREIGN KEY (`book`) REFERENCES `books` (`id_book`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_posts`
--

LOCK TABLES `blog_posts` WRITE;
/*!40000 ALTER TABLE `blog_posts` DISABLE KEYS */;
INSERT INTO `blog_posts` VALUES (4,'(Recenzia) Jediná romanca na ktorej záleží?','Pýcha a predsudok od Jane Austen','„Pýcha a predsudok“ od Jane Austen je dielo, ktoré prežilo generácie a dodnes patrí medzi najobľúbenějšie romány v literatútre. S ľahkosťou spája romantiku, humor a ostrú spoločenskú kritiku, čo z neho robí viac ako len typický ľúbostný príbeh. Ale má tento román skutočne potenciál byť jedinou romancou, na ktorej záleží? Pozrime sa naň bližšie.\nPríbeh sleduje Elizabeth Bennetovú, mladú a inteligentnú ženu, ktorá sa snaží zorientovať v komplikovaných vzťahoch, rodinných očakávaniach a spoločenských normách 19. storočia. Na druhej strane stojí pán Darcy – zdanlivo povýšený a chladný muž, ktorý v sebe ukrýva hlbokú citovosť. Konflikt medzi ich pýchou a predsudkami je jadrom príbehu, ktorý sa odohráva vo svete plnom hierarchií, kde sú manželstvá a majetky zásadnými faktormi pre budúcnosť jednotlivcov.\nJane Austen zobrazuje postavy s takou hľubkou, že sú rovnako živé dnes, ako boli v čase ich vzniku. Elizabeth nie je pasívnou hrdinkou – jej inteligencia a ostrý jazyk prinášajú do príbehu sviežosť a moderný pohľad na ženskú nezávislosť. Pán Darcy, na druhej strane, prechádza vnútornou premenou, čo ukazuje, že skutočná láska má moc meniť a rásť.\nOkrem pútavého príbehu má Pýcha a predsudok úžasný humor. Austen dokáže s jemnou iróniou poukazovať na slabosti človeka a absurdity svojej doby.\n\"Je pravda všeobecne uznávaná, že slobodný muž, ktorý má k dispozícii veľké majetky, musí hľadať manželku.\" Tento ikonický úvad nielen že nastavuje tón celého románu, ale tiež hovorí o vtedajších spoločenských normách.\nAustenova schopnosť vystihnúť komplexné charaktery a dynamiku vzťahov zabezpečuje, že si čitatelia často nachádzajú paralely medzi jej príbehom a svojimi vlastnými životmi. Vzťahy, nedorozumenia, a snaha nájsť skutočné spojenie s iným človekom – tieto témy sú univerzálne.','2024-11-24 14:16:36',6),(5,'(Recenzia) Cesta tam a zasa späť','Hobit od J.R.R. Tolkiena','„Hobit: Cesta tam a zase späť“, napísaná J.R.R. Tolkienom, patrí medzi najvýznamnejšie diela fantasy literatúry. Táto kniha nielenže slúži ako predohra k slávnej trilógii „Pán prsteňov“, ale je aj samostatným príbehom, ktorý uchváti čitateľov všetkých vekových kategórií. Pozrime sa bližšie na jej čaro a dôvod, prečo zostáva neustále populárna.\nHlavným hrdinom je Bilbo Bublík, obyčajný hobit, ktorý žije pohodlný život v Krajine. Jeho pokojnú existenciu naruší návšteva čarodejníka Gandalfa a skupiny trpaslíkov vedených Thorinom Pavézom. Ich cieľom je získať späť ukradnutý poklad od draka Šmaka, ktorý stráži Osamelú horu. Neochotný Bilbo sa k nim pripojí ako \"zlodej\", čo spustí sériu dobrodružstiev zahŕňajúcich trollov, pavúkov, elfov a osudové stretnutie s Glumom, kde Bilbo získa záhadný prsteň.\nTolkienov štýl písania je očarujúci. Rozprávačský tón je priateľský a prístupný, čo robí knihu ideálnou aj pre mladších čitateľov. Avšak, pod povrchom jednoduchého rozprávania sa skrýva bohatstvo symboliky a témy ako odvaha, priateľstvo a túžba po domove.\nKaždá postava v knihe je jedinečná a nezabudnuteľná. Bilbo prechádza významným vývojom - od nesmelého hobita po odvážneho hrdinu, ktorý dokáže čeliť nebezpečenstvám a prekvapiť dokonca aj sám seba. Trpaslíci, hoci ich je až trinásť, majú každý svoje vlastné charakteristické črty. Gandalf prináša múdrosť a humor, zatiaľ čo Šmak je dokonalým stelesnením arogantného a chamtivého antagonistu.\nJedným z najsilnejších aspektov knihy je Tolkienova schopnosť vytvoriť detailný a pútavý svet. Opisy Krajiny, Temného hvozdu či samotnej Osamelej hory ožívajú pred očami čitateľa. Stredozem nie je len kulisa, ale takmer živý organizmus, ktorý sa stáva neoddeliteľnou súčasťou príbehu.\nHobit je viac než len príbeh o ceste za pokladom. Je to oslava odvahy prekročiť hranice pohodlia a objaviť, kým naozaj sme. Kniha si uchováva nadčasový pôvab a ponúka niečo nové pri každom čítaní.','2024-11-24 14:17:48',1),(6,'Nadchádzajúce vydanie:','Očakávané vydanie novej knihy Brandona Sandersona!','Fanúšikovia fantasy literatúry sa majú na čo tešiť – Brandon Sanderson, jeden z najpopulárnejších autorov žánru, pripravuje vydanie svojej novej knihy. Tento spisovateľ, známy najmä vďaka sérii „Mistborn“ a epickej sérii „The Stormlight Archive“, opäť prekvapuje svojím neúštálým tempom tvorby.\nPripravovaná kniha sĺubuje priniesť únikátnu kombináciu akcie, magických systémov a hlbokých postáv, ktoré sú typické pre Sandersonov štýl. Hoci presné detaily o deji zostávajú tajomstvom, autor naznačil, že pôjde o samostatnú knihu, ktorá ponúkne nový pohľad na jeho schopnosť budovať svety.\nSanderson si svojou precíznou prácou s magickými systémami a schopnosťou vytvárať fascinujúce a realistické postavy získal milióny fanúšikov po celom svete. Jeho knihy sú známe nielen svojou dĺžkou, ale aj hĺbkou a detailami, ktoré dokážu uspokojiť aj tých najnáročnejších čitateľov.\nVydanie knihy je naplánované na jar budúceho roka a očakávania sú vysoké. Ak patríte medzi priaznivcov epického fantasy, určite si tento titul poznačte do svojho zoznamu čítania.','2024-11-24 14:19:03',NULL);
/*!40000 ALTER TABLE `blog_posts` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `blog_posts_BEFORE_INSERT` BEFORE INSERT ON `blog_posts` FOR EACH ROW BEGIN
	SET new.published = sysdate();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `book_series`
--

DROP TABLE IF EXISTS `book_series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_series` (
  `id_series` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `number_of_books` tinyint NOT NULL,
  PRIMARY KEY (`id_series`),
  UNIQUE KEY `id_series_UNIQUE` (`id_series`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_series`
--

LOCK TABLES `book_series` WRITE;
/*!40000 ALTER TABLE `book_series` DISABLE KEYS */;
INSERT INTO `book_series` VALUES (1,'Pán Prsteňov',3),(2,'Medzi hviezdami',4);
/*!40000 ALTER TABLE `book_series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_to_order`
--

DROP TABLE IF EXISTS `book_to_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_to_order` (
  `id_book` int NOT NULL,
  `id_order` int NOT NULL,
  `count` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_book`,`id_order`),
  KEY `order_id_idx` (`id_order`),
  CONSTRAINT `book_order_id` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`),
  CONSTRAINT `order_id` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id_order`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_to_order`
--

LOCK TABLES `book_to_order` WRITE;
/*!40000 ALTER TABLE `book_to_order` DISABLE KEYS */;
INSERT INTO `book_to_order` VALUES (1,1,1),(1,17,1),(3,8,1),(3,10,1),(3,17,1),(13,1,1);
/*!40000 ALTER TABLE `book_to_order` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `book_to_order_AFTER_INSERT` AFTER INSERT ON `book_to_order` FOR EACH ROW BEGIN
	DECLARE x_price DECIMAL(10,2);
    SELECT price INTO x_price FROM books WHERE id_book = NEW.id_book;
    
    UPDATE orders
    SET 
        price = price + x_price,
        number_of_items = number_of_items + 1
    WHERE id_order = NEW.id_order;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `book_to_order_AFTER_UPDATE` AFTER UPDATE ON `book_to_order` FOR EACH ROW BEGIN
	DECLARE x_price DECIMAL(10,2);
	IF (NEW.count != OLD.count) THEN 
		SELECT price INTO x_price FROM books WHERE id_book = NEW.id_book;
		UPDATE orders
		SET 
			price = price - x_price * OLD.count + x_price * NEW.count,
			number_of_items = number_of_items - OLD.count + NEW.count
		WHERE id_order = NEW.id_order;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `book_to_order_AFTER_DELETE` AFTER DELETE ON `book_to_order` FOR EACH ROW BEGIN
	DECLARE x_price DECIMAL(10,2);
    SELECT price INTO x_price FROM books WHERE id_book = OLD.id_book;
    
    UPDATE orders
    SET 
        price = price - x_price * OLD.count,
        number_of_items = number_of_items - OLD.count
    WHERE id_order = OLD.id_order;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `book_to_series`
--

DROP TABLE IF EXISTS `book_to_series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_to_series` (
  `id_book` int NOT NULL,
  `id_series` int NOT NULL,
  `part` tinyint NOT NULL,
  PRIMARY KEY (`id_book`,`id_series`),
  KEY `series_idx` (`id_series`),
  CONSTRAINT `book` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`),
  CONSTRAINT `series` FOREIGN KEY (`id_series`) REFERENCES `book_series` (`id_series`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_to_series`
--

LOCK TABLES `book_to_series` WRITE;
/*!40000 ALTER TABLE `book_to_series` DISABLE KEYS */;
INSERT INTO `book_to_series` VALUES (3,1,1),(4,1,2),(5,1,3),(13,2,1);
/*!40000 ALTER TABLE `book_to_series` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id_book` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `original_title` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `author` varchar(100) NOT NULL,
  `language` varchar(50) NOT NULL,
  `page_count` int NOT NULL,
  `publish_year` smallint NOT NULL,
  `publisher` varchar(50) NOT NULL,
  `size` varchar(15) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `cover` varchar(20) NOT NULL,
  `image` int DEFAULT NULL,
  `isbn` varchar(30) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id_book`),
  UNIQUE KEY `id_book_UNIQUE` (`id_book`),
  KEY `book_image_idx` (`image`),
  CONSTRAINT `book_image` FOREIGN KEY (`image`) REFERENCES `images` (`id_image`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'Hobit','The Hobbit','J.R.R. Tolkien','slovenský',232,2012,'Slovart','15,4×23,8',14.99,'pevná',1,'9788055606361','Hobit, alebo, cesta tam a späť v origináli The Hobbit, or There and Back Again, je fantasy román J. R. R. Tolkiena vydaný 21. septembra 1937. V slovenčine vyšiel prvýkrát v roku 1973 (pod názvom \"Hobbiti\"), v češtine v roku 1979.\nRomán bol pôvodne vydaný ako príbeh pre deti v tradícii rozprávok a plní úlohu akejsi predlohy k Pánovi prsteňov (napísanému medzi rokmi 1939 a 1948 a vydanému v rokoch 1954 a 1955). Charakteristické postavy, artefakty, zápletka a dejový príbeh knihy v podstate predurčili základné znaky neskoršej fantasy, ktorá sa rozvíjala od konca päťdesiatych rokov.'),(3,'Pán Prsteňov - Spoločenstvo Prsteňa','Lord of the Rings - The Fellowship of The Ring','J.R.R. Tolkien','slovenský',456,2012,'Slovart','15,3×23,7',19.99,'pevná',2,'9788055606347','Pán prsteňov (angl. Lord of the Rings, často skracované ako LOTR) je epická trilógia v štýle fantasy, ktorú napísal J. R. R. Tolkien. Je to príbeh o priateľstve a svornosti. Je jedným z najznámejších literárnych diel 20. storočia.\nPráce na trilógii si vyžiadali celých 13 rokov a druhá svetová vojna zasiahla a poznamenala morálne symbolický význam deja.[chýba zdroj] V roku 1949 bola trilógia dopísaná, sága o boji dobra so zlom na 1 300 stranách so 134-stranovým dodatkom. Dodatok obsahuje podrobné údaje o jazykoch dejiska príbehu, bájnej Stredozeme, chronológiu za 6462 rokov, prehľad dynastií a množstvo iného faktografického materiálu, utriedeného s vedeckou presnosťou.'),(4,'Pán Prsteňov - Dve veže','Lord of the Rings - The Two Towers','J.R.R. Tolkien','slovenský',376,2012,'Slovart','15,3×23,7',19.99,'pevná',3,'9788055606323','Pán prsteňov (angl. Lord of the Rings, často skracované ako LOTR) je epická trilógia v štýle fantasy, ktorú napísal J. R. R. Tolkien. Je to príbeh o priateľstve a svornosti. Je jedným z najznámejších literárnych diel 20. storočia.\nPráce na trilógii si vyžiadali celých 13 rokov a druhá svetová vojna zasiahla a poznamenala morálne symbolický význam deja.[chýba zdroj] V roku 1949 bola trilógia dopísaná, sága o boji dobra so zlom na 1 300 stranách so 134-stranovým dodatkom. Dodatok obsahuje podrobné údaje o jazykoch dejiska príbehu, bájnej Stredozeme, chronológiu za 6462 rokov, prehľad dynastií a množstvo iného faktografického materiálu, utriedeného s vedeckou presnosťou.'),(5,'Pán Prsteňov - Návrat Kráľa','Lord of the Rings - The Return of the King','J.R.R. Tolkien','slovenský',432,2012,'Slovart','15,3×23,7',19.99,'pevná',4,'9788055606309','Pán prsteňov (angl. Lord of the Rings, často skracované ako LOTR) je epická trilógia v štýle fantasy, ktorú napísal J. R. R. Tolkien. Je to príbeh o priateľstve a svornosti. Je jedným z najznámejších literárnych diel 20. storočia.\nPráce na trilógii si vyžiadali celých 13 rokov a druhá svetová vojna zasiahla a poznamenala morálne symbolický význam deja.[chýba zdroj] V roku 1949 bola trilógia dopísaná, sága o boji dobra so zlom na 1 300 stranách so 134-stranovým dodatkom. Dodatok obsahuje podrobné údaje o jazykoch dejiska príbehu, bájnej Stredozeme, chronológiu za 6462 rokov, prehľad dynastií a množstvo iného faktografického materiálu, utriedeného s vedeckou presnosťou.'),(6,'Pýcha a Predsudok','Pride and Prejudice','Jane Austen','slovenský',408,2019,'Slovart','13,5×20,0',15.99,'pevná',NULL,'9788055639390','Pýcha a predsudok je najznámejší román anglickej spisovateľky Jane Austenovej a jeden z najpopulárnejších románov anglickej literatúry vôbec. Prvú verziu románu Austenová napísala v rokoch 1796 – 1797 pod názvom Prvé dojmy (First Impressions), v tejto podobe ho však nikdy nevydala, pretože sa preň Austenovej nepodarilo nájsť vydavateľa. Po vydaní románu Rozum a cit sa k rukopisu Austenová vrátila, prepracovala ho, takže bol román nakoniec publikovaný 28. januára 1813 pod názvom „Pýcha a predsudok“.\nHlavné postavy románu sú mladá, dôvtipná a citlivá Elizabeth Benettová, stelesňujúca samu autorku, a inteligentný, ale neprístupný a navonok necitlivý pán Fitzwilliam Darcy. Román popisuje postupné prekonávanie vlastnej pýchy a zbavovanie sa predsudkov zo strany oboch hrdinov, ktoré - bez toho aby to sami vedeli - prekonáva predovšetkým ich vzájomná láska.'),(7,'Pride and Prejudice',NULL,'Jane Austen','anglický',300,2013,'Harper Collins','11,0×17,5',3.99,'brošovaná',5,'9780007350773','Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness. Mr Bennet, owner of the Longbourn estate in Hertfordshire, has five daughters, but his property is entailed and can only be passed to a male heir. His wife also lacks an inheritance, so his family faces becoming poor upon his death. Thus, it is imperative that at least one of the daughters marry well to support the others, which is a primary motivation driving the plot.'),(8,'Vražda v Orient Expresu','Murder on the Orient Express','Agatha Christie','český',256,2013,'Kalibr','13,8×21,7',17.99,'pevná',NULL,'9788024277349','Vražda v Orient expresu je detektivní román anglické spisovatelky Agathy Christie. Kniha byla poprvé vydána 1. ledna 1934. Hlavní postavou příběhu je belgický detektiv Hercule Poirot. V českém překladu začal vycházet na pokračování 10. července 1935 v deníku Lidové noviny.'),(9,'Vraždy podle abecedy','The ABC Murders','Agatha Christie','český',248,2021,'Kalibr','13,0×21,0',16.99,'pevná',6,'9788024272603','Vraždy podle abecedy je detektivní román britské spisovatelky Agathy Christie známé pro své kriminální příběhy. Poprvé byl publikován v lednu roku 1936 a dočkal se velkého úspěchu. Dodnes patří mezi nejznámější a nejúspěšnější autorčina díla. Řadí se rovněž mezi první knihy, kde řádí sériový vrah[1]. Jedná se o jednu z mnoha knih Christie, kde v hlavní roli vystupuje slavný belgický detektiv Hercule Poirot. Dále se zde objevuje i Poirotův nejbližší přítel, kapitán Arthur Hastings, který zastává v příběhu úlohu vypravěče, ostatně jako v několika dalších knihách této spisovatelky.'),(10,'The Time Traveler\'s Wife',NULL,'Audrey Niffenegger','anglický',528,2016,'Vintage','13,0x19,5',13.99,'brožovaná',NULL,'9780099464464',NULL),(13,'Kadeti','Skyward','Brandon Sanderson','slovenský',487,2021,'Slovart','15,0x24,0',20.99,'brožovaná',12,'9788055656489','Popis knihy - zmenený');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `books_AFTER_DELETE` AFTER DELETE ON `books` FOR EACH ROW BEGIN
	delete from book_to_order where id_book = old.id_book;
    delete from book_to_series where id_book = old.id_book;
    delete from genres_to_book where id_book = old.id_book;
    delete from wishlist where id_book = old.id_book;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `delivery_options`
--

DROP TABLE IF EXISTS `delivery_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_options` (
  `id_delivery` int NOT NULL AUTO_INCREMENT,
  `type` varchar(55) NOT NULL,
  `price` double(10,2) NOT NULL,
  PRIMARY KEY (`id_delivery`),
  UNIQUE KEY `iddelivery_options_UNIQUE` (`id_delivery`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_options`
--

LOCK TABLES `delivery_options` WRITE;
/*!40000 ALTER TABLE `delivery_options` DISABLE KEYS */;
INSERT INTO `delivery_options` VALUES (1,'Doručenie na adresu - Slovenská pošta',2.99),(2,'Doručenie na adresu - Packeta',2.99),(3,'Doručenie na adresu - GLS',3.99);
/*!40000 ALTER TABLE `delivery_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id_genre` int NOT NULL AUTO_INCREMENT,
  `genre_name` varchar(45) NOT NULL,
  PRIMARY KEY (`id_genre`),
  UNIQUE KEY `id_genre_UNIQUE` (`id_genre`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Fantasy'),(2,'Sci-fi'),(3,'Romantika'),(4,'Biografia'),(5,'Učebnica'),(6,'Detektívka'),(7,'História'),(8,'Pre deti'),(9,'Krimi');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres_to_book`
--

DROP TABLE IF EXISTS `genres_to_book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres_to_book` (
  `id_book` int NOT NULL,
  `id_genre` int NOT NULL,
  PRIMARY KEY (`id_book`,`id_genre`),
  KEY `genre_idx` (`id_genre`),
  CONSTRAINT `id_book` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`),
  CONSTRAINT `id_genre` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id_genre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres_to_book`
--

LOCK TABLES `genres_to_book` WRITE;
/*!40000 ALTER TABLE `genres_to_book` DISABLE KEYS */;
INSERT INTO `genres_to_book` VALUES (1,1),(3,1),(4,1),(5,1),(10,2),(6,3),(7,3),(10,3),(8,6),(9,6);
/*!40000 ALTER TABLE `genres_to_book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id_image` int NOT NULL AUTO_INCREMENT,
  `path` varchar(45) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_image`),
  UNIQUE KEY `idimages_UNIQUE` (`id_image`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'hobit.jpg','Hobit'),(2,'pan_prstenov_1.jpg','Pán Prsteňov 1'),(3,'pan_prstenov_2.jpg','Pán prsteňov 2'),(4,'pan_prstenov_3.jpg','Pán prsteňov 3'),(5,'pride_and_prejudice.jpg','Pride and Prejudice'),(6,'vrazdy_podle_abecedy.jpg','Vraždy podle abecedy'),(12,'kadeti.jpg','Kadeti 1');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `images_BEFORE_DELETE` BEFORE DELETE ON `images` FOR EACH ROW BEGIN
	UPDATE books
    SET image = null
    WHERE image = OLD.id_image;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `id_status` int NOT NULL AUTO_INCREMENT,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`id_status`),
  UNIQUE KEY `id_status_UNIQUE` (`id_status`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
INSERT INTO `order_status` VALUES (1,'v košíku'),(2,'objednané'),(3,'odoslané'),(4,'dokončené');
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_order` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `purchase_date` datetime DEFAULT NULL,
  `status` int NOT NULL,
  `number_of_items` int NOT NULL,
  `delivery` int DEFAULT NULL,
  `payment` int DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  UNIQUE KEY `id_order_UNIQUE` (`id_order`),
  KEY `order_user_idx` (`id_user`),
  KEY `order_status_idx` (`status`),
  CONSTRAINT `order_status` FOREIGN KEY (`status`) REFERENCES `order_status` (`id_status`),
  CONSTRAINT `order_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,2,39.97,'2025-01-01 20:08:56',2,2,1,2),(8,2,23.98,'2025-01-01 21:49:25',2,1,1,2),(9,1,0.00,NULL,1,0,NULL,NULL),(10,3,19.99,NULL,1,1,NULL,NULL),(11,4,0.00,NULL,1,0,NULL,NULL),(12,5,0.00,NULL,1,0,NULL,NULL),(13,6,0.00,NULL,1,0,NULL,NULL),(14,7,0.00,NULL,1,0,NULL,NULL),(15,2,0.00,NULL,1,0,NULL,NULL),(17,17,37.97,'2025-01-08 19:50:45',4,2,1,1),(18,17,0.00,NULL,1,0,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `orders_BEFORE_UPDATE` BEFORE UPDATE ON `orders` FOR EACH ROW BEGIN
    DECLARE payment DECIMAL(10,2);
    DECLARE delivery DECIMAL(10,2);
    DECLARE add_to_price DECIMAL(10,2);
    
    IF new.status = 2 THEN
		SET new.purchase_date = sysdate();
    END IF;
    
	IF ((OLD.payment is null && NEW.payment is not null) || (OLD.payment != NEW.payment)) THEN
        SELECT extra INTO payment FROM payment_options WHERE id_payment = NEW.payment;
	ELSE 
		SET payment = 0.0;
    END IF;
    
    IF ((OLD.delivery is null && NEW.delivery is not null) || (OLD.delivery != NEW.delivery)) THEN
        SELECT price INTO delivery FROM delivery_options WHERE id_delivery = NEW.delivery;
    ELSE 
		SET delivery = 0.0;
    END IF;
    
    SET NEW.price = NEW.price + delivery + payment;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `orders_AFTER_UPDATE` AFTER UPDATE ON `orders` FOR EACH ROW BEGIN
	IF(NEW.status > 1 and OLD.status = 1) THEN
		INSERT into orders
        VALUES(null, NEW.id_user, 0.00, null, 1, 0, null, null);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `orders_BEFORE_DELETE` BEFORE DELETE ON `orders` FOR EACH ROW BEGIN
	delete from book_to_order where id_order = old.id_order;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `payment_options`
--

DROP TABLE IF EXISTS `payment_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_options` (
  `id_payment` int NOT NULL AUTO_INCREMENT,
  `type` varchar(55) NOT NULL,
  `extra` double(10,2) NOT NULL,
  PRIMARY KEY (`id_payment`),
  UNIQUE KEY `id_payment_UNIQUE` (`id_payment`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_options`
--

LOCK TABLES `payment_options` WRITE;
/*!40000 ALTER TABLE `payment_options` DISABLE KEYS */;
INSERT INTO `payment_options` VALUES (1,'Platba prevodom',0.00),(2,'Dobierka',1.00);
/*!40000 ALTER TABLE `payment_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_passwords`
--

DROP TABLE IF EXISTS `user_passwords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_passwords` (
  `id_password` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_password`),
  UNIQUE KEY `idpasswords_UNIQUE` (`id_password`),
  UNIQUE KEY `id_user_UNIQUE` (`id_user`),
  CONSTRAINT `user_pass` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_passwords`
--

LOCK TABLES `user_passwords` WRITE;
/*!40000 ALTER TABLE `user_passwords` DISABLE KEYS */;
INSERT INTO `user_passwords` VALUES (6,1,'$2b$10$CWlwloDCkDPv3KNlsPFXUecy2PyLpT7EzFPY3k.Gdtm0HI0F.8i8K'),(7,2,'$2b$10$HBOzjXCgsil.aodboEPmouC4Qe7jrBtcUB2prDs1iSoK9kvLzZZaq'),(8,3,'$2b$10$kQfx02ueInQLOt0u.EbIfeN9VDGvGfC1cMcYGscg/SAwFgTJDgiP2'),(9,4,'$2b$10$04P4Nw0OYJ5Un1bklhLEEeRpeTCb/7Qk8zkiYOI/tmj6yESN8SM5G'),(10,5,'$2b$10$oQ5Ucr9OrUcOMzAL65xLKeSWd8g0.wtqvFQyFR1el40HTYsnUdgBi'),(11,6,'$2b$10$UESQb/F9gnET0E0Em96IOOFzY7CMJdG.INa69jB25cV4Bus779t/e'),(12,7,'$2b$10$HEeBQqhnqAQAYL6bcTwgCO/VZ49HrXngmGMCAyUuBb.mFCCc4Tg/m'),(18,17,'$2b$10$um7vM/9HtoQJDt/1ApvPQO9BLVcvJm6sNmfHm6Nt1iXdC4YozXHFW');
/*!40000 ALTER TABLE `user_passwords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `city_code` varchar(10) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `house_number` varchar(10) DEFAULT NULL,
  `registration_date` datetime NOT NULL,
  `type` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `idusers_UNIQUE` (`id_user`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Bianka Húževková','huzevkova@gmail.com','0940111222','Púchov','12345','Okružná','1','2024-11-29 15:55:20',1),(2,'Jeff Winger','jeff_winger@gmail.com','0940123123','Bratislava','81102','Ružinovská','3','2024-11-29 15:57:00',0),(3,'Annie Edisonová','annie.edison@gmail.com','0940333444','Košice','04001','Hlavná','12','2024-11-29 16:03:55',0),(4,'Britta Perry','britta.perry@gmail.com','0940555666','Žilina','01001','Mariánske Námestie','7','2024-11-29 16:05:44',0),(5,'Abed Nadir','abed_nadir123@gmail.com','0940777888','Prešov','08001','Hlavná','15','2024-11-29 16:06:58',0),(6,'Troy Barnes','troy.barnesss@gmail.com','0940999000','Nitra','94901','Štefánikova','20','2024-11-29 16:07:56',0),(7,'Shirley Bennettová','shirley.bennett@gmail.com','0940987654','Banská Bystrica','97401','Dolná','3','2024-11-29 16:08:55',0),(17,'Milan Mažgút','milan@gmail.com','0915371079','Terchová','1001','Vyšné Kamence','1','2025-01-08 19:47:21',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_BEFORE_INSERT` BEFORE INSERT ON `users` FOR EACH ROW BEGIN
	SET new.registration_date = sysdate();
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_AFTER_INSERT` AFTER INSERT ON `users` FOR EACH ROW BEGIN
	INSERT into orders
    VALUES (null, NEW.id_user, 0.00, null, 1, 0, null, null);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `wishlists`
--

DROP TABLE IF EXISTS `wishlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlists` (
  `id_user` int NOT NULL,
  `id_book` int NOT NULL,
  PRIMARY KEY (`id_user`,`id_book`),
  KEY `book_wishlist_idx` (`id_book`),
  CONSTRAINT `book_wishlist` FOREIGN KEY (`id_book`) REFERENCES `books` (`id_book`) ON DELETE CASCADE,
  CONSTRAINT `user_wishlist` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlists`
--

LOCK TABLES `wishlists` WRITE;
/*!40000 ALTER TABLE `wishlists` DISABLE KEYS */;
INSERT INTO `wishlists` VALUES (2,3),(2,13);
/*!40000 ALTER TABLE `wishlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vaii_sp'
--

--
-- Dumping routines for database 'vaii_sp'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-10 23:03:52
