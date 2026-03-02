<?php
// Load configuration
require_once 'config.php';

require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// 1. Validate reCAPTCHA
$recaptcha_secret = RECAPTCHA_SECRET;
$recaptcha_response = $_POST['g-recaptcha-response'] ?? '';

if (empty($recaptcha_response)) {
    die("Please complete the reCAPTCHA.");
}

$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
$responseKeys = json_decode($response, true);

if (intval($responseKeys["success"]) !== 1) {
    die("reCAPTCHA verification failed.");
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Honeypot check
    if (!empty($_POST["hidden1-input1"])) {
        die("SPAM!!");
    }

    // 2. Input Sanitization (Fix XSS and malformed input)
    $name = htmlspecialchars(trim($_POST["name"] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $contactNumber = htmlspecialchars(trim($_POST["contact-number"] ?? ''), ENT_QUOTES, 'UTF-8');
    $solution = htmlspecialchars(trim($_POST["solution"] ?? ''), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST["message"] ?? ''), ENT_QUOTES, 'UTF-8');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // 3. Email Header Injection Prevention
    // Remove newlines from fields used in headers
    $name = str_replace(["\r", "\n", "%0a", "%0d"], '', $name);
    $email = str_replace(["\r", "\n", "%0a", "%0d"], '', $email);


    // 4. Secure Database Insert (Fix SQL Injection)
    try {
        $conn = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Fixed SQL Injection: Use named parameter for the ON DUPLICATE KEY UPDATE clause
        $stmt = $conn->prepare("INSERT INTO enquiry (name, email, contact_number, solution, message) 
                                VALUES (:name, :email, :contactNumber, :solution, :message) 
                                ON DUPLICATE KEY UPDATE name = :solution_update");
        
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':contactNumber', $contactNumber);
        $stmt->bindParam(':solution', $solution);
        $stmt->bindParam(':message', $message);
        $stmt->bindParam(':solution_update', $solution); // Safe parameter binding
        $stmt->execute();

        $conn = null;

    } catch (PDOException $e) {
        // Prevent exposing detailed database errors to the user in production
        error_log("Database Error: " . $e->getMessage());
        die("An error occurred while saving your request. Please try again later.");
    }

    // Send an email with the form data
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = SMTP_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = SMTP_USER;
        $mail->Password = SMTP_PASS;
        $mail->SMTPSecure = 'tls';
        $mail->Port = SMTP_PORT;

        // Recipients
        $mail->setFrom(SMTP_USER, 'Gozoom Website Form'); // It's safer to send FROM your own authenticated email
        $mail->addReplyTo($email, $name); // Set the user's email as the Reply-To address
        $mail->addAddress('info@gozoomtech.com'); 

        // Email content
        $mail->isHTML(false);
        $mail->Subject = 'New Form Submission from ' . $name;
        $mail->Body = "Name: $name\n"
            . "Email: $email\n"
            . "Contact Number: $contactNumber\n"
            . "Solution: $solution\n"
            . "Message: $message\n";

        $mail->send();

        // Email sent successfully
        header("Location: success.html");
        exit;

    } catch (Exception $e) {
        error_log("Email Error: " . $mail->ErrorInfo);
        die("An error occurred while sending your message. Please try again later.");
    }
}
?>