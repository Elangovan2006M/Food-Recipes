-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: foodydb
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `password_changed` bit(1) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `admin_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (3,'2025-05-23 10:37:41.489057','test@gmail.com','123',_binary '\0','admin','Test');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instruction`
--

DROP TABLE IF EXISTS `instruction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instruction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `step_description` text,
  `recipe_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcd28dqk4w4civw4jbswqhde2o` (`recipe_id`),
  CONSTRAINT `FKcd28dqk4w4civw4jbswqhde2o` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instruction`
--

LOCK TABLES `instruction` WRITE;
/*!40000 ALTER TABLE `instruction` DISABLE KEYS */;
INSERT INTO `instruction` VALUES (1,'boil pasta until al dente and set aside\nchop vegetables like bell peppers, zucchini, carrots, and broccoli\nheat olive oil in a pan and sauté garlic until fragrant\nadd chopped vegetables and cook until slightly tender\nseason with salt, pepper, and Italian herbs\nadd cherry tomatoes and a splash of pasta water\ntoss in the cooked pasta and mix well\noptionally add a splash of cream or sprinkle with Parmesan cheese\ngarnish with fresh basil before serving',1),(2,'heat butter in a pan\n add chopped onions and sauté until golden\n add ginger-garlic paste and cook until raw smell disappears\n add pureed tomatoes and cook until the oil separates\n add spices like chili powder, turmeric, garam masala, and salt\n cook the masala for a few minutes, stirring often\n add cream and mix well to form a smooth gravy\n add paneer cubes and simmer for 5–7 minutes\n crush kasuri methi and sprinkle on top\n garnish with fresh coriander and an extra drizzle of cream before serving',2),(3,'toast slices of bread until golden and crisp\n cut ripe avocados, remove seeds, and scoop the flesh into a bowl\n mash the avocado with a fork to your desired consistency\n add salt, pepper, and a squeeze of lemon juice to the mash\n spread the mashed avocado evenly on the toasted bread\n optionally drizzle with olive oil and sprinkle chili flakes or herbs\n add toppings like sliced tomatoes, poached egg, or microgreens if desired\n serve immediately for best taste and texture',3),(4,'rinse sushi rice thoroughly and cook until tender\n season the cooked rice with rice vinegar, sugar, and salt, then let it cool\n place a bamboo mat on a clean surface and lay a sheet of nori on top\n spread a thin layer of sushi rice evenly over the nori, leaving space at the edges\n add desired fillings like sliced fish, cucumber, avocado, or crab sticks in a line near one edge\n roll the sushi tightly using the mat, applying gentle pressure as you go\n seal the edge of the nori with a little water\n use a sharp knife to slice the roll into bite-sized pieces\n serve with soy sauce, wasabi, and pickled ginger\nwash the plates',4),(5,'crack eggs into a bowl and whisk them lightly with a pinch of salt and pepper\n heat a non-stick pan over medium-low heat and melt a generous amount of butter\n pour in the egg mixture, swirling it to ensure even coverage\n as the edges begin to set, gently stir the eggs with a spatula to create soft curds\n once the eggs are mostly set but still slightly runny in the middle, remove the pan from the heat\n fold one side of the omelette over to the center and then fold the other side, creating a simple roll\n slide the omelette onto a plate, and garnish with herbs or cheese if desired\n serve immediately for the best texture',5),(6,'cook spaghetti in salted water according to package instructions, then drain, reserving some pasta water\n while the pasta cooks, heat a pan and cook diced pancetta or guanciale until crispy\n beat eggs and mix with grated Pecorino Romano cheese, black pepper, and a pinch of salt\n add the drained pasta to the pan with pancetta, tossing to coat with the rendered fat\n remove the pan from heat and quickly stir in the egg mixture, adding a bit of reserved pasta water to create a creamy sauce\n toss until the pasta is fully coated and creamy, adjusting seasoning with more black pepper if needed\n serve immediately with extra cheese and pepper on top',6),(7,'boil pasta until al dente and set aside\nchop vegetables like bell peppers, zucchini, carrots, and broccoli\nheat olive oil in a pan and sautÃ© garlic until fragrant\nadd chopped vegetables and cook until slightly tender\nseason with salt, pepper, and Italian herbs\nadd cherry tomatoes and a splash of pasta water\ntoss in the cooked pasta and mix well\noptionally add a splash of cream or sprinkle with Parmesan cheese\ngarnish with fresh basil before serving',7),(8,'heat butter in a pan\n add chopped onions and sautÃ© until golden\n add ginger-garlic paste and cook until raw smell disappears\n add pureed tomatoes and cook until the oil separates\n add spices like chili powder, turmeric, garam masala, and salt\n cook the masala for a few minutes, stirring often\n add cream and mix well to form a smooth gravy\n add paneer cubes and simmer for 5â€“7 minutes\n crush kasuri methi and sprinkle on top\n garnish with fresh coriander and an extra drizzle of cream before serving',8),(9,'toast slices of bread until golden and crisp\n cut ripe avocados, remove seeds, and scoop the flesh into a bowl\n mash the avocado with a fork to your desired consistency\n add salt, pepper, and a squeeze of lemon juice to the mash\n spread the mashed avocado evenly on the toasted bread\n optionally drizzle with olive oil and sprinkle chili flakes or herbs\n add toppings like sliced tomatoes, poached egg, or microgreens if desired\n serve immediately for best taste and texture',9),(52,'boil pasta until al dente and drain\nheat olive oil in a pan, sauté garlic\nadd bell peppers, zucchini, and tomatoes; cook until tender\nseason with salt, pepper, oregano, and chili flakes\ntoss in the boiled pasta and mix well\ncook for another 2 minutes on low heat\ngarnish with parmesan and serve hot',52),(103,'Heat oil in a pan and add mustard seeds, cumin seeds, and curry leaves\nAdd sliced onions and green chili, sauté until translucent\nAdd turmeric and mashed potatoes, mix well\nAdd salt and cook for 2-3 minutes\nHeat a non-stick pan and pour a ladle of dosa batter\nSpread in circular motion to make a thin crepe\nDrizzle oil on edges and cook until golden brown\nPlace potato masala in center and fold dosa\nServe hot with chutney and sambar',103),(252,'Clean & wash the chicken pieces. Drain the water or pat dry.\nSlice the onions and tomatoes. Slit 6 green chillies\nChop 1 cup coriander leaves and 1 cup mint\nWhisk the yogurt and set aside\nWash & soak the Basmati Rice for 30 mins.',252);
/*!40000 ALTER TABLE `instruction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instruction_seq`
--

DROP TABLE IF EXISTS `instruction_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instruction_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instruction_seq`
--

LOCK TABLES `instruction_seq` WRITE;
/*!40000 ALTER TABLE `instruction_seq` DISABLE KEYS */;
INSERT INTO `instruction_seq` VALUES (351);
/*!40000 ALTER TABLE `instruction_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logo`
--

DROP TABLE IF EXISTS `logo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logo` (
  `id` bigint NOT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logo`
--

LOCK TABLES `logo` WRITE;
/*!40000 ALTER TABLE `logo` DISABLE KEYS */;
INSERT INTO `logo` VALUES (1,'logo','https://i.ibb.co/nMSHcWgp/Platestream-Logo.png'),(2,'AboutUsBanner','https://tinyurl.com/yc5hb8u2'),(3,'BlogBanner','https://tinyurl.com/5ftpcvfd'),(4,'HomeBanner','https://tinyurl.com/mrxtpx8p'),(5,'RoundLogo','https://tinyurl.com/474jbc88');
/*!40000 ALTER TABLE `logo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logo_seq`
--

DROP TABLE IF EXISTS `logo_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logo_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logo_seq`
--

LOCK TABLES `logo_seq` WRITE;
/*!40000 ALTER TABLE `logo_seq` DISABLE KEYS */;
INSERT INTO `logo_seq` VALUES (101);
/*!40000 ALTER TABLE `logo_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrition`
--

DROP TABLE IF EXISTS `nutrition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrition` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `calories` double NOT NULL,
  `carbohydrates` double NOT NULL,
  `fat` double NOT NULL,
  `fiber` double NOT NULL,
  `protein` double NOT NULL,
  `sugar` double NOT NULL,
  `recipe_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK7f7mwkf1xwuv761lpy66x276i` (`recipe_id`),
  CONSTRAINT `FKpy4lhtdnayd1361oesu3jp3pd` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition`
--

LOCK TABLES `nutrition` WRITE;
/*!40000 ALTER TABLE `nutrition` DISABLE KEYS */;
INSERT INTO `nutrition` VALUES (1,350,50,10,6,10,6,1),(2,430,20,32,3,9,6,2),(3,280,24,18,7,16,2,3),(4,250,38,5,2,8,3,4),(5,180,2,14,5,12,1,5),(6,450,45,20,2,18,2,6),(7,350,50,10,6,10,6,7),(8,430,20,32,3,14,6,8),(9,280,26,18,7,6,2,9),(52,320,50,8,4,10,4,52),(103,1,9,4,5,3,2,103),(252,200,100,5,10,8,10,252);
/*!40000 ALTER TABLE `nutrition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutrition_seq`
--

DROP TABLE IF EXISTS `nutrition_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nutrition_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutrition_seq`
--

LOCK TABLES `nutrition_seq` WRITE;
/*!40000 ALTER TABLE `nutrition_seq` DISABLE KEYS */;
INSERT INTO `nutrition_seq` VALUES (351);
/*!40000 ALTER TABLE `nutrition_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cook_time` double NOT NULL,
  `cuisines` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `difficulty` varchar(255) DEFAULT NULL,
  `food_name` varchar(255) DEFAULT NULL,
  `food_type` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `ingredients` text,
  `prep_time` double NOT NULL,
  `total_time` double NOT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `total_views` int DEFAULT '0',
  `overview` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe`
--

LOCK TABLES `recipe` WRITE;
/*!40000 ALTER TABLE `recipe` DISABLE KEYS */;
INSERT INTO `recipe` VALUES (1,15,'Italian','A light, veggie-packed pasta dish.','Medium','Pasta Primavera','Dinner','https://images.themodernproper.com/production/posts/PastaPrimavera_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1719193336&s=937ab7a995140869e824b6eac4374aa7','Pasta - 200g (penne, spaghetti, or fettuccine)\n Olive oil - 2 tablespoons\n Garlic - 2 cloves, minced\n Bell peppers - 1 cup, sliced (red, yellow, or green)\n Zucchini - 1 small, sliced\n Carrots - 1 medium, julienned or thinly sliced\n Broccoli florets - 1 cup\n Cherry tomatoes - ½ cup, halved\n Salt - to taste\n Black pepper - to taste\n Italian seasoning or dried herbs - 1 teaspoon\n Parmesan cheese - 2 tablespoons (optional)\n Fresh basil - a few leaves, chopped (for garnish)\n Pasta water - ¼ cup (reserved from boiling pasta)\n Heavy cream - 2 tablespoons (optional, for a creamier sauce)\nWater - 2 glass\nMasala - 1 Packet',10.5,25.5,'https://www.youtube-nocookie.com/embed/kPG37vlyo2s?si=8V6vWpeE42IR1iC3',54,'Pasta Primavera is a vibrant and healthy Italian-American dish that celebrates fresh seasonal vegetables tossed with pasta in a light, flavorful sauce. Often associated with spring, this dish typically includes a mix of colorful vegetables like bell peppers, zucchini, carrots, cherry tomatoes, and broccoli, sautéed and combined with garlic, olive oil, and sometimes a touch of cream or Parmesan cheese. It\'s a perfect balance of texture and flavor, offering a wholesome, satisfying meal that’s both vegetarian-friendly and visually appealing.'),(2,20,'Indian','Creamy tomato-based curry with cottage cheese.','Easy','Paneer Butter Masala','Lunch','https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg','Paneer – 200g, cubed\n Butter – 2 tablespoons\n Oil – 1 tablespoon\n Onion – 1 large, finely chopped\n Tomatoes – 3 medium, pureed\n Garlic – 4 cloves, minced\n Ginger – 1 inch piece, grated\n Cashew nuts – 10 to 12, soaked in warm water\n Fresh cream – 3 tablespoons\n Garam masala – 1 teaspoon\n Red chili powder – 1 teaspoon (adjust to taste)\n Turmeric powder – ¼ teaspoon\n Coriander powder – 1 teaspoon\n Kasuri methi (dried fenugreek leaves) – 1 teaspoon, crushed\n Salt – to taste\n Sugar – 1 teaspoon (optional, to balance acidity)\n Water – ½ to 1 cup (as needed for gravy consistency)\n Fresh coriander leaves – chopped, for garnish',15,35,'https://www.youtube-nocookie.com/embed/U1LVDFwi8qI?si=mKzwPNHR9gIhmA1J',83,'Paneer Butter Masala is a rich and creamy North Indian curry made with paneer (Indian cottage cheese) simmered in a luscious tomato-based gravy. Known for its mildly sweet, buttery taste and vibrant orange color, the dish combines aromatic spices like garam masala, kasuri methi (dried fenugreek), and chili powder with ingredients such as butter, cream, and tomatoes. Often served with naan or rice, it’s a restaurant favorite that strikes the perfect balance between indulgence and flavor, making it a beloved vegetarian classic.'),(3,5,'Indian','Healthy toast with smashed avocado and toppings.','Easy','Avocado Toast','Breakfast','https://mallorythedietitian.com/wp-content/uploads/2024/05/smashed-avocado-toast-with-egg-and-red-pepper-flakes.jpg','Bread slices – 2 (whole grain or sourdough recommended)\n Ripe avocado – 1, peeled, pitted, and mashed\n Lemon juice – 1 teaspoon\n Salt – to taste\n Black pepper – to taste\n Chili flakes – ½ teaspoon (optional)\n Olive oil – 1 teaspoon (optional, for drizzling)\n Toppings (optional) – cherry tomatoes, poached egg, microgreens, feta cheese',5,10,'https://www.youtube-nocookie.com/embed/dP6btliLGy4?si=LWBpmh8hT6fM62z2',44,'Avocado Toast is a simple yet nutritious dish that has gained popularity as a modern breakfast or snack. It features creamy mashed avocado spread over toasted bread, often enhanced with toppings like olive oil, lemon juice, chili flakes, eggs, or microgreens. Rich in healthy fats and fiber, it’s not only quick to prepare but also highly customizable, offering a balance of flavor, texture, and nutrition with every bite.'),(4,25,'Japanese','Traditional Japanese rice rolls with fish or veggies.','Hard','sushi Rolls','Dinner','https://hips.hearstapps.com/hmg-prod/images/spicy-tuna-roll-2-1652806800.jpg?crop=0.633xw:1.00xh;0.313xw,0&resize=1200:*','Sushi rice – 1 cup (uncooked)\n Rice vinegar – 2 tablespoons\n Sugar – 1 tablespoon\n Salt – ½ teaspoon\n Nori sheets (seaweed) – 4 to 6 sheets\n Cucumber – 1 small, julienned\n Carrot – 1 small, julienned (optional)\n Avocado – 1, sliced\n Cooked crab meat, imitation crab, or cooked shrimp – ½ cup (optional for non-veg)\n Soy sauce – for dipping\n Wasabi – optional\n Pickled ginger – optional\n Bamboo sushi mat – for rolling (optional but helpful)',20,45,'https://www.youtube-nocookie.com/embed/CCrcArAkpc4?si=-SaUDd9sSxvKxVKc',25,'Sushi Rolls, also known as makizushi, are a popular Japanese dish made by rolling vinegared rice with various fillings such as raw or cooked seafood, vegetables, and sometimes tropical fruits, all wrapped in a sheet of nori (seaweed). These rolls are then sliced into bite-sized pieces and typically served with soy sauce, pickled ginger, and wasabi. Sushi rolls are admired for their aesthetic appeal, delicate flavors, and the satisfying balance of textures in each bite.'),(5,5,'French','Classic French-style fluffy omelette.','Easy','French Omelette','Breakfast','https://i.pinimg.com/736x/2c/74/82/2c748280951370ee334afd838374e081.jpg','Eggs – 3, large\n Butter – 1 tablespoon (unsalted)\n Salt – to taste\n Black pepper – to taste\n Milk or cream – 1 tablespoon (optional, for fluffiness)\n Fresh herbs – chopped parsley, chives, or tarragon (optional)\n Cheese – 2 tablespoons, grated (optional, like Gruyère or cheddar)\nWater - 2Glass',5,10,'https://www.youtube-nocookie.com/embed/EoufLVAAPSU?si=TqOCydcZG00pfW1k',7,'\"The French Omelette is a classic, elegant dish known for its smooth, silky texture and delicate flavor. Unlike a traditional scrambled egg, the French omelette is cooked gently and folded into a soft, slightly runny roll. Typically made with just eggs, butter, and seasoning, it can be filled with a variety of ingredients like cheese, herbs, or vegetables. A true French omelette is not browned on the outside but instead boasts a pale, golden finish, highlighting the richness of the eggs. \"'),(6,4.9,'Italian','Traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper.','Medium','Spaghetti Carbonara','Dinner','https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg','Spaghetti – 200g\n Eggs – 2 large (plus 1 extra yolk, optional for creaminess)\n Pecorino Romano cheese – ½ cup, finely grated (or Parmesan)\n Pancetta or guanciale – 100g, diced\n Black pepper – 1 teaspoon, freshly ground\n Salt – to taste (for boiling pasta)\n Pasta water – ¼ cup, reserved (to help create sauce)',4.8,25,'https://www.youtube-nocookie.com/embed/jlcFwYwiuwY?si=K1wt5JjKKQ9Czcic',13,'Spaghetti Carbonara is a traditional Italian pasta dish known for its creamy, savory sauce made without the use of cream. The sauce is created by combining eggs, grated Pecorino Romano cheese, pancetta or guanciale, and black pepper, which melds into a rich coating for the pasta. The hot spaghetti helps to cook the egg mixture, creating a velvety texture that perfectly complements the crispy pancetta. This dish is both simple and luxurious, offering a comforting balance of flavors and textures.'),(7,15,'Italian','A light, veggie-packed pasta dish.','Medium','Pasta Primavera','Dinner','https://images.themodernproper.com/production/posts/PastaPrimavera_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1719193336&s=937ab7a995140869e824b6eac4374aa7','Pasta - 200g (penne, spaghetti, or fettuccine)\n Olive oil - 2 tablespoons\n Garlic - 2 cloves, minced\n Bell peppers - 1 cup, sliced (red, yellow, or green)\n Zucchini - 1 small, sliced\n Carrots - 1 medium, julienned or thinly sliced\n Broccoli florets - 1 cup\n Cherry tomatoes - ½ cup, halved\n Salt - to taste\n Black pepper - to taste\n Italian seasoning or dried herbs - 1 teaspoon\n Parmesan cheese - 2 tablespoons (optional)\n Fresh basil - a few leaves, chopped (for garnish)\n Pasta water - ¼ cup (reserved from boiling pasta)\n Heavy cream - 2 tablespoons (optional, for a creamier sauce)',10.5,25.5,'https://www.youtube-nocookie.com/embed/kPG37vlyo2s?si=8V6vWpeE42IR1iC3',20,'Pasta Primavera is a vibrant and healthy Italian-American dish that celebrates fresh seasonal vegetables tossed with pasta in a light, flavorful sauce. Often associated with spring, this dish typically includes a mix of colorful vegetables like bell peppers, zucchini, carrots, cherry tomatoes, and broccoli, sautÃ©ed and combined with garlic, olive oil, and sometimes a touch of cream or Parmesan cheese. It\'s a perfect balance of texture and flavor, offering a wholesome, satisfying meal thatâ€™s both vegetarian-friendly and visually appealing.'),(8,20,'Indian','Creamy tomato-based curry with cottage cheese.','Easy','Paneer Butter Masala','Lunch','https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg','Paneer – 200g, cubed\n Butter – 2 tablespoons\n Oil – 1 tablespoon\n Onion – 1 large, finely chopped\n Tomatoes – 3 medium, pureed\n Garlic – 4 cloves, minced\n Ginger – 1 inch piece, grated\n Cashew nuts – 10 to 12, soaked in warm water\n Fresh cream – 3 tablespoons\n Garam masala – 1 teaspoon\n Red chili powder – 1 teaspoon (adjust to taste)\n Turmeric powder – ¼ teaspoon\n Coriander powder – 1 teaspoon\n Kasuri methi (dried fenugreek leaves) – 1 teaspoon, crushed\n Salt – to taste\n Sugar – 1 teaspoon (optional, to balance acidity)\n Water – ½ to 1 cup (as needed for gravy consistency)\n Fresh coriander leaves – chopped, for garnish',15,35,'https://www.youtube-nocookie.com/embed/U1LVDFwi8qI?si=mKzwPNHR9gIhmA1J',30,'Paneer Butter Masala is a rich and creamy North Indian curry made with paneer (Indian cottage cheese) simmered in a luscious tomato-based gravy. Known for its mildly sweet, buttery taste and vibrant orange color, the dish combines aromatic spices like garam masala, kasuri methi (dried fenugreek), and chili powder with ingredients such as butter, cream, and tomatoes. Often served with naan or rice, itâ€™s a restaurant favorite that strikes the perfect balance between indulgence and flavor, making it a beloved vegetarian classic.'),(9,5,'Indian','Healthy toast with smashed avocado and toppings.','Easy','Avocado Toast','Breakfast','https://mallorythedietitian.com/wp-content/uploads/2024/05/smashed-avocado-toast-with-egg-and-red-pepper-flakes.jpg','Bread slices – 2 (whole grain or sourdough recommended)\n Ripe avocado – 1, peeled, pitted, and mashed\n Lemon juice – 1 teaspoon\n Salt – to taste\n Black pepper – to taste\n Chili flakes – ½ teaspoon (optional)\n Olive oil – 1 teaspoon (optional, for drizzling)\n Toppings (optional) – cherry tomatoes, poached egg, microgreens, feta cheese',5,10,'https://www.youtube-nocookie.com/embed/dP6btliLGy4?si=LWBpmh8hT6fM62z2',13,'Avocado Toast is a simple yet nutritious dish that has gained popularity as a modern breakfast or snack. It features creamy mashed avocado spread over toasted bread, often enhanced with toppings like olive oil, lemon juice, chili flakes, eggs, or microgreens. Rich in healthy fats and fiber, itâ€™s not only quick to prepare but also highly customizable, offering a balance of flavor, texture, and nutrition with every bite.'),(52,20,'Italian','A simple and healthy vegetable pasta made with seasonal veggies and herbs.','Medium','Vegetable Pasta','Lunch','https://iheartvegetables.com/wp-content/uploads/2023/08/15-Minute-Vegetable-Pasta-5-of-8.jpg','Pasta – 2 cups\nOlive oil – 2 tablespoons\nGarlic – 3 cloves, minced\nBell peppers – 1 cup, chopped\nZucchini – 1 cup, sliced\nTomato – 1 cup, chopped\nSalt – to taste\nBlack pepper – 1 tsp\nOregano – 1 tsp\nChili flakes – optional\nGrated parmesan – optional',15,35,'https://www.youtube-nocookie.com/embed/oJYpjUVYxm0?si=0I2zTOmgeO8HKJru',14,'Vegetable Pasta is a nutritious and colorful dish loaded with fresh vegetables and tossed in olive oil and herbs. It\'s easy to make and perfect for a quick lunch or dinner.'),(103,15,'Indian','A crispy rice crepe filled with spicy potato masala, served with chutney and sambar.','Easy','Masala Dosa','Lunch','https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg','2 cups dosa batter\n2 tbsp oil for cooking\n2 boiled potatoes\n1/2 tsp mustard seeds\n1/2 tsp cumin seeds\n1 onion (sliced)\n1 green chili (chopped)\n1/4 tsp turmeric powder\nSalt to taste\nA few curry leaves\n1 tbsp chopped coriander',20,35,'https://www.youtube-nocookie.com/embed/IDNtiYTd7_M?si=fWd-uLUCaRE6QN8c',6,'Masala Dosa is a popular South Indian dish made from fermented rice and urad dal batter. It is filled with a flavorful potato masala and enjoyed as a breakfast or meal item.'),(252,30,'Indian','Biryani is one of the most popular dishes in South Asia and the South Asian diaspora, although the dish is often associated with the region\'s Muslim population in particular.','Medium','Chicken Biriyani','Lunch','https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg','Onions, sliced- 400 gms (around 5 medium sized onions)\nGinger Garlic paste- 2 tbsp\nTomatoes, sliced- 4 medium \nGreen Chillies, slit- 6 numbers\nCoriander leaves, chopped- 1 cup\nMint leaves, chopped- 1 cup\nWhisked curd/plain yogurt- 1 cup \nReady made Biryani Masala- 5 tbsp\nShahjeera (caraway seeds) - 1/2 tsp\nGreen cardamom - 4\nCloves - 4\nCinnamon- 2 pieces\nSalt- 2 1/2 tablespoon \nWater to boil the rice- around 2.5  litres \nMint leaves - around 10- 15 leaves ',10,40,'https://www.youtube-nocookie.com/embed/95BCU1n268w?si=B39RBS3EXgQ_o33c',2,'Biryani is one of the most popular dishes in South Asia and the South Asian diaspora, although the dish is often associated with the region\'s Muslim population in particular.');
/*!40000 ALTER TABLE `recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_blog`
--

DROP TABLE IF EXISTS `recipe_blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_blog` (
  `blog_id` int NOT NULL AUTO_INCREMENT,
  `also_known_as` text,
  `best_served_with` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `history` text,
  `history_img1` varchar(255) NOT NULL,
  `history_img2` varchar(255) NOT NULL,
  `overview` text,
  `pro_tips` text,
  `recipe_img_url` varchar(255) NOT NULL,
  `recipe_name` varchar(100) NOT NULL,
  `variations` text,
  `recipe_id` bigint DEFAULT NULL,
  PRIMARY KEY (`blog_id`),
  UNIQUE KEY `UKm6ajda2h7ciry4l52twk7jbfx` (`recipe_id`),
  CONSTRAINT `FK9jq579bx5grmrwjuj7q8aq62v` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_blog`
--

LOCK TABLES `recipe_blog` WRITE;
/*!40000 ALTER TABLE `recipe_blog` DISABLE KEYS */;
INSERT INTO `recipe_blog` VALUES (1,'Spring Vegetable Pasta, Veggie Pasta Delight','Garlic Bread, Caesar Salad, Sparkling Water with Lemon','2025-05-08 20:25:31','Pasta Primavera originated in the United States in the 1970s, despite its Italian-sounding name. It was created by Sirio Maccioni, owner of Le Cirque in New York City, who introduced it as a modern, lighter alternative to traditional pasta dishes. The recipe quickly became popular for its fresh take on Italian cuisine, emphasizing vegetables during a time when rich, meat-heavy dishes were more common.','https://static01.nyt.com/images/2019/04/21/dining/19pasta1/merlin_153493732_aa6ad9df-3084-4c27-87d9-1b1639caa68b-superJumbo.jpg','https://cdn.loveandlemons.com/wp-content/uploads/2023/06/pasta-primavera-500x500.jpg','Pasta Primavera is a vibrant and healthy Italian-American dish that celebrates fresh seasonal vegetables tossed with pasta in a light, flavorful sauce. Often associated with spring, this dish includes a mix of colorful veggies like bell peppers, zucchini, carrots, and cherry tomatoes, lightly sautÃ©ed in garlic and olive oil.','Al dente pasta is key â€“ donâ€™t overcook it.  Reserve pasta water â€“ it helps emulsify the sauce. Donâ€™t skip sautÃ©ing garlic  it builds flavor. Blanch harder veggies like broccoli briefly. Add a squeeze of lemon juice for brightness. Parmesan adds a salty, savory kick â€“ optional but lovely','https://images.themodernproper.com/production/posts/PastaPrimavera_9.jpg?w=960&h=960&q=82&fm=jpg&fit=crop&dm=1719193336&s=937ab7a995140869e824b6eac4374aa7','Pasta Primavera','Spring: Use asparagus and peas.\nSummer: Add corn and green beans.\nCreamy version: Stir in heavy cream or Alfredo sauce.\nLow-carb: Use spiralized zucchini noodles.',1),(2,'Butter Paneer, Paneer Makhani, Creamy Paneer Curry','Butter Naan, Jeera Rice, Garlic Kulcha','2025-05-05 16:49:46','While the exact origin is debated, Paneer Butter Masala likely emerged from the Punjabi cuisine scene â€” famously popularized by Delhiâ€™s legendary Moti Mahal restaurant in the 1950s, where chefs experimented with tandoori paneer in buttery tomato sauces. Over time, the dish evolved into a softer, vegetarian counterpart to Butter Chicken, offering the same decadent flavors without meat.','https://spiceniceportadelaide.com.au/wp-content/uploads/2024/03/Paneer-Butter-Masala-1536x1024.png','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BoCO3ZsA4eXdey0tuMu-CKn-OmhgE9A8Yw&s','Paneer Butter Masala is a rich, creamy North Indian dish that has become a staple in Indian restaurants and homes alike. With its silky tomato-based gravy, subtle spice, and buttery indulgence, this dish brings together tradition and taste in one beautiful bowl.','Soften Paneer: Soak paneer cubes in warm water for 10 minutes before adding to the curry. Perfect Gravy: Always cook your tomato puree till oil separates. Cashew Creaminess: Use cashew paste for richness. Balance the Heat: Kashmiri chili powder adds color with mild heat. Leftover Hack: Reheat with a splash of milk. Cream Swirl: Finish with a swirl of cream. Kasuri Methi = Magic: Crush before adding for aroma','https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg','Paneer Butter Masala','Punjab: Heavier use of cream and butter, deep tomato flavor.\nSouth India: Spicier versions with coconut milk.\nUK/USA: Often sweeter and creamier for Western palates.\nJain Version: Made without garlic or onions, yet still flavorful.',2),(3,'Millennial Toast, Healthy Toast, Avocado Smash','Fresh Juice, Iced Coffee, Soft-Boiled Egg','2025-05-08 22:07:17','Avocado Toast gained popularity in Australia in the 1990s and later exploded globally in the 2010s, especially through Instagram and health food cafes. Though avocados have been eaten on bread in Latin America for centuries, it was the cafÃ© culture and social media of the millennial generation that turned it into a cultural food icon.','https://hips.hearstapps.com/hmg-prod/images/avocado-toast-index-64e3b97b46eb6.jpg','https://www.ambitiouskitchen.com/wp-content/uploads/2022/09/How-to-Make-the-Best-Avocado-Toast-4.jpg','Avocado Toast is a simple, trendy, and nutritious breakfast or snack made by mashing ripe avocado on toasted bread, often topped with extras like eggs, tomatoes, chili flakes, or seeds. Rich in healthy fats, fiber, and vitamins, it has become a modern symbol of healthy eating and is favored for its creamy texture, vibrant color, and adaptability.',' Use Ripe Avocados: Soft but not mushy for perfect texture. Toast Properly: A good crusty bread like sourdough makes a difference. Season Generously: Salt, pepper, and lemon juice are essential. Add Heat: A pinch of red pepper flakes adds zing. Add Herbs: Cilantro or microgreens add freshness','https://mallorythedietitian.com/wp-content/uploads/2024/05/smashed-avocado-toast-with-egg-and-red-pepper-flakes.jpg','Avocado Toast','With Poached or Fried Egg Spicy with Chili Flakes or Hot Sauce Topped with Tomatoes or Pomegranate Vegan with Nutritional Yeast or Vegan Cheese Gluten-Free with GF Bread',3),(4,'Makizushi, Norimaki, Rolled Sushi','Soy Sauce, Wasabi, Pickled Ginger, Miso Soup','2025-05-08 22:10:01','Sushi originated in Southeast Asia as a preservation method using fermented rice and fish. It evolved in Japan into modern forms, with makizushi (rolled sushi) becoming popular in the Edo period. Sushi rolls gained global fame through adaptations like the California Roll in the 1960s in Los Angeles.','https://assets.epicurious.com/photos/6296ab0261d9b51ed5ae9b8f/1:1/w_2560%2Cc_limit/SushiRolls_RECIPE_051922_35149.jpg','https://www.justonecookbook.com/wp-content/uploads/2023/05/Sushi-Rolls-2789-I.jpg','Sushi Rolls, or makizushi, are cylindrical sushi varieties rolled with seaweed (nori), vinegared rice, and various fillings like fish, vegetables, or eggs. Popular worldwide, they are loved for their balance of taste, texture, and visual appeal.','Use Sushi Rice: Season with vinegar, sugar, and salt Sharp Knife: Wet with water to cut clean rolls Use a Bamboo Mat: For tight, even rolling Fresh Fillings: Quality ingredients matter Nori Shiny Side Out: For aesthetic appea','https://hips.hearstapps.com/hmg-prod/images/spicy-tuna-roll-2-1652806800.jpg?crop=0.633xw:1.00xh;0.313xw,0&resize=1200:*','Sushi Rolls','California Roll: Crab, avocado, cucumber Spicy Tuna Roll: Tuna, spicy mayo Veggie Roll: Avocado, cucumber, carrot Tempura Roll: Deep-fried shrimp inside Rainbow Roll: Topped with assorted sashimi',4),(5,'Omelette Nature, Rolled Omelette','Baguette, Fresh Salad, Hot Coffee or Tea','2025-05-09 10:52:21','The French Omelette dates back to at least the 16th century, gaining prestige as part of French haute cuisine. Its technique-focused preparation reflects the elegance and precision of French culinary traditions and remains a rite of passage in French cooking schools.','https://www.seriouseats.com/thmb/7VkyZu3shh7qtiwzJHvYXGePtb0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220318-French-Omelette-MHOM-12-cf2211d8f0a44771bd5e6d71c3fd8e18.jpg','https://cdn.loveandlemons.com/wp-content/uploads/2023/04/french-omelette.jpg','A French Omelette is a classic dish made with eggs whisked and cooked gently in butter to create a smooth, pale yellow, slightly runny interior. Unlike American-style omelets, itâ€™s tender, unbrowned, and often rolled into a cylindrical shape.','Whisk Thoroughly: Incorporate air for fluffiness Gentle Heat: Low and slow is key Use Butter Generously: It prevents sticking Stir Constantly: Until custardy Roll Carefully: For classic shape and texture','https://i.pinimg.com/736x/2c/74/82/2c748280951370ee334afd838374e081.jpg','French Omelette','Cheese Omelette: With GruyÃ¨re or cheddar Herb Omelette: Parsley, chives, or tarragon Mushroom Omelette: SautÃ©ed mushrooms inside Truffle Omelette: For gourmet flavor Spicy Omelette: With chili oil or flakes',5),(6,'Roman Pasta, Creamy Pasta (Non-Cream)','Red Wine, Garlic Bread, Roasted Asparagus','2025-05-09 10:56:04','Carbonaras exact origins are debated, but it became popular in Rome during or after World War II. Some say it was inspired by American soldiers and their rations of bacon and eggs, combined with Italian pasta. Despite the lore, its simplicity and richness make it a timeless classic.','https://www.seriouseats.com/thmb/zLqZkE8Kh9HPgY-JUAZTPeLtj2s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210217-Carbonara-Morgan-Hunt-Glaze-Serious-Eats-31-c26b6f297df74b15a1a5d203d8b44f99.jpg','https://www.recipetineats.com/wp-content/uploads/2023/03/Spaghetti-Carbonara_6-SQ.jpg','Spaghetti Carbonara is a traditional Roman pasta dish made with eggs, Pecorino Romano cheese, pancetta (or guanciale), and freshly cracked black pepper. Itâ€™s creamy without using cream, relying on the silky emulsion of egg and cheese with pasta water.','Use Room Temp Eggs: Prevents curdling Remove Pan from Heat Before Adding Eggs Reserve Pasta Water: For creaminess Season Well: Cheese adds saltiness Render Pancetta Slowly: For crispness without burning','https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg','Spaghetti Carbonara','With Bacon Instead of Guanciale Garlic-Infused Oil (non-traditional) Vegetarian Version with Mushrooms Parmesan Instead of Pecorino With Rigatoni or Fettuccine Instead of Spaghetti',6);
/*!40000 ALTER TABLE `recipe_blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_blog_seq`
--

DROP TABLE IF EXISTS `recipe_blog_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_blog_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_blog_seq`
--

LOCK TABLES `recipe_blog_seq` WRITE;
/*!40000 ALTER TABLE `recipe_blog_seq` DISABLE KEYS */;
INSERT INTO `recipe_blog_seq` VALUES (251);
/*!40000 ALTER TABLE `recipe_blog_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipe_seq`
--

DROP TABLE IF EXISTS `recipe_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipe_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipe_seq`
--

LOCK TABLES `recipe_seq` WRITE;
/*!40000 ALTER TABLE `recipe_seq` DISABLE KEYS */;
INSERT INTO `recipe_seq` VALUES (351);
/*!40000 ALTER TABLE `recipe_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` bigint NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `review_text` text NOT NULL,
  `recipe_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9dqw7ep5rnww1yuimutvg4nny` (`recipe_id`),
  KEY `FK6cpw2nlklblpvc7hyt7ko6v3e` (`user_id`),
  CONSTRAINT `FK6cpw2nlklblpvc7hyt7ko6v3e` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK9dqw7ep5rnww1yuimutvg4nny` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (502,'2025-05-22 21:38:23.599946','good',8,252),(552,'2025-05-23 10:51:55.875734','superb!!!',4,102),(553,'2025-05-23 11:42:01.864206','nice?',252,102),(554,'2025-05-23 11:42:25.871661','❤️❤️❤️',252,102),(555,'2025-05-23 11:45:27.110925','??',7,102);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_seq`
--

DROP TABLE IF EXISTS `review_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_seq`
--

LOCK TABLES `review_seq` WRITE;
/*!40000 ALTER TABLE `review_seq` DISABLE KEYS */;
INSERT INTO `review_seq` VALUES (651);
/*!40000 ALTER TABLE `review_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_media`
--

DROP TABLE IF EXISTS `social_media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_media` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_media`
--

LOCK TABLES `social_media` WRITE;
/*!40000 ALTER TABLE `social_media` DISABLE KEYS */;
INSERT INTO `social_media` VALUES (1,'Facebook','https://www.facebook.com/platestream'),(2,'Instagram','https://www.instagram.com/platestream'),(3,'Mail','mailto: platestream@gmail.com'),(4,'Twitter','https://www.twitter.com/platestream');
/*!40000 ALTER TABLE `social_media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `social_media_seq`
--

DROP TABLE IF EXISTS `social_media_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `social_media_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `social_media_seq`
--

LOCK TABLES `social_media_seq` WRITE;
/*!40000 ALTER TABLE `social_media_seq` DISABLE KEYS */;
INSERT INTO `social_media_seq` VALUES (1);
/*!40000 ALTER TABLE `social_media_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscribe`
--

DROP TABLE IF EXISTS `subscribe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscribe` (
  `id` bigint NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribe`
--

LOCK TABLES `subscribe` WRITE;
/*!40000 ALTER TABLE `subscribe` DISABLE KEYS */;
INSERT INTO `subscribe` VALUES (1,'example@gmail.com'),(2,'person@gmail.com'),(52,'hbfhsvvv@gmail.com'),(53,'sdf@gmail.com'),(54,'hbcdshbchs@gmail.com'),(56,'frwfre@gmail.com'),(153,'last@email.com'),(202,'fwfef@gmail.com');
/*!40000 ALTER TABLE `subscribe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscribe_seq`
--

DROP TABLE IF EXISTS `subscribe_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscribe_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscribe_seq`
--

LOCK TABLES `subscribe_seq` WRITE;
/*!40000 ALTER TABLE `subscribe_seq` DISABLE KEYS */;
INSERT INTO `subscribe_seq` VALUES (301);
/*!40000 ALTER TABLE `subscribe_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (102,'2025-05-22 15:46:11.731268','oggy@gmail.com','oggyjack','Oggy'),(152,'2025-05-22 17:11:11.565783','example@email.com','7654321','example'),(252,'2025-05-22 21:34:03.772652','test@gmail.com','test123','test');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_seq`
--

DROP TABLE IF EXISTS `users_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_seq`
--

LOCK TABLES `users_seq` WRITE;
/*!40000 ALTER TABLE `users_seq` DISABLE KEYS */;
INSERT INTO `users_seq` VALUES (351);
/*!40000 ALTER TABLE `users_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `view_recipe`
--

DROP TABLE IF EXISTS `view_recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `view_recipe` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ip_address` varchar(255) DEFAULT NULL,
  `viewed_at` datetime(6) DEFAULT NULL,
  `recipe_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKme022ujy9d6e2tt4kyondq2op` (`recipe_id`),
  CONSTRAINT `FKme022ujy9d6e2tt4kyondq2op` FOREIGN KEY (`recipe_id`) REFERENCES `recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=468 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `view_recipe`
--

LOCK TABLES `view_recipe` WRITE;
/*!40000 ALTER TABLE `view_recipe` DISABLE KEYS */;
INSERT INTO `view_recipe` VALUES (1,'127.0.0.1','2025-04-30 16:49:55.717113',2),(2,'127.0.0.1','2025-04-30 16:51:15.980378',1),(3,'127.0.0.1','2025-04-30 16:51:19.319736',3),(4,'127.0.0.1','2025-04-30 16:51:22.615927',4),(5,'0:0:0:0:0:0:0:1','2025-05-02 11:34:17.144907',1),(6,'0:0:0:0:0:0:0:1','2025-05-02 12:48:09.377790',3),(7,'127.0.0.1','2025-05-02 14:37:05.032902',1),(8,'127.0.0.1','2025-05-02 14:40:39.737878',2),(9,'127.0.0.1','2025-05-02 14:42:31.348610',2),(10,'127.0.0.1','2025-05-02 14:46:15.798175',2),(11,'127.0.0.1','2025-05-02 14:46:46.783801',2),(12,'0:0:0:0:0:0:0:1','2025-05-02 15:23:05.475296',2),(13,'127.0.0.1','2025-05-02 15:49:38.751835',2),(14,'127.0.0.1','2025-05-02 15:51:05.861615',2),(15,'0:0:0:0:0:0:0:1','2025-05-02 16:47:27.734267',2),(16,'0:0:0:0:0:0:0:1','2025-05-02 16:47:27.823116',2),(17,'0:0:0:0:0:0:0:1','2025-05-02 16:57:46.490587',2),(18,'0:0:0:0:0:0:0:1','2025-05-02 16:57:46.539723',2),(19,'0:0:0:0:0:0:0:1','2025-05-03 20:58:22.065885',2),(20,'0:0:0:0:0:0:0:1','2025-05-03 20:58:22.240546',2),(21,'0:0:0:0:0:0:0:1','2025-05-03 21:10:53.205227',2),(22,'0:0:0:0:0:0:0:1','2025-05-03 21:10:53.268563',2),(23,'0:0:0:0:0:0:0:1','2025-05-03 21:56:23.501594',2),(24,'0:0:0:0:0:0:0:1','2025-05-03 22:16:21.427913',2),(25,'0:0:0:0:0:0:0:1','2025-05-05 11:11:24.485147',2),(26,'0:0:0:0:0:0:0:1','2025-05-05 11:47:44.578010',3),(27,'0:0:0:0:0:0:0:1','2025-05-05 11:47:44.629986',3),(28,'0:0:0:0:0:0:0:1','2025-05-05 11:48:10.853276',4),(29,'0:0:0:0:0:0:0:1','2025-05-05 11:48:10.891617',4),(30,'0:0:0:0:0:0:0:1','2025-05-05 11:51:39.579225',5),(31,'0:0:0:0:0:0:0:1','2025-05-05 11:54:39.092123',1),(32,'0:0:0:0:0:0:0:1','2025-05-05 12:02:50.914719',3),(33,'0:0:0:0:0:0:0:1','2025-05-05 12:02:50.963814',3),(34,'0:0:0:0:0:0:0:1','2025-05-05 12:17:17.725533',3),(35,'0:0:0:0:0:0:0:1','2025-05-05 12:17:26.043613',4),(36,'0:0:0:0:0:0:0:1','2025-05-05 12:17:37.201488',4),(37,'0:0:0:0:0:0:0:1','2025-05-05 12:17:37.262336',4),(38,'0:0:0:0:0:0:0:1','2025-05-05 12:35:18.719375',3),(39,'0:0:0:0:0:0:0:1','2025-05-05 12:35:18.779619',3),(40,'0:0:0:0:0:0:0:1','2025-05-05 12:44:51.477363',2),(41,'0:0:0:0:0:0:0:1','2025-05-05 12:44:51.506345',2),(42,'0:0:0:0:0:0:0:1','2025-05-05 12:51:14.042974',1),(43,'0:0:0:0:0:0:0:1','2025-05-05 14:25:37.623512',3),(44,'0:0:0:0:0:0:0:1','2025-05-05 14:25:37.765107',3),(45,'0:0:0:0:0:0:0:1','2025-05-05 14:32:15.351990',3),(46,'0:0:0:0:0:0:0:1','2025-05-05 14:32:15.503744',3),(47,'0:0:0:0:0:0:0:1','2025-05-05 14:41:43.480936',3),(48,'0:0:0:0:0:0:0:1','2025-05-05 14:41:43.528664',3),(49,'0:0:0:0:0:0:0:1','2025-05-05 15:02:33.868493',5),(50,'0:0:0:0:0:0:0:1','2025-05-05 15:13:10.149333',2),(51,'0:0:0:0:0:0:0:1','2025-05-05 15:25:39.226710',6),(52,'0:0:0:0:0:0:0:1','2025-05-05 15:27:57.815832',6),(53,'0:0:0:0:0:0:0:1','2025-05-05 16:16:59.317493',3),(54,'0:0:0:0:0:0:0:1','2025-05-05 17:04:07.907861',3),(55,'0:0:0:0:0:0:0:1','2025-05-05 17:05:04.741866',4),(56,'0:0:0:0:0:0:0:1','2025-05-06 11:20:03.843052',2),(57,'0:0:0:0:0:0:0:1','2025-05-06 11:20:03.963603',2),(58,'0:0:0:0:0:0:0:1','2025-05-06 11:41:48.640345',2),(59,'0:0:0:0:0:0:0:1','2025-05-06 11:48:29.083570',2),(60,'0:0:0:0:0:0:0:1','2025-05-06 12:03:57.564837',3),(61,'0:0:0:0:0:0:0:1','2025-05-06 12:03:57.620765',3),(62,'0:0:0:0:0:0:0:1','2025-05-06 12:08:48.809297',2),(63,'0:0:0:0:0:0:0:1','2025-05-06 12:39:59.903065',4),(64,'0:0:0:0:0:0:0:1','2025-05-06 12:39:59.972790',4),(65,'0:0:0:0:0:0:0:1','2025-05-06 13:09:23.862057',3),(66,'0:0:0:0:0:0:0:1','2025-05-06 13:32:13.048594',1),(67,'0:0:0:0:0:0:0:1','2025-05-06 14:48:06.171110',2),(68,'0:0:0:0:0:0:0:1','2025-05-06 14:48:06.226003',2),(69,'0:0:0:0:0:0:0:1','2025-05-06 14:48:16.683487',3),(70,'0:0:0:0:0:0:0:1','2025-05-06 14:48:16.725576',3),(71,'0:0:0:0:0:0:0:1','2025-05-06 14:57:45.418223',2),(72,'0:0:0:0:0:0:0:1','2025-05-06 14:57:45.496237',2),(76,'0:0:0:0:0:0:0:1','2025-05-06 16:13:26.160224',1),(77,'0:0:0:0:0:0:0:1','2025-05-06 16:27:59.877178',1),(78,'0:0:0:0:0:0:0:1','2025-05-06 16:41:14.963691',3),(79,'0:0:0:0:0:0:0:1','2025-05-06 16:46:05.794773',2),(80,'0:0:0:0:0:0:0:1','2025-05-07 10:26:53.422668',1),(81,'0:0:0:0:0:0:0:1','2025-05-07 10:27:10.527556',2),(82,'0:0:0:0:0:0:0:1','2025-05-07 10:28:30.746619',1),(83,'0:0:0:0:0:0:0:1','2025-05-07 10:31:12.165862',1),(84,'0:0:0:0:0:0:0:1','2025-05-07 10:31:41.028780',3),(85,'0:0:0:0:0:0:0:1','2025-05-07 10:31:51.874391',4),(86,'0:0:0:0:0:0:0:1','2025-05-07 10:49:20.341180',5),(87,'0:0:0:0:0:0:0:1','2025-05-07 11:25:28.948708',1),(88,'0:0:0:0:0:0:0:1','2025-05-07 11:25:47.526041',2),(90,'0:0:0:0:0:0:0:1','2025-05-07 11:44:01.048852',7),(92,'0:0:0:0:0:0:0:1','2025-05-07 12:01:05.929099',1),(93,'0:0:0:0:0:0:0:1','2025-05-07 12:02:13.054787',5),(94,'0:0:0:0:0:0:0:1','2025-05-07 15:23:32.823353',7),(95,'0:0:0:0:0:0:0:1','2025-05-07 16:55:06.434861',2),(96,'0:0:0:0:0:0:0:1','2025-05-08 10:32:59.688471',7),(97,'0:0:0:0:0:0:0:1','2025-05-08 10:32:59.855831',7),(98,'0:0:0:0:0:0:0:1','2025-05-08 10:44:02.117282',2),(99,'0:0:0:0:0:0:0:1','2025-05-08 10:54:08.859939',1),(100,'0:0:0:0:0:0:0:1','2025-05-08 10:55:42.334423',2),(101,'0:0:0:0:0:0:0:1','2025-05-08 10:55:42.355465',2),(102,'0:0:0:0:0:0:0:1','2025-05-08 10:58:45.813645',1),(103,'0:0:0:0:0:0:0:1','2025-05-08 10:58:51.706321',2),(104,'0:0:0:0:0:0:0:1','2025-05-08 11:00:22.753239',6),(105,'0:0:0:0:0:0:0:1','2025-05-08 11:01:46.212091',1),(106,'0:0:0:0:0:0:0:1','2025-05-08 11:10:19.331089',4),(107,'0:0:0:0:0:0:0:1','2025-05-08 11:17:05.533625',3),(108,'0:0:0:0:0:0:0:1','2025-05-08 11:24:56.655828',4),(109,'0:0:0:0:0:0:0:1','2025-05-08 11:57:18.669403',1),(110,'0:0:0:0:0:0:0:1','2025-05-08 12:36:14.099036',3),(111,'0:0:0:0:0:0:0:1','2025-05-08 12:38:48.308198',7),(112,'0:0:0:0:0:0:0:1','2025-05-08 12:47:53.624128',6),(113,'0:0:0:0:0:0:0:1','2025-05-08 12:51:07.848556',7),(114,'0:0:0:0:0:0:0:1','2025-05-08 12:55:05.083020',2),(115,'0:0:0:0:0:0:0:1','2025-05-08 13:02:39.908695',8),(116,'0:0:0:0:0:0:0:1','2025-05-08 15:28:31.884224',2),(117,'0:0:0:0:0:0:0:1','2025-05-08 15:56:02.638846',2),(118,'0:0:0:0:0:0:0:1','2025-05-08 16:02:36.113203',2),(119,'0:0:0:0:0:0:0:1','2025-05-09 10:24:28.353840',2),(120,'0:0:0:0:0:0:0:1','2025-05-09 10:26:21.926139',1),(121,'0:0:0:0:0:0:0:1','2025-05-09 10:46:51.433632',9),(122,'0:0:0:0:0:0:0:1','2025-05-09 10:52:33.677255',1),(123,'0:0:0:0:0:0:0:1','2025-05-09 11:39:33.702886',2),(124,'0:0:0:0:0:0:0:1','2025-05-09 11:39:35.726515',2),(125,'0:0:0:0:0:0:0:1','2025-05-09 11:39:35.760214',2),(126,'0:0:0:0:0:0:0:1','2025-05-09 11:39:36.884873',3),(127,'0:0:0:0:0:0:0:1','2025-05-09 11:39:37.786051',2),(128,'0:0:0:0:0:0:0:1','2025-05-09 11:39:38.949985',3),(129,'0:0:0:0:0:0:0:1','2025-05-09 13:26:40.062978',2),(130,'0:0:0:0:0:0:0:1','2025-05-09 13:26:42.142930',2),(152,'0:0:0:0:0:0:0:1','2025-05-09 16:20:26.140187',2),(153,'0:0:0:0:0:0:0:1','2025-05-09 16:20:34.104140',2),(154,'0:0:0:0:0:0:0:1','2025-05-09 16:20:34.148153',2),(155,'0:0:0:0:0:0:0:1','2025-05-09 16:20:59.785390',2),(156,'0:0:0:0:0:0:0:1','2025-05-09 16:21:01.818677',2),(157,'0:0:0:0:0:0:0:1','2025-05-09 16:21:01.853775',2),(158,'0:0:0:0:0:0:0:1','2025-05-09 16:21:03.883034',2),(159,'0:0:0:0:0:0:0:1','2025-05-09 16:24:34.783390',1),(160,'0:0:0:0:0:0:0:1','2025-05-09 16:26:14.212140',1),(161,'0:0:0:0:0:0:0:1','2025-05-09 16:26:55.374233',2),(162,'0:0:0:0:0:0:0:1','2025-05-09 16:26:55.419690',2),(163,'0:0:0:0:0:0:0:1','2025-05-09 16:36:15.880947',2),(164,'0:0:0:0:0:0:0:1','2025-05-09 16:36:15.917581',2),(165,'0:0:0:0:0:0:0:1','2025-05-09 16:36:34.791606',8),(202,'0:0:0:0:0:0:0:1','2025-05-09 16:43:27.141215',6),(203,'0:0:0:0:0:0:0:1','2025-05-09 16:43:36.923408',6),(204,'0:0:0:0:0:0:0:1','2025-05-09 16:49:05.189131',4),(205,'0:0:0:0:0:0:0:1','2025-05-09 16:49:05.235719',4),(206,'0:0:0:0:0:0:0:1','2025-05-09 16:53:16.157151',8),(207,'0:0:0:0:0:0:0:1','2025-05-09 16:57:16.379978',2),(208,'0:0:0:0:0:0:0:1','2025-05-09 16:57:28.937329',3),(252,'0:0:0:0:0:0:0:1','2025-05-10 20:35:53.394670',9),(253,'0:0:0:0:0:0:0:1','2025-05-10 20:36:46.084516',3),(254,'0:0:0:0:0:0:0:1','2025-05-10 20:37:03.142633',6),(302,'0:0:0:0:0:0:0:1','2025-05-12 10:31:35.853122',1),(352,'0:0:0:0:0:0:0:1','2025-05-12 12:04:19.808243',1),(353,'0:0:0:0:0:0:0:1','2025-05-12 12:04:21.823118',1),(354,'0:0:0:0:0:0:0:1','2025-05-12 12:04:21.864709',1),(355,'0:0:0:0:0:0:0:1','2025-05-12 12:04:23.891946',1),(356,'0:0:0:0:0:0:0:1','2025-05-12 12:22:35.922809',9),(357,'127.0.0.1','2025-05-15 16:50:41.776977',4),(358,'0:0:0:0:0:0:0:1','2025-05-15 16:51:17.313325',4),(359,'0:0:0:0:0:0:0:1','2025-05-15 16:51:26.279961',1),(360,'0:0:0:0:0:0:0:1','2025-05-16 10:41:49.897575',1),(361,'0:0:0:0:0:0:0:1','2025-05-16 10:42:07.487123',2),(362,'127.0.0.1','2025-05-16 11:51:08.560831',4),(363,'0:0:0:0:0:0:0:1','2025-05-16 14:37:24.855466',1),(364,'0:0:0:0:0:0:0:1','2025-05-16 14:54:45.749205',8),(365,'0:0:0:0:0:0:0:1','2025-05-16 14:54:52.345408',52),(366,'0:0:0:0:0:0:0:1','2025-05-16 14:57:53.521370',3),(367,'0:0:0:0:0:0:0:1','2025-05-16 14:58:51.025063',52),(368,'0:0:0:0:0:0:0:1','2025-05-16 15:00:31.795355',52),(369,'0:0:0:0:0:0:0:1','2025-05-16 15:09:49.953629',103),(370,'0:0:0:0:0:0:0:1','2025-05-16 15:09:57.514209',103),(371,'0:0:0:0:0:0:0:1','2025-05-16 15:10:04.593389',7),(372,'0:0:0:0:0:0:0:1','2025-05-16 15:13:10.030322',1),(373,'0:0:0:0:0:0:0:1','2025-05-16 15:13:20.602210',2),(374,'0:0:0:0:0:0:0:1','2025-05-16 15:30:33.264387',6),(375,'0:0:0:0:0:0:0:1','2025-05-16 15:30:43.659028',5),(376,'0:0:0:0:0:0:0:1','2025-05-16 15:37:30.078852',103),(377,'0:0:0:0:0:0:0:1','2025-05-16 15:44:40.037568',6),(378,'0:0:0:0:0:0:0:1','2025-05-16 15:44:44.710445',7),(379,'0:0:0:0:0:0:0:1','2025-05-16 15:44:51.113444',103),(382,'0:0:0:0:0:0:0:1','2025-05-17 14:58:11.789820',9),(383,'0:0:0:0:0:0:0:1','2025-05-17 15:07:56.170153',2),(384,'0:0:0:0:0:0:0:1','2025-05-17 15:08:51.551673',1),(385,'0:0:0:0:0:0:0:1','2025-05-17 15:10:32.128685',1),(386,'0:0:0:0:0:0:0:1','2025-05-19 15:23:05.491359',1),(387,'0:0:0:0:0:0:0:1','2025-05-19 15:24:19.536499',7),(388,'0:0:0:0:0:0:0:1','2025-05-20 12:16:53.758930',4),(389,'0:0:0:0:0:0:0:1','2025-05-20 12:16:56.800978',2),(390,'0:0:0:0:0:0:0:1','2025-05-20 12:17:14.342524',1),(391,'0:0:0:0:0:0:0:1','2025-05-20 12:17:53.483760',1),(392,'0:0:0:0:0:0:0:1','2025-05-20 12:19:19.941914',4),(393,'0:0:0:0:0:0:0:1','2025-05-20 12:19:58.326982',3),(394,'0:0:0:0:0:0:0:1','2025-05-20 12:20:43.404714',3),(395,'0:0:0:0:0:0:0:1','2025-05-20 16:49:15.594701',2),(396,'0:0:0:0:0:0:0:1','2025-05-20 17:07:27.540734',4),(397,'0:0:0:0:0:0:0:1','2025-05-20 17:15:34.840171',2),(398,'0:0:0:0:0:0:0:1','2025-05-20 17:16:47.743550',3),(399,'0:0:0:0:0:0:0:1','2025-05-21 10:41:48.093126',2),(400,'127.0.0.1','2025-05-21 13:15:12.030391',1),(401,'0:0:0:0:0:0:0:1','2025-05-21 14:00:24.439210',1),(402,'0:0:0:0:0:0:0:1','2025-05-21 14:04:44.791965',1),(403,'0:0:0:0:0:0:0:1','2025-05-21 14:08:14.003042',7),(404,'0:0:0:0:0:0:0:1','2025-05-21 14:08:21.029288',1),(405,'0:0:0:0:0:0:0:1','2025-05-21 14:08:31.628242',8),(406,'0:0:0:0:0:0:0:1','2025-05-21 14:09:39.218061',1),(407,'0:0:0:0:0:0:0:1','2025-05-21 14:11:13.946790',1),(408,'0:0:0:0:0:0:0:1','2025-05-21 14:14:20.209196',1),(409,'0:0:0:0:0:0:0:1','2025-05-21 15:03:29.289200',1),(410,'0:0:0:0:0:0:0:1','2025-05-21 15:06:19.329213',2),(411,'0:0:0:0:0:0:0:1','2025-05-21 15:08:09.046492',1),(412,'0:0:0:0:0:0:0:1','2025-05-21 15:10:48.610107',1),(413,'0:0:0:0:0:0:0:1','2025-05-21 15:23:46.061247',1),(414,'0:0:0:0:0:0:0:1','2025-05-21 15:36:32.034975',1),(415,'0:0:0:0:0:0:0:1','2025-05-21 15:38:40.175242',3),(416,'0:0:0:0:0:0:0:1','2025-05-21 15:41:37.467405',4),(417,'0:0:0:0:0:0:0:1','2025-05-21 15:46:26.049915',2),(418,'0:0:0:0:0:0:0:1','2025-05-21 15:53:56.576019',1),(419,'0:0:0:0:0:0:0:1','2025-05-21 16:04:05.869157',3),(420,'0:0:0:0:0:0:0:1','2025-05-21 16:04:19.411497',1),(421,'0:0:0:0:0:0:0:1','2025-05-21 16:05:40.200846',2),(422,'0:0:0:0:0:0:0:1','2025-05-21 16:18:23.527604',1),(423,'0:0:0:0:0:0:0:1','2025-05-21 16:52:15.869110',4),(424,'0:0:0:0:0:0:0:1','2025-05-21 16:57:16.681231',1),(425,'0:0:0:0:0:0:0:1','2025-05-21 16:57:33.588438',8),(426,'0:0:0:0:0:0:0:1','2025-05-21 17:05:35.192481',6),(427,'0:0:0:0:0:0:0:1','2025-05-21 21:38:00.968336',2),(428,'0:0:0:0:0:0:0:1','2025-05-21 21:39:12.220987',2),(429,'0:0:0:0:0:0:0:1','2025-05-22 13:21:56.594402',3),(430,'0:0:0:0:0:0:0:1','2025-05-22 13:26:21.394990',3),(431,'0:0:0:0:0:0:0:1','2025-05-22 13:28:02.265583',2),(432,'0:0:0:0:0:0:0:1','2025-05-22 13:31:50.836429',2),(433,'0:0:0:0:0:0:0:1','2025-05-22 13:38:57.626576',1),(434,'0:0:0:0:0:0:0:1','2025-05-22 13:41:20.402539',2),(435,'0:0:0:0:0:0:0:1','2025-05-22 13:42:26.620471',3),(436,'0:0:0:0:0:0:0:1','2025-05-22 13:53:52.505107',4),(437,'0:0:0:0:0:0:0:1','2025-05-22 13:56:00.958558',3),(438,'0:0:0:0:0:0:0:1','2025-05-22 15:02:39.463779',2),(439,'0:0:0:0:0:0:0:1','2025-05-22 15:03:08.667994',2),(440,'0:0:0:0:0:0:0:1','2025-05-22 15:15:51.601254',103),(441,'0:0:0:0:0:0:0:1','2025-05-22 15:22:01.698771',3),(442,'0:0:0:0:0:0:0:1','2025-05-22 15:22:09.983313',3),(443,'0:0:0:0:0:0:0:1','2025-05-22 16:01:12.213614',3),(444,'0:0:0:0:0:0:0:1','2025-05-22 16:07:06.245921',2),(445,'0:0:0:0:0:0:0:1','2025-05-22 16:21:58.200450',8),(446,'0:0:0:0:0:0:0:1','2025-05-22 17:11:28.449734',1),(447,'0:0:0:0:0:0:0:1','2025-05-22 17:13:14.923812',7),(448,'0:0:0:0:0:0:0:1','2025-05-22 17:15:16.806863',4),(449,'0:0:0:0:0:0:0:1','2025-05-22 20:35:02.078422',5),(450,'0:0:0:0:0:0:0:1','2025-05-22 20:38:31.187387',6),(451,'0:0:0:0:0:0:0:1','2025-05-22 20:38:42.694178',6),(452,'0:0:0:0:0:0:0:1','2025-05-22 21:38:17.840035',8),(453,'0:0:0:0:0:0:0:1','2025-05-22 21:38:35.142623',8),(454,'0:0:0:0:0:0:0:1','2025-05-23 10:35:43.494900',7),(455,'0:0:0:0:0:0:0:1','2025-05-23 10:36:00.841891',2),(456,'0:0:0:0:0:0:0:1','2025-05-23 10:51:11.770909',2),(457,'0:0:0:0:0:0:0:1','2025-05-23 10:51:17.407958',1),(458,'0:0:0:0:0:0:0:1','2025-05-23 10:51:22.498982',3),(459,'0:0:0:0:0:0:0:1','2025-05-23 10:51:28.495931',4),(460,'0:0:0:0:0:0:0:1','2025-05-23 11:10:30.376940',5),(461,'0:0:0:0:0:0:0:1','2025-05-23 11:13:43.078969',2),(462,'0:0:0:0:0:0:0:1','2025-05-23 11:17:58.503335',6),(463,'0:0:0:0:0:0:0:1','2025-05-23 11:20:22.667219',7),(464,'0:0:0:0:0:0:0:1','2025-05-23 11:24:43.557632',52),(465,'0:0:0:0:0:0:0:1','2025-05-23 11:25:12.099490',7),(466,'0:0:0:0:0:0:0:1','2025-05-23 11:32:57.357203',252),(467,'0:0:0:0:0:0:0:1','2025-05-23 11:44:08.378399',7);
/*!40000 ALTER TABLE `view_recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `view_recipe_seq`
--

DROP TABLE IF EXISTS `view_recipe_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `view_recipe_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `view_recipe_seq`
--

LOCK TABLES `view_recipe_seq` WRITE;
/*!40000 ALTER TABLE `view_recipe_seq` DISABLE KEYS */;
INSERT INTO `view_recipe_seq` VALUES (201);
/*!40000 ALTER TABLE `view_recipe_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-23 12:51:30
