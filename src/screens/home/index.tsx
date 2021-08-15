import { Text, View } from "react-native"
import React from "react";

interface PropsScreens {

}
const HomeScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <View>
            <Text>Home screen</Text>
        </View>
    )
}
export default HomeScreen;