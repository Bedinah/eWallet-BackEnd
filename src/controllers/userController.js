import UserService from "../services/userService"





class UserController{

    static async registerUser(req,res){
        const newUser = await UserService.registerUser(req)
        if (!newUser){
            return res.status(400).json({message:"failed to register",});
        }
        return res.status(201).json({message:"success",data: newUser});
    }

}

export default UserController