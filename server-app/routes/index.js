import { Router } from "express";
import testRoute from "./testRoute.js"
const router = Router()

router.use('/states', testRoute)


export default router