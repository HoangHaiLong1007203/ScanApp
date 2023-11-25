// Trong file app.js, import các màn hình Home, Scan, Cart và thư viện React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from "react-native";

import Home from './screen/home';
import Scan from './screen/scan';
import Cart from './screen/cart';

// Tạo một biến Tab để sử dụng bottom tab navigator
const Tab = createBottomTabNavigator();

// Tạo một component App để chứa các màn hình và thanh bottom tab
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#A58EFF',  // Màu của nút khi được chọn
          tabBarInactiveTintColor: 'white',  // Màu của nút khi không được chọn
          tabBarShowLabel: false,  // Không hiển thị tên chữ
          headerShown: false,  // Không hiển thị tiêu đề
          tabBarStyle: {
            backgroundColor: '#fff',  // Màu nền của thanh tab bar
            height: 100, // Chiều cao của thanh bottom tab
            borderTopLeftRadius: 30, // Độ bo tròn của đường viền
            borderTopRightRadius:30,
            display: route.name === 'Scan' ? 'none' : 'flex',
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          // Thiết lập các thuộc tính của nút tab Home
          options={{
            tabBarIcon: ({ focused }) => (
              // Nếu nút tab được chọn, sử dụng ảnh home-active, ngược lại sử dụng ảnh home
              <Image
                source={
                  focused
                    ? require('./icon/home-slt.png')
                    : require('./icon/home.png')
                }
                // Thiết lập kích thước của ảnh
                style={{ width: 30, height: 30 }}
              />
            ),
            
          }}
        />
        <Tab.Screen
          name="Notify"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('./icon/notify.png')
                    : require('./icon/notify.png')
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Scan"
          component={Scan}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('./icon/scan.png')
                    : require('./icon/scan.png')
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('./icon/history.png')
                    : require('./icon/history.png')
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require('./icon/cart-slt.png')
                    : require('./icon/cart.png')
                }
                style={{ width: 30, height: 30 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Xuất khẩu component App
export default App;
