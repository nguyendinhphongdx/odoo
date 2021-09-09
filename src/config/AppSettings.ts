import AsyncStorage from "@react-native-async-storage/async-storage";
import Constant from "./Constant";
class AppSettings {
    constructor() {
        
    }
    domainServer: string = "http://172.30.0.3:8069/api";
    db:string='theme';
    gettingStarted = true;
    async getStorage(){
        const storage = await Promise.all([
            AsyncStorage.getItem(Constant.STORAGE.DOMAIN),
            AsyncStorage.getItem(Constant.STORAGE.DATABASE),
            AsyncStorage.getItem(Constant.STORAGE.GETTINGSTARTED)
          ]);
          console.log('get store',storage);
          
          const domain = storage[0] || "";
          if(domain != ""){
            this.domainServer = domain;
          }
          const db = storage[1];
          if(db){
            this.db = db;
          } 
          if(storage[2]){
            this.gettingStarted = storage[2] === 'true'?true:false;
          }
    }
    async saveStorage(){
        await Promise.all([
            AsyncStorage.setItem(Constant.STORAGE.DOMAIN, this.domainServer),
            AsyncStorage.setItem(Constant.STORAGE.DATABASE, this.db),
          ]).then(result => console.log('save storage success'));
    }
}
export const appSettings: AppSettings = new AppSettings();