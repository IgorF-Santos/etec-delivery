import { SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import InitialScreenStyle from '../../styles/initial_screen_style';

function InitialScreen(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={InitialScreenStyle.container}>
            <StatusBar style="dark" backgroundColor='#f95e56' />

            {/* Início Header */}
            <View style={InitialScreenStyle.header} />
            {/* Fim Header */}

            {/* Início Conteúdo */}
            <View style={InitialScreenStyle.mainContent}>
                <Text style={InitialScreenStyle.mainLabel}>Etec Delivery</Text>
                <Text style={InitialScreenStyle.secondaryLabel}>Levando comidas saborosas até você</Text>
                <TouchableOpacity
                    activeOpacity={0.9}                    
                    style={InitialScreenStyle.entryButton}
                    onPress={() => {navigation.navigate('Login Screen')}}
                >
                    <MaterialCommunityIcons name={'chevron-right'} color={'#FFF'} size={38} />
                </TouchableOpacity>
            </View>
            {/* Fim Conteúdo */}

            {/* Início Footer */}
            <View style={InitialScreenStyle.footer} />
            {/* Fim Footer */}

        </SafeAreaView>
    );
}

export default InitialScreen;