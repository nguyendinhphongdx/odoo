import React from 'react';
import {useEffect} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Constant from '../config/Constant';
import {Spacing} from '../theme';
const {width, height} = Dimensions.get('window');
import {useRoute, useNavigation} from '@react-navigation/native';
// import { Spacing } from '../theme';

const CustomBottomTab = ({state, descriptors, navigation}: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const [visible, setvible] = React.useState(true);
  const [bottom, setBottom] = React.useState(() => new Animated.Value(0));
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const aniBottom = bottom.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -70],
  });
  const AnimatedBottom = () => {
    Animated.timing(bottom, {
      toValue: visible ? 0 : 1,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: false, // <-- neccessary
    }).start(() => {setvible(!visible)});
  };

  // hide tabar bottom with condition
  const _state = state.routes[state.index].state;
  if (_state) {
    const _screenCurrent = _state.routeNames[_state.index];
    console.log(_screenCurrent,visible);
    if (_screenCurrent === Constant.SCREEN.CHAT) {
      if (visible == false) {
        console.log('hide');
        AnimatedBottom();
      }
    } else {
      if (visible == true) {
        console.log('open');
        AnimatedBottom();
      }
    }
  }

  return (
    <Animated.View style={{...styles.ctn, bottom: aniBottom}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabItem, isFocused ? styles.tabItemForcus : null]}>
            <View>
              {isFocused ? options.tabBarIconfocus : options.tabBarIcon}
            </View>
            {isFocused ? (
              <Text
                style={{
                  color: isFocused ? 'white' : 'black',
                  fontSize: 16,
                  paddingRight: 5,
                  marginLeft: 10,
                }}>
                {label}
              </Text>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  ctn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing[4],
    backgroundColor: '#4287f5',
    position: 'absolute',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 70,
    width: width,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabItemForcus: {
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#e6a73c',
  },
  badge: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#EE161F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  txtBadge: {
    color: 'white',
    fontSize: 11,
  },
});
export default CustomBottomTab;
