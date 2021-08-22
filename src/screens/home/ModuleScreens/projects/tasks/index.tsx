import React from 'react';
import {
    Dimensions, StyleSheet, View
} from 'react-native';
import { Board } from 'react-native-draganddrop-board';
import ContainerScreen from '../../../../../common/components/ContainerScreen';
import HeaderScreen from '../../../../../common/components/headerScreen';
import Constant from '../../../../../config/Constant';
import { boardRepository } from '../../../mock/data';

const {width, height} = Dimensions.get('window');
interface PropsScreens {}
const TasksScreen: React.FC<PropsScreens> = ({navigation, route}) => {
  const {project} = route.params;
  const handleNavigate = ()=>{
      navigation.navigate(Constant.SCREEN.DETAILTASK,{title:project.title})
  }
  return (
    <ContainerScreen bottomTab={true} style={{paddingHorizontal:0}}>
      <HeaderScreen title={project.title} goBack={true} style={{paddingHorizontal:10}}/>
      <View style={{flex: 1}}>
        <Board
          boardRepository={boardRepository}
          open={() => {}}
          onDragEnd={() => {}}
          onPress={()=> handleNavigate()}
        />
      </View>
    </ContainerScreen>
  );
};
export default TasksScreen;
const styles = StyleSheet.create({
  itemProject: {
    flex: 1,
    height: height * 0.15,
    maxHeight: 120,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: 'rgba(255,255,255,.4)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 6,
    opacity: 0.6,
  },
});
