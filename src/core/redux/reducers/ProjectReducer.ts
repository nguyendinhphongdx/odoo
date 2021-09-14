import { ConstantProject } from "../constant";


const initialState = {
  projects:[]
};

const projectReducer = (state = initialState, action?: any) =>{
  switch(action.type){
    case ConstantProject.GET_ALL_PROJECT:
        const projects = action.payload;
        return {
            ...state,
            projects,
        }
   
    default: return { ...state };
}
};
  
export default projectReducer;
