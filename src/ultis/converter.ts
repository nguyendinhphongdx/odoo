import { Color } from "../theme";

class Converter {
  convertListProject(projects: Array<any>) {
    return projects.map((item, index) => {
      // interface PropsItemProject {
      //     id: number;
      //     color?: string;
      //     title: string;
      //     priority?: number;
      //     task?: number;
      //     favorites?: boolean;
      //   }
    //   {
    //     "id": 5,
    //     "name": "CRM",
    //     "partner_id": false,
    //     "color": 0,
    //     "task_count": 0,
    //     "label_tasks": "Tasks",
    //     "alias_id": [
    //         14,
    //         "crm@npuni.vn"
    //     ],
    //     "alias_name": "crm",
    //     "alias_domain": "npuni.vn",
    //     "is_favorite": false,
    //     "rating_percentage_satisfaction": -1,
    //     "rating_status": "stage",
    //     "rating_active": true,
    //     "analytic_account_id": [
    //         5,
    //         "CRM"
    //     ]
    // },
      return {
        id: item.id || index,
        color: item.color || Color.primary,
        title: item.name,
        priority: item.id || index,
        task: item.task_count || 0,
        favorites: item.is_favorite,
      };
    });
  }
}
export default new Converter();
