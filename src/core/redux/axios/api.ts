import axios from 'axios';
import { appSettings } from '../../../config/AppSettings';
import qs from 'qs';

export default function sendRequest(endpoint: string, method: any, body?: any) {
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