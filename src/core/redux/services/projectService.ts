import {ToastAndroid} from 'react-native';
import converter from '../../../ultis/converter';
import projectActions from '../actions/projectActions';
import ApiService from '../axios/api';

class ProjectService {
  GetAllProjects(dispatch: any) {
    const body = {
      payload: {
        "fields":
          "['name','partner_id','color','task_count','label_tasks','alias_id','alias_name','alias_domain','is_favorite','rating_percentage_satisfaction','rating_status','rating_active','analytic_account_id']",
        "domain": "[('company_id','in',[1,2])]",
        "offset": 0,
      },
    };
    return ApiService.sendRequestFormData('/project.project', 'GET', body)
      .then(response => {
        if (response.status == 200) {
          const action = projectActions.Get_All_Project(
            converter.convertListProject(response.data),
          );
          dispatch(action);
          return response.data;
        } else {
          throw new Error(response.data.message);
        }
      })
      .catch(err => ToastAndroid.show(err.message, ToastAndroid.SHORT));
  }
}
export default new ProjectService();
