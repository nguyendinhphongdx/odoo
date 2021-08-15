import { Text, View } from "react-native"
import React from "react";

interface PropsScreens {

}
const SearchScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <View>
                    <Text>SearchScreen</Text>
        </View>
    )
}
export default SearchScreen;