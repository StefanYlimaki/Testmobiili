
import * as React from 'react';
import { View, Text, Button, Image, BackHandler, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from './screens/Welcome/WelcomeScreen';
import { ApplicationTabs } from './screens/Application/ApplicationTabs';
import { UserTabs } from './screens/User/UserTabs';
import { SingleSubstitution } from './screens/Application/SingleSubstitution'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar animated barStyle={'dark-content'} backgroundColor={"orange"}/>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='WelcomeScreen'
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Welcome" component={ WelcomeScreen }/>
          <Stack.Screen
            name="Application"
            component={ ApplicationTabs }
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="User"
            component={ UserTabs }
            options={({route}) => ({ 
              title: route.params.username,
              headerShown: false
            })}
          />
          <Stack.Screen 
            name="SingleSubstitution"
            component={ SingleSubstitution }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
