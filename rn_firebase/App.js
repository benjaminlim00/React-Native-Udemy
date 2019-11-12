import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, AddItem, List } from "./src/screens";

const RootStack = createStackNavigator(
  {
    HomeScreen: Home,
    AddItemScreen: AddItem,
    ListItemScreen: List
  },
  {
    initialRouteName: "HomeScreen"
  }
);

const App = createAppContainer(RootStack);
export default App;
