import React from 'react';
import {
  View,
  Text
} from 'react-native';
import globalStyles from '../../../../styles/global';


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={globalStyles.centralizedContainer}>
        <Text>Login</Text>
      </View>
    );
  }
}
export const LoginScreenRoute = 'Login';
export default LoginScreen;
