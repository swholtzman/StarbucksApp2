import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('Appname', () => App);

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Amplify from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import awsExports from './src/aws-exports';

import { FormProvider } from './screens/FormContext';
import Landing from './screens/Landing';
import SignIn from './screens/SignIn';
import JoinNow from './screens/JoinNow';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import FrontPage from './screens/FrontPage';
import { registerRootComponent } from 'expo';

import config from './src/aws-exports.js';

Amplify.configure(config);


// Amplify.configure(amplifyconfig);
// Amplify.configure(awsExports);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <FormProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="JoinNow" component={JoinNow} />
          <Stack.Screen name="Inbox" component={Inbox} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Main" component={FrontPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
}

export default registerRootComponent(App);
