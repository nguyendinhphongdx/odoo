import { Text, View } from "react-native"
import React from "react";
import ContainerScreen from "../../common/components/ContainerScreen";

interface PropsScreens {

}
const ProfileScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <ContainerScreen>
                <Text>ProfileScreen</Text>
        </ContainerScreen>
    )
}
export default ProfileScreen;