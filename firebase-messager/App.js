import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  FlatList
} from "react-native";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuH3sSCWYUXfVtM8t4qHYXr8-nI-uVPC4",
  authDomain: "react-native-tutorial-7798d.firebaseapp.com",
  databaseURL: "https://react-native-tutorial-7798d.firebaseio.com",
  projectId: "react-native-tutorial-7798d",
  storageBucket: "",
  messagingSenderId: "595404914402",
  appId: "1:595404914402:web:0820028e19884b27"
};

firebase.initializeApp(firebaseConfig);

class App extends Component {
  state = {
    message: "",
    messages: []
  };

  componentDidMount() {
    firebase
      .database()
      .ref()
      .child("messages")
      .once("value", snapshot => {
        const data = snapshot.val();
        if (snapshot.val()) {
          const initMessages = [];
          Object.keys(data).forEach(message =>
            initMessages.push(data[message])
          );
          this.setState({
            messages: initMessages
          });
        }
      });

    firebase
      .database()
      .ref()
      .child("messages")
      .on("child_added", snapshot => {
        const data = snapshot.val();
        if (data) {
          this.setState(prevState => ({
            messages: [data, ...prevState.messages]
          }));
        }
      });
  }

  addItem = () => {
    if (!this.state.message) return;

    const newMessage = firebase
      .database()
      .ref()
      .child("messages")
      .push();

    newMessage.set(this.state.message, () => this.setState({ message: "" }));
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <TextInput
            placeholder="Enter your message"
            onChangeText={text => this.setState({ message: text })}
            style={styles.textInput}
            value={this.state.message}
          />
          <Button title="send" onPress={this.addItem} />
        </View>

        <FlatList
          data={this.state.messages}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.listItem}>{item}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  messageBox: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff"
  },
  textInput: {
    flex: 1
  },
  listItemContainer: {
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 6
  },
  listItem: {
    fontSize: 20,
    padding: 20
  }
});

export default App;
