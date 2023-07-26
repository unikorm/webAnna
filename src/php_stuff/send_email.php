 <?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/Users/adamaanna/Documents/www/webAnna/vendor/autoload.php';

// Check if the form data has been sent using POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Create a new PHPMailer instance
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

    // Compose the email body using the form data
    $mail->Body = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;

    try {
        // Attempt to send the email
        if ($mail->send()) {
            $response = array("success" => true, "message" => "PHP work, yop");
        } else {
            $response = array('success' => false, 'message' => 'PHP do not work');
        }
    } catch (Exception $e) {
        $response = array('success' => false, 'message' => 'Something bad is happend' . $e->getMessage());
    };

    echo json_encode($response);
};

?>