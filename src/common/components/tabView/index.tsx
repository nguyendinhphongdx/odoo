import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native"
import React from "react";
interface TabView {
    key?: string | number;
    title: string;
    scene: React.FC | JSX.Element;
}
interface PropsTabsView {
    routes:Array<TabView>;
    containerStyle?:ViewStyle;
    tabBarStyle?:ViewStyle;
    tabContentStyle?:ViewStyle;
}
const TabViewComponent:React.FC<PropsTabsView> = (props:PropsTabsView)=>{
    const [index, setIndex] = React.useState(0);
    const renderTabBar = props.routes.map((item, i) => {
        return (
          <TouchableOpacity
            style={i === index ? styles.tabButtonActive : styles.tabButton}
            activeOpacity={0.7}
            onPress={() => setIndex(i)}
            key={item.key}>
            <Text style={i === index ? styles.titleActive : styles.title}>{item.title}</Text>
          </TouchableOpacity>
        );
      });
      const renderContent = () => {
            return props.routes[index].scene
      };
    return(
        <View style={{flex: 1,...props.containerStyle}}>
        <View style={{...styles.tabBar,...props.tabBarStyle}}>{renderTabBar}</View>
        <View style={{...styles.tabContent,...props.tabContentStyle}}>{renderContent()}</View>
      </View>
    )
} 
export default TabViewComponent;
const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
      },
      tabButton: {
        borderTopWidth: 1,
        padding: 10,
        borderColor: 'gray',
        borderRadius:5
      },
      tabButtonActive: {
        borderTopWidth: 2,
        padding: 10,
        borderColor: 'green',
        borderRadius:5,
        borderWidth:1,
        borderBottomWidth:0
      },
      tabContent: {
          flex: 1,
          borderTopWidth:.5,
      },
      title:{
          fontSize:14,
      },
      titleActive:{
        fontSize:14,
        fontWeight: 'bold'
      }
})