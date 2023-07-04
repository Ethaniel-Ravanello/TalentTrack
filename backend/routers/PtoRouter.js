import express from "express";
import { getPtos, createPTO } from "../controllers/PtoController.js";

const router = express.Router();

router.get("/ptos", getPtos);
router.post("/ptos", createPTO);

export default router;
