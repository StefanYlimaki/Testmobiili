import { View, Text, Button } from 'react-native'

export function WelcomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>WelcomeScreen</Text>
        <Button
          title="Continue to the application"
          onPress={() => navigation.navigate('Application')}
        />
      </View>
    );
}