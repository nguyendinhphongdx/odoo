import { Text, View } from "react-native"
import React from "react";
import ContainerScreen from "../../common/components/ContainerScreen";
import ButtonLogout from '../../common/components/button/Button';
import { useNavigation } from "@react-navigation/native";
import Constant from "../../config/Constant";

interface PropsScreens {

}
const ProfileScreen: React.FC<PropsScreens> = ({ children }) => {
    const navigation = useNavigation();
    return (
        <ContainerScreen>
                <Text>ProfileScreen</Text>
                <ButtonLogout title="Đăng xuất" onPress={()=>navigation.navigate(Constant.SCREEN.LOGIN)}/>
        </ContainerScreen>
    )
}
export default ProfileScreen;