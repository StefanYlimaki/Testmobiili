import * as React from 'react'
import { View, Text, Button } from 'react-native'

export function ApplicationScreen({ navigation }) {

    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        })
        navigation.setOptions({
            headerRight: () => (
              <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
            ),
          })
    }, [navigation])

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ApplicationScreen</Text>
        <Button
          title="Go to user screen"
          onPress={() => navigation.navigate('User', {
            username: 'Stefan',
            age: 22
          })}
        />
        <Text>Count: {count}</Text>
      </View>
    );
  }