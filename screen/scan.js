import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../styles/style";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
export default function Scan(){
    const navigation = useNavigation();

    return(
        <ImageBackground source={require('../img/scanedproduct.png')} 
        resizeMode="cover" style={[styles.container,{justifyContent:'flex-end'}]} >
            <View style={[styles.abs,styles.row,styles.center,
                {alignSelf:'flex-start', borderRadius:16, top:50, left:30}]} >
                    <TouchableOpacity style={[styles.center,
                        {borderRadius:11,width:45,height:45,backgroundColor:'#fff'}]} 
                        onPress={() => {
                            navigation.navigate('Home');
                            }}>
                        <Image source={require('../icon/Arrowleft.png')} />
                    </TouchableOpacity>
                </View>
            <View style={[styles.abs,styles.row,styles.center,
                {padding:15,alignSelf:'center', borderRadius:16, bottom:50}]} >
                <View>
                    <Image source={require('../img/scanedproduct.png')} 
                    style={{width:52,height:52,borderRadius:9}} />
                </View>
                <View style={{padding:10, width:width*.4}} >
                    <Text>Lauren’s</Text>
                    <Text>Orange Juice</Text>
                </View>
                <TouchableOpacity style={[styles.center,
                    {borderRadius:11,width:45,height:45,backgroundColor:'#5A6CF3'}]} 
                    onPress={() => {
                        navigation.navigate('Cart');
                        }}>
                    <Image source={require('../icon/add.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}