import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const OrderHistory = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>OrderHistory</Text>
    </SafeAreaView>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({});
