import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from 'react-native';
const {width, height} = Dimensions.get('screen');
const ContainerScreen: React.FC<{color?:string;bottomTab?:boolean,style?:ViewStyle}> = ({children,color,bottomTab,style}) => {
  const backgroundImage = color=='white'?require('../../assets/img/gettingStarted/bg_blue.png'):require('../../assets/img/gettingStarted/bg_blue.png');
  return (
    <ImageBackground
      source={backgroundImage}
      style={{
        width: width,
        height:height,
        paddingHorizontal: 10,
        paddingTop: StatusBar.currentHeight,
        paddingBottom:bottomTab?70:0,
        ...style
      }}>
        <View style={{ backgroundColor:'rgba(255,255,255,.2)',position:'absolute',top:0,left:0,width,height}}/>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{width:'100%',height:'100%'}}>{children}</View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default ContainerScreen;