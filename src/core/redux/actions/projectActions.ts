import { ConstantProject } from "../constant";

class ProjectActions{

    Login = (projects: Array<any>)=> {
        return {
            type: ConstantProject.GET_ALL_PROJECT,
            payload: projects
        }
    }
}
export default new ProjectActions();