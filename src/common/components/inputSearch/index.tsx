// import _ from 'lodash';
import React from 'react';
import {
    GestureResponderEvent,
  StyleSheet, Text, TextInput, View, ViewStyle
} from 'react-native';
interface PropsTextInput {
  placeholder?: string;
  value?: string;
  iconRight?:any;
  style?:ViewStyle;
  onChangeText:(text:string) => void,
  onPress?:(event: GestureResponderEvent) => void,
  placeholderTextColor?:string
}
const TextInputSearch = ({...props}: PropsTextInput) => {
  return (
    <View style={{position:'relative'}}>
      <TextInput
        placeholder={props.placeholder || ''}
        placeholderTextColor={props.placeholderTextColor ||'#d1d9e6'}
        value={props.value || ''}
        {...props}
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 10,
          fontSize: 14,
          color: 'white',
          ...props.style,
          flexDirection:'column'
        }}
        onChangeText={(text: string) => props.onChangeText(text)}
      />
     <View style={{position:'absolute',right:10,alignItems:'center',flex:1,top:10}}>
      {props.iconRight && (
                props.iconRight
        )}
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  txtLable: {
    fontSize: 17,
    color: 'white',
  },
});

TextInputSearch.defaultProps = {
  // style: styles.container,
};

export default TextInputSearch;
