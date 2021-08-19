import { Text, View } from "react-native"
import React from "react";
import ContainerScreen from "../../common/components/ContainerScreen";
import HeaderScreen from "../../common/components/headerScreen";
import WebView from "react-native-webview";

interface PropsScreens {

}
const HomeScreen: React.FC<PropsScreens> = ({ children }) => {
    return (
       <ContainerScreen color={'white'}>
           <HeaderScreen title={'HeaderScreen'}/>
           {/* <WebView source={{uri:'https://reactnative.dev/docs/textinput'}}/> */}
       </ContainerScreen>
    )
}
export default HomeScreen;