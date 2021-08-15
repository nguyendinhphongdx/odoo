import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import  {getStatusBarHeight} from '../theme/library/statusBarHeight';
const isHasNotch =
  Platform.OS === 'ios'
    ? DeviceInfo.hasNotch()
    : getStatusBarHeight() > 24
    ? true
    : false;
const {width, height} = Dimensions.get('screen');
const HEIGHT_WINDOW = Dimensions.get('window').height;
const HEIGHT_SCREEN = Dimensions.get('screen').height;
const WIDTH_SCREEN =Dimensions.get('screen').width
console.log(
  'HEIGHT_WINDOW:',
  HEIGHT_WINDOW,
  'HEIGHT_SCREEN',
  HEIGHT_SCREEN,
  getStatusBarHeight(),
  isHasNotch,
);

const marginBottomScreen =
  HEIGHT_WINDOW + getStatusBarHeight() === HEIGHT_SCREEN
    ? 0
    : HEIGHT_SCREEN - HEIGHT_WINDOW - getStatusBarHeight() < 0
    ? HEIGHT_SCREEN - HEIGHT_WINDOW
    : HEIGHT_SCREEN - HEIGHT_WINDOW - getStatusBarHeight();

const marginTopScreen = getStatusBarHeight();
const paddingBottomScreen = Platform.OS === 'ios' && isHasNotch ? 20 : 0;
const heightScreen =
  Platform.OS === 'ios'
    ? HEIGHT_WINDOW
    : HEIGHT_WINDOW + (isHasNotch ? marginTopScreen : 0);

console.log(
  'marginBottomScreen',
  marginBottomScreen,
  marginTopScreen,
  heightScreen,
);

export const _sdp = (value:number) => {
  return (value * width) / (Platform.OS === 'ios' ? 375 : 400);
};

export function isTabletBasedOnRatio() {
  let ratio = HEIGHT_SCREEN /WIDTH_SCREEN;
  if (ratio > 1.6) {
    return false;
  } else {
    return true;
  }
}

const metric = {
  _sdp,
  sW: width < heightScreen ? width : heightScreen,
  sH: width < heightScreen ? heightScreen : width,
  marginTopScreen,
  marginBottomScreen,
  paddingBottomScreen,
  opacity: 0.8,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  headerHeight: 62 + marginTopScreen,
  bottomTabHeight: 52 + paddingBottomScreen,
  buttonRadius: 4,
  icon: [15, 20, 25, 30, 35, 40, 45, 50, 55],
  line: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
  radius: 6,
  statusBarH: marginTopScreen,
  heightBtnAuthen: 52,
};

export default metric;
