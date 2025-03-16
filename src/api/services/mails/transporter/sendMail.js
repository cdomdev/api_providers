import nodemailer from "nodemailer";

const USER_MAIL = process.env.USER_FROM_MAILS;
const PASS_MAILS = process.env.PASS_FOR_MAILS;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: USER_MAIL,
    pass: PASS_MAILS,
  },
});

const sendMail = async (destinatario, asunto, contenido) => {
  try {
    const mailOptions = {
      from: USER_MAIL,
      to: destinatario,
      subject: asunto,
      html: contenido,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};

export default sendMail;
