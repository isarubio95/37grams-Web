<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    echo "Inicio de prueba";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'Exception.php';
    require 'PHPMailer.php';
    require 'SMTP.php';

    $mail = new PHPMailer(true);

    try {
        // Captura de datos del formulario
        $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
        $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
        $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

        // Configuración SMTP de Hostinger
        $mail->isSMTP();
        $mail->SMTPDebug = 2;  // Modo de depuración
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'main@thirtysevengrams.com';
        $mail->Password = 'wybsid-7fubqo-pijmeC';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Definir el asunto y el cuerpo del mensaje
        $subject = "Asunto de prueba";
        $body = "Este es el contenido del mensaje de prueba.";

        // Configuración del mensaje
        $mail->setFrom('main@thirtysevengrams.com', '37Grams');
        $mail->addAddress('thirtysevengrams@gmail.com');
        $mail->addReplyTo($email);

        // Asunto y cuerpo del mensaje
        $subject = "Nuevo mensaje de contacto de $name";
        $body = "Has recibido un nuevo mensaje de contacto.\n\n";
        $body .= "Nombre: $name\n";
        $body .= "Correo: $email\n";
        $body .= "Mensaje:\n$message";


        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        echo 'Mensaje enviado correctamente.';
    } catch (Exception $e) {
        echo "Error al enviar el mensaje. Mailer Error: {$mail->ErrorInfo}";
    }
?>
