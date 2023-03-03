import { View, Text, Button } from "react-native";

export function SavedScreen() {
    return(
        <View>
            <Button
                title='Yksittäinen sijaisuus'
                onPress={() => navigation.navigate('SingleSubstitution')}
            />
            <Text>Saved</Text>
        </View>
    )
}