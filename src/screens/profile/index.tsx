import { Text, View } from "react-native"
import React from "react";

interface PropsScreens {

}
const ProfileScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <View>
                <Text>ProfileScreen</Text>
        </View>
    )
}
export default ProfileScreen;