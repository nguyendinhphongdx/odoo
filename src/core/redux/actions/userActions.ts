import { ConstantUser } from "../constant";

class UserActions{

    Login = (user: any)=> {
        return {
            type: ConstantUser.User_Login,
            payload: user
        }
    }
}
export default new UserActions();