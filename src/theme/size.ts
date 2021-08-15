/**
 * All common function
 */

import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../theme/library/responsiveScreen';

// design default in figma
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;
const iPhoneX_HEIGHT = 812;
const iPhoneXr_HEIGHT = 896;
const iPhoneXs_HEIGHT = 896;
const iPhoneXsMax_HEIGHT = 896;
const iPhoneSE_HEIGHT = 568;
const pixelRatio = PixelRatio.get();
export const Screen = Dimensions.get('window');
export const ScreenWidth = Screen.width;
export const ScreenHeight = Screen.height;
const width = ScreenWidth < ScreenHeight ? ScreenWidth : ScreenHeight;

const height = ScreenWidth > ScreenHeight ? ScreenWidth : ScreenHeight;
export function getWidth(width:number) {
  return widthPercentageToDP((width / guidelineBaseWidth) * 100);
}

export function getHeight(height:number) {
  return heightPercentageToDP((height / guidelineBaseHeight) * 100);
}

export function normalize(size:number) {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (ScreenWidth < 360) {
      return size * 0.95;
    }

    // iphone 5
    if (ScreenWidth < 667) {
      return size;
      // iphone 6-6s
    }

    if (ScreenHeight >= 667 && ScreenHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }

  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (ScreenWidth <= 360) {
      return size;
    }

    // Catch other weird android width sizings
    if (ScreenHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (ScreenHeight >= 667 && ScreenHeight <= 735) {
      return size * 1.2;
    }

    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }

  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (ScreenWidth <= 360) {
      return size;
      // Catch other smaller android height sizings
    }

    if (ScreenHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (ScreenHeight >= 667 && ScreenHeight <= 735) {
      return size * 1.25;
    }

    // catch larger phablet devices
    return size * 1.4;
  }

  return size;
}

export function hasNotch() {
  return detection();
}

export function isIPhoneSE(dim:any) {
  return dim.height === iPhoneSE_HEIGHT;
}

export function isIPhoneX(dim:any) {
  return dim.height === iPhoneX_HEIGHT;
}

export function isIPhoneXs(dim:any) {
  return dim.height === iPhoneXs_HEIGHT;
}

export function isIPhoneXsMax(dim:any) {
  return dim.height === iPhoneXsMax_HEIGHT;
}

export function isIPhoneXr(dim:any) {
  return dim.height === iPhoneXr_HEIGHT;
}
export function getStatusBarHeight() {
  return Platform.select({
    ios: hasNotch() ? 44 : 30,
    android: StatusBar.currentHeight,
  });
}

function detection() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (isIPhoneX(Screen) ||
      isIPhoneXr(Screen) ||
      isIPhoneXs(Screen) ||
      isIPhoneXsMax(Screen))
  );
}
export const _sdp = (value:any) => {
  return (value * width) / (  Platform.OS === 'ios' ? 375 : 400);
};

export const _mpw = (value:any) => {
  const current = width > 500 ? (value * width) / 450 : (value * width) / 375;
  return current;
};

export const _mph =(value:any) => {
  const current = (value * height) / 667;
  return current;
};

// fontSize Text
export const FontText12 = _mpw(12);
export const FontText14 = _mpw(14);
