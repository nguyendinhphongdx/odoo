import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PropsType {
  title?: string;
  goBack?: boolean;
  info?:boolean
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
        borderBottomWidth:.5
      }}>
      {props.goBack && (
        <TouchableOpacity
          onPress={handleGoBack}
          style={{width: '10%', zIndex: 10}}>
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
      {props.info && (
          <TouchableOpacity
            style={{width: '10%', marginLeft: props.info ? '-10%':0 ,alignSelf:'flex-end'}}>
            <Icon name="info-circle" size={25} color="blue" />
          </TouchableOpacity>
        )}
    </View>
  );
};

export default HeaderScreen;
