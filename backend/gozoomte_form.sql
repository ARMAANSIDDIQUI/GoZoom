-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 02, 2026 at 05:31 PM
-- Server version: 5.7.23-23
-- PHP Version: 8.1.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gozoomte_form`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `admin_name` varchar(255) NOT NULL,
  `admin_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`admin_name`, `admin_password`) VALUES
('admin123', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `angularform`
--

CREATE TABLE `angularform` (
  `id` int(70) NOT NULL,
  `name` varchar(255) NOT NULL,
  `bussiness` varchar(200) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNo` varchar(20) NOT NULL,
  `subject` varchar(300) NOT NULL,
  `textArea` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `angularform`
--

INSERT INTO `angularform` (`id`, `name`, `bussiness`, `email`, `phoneNo`, `subject`, `textArea`) VALUES
(1, 'Rishabh Kumar', 'm m ll', 'kjfjokf@gmail.com', '+918218422497', 'kmlml', ', ,m mllk'),
(2, 'Rishabh Kumar', 'm m ll', 'kjfjokf@gmail.com', '+918218422497', 'kmlml', ', ,m mllk'),
(3, 'Rishabh Kumar', 'm m ll', 'kjfjokf@gmail.com', '+918218422497', 'kmlml', ', ,m mllk'),
(4, '', '', 'kjfjokf@gmail.com', '+918218422497', ' ioo', 'n '),
(5, '', '', '3292864@gmail.com', '435737733', 'Hello', ''),
(6, '', '', 'fr', 'frf', 'fr', 'frf'),
(7, '', '', 'mail2mohitchhabra@gmail.com', '956djendjen', 'deiomdeidmeimdeimdeidemdimediedede', 'mcirmimrrmfimrif'),
(8, '', '', 'kjfjokf@gmail.com', '18422497', 'hi', 'jnmnmn'),
(9, 'Rishabh', 'IT', 'Rishabh@64Gmail.com', '243423432', 'ge', 'feds'),
(10, 'Rishabh Kumar', 'jkkj', 'kjfjokf@gmail.com', '22497', 'kmlml', 'hi'),
(11, 'Rishabh Kumar', 'm m ll', 'kjfjokf@gmail.com', '+918218422497', 'kkll', 'n'),
(12, 'Rishabh Kumar', 'd', 'kjfjokf@gmail.com', '+918218422497', 'kmlml', 'hi'),
(13, 'Rishabh Kumar', 'm m ll', 'kjfjokf@gmail.com', '+918218422497', 'hi', 'hi'),
(14, 'Mohd Suhail', 'IT', 'mohdsuhail2232@gmail.com', '+919690419681', 'Sub', 'text'),
(15, 'Mohd Suhail', 'IT', 'mohdsuhail2232@gmail.com', '+919690419681', 'Sub', 'text'),
(16, 'Naincy Maheshwari', '', 'naincymaheshwari010@gmail.com', '9411661310', 'Inquiring about any job opportunities for freshers', 'My name is Naincy Maheshwari, and I am pursuing my graduation with a Bachelor\'s of Technology in Computer Science and Engineering from SRMS College of Engineering Technology & Research, Bareilly. I am writing to inquire about any job opportunities for freshers within your esteemed company.\r\nDuring my academic career, I have developed a strong fouandation in Python, Django, Flask, Angular, MySQL, Web Development. I have worked on various project like CodeBotIQ, Blog-App, E-Commerce website, Web Scraper.\r\nI am confident that my enthusiasm for technology, coupled with my willingness to learn and adapt, would make me a valuable addition to your team. I am particularly interested in roles related to Full-Stack Development, Frontend Development, Backend Development, Web Development, but I am open to exploring any opportunities that align with my skills and career goals.\r\nI have attached my resume for your review and would be grateful for the opportunity to discuss how my background, skills, and certifications might align with the needs of your team.\r\nThank you for considering my application. I look forward to the possibility of contributing to company and am available for an interview at your earliest convenience.\r\n\r\nWarm regards,\r\nNaincy Maheshwari\r\nContact - 9411661310\r\nEmail - naincymaheshwari010@gmail.com\r\nLinkedIn Profile - https://www.linkedin.com/in/naincy-maheshwari-592039239/\r\nResume -https://drive.google.com/file/d/16P3WYRh9g__ZVBajrR4iTuoRUQUeTslb/view?usp=drive_link'),
(17, 'Himani', 'development', 'himanipapnejacan@gmail.com', '4375220258', '', 'development'),
(18, 'Himani', 'development', 'himanipapnejacan@gmail.com', '4373568', '', ''),
(19, '???? Sending a transaction from unknown user. Verify >>> https://telegra.ph/Go-to-your-personal-cabinet-08-25?hs=cd0441af90e0205b4d95bb4e704edcad& ????', '8308wu', 'azizxkill1@setxko.com', '387793443674', 'kr2e4m', 'x7ljzn'),
(20, '???? Notification: You got a transfer №VE26. ASSURE >>> https://telegra.ph/Message--2868-12-25?hs=cd0441af90e0205b4d95bb4e704edcad& ????', 'f567gg', 'jmehoff@gmailod.com', '088408878413', '7ur4rf', 'begeie'),
(21, '???? Reminder: Operation 1,709411 BTC. Withdraw > https://yandex.com/poll/5JjqQt7R61CTYdYVd17t6p?hs=cd0441af90e0205b4d95bb4e704edcad& ????', 'wcqo86', 'txahole@eewmaop.com', '790560073856', 'wrhjjc', 'm1u5sq'),
(22, '???? Reminder- TRANSFER 1.734320 BTC. Withdraw >>> https://yandex.com/poll/enter/By66Z3YWQWkK5iqcyPFgjU?hs=cd0441af90e0205b4d95bb4e704edcad& ????', '0m652c', 'aurorabnkwy@gmailbrt.com', '929579398152', 'eha8xr', 'au8uc5'),
(23, '???? Notification: + 1,758642 BTC. Go to withdrawal > https://graph.org/Payout-from-Blockchaincom-06-26?hs=cd0441af90e0205b4d95bb4e704edcad& ????', 'dckhir', 'azizxkill1@setxko.com', '133181175413', 'hpm857', 'up34oi'),
(24, '???? ???? Bitcoin Credit - 0.42 BTC detected. Access now >> https://graph.org/WITHDRAW-BITCOIN-07-23?hs=cd0441af90e0205b4d95bb4e704edcad& ????', '3qzoe6', 'azizxkill1@setxko.com', '297132556728', '29p08f', 'wd68iz'),
(25, 'casino-uzb.top', 'Griffith Solutions', 'jonathon_griffith@yahoo.com', '2315978404', 'Software Development Company - Gozoom', 'My name\'s Jonathon Griffith but everybody calls me Jonathon. I\'m from United States. I\'m studying at the university (2nd year) and I play the Trumpet for 4 years. Usually I choose music from my famous films :). \r\nI have two brothers. I like Table tennis, watching movies and Australian Football League.'),
(26, '???? ???? Wallet Update - 1.1 Bitcoin pending. Complete reception > https://graph.org/Get-your-BTC-09-11?hs=cd0441af90e0205b4d95bb4e704edcad& ????', 'ero9m3', 'dan89@mailgetget.asia', '702537453059', 'l75rad', 'oyxuei'),
(27, 'cErNzvjSIUzNHKAoOdblh', 'YxSljjHrAqvSAavQGmwxkDYw', 'axejazenoq57@gmail.com', '4246484567', 'XaPUuUIneQXRycFadUa', 'TWcSIZzwwRYOpntMH'),
(28, '???????? Sex Dating. Continue ➸ yandex.com/poll/43o224okZdReGRb1Q8PXXJ?hs=cd0441af90e0205b4d95bb4e704edcad& Alert # INGR8768494 ????????', '93we0x', 'roofa2000@automisly.org', '910730680361', 'v8a034', 'liltt5');

-- --------------------------------------------------------

--
-- Table structure for table `ashram`
--

CREATE TABLE `ashram` (
  `id` int(255) NOT NULL,
  `vehicle_no` varchar(255) NOT NULL,
  `name` varchar(280) NOT NULL,
  `contact_number` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ashram`
--

INSERT INTO `ashram` (`id`, `vehicle_no`, `name`, `contact_number`) VALUES
(67, '123456', 'MohitChhabra ', '9560966122'),
(68, '5558', 'St', '225'),
(69, '5565555888', 'Mohit', '9560966122'),
(70, 'UP21B78', 'Rishabh', '+1204604222'),
(71, 'Crky679', 'Dikshant grover', '6476852512'),
(72, 'UP12gh', 'Rishabh', '956569'),
(73, 'SSDNRV', 'Rishabh', '9057814192'),
(74, 'CRLF190', 'Kunal Kapoor', '6479016990'),
(75, 'ISSDNI', 'Hardik Sudan', '2368824734'),
(76, 'J20PPN', 'Mohit', '4372553762'),
(77, 'IISSDNII', 'Arun Luthra', '4168481077'),
(78, 'RNARULA', 'Ravi Narula', '4164516220'),
(79, 'CEJF460', 'Sunil bhatia', '3065019031'),
(80, 'BR76874', 'Paras ', '9059669786'),
(81, 'CPSD244', 'Dhiraj Mehta', '6476147782'),
(82, 'CSZB908', 'Hemant Archana', '4169184751'),
(83, 'CTSV299', 'Kaushal Huria', '6475325222'),
(84, 'CXFV472', 'Rohita Khanna', '3658800801'),
(85, 'CXZP572', 'Sanket Sharma', '3657778860'),
(86, 'PB72GARG', 'Rajat Garg', '4377701581'),
(87, 'hjhj12', 'harry', '8777978'),
(88, '34234232432', 'hjgy', '8978979'),
(89, 'Bawa676', 'Ranjeev Manas', '6472943995'),
(90, 'CJLF737', 'Ajay Batra', '6472619568'),
(91, 'CJVH087', 'Ravi Chopra', '4163337284'),
(92, 'CHZN440', 'Aman Gupta', '4168220416'),
(93, 'Cytm234', 'Gajendra Arora', '6478655264');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `image_filename` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `introduction` text,
  `heading1` varchar(255) DEFAULT NULL,
  `paragraph1` text,
  `heading2` varchar(255) DEFAULT NULL,
  `paragraph2` text,
  `heading3` varchar(255) DEFAULT NULL,
  `paragraph3` text,
  `heading4` varchar(255) DEFAULT NULL,
  `paragraph4` text,
  `heading5` varchar(255) DEFAULT NULL,
  `paragraph5` text,
  `conclusion` text,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `image_filename`, `title`, `introduction`, `heading1`, `paragraph1`, `heading2`, `paragraph2`, `heading3`, `paragraph3`, `heading4`, `paragraph4`, `heading5`, `paragraph5`, `conclusion`, `date`) VALUES
(5, '6992_img121.jpg', 'The Ultimate Guide to Website Development: Creating a Stunning Online Presence', 'Any firm in the modern digital era needs to have a strong online presence. Here\'s when website development comes into play. Developing a visually beautiful and user-friendly website is crucial for drawing in clients and building your brand, regardless of the size of your company. We\'ll dive into the world of website building and examine the essential components that lead to a good website in this full-depth guide.', 'Understanding Website Development', 'The process of building, developing, and managing a website is called website development. It includes a number of things, including coding, content production, and site design. You can make sure that your website is not only pleasing to the eye but also practical and user-friendly by collaborating with experienced website developers. With custom web development, you may modify your website according to your particular company requirements and stand out from the competition.', 'Importance of UI & UX Designs', 'Designs for the user interface (UI) and user experience (UX) are crucial components of website development. A well-designed website offers a smooth user experience in addition to being visually appealing. While UX designs put the needs of users and usability first, effective UI designs concentrate on improving the website\'s visual attractiveness. You may establish a productive relationship with your audience and boost engagement and conversions by implementing UI and UX aspects into your website.', 'The Cost to Build a Website', 'The price to develop a website varies depending on the project\'s complexity. The price depends on a number of factors, including the size of the website, the features that are needed, and the level of customisation. When starting a website development project, it is important to take your budget and company objectives into account. Even while it might be tempting to go with the cheapest option, your business will profit in the long run if you invest in a professional website design.', 'Responsive Design for Website Building', 'Having responsive design is essential for developing websites. A website that adjusts to various screen sizes is vital due to the growing trend of using mobile devices. Regardless of the device your audience is using, a responsive web development guarantees that your website is accessible and user-friendly. You may increase your online presence and reach a larger audience by creating a responsive website.', 'Building an E-commerce Website', 'Developing an online storefront is essential for companies wishing to offer goods or services. The process of developing an online store that is safe, user-friendly, and conversion-optimized is known as e-commerce website development. Customers may have a polished and easy-to-use online purchasing experience if you collaborate with a web design company that specializes in e-commerce websites.', 'In summary, developing a website is an essential part of creating a strong online presence. You can build an amazing website that engages users and generates results by focusing on UI and UX designs, selecting the best web design firm, and developing responsive online content. Making an investment in expert website creation may make you stand out in the digital space, regardless of the size of your company.Are you ready to take your online presence to the next level?', '2024-05-02'),
(6, '6124_Untitled design (7).jpg', 'How Digitizing Your Business Can Transform Your Operations', 'The idea of izing your business has become more crucial than ever in the current fast-paced digital age. Companies that don\'t keep up with technology developments run the danger of losing ground to rivals. Adopting digital transformation is essential if you want to remain competitive and relevant in the marketplace.\r\n\r\nThe need to digitize your business has become essential due to the increase of internet marketing, e-commerce, and remote employment. This blog article will examine the benefits of digitizing your company and offer helpful first steps to get you going.', 'Why Digitize Your Business?', 'Using digital technology and methods to digitize your company may increase customer satisfaction, increase productivity, and simplify operations. It ensures a seamless experience by enabling improved client involvement across many platforms, including websites, social media, and mobile apps. By using automation solutions to reduce manual activities, save time, and improve organizational efficiency, productivity may be increased. Digital technologies enable the collecting and analysis of data, hence enhancing company strategy and enabling data-driven decision-making. Furthermore, digitalization gives firms a worldwide reach, allowing them to penetrate new markets and grow beyond regional borders. Businesses who embrace digital transformation can outperform others who adopt new technology more slowly.', 'Steps to Digitize Your Business', 'In order to effectively digitize your business, you need first evaluate your present operations to determine which areas—such as marketing campaigns, inventory management, and customer interactions—can profit from digitalization. Invest in software and digital technologies that help your business communicate better, automate processes, and simplify operations. To ensure a seamless transition, train and assist your staff in adjusting to new digital tools and procedures. To prevent effort duplication and data silos, make sure that your digital tools and technology integrate seamlessly. Keep an eye on the way your company processes are digitizing and change as needed to get the best possible outcomes.', 'Tools and Technologies for Digitization', 'You may digitize your business using a variety of tools and technology, such as cloud computing services, e-commerce platforms, analytics tools, CRM software, and enterprise resource planning (ERP) systems. Utilizing these technologies can help you increase productivity, optimize processes, and provide better customer service.', 'Benefits of Digitizing Your Business', 'Because digitization eliminates manual procedures and increases operational efficiency, it can result in considerable cost savings. By facilitating real-time involvement and individualized services, it improves the client experience. Digitizing your company also enables you to put strong cybersecurity safeguards in place to safeguard your assets and data. Additionally adaptable and flexible, digital solutions let your company expand limitlessly.', 'Ecommerce Apps: Your Rocket Fuel for Business Growth', 'Don\'t pass on the growing popularity of mobile shopping!  An e-commerce app allows you to target customers with specials, provides a smooth buying experience, and keeps your store open around-the-clock.  Increase brand exposure, get insightful data, and see a sharp increase in sales.  E-commerce applications are the growth-promoting jet fuel your company requires.', 'Put it all up, digitizing your company is crucial to its success in the digital era and maintaining its competitiveness. You may improve customer satisfaction, accelerate growth, and streamline processes by embracing digital transformation. You may put yourself in a successful position in the rapidly changing digital world by implementing the required measures to digitize your firm now. Begin the process of digitizing your company right away to realize its full potential and become a more adaptable, effective, and customer-focused enterprise.', '2024-05-18'),
(7, '2486_0_c76zWkylO5ltFqsR.jpg', 'Website Development Services in Toronto, Canada: Everything You Need to Know', 'Are you trying to find the best website development services in Toronto, Canada to improve your online presence? There\'s nowhere else to look! We\'ll go into the topic of website development in this blog article and examine how it may take your brand to new heights online.', 'The Importance of Website Development Services', 'Today\'s businesses need to have a strong online presence, and website creation is essential to that. A user-friendly and visually appealing website is crucial in the ever changing digital world to draw in and keep clients. You can make sure that the performance, functionality, and user experience of your website are improved by making an investment in website development services.', 'Key Features of Website Development Services in Toronto, Canada', 'There are several features available for website creation services in Toronto, Canada, to meet your individual requirements. A trustworthy website development firm will provide all-inclusive solutions to help your business prosper online, from content management systems and SEO optimization to responsive design and e-commerce integration.', 'Benefits of Investing in Website Development Services', 'Your company may profit significantly from website creation services in a number of ways. These include better user experiences, higher conversion rates, better search engine rankings, and more brand visibility. You can differentiate yourself from the competition and leave a lasting impression on your target audience with a well-designed website.', 'Choosing the Right Website Development Company', 'It is crucial to take into account a website development company\'s experience, portfolio, and customer testimonials while choosing one in Toronto, Canada. Seek out a group of skilled experts that will understand your particular needs and provide solutions that are customized and in line with your brand goals. You may achieve sustained development and elevate your online presence by collaborating with the ideal agency.', 'Gozoom Technologies: Toronto\'s Top Web Developers!', 'Gozoom Technologies, a Toronto, Canada-based company that pioneers in website building, specializes in NextJS, ReactJS, and other cutting-edge technologies. They ensure that businesses of all sizes may prosper online by providing premium solutions at reasonable costs, thanks to their staff of knowledgeable developers', 'In conclusion, Canadian website building services in Toronto provide a plethora of chances for companies trying to make a big impression online. Through the utilization of expert website building, you can improve the exposure of your brand, successfully interact with your audience, and propel growth in the digital realm. So why hold off? With our excellent website creation services, you can start transforming your online presence today!', '2024-05-31'),
(8, '9758_Digital-marketing-company-in-Kurukshetra.jpg', 'Digital Marketing Services in Toronto, Canada', 'Looking for top-notch digital marketing services in Toronto, Canada to help you grow your company? In the current environment, digital marketing has emerged as a critical component of success. By using effective techniques, you may boost brand awareness, draw in new clients, and accelerate revenue development. Businesses in Toronto, Canada\'s thriving metro are always fighting for attention online. Effective digital marketing is more important than ever as people use the internet to research, interact with, and buy products from firms. Gozoom Technologies stands out as the leader in this digital world, leading companies in the direction of success on the internet.', 'Why Digital Marketing is Essential in Toronto, Canada', 'Having a good online presence is essential for sticking out in the crowded market of today. Given that Toronto is Canada\'s largest city and a center for innovation and creativity, it is imperative that businesses use digital marketing services to successfully reach their target audience. Given Toronto\'s high internet penetration rate and tech-savvy populace, digital marketing is revolutionary for companies trying to grow in the city. Because of Toronto\'s dynamic environment, varied population, high internet usage, and capacity to reach both domestic and international audiences, digital marketing is crucial there. With quantifiable outcomes and affordable options, digital marketing helps companies succeed in Toronto\'s ever-changing marketplace.', 'The Top Digital Marketing Services Available in Toronto', 'Improve your website\'s exposure on search engines like Google using search engine optimization (SEO) to draw in organic visitors and expand your online presence.\r\n\r\nPay-Per-Click (PPC) Advertising: Use paid search engine and platform advertisements, such as Google Ads, to drive instant traffic to your website.\r\n\r\nSocial media marketing: To increase brand recognition and encourage consumer interaction, interact with your audience on well-known social media sites like Facebook, Instagram, and Twitter.\r\n\r\nmaterial marketing: Produce insightful, useful material to draw in and keep clients while establishing your company as a thought leader in your sector.\r\n\r\nEmail marketing: Use customized email campaigns to nurture prospects, uphold client relationships, and increase conversions and brand loyalty.', 'How to Choose the Best Digital Marketing Agency in Toronto', 'Experience and Expertise: Seek out a digital marketing firm in Toronto that has a track record of successfully producing outcomes for companies.\r\n\r\nCustomized Strategies: Select a company that provides solutions that are specifically designed to fit your company\'s aims and objectives.\r\n\r\nTransparency & Communication: Choose a digital marketing agency that keeps lines of communication open and keeps you updated at every stage of the process.\r\n\r\nClient Testimonials and Reviews: To determine the reputation and dependability of the agency, go through reviews and testimonials from prior clients.', 'The Impact of SEO in Boosting Online Visibility', 'Search engine optimization is one of the most important components of digital marketing (SEO). You may raise your website\'s search engine ranks and draw in organic visitors by optimizing its content for pertinent keywords. By implementing effective SEO tactics, you may improve your company\'s online presence and attract more quality prospects.', 'Benefits of Digital Marketing Services in Toronto Canada', 'Enhanced Online Visibility: You may reach a larger audience and increase website traffic by making the most of your online presence.\r\n\r\nTargeted Advertising: With digital marketing, you may focus on particular hobbies and demographics to make sure the correct people see your message.\r\n\r\nEnhanced Brand Reputation: You may gain the audience\'s confidence and credibility by using consistent branding and messaging.\r\n\r\nMeasurable Outcomes: You can track the effectiveness of your efforts and make wise decisions by using the insightful data and insights that digital marketing offers.', 'In conclusion, companies hoping to succeed in the digital era would be well advised to invest in digital marketing services in Toronto, Canada. You may improve your brand and expand your online audience by combining SEO, PPC, social media marketing, content marketing, and email marketing. Don\'t forget to pick a trustworthy digital marketing firm that can meet your specific business objectives and provide noticeable outcomes. Begin your digital marketing adventure right now, and watch your company reach new heights!\r\n\r\nAre you interested in using the best digital marketing services available in Toronto to grow your business? Reach out to us right now to get going!', '2024-05-31'),
(9, '2238_mobile-application-development-guidelines-riseuplabs.jpg', 'Mobile App Development Services in Canada', 'Having a mobile app for your business is crucial in the modern digital era if you want to maintain market competitiveness. In Canada, there is a growing need for mobile app development services due to the growing number of smartphone users. Companies are using specialized app development firms to provide solutions that are tailored to their own requirements. We\'ll go into the realm of Canadian mobile app development services in this blog article and explain why they\'re crucial to the success of your company.', 'Why Choose Mobile App Development Services in Canada?', 'Canada\'s mobile app development services are renowned for their creative and superior solutions. Modern mobile apps that are safe, aesthetically pleasing, and easy to use are the hallmark of Canadian app development businesses. You may take advantage of a Canadian app development company\'s experience creating mobile applications for a range of sectors, such as e-commerce, healthcare, finance, and more.', 'The Benefits of Mobile App Development Services', 'Customized Solutions: Canadian app development firms provide solutions that are specifically designed to satisfy your company\'s particular needs.\r\n\r\nUser-Friendly Design: Canadian firms are well-known for their mobile applications\' flawless user experiences and user-friendly interfaces.\r\n\r\nSecurity: Strict security procedures are used by Canadian app development businesses to guarantee that your software is shielded from online attacks and data leaks.\r\n\r\nScalability: Because Canadian app development services are scalable, your app may expand along with your company and change to reflect shifting consumer preferences.', 'How to Find the Right Mobile App Development Company in Canada', 'The following elements are crucial to take into account while searching for a Canadian mobile app development company:\r\n\r\nExperience: Pick a business that has a track record of producing mobile apps that work.\r\n\r\nPortfolio: Examine the company\'s prior work to discover whether they have expertise creating applications for your sector by looking through their portfolio.\r\n\r\nconsumer Testimonials: Examine consumer feedback and reviews to gain insight into the company\'s standing and level of client happiness.\r\n\r\nCost: Take your money into account and pick a business that provides reasonable price without sacrificing quality.', 'Why Choose Gozoom Technologies for Mobile App Development?', 'Gozoom Technologies is not your typical app development business. They take great satisfaction in using cutting-edge techniques to build personalized mobile apps that are tailored to the particular requirements of every company. Gozoom technology guarantees that every app they develop is of the greatest caliber by comprehending the needs of their clients and utilizing cutting-edge technology.\r\nExpertise: Gozoom Technologies is home to a group of incredibly talented engineers and designers with years of expertise in producing mobile applications that excel.\r\n\r\nInnovation: To deliver creative solutions for your company, the Gozoom Technologies team is always pushing the limits of technology and remaining current with the newest tools and trends.\r\n\r\nClient-Centric Approach: Gozoom Technologies places great emphasis on meeting the needs of its clients. They collaborate carefully with each customer to fully grasp their particular wants and requirements before customizing solutions to fulfill those objectives.', 'Services Offered by Gozoom Technologies', 'To satisfy our clients\' varied demands, Gozoom Technologies provides a wide range of mobile app development services. Regardless of whether you want to develop a cross-platform, native iOS, or Android software, our staff has the know-how to provide excellent outcomes.\r\n\r\nAmong our offerings are:\r\n\r\ncreation of bespoke apps\r\n\r\nUI/UX design\r\n\r\nUpkeep and assistance for apps\r\n\r\nTesting for quality control\r\n\r\nPerformance and security enhancement of apps', 'In conclusion, companies trying to remain ahead of the digital curve must invest in Canadian mobile app development services. With the correct app development business, you can make a personalized mobile application that draws users in, promotes brand awareness, and increases sales. You need go no farther than our knowledgeable staff if you\'re searching for the best mobile app development services available in Canada. Reach out to us right now to talk about your demands for app development and to advance your company.', '2024-06-03'),
(10, '9268_1_6nYUC085BvnAPVPAEYdDag.jpg', 'The Future of E-Commerce: Web and Mobile Development Trends in 2024', 'E-commerce has a bright future ahead of it, with new trends in web and mobile development expected to completely change how companies conduct business online by 2024. Staying competitive is dependent on your ability to comprehend these trends, as customers are turning more and more to digital purchasing. Regardless of the size of your marketplace or small online business, staying up to date with the newest advancements in web and mobile technologies will enable you to maximize the shopping experience for your customers.', 'The Rise of Artificial Intelligence', 'The application of artificial intelligence (AI) is changing how companies handle online sales. Its influence is evident in everything from chatbots that offer round-the-clock customer service to AI-powered product recommendation engines that customize online shopping experiences.\r\n\r\nAI in Customer Service: Chatbot implementation may greatly cut down on response times and improve customer satisfaction. They can deal with many queries at once, guaranteeing your clients get help right away.\r\n\r\nCustomized Suggestions: Businesses such as Amazon employ artificial intelligence (AI) systems to evaluate user information and provide recommendations that are specific to each user\'s interests, hence boosting conversion rates.\r\n\r\nYour site or mobile development approach may successfully increase user engagement and boost revenue by using AI.', 'Personalization in E-Commerce', 'Personalized buying experiences will be a major trend in 2024. Clients like specialized services that suit their tastes.\r\n\r\nTailored Content: Websites ought to use user information to show relevant ads, merchandise, and even customized landing pages. Customers are more inclined to interact with personalized material, according to a research.\r\n\r\nDynamic Pricing: Changing pricing in response to consumer behavior can increase revenue. You may utilize data analytics to determine rates that take user involvement and demand trends into account.\r\n\r\nBy putting an emphasis on personalisation, companies may foster a sense of connection that turns infrequent visitors into loyal customers.', 'Mobile Optimization', 'The success of e-commerce continues to depend on mobile optimization, given the rising use of smartphones. You run the danger of losing potential clients if your online store isn\'t mobile-friendly.\r\n\r\nMake sure your website is responsive so that it can easily adjust to different screen widths. This helps Google search ranking in addition to improving user experience.\r\n\r\nMobile Payment Options: Including widely used payment methods like Google Wallet and Apple Pay streamlines the checkout process and boosts revenue.\r\n\r\nFocusing on improving mobile experiences is crucial because mobile devices account for over 50% of e-commerce transactions.', 'Social Commerce', 'Social networking is become an essential component of the buying experience rather than merely a platform for interaction. Using social media channels to promote products is becoming more and more popular.\r\n\r\nShoppable Posts: Businesses may make posts that consumers can purchase straight from on social media sites like Facebook and Instagram. You may take advantage of the social commerce trend and expedite the route to buy by including links to your items in postings.\r\n\r\nInfluencer marketing: Collaborating with celebrities to promote items has been shown to be a successful tactic. Their followers heed their advice with great weight.\r\n\r\nYou may reach a wider audience and improve the purchasing experience by including social commerce into your plan.', 'Understanding Customer Experience', 'In 2024, the customer experience will be the top priority in e-commerce. Each interaction, be it your website, mobile application, or customer support, influences how a consumer views your company.\r\n\r\nUser-Friendly Navigation: By simplifying website navigation, users may locate what they need more quickly and easily.\r\n\r\nEasy Checkout: Cart cancellation rates are reduced when the number of stages in the checkout process is reduced.\r\n\r\nYou may cultivate client loyalty and enhance the probability of returning customers by consistently reviewing and improving the total customer experience.', 'By 2024, e-commerce is expected to have seen exponential growth due to developments in web and mobile development. To succeed in this changing environment, businesses must prioritize AI, customization, mobile optimization, AR/VR, social commerce, sustainability, and the customer experience. Companies who catch up with these trends will not only satisfy customers but also gain a competitive edge that will position them for future success.\r\n\r\nTalk to us! Which e-commerce trends do you think will be big in 2024?', '2024-08-31');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_number` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `solution` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `message` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `name`, `email`, `contact_number`, `solution`, `message`) VALUES
(1, 'suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Option 1', 'hello '),
(2, 'Mohit Chhabra', 'CHABRAMOHIT@gmail.com', '9560966122', 'Option 1', 'Hello Suhail'),
(3, 'mohd suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Option 1', 'hello sir this Mohd suhail here this is for testing puposes'),
(4, 'Mohit Chhabra', 'chabramohit@gmail.com', '9560966122', 'Option 1', 'Hello Hello '),
(5, 'suhail ali', 'suhailnagore4@gmail.com', '9690419681', 'Option 1', 'hello this is the sample mail '),
(6, 'suhail ali', 'suhailnagore4@gmail.com', '9690419681', 'Option 1', 'hello this is the sample mail '),
(7, 'suhail', 'suhailnagore4@gmail.com', '9690419681', 'Option 1', 'this is the sample mail'),
(8, 'suhail', 'suhailnagore4@gmail.com', '9690419681', 'Option 1', 'this is the sample mail'),
(9, 'suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Option 1', 'this is for sample mail'),
(10, 'suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Option 1', 'sample mail'),
(30, 'Aditya Agarwal', 'adityaagarwaludi@gmail.com', '8791419874', 'Option 1', 'hello please contact me'),
(43, 'suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Web DEV', 'hello this is for testing'),
(44, 'Robertcet', 'alfredegov@gmail.com', '87173141775', 'Retail', 'Hola, quería saber tu precio..'),
(45, 'Ongann_zwpa', 'user206294@topsite.space', '89576312171', 'Retail', 'InMotion Hosting: InMotion Hosting offers fast and reliable hosting services with excellent customer support. They provide a variety of hosting options, including business hosting, VPS hosting, and dedicated servers. \r\nSiteground: Siteground is known for its exceptional speed and advanced security features. They provide excellent customer support, automatic backups, and a user-friendly interface. <a href=http://webward.pw/>http://webward.pw/</a>.'),
(46, 'Janell Hacking', 'hacking.janell@outlook.com', '50-61-74-63', 'Integration', 'Are you the owner of this site: http://gozoomtech.com? I am happy to inform you that you have been approved to place your submission to our free directory. Please go ahead and submit it by clicking on this link: http://submityoursitefree.12com.xyz/'),
(47, 'Rishabh Kumar', 'rishabh6401@gmail.com', '8218422497', 'Web DEV', 'hi'),
(48, 'Rishabh Kumar', 'rishabh6401@gmail.com', '8218422497', 'Web DEV', 'hi'),
(49, 'Rishabh Kumar', 'rishabh6401@gmail.com', '8218422497', 'Retail', 'hi'),
(50, 'Robertcet', 'alfredegov@gmail.com', '85715119823', 'Web DEV', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(51, 'Robertcet', 'missmaggot666715@gmail.com', '84597798648', 'Retail', 'Hi, I wanted to know your price.'),
(52, 'Robertcet', 'pennie@pendean.com', '88949977228', 'Mobile DEV', 'Hi, I wanted to know your price.'),
(53, 'Robertcet', 'carlosinteriano@ymail.com', '82852112891', 'Web DEV', 'Szia, meg akartam tudni az árát.'),
(54, 'Robertcet', 'nicolas.ziza@barnes-ixair.com', '89173863658', 'Web DEV', 'Hola, volia saber el seu preu.'),
(55, 'Robertcet', 'ericplesssr@gmail.com', '85834459217', 'Mobile DEV', 'Zdravo, htio sam znati vašu cijenu.'),
(56, 'Robertcet', 'ericplesssr@gmail.com', '84999313215', 'Web DEV', 'Hej, jeg ønskede at kende din pris.'),
(57, 'Robertcet', 'katarzyna.banas1@gmail.com', '84397144494', 'Retail', 'Xin chào, tôi muốn biết giá của bạn.'),
(58, 'Robertcet', 'albrightmama6@gmail.com', '82379779644', 'Mobile DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(59, 'Robertcet', 'dennis.heinze@comcast.net', '84133986953', 'Retail', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(60, 'Robertcet', 'telenaweeks@gmail.com', '82893885157', 'Retail', 'Hi, I wanted to know your price.'),
(61, 'Robertcet', 'kjodi0101@yahoo.com', '88557798833', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(62, 'Robertcet', 'Michealahanley1@gmail.com', '86536458791', 'Web DEV', 'Здравейте, исках да знам цената ви.'),
(63, 'Robertcet', 'KASEN101109@GMAIL.COM', '81484126277', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(64, 'Robertcet', 'albertt.enrique@gmail.com', '89168792461', 'Retail', 'Xin chào, tôi muốn biết giá của bạn.'),
(65, 'Robertcet', 'ESPINOZADIEGO@HOTMAIL.COM', '87822925972', 'Mobile DEV', 'Hi, I wanted to know your price.'),
(66, 'Robertcet', 'jfjjr58@aol.com', '82194658592', 'Mobile DEV', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(67, 'Robertcet', 'jfjjr58@aol.com', '83365873382', 'Mobile DEV', 'Hi, ego volo scire vestri pretium.'),
(68, 'Robertcet', 'niajessica39@gmail.com', '85435781912', 'Mobile DEV', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(69, 'Robertcet', 'int0079@gmail.com', '86539838893', 'Web DEV', 'Szia, meg akartam tudni az árát.'),
(70, 'Robertcet', 'buecker-team@t-online.de', '89647154691', 'Mobile DEV', 'Hi, I wanted to know your price.'),
(71, 'Robertcet', 'ashleykosarzecki@gmail.com', '83561181714', 'Web DEV', 'Hej, jeg ønskede at kende din pris.'),
(72, 'Robertcet', 'ethanschultz44@gmail.com', '85722296427', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(73, 'Robertcet', 'int0079@gmail.com', '81961913131', 'Web DEV', 'Salut, ech wollt Äre Präis wëssen.'),
(74, 'Robertcet', 'mark.seligman@aol.com', '88791329953', 'Web DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(75, 'Robertcet', 'deak.steven50@gmail.com', '86759651266', 'Web DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(76, 'Robertcet', 'ashleykosarzecki@gmail.com', '86211949363', 'Mobile DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(77, 'Robertcet', 'ashleykosarzecki@gmail.com', '86923585278', 'Mobile DEV', 'Hi, ego volo scire vestri pretium.'),
(78, 'Robertcet', 'lseletos@gmail.com', '88299313956', 'Retail', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(79, 'Robertcet', 'Jhademarie96@gmail.com', '83273324529', 'Web DEV', 'Ola, quería saber o seu prezo.'),
(80, 'Robertcet', 'Ctown849@aol.com', '84267656249', 'Mobile DEV', 'Xin chào, tôi muốn biết giá của bạn.'),
(81, 'Robertcet', 'Kaitlyn.Summers@wakeassoc.com', '81751868934', 'Retail', 'Ola, quería saber o seu prezo.'),
(82, 'Robertcet', 'dotcruz@yahoo.com', '88694536333', 'Retail', 'Hej, jeg ønskede at kende din pris.'),
(83, 'Robertcet', 'tdroy2012@gmail.com', '89911452834', 'Web DEV', 'Zdravo, htio sam znati vašu cijenu.'),
(84, 'Robertcet', 'rene.padron82@gmail.com', '83346335923', 'Mobile DEV', 'Salut, ech wollt Äre Präis wëssen.'),
(85, 'Robertcet', 'sdtheoneonly@yahoo.com', '84113271792', 'Mobile DEV', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(86, 'Robertcet', 'sdtheoneonly@yahoo.com', '86931852171', 'Mobile DEV', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(87, 'Robertcet', 'cdyer@stemexpress.com', '82167982734', 'Retail', 'Hi, I wanted to know your price.'),
(88, 'Robertcet', 'JTHEUS01@GMAIL.COM', '83525658297', 'Mobile DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(89, 'Robertcet', 'tdroy2012@gmail.com', '87699356688', 'Mobile DEV', 'Hi, I wanted to know your price.'),
(90, 'Robertcet', 'mustafarayazdo@gmail.com', '82573884755', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(91, 'Robertcet', 'sara32williams@gmail.com', '83618269238', 'Mobile DEV', 'Hai, saya ingin tahu harga Anda.'),
(92, 'Robertcet', 'alexiscneal@gmail.com', '88874327974', 'Retail', 'Ola, quería saber o seu prezo.'),
(93, 'Robertcet', 'paulaaskren@gmail.com', '87785569641', 'Retail', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(94, 'Robertcet', 'aneal@justicepoint.org', '87529992233', 'Web DEV', 'Dia duit, theastaigh uaim do phraghas a fháil.'),
(95, 'Robertcet', 'zurenskin@gmail.com', '83847625148', 'Retail', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(96, 'Robertcet', 'bcane@hotmail.ca', '88371331782', 'Web DEV', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(97, 'Robertcet', 'fgaytan@warriormachinery.com', '87284271454', 'Retail', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(98, 'Robertcet', 'rhianon.irilli@austinpetsalive.org', '88168273248', 'Web DEV', 'Hola, quería saber tu precio..'),
(99, 'Robertcet', 'lizbethm0415@gmail.com', '89131311677', 'Retail', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(100, 'Robertcet', 'int0079@gmail.com', '85732871575', 'Web DEV', 'Hi, ego volo scire vestri pretium.'),
(101, 'Robertcet', 'buecker-team@t-online.de', '82391524377', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(102, 'Robertcet', 'a.anaisflandre@gmail.com', '88971724323', 'Retail', 'Hi, kam dashur të di çmimin tuaj'),
(103, 'Robertcet', 'a.anaisflandre@gmail.com', '89312587747', 'Web DEV', 'Здравейте, исках да знам цената ви.'),
(104, 'Robertcet', 'buecker-team@t-online.de', '85147332261', 'Mobile DEV', 'Hæ, ég vildi vita verð þitt.'),
(105, 'Robertcet', 'rewheelock@att.net', '84245523334', 'Web DEV', 'Hæ, ég vildi vita verð þitt.'),
(106, 'Robertcet', 'denise.yakimo@rentokil.com', '85267586559', 'Web DEV', 'Hallo, ek wou jou prys ken.'),
(107, 'Robertcet', 'pennie@pendean.com', '88898481771', 'Retail', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(108, 'Robertcet', 'harkey90@att.net', '89348526484', 'Web DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(109, 'Robertcet', 'trishious1@yahoo.com', '85192978665', 'Web DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(110, 'Robertcet', 'rewheelock@att.net', '89894459431', 'Mobile DEV', 'Hola, quería saber tu precio..'),
(111, 'Robertcet', 'denise.yakimo@rentokil.com', '85315229852', 'Web DEV', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(112, 'Robertcet', 'denise.yakimo@rentokil.com', '81875555374', 'Retail', 'Hi, ego volo scire vestri pretium.'),
(113, 'Robertcet', 'tssalters@hotmail.com', '82723959755', 'Retail', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(114, 'Robertcet', 'buecker-team@t-online.de', '88791493383', 'Mobile DEV', 'Hai, saya ingin tahu harga Anda.'),
(115, 'Robertcet', 'sa.thomas195@gmail.com', '82397654475', 'Web DEV', 'Hi, ego volo scire vestri pretium.'),
(116, 'Robertcet', 'mariae3810@yahoo.com', '87355937224', 'Mobile DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(117, 'Robertcet', 'aforakis@gmail.com', '87366648328', 'Mobile DEV', 'Salut, ech wollt Äre Präis wëssen.'),
(118, 'Robertcet', 'rmerxleben@hotmail.com', '88639219618', 'Web DEV', 'Hi, kam dashur të di çmimin tuaj'),
(119, 'Robertcet', 'mariae3810@yahoo.com', '83958322485', 'Mobile DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(120, 'Robertcet', 'aforakis@gmail.com', '83553972665', 'Mobile DEV', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(121, 'Robertcet', 'xoxcandixox09@yahoo.com', '84383798748', 'Mobile DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(122, 'Robertcet', 'dwilcox@evo-entertainment.com', '81985754173', 'Retail', 'Hola, volia saber el seu preu.'),
(123, 'Robertcet', 'KIMBERLYKESS@AOL.COM', '86438369745', 'Web DEV', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(124, 'Robertcet', 'dwilcox@evo-entertainment.com', '83967414682', 'Retail', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(125, 'Robertcet', 'c.vanneste@proliver.be', '81842225293', 'Retail', 'Ola, quería saber o seu prezo.'),
(126, 'Robertcet', 'dwilcox@evo-entertainment.com', '85394115999', 'Mobile DEV', 'Hi, ego volo scire vestri pretium.'),
(127, 'Robertcet', 'c.vanneste@proliver.be', '83297462918', 'Web DEV', 'Ola, quería saber o seu prezo.'),
(128, 'Robertcet', 'booking.confirmation@totalstay.com', '86928714722', 'Retail', 'Hola, volia saber el seu preu.'),
(129, 'Robertcet', 'ibex.mynakoz@gmail.com', '89629496739', 'Retail', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(130, 'Robertcet', 'ibex.mynakoz@gmail.com', '88831244385', 'Web DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(131, 'Robertcet', 'booking.confirmation@totalstay.com', '85968879256', 'Retail', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(132, 'Robertcet', 'carolinetcast@gmail.com', '86455441438', 'Retail', 'Salut, ech wollt Äre Präis wëssen.'),
(133, 'Robertcet', 'carolinetcast@gmail.com', '89479512888', 'Retail', 'Salam, qiymətinizi bilmək istədim.'),
(134, 'Robertcet', 'KIMBERLYKESS@AOL.COM', '84353918898', 'Mobile DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(135, 'Robertcet', 'booking.confirmation@totalstay.com', '88879444113', 'Retail', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(136, 'Robertcet', 'booking.confirmation@totalstay.com', '88793849529', 'Mobile DEV', 'Hai, saya ingin tahu harga Anda.'),
(137, 'Robertcet', 'KIMBERLYKESS@AOL.COM', '84879348327', 'Retail', 'Hej, jeg ønskede at kende din pris.'),
(138, 'Robertcet', 'usfondreas@hotmail.com', '84646492519', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(139, 'Robertcet', 'marsspanel@gmail.com', '81588463636', 'Mobile DEV', 'Salut, ech wollt Äre Präis wëssen.'),
(140, 'Robertcet', 'hatuyotakagi@hotmail.com', '87227494776', 'Mobile DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(141, 'Robertcet', 'iftkharahmedofficial@gmail.com', '87778984378', 'Mobile DEV', 'Здравейте, исках да знам цената ви.'),
(142, 'Robertcet', 'marsspanel@gmail.com', '82125289279', 'Mobile DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(143, 'Robertcet', 'bentredrea@hotmail.com', '84191857992', 'Web DEV', 'Здравейте, исках да знам цената ви.'),
(144, 'Robertcet', 'booking.confirmation@totalstay.com', '82171843567', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(145, 'Robertcet', 'ngusarrrah@gmail.com', '81992829366', 'Mobile DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(146, 'Robertcet', 'iftkharahmedofficial@gmail.com', '84946199756', 'Mobile DEV', 'Hi, I wanted to know your price.'),
(147, 'Robertcet', 'hatuyotakagi@hotmail.com', '81253182935', 'Web DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(148, 'Robertcet', 'maxi.schuster16@gmail.com', '84242947314', 'Web DEV', 'Hæ, ég vildi vita verð þitt.'),
(149, 'Robertcet', 'maxi.schuster16@gmail.com', '82318859499', 'Retail', 'Kaixo, zure prezioa jakin nahi nuen.'),
(150, 'Robertcet', 'waldemar.91@live.de', '87314914191', 'Retail', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(151, 'Robertcet', 'h.willenbockel@gmx.net', '87784239426', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(152, 'Robertcet', 'hatuyotakagi@hotmail.com', '88126432344', 'Mobile DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(153, 'Robertcet', 'mcnalley.1@gmail.com', '86386723159', 'Mobile DEV', 'Hi, ego volo scire vestri pretium.'),
(154, 'Robertcet', 'bentredrea@hotmail.com', '81332865582', 'Mobile DEV', 'Salam, qiymətinizi bilmək istədim.'),
(155, 'Robertcet', 'jeffg92664@gmail.com', '87237171663', 'Mobile DEV', 'Hi, kam dashur të di çmimin tuaj'),
(156, 'Robertcet', 'queenbee613@comcast.net', '82455118251', 'Retail', 'Здравейте, исках да знам цената ви.'),
(157, 'Robertcet', '5087691777@vtext.com', '84587977827', 'Retail', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(158, 'Robertcet', 'dennishhoffman@gmail.com', '82331461699', 'Web DEV', 'Hæ, ég vildi vita verð þitt.'),
(159, 'Robertcet', 'booking.confirmation@totalstay.com', '85859574396', 'Mobile DEV', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(160, 'Robertcet', 'Deanadimeo@gmail.com', '84625691514', 'Mobile DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(161, 'Robertcet', 'coltrane.dunn@gmail.com', '81526677852', 'Retail', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(162, 'Robertcet', 'icecream0889@gmail.com', '84692975544', 'Mobile DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(163, 'Robertcet', 'tisard5@gmail.com', '88431788552', 'Web DEV', 'Здравейте, исках да знам цената ви.'),
(164, 'Robertcet', 'dennishhoffman@gmail.com', '88959893876', 'Retail', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(165, 'Robertcet', 'tisard5@gmail.com', '89491721391', 'Retail', 'Hola, quería saber tu precio..'),
(166, 'Robertcet', '8579285299@vtext.com', '87384764419', 'Retail', 'Ciao, volevo sapere il tuo prezzo.'),
(167, 'Robertcet', 'samkontoh@gmail.com', '82179337423', 'Retail', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(168, 'Robertcet', 'rakemurray@gmail.com', '82842148136', 'Mobile DEV', 'Salut, ech wollt Äre Präis wëssen.'),
(169, 'Robertcet', '7602214853@vtext.com', '87777971824', 'Mobile DEV', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(170, 'Robertcet', 'lacey_bakker@yahoo.ca', '89573888672', 'Mobile DEV', 'Kaixo, zure prezioa jakin nahi nuen.'),
(171, 'Robertcet', 'cechickering@gmail.com', '84924584416', 'Web DEV', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(172, 'Robertcet', 'taosbear@earthlink.net', '86377588223', 'Mobile DEV', 'Hi, kam dashur të di çmimin tuaj'),
(173, 'Robertcet', 'oswaldo.l.olivo@gmail.com', '82259429929', 'Web DEV', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(174, 'Robertcet', 'booking.confirmation@totalstay.com', '82966647728', 'Web DEV', 'Hi, ego volo scire vestri pretium.'),
(175, 'Robertcet', 'samkontoh@gmail.com', '87134139983', 'Retail', 'Zdravo, htio sam znati vašu cijenu.'),
(176, 'Robertcet', 'marylopez1994@yahoo.com', '86617578875', 'Web DEV', 'Kaixo, zure prezioa jakin nahi nuen.'),
(177, 'Robertcet', 'renee@laustencossutta.com', '85187389412', 'Retail', 'Hola, quería saber tu precio..'),
(178, 'Robertcet', 'booking.confirmation@totalstay.com', '88757327828', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(179, 'Robertcet', 'robonwp@gmail.com', '87382556992', 'Retail', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(180, 'Robertcet', 'tisard5@gmail.com', '81749735524', 'Retail', 'Dia duit, theastaigh uaim do phraghas a fháil.'),
(181, 'Robertcet', 'mreschar4@aol.com', '83531616184', 'Retail', 'Hi, I wanted to know your price.'),
(182, 'Robertcet', 'tisard5@gmail.com', '82254368864', 'Retail', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(183, 'Robertcet', 'marylopez1994@yahoo.com', '83944761613', 'Web DEV', 'Hola, volia saber el seu preu.'),
(184, 'Robertcet', 'mrschaefer@verizon.net', '84723669986', 'Retail', 'Salut, ech wollt Äre Präis wëssen.'),
(185, 'Robertcet', 'jesseenobull3@gmail.com', '84727486348', 'Web DEV', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(186, 'Robertcet', 'honeymanandrea@hotmail.com', '89772347487', 'Retail', 'Zdravo, htio sam znati vašu cijenu.'),
(187, 'Robertcet', '6034753491@vtext.com', '89388598519', 'Mobile DEV', 'Hi, kam dashur të di çmimin tuaj'),
(188, 'Robertcet', 'Moniqueperkey@gmail.com', '83568451352', 'Web DEV', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(189, 'Robertcet', 'oholguin@cbharper.com', '84589455957', 'Web DEV', 'Kaixo, zure prezioa jakin nahi nuen.'),
(190, 'Robertcet', 'olivia_holguin40@yahoo.com', '82158487245', 'Retail', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(191, 'Robertcet', 'mjohnson@urbanmin.org', '88162134484', 'Retail', 'Hola, volia saber el seu preu.'),
(192, 'Robertcet', 'mjohnson@urbanmin.org', '85845466587', 'Retail', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(193, 'Robertcet', 'ILESKA12@GMAIL.COM', '81918648128', 'Web DEV', 'Ola, quería saber o seu prezo.'),
(194, 'Robertcet', 'ivydolphinlover@yahoo.com', '84663518413', 'Retail', 'Hej, jeg ønskede at kende din pris.'),
(195, 'Robertcet', 'woz.slawek@o2.pl', '82777724383', 'Mobile DEV', 'Hallo, ek wou jou prys ken.'),
(196, 'Robertcet', 'chr.zechmeister@gmail.com', '88371579394', 'Web DEV', 'Xin chào, tôi muốn biết giá của bạn.'),
(197, 'Robertcet', 'rewheelock@att.net', '86325227651', 'Mobile DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(198, 'Robertcet', 'cathyh358@gmail.com', '82374817814', 'Web DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(199, 'Robertcet', 'adinacaceres@gmail.com', '84198691814', 'Web DEV', 'Dia duit, theastaigh uaim do phraghas a fháil.'),
(200, 'Robertcet', 'ddlovinglifee@gmail.com', '83957543658', 'Retail', 'Hi, I wanted to know your price.'),
(201, 'Robertcet', 'mnorton19@gmail.com', '89972655122', 'Retail', 'Kaixo, zure prezioa jakin nahi nuen.'),
(202, 'Robertcet', 'mansoor1102002@gmail.com', '82518718275', 'Mobile DEV', 'Hi, ego volo scire vestri pretium.'),
(203, 'Robertcet', 'steven.segreti@yahoo.com', '89542341993', 'Retail', 'Hola, quería saber tu precio..'),
(204, 'Robertcet', 'steven.segreti@yahoo.com', '85412215183', 'Retail', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(205, 'Robertcet', 'steven.segreti@yahoo.com', '87233973629', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(206, 'Robertcet', 'rewheelock@att.net', '86932647367', 'Retail', 'Здравейте, исках да знам цената ви.'),
(207, 'Robertcet', 'Tredtreda@gmail.com', '86655823497', 'Mobile DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(208, 'Robertcet', 'Tredtreda@gmail.com', '84398635618', 'Mobile DEV', 'Ola, quería saber o seu prezo.'),
(209, 'Robertcet', 'marcus.castilho.dev@gmail.com', '82651872147', 'Retail', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(210, 'Robertcet', 'kelly.hunter0289@gmail.com', '84927266387', 'Mobile DEV', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(211, 'Robertcet', 'steven.segreti@yahoo.com', '83693269338', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(212, 'Robertcet', 'jcavero@dyrecto.es', '84425782718', 'Retail', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(213, 'Robertcet', 'solucionesdareweb@gmail.com', '82737161781', 'Mobile DEV', 'Hola, volia saber el seu preu.'),
(214, 'Robertcet', 'encontrodosmusicosnatv@hotmail.com', '87764867878', 'Mobile DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(215, 'Robertcet', 'star100985@aol.com', '85427266772', 'Web DEV', 'Hola, volia saber el seu preu.'),
(216, 'Robertcet', 'DIANE_WEAKLEY@YAHOO.COM', '87766754153', 'Mobile DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(217, 'Robertcet', 'ssaplin@gmail.com', '81992676216', 'Retail', 'Hai, saya ingin tahu harga Anda.'),
(218, 'Robertcet', 'bmaygers1@gmail.com', '85492238619', 'Mobile DEV', 'Hej, jeg ønskede at kende din pris.'),
(219, 'Robertcet', 'hlngo1848@hotmail.com', '87469437977', 'Retail', 'Kaixo, zure prezioa jakin nahi nuen.'),
(220, 'Robertcet', 'DIANE_WEAKLEY@YAHOO.COM', '81599698852', 'Retail', 'Ola, quería saber o seu prezo.'),
(221, 'Robertcet', 'steven.segreti@yahoo.com', '86899324418', 'Web DEV', 'Hallo, ek wou jou prys ken.'),
(222, 'Robertcet', 'floristeriaregalaflores@gmail.com', '81917828983', 'Retail', 'Zdravo, htio sam znati vašu cijenu.'),
(223, 'Robertcet', 'donwarrington@outlook.ca', '89922552343', 'Retail', 'Hi, ego volo scire vestri pretium.'),
(224, 'Robertcet', 'floristeriaregalaflores@gmail.com', '81842688811', 'Retail', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(225, 'Robertcet', 'kmdlc11@yahoo.com', '83538689384', 'Web DEV', 'Salam, qiymətinizi bilmək istədim.'),
(226, 'Robertcet', 'caewilsey@gmail.com', '87852256438', 'Web DEV', 'Hi, ego volo scire vestri pretium.'),
(227, 'Robertcet', 'steven.segreti@yahoo.com', '87589488674', 'Web DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(228, 'Robertcet', 'jmsheehy19@gmail.com', '81596671646', 'Mobile DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(229, 'Robertcet', 'jbeckmen@me.com', '89252593968', 'Web DEV', 'Xin chào, tôi muốn biết giá của bạn.'),
(230, 'Robertcet', '7742610318@vtext.com', '85218883683', 'Mobile DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(231, 'Robertcet', '7742610318@vtext.com', '85821326239', 'Retail', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(232, 'Robertcet', '7742610318@vtext.com', '88196447144', 'Web DEV', 'Hola, quería saber tu precio..'),
(233, 'Robertcet', 'sarah.neithercut@gmail.com', '85342564689', 'Mobile DEV', 'Salut, ech wollt Äre Präis wëssen.'),
(234, 'Robertcet', 'maggielawson509@gmail.com', '88459275332', 'Web DEV', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(235, 'Robertcet', '6179213368@gmail.com', '89217558691', 'Retail', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(236, 'Robertcet', '6179214260@vtext.com', '84437196741', 'Retail', 'Hai, saya ingin tahu harga Anda.'),
(237, 'Robertcet', '6179214260@vtext.com', '82991248232', 'Retail', 'Hai, saya ingin tahu harga Anda.'),
(238, 'Robertcet', 'richard.folger@gmx.de', '89946267151', 'Web DEV', 'Hi, ego volo scire vestri pretium.'),
(239, 'Robertcet', 'ncpd831@gmail.com', '81635955421', 'Mobile DEV', 'Hi, kam dashur të di çmimin tuaj'),
(240, 'Robertcet', 'Gortmann69@Hotmail.Com', '83811777551', 'Retail', 'Hæ, ég vildi vita verð þitt.'),
(241, 'Robertcet', 'ames30@aol.com', '88292324941', 'Web DEV', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(242, 'Robertcet', '5162210260@vtext.com', '86869877966', 'Web DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(243, 'Robertcet', '5166331218@vtext.com', '88368931953', 'Retail', 'Hai, saya ingin tahu harga Anda.'),
(244, 'Robertcet', '5166331218@vtext.com', '86575117846', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(245, 'Robertcet', 'patel.sunanda715@gmail.com', '84315475482', 'Mobile DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(246, 'Robertcet', 'dzynecats@aol.com', '84497793694', 'Mobile DEV', 'Hi, kam dashur të di çmimin tuaj'),
(247, 'Robertcet', 'dzynecats@aol.com', '84473569969', 'Mobile DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(248, 'Robertcet', '6466621003@vtext.com', '89671811643', 'Retail', 'Здравейте, исках да знам цената ви.'),
(249, 'Robertcet', 'rachkelley@comcast.net', '83126697949', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(250, 'Robertcet', '9782632646@vtext.com', '86874641415', 'Retail', 'Здравейте, исках да знам цената ви.'),
(251, 'Robertcet', '9782632646@vtext.com', '84735736985', 'Mobile DEV', 'Salam, qiymətinizi bilmək istədim.'),
(252, 'Robertcet', 'revandersonabreu@yahoo.com', '89131197368', 'Mobile DEV', 'Hæ, ég vildi vita verð þitt.'),
(253, 'Robertcet', 'Stejeda@rocketmail.com', '89161194642', 'Web DEV', 'Hi, kam dashur të di çmimin tuaj'),
(254, 'Robertcet', 'revandersonabreu@yahoo.com', '88743425575', 'Retail', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(255, 'Robertcet', '7815049947@vtext.com', '88549717558', 'Retail', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(256, 'Robertcet', 'c.raugust@yahoo.de', '81928648114', 'Web DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(257, 'Robertcet', 'c.raugust@yahoo.de', '88947839624', 'Retail', 'Xin chào, tôi muốn biết giá của bạn.'),
(258, 'Robertcet', 'isolde.bau@gmx.de', '82652262763', 'Web DEV', 'Здравейте, исках да знам цената ви.'),
(259, 'Robertcet', 'meanjoedowns@yahoo.com', '83115353986', 'Web DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(260, 'Robertcet', 'inesbeate@yahoo.de', '81542672877', 'Mobile DEV', 'Hæ, ég vildi vita verð þitt.'),
(261, 'Robertcet', 'mnorton19@gmail.com', '85332536561', 'Web DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(262, 'Robertcet', 'righet@bluewin.ch', '89259345889', 'Retail', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(263, 'Robertcet', 'meanjoedowns@yahoo.com', '84835942966', 'Web DEV', 'Ola, quería saber o seu prezo.'),
(264, 'Robertcet', 'hanenzayanilaamouri@yahoo.com', '88276997585', 'Mobile DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(265, 'Robertcet', 'j-andreblanchette@hotmail.com', '86391641435', 'Web DEV', 'Xin chào, tôi muốn biết giá của bạn.'),
(266, 'Robertcet', 'hanenzayanilaamouri@yahoo.com', '82561691172', 'Retail', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(267, 'Robertcet', 'ficelo23@gmail.com', '81856759579', 'Retail', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(268, 'Robertcet', 'j-andreblanchette@hotmail.com', '83313466923', 'Mobile DEV', 'Szia, meg akartam tudni az árát.'),
(269, 'Robertcet', 'theriault.serge@videotron.ca', '84128733453', 'Retail', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(270, 'Robertcet', 'ilke986@gmail.com', '87284974687', 'Retail', 'Ola, quería saber o seu prezo.'),
(271, 'Robertcet', 'theriault.serge@videotron.ca', '87563361996', 'Web DEV', 'Hola, quería saber tu precio..'),
(272, 'Robertcet', 'ficelo23@gmail.com', '82274414711', 'Web DEV', 'Hola, quería saber tu precio..'),
(273, 'Robertcet', 'rchirning@gmail.com', '81776252649', 'Web DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(274, 'Robertcet', 'icaon4@aol.com', '82856618151', 'Web DEV', 'Hola, quería saber tu precio..'),
(275, 'Robertcet', 'SAMKONTOH@GMAIL.COM', '85955887453', 'Retail', 'Hej, jeg ønskede at kende din pris.'),
(276, 'Robertcet', 'amber.kang@hotmail.com', '85726412437', 'Retail', 'Hej, jeg ønskede at kende din pris.'),
(277, 'Robertcet', 'SAMKONTOH@GMAIL.COM', '89496635934', 'Retail', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(278, 'Robertcet', 'alan.molner@gmail.com', '84971794986', 'Web DEV', 'Hi, kam dashur të di çmimin tuaj'),
(279, 'Robertcet', 'ROBERTLCRAIG3@GMAIL.COM', '86978848316', 'Retail', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(280, 'Robertcet', 'ROBERTLCRAIG3@GMAIL.COM', '84181957457', 'Web DEV', 'Hai, saya ingin tahu harga Anda.'),
(281, 'Robertcet', 'alan.molner@gmail.com', '85368214312', 'Web DEV', 'Kaixo, zure prezioa jakin nahi nuen.'),
(282, 'Robertcet', 'KELLEYAJS@AOL.COM', '82479144117', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(283, 'Robertcet', 'amcg1584@yahoo.com', '84591621994', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(284, 'Robertcet', 'amarie.dall@gmail.com', '86371868835', 'Retail', 'Ciao, volevo sapere il tuo prezzo.'),
(285, 'Robertcet', 'alainaeden@gmail.com', '88196274618', 'Mobile DEV', 'Hi, ego volo scire vestri pretium.'),
(286, 'Robertcet', 'PCRJL34@GMAIL.COM', '87741822254', 'Retail', 'Hola, quería saber tu precio..'),
(287, 'Robertcet', 'kwanlauit@yahoo.com.hk', '81232158139', 'Web DEV', 'Salam, qiymətinizi bilmək istədim.'),
(288, 'Robertcet', 'ms.kyarbrough@gmail.com', '86831734451', 'Mobile DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(289, 'Robertcet', 'PCRJL34@GMAIL.COM', '84399192456', 'Retail', 'Kaixo, zure prezioa jakin nahi nuen.'),
(290, 'Robertcet', 'electra7@t-online.de', '84422413518', 'Retail', 'Hi, ego volo scire vestri pretium.'),
(291, 'Robertcet', 'KELLEYAJS@AOL.COM', '87499173945', 'Web DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(292, 'Robertcet', 'KELLEYAJS@AOL.COM', '89833964899', 'Retail', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(293, 'Robertcet', 'AABELKEN@GMAIL.COM', '85776848555', 'Web DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(294, 'Robertcet', 'steven.gault@philips.com', '87453743847', 'Retail', 'Hai, saya ingin tahu harga Anda.'),
(295, 'Robertcet', 'steven.gault@philips.com', '83433332232', 'Mobile DEV', 'Hola, volia saber el seu preu.'),
(296, 'Robertcet', 'AABELKEN@GMAIL.COM', '82669678996', 'Mobile DEV', 'Szia, meg akartam tudni az árát.'),
(297, 'Robertcet', 'AABELKEN@GMAIL.COM', '81614457665', 'Web DEV', 'Hi, I wanted to know your price.'),
(298, 'Robertcet', 'PCRJL34@GMAIL.COM', '83383381356', 'Retail', 'Hola, volia saber el seu preu.'),
(299, 'Robertcet', 'steven.segreti@yahoo.com', '88184499911', 'Mobile DEV', 'Hola, volia saber el seu preu.'),
(300, 'Robertcet', 'jim@azureresorts.com', '88161625547', 'Web DEV', 'Dia duit, theastaigh uaim do phraghas a fháil.'),
(301, 'Robertcet', 'steven.segreti@yahoo.com', '89427856938', 'Mobile DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(302, 'Robertcet', 'jim@azureresorts.com', '86398133111', 'Mobile DEV', 'Здравейте, исках да знам цената ви.'),
(303, 'Robertcet', 'p.streber@protecgroupe.com', '83652642912', 'Mobile DEV', 'Hola, quería saber tu precio..'),
(304, 'Robertcet', 'iserniae@hotmail.com', '86979183614', 'Web DEV', 'Hi, ego volo scire vestri pretium.'),
(305, 'Robertcet', 'doalaniz@gmail.com', '82443979441', 'Web DEV', 'Hai, saya ingin tahu harga Anda.'),
(306, 'Robertcet', 'matthew91188@yahoo.com', '89772176333', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(307, 'Robertcet', 'viivaak@gmail.com', '81639763369', 'Retail', 'Szia, meg akartam tudni az árát.'),
(308, 'Lachlan Howerton', 'lachlan.howerton@gmail.com', '0922-7360502', 'Mobile DEV', 'Quick question to ask you...\r\n \r\nAre you aware that in 2023, email marketing still works? \r\nThe fact that you are reading these lines is proof of that.\r\n\r\nEmail marketing is underrated, and yet it works so well.  \r\nAll you have to do is find some emails, send a message and cash in.\r\n\r\nFor example, to find emails you can use this service: https://garymarketing.com/go/scrap-gmap\r\n\r\nIt extracts emails, phone numbers, and lots of other information from Google Map listings.\r\n\r\nOf course, there are plenty of other ways to get in touch with your ideal customers.\r\nContact me on Skype and let\'s discuss what will work for your product/service. \r\n- My Skype ID: live:.cid.6b79b1d5a11a2ec7\r\n- My Blog : garymarketing.com\r\n\r\n\r\nRegards,\r\nGary & Ophélie\r\n\r\n\r\n\r\n------ \r\n\r\nJ\'ai une petite question à vous poser...\r\n\r\nSavez-vous qu\'en 2023, l\'email marketing fonctionne toujours très bien ? \r\nLa preuve, vous lisez ces lignes.\r\n\r\nL\'email marketing est clairement sous-couté,\r\nIl  suffit de trouver les coordonnées de vos clients idéaux, d\'entrer en contact, et d\'encaisser.\r\n\r\nPour trouver les coordonnées d\'entreprise, vous pouvez par exemple utiliser ce service : scrapmybusiness.com\r\nIl permet d\'extraire les emails, les numéros de téléphone et de nombreuses autres informations a partir des fiches entreprises de Google Map.\r\n\r\nBien sur il y\'a plein d\'autre solutions pour entrer en contact avec vos clients idéaux\r\n\r\nAjouter moi sur Skype et discutons de ce qui conviendrait le plus pour promouvoir votre produit/service.\r\n- Identifiant Skype: live:.cid.83c9da999a4f9f\r\n- Mon Blog : http://garymarketing.com\r\n\r\nCordialement,\r\nOphélie et Gary.'),
(309, 'Robertcet', 'jillbkeogh@gmail.com', '84331889595', 'Mobile DEV', 'Zdravo, htio sam znati vašu cijenu.'),
(310, 'Robertcet', '9018593803@vtext.com', '85286939545', 'Mobile DEV', 'Hej, jeg ønskede at kende din pris.'),
(311, 'Robertcet', '9018593803@vtext.com', '89991382497', 'Web DEV', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(312, 'Robertcet', 'ahernandez6@sbcglobal.net', '86722597677', 'Retail', 'Hi, kam dashur të di çmimin tuaj'),
(313, 'Robertcet', 'ahernandez6@sbcglobal.net', '83351153991', 'Web DEV', 'Xin chào, tôi muốn biết giá của bạn.'),
(314, 'Robertcet', 'derkster2@yahoo.com', '83843482196', 'Retail', 'Dia duit, theastaigh uaim do phraghas a fháil.'),
(315, 'Robertcet', 'jbt.dconnors@gmail.com', '87695226446', 'Web DEV', 'Ola, quería saber o seu prezo.'),
(316, 'Robertcet', 'sharlo.cason@delta.com', '82726151323', 'Retail', 'Zdravo, htio sam znati vašu cijenu.'),
(317, 'Robertcet', 'Mnorton19@gmail.com', '85564626925', 'Web DEV', 'Hæ, ég vildi vita verð þitt.'),
(318, 'Robertcet', 'kevinclinger@yahoo.com', '85832375649', 'Web DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(319, 'Robertcet', 'kevinclinger@yahoo.com', '86865819888', 'Mobile DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(320, 'Robertcet', 'fremon@galerie-lelong.com', '81175532766', 'Retail', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(321, 'Robertcet', 'ha_he_ho@hotmail.com', '86264839148', 'Retail', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(322, 'Robertcet', 'amyfewox@hotmail.com', '84877212576', 'Web DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(323, 'Robertcet', 'heidi6226@gmail.com', '81711961175', 'Mobile DEV', 'Здравейте, исках да знам цената ви.'),
(324, 'Robertcet', 'amyfewox@hotmail.com', '84623444944', 'Web DEV', 'Hola, volia saber el seu preu.'),
(325, 'Robertcet', 'amykfrye@yahoo.com', '81646265342', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(326, 'Robertcet', 'haeled9@gmail.com', '82999417796', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(327, 'Robertcet', 'ademing1998@gmail.com', '89112945529', 'Mobile DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(328, 'Robertcet', 'chall897@gmail.com', '83342468583', 'Mobile DEV', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(329, 'Robertcet', 'fremon@galerie-lelong.com', '81258149785', 'Retail', 'Kaixo, zure prezioa jakin nahi nuen.'),
(330, 'Robertcet', 'steven.segreti@yahoo.com', '89488215952', 'Web DEV', 'Hi, I wanted to know your price.'),
(331, 'Robertcet', 'steven.segreti@yahoo.com', '89391285569', 'Mobile DEV', 'Hallo, ek wou jou prys ken.'),
(332, 'Robertcet', 'henrymoore2223@gmail.com', '89764916545', 'Web DEV', 'Hola, volia saber el seu preu.'),
(333, 'Robertcet', 'henniejones041@gmail.com', '82533816857', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(334, 'Robertcet', 'h.roy@comcast.net', '82219465727', 'Web DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(335, 'Robertcet', 'steve@heyitssteve.com', '89358221625', 'Retail', 'Hola, volia saber el seu preu.'),
(336, 'Robertcet', 'Stejeda@rocketmail.com', '81938312658', 'Web DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(337, 'Robertcet', 'office@expert-cont.ro', '89327547399', 'Retail', 'Salam, qiymətinizi bilmək istədim.'),
(338, 'Robertcet', 'sanchez05182012@gmail.com', '83577247419', 'Web DEV', 'Hai, saya ingin tahu harga Anda.'),
(339, 'Robertcet', 'carifurawa0407@gmail.com', '88418489732', 'Mobile DEV', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(340, 'Robertcet', 'sanchez05182012@gmail.com', '88597133844', 'Web DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(341, 'Robertcet', 'ALEXBOOTHROYD180602@GMAIL.COM', '82378323487', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(342, 'Robertcet', 'derick8591@comcast.net', '84461876218', 'Mobile DEV', 'Zdravo, htio sam znati vašu cijenu.'),
(343, 'Robertcet', 'ajzdetails@gmail.com', '86323524344', 'Retail', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(344, 'Robertcet', 'Atemplarinv@gmail.com', '84658313512', 'Mobile DEV', 'Hola, volia saber el seu preu.'),
(345, 'Robertcet', 'dfrankel@mustangcat.com', '89674829646', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(346, 'Robertcet', 'genlpn@aol.com', '86368632253', 'Retail', 'Sveiki, es gribēju zināt savu cenu.'),
(347, 'Robertcet', 'derick8591@comcast.net', '82887261261', 'Retail', 'Hallo, ek wou jou prys ken.'),
(348, 'Robertcet', 'mayodag@gmail.com', '85386238623', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(349, 'Robertcet', 'mayodag@gmail.com', '87525711341', 'Retail', 'Прывітанне, я хацеў даведацца Ваш прайс.'),
(350, 'Robertcet', 'wileytatiana@yahoo.com', '85338766819', 'Web DEV', 'Ola, quería saber o seu prezo.'),
(351, 'Robertcet', 'wileytatiana@yahoo.com', '83717567573', 'Mobile DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(352, 'Robertcet', 'scarletcruz781@icloud.com', '81525682252', 'Retail', 'Hæ, ég vildi vita verð þitt.'),
(353, 'Robertcet', 'housekeeper@barrymorehotel.com', '84722689812', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(354, 'Robertcet', 'housekeeper@barrymorehotel.com', '86564174549', 'Mobile DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(355, 'Robertcet', 'housekeeper@barrymorehotel.com', '83984173466', 'Retail', 'Sveiki, es gribēju zināt savu cenu.'),
(356, 'Robertcet', 'smallfri1986@hotmail.com', '86932511433', 'Retail', 'Hola, volia saber el seu preu.'),
(357, 'Robertcet', 'housekeeper@barrymorehotel.com', '82818977238', 'Mobile DEV', 'Здравейте, исках да знам цената ви.'),
(358, 'Robertcet', 'housekeeper@barrymorehotel.com', '84837618378', 'Web DEV', 'Hi, kam dashur të di çmimin tuaj'),
(359, 'Robertcet', 'richard.mandolfo@gmail.com', '83847261913', 'Web DEV', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(360, 'Robertcet', 'mariafval17@gmail.com', '85881929496', 'Retail', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(361, 'Robertcet', 'scarletcruz781@icloud.com', '87727465215', 'Mobile DEV', 'Hallo, ek wou jou prys ken.'),
(362, 'Robertcet', 'emaidsofcincy@gmail.com', '82819882485', 'Retail', 'Ciao, volevo sapere il tuo prezzo.'),
(363, 'Robertcet', 'mariafval17@gmail.com', '84723833938', 'Mobile DEV', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(364, 'Robertcet', 'emaidsofcincy@gmail.com', '84544569936', 'Mobile DEV', 'Hai, saya ingin tahu harga Anda.'),
(365, 'Robertcet', 'eperezcampagne@gmail.com', '83337139525', 'Mobile DEV', 'Здравейте, исках да знам цената ви.'),
(366, 'Robertcet', '2032314561@vtext.com', '81298237752', 'Retail', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(367, 'Rishabh Kumar', 'rishabh6401@gmail.com', '8218422497', 'Mobile DEV', 'hi'),
(368, 'Rishabh Kumar', 'rishabh6401@gmail.com', '8218422497', 'Mobile DEV', ''),
(369, 'Robertcet', 'whweldit@yahoo.com', '82665294924', 'Web DEV', 'Xin chào, tôi muốn biết giá của bạn.'),
(370, 'Robertcet', 'Chanelmoore1174@gmail.com', '86877269145', 'Retail', 'Hallo, ek wou jou prys ken.'),
(371, 'Robertcet', 'Chanelmoore1174@gmail.com', '85382713335', 'Web DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(372, 'Robertcet', '6158123638@vtext.com', '88441767794', 'Mobile DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(373, 'Robertcet', 'Chanelmoore1174@gmail.com', '89912836928', 'Retail', 'Ciao, volevo sapere il tuo prezzo.'),
(374, 'rishabh', 'ruygg@gmail.com', '89898098', 'Retail', 'hi\r\n'),
(375, 'Harry potter', 'rdtfh@gma.com', '87897988', 'Retail', 'hi'),
(376, 'Robertcet', 'julmadigan@aol.com', '85936466938', 'Retail', 'Hola, volia saber el seu preu.'),
(377, 'Robertcet', 'dolfynwaves@gmail.com', '85212914254', 'Web DEV', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(378, 'Robertcet', 'Laura.Cole@inlandeye.com', '84678358679', 'Retail', 'Ola, quería saber o seu prezo.'),
(379, 'ded', 'de@gmail.com', '33', 'Integration', 'de'),
(380, 'ded', 'de@gmail.com', '33', 'Integration', 'de'),
(381, 'ded', 'de@gmail.com', '33', 'Integration', 'de'),
(382, 'Mohit ', '3292864@gmail.com', '90', 'Integration', 'hi '),
(383, 'Robertcet', 'mai06tran@yahoo.com', '89978173936', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(384, 'Robertcet', 'nickzalutko7@gmail.com', '86985261914', 'Mobile DEV', 'Hai, saya ingin tahu harga Anda.'),
(385, 'Robertcet', 'missy32995@gmail.com', '82598857288', 'Retail', 'Hai, saya ingin tahu harga Anda.'),
(386, 'Robertcet', 'bhinds1222@gmail.com', '84926316484', 'Mobile DEV', 'Hæ, ég vildi vita verð þitt.'),
(387, 'Robertcet', 'missy32995@gmail.com', '87436128593', 'Retail', 'Hallo, ek wou jou prys ken.'),
(388, 'Robertcet', 'phebusjan@yahoo.com', '87284878934', 'Mobile DEV', 'Xin chào, tôi muốn biết giá của bạn.'),
(389, 'Robertcet', 'griff.howie@gmail.com', '87735769599', 'Web DEV', 'Szia, meg akartam tudni az árát.'),
(390, 'Robertcet', 'alexiusboo5@gmail.com', '87676863424', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(391, 'Robertcet', 'jscotts449@aol.com', '89675161198', 'Retail', 'Hi, I wanted to know your price.'),
(392, 'Robertcet', 'alexiusboo5@gmail.com', '89134886389', 'Mobile DEV', 'Ola, quería saber o seu prezo.'),
(393, 'Robertcet', 'rhamilton@maywoodfire-il.org', '89631764678', 'Mobile DEV', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(394, 'Robertcet', 'mujicaefrain@yahoo.com', '83998638868', 'Mobile DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(395, 'Robertcet', 'alexiusboo5@gmail.com', '88364892812', 'Retail', 'Hi, ego volo scire vestri pretium.'),
(396, 'Robertcet', 'mujicaefrain@yahoo.com', '85194952479', 'Web DEV', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(397, 'Robertcet', 'bears1959@att.net', '84813416226', 'Mobile DEV', 'Salut, ech wollt Äre Präis wëssen.'),
(398, 'Robertcet', 't.gutknecht1@web.de', '88966936971', 'Retail', 'Hi, ego volo scire vestri pretium.'),
(399, 'Robertcet', 'sarahnorm6364@aol.com', '87716166895', 'Mobile DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(400, 'Robertcet', 'info@thaivillanyc.com', '84468144985', 'Retail', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(401, 'Robertcet', 'harrell@asdrva.rocks', '81269942396', 'Web DEV', 'Hai, saya ingin tahu harga Anda.'),
(402, 'Robertcet', 'harrell@asdrva.rocks', '82382929388', 'Retail', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(403, 'Robertcet', 'sarahnorm6364@aol.com', '89124894674', 'Web DEV', 'Dia duit, theastaigh uaim do phraghas a fháil.'),
(404, 'Robertcet', 'harvey@olifson.com', '84987691782', 'Web DEV', 'Hallo, ek wou jou prys ken.'),
(405, 'Robertcet', 'starkk@comcast.net', '89951797911', 'Mobile DEV', 'Hi, I wanted to know your price.'),
(406, 'Robertcet', 'hdbade75@gmail.com', '87966246729', 'Retail', 'Xin chào, tôi muốn biết giá của bạn.'),
(407, 'Robertcet', 'rjmn1234@hotmail.com', '82586164925', 'Retail', 'Kaixo, zure prezioa jakin nahi nuen.'),
(408, 'Robertcet', 'garytshaffer@gmail.com', '83884633678', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(409, 'Robertcet', 'garytshaffer@gmail.com', '83355669227', 'Web DEV', 'Kaixo, zure prezioa jakin nahi nuen.'),
(410, 'Robertcet', 'harrell@asdrva.rocks', '87452929391', 'Mobile DEV', 'Hallo, ek wou jou prys ken.'),
(411, 'Robertcet', 'Natalierayne04@gmail.com', '83683886398', 'Web DEV', 'Hej, jeg ønskede at kende din pris.'),
(412, 'Robertcet', 'starkk@comcast.net', '82798528924', 'Mobile DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(413, 'Robertcet', 'KAdams@seasidecharter.org', '82676851662', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(414, 'Robertcet', 'panford65@gmail.com', '86457767986', 'Mobile DEV', 'Kaixo, zure prezioa jakin nahi nuen.'),
(415, 'Robertcet', 'missy32995@gmail.com', '85772691332', 'Mobile DEV', 'Salam, qiymətinizi bilmək istədim.'),
(416, 'Robertcet', 'nickzalutko7@gmail.com', '81461397934', 'Web DEV', 'Hi, ego volo scire vestri pretium.'),
(417, 'Robertcet', 'manulamrini@gmail.com', '84636618362', 'Retail', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(418, 'Robertcet', 'maguilar@childrenshungerfund.org', '81131694373', 'Web DEV', 'Hæ, ég vildi vita verð þitt.'),
(419, 'Robertcet', 'dave@davelopez.net', '89897639831', 'Web DEV', 'Hej, jeg ønskede at kende din pris.'),
(420, 'Robertcet', 'akasper@childrenshungerfund.org', '82534136211', 'Web DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(421, 'Robertcet', 'in.need.of.a.savior@gmail.com', '86336817642', 'Mobile DEV', 'Zdravo, htio sam znati vašu cijenu.'),
(422, 'Robertcet', 'starkk@comcast.net', '82266248619', 'Web DEV', 'Kaixo, zure prezioa jakin nahi nuen.'),
(423, 'Robertcet', '8595120902@vtext.com', '85473923291', 'Mobile DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(424, 'Robertcet', '8599926608@vtext.com', '89332379989', 'Retail', 'Hai, saya ingin tahu harga Anda.'),
(425, 'Robertcet', '8595120902@vtext.com', '84398598233', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(426, 'Robertcet', 'stephanietownsend1@gmail.com', '87746286197', 'Mobile DEV', 'Szia, meg akartam tudni az árát.'),
(427, 'Robertcet', 'shai.diller@gmail.com', '88479416793', 'Retail', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(428, 'Robertcet', 'shai.diller@gmail.com', '83333892938', 'Web DEV', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(429, 'Robertcet', 'kenia.escruz@gmail.com', '81431357966', 'Web DEV', 'Hi, I wanted to know your price.'),
(430, 'Robertcet', 'dzfx010031@gmail.com', '89273338369', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(431, 'Robertcet', 'smilefoods123@gmail.com', '87821261351', 'Mobile DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(432, 'Robertcet', 'jordansam945@gmail.com', '82997126662', 'Retail', 'Hi, I wanted to know your price.'),
(433, 'Robertcet', 'smilefoods123@gmail.com', '85846765223', 'Mobile DEV', 'হাই, আমি আপনার মূল্য জানতে চেয়েছিলাম.'),
(434, 'Robertcet', 'Luclosson@outlook.fr', '88311263478', 'Web DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(435, 'Robertcet', 'eswardocarty@gmail.com', '82267586798', 'Retail', 'Ola, quería saber o seu prezo.'),
(436, 'Robertcet', 'gvsorensen@gmail.com', '82124368595', 'Retail', 'Hej, jeg ønskede at kende din pris.'),
(437, 'Robertcet', 'eswardocarty@gmail.com', '87264188282', 'Retail', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(438, 'Robertcet', 'silverd215@gmail.com ', '81372364672', 'Retail', 'Здравейте, исках да знам цената ви.'),
(439, 'Robertcet', 'eswardocarty@gmail.com', '89731576757', 'Web DEV', 'Kaixo, zure prezioa jakin nahi nuen.'),
(440, 'Robertcet', 'shai.diller@gmail.com', '82564465686', 'Web DEV', 'Hej, jeg ønskede at kende din pris.'),
(441, 'Robertcet', 'Acruse756@gmail.com', '89752983593', 'Retail', 'Hæ, ég vildi vita verð þitt.'),
(442, 'Robertcet', 'sanchez.nohemi@hotmail.com', '82334335819', 'Web DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(443, 'Robertcet', 'dunzydigital@gmail.com', '84592462241', 'Mobile DEV', 'Hallo, ek wou jou prys ken.'),
(444, 'Robertcet', 'jaysminjahan18@gmail.com', '84443838432', 'Retail', 'Hai, saya ingin tahu harga Anda.'),
(445, 'Robertcet', 'Nohemi.Sanchez@crestlinehotels.com', '84183189921', 'Retail', 'Здравейте, исках да знам цената ви.'),
(446, 'Robertcet', 'maria.boyrie@emancipet.org', '84341864773', 'Retail', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(447, 'Robertcet', 'AABELKEN@GMAIL.COM', '87587448734', 'Mobile DEV', 'Szia, meg akartam tudni az árát.'),
(448, 'Robertcet', 'ximena.boyrie@gmail.com', '81328867898', 'Retail', 'Xin chào, tôi muốn biết giá của bạn.'),
(449, 'Robertcet', 'dafni.filippou@fraseryachts.com', '84998349528', 'Web DEV', 'Ciao, volevo sapere il tuo prezzo.'),
(450, 'Robertcet', 'TESHAUM@AOL.COM', '81357141612', 'Retail', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(451, 'Robertcet', 'shai.diller@gmail.com', '88112564368', 'Mobile DEV', 'Salam, qiymətinizi bilmək istədim.'),
(452, 'Robertcet', 'CHOOD211@GMAIL.COM', '82946567749', 'Web DEV', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(453, 'Robertcet', 'bsduggan@gmail.com', '85642345322', 'Web DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(454, 'Robertcet', 'eveiga@comcast.net', '86855384515', 'Web DEV', 'Szia, meg akartam tudni az árát.'),
(455, 'Robertcet', 'evansfam12@aol.com', '87561266839', 'Web DEV', 'Hi, ego volo scire vestri pretium.'),
(456, 'Robertcet', 'bsduggan@gmail.com', '87827771967', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(457, 'Robertcet', 'HJOHN72462@AOL.COM', '88578379835', 'Mobile DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(458, 'Robertcet', 'austinlamoure@gmail.com', '83447263851', 'Retail', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(459, 'Robertcet', 'javiermd80@yahoo.com', '86878974113', 'Web DEV', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(460, 'Robertcet', 'Avenuemedia864@gmail.com', '89858162122', 'Mobile DEV', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(461, 'Robertcet', 'Avenuemedia864@gmail.com', '87423863286', 'Mobile DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(462, 'Robertcet', 'sdange12@icloud.com', '85221628768', 'Mobile DEV', 'Hai, saya ingin tahu harga Anda.'),
(463, 'Robertcet', 'jeremytassy@hotmail.com', '89349874699', 'Mobile DEV', 'Hola, quería saber tu precio..'),
(464, 'Robertcet', 'jeremytassy@hotmail.com', '81994469998', 'Retail', 'Zdravo, htio sam znati vašu cijenu.'),
(465, 'Robertcet', 'jeremytassy@hotmail.com', '82723184482', 'Web DEV', 'Hola, volia saber el seu preu.'),
(466, 'Robertcet', 'jwep2004@gmail.com', '82696194415', 'Retail', 'Hi, I wanted to know your price.'),
(467, 'Robertcet', 'leekaden52@gmail.com', '85757291118', 'Retail', 'Salut, ech wollt Äre Präis wëssen.'),
(468, 'Robertcet', 'ballontest289@gmail.com', '89714694237', 'Mobile DEV', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(469, 'Robertcet', 'leekaden52@gmail.com', '85196258479', 'Retail', 'Salut, ech wollt Äre Präis wëssen.'),
(470, 'Robertcet', 'janice.gehlmann81@gmail.com', '88697371165', 'Retail', 'Aloha, makemake wau eʻike i kāu kumukūʻai.'),
(471, 'Robertcet', 'phitau@web.de', '83327581554', 'Retail', 'Γεια σου, ήθελα να μάθω την τιμή σας.');
INSERT INTO `enquiry` (`id`, `name`, `email`, `contact_number`, `solution`, `message`) VALUES
(472, 'Robertcet', 'ballontest289@gmail.com', '84177936799', 'Mobile DEV', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(473, 'Robertcet', 'emrah.saglam@gmx.de', '86214393779', 'Retail', 'Hej, jeg ønskede at kende din pris.'),
(474, 'Robertcet', 'c.kedziorski@gmx.de', '81282531873', 'Retail', 'Salam, qiymətinizi bilmək istədim.'),
(475, 'Robertcet', 'thompsonricky530@gmail.com', '81491135725', 'Retail', 'Ciao, volevo sapere il tuo prezzo.'),
(476, 'Robertcet', '2027138589@vzwpix.com', '84654667424', 'Web DEV', 'Hola, volia saber el seu preu.'),
(477, 'Robertcet', 'thompsonricky530@gmail.com', '83419591556', 'Web DEV', 'Szia, meg akartam tudni az árát.'),
(478, 'Robertcet', 'LG839248@OnTrac.com', '84633245729', 'Web DEV', 'Ola, quería saber o seu prezo.'),
(479, 'Robertcet', 'tom.engle@hotmail.com', '82711648791', 'Web DEV', 'Hæ, ég vildi vita verð þitt.'),
(480, 'Robertcet', 'LG839248@OnTrac.com', '81661692288', 'Retail', 'Szia, meg akartam tudni az árát.'),
(481, 'Robertcet', 'summer.alcala@yahoo.com', '85923665341', 'Mobile DEV', 'Xin chào, tôi muốn biết giá của bạn.'),
(482, 'Robertcet', 'johanna.kanngiesser@gmail.com', '87185671787', 'Web DEV', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(483, 'Robertcet', 'loreabun93@gmail.com', '82717956259', 'Mobile DEV', 'Sveiki, es gribēju zināt savu cenu.'),
(484, 'Robertcet', 'johanna.kanngiesser@gmail.com', '84944297675', 'Retail', 'Salam, qiymətinizi bilmək istədim.'),
(485, 'Robertcet', 'gaitzschie@gmx.de', '88774846828', 'Mobile DEV', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(486, 'Robertcet', 'thompsonricky530@gmail.com', '82767218495', 'Mobile DEV', 'Szia, meg akartam tudni az árát.'),
(487, 'Rishabh Kumar', 'rishabh6401@gmail.com', '08218422497', 'Retail', ''),
(488, 'Rishabh Kumar', 'rishabh6401@gmail.com', '08218422497', 'Retail', ''),
(489, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', ' n '),
(490, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', ' n '),
(491, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', 'jn'),
(492, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', 'mmmm,'),
(493, 'dfddf', 'rishabh6401@gmail.com', '+918218422497', '', 'mmmm,'),
(494, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', ' m '),
(495, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', 'hi'),
(496, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', 'hi'),
(497, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', 'hi'),
(498, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', 'jjoi'),
(499, 'Rishabh Kumar', 'rissisiiis@gmail.com', '+918218422497', '', 'h'),
(500, 'Robertcet', 'novakja1956@Gmail.com', '85268972576', '', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(501, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(502, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Mobile Development', 'hi'),
(503, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Mobile Development', 'hello'),
(504, 'rishabh', 'rgfgfgfg@gmail.com', '+9156365', 'Retail', 'hi'),
(505, 'Rishabh Kumar', 'fgfgfs@gmail.com', '+918218422497', 'Web Development', 'hi'),
(506, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', '', ''),
(507, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Mobile Development', 'b'),
(508, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Retail', 'hi'),
(509, 'YUG', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'j'),
(510, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(511, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(512, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(513, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(514, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(515, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(516, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(517, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', 'hi'),
(518, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Mobile Development', 'hello'),
(519, 'Robertcet', 'tb509871@gmail.com', '87758972451', '', 'Salut, ech wollt Äre Präis wëssen.'),
(520, 'Robertcet', 'parktaekota@gmail.com', '82557544484', '', 'Hi, roeddwn i eisiau gwybod eich pris.'),
(521, 'Robertcet', 'lbarron@bgcconejo.org', '89434371124', '', 'Ողջույն, ես ուզում էի իմանալ ձեր գինը.'),
(522, 'Robertcet', 'manklam@calbaptist.edu', '89984954511', '', 'Szia, meg akartam tudni az árát.'),
(523, 'Robertcet', 'ikuyikuy@hotmail.com', '85153682447', '', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(524, 'Mohit', 'chabramohit@gmail.com', '9560966122', 'Retail', 'cdcdcdcdcdcdcdcdcd'),
(525, 'Mohit', 'chabramohit@gmail.com', '9560966122', 'Retail', 'cdcdcdcdcdcdcdcdcd'),
(526, 'Robertcet', 'olivier.missoffe@novetude.com', '86585184596', '', 'Hej, jeg ønskede at kende din pris.'),
(527, 'Robertcet', 'adeanduran12@gmail.com', '86879857441', '', 'Salut, ech wollt Äre Präis wëssen.'),
(528, 'Robertcet', 'jael0002@yahoo.com', '89621897935', '', 'Szia, meg akartam tudni az árát.'),
(529, 'Robertcet', 'Rowland.Amah@bhgrecovery.com', '88866217262', '', 'Здравейте, исках да знам цената ви.'),
(530, 'Robertcet', 'chadmcdaniel@msn.com', '82527172868', '', 'Ciao, volevo sapere il tuo prezzo.'),
(531, 'Robertcet', 'chillipep1414@gmail.com', '83877684963', '', 'Salut, ech wollt Äre Präis wëssen.'),
(532, 'Robertcet', 'briadam205@gmail.com', '89819235571', '', 'Xin chào, tôi muốn biết giá của bạn.'),
(533, 'Robertcet', 'jmuir3788@hotmail.com', '87335834273', '', 'Hi, I wanted to know your price.'),
(534, 'Robertcet', 'samjacobs88@comcast.net', '83589518116', '', 'Hai, saya ingin tahu harga Anda.'),
(535, 'Robertcet', 'jsheeha22@hotmail.com', '87575871237', '', 'Ola, quería saber o seu prezo.'),
(536, 'Robertcet', 'bgworden@umich.edu', '89423873781', '', 'Здравейте, исках да знам цената ви.'),
(537, 'Robertcet', 'sukantadas0021@gmail.com', '84992928984', '', 'Hi, ego volo scire vestri pretium.'),
(538, 'Robertcet', 'jennahmangum@gmail.com', '89756578348', '', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(539, 'Robertcet', 'pjo.oflaherty@gmail.com', '87423749572', '', 'Hi, kam dashur të di çmimin tuaj'),
(540, 'Robertcet', 'DAWATERLAND11@GMAIL.COM', '85297183463', '', 'Hæ, ég vildi vita verð þitt.'),
(541, 'Robertcet', 'tnckister@yahoo.com', '84787184891', '', 'Hæ, ég vildi vita verð þitt.'),
(542, 'Mohit ', '3292864@gmail.com', '9560966122', 'Mobile Development', 'Mobile Dev'),
(543, 'Robertcet', 'info@nautigo.org', '85665256562', '', 'Ciao, volevo sapere il tuo prezzo.'),
(544, 'Robertcet', 'klink6452@gmail.com', '83683676226', '', 'Ciao, volevo sapere il tuo prezzo.'),
(545, 'Robertcet', 'sapodaca@dickiesarena.com', '82226181576', '', 'Zdravo, htio sam znati vašu cijenu.'),
(546, 'Robertcet', 'wberryann@twinlakescomm.org', '86476763132', '', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(547, 'Robertcet', 'valanis@tricociuniversity.edu', '86737527852', '', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(548, 'Robertcet', 'joshuahowie7@gmail.com', '88612279231', '', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(549, 'Robertcet', 'jack@thedinans.net', '89454378533', '', 'Γεια σου, ήθελα να μάθω την τιμή σας.'),
(550, 'Robertcet', 'jltortonese@gmail.com', '82156631253', '', 'Hi, I wanted to know your price.'),
(551, 'Robertcet', 'KINGGARET@VERIZON.NET', '83791165419', '', 'Здравейте, исках да знам цената ви.'),
(552, 'Robertcet', 'info@nautigo.org', '88227988175', '', 'Ola, quería saber o seu prezo.'),
(553, 'Robertcet', 'mihaimuj@gmail.com', '83853246883', '', 'Hi, მინდოდა ვიცოდე თქვენი ფასი.'),
(554, 'Robertcet', 'williamjarman@erols.com', '84446319665', '', 'Hai, saya ingin tahu harga Anda.'),
(555, 'Robertcet', 'usa72373@gmail.com', '89914317534', '', 'Hi, kam dashur të di çmimin tuaj'),
(556, 'Robertcet', 'hmclean@leiths-group.co.uk', '85179667376', '', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(557, 'Robertcet', 'andrewwink@me.com', '83347174185', '', 'Ola, quería saber o seu prezo.'),
(558, 'Robertcet', 'bmusson815@gmail.com', '87447239883', '', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(559, 'Robertcet', 'mpbrat03@gmail.com', '84951751425', '', 'Hej, jeg ønskede at kende din pris.'),
(560, 'Robertcet', 'mhauck@tspn.org', '82719525613', '', 'Hi, kam dashur të di çmimin tuaj'),
(561, 'Robertcet', 'josue.luna@copart.com', '82186288885', '', 'Hi, ego volo scire vestri pretium.'),
(562, 'Robertcet', 'egranados@foleyfamilywines.com', '86236579127', '', 'Hai, saya ingin tahu harga Anda.'),
(563, 'JosephBug', 'no.reply.OlePeeters@gmail.com', '88624333129', '', 'Greetings! gozoomtech.com \n \nDid you know that it is possible to send proposal completely in legal manner? We propose a new and legitimate method of sending letters through feedback forms. These feedback forms can be spotted on numerous sites. \nWhen such messages are sent, no personal data is used, and they are securely sent to forms that have been specifically designed to receive messages and appeals. As Feedback Forms messages are considered important, they will not be marked as spam. \nWe are offering you an opportunity to try our service without charge. \nWe can send up to 50,000 messages on your command. \n \nThe cost of sending one million messages is $59. \n \nThis message was automatically generated. \nPlease use the contact details below to get in touch with us. \n \nContact us. \nTelegram - https://t.me/FeedbackFormEU \nSkype  live:feedbackform2019 \nWhatsApp  +375259112693 \nWhatsApp  https://wa.me/+375259112693 \n \nWe only use chat for communication.'),
(564, 'Robertcet', 'ryanrios48@gmail.com', '84647351738', '', 'Sawubona, bengifuna ukwazi intengo yakho.'),
(565, 'Robertcet', 'dlothrop@gmail.com', '85562459368', '', 'Hi, ego volo scire vestri pretium.'),
(566, 'Robertcet', 'tnycoriam@gmail.com', '82975699348', '', 'Здравейте, исках да знам цената ви.'),
(567, 'Robertcet', 'creditcontrol@foster-gamko.com', '85891555126', '', 'Hola, volia saber el seu preu.'),
(568, 'Rishabh Kumar', 'rishabh6401@gmail.com', '08218422497', 'Web Development', ''),
(569, 'Rishabh Kumar', 'rishabh6401@gmail.com', '08218422497', 'Web Development', ''),
(570, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Retail', 'hello cap'),
(571, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Web Development', ''),
(572, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Others', 'hello mail'),
(573, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Mobile Development', ''),
(574, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Retail', ''),
(575, 'Shivanshu Rastogi', 'rshivanshu1145@gmail.com', '333', 'Others', 'Hi'),
(576, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Others', 'checking after new gtag customize code upload'),
(577, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Mobile Development', 'whatsapp check'),
(578, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Web Development', 'owner whatsapp check'),
(579, 'Shivanshu Rastogi', 'rshivanshu1145@gmail.com', '9456222022', 'Web Development', 'Hello'),
(580, 'Shivanshu Rastogi', 'rshivanshu1145@gmail.com', '9837145070', 'Mobile Development', 'Hiii'),
(581, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Web Development', 'whatsapp check'),
(582, 'Hello', 'hi@h.co', '0', '', 'Bye bye'),
(583, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Mobile Development', 'whatsapp check'),
(584, 'Hello', 'hi@h.co', '8791419874', 'Integration', 'Bye bye'),
(585, 'You tell me', 'new@example.com', '8791419874', '', 'Bye bye'),
(586, 'Qwerty', 'new@yaho.com', '9897954720', 'Mobile Development', 'Try this one'),
(587, 'Shivanshu Rastogi', 'rshivanshu1145@gmail.com', '9837145070', 'Integration', 'Hi'),
(588, 'Shivanshu Rastogi', 'rshivanshu1145@gmail.com', '9837145070', 'Integration', 'Hi'),
(589, 'Mohit', '3292875@gmail.com', '2014862094', 'Retail', 'Hey'),
(590, 'Mihit', 'chabramohit@gmail.com', '2014862094', 'Mobile Development', 'Hey'),
(591, 'Mohit', 'chabramohit@gmail.com', '4372553762', 'Mobile Development', 'Heyeh'),
(592, 'Andre Clarke', 'grace.selfe@googlemail.com', '412 98 289', '', 'Hey there,\r\n\r\nWas looking at your site today and I thought this would probably interest you.\r\n\r\nAre you tired of traditional virtual assistants who lack the expertise to handle complex tasks? Feeling overwhelmed by the thought of diving into generative AI? We\'ve got the game-changing solution you\'ve been waiting for: Myaa\'s AI-Powered Personal Support Agents.\r\n\r\nImagine the best of both worlds: a personal assistant who\'s a live professional expert at leveraging the power of thousands of AI Agents. That\'s exactly what you get with Myaa. Our AI-Powered Personal Support Agents are trained to perfection in writing excellent prompts and harnessing the capabilities of our AI Agents.\r\n\r\nBut here\'s the best part: we\'re offering a one-week free trial for you to experience the transformative capabilities of our agents firsthand. No obligations, no strings attached. Just a chance to see how our AI-Powered Personal Support Agents, the experts in leveraging AI technology, can revolutionize the way you manage your business.\r\n\r\nDon\'t miss out on this exclusive opportunity. Click below to schedule a call and claim your one-week free trial:\r\n\r\nhttps://bit.ly/Free-AI-Powered-Support-Agent\r\n\r\nDuring the call, our experts will guide you through the process and pair you with the perfect Myaa AI-Powered Personal Support Agent for your business. Say goodbye to inefficiency and hello to expert assistance.\r\n\r\nGet started now and unlock the full potential of generative AI with Myaa\'s AI-Powered Personal Support Agents.\r\n\r\nCheers,\r\n\r\nAndre Clarke\r\nBusiness Development\r\nMyaa\r\n'),
(593, 'Egzihareya Solomon Alene', 'egzihareyasa@gmail.com', '975712013', 'Web Development', ''),
(594, 'Lucy johnson', 'lucyjohnson.web@gmail.com', '1234567890', '', 'Hello,\r\n\r\nI trust this message finds you well!\r\n\r\nWould you be interested in Design or Re-design your website & mobile app? Or are you interested in creating a whole New Site?\r\n \r\nOur Services are: - Create New Website – (New Brand) Web Design, Re-design, Web Copywriting, Wordpress, Web Development, Graphic Design, Mobile App (iOS Android) Maintenance…etc\r\n \r\nAnything similar to what you’re looking for?\r\n \r\nI would be happy to send you \"Quotes\", “Proposal” Past work Details, \"Our Packages\", and “Offers”!\r\n \r\nThank & Regards,\r\nLucy (Web Solution Manager)\r\n\r\n\r\n\r\n\r\nYour website : gozoomtech.com\r\n \r\n\r\n\r\n'),
(595, 'Lucy johnson', 'lucyjohnson.web@gmail.com', '1234567890', '', 'Hello,\r\n\r\nI trust this message finds you well!\r\n\r\nWould you be interested in Design or Re-design your website & mobile app? Or are you interested in creating a whole New Site?\r\n \r\nOur Services are: - Create New Website – (New Brand) Web Design, Re-design, Web Copywriting, Wordpress, Web Development, Graphic Design, Mobile App (iOS Android) Maintenance…etc\r\n \r\nAnything similar to what you’re looking for?\r\n \r\nI would be happy to send you \"Quotes\", “Proposal” Past work Details, \"Our Packages\", and “Offers”!\r\n \r\nThank & Regards,\r\nLucy (Web Solution Manager)\r\n\r\n\r\n\r\n\r\nYour website : gozoomtech.com\r\n \r\n\r\n\r\n'),
(596, 'Lucy johnson', 'lucyjohnson.web@gmail.com', '1234567890', '', 'Hello,\r\n\r\nI trust this message finds you well!\r\n\r\nWould you be interested in Design or Re-design your website & mobile app? Or are you interested in creating a whole New Site?\r\n \r\nOur Services are: - Create New Website – (New Brand) Web Design, Re-design, Web Copywriting, Wordpress, Web Development, Graphic Design, Mobile App (iOS Android) Maintenance…etc\r\n \r\nAnything similar to what you’re looking for?\r\n \r\nI would be happy to send you \"Quotes\", “Proposal” Past work Details, \"Our Packages\", and “Offers”!\r\n \r\nThank & Regards,\r\nLucy (Web Solution Manager)\r\n\r\n\r\n\r\n\r\nYour website : gozoomtech.com\r\n \r\n\r\n\r\n'),
(597, 'Mohit', '3292865@gmail.com', '2014862094', 'Web Development', 'Web'),
(598, 'suhail', 'suhailnagore4@gmail.com', '9690419681', 'Web Development', 'testing form 123'),
(599, 'ksfn', 'rissisiiis@gmail.com', '9789798979', 'Mobile Development', 'nbmbmdwq'),
(600, 'hghjfew', 'ewrbdb@gmail.com', '8978789798', 'Mobile Development', 'ghjgjh'),
(601, 'Michaelitelp', 'adamc566@stnd3ise.com', '87415431514', '', '<a href=></a> \r\n<a href=>https://www.k12onln3-ch00l.com/</a> \r\n<a href=></a>'),
(602, 'Impresora_kvOt', 'renetholo1988@raiz-pr.com', '86858197168', '', 'Impresora 3D profesional Raise3D Pro3 \r\nImpresora 3D Raise3D Pro3 <a href=https://www.pro3-aise38d.com/>https://www.pro3-aise38d.com/</a>.'),
(603, 'Impresora_rdmt', 'dusttoningnfor1988@raiz-pr.com', '84167644513', '', 'La poderosa impresora 3D de resina Phrozen Sonic XL 4K 2022 \r\nImpresora 3D de resina Phrozen Sonic XL 4K 2022 <a href=http://nicxl4o-2022zen.com>http://nicxl4o-2022zen.com</a>.'),
(604, 'FreeScan_wwMa', 'pilgherrpide1972@raiz-pr.com', '87323194854', '', 'Explore Endless Possibilities with FreeScan UE Pro 3D-Scanner \r\nShining3D FreeScan UE Pro 3D-Scanner <a href=http://33ee-can-ro.com>http://33ee-can-ro.com</a>.'),
(605, 'HBD_zdMa', 'trangiodroguk1973@raiz-pr.com', '88326299674', '', 'Surprise Your Birthday Buddy with a HBD 3d Printer \r\nHBD 3d printer <a href=https://www.al-mret32.com>https://www.al-mret32.com</a>.'),
(606, 'Flashforge_udPn', 'outacbeemys1985@raiz-pr.com', '89119462126', '', 'Flashforge Guider 3 Plus 3D-Drucker <a href=http://www.ider3pus-duc78.com/>http://www.ider3pus-duc78.com/</a>.'),
(607, 'k12_aykr', 'clabothlicis1974@raiz-pr.com', '87178457295', '', 'k12 online school \r\nk12 online school <a href=http://www.odroerirjournal.com/>http://www.odroerirjournal.com/</a>.'),
(608, 'online_wbei', 'credkumnaram1987@raiz-pr.com', '85217799793', '', 'online elementary school <a href=https://www.cookexpressways.com>https://www.cookexpressways.com</a>.'),
(609, 'Online_yckt', 'melilisol1984@raiz-pr.com', '83628231245', '', 'Welcome to the Top Online Middle School Programs \r\nSign Up Your Child for Flexible Online Middle School \r\nUnlock Your Child\'s Potential with Online Middle School Education \r\nElevate Your Child\'s Future with Online Middle School Courses \r\nAchieve Academic Excellence at Online Middle School \r\nJoin a Growing Online Middle School Community \r\nWhere Learning Knows No Boundaries: Online Middle School \r\nCustomizable Education at Your Fingertips: Online Middle School \r\nArm Your Child for Success with Online Middle School Program \r\nEmbody the Future of Education: Online Middle School \r\nJoin the Online Middle School Revolution \r\nPrepare Your Child for High School: Online Middle School \r\nUnleash the Infinite Possibilities at Online Middle School \r\nE-Learning Middle School: The Innovative Choice \r\nKnowledge Meets Accessibility: Online Middle School \r\nArm Your Child for the Digital Age with Online Middle School \r\nThe Path to High School: Online Middle School \r\nE-Learning Middle School: The Future Normal \r\nE-Learning Middle School: Forward-Thinking Education for the Harness Your Child\'s Potential with Online Middle School Education \r\nOnline Middle School <a href=theaspectnetwork.com>theaspectnetwork.com</a>.'),
(610, 'Creatbot_bsel', 'thioschumlestdog1970@raiz-pr.com', '84677781432', '', ' Kompatibel mit gangigen 3D-Drucksoftware \r\nCreatbot D600 Pro 3D-Drucker  \r\nCreatbot D600 Pro 3D-Drucker <a href=atbot00ro-98ucker.com>atbot00ro-98ucker.com</a>.'),
(611, 'Accredited_agkr', 'neynerquedi1980@bushka345.store', '83926557354', '', 'Accredited Online Schools Tailored to You \r\nAccredited online schools <a href=https://certifiedonlineedunow.com>https://certifiedonlineedunow.com</a>.'),
(612, 'Online_hqPa', 'stinimglasim1972@bushka345.store', '85284296441', '', 'Virtual Middle School: Advantages and Discover the Universe of Online Middle School Education \r\n \r\nTransform Your Child\'s Education with Online Middle School \r\n \r\nFind a Flexible Learning Environment with Online Middle School \r\n \r\nBreaking Through Barriers: How Online Middle School is Changing Education \r\n \r\nThe Next Generation of Education: Online Middle School \r\n \r\nPrepare Your Child for Success with Online Middle School \r\n \r\nThe Best Guide to Online Middle School for Parents \r\n \r\nIs Virtual Middle School the Right Choice for Your Child? \r\n \r\nMaximize Your Child\'s Potential with Online Middle School \r\n \r\nPersonalize Your Child\'s Education with Online Middle School \r\n \r\nThrive with Online Middle School: The Key to Academic Success \r\n \r\nMoving on from Traditional to Online Middle School: What to Expect \r\n \r\nThe Benefits and Drawbacks of Online Middle School \r\n \r\nIs Online Middle School Suitable for Your Child? \r\n \r\nThe Revolution of Education: The Rise of Online Middle School \r\n \r\nSucceed Anywhere: The Flexibility of Online Middle School \r\n \r\nExperience the Future of Education with Online Middle School \r\n \r\nNavigate the World of Online Middle School: Tips and Strategies \r\n \r\nThe Advantages of Virtual Middle School for Students with Special Needs \r\nOnline Middle School <a href=https://www.allworldtravelgroup.com/>https://www.allworldtravelgroup.com/</a>.'),
(613, 'Online_xwKn', 'vofinshobfie1984@bushka345.store', '87826364673', '', 'Interactive learning at our online elementary school. \r\nOnline elementary school <a href=http://k2onech00l.com>http://k2onech00l.com</a>.'),
(614, 'Sinterit_ngen', 'panandownking1977@bushka345.store', '82551977256', '', 'Sinterit NILS 480 3D printer <a href=frop-80tre.com>frop-80tre.com</a>.'),
(615, 'DOBOT_pmKt', 'chalesstantclot1976@bushka345.store', '88591829465', '', 'DOBOT Robots: Your Partner in Automation \r\nDOBOT Robots <a href=https://www.dbt-rze.com>https://www.dbt-rze.com</a>.'),
(616, 'DOBOT_kqka', 'theotixiso1988@bushka345.store', '89489329449', '', 'Effortless Precision with DOBOT MG400 Robotic Arm \r\nDOBOT MG400 Robotic Arm <a href=http://www.dobotmg400arm.com>http://www.dobotmg400arm.com</a>.'),
(617, 'RIshabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Mobile Development', 'I want to develop an ecommerce mobile app'),
(618, 'Rishabh Kumar', 'rishabh6401@gmail.com', '+918218422497', 'Mobile Development', 'vh'),
(619, 'Gozoom', 'gozoomtechnologies@gmail.com', '8970', 'Web Development', 'hi'),
(620, 'xTool_wmPl', 'zambricipa1970@bushka345.store', '88562392317', '', ' \r\n \r\n1. Discover the Versatility of xTool\'s D1 Pro 20W Laser Cutter and Engraver! \r\n2. Designing with Perfection: xTool D1 Pro 20W Laser Cutter and Engraver \r\n3. Maximize Your Craftsmanship with the xTool D1 Pro 20W Laser Cutter and Engraver \r\n4. Efficient Solutions: xTool D1 Pro 20W Laser Cutter and Engraver for Your DIY Needs \r\n5. Revolutionize Your Projects with the Powerful xTool D1 Pro 20W Laser Cutter and Engraver \r\n6. Design with Perfection using the xTool D1 Pro 20W Laser Cutter and Engraver \r\n7. Upgrade Your Studio with the xTool D1 Pro 20W Laser Cutter and Engraver \r\n8. Innovative Solutions for Amateur Creators: xTool D1 Pro 20W Laser Cutter and Engraver \r\n9. Unlock Your Artistic Potential with xTool D1 Pro 20W Laser Cutter and Engraver \r\n10. Adaptable Design Tool: xTool D1 Pro 20W Laser Cutter and Engraver for Any Project \r\n11. Accuracy Meets Efficiency with the xTool D1 Pro 20W Laser Cutter and Engraver \r\n12. The Top Choice for Professional Projects: xTool D1 Pro 20W Laser Cutter and Engraver \r\n13. Enhance Your Art with the xTool D1 Pro 20W Laser Cutter and Engraver \r\n14. Revamp Your Workspace with xTool D1 Pro 20W Laser Cutter and Engraver \r\n15. Effective Solutions for Independent Creators: xTool D1 Pro 20W Laser Cutter and Engraver \r\n16. Explore the Versatility of the xTool D1 Pro 20W Laser Cutter and Engraver \r\n17. Design with Accuracy and Control using the xTool D1 Pro 20W Laser Cutter and Engraver \r\n18. Revolutionize Your Ideas with the xTool D1 Pro 20W Laser Cutter and Engraver \r\n19. Optimize Your Efficiency with xTool D1 Pro 20W Laser Cutter and Engraver! \r\n20. Perfect Your Craft with xTool D1 Pro 20W Laser Cutter and Engraver: The Ultimate Tool for Designers \r\nxTool D1 Pro 20W Laser Cutter and Engraver <a href=https://www.xtoold1pro20w.com/>https://www.xtoold1pro20w.com/</a> .'),
(621, 'FlashForge_stea', 'trinotafun1985@bushka345.store', '81748481342', '', ' Enhance Your Design Process with FlashForge 3D Printers  \r\nFlashForge 3D Printers <a href=https://www.lash-orge3ds.com>https://www.lash-orge3ds.com</a> .'),
(622, 'online_qyEa', 'vietofanu1985@bushka345.store', '82613861733', '', 'Unlock Your Potential with Online Education \r\nonline high schools <a href=http://www.nline-4ighsch.com/>http://www.nline-4ighsch.com/</a> .'),
(623, 'Mohit Chhabra', 'chabramohit@gmail.com', '14372553762', 'Web Development', 'gr'),
(624, 'Mohit Chhabra', 'chabramohit@gmail.com', '14372553762', 'Web Development', 'fghfggh'),
(625, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Mobile Development', 'text'),
(626, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Mobile Development', 'Text'),
(627, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Mobile Development', 'Text'),
(628, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Mobile Development', 'text'),
(629, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'Mobile Development', 'text'),
(630, 'Online_enSa', 'manrantbutkind1987@bushka345.store', '86833126841', '', ' \r\n1. Unlocking the Potential of Online School in Georgia \r\n2. Enroll in the Best Online School in Georgia Today \r\n3. Explore the Benefits of Online School in Georgia \r\n4.  Enhancing Learning Opportunities in Georgia \r\n5.  Online School: The Smart Choice \r\n6. Discover the Power of Online Learning in Georgia \r\n7. Embrace Online Schooling in Georgia \r\n8.  Building a Brighter Future \r\n9. Unleash Your Creativity with Online School in Georgia \r\n10. Navigate the World of Online School in Georgia \r\n11.  Redefining Education in Georgia \r\n12.  Learn from Anywhere \r\n13.  Education Made Easy \r\n14. Embrace Technology with Online School in Georgia \r\n15.  Transforming Education for the Better \r\n16.  Tailored Education for Every Student \r\n17.  Education on Your Terms \r\n18. Empower Yourself with Online School in Georgia \r\n19. Enrich Your Education with Online School in Georgia \r\n20.  Education for the Modern Age \r\nOnline School in Georgia <a href=ine-olingeor.com>ine-olingeor.com</a> .'),
(631, 'online_fesi', 'laperpenstop1978@bushka345.store', '84824541216', '', ' Discover Your Options \r\n17. Discover the Benefits of Online Schools in Michigan  \r\nonline schools in michigan <a href=http://mich-ineschoolsin.com>http://mich-ineschoolsin.com</a> .'),
(632, 'Online_flSi', 'onidevday1986@bushka345.store', '84895254536', '', 'Benefits of Attending an Online School in Ohio, \r\nEasy Enrollment Process for Online School in Ohio, \r\nTips for Success in an Online School in Ohio, \r\nCustomizing Your Curriculum at an Online School in Ohio \r\nOnline School in Ohio <a href=http://onlescolinohio.com>http://onlescolinohio.com</a> .'),
(633, 'Online_kiEr', 'lawbnotati1982@bushka345.store', '89885724234', '', ' \r\n1. Top Online School Options in West Virginia  \r\nOnline School in West Virginia <a href=k12west-virg.com>k12west-virg.com</a> .'),
(634, 'Shivanshu Rastogi', 'rshivanshu1145@gmail.com', '09837145070', 'Mobile Development', 'Hi'),
(635, 'Kupit_buml', 'lighhibesna1975@bushka345.store', '86526942941', '', ' высокое качество \r\n5. Большой 3D принтер для крупных деталей  \r\nбольшой 3д принтер для больших фигур купить <a href=https://lastyu-bigpech.ru/>https://lastyu-bigpech.ru/</a> .'),
(636, 'suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Mobile Development', 'testing success page'),
(637, 'suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Mobile Development', 'testing success page'),
(638, 'RaymondDrEnd', 'no.reply.MatthiasDavies@gmail.com', '86782532328', '', 'Good morning! gozoomtech.com \r\n \r\nDo you know that it is legally possible to send messages? We suggest a legitimate new method of sending proposals through feedback forms. \r\nBy using Communication Forms, messages are more likely to be seen as important, which reduces the chance of them being marked as spam. \r\nWe are now offering you the chance to use our service for free. \r\nWe can transmit up to 50,000 messages on your behalf. \r\n \r\nThe cost of sending one million messages is $59. \r\n \r\nThis message was automatically generated. \r\n \r\nWe only use chat for communication. \r\n \r\nContact us. \r\nTelegram - https://t.me/FeedbackFormEU \r\nSkype  live:contactform_18 \r\nWhatsApp - +375259112693 \r\nWhatsApp  https://wa.me/+375259112693'),
(639, 'Sundar Colleano', 'jared.colleano@msn.com', '28-75-12-10', '', 'Is Your Website Not Ranking In Google?\r\nLosing potential customers to competitors? Your website\'s low rankings are costing you valuable leads and revenue.\r\nBoost Your Rankings with Monthly SEO Services!\r\n\r\n>> Benefits:\r\n> Increase Search Engine Rankings\r\n> Drive Targeted Traffic\r\n> Boost Conversions\r\n> 4x Profits\r\n\r\n>> Transform Your Business Today!\r\nContact NOW >> https://alwaysdigital.co/?src=gozoomtech.com'),
(640, '3D_eiMr', 'quofreephminspi1976@bushka345.store', '83186716878', '', 'Unleash Your Creativity with a 3D Printer \r\n3d printer price <a href=3d-ruyter53.ru>3d-ruyter53.ru</a> .'),
(641, 'Mike Dutton\r\n', 'mikeusacractap@gmail.com', '84967398128', '', 'Hi there, \r\n \r\nI have reviewed your domain in MOZ and have observed that you may benefit from an increase in authority. \r\n \r\nOur solution guarantees you a high-quality domain authority score within a period of three months. This will increase your organic visibility and strengthen your website authority, thus making it stronger against Google updates. \r\n \r\nCheck out our deals for more details. \r\nhttps://www.monkeydigital.co/domain-authority-plan/ \r\n \r\nNEW: Ahrefs Domain Rating \r\nhttps://www.monkeydigital.co/ahrefs-seo/ \r\n \r\n \r\nThanks and regards \r\nMike Dutton\r\n'),
(642, 'Mike Kennett\r\n', 'mikehinguarilugh@gmail.com', '89777979571', '', 'Hi there \r\n \r\nJust checked your gozoomtech.com baclink profile, I noticed a moderate percentage of toxic links pointing to your website \r\n \r\nWe will investigate each link for its toxicity and perform a professional clean up for you free of charge. \r\n \r\nStart recovering your ranks today: \r\nhttps://www.hilkom-digital.de/professional-linksprofile-clean-up-service/ \r\n \r\nRegards \r\nMike Kennett\r\nHilkom Digital SEO Experts \r\nhttps://www.hilkom-digital.de/'),
(643, 'Mike Leman\r\n', 'mikeGatKessy@gmail.com', '89247899911', '', 'Hi there, \r\n \r\nMy name is Mike from Monkey Digital, \r\n \r\nAllow me to present to you a lifetime revenue opportunity of 35% \r\nThat\'s right, you can earn 35% of every order made by your affiliate for life. \r\n \r\nSimply register with us, generate your affiliate links, and incorporate them on your website, and you are done. It takes only 5 minutes to set up everything, and the payouts are sent each month. \r\n \r\nClick here to enroll with us today: \r\nhttps://www.monkeydigital.org/affiliate-dashboard/ \r\n \r\nThink about it, \r\nEvery website owner requires the use of search engine optimization (SEO) for their website. This endeavor holds significant potential for both parties involved. \r\n \r\nThanks and regards \r\nMike Leman\r\n \r\nMonkey Digital'),
(644, 'Pillspeecy', 'iunskiygipertonik@gmail.com', '85367523463', '', 'Erectile dysfunction treatments available online from TruePills. \r\nDiscreet, next day delivery and lowest price guarantee. \r\n \r\nViagra is a well-known, branded and common erectile dysfunction (ED) treatment for men. \r\nIt\'s available through our Online TruePills service. \r\n \r\nTrial ED Pack consists of the following ED drugs: \r\n \r\nViagra Active Ingredient: Sildenafil 100mg 5 pills \r\nCialis 20mg 5 pills \r\nLevitra 20mg 5 pills \r\n \r\nhttps://cutt.ly/dw7ChH4s \r\nhttps://www.nasolab.com/feed/feed2js.php?date=y&desc=128&num=4&src=http%3a%2f%2ftrue-pill.top&utf=y\r\nhttp://com.myopenlink.net/describe/?url=https://true-pill.top/\r\nhttp://allpdd.ru/bitrix/redirect.php?goto=https://true-pill.top/\r\nhttps://gkgross.ru:443/bitrix/redirect.php?goto=https://true-pill.top/\r\nhttps://bymas.ru/comments.php?module=downloads&item_id=73064&return=https://true-pill.top/\r\n \r\n \r\nTerbinox\r\nNichospor\r\nCital\r\nCivalex\r\nNitens\r\nCabergolinum\r\nTransvital\r\nOmpranyt\r\nElpenor\r\nClaromac\r\nCoral\r\nNadine\r\nIndolan\r\nUrosin\r\nNeupram\r\nTrisulin\r\nBetaloc\r\nKyumate\r\nLosargamma hct\r\nClimagest\r\nReumagil\r\nAmlowide\r\nPigrel\r\nLosar\r\nZetia\r\nEnapril-h\r\nBidecar\r\nFrudix\r\nPantac\r\nVelodan\r\nRani denk\r\nGiardyl\r\nOrapred\r\nEritro\r\nMicrobac\r\nArtevil\r\nXenifar\r\nPrazolen\r\nSerrapress\r\nExocine\r\n'),
(645, 'Mike Farmer\r\n', 'mikeGat@gmail.com', '82382491651', '', 'Good Day \r\n \r\nThis is Mike Farmer\r\n \r\nLet me introduce to you our latest research results from our constant SEO feedbacks that we have from our plans: \r\n \r\nhttps://www.strictlydigital.net/product/semrush-backlinks/ \r\n \r\nThe new Semrush Backlinks, which will make your gozoomtech.com SEO trend have an immediate push. \r\nThe method is actually very simple, we are building links from domains that have a high number of keywords ranking for them.  \r\n \r\nForget about the SEO metrics or any other factors that so many tools try to teach you that is good. The most valuable link is the one that comes from a website that has a healthy trend and lots of ranking keywords. \r\nWe thought about that, so we have built this plan for you \r\n \r\nCheck in detail here: \r\nhttps://www.strictlydigital.net/product/semrush-backlinks/ \r\n \r\nCheap and effective \r\n \r\nTry it anytime soon \r\n \r\nRegards \r\nMike Farmer\r\n \r\nmike@strictlydigital.net'),
(646, 'Mike Galbraith\r\n', 'peterKessy@gmail.com', '88195998246', '', 'Hi there \r\n \r\nAre you tired of spending money on advertising that doesn’t work? \r\nWe have the right strategy for you, to meet the right audience within your City boundaries. \r\n \r\nB2B Local City Marketing that works: \r\nhttps://www.onlinelocalmarketing.org/product/local-research-advertising/ \r\n \r\nWith our innovative marketing approach, you will receive calls, leads, and website interactions within a week. \r\n \r\nRegards \r\nMike Galbraith\r\n https://www.onlinelocalmarketing.org'),
(647, 'Lisa Walker', 'lisa@jobdreamteam.com', '6163430069', 'Others', 'Greetings,\r\n\r\nEnsuring cybersecurity is crucial for safeguarding a company\'s security. Unfortunately, several small enterprises do not implement the necessary security measures to protect data and uphold the trust of their customers and clients. Consequently, they become vulnerable to potential data breaches.\r\n\r\nTo contribute to the prevention of security breaches, I propose writing an article to educate both novice and seasoned business owners on essential cybersecurity practices. I would appreciate it if you could allow me to publish the article on your website. Additionally, I will acknowledge your services in the article.\r\n\r\nThank you for your consideration.\r\n\r\nBest regards,\r\nLisa Walker\r\nJobDreamTeam.com\r\n\r\n\r\nP.S. Not interested in my emails? Please respond and let me know. If you’re interested in a free article on a topic other than my initial offer, be sure to reach out so we can come up with an idea you love.'),
(648, 'Mike Campbell\r\n', 'mikehinguarilugh@gmail.com', '88176181273', '', 'Hi there \r\n \r\nJust checked your gozoomtech.com baclink profile, I noticed a moderate percentage of toxic links pointing to your website \r\n \r\nWe will investigate each link for its toxicity and perform a professional clean up for you free of charge. \r\n \r\nStart recovering your ranks today: \r\nhttps://www.hilkom-digital.de/professional-linksprofile-clean-up-service/ \r\n \r\nRegards \r\nMike Campbell\r\nHilkom Digital SEO Experts \r\nhttps://www.hilkom-digital.de/'),
(649, 'Mike White\r\n', 'peterKessy@gmail.com', '85925511458', '', 'Hi there \r\n \r\nI have just took an in depth look on your  gozoomtech.com for the ranking keywords and saw that your website could use a boost. \r\n \r\nWe will increase your ranks organically and safely, using only state of the art AI and whitehat methods, while providing monthly reports and outstanding support. \r\n \r\nMore info: \r\nhttps://digitalx.press/unbeatable-seo/ \r\nWhatsapp us: https://wa.link/fqchim \r\n \r\nRegards \r\nMike White\r\n \r\nDigital X SEO Experts'),
(650, 'Rishabh Kumar', 'rishabh6401@gmail.com', '08218422497', 'Web Development', 'dsfgh'),
(651, 'Rishabh Kumar', 'rishabh6401@gmail.com', '08218422497', 'Mobile Development', 'qwder'),
(652, 'Mohit Chhabra', 'chabramohit@gmail.com', '4372553762', 'Web Development', 'hi'),
(653, 'suhail', 'gozoomtechnologies@gmail.com', '9690419681', 'Mobile Development', 'hello sir '),
(654, 'Mohit Chhabra', 'chabramohit@gmail.com', '4372553762', 'Web Development', 'hi'),
(655, 'Mohit Chhabra', 'chabramohit@gmail.com', '4372553762', 'Integration', 'hiiiiiiiiiiiiiiiii'),
(656, 'Mike Ogden\r\n', 'mikejothCowspiseeple@gmail.com', '83125925488', '', 'This service is perfect for boosting your local business\' visibility on the map in a specific location. \r\n \r\nWe provide Google Maps listing management, optimization, and promotion services that cover everything needed to rank in the Google 3-Pack. \r\n \r\nMore info: \r\nhttps://www.speed-seo.co/ranking-in-the-maps-means-sales/ \r\n \r\nThanks and Regards \r\nMike Ogden\r\n \r\nhttps://www.speed-seo.co/whatsapp-us/'),
(657, 'Lisa Walker', 'lisa@jobdreamteam.com', '(616) 343-0069', '', 'Hi again,\r\n\r\nI\'m circling back regarding the article idea I recently sent your way. I\'m interested to know if it aligns with your site\'s interests and if there\'s an opportunity for me to contribute an article on the following proposed topic: Educating both novice and seasoned business owners on essential cybersecurity practices.\r\n\r\nWill you please let me know? I can get started on writing it right away.\r\n\r\nBest regards,\r\nLisa Walker\r\nJobDreamTeam.com\r\n\r\n\r\nP.S. Not interested in my emails? Please respond and let me know. If you’re interested in a free article on a topic other than my initial offer, be sure to reach out so we can come up with an idea you love.'),
(658, 'Pillspeecy', 'iunskiygipertonik@gmail.com', '87386328223', '', 'Erectile dysfunction treatments available online from TruePills. \r\nDiscreet, next day delivery and lowest price guarantee. \r\n \r\nViagra is a well-known, branded and common erectile dysfunction (ED) treatment for men. \r\nIt\'s available through our Online TruePills service. \r\n \r\nTrial ED Pack consists of the following ED drugs: \r\n \r\nViagra Active Ingredient: Sildenafil 100mg 5 pills \r\nCialis 20mg 5 pills \r\nLevitra 20mg 5 pills \r\n \r\nhttps://true-pill.top/ \r\n \r\nDatevan\r\nLisipril\r\nDuramed\r\nEranz\r\n'),
(659, 'Mike Carter\r\n', 'peterKessy@gmail.com', '86247448948', '', 'Hello \r\n \r\nI have just analyzed  gozoomtech.com for its SEO metrics and saw that your website could use an upgrade. \r\n \r\nWe will improve your ranks organically and safely, using only state of the art AI and whitehat methods, while providing monthly reports and outstanding support. \r\n \r\nMore info: \r\nhttps://www.digital-x-press.co/unbeatable-seo/ \r\n \r\nRegards \r\nMike Carter\r\n \r\nDigital X SEO Experts \r\nhttps://www.digital-x-press.co/whatsapp-us/'),
(660, 'Naincy Maheshwari', 'naincymaheshwari010@gmail.com', '9411661310', 'Web Development', ''),
(661, 'Naincy Maheshwari', 'naincymaheshwari010@gmail.com', '9411661310', 'Web Development', ''),
(662, 'Mike Macduff\r\n', 'mikeGatKessy@gmail.com', '88472925819', '', 'Hello \r\n \r\nThis is Mike Macduff\r\n \r\nLet me introduce to you our latest research results from our constant SEO feedbacks that we have from our plans: \r\n \r\nThe new Semrush Backlinks, which will make your gozoomtech.com SEO trend have an immediate push. \r\nThe method is actually very simple, we are building links from domains that have a high number of keywords ranking for them.  \r\n \r\nForget about the SEO metrics or any other factors that so many tools try to teach you that is good. The most valuable link is the one that comes from a website that has a healthy trend and lots of ranking keywords. \r\nWe thought about that, so we have built this plan for you \r\n \r\nCheck in detail here: \r\nhttps://www.strictlydigital.co/semrush-backlinks/ \r\n \r\nCheap and effective \r\nTry it anytime soon \r\n \r\nRegards \r\nMike Macduff\r\n https://www.strictlydigital.co/whatsapp-us/'),
(663, 'Mike Miln\r\n', 'mikeGatKessy@gmail.com', '83119642952', '', 'Hi there, \r\n \r\nMy name is Mike from Monkey Digital, \r\n \r\nAllow me to present to you a lifetime revenue opportunity of 35% \r\nThat\'s right, you can earn 35% of every order made by your affiliate for life. \r\n \r\nSimply register with us, generate your affiliate links, and incorporate them on your website, and you are done. It takes only 5 minutes to set up everything, and the payouts are sent each month. \r\n \r\nClick here to enroll with us today: \r\nhttps://www.monkeydigital.co/join-affiliates/ \r\n \r\nThink about it, \r\nEvery website owner requires the use of search engine optimization (SEO) for their website. This endeavor holds significant potential for both parties involved. \r\n \r\nThanks and regards \r\nMike Miln\r\n \r\nMonkey Digital \r\nhttps://www.monkeydigital.co/whatsapp-affiliates/'),
(664, 'Greg Di Bruno', 'info@letsgetuoptimize.com', '(267) 972-1898', '', 'Hey team gozoomtech.com,\r\n\r\nI was looking at your website and realized that despite having a good design; it was not ranking high on any of the Search Engines (Google, Yahoo & Bing) for most of the keywords related to your business.\r\n\r\nWe can place your website on Google\'s 1st page.\r\n\r\n*  Top ranking on Google search!\r\n*  Improve website clicks and views!\r\n*  Increase Your Leads, clients & Revenue!\r\n\r\nI can send you more details on the packages/Portfolio/past work details.\r\n\r\nWell wishes,\r\nGreg Di Bruno\r\nSenior Services Consultant - Let’s Get You Optimize\r\nEmail: info@letsgetuoptimize.com\r\nPhone: (267) 972-1898\r\n\r\n\r\n\r\n\r\nIf you don’t want me to contact you again about this, reply with “unsubscribe”\r\n'),
(665, 'plumber_irPn', 'sleepworrectdi1976@promysjennyj-3d-skaner67.store', '82128434133', '', 'Лучшие сантехники в Сан-Хосе. \r\nЭкспертные услуги сантехников в Сан-Хосе. \r\nБыстрое устранение поломок сантехники в Сан-Хосе. \r\nРемонт сантехники в Сан-Хосе. \r\nСпециальные цены на услуги сантехников в Сан-Хосе. \r\nЛучшие сантехники для дома в Сан-Хосе. \r\nбыстро и профессионально. \r\nНадежные решения для вашей сантехники в Сан-Хосе. \r\nПомощь сантехника в Сан-Хосе. \r\nДоступные цены на сантехнические услуги в Сан-Хосе. \r\nsan jose plumbing <a href=https://www.plumbersan-joseca4.com>https://www.plumbersan-joseca4.com</a> .'),
(666, 'Mike Stevenson\r\n', 'mikeKessy@gmail.com', '85489895824', '', 'Hi there \r\nI just checked gozoomtech.com ranks and am sorry to bring this up, but it lacks in many areas. \r\n \r\nUnfortunately, building a bunch of links won\'t solve the issue in this case, and a more comprehensive strategy is required. Google has undergone significant changes over the past year, making it nearly impossible to compete for favorable rankings without a well-designed website. \r\n \r\nWe recommend a search engine-friendly website layout to resolve all issues and propel your site to the top. \r\n \r\nYou can check more details here: https://www.speedseo-digital.net/web-design/ \r\n \r\nThanks for your consideration \r\nMike Stevenson\r\nSpeed Designs \r\nhttps://www.speedseo-digital.net/whatapp-us/'),
(667, 'Mike Ford\r\n', 'mikeKessy@gmail.com', '84626648987', '', 'Hi there, \r\n \r\nWhile checking your gozoomtech.com for its ranks, I have noticed that there are some toxic links pointing towards it. \r\n \r\nGrab your free clean up and improve ranks in no time \r\nhttps://www.hilkom-seo.com/free-links-cleanup/ \r\n \r\nIt really works, get a free backlinks clean up with us today \r\n \r\n \r\nRegards \r\nMike Ford\r\n \r\nWhatsapp:https://www.hilkom-seo.com/whatsapp-us/'),
(668, 'Mike Roger\r\n', 'mikeGatKessy@gmail.com', '86918311211', '', 'Hello \r\nThis is Mike Roger\r\nfrom Strictly Digital \r\n \r\nLet me present to you our latest discovered from the SEO environment. \r\nWe have noticed that getting backlinks from websites that have high SEO metrics values doesn\'t always help, and in fact, what is more important is to have backlinks from sites that are actually ranking for many keywords. \r\n \r\nThus, we have built this service especially to meet these new discoveries and the results are astonishing. \r\n \r\nPlease check more details here: \r\nhttps://www.semrushbacklinks.com/get-started/ \r\n \r\n \r\n \r\nRegards, \r\nStrictly Digital SEO Team \r\n \r\nWhatsapp us for more details: \r\nhttps://www.semrushbacklinks.com/whatsapp-us/'),
(669, 'Mike Miers\r\n', 'peterKessy@gmail.com', '83999615486', '', 'Good Day \r\n \r\nI have just verified your SEO on  gozoomtech.com for its SEO metrics and saw that your website could use a push. \r\n \r\nWe will improve your ranks organically and safely, using only state of the art AI and whitehat methods, while providing monthly reports and outstanding support. \r\n \r\nMore info: \r\nhttps://www.unlimitedgoogle.com/monthly-seo/ \r\n \r\nRegards \r\nMike Miers\r\n \r\nDigital X SEO Experts \r\nhttps://www.unlimitedgoogle.com/whatsapp-us/'),
(670, 'suhail', 'abc@gmail.com', '9690419681', 'Mobile Development', 'testing'),
(671, 'Pillspeecy', 'iunskiygipertonik@gmail.com', '84166571588', '', 'Erectile dysfunction treatments available online from TruePills. \r\nDiscreet, next day delivery and lowest price guarantee. \r\n \r\nTrial ED Pack consists of the following ED drugs: \r\n \r\nViagra Active Ingredient: Sildenafil 100mg 5 pills \r\nCialis 20mg 5 pills \r\nLevitra 20mg 5 pills \r\n \r\nAcquistare viagra con paypal: \r\n \r\nhttps://cutt.ly/DebeNiy1 \r\n \r\nhttps://cutt.ly/webeBkKx \r\n \r\nhttps://u.to/BdO4IA'),
(672, 'Himani', 'himanipapnejacan@gmail.com', '6476807546', 'Mobile Development', 'Mobile development'),
(673, 'Himani', 'himanipapnejacan@gmail.com', '43732323', 'Mobile Development', 'ew'),
(674, 'Himani', 'himanipapnejacan@gmail.com', '647488884', 'Mobile Development', ''),
(675, 'RaymondDrEnd', 'no.reply.MartimDeVries@gmail.com', '86388756394', '', 'Hey there! gozoomtech.com \r\n \r\nDid you know that it is possible to send commercial offer totally legit? \r\nWhen such requests are sent, no personal data is used and messages are securely routed to forms designed to receive them and any subsequent appeals. Contact Form messages aren’t usually sent to spam, as they are seen as important. \r\nWe offer you the chance to try out our service for free. \r\nWe are able to transmit up to 50,000 messages in your name. \r\n \r\nThe cost of sending one million messages is $59. \r\n \r\nThis letter is automatically generated. \r\n \r\nContact us. \r\nTelegram - https://t.me/FeedbackFormEU \r\nSkype  live:contactform_18 \r\nWhatsApp - +375259112693 \r\nWhatsApp  https://wa.me/+375259112693 \r\nWe only use chat for communication.'),
(676, 'Mike Walker\r\n', 'mikeKessy@gmail.com', '84687294786', '', 'Hi there \r\nI just checked gozoomtech.com ranks and am sorry to bring this up, but it lacks in many areas. \r\n \r\nUnfortunately, building a bunch of links won\'t solve the issue in this case, and a more comprehensive strategy is required. Google has undergone significant changes over the past year, making it nearly impossible to compete for favorable rankings without a well-designed website. \r\n \r\nWe recommend a search engine-friendly website layout to resolve all issues and propel your site to the top. \r\n \r\nYou can check more details here:https://www.speedseo-digital.net/web-design/ \r\n \r\nThanks for your consideration \r\nMike Walker\r\nSpeed Designs \r\nhttps://www.speedseo-digital.net/whatapp-us/'),
(677, 'Mike Ayrton\r\n', 'mikeKessy@gmail.com', '89673788667', '', 'Hello, \r\n \r\nHey, I\'m Mike from Monkey Digital. We offer a highly popular service that costs only 10$ per 5000 social ads visits. \r\n \r\nMore info:  \r\nhttps://www.monkey-seo.com/get-started/ \r\n \r\nTracking will be sent the same day, the advertisement goes live within a few hours, effective and cheap marketing, try it out, it will be worth every penny. \r\n \r\nRegards \r\nMonkey Digital \r\nhttps://www.monkey-seo.com/whatsapp-us/'),
(678, 'Mike Howard\r\n', 'whatsapp-us.Tymn@gmail.com', '87644192163', '', 'Hi there, \r\n \r\nMy name is Mike from Monkey Digital, \r\n \r\nAllow me to present to you a lifetime revenue opportunity of 35% \r\nThat\'s right, you can earn 35% of every order made by your affiliate for life. \r\n \r\nSimply register with us, generate your affiliate links, and incorporate them on your website, and you are done. It takes only 5 minutes to set up everything, and the payouts are sent each month. \r\n \r\nClick here to enroll with us today: \r\nhttps://www.seomonkey.net/affiliates/ \r\n \r\nThink about it, \r\nEvery website owner requires the use of search engine optimization (SEO) for their website. This endeavor holds significant potential for both parties involved. \r\n \r\nThanks and regards \r\nMike Howard\r\n \r\nMonkey Digital \r\nhttps://www.seomonkey.net/whatsapp-affiliates/');
INSERT INTO `enquiry` (`id`, `name`, `email`, `contact_number`, `solution`, `message`) VALUES
(679, 'Mike Goodman\r\n', 'mikeKessy@gmail.com', '81918336986', '', 'Howdy \r\n \r\nI have just took an in depth look on your  gozoomtech.com for the ranking keywords and saw that your website could use an upgrade. \r\n \r\nWe will improve your ranks organically and safely, using only state of the art AI and whitehat methods, while providing monthly reports and outstanding support. \r\n \r\nMore info: \r\nhttps://www.seoxdigital.net/monthly-seo/ \r\n \r\nRegards \r\nMike Goodman\r\n \r\nDigital X SEO Experts \r\nhttps://www.seoxdigital.net/whatsapp-us/'),
(680, 'Alain Andersson\r\n', 'no-replyxxx@gmail.com', '81282356628', '', 'Hello, \r\n \r\nI\'m Mike from Monkey Digital, and I want to introduce you to one of our most popular services—10,000 social ads visits for just $10. \r\n \r\nIt’s an effective and affordable way to drive real traffic to your website. Here’s how it works: \r\n \r\n•	Your ad goes live within hours. \r\n•	You’ll receive detailed tracking the same day. \r\n•	All for just $10! \r\n \r\nLearn more and get started here: https://www.country-targeted-traffic.com/get-started/ \r\n \r\nGet Started with Monkey Digital, Try it out—it’s worth every penny. \r\n \r\nBest regards, \r\nAlain from Monkey Digital.\r\n \r\nMonkey Digital \r\nContact Us via WhatsApp: \r\nhttps://wa.link/uqh66k'),
(681, 'Mike Donovan\r\n', 'mikexxxx@gmail.com', '87948679798', '', 'Hi there \r\nWe have a special connection with a reputable Network that gives us the possibility to offer Social Ads Country Targeted and niche traffic for just 10$ for 10000 Visits. \r\n \r\nDepending on the Country, we can send larger volumes of ads traffic. \r\n \r\nTry us today, we even use this for our SEO clients: \r\nhttps://www.monkeydigital.co/product/country-targeted-traffic/ \r\n \r\nor chat with us on Whatsapp: https://wa.link/uqh66k \r\n \r\nRegards \r\nMike Donovan\r\n \r\nmonkeydigital.co'),
(682, 'Courtney Rosenfeld', 'courtney@gigspark.biz', '(321) 710-3400', '', 'Hello again,\r\n\r\nI wanted to circle back on the article proposal I shared about integrating AI into business operations.\r\n\r\nIf you’re interested in having this article on your site, please let me know. I’d be thrilled to contribute!\r\n\r\nThank you for considering, and I look forward to your thoughts.\r\n\r\n\r\nAll the best,\r\nCourtney Rosenfeld\r\nGigspark.biz\r\n\r\n\r\n～Interested in an article, just not on the topic I suggested? No problem! Just respond to let me know and we can come up with something else.'),
(683, 'Michealtream', 'raymondKessy@gmail.com', '82369844371', '', 'Hi there! gozoomtech.com \r\n \r\nDid you know that it is possible to send message entirely legitimate way and correctly? \r\nWhen such proposals are sent, no personal data is used, and messages are sent to forms specifically designed to receive messages and appeals securely. Messages that are sent by Feedback Forms are not seen as spam, since they are thought of as important. \r\nThere is now no cost to you to try out our service. \r\nWe can send up to 50,000 messages for you. \r\n \r\nThe cost of sending one million messages is $59. \r\n \r\nThis message was automatically generated. \r\n \r\nContact us. \r\nTelegram - https://t.me/FeedbackFormEU \r\nSkype  live:contactform_18 \r\nWhatsApp - +375259112693 \r\nWhatsApp  https://wa.me/+375259112693 \r\nWe only use chat for communication.'),
(684, 'Mike Pascal Muller\r\n', 'mikexxxx@gmail.com', '88343167325', '', 'Hi there \r\n \r\nHaving some bunch of links pointing to gozoomtech.com could have 0 value or worse for your website, It really doesn`t matter how many backlinks you have, what matters is the amount of keywords those websites rank for. That is the most important thing. Not the fake Moz DA or ahrefs DR score. That anyone can do these days. BUT the amount of ranking keywords the sites that link to you have. Thats it. \r\n \r\nHave such links point to your website and you will ROCK ! \r\n \r\nWe are offering this special service here: \r\nhttps://www.strictlydigital.net/product/semrush-backlinks/ \r\n \r\nIn doubts, or need more information, chat with us: https://www.strictlydigital.net/whatsapp-us/ \r\n \r\nKind regards \r\nMike Pascal Muller\r\n \r\nstrictlydigital.net'),
(685, 'Mike Eric Vincent\r\n', 'mike@monkeydigital.co', '85158532463', '', 'Hey, \r\n \r\nThis is Mike from Monkey Digital, \r\nI am reaching out regarding a mutual opportunity. \r\n \r\nHow would you like to show our banners on your site and link back via your unique affiliate link towards popular SEO solutions from our platform? \r\n \r\nThis way, you receive a recurring 35% residual income, month after month from any purchases that are made from your site. \r\n \r\nThink about it, all businesses benefit from SEO, so this is a big opportunity. \r\n \r\nWe already have over 12,000 affiliates and our payments are paid out every month. \r\nIn the past month, we distributed over $27,000 in payouts to our partners. \r\n \r\nIf this sounds good, kindly contact us here: \r\nhttps://monkeydigital.co/affiliates-whatsapp/ \r\n \r\nOr sign up today: \r\nhttps://www.monkeydigital.co/join-our-affiliate-program/ \r\n \r\nBest Regards, \r\nMike Eric Vincent\r\n \r\nPhone/whatsapp: +1 (775) 314-7914'),
(686, 'Drusilla Morton', 'drusilla.morton18@msn.com', '4882518', '', 'Hello\r\n\r\nI wanted to see if you would be open to rejuvenating your business website with our all-in-one website service.\r\n \r\nHere is what you get\r\n1. We rejuvenate your website\r\n2. We service your website monthly with maintenance and provide you 60 minutes every month of page updates to keep your website up to date for your business, all included.\r\n\r\nAll of this for only $97 a month! For real..\r\nAnd the best part is there is no up-front fee! \r\n\r\nWe are doing this because we do not believe its fair for businesses to pay so much for a great website.\r\n\r\nBut this offer is only good for few more days, for the first 7 clients, so you need to secure your spot before you miss out.\r\n \r\nClick Here to Get Started\r\nwww.websolutionsgenius.com/bestwebsites/\r\n\r\nTo Your Success\r\n\r\n\r\nTo Your Undisputed Success'),
(687, 'RaymondDrEnd', 'raymondKessy@gmail.com', '84115178432', '', 'Hi! gozoomtech.com \r\n \r\n \r\n  \r\n \r\n \r\n \r\nThe cost of sending one million messages is $59. \r\n \r\nThis offer is automatically generated. \r\n \r\nContact us. \r\nTelegram - https://t.me/FeedbackFormEU \r\nSkype  live:contactform_18 \r\nWhatsApp - +375259112693 \r\nWhatsApp  https://wa.me/+375259112693 \r\nWe only use chat for communication.'),
(688, 'Mike Tomas Laurent\r\n', 'info@strictlydigital.net', '88913351276', '', 'Greetings, \r\n \r\nGetting some collection of links linking to gozoomtech.com could have no value or harmful results for your business. \r\n \r\nIt really doesn’t matter how many inbound links you have, what matters is the total of keywords those domains appear in search for. \r\n \r\nThat is the most important factor. \r\nNot the overrated third-party metrics or ahrefs DR score. \r\nThese can be faked easily. \r\nBUT the number of high-traffic search terms the websites that send backlinks to you rank for. \r\nThat’s the bottom line. \r\n \r\nMake sure these backlinks point to your website and you will ROCK! \r\n \r\nWe are introducing this powerful service here: \r\nhttps://www.strictlydigital.net/product/semrush-backlinks/ \r\n \r\nIn doubt, or want clarification, reach out here: \r\nhttps://www.strictlydigital.net/whatsapp-us/ \r\n \r\nKind regards, \r\nMike Tomas Laurent\r\n \r\nstrictlydigital.net \r\nPhone/WhatsApp: +1 (877) 566-3738'),
(689, 'Ernestosor', 'shasemiskh@gazeta.pl', '87648839135', '', '<b> Portable balancer & Vibration analyzer Balanset-1A </b> \r\n \r\n<b> Description: </b> \r\n<a href=https://allegro.pl/oferta/przenosny-wywazarka-i-analizator-drgan-balanset-1a-kompletny-zestaw-16654413800><img src=\"https://vibromera.eu/wp-content/uploads/2023/09/77-e1693745667801.jpg.webp\"></a> \r\n \r\n Price: <b>€2399</b>  \r\n<a href=https://allegro.pl/oferta/przenosny-wywazarka-i-analizator-drgan-balanset-1a-kompletny-zestaw-16654413800> Order on Allegro </a> \r\n Save <b>€100</b> on <a href=https://vibromera.eu/shop/874/>vibromera.eu</a> with promo code <b>VB100!</b>  \r\n \r\n <b>Balanset-1A Device Description</b>  \r\n \r\n The Balanset-1A is a compact, dual-channel device designed for balancing and vibration analysis of rotating mechanisms. It is ideal for balancing rotors such as crushers, fans, mulchers, choppers, shafts, centrifuges, turbines, and other rotating machinery.  \r\n \r\n <b>In the Box</b>  \r\n \r\n The Balanset-1A comes with:  \r\n \r\n A measurement block with USB interface.  \r\n A pair of vibration sensors.  \r\n Optical sensor (laser tachometer) with magnetic mount.  \r\n Digital scales.  \r\n Software (computer not included, available as an option).  \r\n Plastic transport case.  \r\n \r\n Price: <b>€2399</b>  \r\n<a href=https://allegro.pl/oferta/przenosny-wywazarka-i-analizator-drgan-balanset-1a-kompletny-zestaw-16654413800> Order on Allegro </a> \r\n Save <b>€100</b> on <a href=https://vibromera.eu/shop/874/>vibromera.eu</a> with promo code <b>VB100!</b> '),
(690, 'GregoryWaymn', 'sovyur@gazeta.pl', '84486377174', '', ' \r\n \r\n<b>Eliminate Vibration Issues and Improve Equipment Performance</b> \r\n \r\nVibration is a silent killer of industrial machines. Imbalance leads to worn-out bearings, misalignment, and costly breakdowns. <b>Balanset-1A</b> is the ultimate tool for detecting and correcting vibration problems in electric motors, pumps, and turbines. \r\n \r\n<b>What Makes Balanset-1A Stand Out?</b> \r\n- Precise vibration measurement & balancing \r\n- Compact, lightweight, and easy to use \r\n- Two kit options: \r\n \r\n<a href=https://allegro.pl/oferta/przenosny-wywazarka-i-analizator-drgan-balanset-1a-kompletny-zestaw-16654413800>Full Kit on Allegro</a> - Advanced sensors & accessories, Software for real-time data analysis, Hard carrying case \r\nPrice: <b>9990 zl</b> \r\n<a href=https://allegro.pl/oferta/przenosny-wywazarka-i-analizator-drgan-balanset-1a-kompletny-zestaw-16654413800><img src=\"https://i.postimg.cc/qRGZsm5H/77-e1693745667801.jpg\"></a> \r\n \r\n<a href=https://allegro.pl/oferta/balanser-dynamiczny-balanset-1a-oem-set-16713019136>OEM Kit on Allegro</a> – Includes core balancing components, Same high-quality device \r\nPrice: <b>8800 zl</b> \r\n<a href=https://allegro.pl/oferta/balanser-dynamiczny-balanset-1a-oem-set-16713019136><img src=\"https://i.postimg.cc/htq3fzsd/image.jpg\"></a> \r\n \r\nPrevent unexpected breakdowns – Invest in <b>Balanset-1A</b> today! '),
(691, 'Avacet', 'zekisuquc419@gmail.com', '85129161712', '', 'Ndewo, achọrọ m ịmara ọnụahịa gị.'),
(692, 'Mike Lukas Persson\r\n', 'mike@monkeydigital.co', '81683386173', '', 'Hi there, \r\n \r\nI wanted to reach out with something that could seriously improve your website’s visitor count. We work with a trusted ad network that allows us to deliver authentic, location-based social ads traffic for just $10 per 10,000 visits. \r\n \r\nThis isn\'t fake traffic—it’s actual users, tailored to your chosen market and niche. \r\n \r\nWhat you get: \r\n \r\n10,000+ high-quality visitors for just $10 \r\nGeo-targeted traffic for any country \r\nLarger traffic packages available based on your needs \r\nProven to work—we even use this for our SEO clients! \r\n \r\nWant to give it a try? Check out the details here: \r\nhttps://www.monkeydigital.co/product/country-targeted-traffic/ \r\n \r\nOr connect instantly on WhatsApp: \r\nhttps://monkeydigital.co/whatsapp-us/ \r\n \r\nLooking forward to helping you grow! \r\n \r\nBest, \r\nMike Lukas Persson\r\n \r\nPhone/whatsapp: +1 (775) 314-7914'),
(693, 'Rosabel  Edney', 'pageranktechnology@gmail.com', '1201201200', '', 'Hello nexgenix.ca,\r\n\r\nHaving trouble attracting more leads and boosting your website\'s visibility?\r\n\r\nIf you\'d like to explore our services and solutions, just let me know.\r\n\r\nWell wishes,\r\nRosabel Edney | Digital Marketing Manager\r\n\r\n\r\n\r\nNote: - If you’re not Interested in our Services, send us  \"opt-out\"'),
(694, 'Brianna  Belton', 'briannawebsolution@gmail.com', '1201201200', '', 'Hello nexgenix.ca,\r\n\r\nDo you find it challenging to attract new leads and increase website visitors?\r\n\r\nAre you open to learning more about it?\r\n\r\nWell wishes,\r\nBrianna Belton | Digital Marketing Manager\r\n\r\n\r\n\r\nNote: - If you’re not Interested in our Services, send us  \"opt-out\"'),
(695, 'Rhea Arkwookerum', 'rhea.arkwookerum@googlemail.com', '8238710227', '', 'We’re interested in working with companies like yours for the long term. Could you send us your product list and prices? Please reach me on WhatsApp: +44 790 462 94 52\r\n'),
(696, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '9690419681', 'Mobile Development', 'hello'),
(697, 'Aaronbes', 'vaisligam@gazeta.pl', '85689559753', '', '<b>  Description:   </b> \r\n  <a href=https://www.machinio.com/listings/98380186-portable-balancer-vibration-analyzer-balanset-1a-full-kit-in-portugal><img src=\"https://vibromera.eu/wp-content/uploads/2023/09/77-e1693745667801.jpg.webp\"></a>  \r\n \r\n <a href=https://www.machinio.com/listings/98380246-dynamic-balancer-balanset-1a-oem-kit-in-portugal>  Order on Machinio  </a>  \r\n  Or get a <b>€100</b> discount on the official website vibromera.eu with promo code <b>VB100</b>  \r\n \r\n  <b>Balanset-1A Device Description</b>   \r\n \r\n  The Balanset-1A is a compact, dual-channel tool created for balancing and vibration analysis of rotating machinery. It excels in balancing rotors such as crushers, fans, mulchers, choppers, shafts, centrifuges, turbines, and more.   \r\n \r\n  <b>Included with the Device</b>   \r\n \r\n  The full kit package contains:   \r\n \r\n  A measurement unit with interface connectivity.   \r\n  Two vibration measurement sensors.   \r\n  Optical sensor (laser tachometer) with a magnetic holder.   \r\n  Software (laptop can be ordered separately).   \r\n Electronic scales.  \r\n Plastic carrying case.  \r\n \r\n<b>Price:</b> \r\n Full: <b>1751 EUR</b>  \r\n OEM: <b>1561 EUR</b>  \r\n \r\n <a href=https://www.machinio.com/listings/98380186-portable-balancer-vibration-analyzer-balanset-1a-full-kit-in-portugal>  Order on Machinio  </a>  \r\n Or save <b>€100</b> on vibromera.eu with promo code <b>VB100!</b>   \r\n \r\nInstagram: https://www.instagram.com/vibromera_ou/ \r\nYoutube: https://www.youtube.com/@vibromera \r\nWebsite: vibromera.eu'),
(698, 'Mike Tomas Pedersen\r\n', 'mike@monkeydigital.co', '87392923132', '', 'Hello, \r\n \r\nI wanted to connect with something that could seriously boost your website’s reach. We work with a trusted ad network that allows us to deliver authentic, country-targeted social ads traffic for just $10 per 10,000 visits. \r\n \r\nThis isn\'t fake traffic—it’s real visitors, tailored to your preferred location and niche. \r\n \r\nWhat you get: \r\n \r\n10,000+ high-quality visitors for just $10 \r\nGeo-targeted traffic for any country \r\nLarger traffic packages available based on your needs \r\nProven to work—we even use this for our SEO clients! \r\n \r\nWant to give it a try? Check out the details here: \r\nhttps://www.monkeydigital.co/product/country-targeted-traffic/ \r\n \r\nOr chat with us on WhatsApp: \r\nhttps://monkeydigital.co/whatsapp-us/ \r\n \r\nLooking forward to working with you! \r\n \r\nBest, \r\nMike Tomas Pedersen\r\n \r\nPhone/whatsapp: +1 (775) 314-7914'),
(699, 'Kristie McAuley', 'kristie.mcauley@gmail.com', '', '', 'Hello\r\nI wanted to see if you would be open to rejuvenating your business website with our complete website package.\r\n\r\nWe are giving away free websites right now, you only pay for maintenance. \r\n\r\nHere is what you get\r\n1. We rejuvenate your website\r\n2. We service your website monthly with maintenance and provide you one hour every month of page updates to keep your website up to date for your business, all included.\r\n\r\nAnd You Get a one-time completely free on-site SEO. Yes, no SEO subscriptions with us!\r\n\r\nAll of this for only $97 a month! For real..\r\nAnd the best part is there is no up-front fee! \r\n\r\nWe are doing this because we do not believe its fair for businesses to pay so much for a great website.\r\n\r\nBut this offer is only good until sunday, for the first 7 clients, so you need to redeem this offer before you miss out.\r\n \r\nClick Here to Get Started\r\nwww.websolutionsgenius.com/topflightwebsites/\r\n\r\nTo Your Success\r\n'),
(700, 'Eric Jones', 'ericjonesmyemail@gmail.com', '555-555-1212', '', 'Hello to the Gozoomtech Owner,\r\n\r\nI am Eric, and I recently discovered your site, Gozoomtech.\r\n\r\nYour site has a great deal going for it, but I have an idea to help make it even more effective.\r\n\r\nPlease take a look at Web Visitors Into Leads – you can visit https://actionleadgeneration.com for a demonstration today.\r\n\r\nWeb Visitors Into Leads is a tool that operates on your site, prepared to gather each visitor’s name, email address, and phone number. It notifies you the instant they show interest, allowing you to speak with them while they are still viewing your site.\r\n\r\nOnce you have their phone number, you can begin an SMS conversation immediately. If they are not ready at that moment, you can follow up later with messages to share updates, information, or simply check in and maintain a connection.\r\n\r\nPlease visit https://actionleadgeneration.com to learn more about what Web Visitors Into Leads can do for your business.\r\n\r\nConnecting with someone promptly rather than waiting a long time can make a substantial difference in your results.\r\n\r\nEric\r\n\r\nP.S. Research indicates that many site visitors leave quickly without returning. Web Visitors Into Leads includes a 14-day no-cost trial and supports international communication. There may be individuals ready to engage with you right now, so please do not delay.\r\n\r\nPlease visit https://actionleadgeneration.com to learn more about Web Visitors Into Leads.\r\n\r\nIf you\'d like to Want to receive fewer emails, or none whatsoever? Update your email preferences by visiting https://actionleadgeneration.com/unsubscribe.aspx?d=gozoomtech.com'),
(701, 'Aaronbes', 'vaisligam@gazeta.pl', '82844564196', '', '<b>  Description:   </b> \r\n  <a href=https://www.machinio.com/listings/98380186-portable-balancer-vibration-analyzer-balanset-1a-full-kit-in-portugal><img src=\"https://vibromera.eu/wp-content/uploads/2023/09/77-e1693745667801.jpg.webp\"></a>  \r\n \r\n <a href=https://www.machinio.com/listings/98380246-dynamic-balancer-balanset-1a-oem-kit-in-portugal>  Order on Machinio  </a>  \r\n Or save <b>€100</b> on vibromera.eu with promo code <b>VB100!</b>   \r\n \r\n  <b>Overview of the Balanset-1A Device</b>   \r\n \r\n  The Balanset-1A is a compact, dual-channel device designed for balancing and vibration analysis of rotating mechanisms. It is ideal for balancing rotors such as crushers, fans, mulchers, choppers, shafts, centrifuges, turbines, and other rotating machinery.   \r\n \r\n  <b>Supplied with</b>   \r\n \r\n  The Balanset-1A Full kit includes:   \r\n \r\n  A measurement unit with interface connectivity.   \r\n  Two vibration sensors.   \r\n  Optical sensor (laser tachometer) with magnetic mount.   \r\n  Software (Note: Laptop not included, available as an additional order).   \r\n Digital weighing scales.  \r\n Hard plastic carrying case.  \r\n \r\n<b>Price:</b> \r\n Full kit: <b>€1751</b>  \r\n OEM: <b>1561 EUR</b>  \r\n \r\n <a href=https://www.machinio.com/listings/98380186-portable-balancer-vibration-analyzer-balanset-1a-full-kit-in-portugal>  Order on Machinio  </a>  \r\n  Or get a <b>€100</b> discount on the official website vibromera.eu with promo code <b>VB100</b> '),
(702, '', 'Daniel.Miller@bizownercentral.com', '', '', 'Hello,\r\n\r\nIn this day and age, protecting your business\'s intellectual property (IP) is more important than ever. With the rise of online threats and easy access to valuable content, how can you ensure your hard-earned ideas stay safe? My latest article explores effective strategies to protect your business’s IP, from securing digital assets to using legal tools and tech solutions.\r\n\r\nI’d love for your readers to benefit from these insights and take proactive steps to safeguard their business. Let me know if you\'d like to feature this article on your site!\r\n\r\nThank you!\r\nDaniel Miller\r\nBIZOWNERCENTRAL.COM\r\n\r\n\r\nP.S. If you have an alternative topic in mind that interests you, please share your preference. However, I fully respect your decision if you\'d rather not receive additional messages from me.'),
(703, 'Eric Jones', 'ericjonesmyemail@gmail.com', '555-555-1212', '', 'Hello to the Gozoomtech Owner,\r\n\r\nI am Eric, and I recently discovered your site, Gozoomtech.\r\n\r\nYour site has a great deal going for it, but I have an idea to help make it even more effective.\r\n\r\nPlease take a look at Web Visitors Into Leads – you can visit https://actionleadgeneration.com for a demonstration today.\r\n\r\nWeb Visitors Into Leads is a tool that operates on your site, prepared to gather each visitor’s name, email address, and phone number. It notifies you the instant they show interest, allowing you to speak with them while they are still viewing your site.\r\n\r\nOnce you have their phone number, you can begin an SMS conversation immediately. If they are not ready at that moment, you can follow up later with messages to share updates, information, or simply check in and maintain a connection.\r\n\r\nPlease visit https://actionleadgeneration.com to learn more about what Web Visitors Into Leads can do for your business.\r\n\r\nConnecting with someone promptly rather than waiting a long time can make a substantial difference in your results.\r\n\r\nEric\r\n\r\nP.S. Research indicates that many site visitors leave quickly without returning. Web Visitors Into Leads includes a 14-day no-cost trial and supports international communication. There may be individuals ready to engage with you right now, so please do not delay.\r\n\r\nPlease visit https://actionleadgeneration.com to learn more about Web Visitors Into Leads.\r\n\r\nIf you\'d like to Want to receive fewer emails, or none whatsoever? Update your email preferences by visiting https://actionleadgeneration.com/unsubscribe.aspx?d=gozoomtech.com'),
(704, 'Amelia Clark', 'clara.voicebot@foobox.com', '3124875902', '', 'Hi, created a real-time AI employee demo for Gozoomtech.com.\r\n\r\nShe:\r\n- Recovers up to 98.9% of missed calls  \r\n- Confirms jobs via phone, text, live chat  \r\n- Responds like your team, never sleeps, at a fraction of hiring cost\r\n- Follows up to increase trust, improve retention, and drive second-time purchases\r\n\r\n→ Listen live: 214-429-3332\r\n\r\nor let the AI call you:\r\nhttps://smarthire.store\r\n\r\nP.S. She(AI) replaces a $3K/month hire — always online.'),
(705, 'Mike Simon Jensen\r\n', 'info@digital-x-press.com', '85391589841', '', 'Hi, \r\nI realize that many businesses struggle grasping that Answer Engine Optimization (AEO) is a continuous effort and a well-planned ongoing investment. \r\n \r\nUnfortunately, very few marketers have the patience to observe the gradual yet meaningful results that can completely change their online presence. \r\n \r\nWith constant algorithm changes, a stable, continuous SEO strategy including Answer Engine Optimization (AEO) is vital for securing a profitable outcome. \r\n \r\nIf you recognize this as the ideal approach, work with us! \r\n \r\nCheck out Our Monthly SEO Services https://www.digital-x-press.com/unbeatable-seo/ \r\n \r\nChat With Us on Instant Messaging https://www.digital-x-press.com/whatsapp-us/ \r\n \r\nWe deliver remarkable results for your resources, and you will enjoy choosing us as your growth partner. \r\n \r\nWarm regards, \r\nDigital X SEO Experts \r\nPhone/WhatsApp: +1 (844) 754-1148'),
(706, 'Hello nkxnpr4\r\n >>> https://jcobxodvfc.com/?qahhfu', 'goo4@kirzzioh.ru\r\n', 'Good day v15aemr\r\n >>> https://9i7ims2nlx.com/?rskorcu  #Lolllukazzzur333\r\n <<<', '', ''),
(707, 'Armando Bernays', 'armando.bernays@gmail.com', '4098321204', '', 'We are interested in your products and services, for long term cooperation,  please send me your pricing and portfolio on our Whatsapp: https://wa.me/16722701947'),
(708, 'Arthur Taylor', 'eliza.successteam@rushpost.com', '3128745602', '', 'Hi,\r\n\r\nHad a look at your Google profile and, saw a chance to exponentially grow your local presence.\r\n\r\nGrowing businesses are earning real Google reviews every month, and turning them into real inbound business.\r\n\r\nWe’ve built a done-for-you AI system that helps you get *unlimited* verified reviews.  \r\n- No fake bots  \r\n- No logins needed  \r\n- No awkward asks\r\n\r\nTo prove it works, we’ll get you 25 new Google reviews — as a bonus.\r\n\r\nClaim your demo call \r\n→https://boostyourstars.site\r\n\r\n\r\nFew demo spots left this week.\r\n\r\n- Trusted Google Reviews Squad\r\n\r\n**P.S. Your first 25 reviews are our gift - test it yourself.  \r\nIf it works, we take it further, no guesswork.'),
(709, 'Lori Shultz', 'vinhgrowth@gmail.com', '', '', 'Hi. We run a YouTube growth service, which increases your number of subscribers both safety and practically.\r\n\r\n- We guarantee to gain you new 700+ subscribers per month\r\n- People subscribe because they are interested in your videos/channel, increasing video likes, comments and interaction.\r\n- All actions are made manually by our team. We do not use any bots.\r\n\r\nThe price is just $60 (USD) per month, and we can start immediately. If you are interested and would like to see some of our previous work, let me know and we can discuss further.\r\n\r\nKind Regards,\r\n\r\nTo Unsubscribe, reply with the word unsubscribe in the subject.'),
(710, 'Ima Garmon', 'garmon.ima@gmail.com', '71933948', '', 'Hello\r\nCan you send me youroffer list with full  pricing ? Please send me it on my Whatsapp +48 794 973 220'),
(711, 'Mike Marcus Moore\r\n', 'info@professionalseocleanup.com', '81799816259', '', 'Hi, \r\nWhile reviewing gozoomtech.com, we spotted toxic backlinks that could put your site at risk of a Google penalty. \r\n \r\nWe can clean up your link profile and protect your rankings — all for just $5. \r\n \r\nFix it now before Google does: \r\nhttps://www.professionalseocleanup.com/ \r\n \r\nNeed help or questions? Chat here: \r\nhttps://www.professionalseocleanup.com/whatsapp/ \r\n \r\nBest, \r\nMike Marcus Moore\r\n \r\n+1 (855) 221-7591 \r\ninfo@professionalseocleanup.com'),
(712, 'Dick Bonwick', 'bonwick.dick5@gmail.com', '675086697', '', 'Hello\r\nCan you send me your offer with pricing ? Please send me it on my Whatsapp: +1 548 392 4430'),
(713, 'Dean Burgess', 'deanburgess@excitepreneur.net', '(888) 909-1171', '', 'Greetings,\r\n\r\nSince almost everyone enjoys shopping online, e-commerce is indeed a fantastic business opportunity for startups and/or young business owners.\r\n\r\nWould you be willing to post my resource guide for business owners in their 20s and 30s wishing to launch their first e-commerce venture? I\'ll provide materials and guidance on how to start and develop a business.\r\n\r\nYour thoughts?\r\n\r\nRegards and thanks for your time!\r\nDean Burgess\r\nCheck out my website: https://excitepreneur.net/\r\n\r\n\r\nP.S. By the way, if you’d like me to write on a topic of your choice, please send your idea my way! Or, if you don’t want to hear from me again, just let me know.'),
(714, 'Mike Espen Taylor\r\n', 'mike@monkeydigital.co', '84676333758', '', 'Dear Webmaster, \r\n \r\nI wanted to reach out with something that could seriously improve your website’s visitor count. We work with a trusted ad network that allows us to deliver genuine, country-targeted social ads traffic for just $10 per 10,000 visits. \r\n \r\nThis isn\'t fake traffic—it’s engaged traffic, tailored to your chosen market and niche. \r\n \r\nWhat you get: \r\n \r\n10,000+ genuine visitors for just $10 \r\nLocalized traffic for your chosen location \r\nHigher volumes available based on your needs \r\nUsed by marketers—we even use this for our SEO clients! \r\n \r\nInterested? Check out the details here: \r\nhttps://www.monkeydigital.co/product/country-targeted-traffic/ \r\n \r\nOr connect instantly on WhatsApp: \r\nhttps://monkeydigital.co/whatsapp-us/ \r\n \r\nLooking forward to helping you grow! \r\n \r\nBest, \r\nMike Espen Taylor\r\n \r\nPhone/whatsapp: +1 (775) 314-7914'),
(715, 'Otto Sheahan', 'sheahan.otto@gmail.com', '7068824368', '', 'Hello\r\nCan you send me your pricelist ?We have interested clients.  Please send me it on my Whatsapp: \r\n+48 515 990 718'),
(716, 'Fletcher Hass', 'fletcher.hass@outlook.com', '5863023891', '', 'Hi, your offer seams interesting, please send us more details, we would like to order. Text us on our whatsapp: +48 504 723 605'),
(717, 'Leecet', 'zekisuquc419@gmail.com', '85489125453', '', 'Hej, jeg ønskede at kende din pris.'),
(718, 'Kathryn Oliveira', 'oliveira.kathryn83@msn.com', '46459204', '', 'Hi, your offer seams interesting, please send us more details, we would like to order. Text us on our whatsapp: +48 507 645 789\r\n'),
(719, 'Leecet', 'zekisuquc419@gmail.com', '89566647942', '', 'Sveiki, aš norėjau sužinoti jūsų kainą.'),
(720, 'Zelda Bass', 'zelda.bass@outlook.com', '150139542', '', 'Hello\r\nWe are looking for company like yours, we would like to make big order. Please contact us on whatsapp  for more details: +1 825 927 4325'),
(721, 'Mark Tanner', 'Mark.Tanner@localis.ai', '(314) 338-4553', '', 'Good day,\r\n\r\nLet’s face it - tech disruptions don’t RSVP. Whether it’s a cyberattack or sudden growth, your IT infrastructure needs to roll with the punches.\r\n\r\nI’m putting together an article packed with great tips to help businesses strengthen their systems and stay agile in uncertain times. It’s practical, timely, and designed to resonate with your readers.\r\n\r\nIf you’re open to featuring it on your site, I’d love to send it your way! What do you think? :)\r\n\r\nAll my best,\r\nMark Tanner\r\nContent Creator\r\nlocalis.ai\r\n\r\n\r\nP.S. By the way, if you’d like me to write on a topic of your choice, please send your idea my way! I’m very much open to your ideas and suggestions.'),
(722, 'Emery Wisewould', 'wisewould.emery@googlemail.com', '7577453471', '', 'Hello\r\nWe are interested to make order from you, as well we can resell more, please contact us on whatsapp: +1 450 255 8744'),
(723, '888starz_hvkn', 'npcjaowrtkn@galaxygate.store', '81224672193', '', '888starz – известных онлайн-казино, широкий выбор азартных игр. С момента своего создания. для каждого клиента. \r\n \r\nИгроки в 888starz, предлагаемых на платформе. известными провайдерами и высококачественной графикой и увлекательным сюжетом. живую рулетку и с настоящими дилерами, что придаёт. \r\n \r\nявляется. предлагает и вывода средств, что удобным и быстрым. защищены, что клиентов. \r\n \r\nдля пользователей. В 888starz, которая готова помочь. Вы можете связаться и на любые вопросы. Таким образом, комфорт. \r\n888starz uzbekistan <a href=http://888starz2.ru/>https://888starz2.ru/</a> \r\n'),
(724, 'TÜRKAN POLAT', 'denizgizem2011@gmail.com', '5388986841', 'Others', 'Tasarımı yazılımı devam eden ortak çalışma yürüttüğünüz Gökhan sarıkaya yakın zamanda cezaevine girecektir,adli kontrol ile dışarıdadır.Kendisinden bir türlü kurtulamadığım ve yaklaşık 10 suçtan yargılanmaktadır.Tüm dokümanları verebilirim.Savcılık dokümanları verilecektir'),
(725, 'Brandie Strachan', 'brandie.strachan@googlemail.com', '3626508945', '', 'We would like to start with an order and grow into a resale partnership with your company. Please contact us on WhatsApp +1 825 591 4421 for more information.\r\n'),
(726, 'Brenda Rowell', 'brenda.rowell@googlemail.com', '7727665013', '', 'Hello\r\nWe would like to publish link to our website at your website in exchange we will tell you how to rank your website in search results better for free, as well we will give you free submission websites where you get valuable backlinks, if you interested please text me +48 531 870 362  - Michal'),
(727, 'Jen Smith', 'cit06008@adobe.com', '(408) 536-4416', '', 'Hi!\r\n\r\nMy name is Jen and I look forward to the possibility of connecting with your audience via unique content designed by our team at Adobe.\r\n\r\nWe’d like to write an article that will explore how businesses can maintain a unified brand voice and visual identity across different channels, a key component of enhanced brand recognition and audience engagement.\r\n\r\nIf this topic doesn\'t sound like a good fit, we can work together to come up with something that works better.\r\n\r\nWould you be interested in hosting guest content on your site? If so, I’d be more than happy to send over our article for your review and feedback.\r\nAs a thank-you for your time and hospitality, we’re offering a complimentary one-year Adobe Express Premium license — provided the article is published within one week of delivery. This license unlocks a full suite of templates and advanced design tools beyond the free version. [Learn more here: https://www.adobe.com/express/]\r\n\r\nThank you!\r\nJen'),
(728, 'Isidro Ogden', 'isidro.ogden82@gmail.com', '344939451', '', 'We are very interested in buying from you and believe we can resell many of your products. Kindly contact us on WhatsApp +1 780 652 4793  for further discussion.'),
(729, 'DonaldMappy', 'info@enso.finance', '85736834371', '', 'We, a group of participants of the “Vampire Attack” campaign. In your public statements you stated that participants would receive ENSO tokens. We fully complied with all announced requirements. After the release of the official reward checker, our wallet addresses were marked as “not eligible”. According to our data, thousands of participants are in the same situation. We consider this to be fraudulent behavior. \r\nWe demand: publicly acknowledge the participation of all users in the “Vampire Attack” campaign and include each participant in the ENSO token distribution on equal terms. \r\nIf the https://www.enso.build/ does not begin the resolution process within 5 business days, we reserve the right to: \r\n• Widely disseminate this information; \r\n• File collective complaints.'),
(730, 'Lashonda Marcell', 'lashonda.marcell48@outlook.com', '8175996125', '', 'Hi Gozoomtech Com,\r\n\r\nLooking for a way to step into one of the fastest-growing digital niches—without needing to be a tech expert, content creator, or influencer?\r\n\r\nHere’s a smart opportunity, ready to go.\r\n\r\nKiddy Store Fortune just launched, and it’s one of the most beginner-friendly business models I’ve seen in a while.\r\n\r\nIt’s a done-for-you WordPress store built specifically for the booming kids printables market—preloaded with over 10,000 pages of ready-to-sell activities, worksheets, coloring pages, and learning materials.\r\n\r\n������ Check out Kiddy Store Fortune here ������ https://kiddy-store-fortune.blogspot.com\r\n\r\n✅ No design work\r\n✅ No product creation\r\n✅ No marketplace restrictions\r\n✅ No tech headaches\r\n\r\nJust install the store, connect your payment method, and you’re ready to start selling.\r\n\r\nWhether you want a creative side hustle, a way to generate passive income, or your first step into digital product selling—this is a business you can launch this week.\r\n\r\n������ It’s on special launch discount right now, but not for long.\r\n\r\n������ Check out Kiddy Store Fortune here ������ https://kiddy-store-fortune.blogspot.com\r\n\r\nIf you’ve been waiting for a simple way to tap into the booming kids printable niches, this could be the one.\r\n\r\n\r\nTo your viral success,\r\n[Lashonda Marcell]\r\n\r\nEmpowering Your Digital Marketing Success\r\n'),
(731, 'Aidan Dane?', 'aidan.dane@gmail.com', '495307722', '', 'More clicks, less work: AI content that sells https://www.youtube.com/watch?v=8_3AOJj8lTg\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nto UNSUBSCRIBE:\r\nhttps://europa-168.site/unsubscribe?domain=gozoomtech.com\r\nAddress: 209 West Street Comstock Park, MI 49321'),
(732, 'Jolie Uy', 'jolie.uy@msn.com', '2351422219', '', 'Dear Sir/Madam,\r\nWe’d like to become a reseller of your items. We already have clients interested in placing orders. Contact us via WhatsApp: +1 343 482 6840\r\nBest regards\r\n'),
(733, 'David Hardin', 'david.hardin@uselendrose.com', '(619) 822-1960', '', 'Hi Gozoom team,\r\n\r\nI came across your end to end Microsoft, cloud and AI development services and wanted to reach out.\r\n\r\nMy company works alongside firms like yours, and since we are not a competitor, I have a quick idea for a possible team up.\r\n\r\nWe built a no cost financing tool that lets your clients spread project invoices across 12 to 48 months, so they can start work now without cash flow stress. You still collect the full contract value up front, with no fees, no risk and zero change to how you quote or bill.\r\n\r\nWe built this side by side with software teams and would be happy to walk you through it if it sounds useful. It costs you nothing and turns price objections into signed deals. Partners who use it tell us client uptake and cash predictability both climb.\r\n\r\nLet me know a few times that work next week and we can set up a short call, or grab a slot straight from my calendar here\r\nhttps://scheduler.zoom.us/d/2qzz4srg/prospective-merchant-discovery-meeting-pr\r\n\r\nAll the best,\r\nDavid'),
(734, 'Carla Lopez', 'carlalopez@boomerbiz.org', '(913) 396-1060', '', 'Hello there.\r\n\r\nI\'m fairly tech-savvy, and I use it to manage everything from my business finances to my prescriptions. However, as an older adult who did not grow up on the internet, I have always been wary of exposing personal information online.\r\n\r\nNow that I\'ve done some research on cybersecurity, how it works, and what role I have in keeping my own data safe online, I\'m a lot more assured. That\'s why I wanted to share some of what I\'ve learned with your readers, kind of like a \"Cybersecurity 101\" course for anyone interested in learning more.\r\n\r\nIs it possible for me to send you a review article?\r\n\r\nThank you!\r\nCarla Lopez\r\nBoomerbiz.org\r\n\r\n\r\nP.S. If you’d prefer a different topic, I’d love to hear it! I’ll ensure the article fits your site’s needs while performing well in AI and search rankings.'),
(735, 'Ambrose Lilly', 'lilly.ambrose@msn.com', '4793178', '', 'Dear Team,\r\nWe’re interested in reselling your products and have several clients ready to place orders. Kindly get in touch through WhatsApp: +1 548 544 4400\r\nWarm regards'),
(736, 'Dean Burgess', 'deanburgess@excitepreneur.net', '(888) 909-1171', '', 'Hi,\r\n\r\nI wanted to follow up and see if you had a chance to consider posting my resource guide for young business owners starting in e-commerce. Let me know if you have any questions.\r\n\r\nBest,\r\nDean'),
(737, 'Rob Triggs', 'r.triggs@usertrofficial.com', '(619) 822-1960', '', 'Hi Gozoom team,\r\n\r\nI noticed your Microsoft development and consulting focus, especially the work around chatbots and cloud DevOps for enterprise clients.\r\n\r\nWorking closely with other Microsoft partners, I see the same pattern: strong dev shops hit a wall when it comes to turning Microsofts sales plays into closed deals. Even with solid Microsoft credentials, partners tell me their win rates stall around twenty to thirty percent and opportunities slip past the nine-month mark.\r\n\r\nWe built the Microsoft Partner Power-Up Program to fix that. Through our CALM framework and weekly coaching, partners usually lift win rates by twenty percent inside eight weeks and trim the sales cycle at the same time. The system mirrors how Microsoft and enterprise buyers actually move, not textbook theory.\r\n\r\nOne partner recently unlocked three stuck deals worth four hundred thousand in four weeks after joining, opportunities they had written off.\r\n\r\nIm running a free masterclass for a small group of Microsoft partners. If youd like a seat, send over a couple of times that work for a quick call and Ill get you registered.\r\n\r\nAll the best,\r\nRob'),
(738, 'Corinne Hammond', 'info@bebizminded.com', '(203) 487-2857', '', 'Hi there,\r\n\r\nI wanted to follow up on my previous email about the article focused on empowering individuals with disabilities to start their own business. I believe it could be a great addition to your website, and I\'d love to hear your thoughts!\r\n\r\nBest,\r\nCorinne'),
(739, 'Mark Tanner', 'Mark.Tanner@localis.ai', '(314) 338-4553', '', 'Hi there,\r\n\r\nI wanted to follow up and see if you’ve had a chance to consider the article I proposed about strengthening IT systems in unpredictable times. I believe it could be a great fit for your readers.\r\n\r\nIf you already responded, thanks for that and sorry for the repeat.\r\n\r\nBest regards,\r\nMark Tanner'),
(740, 'DieselFuel.net', 'fuelfuel321@gmail.com', '81412171644', '', 'Hello, \r\n \r\nWe kindly ask you to include our website dieselfuel.net in your business directory or supplier listings. \r\n \r\nOur site provides verified information about global EN590 diesel suppliers and contact details of logistics companies. \r\nMany businesses use our platform for B2B fuel trading, supplier sourcing, and industry networking. \r\n \r\nIf your website includes: \r\n• a business directory \r\n• supplier listings \r\n• a resources page \r\n• a B2B marketplace \r\n• a partners or contacts section \r\n \r\n—we would appreciate adding a link to: \r\n \r\nhttps://dieselfuel.net \r\n \r\nShort description (optional): \r\nDieselFuel.net – Global EN590 suppliers, logistics contacts, B2B fuel marketplace. \r\n \r\nWe are also a direct fuel supplier and can offer annual diesel delivery contracts if your company requires regular supplies. \r\n \r\nThank you for your time and consideration. \r\nIf you need any additional information, feel free to contact us. \r\n \r\nBest regards, \r\nDieselFuel.net Team'),
(741, 'Carla Lopez', 'carlalopez@boomerbiz.org', '(913) 396-1060', '', 'Hi there,\r\n\r\nI wanted to check if you\'ve had a chance to consider my proposal to share a \"Cybersecurity 101\" article with your readers. Please let me know if you\'re interested or if there\'s a different topic you\'d prefer.\r\n\r\nIf you already responded, thanks for that and sorry for the repeat.'),
(742, 'Virginia Cooper', 'virginiac@learnaliving.co', '(614) 333-3411', '', 'Hello,\r\n\r\nI\'m suggesting an article for your website, focusing on communicating the value of Information Technology (IT) to non-technical stakeholders. The article aims to offer practical strategies for IT professionals to convey their contributions effectively to individuals without technical expertise.\r\n\r\nIf interested in featuring this piece, I can start working on it immediately. Let me know your thoughts!\r\n\r\nMany thanks,\r\nVirginia Cooper | learnaliving.co\r\n\r\n\r\nP.S. Send me your proposal if you\'re interested but would rather I write on a subject of your choice! I create content that connects with people while also being easy for search and AI systems to surface.'),
(743, 'Blondell Levien', 'blondell.levien40@gmail.com', '8605315699', '', 'Reliable seo backlinks to skyrocket your seo backlinks! \r\nBonusBacklinks.com - we deliver daily backlinks and drive website visits to your site EVERY DAY:\r\n\r\n+ Get 85% DISCOUNT\r\n+ Quality daily backlinks\r\n+ Organic website visits\r\n+ Prices as low as $1\r\n+ Bonus discount codes:\r\n\r\nhttps://BonusBacklinks.com/85bonus\r\n\r\nBonusBacklinks.com - daily backlinks and website traffic to grow your website every day'),
(744, 'Clarence Wilkins', 'cwilkins@bizzpop.biz', '(414) 773-2978', '', 'Hi there,\r\n\r\nI wanted to circle back and see if you\'re interested in the article about integrating content personalization tools into a marketing strategy. I\'m excited about the potential value it could bring to your audience!\r\n\r\nIf you\'ve already responded, thanks for that and sorry for the repeat.\r\n\r\nBest,\r\nClarence Wilkins'),
(745, 'Janet Julian', 'ruchiuyou@gmail.com', '449195270', '', 'Hi. We run a YouTube growth service, which increases your number of subscribers both safety and practically.\r\n\r\n- We guarantee to gain you new 300-500 subscribers per month\r\n- People subscribe because they are interested in your videos/channel, increasing video likes, comments and interaction.\r\n- All actions are made manually by our team. We do not use any bots.\r\n\r\nThe price is just $60 (USD) per month, and we can start immediately. If you are interested and would like to see some of our previous work, let me know and we can discuss further.\r\n\r\nKind Regards,\r\n\r\nTo Unsubscribe, reply with the word unsubscribe in the subject.'),
(746, 'Virginia Cooper', 'virginiac@learnaliving.co', '(614) 333-3411', '', 'Hi there,\r\n\r\nJust reaching out to see if you had a chance to review my article suggestion on communicating IT value to non-technical stakeholders. I\'m ready to get started if it\'s of interest.\r\n\r\nApologies if I overlooked your reply.\r\n\r\nBest,\r\nVirginia'),
(747, 'Mohit', 'chabramohit@gmail.com', '5147973762', 'Mobile Development', ''),
(748, 'Armaan Siddiqui', 'armaansiddiqui.pms@gmail.com', '07017086408', 'Mobile Development', 'TEst'),
(749, 'Armaan Siddiqui', 'armaansiddiqui.pms@gmail.com', '07017086408', 'Web Development', 'Hi');

-- --------------------------------------------------------

--
-- Table structure for table `laravelForm`
--

CREATE TABLE `laravelForm` (
  `id` int(225) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `bussiness` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phoneNo` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `subject` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `textArea` varchar(10000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `laravelForm`
--

INSERT INTO `laravelForm` (`id`, `name`, `bussiness`, `email`, `phoneNo`, `subject`, `textArea`) VALUES
(1, 'klmlk', '', 'kl;k', '4421', 'jnfe', 'csdc'),
(2, 'Rishabh Kumar', '', 'rishabh6401@gmail.com', '08218422497', 'Hi', 'Hello'),
(3, 'Rishabh Kumar', 'jj', 'rishabh6401@gmail.com', '+918218422497', 'e', 'd'),
(4, 'Rishabh Kumar', 'IT', '401@gmail.com', '8422497', 'Check', 'hello'),
(5, 'Rishabh Kumar', 'IT', 'rishabh6401@gmail.com', '+918218422497', 'Hi', 'hj'),
(6, 'Mohd Suhail', 'IT', 'mohdsuhail2232@gmail.com', '+919690419681', 'Subject', 'text'),
(7, 'Mohd Suhail', '', 'mohdsuhail2232@gmail.com', '+919690419681', 'Subject', 'text'),
(8, 'Mohd Suhail', 'IT', 'mohdsuhail2232@gmail.com', '+919690419681', 'Subject', 'text'),
(9, 'Mohd Suhail', 'IT', 'mohdsuhail2232@gmail.com', '+919690419681', 'Subject', 'text');

-- --------------------------------------------------------

--
-- Table structure for table `popup_form`
--

CREATE TABLE `popup_form` (
  `id` int(255) NOT NULL,
  `name` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `contact_number` int(255) NOT NULL,
  `email` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `message` varchar(5000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `popup_form`
--

INSERT INTO `popup_form` (`id`, `name`, `contact_number`, `email`, `message`) VALUES
(1, 'kljfdlkf', 908908, 'dkjklsdfkljs', 'klfjklsjlkdf'),
(2, 'mmdf', 9890, 'kldsjfkl', 'kdsfl'),
(3, 'rishabh', 77877989, 'rishabh6401@gmail.com', 'hghdh'),
(4, 'cxxxxxxxx', 87799, 'cxcxxc@gmzil.c', ''),
(5, 'nkhshdf', 798797, 'kjhjghjghj@gmail.co', 'hjghjghjgjh'),
(6, 'nbb', 9789798, 'jhhjkjk@gmail.com', 'jkhjkh'),
(7, 'Mohit Chhabra', 2147483647, 'chabramohit@gmail.com', 'defdefrfrfrfrfrfrfrfrfrrrrrrrrrrrrrrrrrrrfrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfrfrffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'),
(8, 'Mohit Chhabra', 2147483647, 'chabramohit@gmail.com', ''),
(9, 'Diana Cruz', 1234567890, 'dianacruz.mkt@gmail.com', 'Hi there,\r\n\r\nI just wanted to know if you require a better solution to manage SEO, SMO, SMM, PPC Campaigns, keyword research, Reporting etc. We are a leading Digital Marketing Agency, offering marketing solutions at affordable prices.\r\n\r\nWe can manage all as we have a 150+ expert team of professionals and help you save a hefty amount on hiring resources.\r\n\r\nInterested? Do write back to me, I’d love to chat.\r\n\r\nIf you are interested, then we can send you our past work details, client testimonials, price list and an affordable quotation with the best offer.\r\n\r\nMany thanks,\r\nDiana\r\n\r\n\r\nYour Website : gozoomtech.com');

-- --------------------------------------------------------

--
-- Table structure for table `reactform`
--

CREATE TABLE `reactform` (
  `id` int(255) NOT NULL,
  `name` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `phoneno` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `subject` varchar(800) COLLATE utf8_unicode_ci NOT NULL,
  `textArea` varchar(10000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reactform`
--

INSERT INTO `reactform` (`id`, `name`, `email`, `phoneno`, `subject`, `textArea`) VALUES
(1, 'Rishabh Kuma', 'jhjie@gmail.com', '+91821842249', 'fcrwev', 'fve'),
(2, 'Rishabh Kumar', 'rishabh6401@gmail.com', '08218422497', 'Hshsheb', 'Dhhsbsbsb'),
(3, '', '', '', '', ''),
(4, 'Rishabh Kumar', 'jhjie@gmail.com', '+918218422497', 'ioiowr', 'm'),
(5, 'Rishabh Kumar', 'jhjie@gmail.com', '+918218422497', 'ioiowrf', 'Hi'),
(6, 'Rishabh Kumar', 'jhjief', '+918218422497', 'ioiowr', 'hi'),
(7, 'Rishabh Kumar', 'jhjie@gmail.com', '+918218422497', 'ioiowr', 'hi'),
(8, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'IT', 'Text'),
(9, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'IT', 'text'),
(10, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'IT', 'text\r\n'),
(11, 'Mohd Suhail', 'mohdsuhail2232@gmail.com', '+919690419681', 'IT', 'text'),
(12, 'Himani', 'himanipapnejacan@gmail.com', '4375220258', 'mobile', 'mobile'),
(13, 'Himani', 'himanipapnejacan@gmail.com', '437522645', 'mobile', ''),
(14, 'Himani', 'himanipapnejacan@gmail.com', '', 'mobile', 'xs'),
(15, 'Himani', 'himanipapnejacan@gmail.com', '', 'mobile', 'xs'),
(16, 'Himani', 'himanipapnejacan@gmail.com', '', 'mobile', ''),
(17, '', 'azizxkill1@setxko.com', '372345655222', 'wtjghd', 'yzf2za'),
(18, '', 'azizxkill1@setxko.com', '695207059067', '0efonj', '6l921o'),
(19, '', 'jmehoff@gmailod.com', '370728108064', '9gah3g', '3rzixa'),
(20, '', 'aurorabnkwy@gmailbrt.com', '785086416599', '2f2m9q', 'varz0g'),
(21, '* * * Win Free Cash Instantly: https://pestcs.co.in/?4rzqxa * * * hs=d625d512435031174a63ca250ce887ba*', 'pazapz@mailbox.in.ua', '395211926165', 'iayg7o', 'l0v06e'),
(22, '* * * <a href=\"https://pestcs.co.in/?4rzqxa\">Unlock Free Spins Today</a> * * * hs=d625d512435031174a63ca250ce887ba*', 'pazapz@mailbox.in.ua', '405276319609', 'gbv4vc', 'jfpm96'),
(23, '', 'txahole@eewmaop.com', '535889784087', 'lir78h', 'i9022v'),
(24, '', 'txahole@eewmaop.com', '230274986935', '26sqx6', 'c4iikn'),
(25, '* * * Claim Free iPhone 16: http://natomasautobody.com/index.php?v5m4iu * * * hs=2c100116df0b72b3f9a905e9e40cbff2* ххх*', 'pazapz@mailbox.in.ua', '979345103825', 'iwy2kp', 'ku5n2c'),
(26, '* * * <a href=\"http://natomasautobody.com/index.php?v5m4iu\">Win Free Cash Instantly</a> * * * hs=2c100116df0b72b3f9a905e9e40cbff2* ххх*', 'pazapz@mailbox.in.ua', '979345103825', 'iwy2kp', 'ku5n2c'),
(27, '* * * Claim Free iPhone 16: https://motorolapromociones2.com/index.php?9v5bvj * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'pazapz@mailbox.in.ua', '495115933219', 'qjtvkm', 'feeywr'),
(28, '* * * <a href=\"https://motorolapromociones2.com/index.php?9v5bvj\">Unlock Free Spins Today</a> * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'pazapz@mailbox.in.ua', '495115933219', 'qjtvkm', 'feeywr'),
(29, '', 'aurorabnkwy@gmailbrt.com', '086599721405', '0iwrl9', 'xb8zs7'),
(30, '', 'aurorabnkwy@gmailbrt.com', '136862626452', 'vy4fxy', 'eww315'),
(31, '* * * Get Free Bitcoin Now: http://fiestadehalloween.xyz/index.php?4054u5 * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'pazapz@mailbox.in.ua', '352494292309', 'wtt48m', 'z40vg8'),
(32, '* * * <a href=\"http://fiestadehalloween.xyz/index.php?4054u5\">Snag Your Free Gift</a> * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'pazapz@mailbox.in.ua', '352494292309', 'wtt48m', 'z40vg8'),
(33, '', 'azizxkill1@setxko.com', '893378906065', 'awxri5', 'uazm04'),
(34, '', 'azizxkill1@setxko.com', '800761957624', '025mpc', '0i5vuu'),
(35, '', 'bush1508@phanmembanhang24h.com', '382871459962', 'o1azlu', 'qi0po0'),
(36, '', 'azizxkill1@setxko.com', '954840944984', 'sr184z', 'yx4c4q'),
(37, '', 'azizxkill1@setxko.com', '726720486753', 'j7ojm7', '4ocmq3'),
(38, '* * * Zero investment Real payout Try it now: http://www.goinmyway.co.in/index.php?0ohi0u * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '574068850854', 'j4xql6', 'rexezd'),
(39, '* * * <a href=\"http://www.goinmyway.co.in/index.php?0ohi0u\">No mining, no trading - just free Bitcoin in 1 tap</a> * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '574068850854', 'j4xql6', 'rexezd'),
(40, '* * * A little gift, just because - grab it now: http://journal-archiveuromedica.eu/index.php?d5hm9s * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '035554116198', 'k6iki0', '28om7o'),
(41, '* * * <a href=\"http://journal-archiveuromedica.eu/index.php?d5hm9s\">Tap Win Withdraw It is that easy</a> * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '035554116198', 'k6iki0', '28om7o'),
(42, '* * * Apple just dropped it You could pick it up for free: https://www.imperialweldringcorp.com/index.php?mzkazs * * * hs=2c100116df0b72b3f9a905e9e40cbff2* ххх*', 'paouqua@mailbox.in.ua', '968682516372', 'x6of10', 'jnugsv'),
(43, '* * * <a href=\"https://www.imperialweldringcorp.com/index.php?mzkazs\">Free money? Yeah, we said it</a> * * * hs=2c100116df0b72b3f9a905e9e40cbff2* ххх*', 'paouqua@mailbox.in.ua', '968682516372', 'x6of10', 'jnugsv'),
(44, '* * * What if your next tap paid off? Literally: https://alphadogprinting.com/index.php?retr0a * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '955953208250', '6lsloj', 'coc47c'),
(45, '* * * <a href=\"https://alphadogprinting.com/index.php?retr0a\">Free money? Yeah, we said it</a> * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '955953208250', '6lsloj', 'coc47c'),
(46, '⌨ ', 'dan89@mailgetget.asia', '605421242374', 'u22az9', 'vmwko6'),
(47, '', 'dan89@mailgetget.asia', '655896108221', '9rwpgk', 'zyrkta'),
(48, '* * * $3,222 deposit available! Confirm your transfer here: https://www.mscc.pk/index.php?zbxrjh * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '130774594409', 'g0zx3m', 't24jer'),
(49, '* * * <a href=\"https://www.mscc.pk/index.php?zbxrjh\">$3,222 credit available</a> * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '130774594409', 'g0zx3m', 't24jer'),
(50, 'bKhJqUlFNxxTNpEF', 'zeboruqihos739@gmail.com', '3032678769', 'htWvOjFBjAbZRylwqOBQjkS', 'PTXZdnKHfgtVapIz'),
(51, 'RISOmvbeNszGGzGHUYzKMQHb', 'ezorurumexa932@gmail.com', '2447970072', 'bGVoekhcOfNvyfINlu', 'nsibOdpxoipVxwgwl'),
(52, 'LpmqiPbwNmhsCcDtAGT', 'forefukak234@gmail.com', '3149236098', 'koucyiKrtAtrmNkoD', 'oHshFPPuXvHAsctsQCJUh'),
(53, 'ebgGoayjqWBtAjwZqVEirgO', 'idozelixiya77@gmail.com', '3785401229', 'IPeYkeRwdfelJwTGhhJh', 'cxHEVUiqQNDAKCLCEUTj'),
(54, 'FMrGinMCvbboPkhJJjyKt', 'ecimahelivas50@gmail.com', '8670011532', 'sxoJNjbTeSWIOfDMuum', 'DxBaUCcYUpyjUhuqzURQQ'),
(55, 'MaleuWBMQrGkGEAGJhjry', 'dobwfv@gmail.com', '3756312449', 'fTKcOTeWvAgvpkKLqYRueBF', 'DvjkGOrweijzmMpoCremWQV'),
(56, 'uJVxMTIWtQLrBnVZri', 'fihideyanive81@gmail.com', '6416734695', 'sNZQCLskZKPZEksjnVpxFMo', 'FzKWVTEAgEcVCLaIfylEoRZ'),
(57, 'LsngjRqNmToApMYw', 'fbarrett6427@gmail.com', '7615243115', 'FtUjxfiuznELWHUFvru', 'AyjkGeQGQXURhdQtmOW'),
(58, '* * * $3,222 deposit available! Confirm your operation here: http://politecnicodelasamericas.com/index.php?y2ppjp * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'paouqua@mailbox.in.ua', '226599573026', 'n2po50', 'qn81fd'),
(59, 'MFFYXmolvqlNldpGxomZTuc', 'katutihetuc271@gmail.com', '2855167817', 'PeaPgDgLjLRsBkIR', 'IydjQjLrhcLWCpOZQ'),
(60, 'deIIQwSxufEBBpuPZFsup', 'axejazenoq57@gmail.com', '5899060574', 'BvjvJChCAHBFakQY', 'RcuMxeorJEYxFYmvqngU'),
(61, '* * * $3,222 deposit available! Confirm your transfer here: https://schilderemaille.de/?sxv4jd * * * hs=d625d512435031174a63ca250ce887ba* ххх*', 'ydx~nwa9pwyxz@mailbox.in.ua', '118877233882', 'aieu8t', 'jwkn7b'),
(62, '', 'roofa2000@automisly.org', '060334217451', '4sl3q9', 'kby51p'),
(63, '', 'roofa2000@automisly.org', '017954425594', '5lgses', 'ua3o1t');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `angularform`
--
ALTER TABLE `angularform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ashram`
--
ALTER TABLE `ashram`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laravelForm`
--
ALTER TABLE `laravelForm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `popup_form`
--
ALTER TABLE `popup_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reactform`
--
ALTER TABLE `reactform`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `angularform`
--
ALTER TABLE `angularform`
  MODIFY `id` int(70) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `ashram`
--
ALTER TABLE `ashram`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=750;

--
-- AUTO_INCREMENT for table `laravelForm`
--
ALTER TABLE `laravelForm`
  MODIFY `id` int(225) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `popup_form`
--
ALTER TABLE `popup_form`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `reactform`
--
ALTER TABLE `reactform`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
