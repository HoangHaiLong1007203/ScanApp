import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:30,
        paddingHorizontal:20
    },
    row:{
        flexDirection:'row'
    },
    bd: {
        borderRadius:12
    },
    bd2:{
        borderRadius:16
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    abs:{
        backgroundColor:'white',
        position:'absolute',
        elevation:20,

    }
    });
export default styles