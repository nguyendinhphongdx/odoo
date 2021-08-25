import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ContainerScreen from '../../common/components/ContainerScreen';
import HeaderScreen from '../../common/components/headerScreen';
import WebView from 'react-native-webview';
import {ListModule, PropsItemModule} from './mock/data';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

interface PropsScreens {}
const HomeScreen: React.FC<PropsScreens> = ({children}) => {
    const store = useSelector((state:any)=> state);
    console.log('store in redux',store);
    
    const navigation = useNavigation();
    const handleNavigate = (nav:string | undefined) =>{
        if(typeof nav === 'undefined'){
            ToastAndroid.show('Comming soon ...', ToastAndroid.SHORT);
        }else{
            navigation.navigate(nav);
        }
    }
  const RenderModule = (props: {item: PropsItemModule}) => {
    return (
      <TouchableOpacity style={styles.itemModule} activeOpacity={0.7}
      onPress={() =>handleNavigate(props.item.navigation)}>
        <View style={{flexDirection: 'column'}}>
          <Image source={props.item.logo} style={{width: 100, height: 100}} />
          <Text style={styles.title}>{props.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ContainerScreen color={'white'} bottomTab={true}>
      <HeaderScreen title={'HeaderScreen'} />
      {/* <WebView source={{uri:'https://reactnative.dev/docs/textinput'}}/> */}
      <View style={{ flex: 1}}>
        <FlatList
          data={ListModule}
          keyExtractor={item => item.id.toString()}
          renderItem={RenderModule}
          numColumns={2}
        />
      </View>
    </ContainerScreen>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  itemModule: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,.4)',
    shadowColor: 'rgba(255,255,255,.4)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 6,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: 'white',
  },
});
