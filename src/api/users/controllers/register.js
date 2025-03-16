import { createUserStrapi } from "../helper/register.js";

export async function registerExternal(req, res) {
    const { username, email, password } = req.body;
  
    try {
      const user = await createUserStrapi(username, email, password);
      res.status(user.status).json(user);
    } catch (error) {
      console.error("Error en registerExternal:", error);
      res.status(500).json({ status: 500, message: "Error interno del servidor", error: error.message });
    }
  }
  


