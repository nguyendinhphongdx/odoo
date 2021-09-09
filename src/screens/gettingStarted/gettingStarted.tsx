import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/core';
import Constant from '../../config/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('screen');
interface PropsScreens {}
interface PropsItem {
  backgroundImage: string;
  image?: string;
  id: number;
}
const listItems: Array<PropsItem> = [
  {
    backgroundImage: require('../../assets/img/gettingStarted/bg_blue.png'),
    id: 1,
  },
  {
    backgroundImage:require('../../assets/img/gettingStarted/bg_blue.png'),
    id: 2,
  },
  {
    backgroundImage: require('../../assets/img/gettingStarted/bg_blue.png'),
    id: 3,
  },
];
const GettingStartedScreen: React.FC<PropsScreens> = ({children}) => {
  const [offset, setOffset] = React.useState(0);
  const flatlistRef = useRef<FlatList<HTMLElement>>(null);
  const navigator = useNavigation();

  const handleNext = () => {
    if (offset == 2) {
      navigator.reset({
        index: 0,
        routes: [{name: Constant.SCREEN.LOGIN}],
      });
    } else {
      setOffset(offset == 2 ? 0 : offset + 1);
      flatlistRef.current?.scrollToIndex({index: offset});
    }
  };
  const handleSkip = () => {
    AsyncStorage.setItem(Constant.STORAGE.GETTINGSTARTED,"false");
    navigator.reset({
      index: 0,
      routes: [{name: Constant.SCREEN.LOGIN}],
    });
  };
  const RenderItem = ({item, index}) => {
    return (
      <ImageBackground
        source={item.backgroundImage}
        resizeMode={'cover'}
        style={styles.imgBackground}>
        <View style={styles.wall}>
        </View>
        <View style={{width:width,height:height,position:'absolute',top:0,left:0,justifyContent:'center',alignItems:'center',paddingBottom:'20%'}}>
            <Text style={{fontSize:27,fontWeight:'bold',color:'white'}}>Getting All Application for Mobile</Text>
            <Image
                source={require('../../assets/icon/gettingsStated/Group2.png')}
                style={{width:250,height:250}}
            />
            <Text style={{fontSize:18,color:'#B4A1A1',width:'70%'}}>All Application had brough in mobile application</Text>
        </View>
      </ImageBackground>
      //<Text>{item.image}</Text>
    );
  };
  const renderSteps = listItems.map((item, index) => {
    return (
      <Text
        key={index}
        style={{...styles.step, color: index <= offset ? 'white' : 'black'}}>
        {' '}
        {index}{' '}
      </Text>
    );
  });
 

  return (
    <View style={styles.container}>
      <View style={styles.steps}>
        <TouchableOpacity onPress={handleSkip}>
          <Text>Skip</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
            {renderSteps}
        </View>
        <TouchableOpacity onPress={handleNext}>
          {offset == 2 ? <Text>Done</Text> : <Text>Next</Text>}
        </TouchableOpacity>
      </View>
      <FlatList
        ref={flatlistRef}
        data={listItems}
        keyExtractor={item => item.id}
        renderItem={props => <RenderItem {...props} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        // onViewableItemsChanged={onViewableItemsChanged}
        // viewabilityConfig={{
        //     itemVisiblePercentThreshold: 50
        //   }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  imgBackground: {
    width: width,
    height: height,
    flex: 1,
  },
  wall: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc',
    opacity: 0.2,
    position: 'relative',
  },
  steps: {
    position: 'absolute',
    bottom: 0,
    zIndex: 999,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,.2)',
    width: '100%',
    height:80,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    paddingHorizontal:10,
    paddingVertical:10,
    justifyContent:'space-between'
  },
  step: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
export default GettingStartedScreen;
