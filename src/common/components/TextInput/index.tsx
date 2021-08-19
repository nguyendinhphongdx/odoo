// import _ from 'lodash';
import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet, Text, TextInput, TextInputFocusEventData, View, ViewStyle
} from 'react-native';
interface PropsTextInput {
  label?: string;
  placeholder?: string;
  value?: string;
  onChangeText: any;
  show?:boolean;
  iconRight?:any;
  style?:ViewStyle;
  placeholderTextColor?:string;
  focus?:(isFocus:boolean) => void
}
const TextInputCtrl = ({...props}: PropsTextInput) => {
  const handleFocus = (e:NativeSyntheticEvent<TextInputFocusEventData>)=>{
    
  }
  return (
    <View style={{position:'relative'}}>
      {props.label && <Text style={styles.txtLable}> {props.label || ''}</Text>}
      <TextInput
        placeholder={props.placeholder || ''}
        placeholderTextColor={props.placeholderTextColor || '#d1d9e6'}
        value={props.value || ''}
        {...props}
        style={{
          backgroundColor: 'rgba(255,255,255,.2)',
          marginTop: 10,
          borderColor: 'gray',
          borderRadius: 10,
          borderWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 10,
          fontSize: 16,
          color: 'white',
          ...props.style
        }}
        secureTextEntry={props.show}
        onFocus={handleFocus}
        onChangeText={(text: string) => props.onChangeText(text)}
      />
      {props.iconRight && (
              props.iconRight
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  txtLable: {
    fontSize: 17,
    color: 'white',
  },
});

TextInputCtrl.defaultProps = {
  // style: styles.container,
};

export default TextInputCtrl;
