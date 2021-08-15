import { Text, View } from "react-native"
import React from "react";

interface PropsScreens {

}
const MessageScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <View>
            <Text>Message screen</Text>
        </View>
    )
}
export default MessageScreen;