import { findUser } from "../helper/findUser.js";

export async function senMailRegiter(req, res) {
  const { email } = req.body;
  // const t = await conecction.transaction();
  try {
    const data = await findUser(email);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
}
