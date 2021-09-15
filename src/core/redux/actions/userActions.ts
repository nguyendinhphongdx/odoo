import { ConstantUser } from "../constant";

class UserActions{

    Login = (user: any)=> {
        return {
            type: ConstantUser.User_Login,
            payload: user
        }
    }
    Loading = (status:boolean)=>{
        return {
            type: ConstantUser.LOADING,
            payload: status
        }
    }
}
export default new UserActions();