import userModel from "../models/user";
import handlePasswrd from "../utils/handlepasswrd";


class UserService{


static async registerUser(req) {
    req.body.password = handlePasswrd.encryptPassword(req.body.password);
    const newUser = userModel.create(req.body);

    return newUser;
  }
}

export default UserService;