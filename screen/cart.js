// Import React và các component cần thiết
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../styles/style";
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const Item = ({img,name,product,price})=>{
    const [num, setNum] = useState(1);
    const [total, setTotal] = useState(0);
    const decrease = () => {
        if (num > 1) {
        setNum(num - 1);
        setTotal(price*num);
        }
    };
    const increase = () => {
        setNum(num + 1);
        setTotal(price*num);
    };
    return(
        <View style={[styles.bd2,styles.row,
        {backgroundColor:'#F8F8FB',width:width*.9,height:height*.12,margin:10}]} >
            <View style={[styles.bd2,styles.center,{padding:10}]} >
                <Image source={img} style={[styles.bd,{width:60,height:60}]} />
            </View>
            <View style={{padding:10, width:width*.4}} >
                <Text style={{fontSize:10,padding:5}} >{name}</Text>
                <Text style={{fontSize:12,padding:5}} >{product}</Text>
                <Text style={{fontSize:16,padding:5,fontWeight:700,color:'#F08F5F'}} >₹ {price}</Text>
            </View>
            <View  style={[styles.row,{backgroundColor:'white',height:30,marginTop:50}]} >
                <TouchableOpacity onPress={decrease} style={[styles.center,{width:30, height:30}]}>
                    <Image source={require('../icon/minus.png')} />
                </TouchableOpacity>
                <View  style={[styles.center,{width:30, height:30}]}>
                    <Text >{num}</Text>
                </View>
                <TouchableOpacity onPress={increase} style={[styles.center,{width:30, height:30}]}>
                <Image source={require('../icon/plus.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default function Cart(){
    const [bill, setBill] = useState(0);
    const [items, setItems] = useState([]); // Thêm một state để lưu trữ mảng các item
    const calculateBill = (total) => {
        setBill(bill + total);
    };
    const navigation = useNavigation();
    // Tạo một đối tượng cho mỗi item, chứa các thuộc tính như img, name, product, và price
    let item1 = {
    img: require('../img/scanedproduct.png'),
    name: 'Lauren’s',
    product: 'Orange Juice',
    price: 149
    };

    // let item2 = {
    // img: require('../img/scanedproduct.png'),
    // name: 'Lauren’s',
    // product: 'Orange Juice',
    // price: 199
    // };

  // Thêm các đối tượng vào mảng bằng phương thức push
    items.push(item1);
    // items.push(item2);
    // Sử dụng useEffect để cập nhật giá trị của bill khi render các Item
    useEffect(() => {
        // Tạo một biến để lưu trữ giá trị của bill mới
        let newBill = 0;
        // Duyệt qua mảng items và tính toán giá trị của bill mới
        for (let i = 0; i < items.length; i++) {
            // Cộng dồn giá trị của total vào newBill
            newBill += items[i].total;
        }
        // Cập nhật state của bill bằng giá trị của newBill
        setBill(newBill);
    }, [items]); // Thêm mảng items vào mảng phụ thuộc của useEffect

    return(
        <View style={styles.container} >
            <View style={[styles.abs,styles.row,styles.center,
                {alignSelf:'flex-start', borderRadius:16, top:50, left:30}]} >
                    <TouchableOpacity style={[styles.center,
                        {borderRadius:11,width:45,height:45,backgroundColor:'#fff'}]} 
                        onPress={() => {
                            navigation.navigate('Home');
                            }}>
                        <Image source={require('../icon/Arrow2.png')} />
                    </TouchableOpacity>
            </View>
            <View style={{marginTop:100}} >
                <Text style={{fontSize:22,fontWeight:700}} >Your Cart 👍🏻</Text>
            </View>
            <View style={{height:height*.4,marginTop:30}} >
                <ScrollView>
                    {items.map(item => (
                        // Truyền các thuộc tính của item vào component Item
                        <Item 
                            img={item.img}
                            name={item.name}
                            product={item.product}
                            price={item.price}
                        />
                    ))}
                </ScrollView>
            </View>
            <View style={[styles.row,{justifyContent: 'space-between',margin:10}]}>
                <Text style={{fontSize:16,fontWeight:700}} >Total</Text>
                <Text style={{fontSize:16,fontWeight:700,color:'#F08F5F'}} >₹ {bill}</Text>
            </View>
            <View style={[styles.center,{marginTop:20}]}>
                <TouchableOpacity style={[styles.center,{width:width*.9,height:height*.07,backgroundColor:'#F08F5F',borderRadius:10}]}>
                    <Text style={{fontSize:16,fontWeight:700,color:'white'}} >Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
