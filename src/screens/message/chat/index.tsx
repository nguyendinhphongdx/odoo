import {useKeyboard} from '@react-native-community/hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TextInput,
  StatusBar,
} from 'react-native';
import ContainerScreen from '../../../common/components/ContainerScreen';
import HeaderScreen from '../../../common/components/headerScreen';
import TextInputCtrl from '../../../common/components/TextInput';
import {dataMessage} from '../mock/data';
import {Easing} from 'react-native-reanimated';
const {width, height} = Dimensions.get('screen');
interface PropsScreens {}
interface MessageType {
  id: number;
  name: string;
  image: string;
  message: string;
  type: string;
  time: string;
}
var messageMock: Array<MessageType> = dataMessage;
const ChatScreen: React.FC<PropsScreens> = ({route, children}) => {
  const {message} = route.params;
  const idCurrent = 0;
  const ref = React.useRef<FlatList>(null);
  const [text, setText] = React.useState('');
  const [widthForInput, setWidthForInput] = React.useState(
    () => new Animated.Value(1),
  );
  const animatedWidth = widthForInput.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 55],
  });
  // const handleResize = () => {
  //   //anmated bottom input
  //   // console.log(Keyboard.keyboardHeight);

  //   KeyboardUse.keyboardShown ? setFlex(25) : setFlex(0);
  //   //focus input expand
  //   Animated.timing(widthForInput, {
  //     toValue: state.focusText ? 0 : 1,
  //     duration: 400,
  //     easing: Easing.ease,
  //     useNativeDriver: false, // <-- neccessary
  //   }).start(() => setState({...state, focusText: !state.focusText}));
  //   ref.current?.scrollToEnd();
  // };
  const hendleSendMessage = () => {
    console.log(text);
    messageMock.push({
      id: 0,
      image: '',
      message: text,
      name: 'đình phong',
      time: new Date().toLocaleDateString(),
      type: 'string',
    });
    setText('');
    ref.current?.scrollToEnd();
  };
  const RowMessage = (props: {item: MessageType}) => {
    const [state, setState] = React.useState(false);
    const handleLongClickMessage = () => {
      setState(!state);
    };
    return (
      <View>
        {props.item.id === idCurrent ? (
          <View>
            <View style={styles.containerSend}>
              <Text style={styles.textSend}>{props.item.message}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.containerReceived}>
            <Image
              // source={{uri:props.item.image}}
              source={require('../../../assets/icon/png/avata3.png')}
              style={styles.imageReceived}
            />
            <View style={{width: '70%'}}>
              <Text>{props.item.name}</Text>
              <View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onLongPress={() => {
                    handleLongClickMessage();
                  }}>
                  <Text
                    style={{
                      ...styles.textReceived,
                      backgroundColor: state ? '#c9cdd6' : '#e4e6eb',
                    }}>
                    {props.item.message}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {state && (
              <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                <IconA name={'check'} size={20} color={'gray'} />
                <Text style={{color: 'black'}}>{props.item.time}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    );
  };
  const ScrollToBottom = () => {
    ref.current?.scrollToEnd();
  };
  React.useEffect(() => {
    messageMock = dataMessage;
    setTimeout(ScrollToBottom, 1000);
  }, []);
  return (
    <ContainerScreen
      color="white"
      style={{paddingHorizontal: 0, backgroundColor: 'white'}}>
      <HeaderScreen
        title={message.name}
        goBack={true}
        iconRight={<Icon name="info-circle" size={25} color="blue" />}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255,1)',
          }}>
          <FlatList
            ref={ref}
            data={messageMock}
            style={{flex: 1}}
            keyExtractor={(item, index) => index}
            renderItem={props => <RowMessage {...props} />}
            contentContainerStyle={{
              padding: 5,
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
            onLayout={() => ScrollToBottom()}
          />
        </View>
        <View
          style={{
            minHeight: 50,
            maxHeight:80,
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            borderColor: 'gray',
            // position: 'absolute',
            width: width,
            bottom: 0,
          }}>
          <View style={styles.icon}>
            <Icon name={'image'} size={25} color="black" />
          </View>
          <Animated.View style={{...styles.icon, width: animatedWidth}}>
            <Icon name={'microphone'} size={25} color="black" />
          </Animated.View>
          <View style={{flex: 1}}>
            <TextInputCtrl
              multiline={true}
              value={text}
              onChangeText={(text: string) => setText(text)}
              placeholder={'Aa'}
              placeholderTextColor={'black'}
              style={styles.input}
              iconRight={
                <TouchableOpacity
                  style={{
                    width: 25,   
                    position:'absolute',
                    bottom: 10,
                    right: 15,
                  }}
                  onPress={hendleSendMessage}>
                  <Icon name={'send-o'} size={20} color="black" />
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.icon}>
            <IconA name={'like1'} size={25} color="black" />
          </View>
        </View>
      </View>
    </ContainerScreen>
  );
};
export default ChatScreen;
const styles = StyleSheet.create({
  containerSend: {
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
  },
  textSend: {
    textAlign: 'right',
    backgroundColor: '#0084ff',
    maxWidth: '70%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
    color: 'white',
  },
  containerReceived: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  imageReceived: {width: 40, height: 40, marginRight: 5},
  textReceived: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '100%',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  icon: {
    width: 30,
    alignSelf: 'center',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  input: {
    margin: 5,
    paddingVertical: 5,
    paddingRight: 40,
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 15,
    color: 'black',
    borderWidth: 0,
    minHeight:32
  },
  container: {},
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
