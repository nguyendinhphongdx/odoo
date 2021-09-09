import React from 'react';
import {
    Text
} from 'react-native';
import ContainerScreen from '../../../../../common/components/ContainerScreen';
import HeaderScreen from '../../../../../common/components/headerScreen';
interface PropsScreens {}
const SubTasksScreen: React.FC<PropsScreens> = ({navigation, route}) => {
  const {project} = route.params;
  return (
    <ContainerScreen bottomTab={true} style={{paddingHorizontal: 0}}>
      <HeaderScreen title={project} goBack={true} />
        <Text>Comming Soon ...</Text>
    </ContainerScreen>
  );
};
export default SubTasksScreen;

