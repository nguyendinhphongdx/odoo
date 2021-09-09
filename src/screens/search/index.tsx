import { Text, View } from "react-native"
import React from "react";
import ContainerScreen from "../../common/components/ContainerScreen";
import HeaderScreen from "../../common/components/headerScreen";

interface PropsScreens {

}
const SearchScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
        <ContainerScreen>
                    <HeaderScreen title={'SearchScreen'}/>
                    <Text>Comming Soon ...</Text>
        </ContainerScreen>
    )
}
export default SearchScreen;