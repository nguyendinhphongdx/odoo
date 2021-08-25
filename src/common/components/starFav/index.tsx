import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface PropsStar {
  value?: boolean;
  setValue: (balue: boolean) => void;
}
const StarButton: React.FC<PropsStar> = (props: PropsStar) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => props.setValue(!props.value)}>
      <Icon name="star" size={20} color={props.value ? 'yellow' : 'black'} />
    </TouchableOpacity>
  );
};
export default StarButton;
