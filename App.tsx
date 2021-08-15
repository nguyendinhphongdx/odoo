/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   ActivityIndicator,
   Dimensions,
   StyleSheet,
 
 
   View
 } from 'react-native';
 import { SafeAreaProvider } from 'react-native-safe-area-context';
 import { Provider } from 'react-redux';
import AppRouter from './src/navigation';
 const { height, width } = Dimensions.get("window")
 
 const App = () => {
   const [load, setLoad] = React.useState(1);
   React.useEffect(()=>{
    setTimeout(() => {
      setLoad(0);
    }, 2000);
   },[]);
   return (
     <SafeAreaProvider>
       {load == 1 && (
         <View style={[styleIns.container, styleIns.horizontal, { opacity: 0.6 }]}>
           <ActivityIndicator size="large" color="#00ff00" />
         </View>
       )}
       {/* <Provider store={store}> */}
       <View style={{ flex: 1 }}>
         <AppRouter />
       </View>
       {/* </Provider> */}
     </SafeAreaProvider>
 
 
   );
 };
 
 const styleIns = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     position: 'absolute',
     backgroundColor: '#ccc',
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
 
 export default App;
 