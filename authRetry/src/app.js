import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBuH3sSCWYUXfVtM8t4qHYXr8-nI-uVPC4",
      authDomain: "react-native-tutorial-7798d.firebaseapp.com",
      databaseURL: "https://react-native-tutorial-7798d.firebaseio.com",
      storageBucket: "react-native-tutorial.appspot.com",
      messagingSenderId: "595404914402",
      appId: "1:595404914402:web:0820028e19884b27",
      projectId: "react-native-tutorial-7798d"

      //not mine
      // apiKey: "AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE",
      // authDomain: "authentication-70a18.firebaseapp.com",
      // databaseURL: "https://authentication-70a18.firebaseio.com",
      // storageBucket: "authentication-70a18.appspot.com",
      // messagingSenderId: "682333809338"
    });

    console.log("mounted...");

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
