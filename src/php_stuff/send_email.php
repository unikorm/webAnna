<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->Host = 'smtp.example.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-email@example.com';
$mail->Password = 'your-password';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->setFrom('your-email@example.com', 'Your Name');
$mail->addAddress('recipient@example.com', 'Recipient Name');
$mail->Subject = 'Contact Form Submission';
$mail->Body = $_POST['message']; // Assuming your form has an input field named 'message' for the message content

try {
    $mail->send();
    echo 'Email sent successfully';
} catch (Exception $e) {
    echo 'Email could not be sent. Error: ' . $mail->ErrorInfo;
}
