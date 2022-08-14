import { SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'


function InitialScreen(){
    const navigation = useNavigation();

    return(
        <SafeAreaView>
            <StatusBar style="dark" backgroundColor='#f95e56' />

        </SafeAreaView>
    );
}

export default InitialScreen;