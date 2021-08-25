import { Dimensions, Text, View } from "react-native"
import React, { useState } from "react";
import ContainerScreen from "../../common/components/ContainerScreen";
import TextInputCtrl from "../../common/components/TextInput";
import Button from "../../common/components/button/Button";
import { appSettings } from "../../config/AppSettings";
import {useNavigation} from '@react-navigation/native';
import HeaderScreen from "../../common/components/headerScreen";
const {width,height} = Dimensions.get('screen');
interface PropsScreens {

}
const SettingsScreen: React.FC<PropsScreens> = ({ children }) => {
    const [value,setValue] = React.useState({db:appSettings.db || '',doiman:appSettings.domainServer||''});
    const navigation = useNavigation();
    const handleSave = ()=>{
        appSettings.domainServer = value.doiman;
        appSettings.db = value.db;
        appSettings.saveStorage();
        navigation.goBack();
    }
    
    return (
       <ContainerScreen>
           <HeaderScreen title={'Setting Screen'} goBack={true}/>
          <View style={{height:height,flexDirection:'column',justifyContent:'center'}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Database Name</Text>
              <TextInputCtrl value={value.db} onChangeText={(text:string)=>setValue({...value,db:text})} style={{marginVertical:30}}/>
              <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Domain Odoo Server</Text>
              <TextInputCtrl value={value.doiman} onChangeText={(text:string)=>setValue({...value,doiman:text})} style={{marginVertical:30}}/>
              <Button title={'Save'} onPress={()=>handleSave()}/>
          </View>
       </ContainerScreen>
    )
}
export default SettingsScreen;