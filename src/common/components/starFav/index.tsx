import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
interface PropsStar {
  value?: boolean;
  setValue?: (balue: boolean) => void;
  style?:ViewStyle
}
const StarButton: React.FC<PropsStar> = (props: PropsStar) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => props.setValue?props.setValue(!props.value):null}>
      <Icon name="star" size={20} color={props.value ? 'yellow' : 'black'} 
        style={{...props.style}}
        solid={props.value}
      />
    </TouchableOpacity>
  );
};
export default StarButton;
