import nodemailer from "nodemailer";
const USER_MAIL = process.env.USER_FROM_MAILS;
const PASS_MAILS = process.env.PASS_FOR_MAILS;
import path from "path";
import { fileURLToPath } from "url";

// Configuración del transporte de correos
export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: USER_MAIL,
    pass: PASS_MAILS,
  },
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración común para el envío de correos
export const mailOptionsBase = {
  from: 'Santas tortas" <youremail@gmail.com>',
  attachments: [
    {
      filename: "wapp.png",
      path: path.join(process.cwd(), "public/wapp.png"),
      cid: "wapp",
    },
    {
      filename: "em.png",
      path: path.join(process.cwd(), "public/em.png"),
      cid: "em",
    },
    {
      filename: "st-logo.webp",
      path: path.join(process.cwd(), "public/st-logo.webp"),
      cid: "logo",
    },
  ],
};
