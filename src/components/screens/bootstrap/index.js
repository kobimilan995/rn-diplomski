import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';
import globalStyles from '../../../styles/global';
import { blue } from '../../../styles/colors';
import { LoginScreenRoute } from '../authentication/login';
import { navigateReset } from '../../../utilities/navigation';


class BootstrapScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount(): void {
    setTimeout(() => {
      const { navigation } = this.props;
      navigateReset(navigation, 0, [LoginScreenRoute]);
    }, 2000);
  }

  render() {
    return (
      <View style={globalStyles.centralizedContainer}>
        <ActivityIndicator
          size="large"
          color={blue}
        />
      </View>
    );
  }
}

export default BootstrapScreen;
