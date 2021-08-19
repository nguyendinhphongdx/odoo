import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, StyleSheetProperties} from 'react-native';
interface ButtonProps {
    title:string,
    color?:string,
    style?:StyleSheetProperties,
    onPress?:any
}
const Button = (props:ButtonProps) => {
  return (
    <TouchableOpacity
    onPress={()=> props.onPress?props.onPress():null}
    activeOpacity={.7}
      style={{
        backgroundColor: props.color || '#1d3152',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: 'white',
          fontWeight: '700',
          textAlign: 'center',
        }}>
        {props.title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#C4D0F3',
    height: 40,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: '600',
    lineHeight: 23,
    color: '#000000',
    alignSelf: 'center',
  },
});

export default memo(Button);
