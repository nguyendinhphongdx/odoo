import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {Board} from 'react-native-draganddrop-board';
import ContainerScreen from '../../../../../common/components/ContainerScreen';
import HeaderScreen from '../../../../../common/components/headerScreen';
import StarButton from '../../../../../common/components/starFav';
import Constant from '../../../../../config/Constant';
import {boardRepository, PropsItemTask} from '../../../mock/data';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');
interface PropsScreens {}
const TasksScreen: React.FC<PropsScreens> = ({navigation, route}) => {
  const {project} = route.params;
  const handleNavigate = (item) => {
   
    
    navigation.navigate(Constant.SCREEN.DETAILTASK, {title: project.title});
  };
  const RenderCardTask = (props: {item: PropsItemTask}) => {
    const [value, setValue] = useState(props.item.favorite ? true : false);
    return (
     
        <View style={styles.taskCard}>
          <View style={styles.taskRow}>
            <Text style={styles.taskName}>{props.item.name}</Text>
            <TouchableOpacity
              onPress={() =>
                ToastAndroid.show('Comming soon ...', ToastAndroid.SHORT)
              }
              style={{paddingHorizontal: 10}}>
              <Icon name="ellipsis-v" size={20} color="blue" />
            </TouchableOpacity>
          </View>
          <Text style={{maxWidth: '70%'}}>{props.item.description}</Text>
          <View style={styles.taskRow}>
            <StarButton value={value} setValue={setValue} />

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                ToastAndroid.show('Comming soon...', ToastAndroid.SHORT)
              }>
              <Image
                source={require('../../../../../assets/icon/png/user.png')}
                style={styles.avatar}
              />
            </TouchableOpacity>
          </View>
        </View>
    );
  };
  return (
    <ContainerScreen bottomTab={true} style={{paddingHorizontal: 0}}>
      <HeaderScreen
        title={project.title}
        goBack={true}
        style={{paddingHorizontal: 10}}
      />
      <View style={{flex: 1}}>
        <Board
          boardRepository={boardRepository}
          open={() => {}}
          onDragEnd={() => {}}
          onPress={(item) => handleNavigate(item)}
          cardContent={item => <RenderCardTask item={item} />}
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
  taskName: {
    color: 'blue',
    fontWeight: '700',
    fontSize: 17,
    maxWidth: '90%',
  },
  taskCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 6.11,

    elevation: 14,
  },
  taskRow: {flexDirection: 'row', justifyContent: 'space-between'},
  avatar: {width: 20, height: 20},
});
