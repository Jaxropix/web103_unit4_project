import express from 'express';
import { getCustomItemById, getAllCustomItems, createCustomItem, updateCustomItem, deleteCustomItem } from '../controllers/customItemController.js';

const router = express.Router();

router.get("/all", getAllCustomItems);
router.get("/:id", getCustomItemById);
router.post("/create", createCustomItem);
router.put("/edit/:id", updateCustomItem);
router.delete("/delete/:id", deleteCustomItem);

export default router;
