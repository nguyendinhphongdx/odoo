import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import {svgs} from '../assets';
import Constant from '../config/Constant';
import HomeScreen from '../screens/home';
import MessageScreen from '../screens/message';
import ChatScreen from '../screens/message/chat';
import ProfileScreen from '../screens/profile';
import SearchScreen from '../screens/search';
import SettingsScreen from '../screens/settings';
import LoginScreen from '../screens/sign-in';
import RegisterScreen from '../screens/sign-up';
import CustomBottomTab from './CustomBottomTab';
import GettingStartedScreen from '../screens/gettingStarted/gettingStarted';
import {HeaderTitle} from '@react-navigation/elements';
import ProjectScreen from '../screens/home/ModuleScreens/projects';

const Tab: any = createBottomTabNavigator();
const Stack: any = createStackNavigator();

const BottomTab: React.FC<PropsBottom> = ({children}) => {
  return (
    <Tab.Navigator
      tabBar={(props: any) => <CustomBottomTab {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={Constant.SCREEN.HOMESCREEN}
        component={HomeStack}
        options={{
          tabBarIcon: <Icon name={'home'} size={25} color="white" />,
          tabBarIconfocus: <Icon name={'home'} size={25} color="white" />,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name={Constant.SCREEN.SEARCH}
        component={SearchStack}
        options={{
          tabBarIcon: <Icon name={'search'} size={25} color="white" />,
          tabBarIconfocus: <Icon name={'search'} size={25} color="white" />,
          title: 'Search',
        }}
      />
      <Tab.Screen
        name={Constant.SCREEN.MESSAGE}
        component={MessageStack}
        options={{
          tabBarIcon: <Icon name={'comment'} size={25} color="white" />,
          tabBarIconfocus: <Icon name={'comment'} size={25} color="white" />,
          title: 'Message',
        }}
      />
      <Tab.Screen
        name={Constant.SCREEN.PROFILE}
        component={ProfileStack}
        options={{
          tabBarIcon: <Icon name={'gear'} size={25} color="white" />,
          tabBarIconfocus: <Icon name={'gear'} size={25} color="white" />,
          title: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack: React.FC<{}> = ({children}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnalbe: true,
        gestureDirection: 'horizontal',
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name={Constant.SCREEN.HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={Constant.SCREEN.PROJECT} component={ProjectScreen} />
    </Stack.Navigator>
  );
};
const SearchStack: React.FC<{}> = ({children}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnalbe: true,
        gestureDirection: 'horizontal',
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // ...TransitionPresets.ModalPresentationIOS
      }}>
      <Stack.Screen name={Constant.SCREEN.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
};
const MessageStack: React.FC<{}> = ({children}) => {
  const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...MyTransition,
      }}>
      <Stack.Screen name={Constant.SCREEN.MESSAGE} component={MessageScreen} />
      <Stack.Screen name={Constant.SCREEN.CHAT} component={ChatScreen} />
    </Stack.Navigator>
  );
};
const ProfileStack: React.FC<{}> = ({children}) => {
  const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...MyTransition,
      }}>
      <Stack.Screen name={Constant.SCREEN.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
const AppRouter: React.FC<PropsRouter> = ({children}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Constant.SCREEN.SPLASH}
          //   options={options}
          component={GettingStartedScreen}
        />
        <Stack.Screen
          name={Constant.SCREEN.LOGIN}
          //   options={options}
          component={LoginScreen}
        />
        <Stack.Screen
          name={Constant.SCREEN.REGISTER}
          //   options={options}
          component={RegisterScreen}
        />
        <Stack.Screen
          name={Constant.SCREEN.TABBUTTOM}
          //   options={options}
          component={BottomTab}
        />
        <Stack.Screen
          name={Constant.SCREEN.SETTING}
          options={{
            headerLeft: () => <Icon name={'eye'} size={25} color="black" />,
          }}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppRouter;
