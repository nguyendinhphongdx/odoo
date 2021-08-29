import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonLogin from '../../common/components/button/Button';
import ContainerScreen from '../../common/components/ContainerScreen';
import TextInputCtrl from '../../common/components/TextInput';
import Constant from '../../config/Constant';
import userService from '../../core/redux/services/userService';
import {useDispatch} from 'react-redux';
import {appSettings} from '../../config/AppSettings';
const Logo = require('../../assets/icon/png/logo.png');
const {width, height} = Dimensions.get('window');
interface PropsScreens {}
const LoginScreen: React.FC<PropsScreens> = ({children}) => {
  const navigation = useNavigation();
  const [state, setState] = React.useState({
    account: '',
    password: '',
  });
  const [load, setLoad] = React.useState(false);
  const [isShow, setIsShow] = React.useState(true);
  const dispatch = useDispatch();
  const handleLogin = () => {
    setLoad(true);
    userService
      .LoginService(
        {db: appSettings.db, login: state.account, password: state.password},
        dispatch,
      )
      .then(token => {
        if (token) {
          navigation.reset({
            index: 0,
            routes: [{name: Constant.SCREEN.TABBUTTOM}],
          });
        }
      })
      .finally(() => setLoad(false));
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: Constant.SCREEN.TABBUTTOM}],
      // });
  };

  return (
    <ContainerScreen>
      <View>
        {load && (
          <View style={[styles.container, styles.horizontal, {opacity: 0.6}]}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(Constant.SCREEN.SETTING)}
        style={styles.ViewSetting}>
        <Image
          source={require('../../assets/icon/png/ic_setting.png')}
          style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
      <View style={styles.ViewWrapLogo}>
        <Image
          source={Logo}
          style={{width: width * 0.5, height: width * 0.5}}
        />
      </View>
      <Text style={styles.headerTitle}>Odoo Mobile</Text>
      <View style={{marginTop: 20}}>
        <View>
          <TextInputCtrl
            label={'Tài khoản'}
            placeholder={'UserName'}
            value={state.account}
            onChangeText={(text: string) => setState({...state, account: text})}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <TextInputCtrl
            label={'Mật khẩu'}
            placeholder={'password'}
            value={state.password}
            onChangeText={(text: string) =>
              setState({...state, password: text})
            }
            show={isShow}
            iconRight={
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  width: 25,
                  height: 25,
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                }}
                onPress={() => setIsShow(!isShow)}>
                <Icon
                  name={isShow ? 'eye' : 'eye-slash'}
                  size={25}
                  color="black"
                />
              </TouchableOpacity>
            }
          />
        </View>
        {/* <SvgXml xml={`${svgs.SvgEye}`} width={25} height={25} fill={'white'} /> */}
        <ButtonLogin title={'Đăng Nhập'} onPress={handleLogin} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 10,
          }}>
          <Text style={{color: 'white'}}>Don’t have an account? </Text>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={{textAlign: 'center', color: 'white'}}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ContainerScreen>
  );
};
const styles = StyleSheet.create({
  ViewWrapLogo: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  ViewSetting: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txtLable: {
    fontSize: 17,
    color: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.3)',
    width: '100%',
    height: height,
    zIndex: 100,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default LoginScreen;
