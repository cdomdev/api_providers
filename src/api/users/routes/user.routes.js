import { Router } from "express";
import { senMailRegiter } from "../controllers/external-service-mail-registers.js";
import { registerExternal } from "../controllers/register.js";
const router = Router()

router.get('/test', (req, res) =>{
  res.send('prueba de rutas')
})


// router.post("/google-auth", authGoogle);
router.post("/find", senMailRegiter);

router.post('/external/auth/register', registerExternal)

export default router