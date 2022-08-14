import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
    
function Header() {
    // Const utilizada para permitir a navegação entre telas utilizado o Stack Navigator
    const navigation = useNavigation();

    return (                                      
        <View style={headerStyle.mainContainer}>
        <TouchableOpacity 
            style={headerStyle.myAccountButtonContainer}
            activeOpacity={0.6}
            onPress= {() => navigation.navigate('StackNavigator')}
        >
          <Ionicons name={"person"} color={'#FFF'} size={32} />
        </TouchableOpacity>
        <TouchableOpacity
            style={headerStyle.exitButtonContainer}
            activeOpacity={0.6}
            onPress= {() => navigation.replace('LoginRoute')}
            >
          <Ionicons name={"exit-outline"} color={'#FFF'} size={30} />
        </TouchableOpacity>
      </View>
    );
}

export default Header;

const headerStyle = StyleSheet.create({
    mainContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        height: 100,
        backgroundColor: '#f95e56',
        borderBottomRightRadius: 50,
        elevation: 15,
        shadowColor: '#363636'
    },

    myAccountButtonContainer:{
        backgroundColor: '#ff7c70',
        alignSelf: 'flex-start',
        padding: '1%',
        borderRadius: 50,
        marginTop: 12,
        elevation: 8,
        shadowColor: '#363636',
        padding: '4%'
    },

    exitButtonContainer:{
        borderRadius: 50,
        marginTop: 12,  
    }
})