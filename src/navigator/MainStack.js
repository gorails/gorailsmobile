import { React } from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../components/home/Home';
import About from '../components/about/About';
// import LeftIconComponent from '../header/LeftIconComponent';

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#6B0000',
    height: 50,
    // paddingTop: 20,
    justifyContent: 'flex-end',
    elevation: 0,
  },
  headerTitleStyle: {
    color: '#FFFFFF',
    justifyContent: 'flex-end',
  },
  headerTintColor: '#FFFFFF',
};

const MainStack = new StackNavigator({
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
    navigationOptions: navigation => ({
      headerTitle: 'Quem Somos',
    }),
  }
}, {
  navigationOptions
})

export default MainStack;
