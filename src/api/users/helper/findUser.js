import { User } from "../model/users.js";

export async function findUser(email) {
  if (!email) throw new Error("Faltan datos para buscar un usuario");
  const response = await User.findOne({
    where: { email: email },
  });
  return response;
}
