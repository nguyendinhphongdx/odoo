import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ContainerScreen from '../../common/components/ContainerScreen';
import TextInputSearch from '../../common/components/inputSearch';
import Icon from 'react-native-vector-icons/FontAwesome';
import StoryHorizontal from '../../common/components/story';
import {useNavigation} from '@react-navigation/native';
import Constant from '../../config/Constant';
import HeaderScreen from '../../common/components/headerScreen';
const faker = require('faker');
const story = require('../../assets/icon/png/logo.png');
const avatar = require('../../assets/icon/png/avata2.png');
const {width, height} = Dimensions.get('screen');
interface PropsScreens {}
interface MessageProps {
  id: number;
  image: string;
  name: string;
  lastMassge: string;
  notSeen: number;
  lastTime: string;
}
var data: Array<{
  index: number;
  name: string;
  image: string;
}> = [];

var MessageArray: Array<MessageProps> = [];
const MessageScreen: React.FC<PropsScreens> = ({children}) => {
  const [state, setState] = React.useState({searchText: ''});
  const navigation = useNavigation();
  const handleNavigate = (message: MessageProps) => {
    navigation.navigate(Constant.SCREEN.CHAT, {message: message});
  };
  for (let index = 0; index < 10; index++) {
    data.push({
      index: index,
      name: `Story ${index}`,
      image: story,
    });
    MessageArray.push({
      id: index,
      name: `NAME ${index}`,
      image:
        'https://st.quantrimang.com/photos/image/2021/08/16/Anh-vit-cute-6.jpg',
      lastMassge: `Last message ${index}`,
      notSeen: 4,
      lastTime: '11:56',
    });
  }
  const RowMesage = (props: {item: MessageProps}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleNavigate(props.item)}
        style={styles.rowMessage}>
        <View style={styles.containerRow}>
          <Image
            //   source={{
            //     uri: 'https://st.quantrimang.com/photos/image/2021/08/16/Anh-vit-cute-6.jpg',

            // }}
            source={avatar}
            style={styles.avatar}></Image>
          <View style={styles.bagde}>
            <Text style={styles.textBagde}> {props.item.notSeen} </Text>
          </View>
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.name}>{props.item.name}</Text>
          <Text style={styles.lastMessage}>{props.item.lastMassge}</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text>{props.item.lastTime}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ContainerScreen color={'white'} bottomTab={true}>
      <View>
        <HeaderScreen title={'Message screen'}/>
        <TextInputSearch
          value={state.searchText}
          onChangeText={(text: string) =>
            setState({...state, searchText: text})
          }
          iconRight={<Icon name={'search'} size={20} color="gray" />}
          placeholder={'Searching ...'}
          placeholderTextColor={'gray'}
        />
        <View style={{paddingVertical: 10}}>
          <StoryHorizontal data={data} />
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text style={{color: 'white', fontSize: 20}}>Recent</Text>
        <FlatList
          style={{height:'100%'}}
          nestedScrollEnabled
          data={MessageArray}
          keyExtractor={item => item.id}
          renderItem={props => {
            return <RowMesage {...props} />;
          }}
        />
      </View>
    </ContainerScreen>
  );
};

export default MessageScreen;
const styles = StyleSheet.create({
  rowMessage: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: 'rgba(0,0,0,.25)',
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    borderColor: 'rgba(0, 111, 226, 0.39)',
  },
  containerRow: {flex: 1, position: 'relative'},
  avatar: {width: 70, height: 70, borderRadius: 35},
  bagde: {
    position: 'absolute',
    left: 60,
    top: 0,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
  },
  textBagde: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },
  name: {fontSize: 16, color: 'black', fontWeight: 'bold'},
  lastMessage: {fontSize: 16, color: 'black'},
});
