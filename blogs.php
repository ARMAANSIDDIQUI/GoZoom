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
    </style>
  </head>

  <body>
    <!-- header hai ye yaha se start-->

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
            <li class="menu-item menu-item-has-children hover-underline-animation">
              <a href="retail.html" data-toggle="sub-menu">RETAIL </a>

            <li class="menu-item hover-underline-animation">
              <a href="web-development-services.html">WEB</a>
            </li>

            <li class="menu-item hover-underline-animation">
              <a href="blogs.php">BLOGS</a>
            </li>
            <li class="menu-item hover-underline-animation">
              <a href="about.html">ABOUT US</a>
            </li>
            <li class="menu-item menu-item-has-children hover-underline-animation">
              <a href="contact.html" data-toggle="sub-menu">CONTACT US

              </a>

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
        Related <span class="text-decoration">Blogs</span> <br />
      </h2>
      <h2 class="hero">
        <!-- <a href="integration.html" class="text-decoration integration">INTEGRATION</a> | <a href="#" class=" text-decoration retail">RETAIL</a> -->
      </h2>
    </div>

    <!--------------------- home section ye hai =========== -->

    <section class="home-section"></section>

    <!-- <div class="container explore-content">

        <div class="container explore-container">
            <span class="baac"></span>
            <h2><span class="explore">Explore Solutions:</span>
            </h2>
        </div>

    </div>
    <div class="container">
        <div class="container m1">
            <div class="para1">
                <p>CyntraLabs is focused on providing organizations unified solutions to maximize the business value by utilizing the capabilities offered by emerging technologies. We take pride in providing state-of-the-art solutions in integration and
                    retail that guarantee success in business evolution. Businesses must transform to stay relevant, hence we provide our existing and new partners with foresight to:</p>
            </div>
            <div class="icon-heading">
                <ul class="heading-icon">
                    <li class="i-head">
                        <i></i> heading1</li>
                    <li class="i-head">
                        <i></i> heading1</li>
                    <li class="i-head">
                        <i></i> heading1</li>
                    </li>
                </ul>

            </div>
        </div>
    </div> -->

    <?php
        // Include database connection file
        include_once 'db_connection.php';

        // Fetch specific columns from the blogs table
        $sql = "SELECT id, title, image_filename, introduction FROM blogs ORDER BY id DESC";
        $stmt = $pdo->query($sql); $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
    ?>

<section id="blogs">
    <div class="container">
        <div class="row">
            <?php foreach ($blogs as $blog): ?>
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img style="max-width:400px;" class="card-img-top" src="uploads/<?php echo $blog['image_filename']; ?>" alt="Blog Image" >
                        <div class="card-body">
                            <h5 class="card-title" style="font-family: Montserrat;"><?php echo $blog['title']; ?></h5>
                            <p class="card-text" style="font-family: Montserrat;"><?php echo substr($blog['introduction'], 0, 100); ?>...</p>
                            <a href="blog.php?id=<?php echo $blog['id']; ?>" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

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

    <script src="js/script.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
