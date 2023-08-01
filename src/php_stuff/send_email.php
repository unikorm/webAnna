 <?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/../../vendor/autoload.php";
require "config.php";


// Check if the form data has been sent using POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate and sanitize the input fields to prevent XSS
    $name = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
    $email = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
    $message = htmlspecialchars($message, ENT_QUOTES, "UTF-8");

    // Empty fields validation
    if ( empty($name) || empty($email) || empty($message) ) {
        $response = array("success" => false, "message" => "Prosím, vyplň všetky polia!");
        echo json_encode($response);
        exit; // Stop further processing
    };

    // Email format validation
    if ( !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
        $response = array("success" => false, "message" => "Prosím, vlož tam skutočnú email adresu!");
        echo json_encode($response);
        exit; // Stop further processing
    };

    // Limiting the length of input
    $maxNameLength = 150;
    $maxEmailLength = 100;

    if (strlen($name) > $maxNameLength) {
        $response = array("success" => false, "message" => "Skráť prosím svoje meno, je príliš dlhé");
        echo json_encode($response);
        exit;
    };
    if (strlen($email) > $maxEmailLength) {
        $response = array("success" => false, "message" => "Použi kratší email, tento je až príliš dlhý");
        echo json_encode($response);
        exit;
    };

    // Email injection prevention
    if ( preg_match("/[\r\n]/", $name) || preg_match("/[\r\n]/", $email) ) {
        $response = array("success" => false, "message" => "Máš tam niečo podozrivé, daj to preč!");
        echo json_encode($response);
        exit;
    };

    // Create a new PHPMailer instance
    $mail = new PHPMailer();
    $mail->isSMTP();  // Set mailer to use SMTP
    $mail->Host = $smtpHost;  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;  // Enable SMTP authentication
    $mail->Username = $smtpUsername;  // SMTP username
    $mail->Password = $smtpPassword;  // SMTP password
    $mail->SMTPSecure = 'ssl';  // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;  // TCP port to connect to
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    $mail->setFrom($smtpUsername, $smtpJustName);
    $mail->addAddress($smtpMyEmail);
    $mail->addReplyTo($smtpMyWifeEmail);
    $mail->Subject = "Request from website";

    // Compose the email body using the form data
    $mail->Body = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;

    try {
        // Attempt to send the email
        if ($mail->send()) {
            $response = array("success" => true, "message" => "PHP work, yop");
        } else {
            $response = array("success" => false, "message" => "PHP do not work");
        }
    } catch (Exception $e) {
        $response = array("success" => false, "message" => "Something bad is happend" . $e->getMessage());
    };

    echo json_encode($response);
};

?>