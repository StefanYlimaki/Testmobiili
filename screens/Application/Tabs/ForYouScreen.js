import { View, Text, Button } from "react-native";

export function ForYouScreen() {
    return(
        <View>
            <Button
                title='Yksittäinen sijaisuus'
                onPress={() => navigation.navigate('SingleSubstitution')}
            />
            <Text>For You</Text>
        </View>
    )
}