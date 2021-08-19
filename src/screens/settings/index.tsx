import { Dimensions, Text, View } from "react-native"
import React, { useState } from "react";
import ContainerScreen from "../../common/components/ContainerScreen";
import TextInputCtrl from "../../common/components/TextInput";
import Button from "../../common/components/button/Button";
const {width,height} = Dimensions.get('screen');
interface PropsScreens {

}
const SettingsScreen: React.FC<PropsScreens> = ({ children }) => {
    const [value,setValue] = React.useState('');
    return (
       <ContainerScreen>
          <View style={{height:height,flexDirection:'column',justifyContent:'center'}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Domain Odoo Server</Text>
              <TextInputCtrl value={value} onChangeText={(text:string)=>setValue(text)} style={{marginVertical:30}}/>
              <Button title={'Save'}/>
          </View>
       </ContainerScreen>
    )
}
export default SettingsScreen;