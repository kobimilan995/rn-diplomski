import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import BootstrapScreen from '../screens/bootstrap';
import LoginScreen, { LoginScreenRoute } from '../screens/authentication/login';

const AppNavigator = createStackNavigator({
  Home: {
    screen: BootstrapScreen
  },
  [LoginScreenRoute]: {
    screen: LoginScreen
  }
});

export default createAppContainer(AppNavigator);
