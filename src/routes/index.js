import { Router } from "express";
import UserController from "../controllers/userControllers";


const route = Router();


route.post("/user",UserController.registerUser);



export default route