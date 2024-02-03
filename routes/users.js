import express from "express";

const router = express.Router();
import { getUserController, addUserController, updateUserController, deleteUserController } from "../controller/user.js";

router.get('/users/:email', getUserController)
router.post('/users', addUserController)
router.put('/users/:id', updateUserController)
router.delete('/users/:id', deleteUserController)

router.get('/', (req, res)=> res.send('Home users'));

export default router;