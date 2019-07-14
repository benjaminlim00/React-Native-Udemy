import React, { Component } from "react";
// import firebase from "firebase";

import { Text, View } from "react-native";
import { Header } from "./components/common";

class App extends Component {
  componentDidMount() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBuH3sSCWYUXfVtM8t4qHYXr8-nI-uVPC4",
    //   authDomain: "react-native-tutorial-7798d.firebaseapp.com",
    //   databaseURL: "https://react-native-tutorial-7798d.firebaseio.com",
    //   projectId: "react-native-tutorial-7798d",
    //   storageBucket: "",
    //   messagingSenderId: "595404914402",
    //   appId: "1:595404914402:web:0820028e19884b27"
    // });
  }

  render() {
    return (
      <View>
        <Header headerTest="Authentication" />
        <Text>App</Text>
      </View>
    );
  }
}

export default App;
