import { ToastAndroid } from "react-native";
import userActions from "../actions/userActions";
import ApiService from "../axios/api";

class UserService {
    LoginService(body:any,dispatch:any){
        return ApiService.sendRequestFormURL('/login','post',body)
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
    SetLoadingApp(status:boolean,dispatch:any){
        const action = userActions.Loading(status);
        dispatch(action);
    }
}
export default new UserService();