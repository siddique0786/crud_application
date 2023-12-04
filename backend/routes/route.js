import express from "express";
import {addUser,getUser,getsUser,editUser,deleteUser} from "../controller/User-controller.js"



const router = express.Router();

router.post("/add",addUser);
router.get("/all",getUser);
router.get("/:id",getsUser);
router.put("/:id",editUser);
router.delete("/:id",deleteUser)

export default router;