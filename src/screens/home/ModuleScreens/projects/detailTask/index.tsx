import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import ContainerScreen from '../../../../../common/components/ContainerScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderScreen from '../../../../../common/components/headerScreen';
import TabViewComponent from '../../../../../common/components/tabView';
import {dataTimeTable, PropsItemTimeRow} from '../../../mock/data';
interface PropsScreens {}
const DetailTasksScreen: React.FC<PropsScreens> = ({navigation, route}) => {
  const {title} = route.params;
  const FirstRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}} />
  );
  const SecondRoute = () => {
    const RenderTimeRow = (props: {item: PropsItemTimeRow}) => {
      return (
        <View style={{flexDirection: 'row',marginVertical:5,borderBottomWidth:1}} key={props.item.id}>
          <Text style={styles.tRow}>{props.item.date}</Text>
          <Text style={styles.tRow} >{props.item.actor}</Text>
          <Text style={styles.tRow}>{props.item.description}</Text>
          <Text style={styles.tRow}>{props.item.spendTime}</Text>
        </View>
      );
    };
    const RenderHeaderTime = () => {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.tHeader}>Ngày</Text>
          <Text style={styles.tHeader}>Nhân Viên</Text>
          <Text style={styles.tHeader}>Mô tả</Text>
          <Text style={styles.tHeader}>Thời lượng</Text>
        </View>
      );
    };
    return (
      <View style={{flex: 1}}>
        <RenderHeaderTime />
        <FlatList
          data={dataTimeTable}
          keyExtractor={(item: PropsItemTimeRow) => item.id.toString()}
          renderItem={props => <RenderTimeRow {...props} />}
        />
      </View>
    );
  };
  const [routes] = React.useState([
    {key: 'first', title: 'Mô Tả', scene: <FirstRoute />},
    {key: 'second', title: 'Thời gian biểu', scene: <SecondRoute />},
  ]);
  return (
    <ContainerScreen bottomTab={true} style={{paddingHorizontal:0}}>
      <HeaderScreen title={title} goBack={true} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{width: '100%'}}>
          <View style={{...styles.row, paddingRight: 20}}>
            <Icon name="star" color="green" size={25} />
            <Text style={styles.title}>
              {' '}
              Hoàn thiện module khác (SMS, Chat ... chưa biết đặt tên là gì)
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <View style={styles.row}>
              <Text style={styles.label}>Dự án</Text>
              <Text style={styles.content}>
                ERP - Chuyển đổi số cho doanh nghiệp
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Phân công cho</Text>
              <Text style={styles.content}>VietPDB</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Nhiệm vụ cha</Text>
              <Text style={styles.content}>Hoàn thiện V1.0 trong tháng 8</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Hạn chót</Text>
              <Text style={styles.content}>25/07/2021</Text>
            </View>
          </View>
        </View>
        <TabViewComponent
          routes={routes}
          containerStyle={{marginTop: 20, paddingHorizontal: 5}}
        />
      </View>
    </ContainerScreen>
  );
};
export default DetailTasksScreen;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  title: {fontSize: 18, color: 'black', fontWeight: 'bold'},
  label: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    width: '30%',
    maxWidth: 120,
  },
  content: {
    fontSize: 16,
    color: 'green',
    fontWeight: '700',
    textAlign: 'left',
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabButton: {
    borderWidth: 0.8,
    padding: 10,
    borderColor: 'gray',
  },
  tabButtonActive: {
    borderWidth: 0.8,
    padding: 10,
    borderColor: 'gray',
    backgroundColor: 'green',
    color: 'white',
  },
  tabContent: {
    flex: 1,
  },
  tHeader: {
    color: 'white',
    paddingVertical: 6,
    paddingLeft: 4,
    flex: 1,
    backgroundColor: '#43a047',
    borderColor: 'white',
    borderLeftWidth: 1,
  },
  tRow: {
    flex: 1,
    textAlign: 'center',
  },
});
