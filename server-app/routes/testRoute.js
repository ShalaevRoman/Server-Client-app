import { Router } from "express";
import testGetState from "../controllers/StateController.js"

const router = Router()

router.route('/')
    .get(testGetState)

export default router