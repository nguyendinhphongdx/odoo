import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { Spacing } from '../theme';
import { ScreenWidth } from '../theme/size';
// import { Spacing } from '../theme';

const CustomBottomTab = ({state, descriptors, navigation}: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  var notifies = useSelector((state:any)=> state.Notify.notifies);
  notifies = notifies.filter((item:any) => item.seen == 'false' ||item.seen == false  )
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.ctn}>
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
        const tabBarBadge = () => {
          const iconBadge = (
            <View />
            // <View style={styles.badge}>
            //   <Text style={styles.txtBadge}></Text>
            // </View>
          );
          switch (route.name) {
            case 'Notification':
              return iconBadge;
            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabItem, isFocused ? styles.tabItemForcus : null]}>
            <View>
              <SvgXml
                xml={isFocused ? options.tabBarIconfocus : options.tabBarIcon}
                height={24}
                width={24}
                style={{
                  //   margin: Spacing[1],
                  //   padding: Spacing[1],
                  marginRight: 16,
                }}
              />
               {options.title =='Notification' &&(
               <Text style={{color:'white',position:'absolute',top:-10,left:10,fontSize:14}}>{notifies.length>999?'999+':notifies.length}</Text>
              )}
            </View>
            {tabBarBadge()}
            {isFocused ? (
              <Text
                style={{
                  color: isFocused ? '#FFA700' : '#BDBDBD',
                  fontSize: 16,
                }}>
                {label}
              </Text>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  ctn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing[4],
    backgroundColor: '#162235',
    position: 'absolute',
    // paddingBottom: metric.paddingBottomScreen,
    alignItems: 'center',
    bottom: 10,
    borderRadius: 20,
    //   backgroundColor: 'red',
    marginHorizontal: ScreenWidth * 0.03,
    height: 55,
    shadowColor: '#6C6CE5',
    shadowRadius: 15,
    //shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.3,
    width: ScreenWidth - ScreenWidth * 0.06,
    borderColor: 'rgba(0, 111, 226, 0.39)',
    borderWidth:3
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabItemForcus: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#102733',
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
