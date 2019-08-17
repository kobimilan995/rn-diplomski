import {
  NavigationActions,
  StackActions
} from 'react-navigation';

export const navigateReset = (navigation, index = 0, actions) => {
  navigation
    .dispatch(StackActions.reset({
      index: index,
      actions: actions.map(routeName => {
        return NavigationActions.navigate({routeName});
      }),
    }));
};
