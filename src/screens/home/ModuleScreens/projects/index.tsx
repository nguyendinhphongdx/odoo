import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {BottomSheet, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import ContainerScreen from '../../../../common/components/ContainerScreen';
import HeaderScreen from '../../../../common/components/headerScreen';
import StarButton from '../../../../common/components/starFav';
import Constant from '../../../../config/Constant';
import projectService from '../../../../core/redux/services/projectService';
import { PropsItemProject} from '../../mock/data';
const {width, height} = Dimensions.get('window');
interface PropsScreens {}
const ProjectScreen: React.FC<PropsScreens> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const ListProject:Array<PropsItemProject> = useSelector((state:any)=> state.Project.project);
  const [projectSelected, setProjectSelected] =
    useState<null | PropsItemProject>(null);
  const [isVisible, setIsVisible] = useState(false);
  // Render Item
  const RenderProject: React.FC<{item: PropsItemProject}> = (props: {
    item: PropsItemProject;
  }) => {
    const [value, setValue] = useState(props.item.favorites || false);
    const handleClickMenu = (item: PropsItemProject) => {
      setProjectSelected(item);
      setIsVisible(true);
    };
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate(Constant.SCREEN.TASK, {project: props.item})
        }
        style={{
          ...styles.itemProject,
          backgroundColor: props.item.color,
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <StarButton value={value} setValue={setValue} />
          <Text>{props.item.title}</Text>
          <TouchableOpacity
            onPress={() => handleClickMenu(props.item)}
            style={{paddingHorizontal: 10}}>
            <Icon name="ellipsis-v" size={20} color="blue" />
          </TouchableOpacity>
        </View>
        <Text>{props.item.task} Tasks</Text>
      </TouchableOpacity>
    );
  };

  const PanelSheet: React.FC = () => {
    return (
      <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
        <View style={{flex: 1, height: height, justifyContent: 'flex-end'}}>
          <TouchableWithoutFeedback>
            <View style={styles.panelSheet}>
              <Text
                style={styles.titleSheet}>
                {projectSelected ? projectSelected.title : 'Nothing name'}
              </Text>
              <TouchableOpacity
                style={{padding: 10}}
                activeOpacity={0.7}
                onPress={() =>
                  ToastAndroid.show('Comming soon...', ToastAndroid.SHORT)
                }>
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 10}}
                activeOpacity={0.7}
                onPress={() =>
                  ToastAndroid.show('Comming soon...', ToastAndroid.SHORT)
                }>
                <Text>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{padding: 10, backgroundColor: '#e0453a'}}
                activeOpacity={0.7}
                onPress={() => setIsVisible(false)}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  useEffect(()=>{
    projectService.GetAllProjects(dispatch);
  },[])
  return (
    <ContainerScreen bottomTab={true}>
      <HeaderScreen title={'Project Screen'} goBack={true} />
      <View style={{flex: 1}}>
        <FlatList
          data={ListProject}
          keyExtractor={item => item.id.toString()}
          renderItem={item => <RenderProject {...item} />}
          numColumns={1}
        />
      </View>

      <BottomSheet
        isVisible={isVisible}
        containerStyle={{backgroundColor: 'rgba(0.5, 0.25, 0, 0.5)'}}>
        <PanelSheet />
      </BottomSheet>
    </ContainerScreen>
  );
};
export default ProjectScreen;

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
    opacity: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  panelSheet: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleSheet:{

  }
});
