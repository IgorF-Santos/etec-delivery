import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'
    
// Quando importarmos nosso componente, passaremos os parâmetros que estão entre parênteses e chaves como argumento
function FoodOptions({iconName, iconLabel}) {    
    return (                                      
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity
                activeOpacity={0.6} // Define a opacidade do botão quando clicado. Seu valor varia de 0 a 1
                style={FoodOptionsStyle.button}                
            >
                <MaterialCommunityIcons name={iconName} color={'#FFF'} size={32} />
            </TouchableOpacity>
            <Text style={FoodOptionsStyle.text}>{iconLabel}</Text>
        </View>
        
    );
}

export default FoodOptions;

const FoodOptionsStyle = StyleSheet.create({
    button:{
        padding: 10,
        backgroundColor: '#ff7c70',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 5,
        shadowColor: '#363636'
    },

    text: {
        fontSize: 14,
        color: '#4F4F4F',
        fontWeight: '500',
        marginTop: 2
    }
})