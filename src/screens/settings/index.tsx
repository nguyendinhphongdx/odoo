import { Text, View } from "react-native"
import React from "react";

interface PropsScreens {

}
const SettingsScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <View>
                <Text>SettingsScreen</Text>
        </View>
    )
}
export default SettingsScreen;