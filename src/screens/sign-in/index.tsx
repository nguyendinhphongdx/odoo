import React from "react";
import { Text, View } from "react-native"

interface PropsScreens {

}
const LoginScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <View>
                <Text>Login Screen</Text>
        </View>
    )
}
export default LoginScreen;