import { Dimensions, FlatList, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React,{useRef} from "react";
import { useNavigation } from "@react-navigation/core";
import Constant from "../../config/Constant";
const { width, height } = Dimensions.get('screen');
interface PropsScreens {

}
interface PropsItem {
    backgroundImage: string,
    image?: string;
    id: number;
}
const listItems: Array<PropsItem> = [
    {
        backgroundImage: '../../assets/img/gettingStarted/bg_getting.png',
        id: 1
    },
    {
        backgroundImage: '../../assets/img/gettingStarted/bg_getting.png',
        id: 2
    },
    {
        backgroundImage: '../../assets/img/gettingStarted/bg_getting.png',
        id: 3
    },
]
const GettingStartedScreen: React.FC<PropsScreens> = ({ children }) => {
    const [offset, setOffset] = React.useState(0);
    const flatlistRef = useRef<FlatList<HTMLElement>>(null);
    const navigator = useNavigation();
    const handleNext = () => {
        if(offset==2){
            navigator.reset({
                index:0,
                routes:[{name:Constant.SCREEN.LOGIN}]
              });
        }else{
            setOffset(offset==2?0:offset+1)
            flatlistRef.current?.scrollToIndex({index: offset})
        }
        
    }
    const RenderItem = ({ item, index }) => {
        return (
            <ImageBackground source={require('../../assets/img/gettingStarted/bg_getting.png')} resizeMode={'cover'} style={styles.imgBackground} >
                <View style={styles.wall}>
                    {/* {children} */}
                    <Text style={{color:'white'}}>{index}</Text>
                </View>
            </ImageBackground>
            //<Text>{item.image}</Text>
        )
    }
    const renderSteps = listItems.map((item, index) => {
        return (
            <Text key={index} style={{ ...styles.step, color: index <= offset ? 'white' : 'black' }}> {index } </Text>
        )
    })
    return (
        <View style={styles.container}>
            <View style={styles.steps}>
                {renderSteps}
                <TouchableOpacity onPress={handleNext}>
                {offset==2?<Text>Complete</Text>:<Text>Next</Text>}
                </TouchableOpacity>
            </View>
            <FlatList
                ref={flatlistRef}
                data={listItems}
                keyExtractor={item => item.id}
                renderItem={(props) => <RenderItem {...props} />}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />

        </View>

        // <ImageBackground source={require('../../assets/img/gettingStarted/bg_getting.png')} resizeMode={'cover'}  style={ styles.imgBackground } >
        //     {children}
        // </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    imgBackground: {
        width: width,
        height: height,
        flex: 1,
    },
    wall: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        opacity: .3
    },
    steps: {
        position: 'absolute',
        bottom: 80,
        right: 80,
        zIndex: 999,
        flexDirection: 'row'
    },
    step: {
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold'
    }
})
export default GettingStartedScreen;