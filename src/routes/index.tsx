import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '@constants/colors';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.tintiColor },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
