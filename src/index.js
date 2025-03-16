/**
  archivo que trabajo como barril para exponer la rutas de los modulos disponibles
  Cada ruta se expone con un nombre descriptivo a su modelo

  ej: para usuarios: user --> mas el archivo que continen todo los metodos para ese modulo
 */

  
import { Router } from "express";
export { conecction } from "../db/conecction.js";
import userRoutes from "./api/users/routes/user.routes.js";
export const router = Router();

router.use("/user", userRoutes);
