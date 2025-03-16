import { transporter, mailOptionsBase } from "../../transporter/transporter.js";

// Función para enviar correo de notificación
export function forgotPassword(nombre, email) {
  // Construir el contenido HTML del correo
  const reset_link = "htpps://santas-tortas.vercel.app";
  const mensajeHtml = `
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Bienvenido a Santas Tortas! 🎂</title>
    <style>
        * {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }

        body {
            background-color: #F8C8DC;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #FFF5E1;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .header {
            background-color: #5F3B3C;
            padding: 15px;
            border-radius: 10px 10px 0 0;
            color: white;
        }

        .logo {
            width: 80px;
            margin-bottom: 10px;
            border-radius: 50%;
        }

        h1 {
            margin: 0;
            font-size: 20px;
        }

        p {
            font-size: 14px;
        }

        .content {
            padding: 20px;
            font-size: 15px;
            color: #5F3B3C;
        }

        .cta-button {
            display: inline-block;
            background: #E6B655;
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
        }

        .footer {
            font-size: 12px;
            margin-top: 20px;
            color: #5F3B3C;
        }

        .information {
            background-color: #5F3B3C;
            border-radius: 0px 0px 10px 10px;
            padding: 20px;
            text-align: center;
        }

        .information p {
            color: white;
            margin: 0;
            font-size: 14px;
            margin-bottom: 15px;
        }

        .contact-container {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        .contact-container a {
            display: flex;
            align-items: center;
            gap: 10px;
            color: white;
            text-decoration: none;
            font-size: 14px;
            font-weight: bold;
            padding: 8px 15px;
            border-radius: 5px;
            transition: background 0.3s;
        }

        .contact-container a:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .contact-container img {
            width: 20px;
            height: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="cid:logo" alt="Santas Tortas Logo" class="logo">
            <h1>Recupera tu cuenta 🔑</h1>
        </div>

        <div class="content">
            <h2>Hola ${nombre},</h2>
            <p>Hemos recibido una solicitud para restablecer tu contraseña en <b>Santas Tortas</b>. Si no realizaste
                esta solicitud, puedes ignorar este mensaje.</p>
            <p>Para crear una nueva contraseña, haz clic en el siguiente botón:</p>
            <a href="${reset_link}" class="cta-button">Restablecer contraseña 🔒</a>
            <p>Este correo para restablcer su información sera valido por 24 horas</p>
        </div>

        <div class="information">
            <p>Si tienes alguna duda, puedes comunicarte con nosotros:</p>
            <div class="contact-container">
                <a href="mailto:cdomreyes@gmail.com">
                    <img src="cid:em" alt="Email">
                    santas-tortas@santas-tortas.com
                </a>
                <a href="https://wa.me/573208132304">
                    <img src="cid:wapp" alt="WhatsApp">
                    +57 320 123 4567
                </a>
            </div>
        </div>
    </div>
</body>

</html>


  `;

  // Configuración del correo
  const mailOptions = {
    ...mailOptionsBase,
    to: email,
    subject: notificaciones[0].subject,
    text: notificaciones[0].notificacion,
    html: mensajeHtml,
  };

  // Verificar conexión y enviar correo
  transporter
    .verify()
    .then(() => {
      return transporter.sendMail(mailOptions);
    })
    .then((info) => {
      console.log("Correo enviado con exito");
    })
    .catch((error) => {
      console.error("Error al enviar correo:", error);
    });
}
