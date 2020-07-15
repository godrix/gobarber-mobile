import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';
import colors from '@constants/colors';

// import { Container } from './styles';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <View style={{ backgroundColor: colors.tintiColor, flex: 1 }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
