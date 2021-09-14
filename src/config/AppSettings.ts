import AsyncStorage from "@react-native-async-storage/async-storage";
import Constant from "./Constant";
class AppSettings {
    constructor() {
        
    }
    domainServer: string = "http://172.30.0.3:8069/api";
    db:string='theme';
    gettingStarted = true;
    remember:boolean = false;
    userName:string = '';
    passWord:string = '';
    token:string = '';
    async getStorage(){
        const storage = await Promise.all([
            AsyncStorage.getItem(Constant.STORAGE.DOMAIN),
            AsyncStorage.getItem(Constant.STORAGE.DATABASE),
            AsyncStorage.getItem(Constant.STORAGE.GETTINGSTARTED),
            AsyncStorage.getItem(Constant.STORAGE.REMEMBER),
            AsyncStorage.getItem(Constant.STORAGE.USERNAME),
            AsyncStorage.getItem(Constant.STORAGE.PASSWORD)
          ]);
          console.log('get store',storage);
          const domain = storage[0];
          this.domainServer = domain || "http://172.30.0.3:8069/api";

          const db = storage[1];
          this.db = db || 'theme'; 

          if(storage[2]){
            this.gettingStarted = storage[2] === 'true'?true:false;
          }
          const remember = storage[3];
          this.remember = remember == 'true'?true:false;

          const userName = storage[4];
          this.userName = userName || '';

          const passWord = storage[5];
          this.passWord = passWord || '';
    }
    async saveStorage(){
        await Promise.all([
            AsyncStorage.setItem(Constant.STORAGE.DOMAIN, this.domainServer),
            AsyncStorage.setItem(Constant.STORAGE.DATABASE, this.db),
          ]).then(result => console.log('save storage success'));
    }
    async rememberSave(remember:string,userName:string,passWord:string){
      console.log('remember true');
      
      await Promise.all([
        AsyncStorage.setItem(Constant.STORAGE.REMEMBER,remember),
        AsyncStorage.setItem(Constant.STORAGE.USERNAME,userName),
        AsyncStorage.setItem(Constant.STORAGE.PASSWORD,passWord),
      ])
    }
    async rememberRemove(){
      console.log('remember false');
      await Promise.all([
        AsyncStorage.removeItem(Constant.STORAGE.REMEMBER),
        AsyncStorage.removeItem(Constant.STORAGE.USERNAME),
        AsyncStorage.removeItem(Constant.STORAGE.PASSWORD),
      ])
    }
}
export const appSettings: AppSettings = new AppSettings();