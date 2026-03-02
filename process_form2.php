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
    $name = htmlspecialchars(trim($_POST["full-name"] ?? ''), ENT_QUOTES, 'UTF-8');
    $contactNumber = htmlspecialchars(trim($_POST["phone"] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"] ?? ''), ENT_QUOTES, 'UTF-8');

    if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // 3. Email Header Injection Prevention
    $name = str_replace(["\r", "\n", "%0a", "%0d"], '', $name);
    $email = str_replace(["\r", "\n", "%0a", "%0d"], '', $email);


    // 4. Secure Database Insert (Fix SQL Injection)
    try {
        $conn = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Fixed SQL Injection: Prevent ON DUPLICATE error and use proper bindings
        $stmt = $conn->prepare("INSERT INTO popup_form (name, contact_number, email, message) 
                                VALUES (:name, :contactNumber, :email, :message)
                                ON DUPLICATE KEY UPDATE name = :name_update");
        
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':contactNumber', $contactNumber);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':message', $message);
        $stmt->bindParam(':name_update', $name); // Binding securely instead of $solution
        
        $stmt->execute();

        $conn = null;

    } catch (PDOException $e) {
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
        $mail->setFrom(SMTP_USER, 'Gozoom Website Form (Popup)'); 
        if (!empty($email)) {
             $mail->addReplyTo($email, $name);
        }
        $mail->addAddress('info@gozoomtech.com');

        // Email content
        $mail->isHTML(false);
        $mail->Subject = 'New Form Submission from ' . $name;
        $mail->Body = "Name: $name\n"
            . "Contact Number: $contactNumber\n"
            . "Email: $email\n"
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