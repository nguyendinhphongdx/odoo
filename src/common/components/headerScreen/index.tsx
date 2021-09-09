import {useNavigation} from '@react-navigation/core';
import React, { ReactChild } from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PropsType {
  title?: string;
  goBack?: boolean;
  style?:ViewStyle;
  iconRight?: ReactChild,
  onPressIconRight?:()=>void
}
const HeaderScreen = (props: PropsType) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    console.log('back');
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height:30,
        borderColor:'gray',
        borderBottomWidth:.5,
        ...props.style
      }}>
      {props.goBack && (
        <TouchableOpacity
          onPress={handleGoBack}
          style={{width: '10%', zIndex: 10,paddingLeft:5}}>
          <Icon name="arrow-left" size={25} color="blue" />
        </TouchableOpacity>
      )}
      <View style={{width: '100%', marginLeft: props.goBack ? '-10%' : 0}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {props.title}{' '}
        </Text>
      </View>
        {props.iconRight? (
          <TouchableOpacity
          onPress={()=>props.onPressIconRight?props.onPressIconRight():null}
          style={{width: '10%', marginLeft: '-10%', alignSelf: 'flex-end'}}>
          {props.iconRight}
        </TouchableOpacity>
        ) :null}
    </View>
  );
};

export default HeaderScreen;
