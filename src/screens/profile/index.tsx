import { Text, View } from "react-native"
import React from "react";
import ContainerScreen from "../../common/components/ContainerScreen";
import ButtonLogout from '../../common/components/button/Button';
import { useNavigation } from "@react-navigation/native";
import Constant from "../../config/Constant";
import HeaderScreen from "../../common/components/headerScreen";
import {appSettings} from '../../config/AppSettings';
interface PropsScreens {

}
const ProfileScreen: React.FC<PropsScreens> = ({ children }) => {
    const navigation = useNavigation();
    React.useEffect(()=>{
      appSettings.getStorage();
    },[])
    return (
        <ContainerScreen bottomTab={true}>
              <View style={{height:'100%'}}>
              <HeaderScreen title={'ProfileScreen'}/>
                <ButtonLogout title="Đăng xuất" onPress={()=>navigation.reset({
        index: 0,
        routes: [{name: Constant.SCREEN.LOGIN}],
      })}/>
              </View>
        </ContainerScreen>
    )
}
export default ProfileScreen;