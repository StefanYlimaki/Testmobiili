import * as React from 'react'
import { View, Text, Button, BackHandler } from 'react-native'

export function UserScreen({ navigation, route }) {

    const { username, age } = route.params
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello {username}!</Text>
        <Text>You look like {age} year old.</Text>
        <Text>Name: {JSON.stringify(username)}</Text>
        <Text>Age: {JSON.stringify(age)}</Text>
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({ headerTitle: route.params.username })}
        />
      </View>
    );
  }