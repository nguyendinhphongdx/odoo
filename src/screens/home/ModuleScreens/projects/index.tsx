import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContainerScreen from '../../../../common/components/ContainerScreen';
import HeaderScreen from '../../../../common/components/headerScreen';
import StarButton from '../../../../common/components/starFav';
import Constant from '../../../../config/Constant';
import {ListProject, PropsItemProject} from '../../mock/data';
const {width, height} = Dimensions.get('window');
interface PropsScreens {}
const ProjectScreen: React.FC<PropsScreens> = () => {
    const navigation = useNavigation();
  const RenderProject = (props: {item: PropsItemProject}) => {
    // Parseconst [value, setValue] = React.useState(props.item.favorites);
    return (
      <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate(Constant.SCREEN.TASK,{project: props.item})}
        style={{...styles.itemProject, backgroundColor: props.item.color,justifyContent:'space-between',flexDirection: 'column'}}>
        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
            {/* <StarButton value={true} setValue={setValue}/> */}
            <Text>{props.item.title}</Text>
            <TouchableOpacity onPress={() => console.log('menu')} style={{paddingHorizontal:10}}>
            <Icon name="ellipsis-v" size={20} color="blue"/>
            </TouchableOpacity>
            </View>
        <Text>{props.item.task} Tasks</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ContainerScreen bottomTab={true}>
      <HeaderScreen title={'Project Screen'} goBack={true} />
      <View style={{flex: 1}}>
        <FlatList
          data={ListProject}
          keyExtractor={item => item.id.toString()}
          renderItem={RenderProject}
          numColumns={1}
        />
      </View>
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
        elevation: 6,
        opacity: 0.6
      }
})
