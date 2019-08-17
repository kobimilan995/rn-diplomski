// import React from 'react';
// import firebase from 'react-native-firebase';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity
// } from 'react-native';
//
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.ref = firebase.firestore().collection('task');
//     this.unsubscribe = null;
//     this.state = {
//       tasks: []
//     }
//   }
//
//   componentDidMount(): void {
//     this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
//     firebase.auth().onAuthStateChanged(user => {
//       console.log(user);
//     });
//   }
//
//   componentWillUnmount(): void {
//     this.unsubscribe();
//   }
//
//   handleSignUp = () => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword('test@test.com', '12345678')
//       .then(() => console.log('success'))
//       .catch(error => console.log(error.message));
//   };
//
//   onCollectionUpdate = (querySnapshot) => {
//     const tmpTasks = [];
//     querySnapshot._docs.forEach(documentSnapshot => {
//       tmpTasks.push(documentSnapshot._data);
//     });
//     this.setState({ tasks: tmpTasks });
//   };
//
//   render() {
//     return (
//       <View style={{ marginTop: 50 }}>
//         {this.state.tasks.map(task => {
//           console.log(task);
//           return <Text key={Math.random()}>{task.title}</Text>
//         })}
//         <TouchableOpacity onPress={this.handleSignUp}><Text>Login</Text></TouchableOpacity>
//       </View>
//     );
//   }
// }

import React from 'react';
import Router from './src/components/router';

const App = () => {
  return <Router />;
};

export default App;
