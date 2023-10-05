import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const NotificationScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>NotificationScreen</Text>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
