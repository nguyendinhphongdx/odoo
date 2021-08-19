import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, TouchableOpacity, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const story = require('../../../assets/icon/png/logo.png');

interface Story {
  index: number;
  name: string;
  image: string;
}
interface propTypes {
  data: Array<Story>;
}
function StoryHorizontal(props: propTypes) {
  const StoryItem = (props: {item: Story}) => {
    return (
      <TouchableOpacity onPress={() => console.log(props.item)}>
        <View
          key={props.item.index}
          style={{
            width: 60,
            height: 60,
            marginHorizontal: 5,
            borderWidth: 1,
            borderRadius: 30,
          }}>
          <Image source={story} style={{width: '100%', height: '100%'}} />
        </View>
        <Text style={{color: 'black', textAlign: 'center'}}>
          {props.item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => console.log('add')}>
        <View
          style={{
            width: 60,
            height: 60,
            marginHorizontal: 5,
            borderWidth: 1,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderStyle: 'dashed',
          }}>
          <Icon name={'plus'} size={25} />
        </View>
        <Text style={{color: 'black', textAlign: 'center'}}>Add New</Text>
      </TouchableOpacity>

      <FlatList
        nestedScrollEnabled
        data={props.data}
        keyExtractor={(item: Story) => item.index}
        horizontal
        renderItem={({item}) => {
          return <StoryItem item={item} />;
        }}
      />
    </View>
  );
}

StoryHorizontal.propTypes = {
  data: PropTypes.array,
};

export default StoryHorizontal;
