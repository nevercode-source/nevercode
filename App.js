import React, {Component} from 'react';
import {WebView} from 'react-native';

class App extends Component {
  render() {
    return <WebView source={{uri: 'https://www.google.lk'}} />;
  }
}

export default App;
