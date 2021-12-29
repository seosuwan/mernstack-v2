import { Router } from "express";
import { BoardController } from "../../controllers";


const router = Router();

router.use('/board/create', BoardController.create);

export default router;