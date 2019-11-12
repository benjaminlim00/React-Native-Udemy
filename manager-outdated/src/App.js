import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyBuH3sSCWYUXfVtM8t4qHYXr8-nI-uVPC4',
      authDomain: 'react-native-tutorial-7798d.firebaseapp.com',
      databaseURL: 'https://react-native-tutorial-7798d.firebaseio.com',
      projectId: 'react-native-tutorial-7798d',
      storageBucket: '',
      messagingSenderId: '595404914402',
      appId: '1:595404914402:web:0820028e19884b27'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
