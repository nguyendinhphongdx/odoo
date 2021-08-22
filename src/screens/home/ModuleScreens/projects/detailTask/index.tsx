import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import ContainerScreen from '../../../../../common/components/ContainerScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderScreen from '../../../../../common/components/headerScreen';
interface PropsScreens {}
const DetailTasksScreen: React.FC<PropsScreens> = ({navigation, route}) => {
  const {title} = route.params;

  return (
    <ContainerScreen bottomTab={true} >
      <HeaderScreen title={title} goBack={true} />
      <View style={{flex: 1, backgroundColor: 'white',}}>
       <View style={{width:'100%'}}>
       <View style={styles.row}>
            <Icon name="star" color="green" size={25}/>
          <Text style={styles.title}>
            {' '}
            Hoàn thiện module khác (SMS, Chat ... chưa biết đặt tên là gì)
          </Text>
        </View >
        <View style={{marginTop:10}}>
          <View style={styles.row}>
            <Text style={styles.label}>Dự án</Text>
            <Text  style={styles.content}>ERP - Chuyển đổi số cho doanh nghiệp</Text>
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
        <View>
          <Text>Mô tả || Thời gian biểu</Text>
        </View>
      
       </View>
      </View>
    </ContainerScreen>
  );
};
export default DetailTasksScreen;
const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-between',overflow: 'hidden'},
  title: {fontSize: 18, color: 'black', fontWeight: 'bold'},
  label:{fontSize: 16, color: 'black',fontWeight:'600',width:'30%',maxWidth:120},
  content:{fontSize: 16, color: 'green',fontWeight:'700',textAlign:'left',flex:1}
});
