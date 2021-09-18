import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ListItemLogs, PropsItemLogs} from '../../../screens/home/mock/data';
interface PropsLogTask {
  style?: ViewStyle;
}
interface PropsButtonLog {
  title?: string;
  onClick?: () => void;
  style?: ViewStyle;
}

const ButtonLog: React.FC<PropsButtonLog> = (props: PropsButtonLog) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        props.onClick
          ? props.onClick()
          : ToastAndroid.show('Comming Soon...', ToastAndroid.SHORT)
      }
      style={{
        marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#ed4762',
      }}>
      <Text style={{color: 'white'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const ContentLog: React.FC<{}> = () => {
  const RowLogs = (props: {item: PropsItemLogs}) => {
    return (
      <View style={styles.rowLogs}>
        <Image
          source={require('../../../assets/icon/png/user.png')}
          style={styles.imgUser}
        />
        <View>
          <View style={styles.rowNameTime}>
            <Text style={styles.name}>{props.item.author}</Text>
            <Text> - {props.item.time?.toLocaleDateString()}</Text>
          </View>
          <Text>{props.item.message}</Text>
        </View>
      </View>
    );
  };
  const Render = ListItemLogs.map((item,index) => {
    return <RowLogs item={item} key={index}/>;
  });
  return (
    <View style={{height: '100%'}}>
      {/* <FlatList
        nestedScrollEnabled
        data={ListItemLogs}
        keyExtractor={item => item.id.toString()}
        renderItem={props => <RowLogs {...props} />}
      /> */}
      {Render}
    </View>
  );
};
const LogTask: React.FC<PropsLogTask> = (props: PropsLogTask) => {
  return (
    <View style={{...props.style}}>
      <View style={{flexDirection: 'row'}}>
        <ButtonLog title={'Gửi tin'} />
        <ButtonLog title={'Ghi Chú'} />
        <ButtonLog title={'Lên Công Việc'} />
      </View>
      <ContentLog />
    </View>
  );
};

export default LogTask;
const styles = StyleSheet.create({
  imgUser: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  rowLogs: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  rowNameTime: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
  },
});
