import axios from "axios";
import { findUser } from "./findUser.js";
import { sendMailsRegistro } from "../../services/mails/templates/js/register.js";


export async function createUserStrapi(username, email, password) {
  try {
    const user = await findUser(email);

    if (user) {
      return {
        status: 400,
        message: "Ya existe un usuario registrado con esos datos",
      };
    }

    const HOST = process.env.HOST_EXTERNAL
    const response = await axios.post(`${HOST}/api/auth/local/register`, {
      username,
      email,
      password,
    });

    if (response.data) {
      sendMailsRegistro(username, email);
    }
    return {
      status: 201,
      message: "Usuario creado con éxito",
      data: response.data,
    };
  } catch (error) {
    console.error("Error en createUserStrapi:", error);

    return {
      status: error.response?.status || 500,
      message: "Error al registrar usuario",
      error: error.response?.data || error.message,
    };
  }
}
