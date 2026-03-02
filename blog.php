<?php
include_once 'db_connection.php';

// Check if the blog ID is set in the URL parameters
if(isset($_GET['id']) && !empty($_GET['id'])) {
    // Retrieve the blog ID from the URL parameters
    $blog_id = $_GET['id'];

    // Query the database to fetch the details of the blog with the given ID
    $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = :id");
    $stmt->execute(['id' => $blog_id]);
    $blog = $stmt->fetch(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="utf-8" />
    <meta
      name="description"
      content="Top digital marketing and web development Company in Toronto. Expert mobile app developers. Specializing in cross-platform mobile app development."
    />
    <meta
      name="keywords"
      content="software development company in canada, web designers near me, website development company, best marketing agencies toronto,build website for small business  "
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      http-equiv="Cache-Control"
      content="no-cache, no-store, must-revalidate"
    />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <title>Software Development Company - Gozoom</title>
    <link
      rel="icon"
      sizes="32x32"
      href="./images/favicon.png"
      type="image/png"
    />
    <link
      rel="icon"
      sizes="48x48"
      href="./images/favicon.png"
      type="image/png"
    />
    <link
      rel="icon"
      sizes="64x64"
      href="./images/favicon.png"
      type="image/png"
    />
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script>
      function validateForm() {
        var recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
          alert("Please complete the reCAPTCHA.");
          return false;
        }
        return true;
      }
    </script>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Swiper CSS -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/swiper/swiper-bundle.min.css"
    />

    <!-- Swiper JS -->
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

    <link
      rel="stylesheet"
      href="./OwlCarousel2-develop/dist/assets/owl.carousel.css"
    />

    <link
      rel="stylesheet"
      href="./OwlCarousel2-develop/dist/assets/owl.carousel.min.css"
    />
    <link rel="stylesheet" href="css/swiper-bundle.min.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="./css/index.css" />
    <!-- <link rel="stylesheet" href="./css/header.css" /> -->
    <link rel="stylesheet" href="./css/newstyle.css" />
    <script
      src="https://kit.fontawesome.com/9c5eb2a5cc.js"
      crossorigin="anonymous"
    ></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
    />
    <link rel="stylesheet" href="./css/demo.css" />
    <link rel="stylesheet" href="./css/intlTelInput.css" />
    <link rel="stylesheet" href="./css/intlTelInput.min.css" />
    <link rel="stylesheet" href="./css/footer.css" />
    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-1HBBE7QYMR"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-1HBBE7QYMR");
    </script>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var bannerSwiper = new Swiper("#banner-swiper-container", {
          slidesPerView: 1,
          effect: "fade",
          spaceBetween: 0,
          loop: true,
          autoplay: {
            delay: 3000, // Adjust the delay as needed
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          on: {
            slideChange: function () {
              // Reset opacity for all banner slides
              document
                .querySelectorAll("#banner-swiper-container .swiper-slide")
                .forEach(function (slide) {
                  slide.style.opacity = 0;
                });

              // Apply fade-in effect to the active banner slide
              var activeSlide = document.querySelector(
                "#banner-swiper-container .swiper-slide-active"
              );
              activeSlide.style.opacity = 1;
            },
          },
        });
      });
    </script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Google Fonts - Montserrat -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap">

    <style>
      .home-section {
        width: 100%;
        display: block;
        min-height: 100vh;
        background-image: url("./images/20.png");
        background-position: center top;
        background-size: cover;
      }
      .heading {
        background: transparent;
        margin-top: 17rem;
        position: absolute;
        z-index: 99;
      }

      .hero {
        text-align: center;
        color: #fff;
        font-size: 2.5rem;
      }

      .hero > a {
        text-decoration: none;
        color: #fff;
      }

      .hero:hover > a {
        text-decoration: none;
      }

      .card {
         height: 100%;
      }

      .card-img-top {
        object-fit: cover;
        height: 400px; /* Adjust the height as needed */
      }

      #blogs{
        margin-top:3rem;
        margin-bottom:3rem;
      }
      .menu-item a:hover {
       text-decoration: none;
     }
     .scrolled {
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.43);
    }
    .scrolled1 .menu>.menu-item>a {
    display: block;
    padding: 12px 0;
    font-size: 16px;
    color: black;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    transition: all 0.3s ease;
   }
   #blogcontainer{
    margin-top:2rem;
    margin-bottom:2rem;
   }
   .home-section {
    width: 100%;
    display: block;
    min-height: 50vh;
    background-image: url("./images/20.png");
    background-position: center top;
    background-size: cover;
   }
   .bimage{
    display:grid;
    align-items:center;
    text-align:center;
    justify-content:center;
    margin-top:2rem;
    margin-bottom:2rem;
    overflow: hidden;
   }

   .bimage img{
    max-height:70vh;
   }
    </style>
  </head>
<body>
 
    <header class="header">
      <div class="container1">
        <div class="header-main">
          <div class="open-nav-menu">
            <span></span>
          </div>
          <div class="menu-overlay"></div>

          <!-- ----------------ye yaha se navigation menu start ho rahi hai -------------------------- -->
          <nav class="nav-menu">
            <div class="close-nav-menu">
              <img src="images/close.svg" alt="close button" />
            </div>
            <ul class="menu">
              <li class="menu-item hover-underline-animation">
                <a href="index.html">HOME</a>
              </li>
              <li class="menu-item hover-underline-animation">
                <a href="integration.html">INTEGRATION</a>
              </li>
              <li
                class="menu-item menu-item-has-children hover-underline-animation"
              >
                <a href="retail.html" data-toggle="sub-menu">RETAIL </a>
              </li>

              <li class="menu-item hover-underline-animation">
                <a href="web-development-services.html">WEB</a>
              </li>

              <li class="menu-item hover-underline-animation">
                <a href="blogs.html">BLOGS</a>
              </li>
              <li class="menu-item hover-underline-animation">
                <a href="about.html">ABOUT US</a>
              </li>
              <li
                class="menu-item menu-item-has-children hover-underline-animation"
              >
                <a href="contact.html" data-toggle="sub-menu">CONTACT US </a>
              </li>
            </ul>
          </nav>
          <div class="logo">
            <a href="index.html"><img src="images/logo2.webp" alt="" /></a>
          </div>
        </div>
      </div>
    </header>

    <div class="container-fluid heading">
      <h2 class="hero">
        <?php echo $blog['title']; ?>
      </h2>
      <h2 class="hero">
        <!-- <a href="integration.html" class="text-decoration integration">INTEGRATION</a> | <a href="#" class=" text-decoration retail">RETAIL</a> -->
      </h2>
    </div>

    <section class="home-section"></section>

<?php
// Include database connection file

    // Check if the blog exists
    if($blog) {
        ?>
        <section id="blogcontainer">
            <div class="container">
                <!-- Blog Title -->
                <h1 style="font-family: Montserrat;"><?php echo $blog['title']; ?></h1>
                <!-- Blog Date -->
                <p style="font-family: Montserrat; text-align: justify;">Published on: <?php echo date('F j, Y', strtotime($blog['date'])); ?></p>
                <!-- Blog Image -->
                <div class="bimage">
                    <img  src="uploads/<?php echo $blog['image_filename']; ?>" alt="Blog Image">

                </div>
                <!-- Blog Introduction -->
                <h2 style="font-family: Montserrat; text-align: justify;">Intorduction</h2>
                <p style="font-family: Montserrat; text-align: justify;"><?php echo $blog['introduction']; ?></p>
                <!-- Blog Headings and Paragraphs -->
                <?php
                for($i = 1; $i <= 5; $i++) {
                    $heading_key = 'heading' . $i;
                    $content_key = 'paragraph' . $i;
                    ?>
                    <h3 style="font-family: Montserrat; text-align: justify;"><?php echo $blog[$heading_key]; ?></h3>
                    <p style="font-family: Montserrat; text-align: justify;"><?php echo $blog[$content_key]; ?></p>
                    <?php
                }
                ?>
                <!-- Blog Conclusion -->
                <h2 style="font-family: Montserrat; text-align: justify;">Conclusion</h2>
                <p style="font-family: Montserrat; text-align: justify;"><?php echo $blog['conclusion']; ?></p>
            </div>
        </section>
        <?php
    } else {
        // Blog not found
        echo "Blog not found.";
    }
} else {
    // Blog ID not provided in URL parameters
    echo "Invalid request.";
}
?>
    <section id="contact">
      <footer class="footer">
        <div class="container fot">
          <!-- <div class="container logo foologo">
                    <a href="index.html"><img src="images/logo.png" alt=""></a>
                </div> -->
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg">
              <div class="focon">
                <h2 class="fohead">GLOBAL LOCATIONS</h2>
              </div>
              <div class="foadd">
                <ul>
                  <li>
                    <img class="flag" src="images/usflag.webp" alt="" />
                    <h3>
                      400 River Side CT <br />
                      Santa Clara <br />
                      CA 95054-3535 <br />
                      United States
                    </h3>
                  </li>
                  <li>
                    <img class="flag" src="images/indiaflag.png" alt="" />
                    <h3>
                      A1B/19 A, Paschim Vihar <br />
                      New Delhi 110063 <br />
                      India <br />info@gozoomtech.com
                    </h3>
                  </li>
                  <li>
                  <img class="flag" src="images/canadaflag.png" alt="" />
                  <h3>
                    5765 Chem. de la Côte St Luc <br>
                      Montréal, QC H3X 2E9!! <br>
                      Canada 
                  </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg">
              <div class="focon">
                <h2 class="fohead">QUICK LINKS</h2>
              </div>
              <div class="folinks">
                <ul>
                  <li>
                    <a href="index.html">HOME</a>
                  </li>
                  <li>
                    <a href="integration.html">INTEGRATION</a>
                  </li>
                  <li>
                    <a href="retail.html">RETAILS</a>
                  </li>
                  <li>
                    <a href="web.html">WEB DEVELOPMENT</a>
                  </li>
                  <li>
                    <a href="/webpages/mobile.html">MOBILE DEVELOPMENT</a>
                  </li>
                  <li>
                    <a href="#">GET BROUCHER</a>
                  </li>
                  <li>
                    <a href="about.html">ABOUT-US</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg">
              <div class="focon">
                <h2 class="fohead">REACH US TODAY</h2>
              </div>
              <div class="foform">
                <div id="inquiryForm-section" class="current-opening-form">
                  <div class="quick-box">
                    <form name="inquiryForm" id="inquiryForm" class="quick-form" action="process_form.php" method="POST"
                      onsubmit="return validateForm();">
                      <label class="input-label">Your Name<span class="req">*</span> </label><br />
                      <input type="text" id="name" name="name" class="formfi" placeholder="Name" maxlength="50"
                        autocomplete="off" required /><br />

                      <label class="input-label">Email<span class="req">*</span> </label><br />
                      <input type="email" id="email" name="email" autocomplete="on" class="formfi" placeholder="E-mail"
                        required />
                      <p class="error-message" id="errorMessage">
                        Please enter a valid email address.
                      </p>

                      <label class="input-label">Phone<span class="req">*</span></label><br />
                      <input type="tel" autocomplete="on" id="contact-number" name="contact-number" class="formfi"
                        placeholder="Contact No." required /><br />

                      <label class="input-label" style="margin-top: 15px">Interested Service
                      </label>

                      <div class="wrapper">
                        <div class="select-btn formfi">
                          <span style="color: #bbb">Interested In</span>
                          <i class="uil uil-angle-down"></i>
                        </div>
                        <div class="content">
                          <div class="search">
                            <i class="uil uil-search"></i>
                            <input spellcheck="false" type="text" placeholder="Search" />
                          </div>
                          <hr />
                          <ul class="options"></ul>
                        </div>
                      </div>
                      <input type="hidden" name="solution" id="selecti" required />

                      <label class="input-label">Message</label><br />
                      <textarea class="textarea" id="message" placeholder="Message"
                        name="message"></textarea><br /><br />
                      <input type="text" name="hidden1-input1" style="display: none" />
                      <div class="g-recaptcha" data-sitekey="6Lf9TsQnAAAAANxF0lHRxZTC_YMZIMmV1qX1v1qs"></div>

                      <div class="center">
                        <input class="formbtn" id="footerSub" type="submit" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="container copyright">
        <h2 class="copy">
          © COPYRIGHT <a href="admin-login.php" style="text-decoration: none;" class="gozoom"><span class="gozoom">GoZoom</span></a>. All Rights Reserved
        </h2>
      </div>
  </section>

<script>
      window.addEventListener('scroll', function() {
  var header = document.querySelector('.header-main');
  var header2 = document.querySelector('.header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 120) {
    header.classList.add('scrolled');
    header2.classList.add('scrolled1');
    // header.classList.remove('header-main');
  } else {
    header.classList.remove('scrolled');
    header2.classList.remove('scrolled1');
    // header.classList.add('header-main');
  }
});
</script>
</body>
</html>
