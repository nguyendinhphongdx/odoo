import { Text, View } from "react-native"
import React from "react";

interface PropsScreens {

}
const ChatScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <View>
            <Text>Chat screen</Text>
        </View>
    )
}
export default ChatScreen;