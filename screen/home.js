import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import styles from "../styles/style";

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const Item = ({bgc, img,name,detail})=>{
    return(
        <View style={[styles.bd2,styles.center,{backgroundColor:'#F8F8FB',width:width*.4,height:height*.2}]} >
            <View style={[styles.bd2,styles.center,{backgroundColor:bgc,width:55,height:55}]} >
                <Image source={img}/>
            </View>
            <Text style={{fontSize:16,padding:10}} >{name}</Text>
            <Text style={{fontSize:10}} >{detail}</Text>
        </View>
    );
};
export default function Home(){
    return(
        <View style={styles.container} >
            <View style= {[styles.row,{justifyContent:'space-between'}]} >
                <View>
                    <Text style={{fontSize:22,fontWeight:700}} >Hello 👋🏻</Text>
                    <Text>Christie Doe</Text>
                </View>
                <View style={styles.bd} >
                    <Image source={require('../img/avt.png')}/>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View>
                    <Text style={{paddingVertical:20, fontSize:18}} >Your Insights</Text>
                    <View>
                        <View style= {[styles.row,{justifyContent:'space-around',paddingVertical:15}]} >
                            <Item bgc='#dbdaf7' 
                            img={require('../icon/scannew.png')} 
                            name='Scan new' detail='Scanned 483'/>
                            <Item bgc='#F6E3DB' 
                            img={require('../icon/Counterfeits.png')} 
                            name='Counterfeits' detail='Counterfeited 32'/>
                            
                        </View>
                        <View style= {[styles.row,{justifyContent:'space-around',paddingVertical:15}]} >
                            <Item bgc='#d8f3f1' 
                            img={require('../icon/success.png')} 
                            name='Success' detail='Checkouts 8'/>
                            <Item bgc='#d0edfb' 
                            img={require('../icon/directory.png')} 
                            name='Directory' detail='History 26'/>
                            
                        </View>
                    </View>
                </View>
                <View>
                    <View style={[styles.row,{justifyContent:'space-between',alignItems:'center',
                    paddingVertical:20}]} >
                        <Text style={{fontSize:18}} >Explore More</Text>
                        <TouchableOpacity>
                            <Image source={require('../icon/arrowright.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.row,{justifyContent:'space-between'}]} >
                        <View>
                            <Image source={require('../img/product1.png')}/>
                        </View>
                        <View>
                            <Image source={require('../img/product2.png')}/>
                        </View>
                        <View>
                            <Image source={require('../img/product3.png')}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}