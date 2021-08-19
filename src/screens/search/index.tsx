import { Text, View } from "react-native"
import React from "react";
import ContainerScreen from "../../common/components/ContainerScreen";

interface PropsScreens {

}
const SearchScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <ContainerScreen>
                    <Text>SearchScreen</Text>
        </ContainerScreen>
    )
}
export default SearchScreen;