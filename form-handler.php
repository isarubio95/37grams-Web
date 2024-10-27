<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "thirtysevengrams@gmail.com";  // Reemplaza con tu correo real
    $subject = "Nuevo mensaje de 37Grams";
    $body = "Nombre: $name\nCorreo: $email\nMensaje: $message";
    $headers = "From: $email";

    // Envía el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje. Inténtalo de nuevo más tarde.";
    }
}
?>
