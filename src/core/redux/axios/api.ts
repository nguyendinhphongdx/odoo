import axios from 'axios';
import { appSettings } from '../../../config/AppSettings';
import qs from 'qs';

class ApiService{
    sendRequestFormURL(endpoint: string, method: any, body?: any) {
        //const data = {db:'theme',login:body.login,password:body.password,username:body.login};
        const request = axios({
            method: method,
            url: `${appSettings.domainServer}${endpoint}`,
            data: body?qs.stringify(body):{},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            timeout: 15000
            //params: params
        })
        console.log(request);
        return request;
    }
    sendRequestFormData(endpoint: string, method: any, body?: any) {
        const keys = Object.keys(body || {});
        const values = Object.values(body || {});
        const formData = new FormData();
        keys.forEach((item,index) =>{
            formData.append(item,JSON.stringify(values[index]))
        })
        const request = axios({
            method: method,
            url: `${appSettings.domainServer}${endpoint}`,
            data: formData,
            headers: {
                "Accept": "application/json",
                "Content-Type":"multipart/form-data",
                'token':appSettings.token,
            },
            timeout: 15000
        })
        console.log(formData);
        return request;
    }
}
export default new ApiService();