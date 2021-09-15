import { ConstantUser } from "../constant";


const initialState = {
  user: null, // current user in app,
  token:null,
  device_token: null, // device token,
  loading:false
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
    case ConstantUser.LOADING:
      const loading = action.payload;
      return {
          ...state,
          loading
      }
     
    default: return { ...state };
}
};
  
export default userReducer;
