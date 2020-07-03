import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { apiBaseUrl } from './apiParams';

import reducer from './reducers/index';
import Chart from './components/Chart';
import Pickers from './components/Pickers';

const client = axios.create({
  baseURL: apiBaseUrl,
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Header
            containerStyle={styles.header}
            centerComponent={{ text: 'Chartify', style: styles.headerTitle }}
            //rightComponent={{ icon: 'settings', color: '#fff' }}
          />
          <Pickers />
          <ScrollView style={styles.scrollView}>
            <Chart />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#1db954'
  },
  headerTitle: {
    color: '#fff'
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginVertical: 0
  }
});
