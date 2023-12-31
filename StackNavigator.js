import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Khai bao man hinh
import SlpastScreen from "./screens/SlpastScreen";
import LoginScreen from "./screens/LoginScreen";
import SigupScreen from "./screens/SigupScreen";
import HomeScreen from "./screens/HomeScreen";
import NotificationScreen from "./screens/NotificationScreen";
import OrderHistory from "./screens/OrderHistory";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/Order/OrderScreen";
import FavouriteScreen from "./screens/Profile/FavouriteScreen";
import Chatbotscreen from "./screens/Profile/Chatbotscreen";
import EditAccountScreen from "./screens/Profile/EditAccountScreen";
import AccountScrren from "./screens/Profile/AccountScrren";

// Khai bao icon
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProductdetailsScreen from "./screens/ProductdetailsScreen";

// Noi khai bao chuyen man
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const [number, setNumber] = useState(null);

  // Cho 3s hiển thị thông báo
  useEffect(() => {
    setTimeout(() => {
      setNumber(3);
    }, 3000);
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#EEEEEE",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="home"
                color={focused ? "black" : color}
                size={size}
              />
              <Text style={focused ? styles.showTxt : styles.hiddenTxt}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          // Hien thi thong bao
          tabBarBadge: number,
          tabBarBadgeStyle: { backgroundColor: "#6666FF" },
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="bell"
                color={focused ? "black" : color}
                size={size}
              />
              <Text style={focused ? styles.showTxt : styles.hiddenTxt}>
                Notification
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderHistory}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="receipt"
                color={focused ? "black" : color}
                size={size}
              />
              <Text style={focused ? styles.showTxt : styles.hiddenTxt}>
                Order
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.boxIcon}>
              <MaterialCommunityIcons
                name="account"
                color={focused ? "black" : color}
                size={size}
              />
              <Text style={focused ? styles.showTxt : styles.hiddenTxt}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Bottom Tab
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplastScreen"
          component={SlpastScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SigupScreen"
          component={SigupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator} // Include the BottomTabNavigator as a screen
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductdetailsScreen"
          component={ProductdetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FavouriteScreen"
          component={FavouriteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chatbotscreen"
          component={Chatbotscreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditAccountScreen"
          component={EditAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountScrren"
          component={AccountScrren}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  boxIcon: {
    alignItems: "center",
  },
  showTxt: {
    display: "flex",
  },
  hiddenTxt: {
    display: "none",
  },
});
