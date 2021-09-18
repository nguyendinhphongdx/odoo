import { ConstantProject } from "../constant";

class ProjectActions{

    Get_All_Project = (projects: Array<any>)=> {
        return {
            type: ConstantProject.GET_ALL_PROJECT,
            payload: projects
        }
    }
}
export default new ProjectActions();