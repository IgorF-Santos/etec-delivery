import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'
    
function Button({iconName, label, onPress=() => {}}) {    
    return (                                      
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={ButtonStyle.buttonContaier}
        >
            <Text style={ButtonStyle.buttonLabel}>{label}</Text>     
            <MaterialCommunityIcons name={iconName} color={'#FFF'} size={32} />      
        </TouchableOpacity>   
    );
}

export default Button;

const ButtonStyle = StyleSheet.create({
    buttonContaier:{
        backgroundColor:'#f95e56',                        
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: '3%',
        borderRadius: 20,
        elevation: 5,
        shadowColor: '#363636',
        flexDirection: 'row',
        width: '35%',
        height: '15%',
        marginTop: '5%'
    },

    buttonLabel:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        marginRight: '6%'
    }
})