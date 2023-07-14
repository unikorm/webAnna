<!-- this is from Github -->

<?php
require '../vendor/autoload.php';

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
};


// a toto su moje skusky co poskladam z internetu

require 'vendor/autoload.php';

$mail = new PHPMailer/PHPMailer/PHPMailer();

$mail->isSMTP();  // Set mailer to use SMTP
$mail->Host = 'smtp.example.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;  // Enable SMTP authentication
$mail->Username = 'your_email@example.com';  // SMTP username
$mail->Password = 'your_password';  // SMTP password
$mail->SMTPSecure = 'tls';  // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;  // TCP port to connect to

$mail->setFrom('your_email@example.com', 'Your Name');
$mail->addAddress('recipient@example.com', 'Recipient Name');
$mail->Subject = 'Subject of your email';
$mail->Body = 'Content of your email';

if ($mail->send()) {
    echo 'Email sent successfully!';
} else {
    echo 'Email could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
};


