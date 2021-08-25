import { ToastAndroid } from "react-native";
import userActions from "../actions/userActions";
import sendRequest from "../axios/api";

class UserService {
    LoginService(body:any,dispatch:any){
        return sendRequest('/login','post',body)
        .then(response =>{
            console.log('response',response);
            if(response.status == 200){
                const action = userActions.Login(response.data);
                dispatch(action);
                return response.data.token
            }else{
                throw new Error(response.data.message);
            }
        })
        .catch(err => ToastAndroid.show(err.message,ToastAndroid.SHORT))
    }
}
export default new UserService();