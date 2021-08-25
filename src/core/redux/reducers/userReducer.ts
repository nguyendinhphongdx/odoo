import { ConstantUser } from "../constant";


const initialState = {
  user: null, // current user in app,
  token:null,
  device_token: null // device token
};

const userReducer = (state = initialState, action?: any) =>{
  switch(action.type){
    case ConstantUser.User_Login:
        const user = action.payload;
        return {
            ...state,
            user,
            token:user.token,
        }
   
    default: return { ...state };
}
};
  
export default userReducer;
