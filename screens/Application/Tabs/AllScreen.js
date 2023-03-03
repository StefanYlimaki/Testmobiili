import { View, Text, Button } from "react-native";

export function AllScreen({ navigation }) {
    return(
        <View>
            <Button
                title='Yksittäinen sijaisuus'
                onPress={() => navigation.navigate('SingleSubstitution')}
            />
            <Text>Tässä listassa ovat kaikki sijaisuudet</Text>
        </View>
    )
}