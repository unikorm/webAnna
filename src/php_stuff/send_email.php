<?php
use PHPMailer\PHPMailer\PHPMailer;

require '../../../vendor/autoload.php';

$mail = new PHPMailer();

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


    echo "Hello, World!";
?>



