import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs
} from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { appSettings } from '../config/AppSettings';
import Constant from '../config/Constant';
import GettingStartedScreen from '../screens/gettingStarted/gettingStarted';
import HomeScreen from '../screens/home';
import ProjectScreen from '../screens/home/ModuleScreens/projects';
import DetailTasksScreen from '../screens/home/ModuleScreens/projects/detailTask';
import SubTasksScreen from '../screens/home/ModuleScreens/projects/subTask';
import TasksScreen from '../screens/home/ModuleScreens/projects/tasks';
import MessageScreen from '../screens/message';
import ChatScreen from '../screens/message/chat';
import ProfileScreen from '../screens/profile';
import SearchScreen from '../screens/search';
import SettingsScreen from '../screens/settings';
import LoginScreen from '../screens/sign-in';
import RegisterScreen from '../screens/sign-up';
import CustomBottomTab from './CustomBottomTab';
const {height,width} = Dimensions.get('screen')
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
      <Stack.Screen name={Constant.SCREEN.TASK} component={TasksScreen} />
      <Stack.Screen name={Constant.SCREEN.DETAILTASK} component={DetailTasksScreen} />
      <Stack.Screen name={Constant.SCREEN.SUBTASK} component={SubTasksScreen} />
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
  
  const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };
  const loadingStore = useSelector((state:any)=>state.User.loading);
  return (

    <NavigationContainer>
      <View>
        {loadingStore && (
          <View style={[styles.container, styles.horizontal, {opacity: 0.6}]}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        )}
      </View>
      <Stack.Navigator screenOptions={{headerShown: false,...MyTransition}}
      initialRouteName={appSettings.gettingStarted?Constant.SCREEN.SPLASH:Constant.SCREEN.LOGIN}
      >
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.3)',
    width: width,
    height: height,
    zIndex: 100,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
