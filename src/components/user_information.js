import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
    
function UserInformation({informationLabel, informationContent, iconName}) {    
    return (                                      
        <View style={UserInformationStyle.mainContainer}>
        <View>
            <Ionicons name={iconName} color={'#f95e56'} size={22} />
        </View>
        <View
            style={UserInformationStyle.informationContainer}
        >
            <Text style={UserInformationStyle.informationLabel}>{informationLabel}</Text>
            <Text style={UserInformationStyle.informationContent}>{informationContent}</Text>
        </View>
    </View>
        
    );
}

export default UserInformation;

const UserInformationStyle = StyleSheet.create({
    mainContainer:{                        
        flexDirection: 'row',
        paddingHorizontal: '3%',
        alignItems: 'center',
        borderBottomWidth: 0.4,
        borderColor: '#363636',
        paddingVertical: '2%',
    },

    informationContainer:{
        marginLeft: '4%',
        paddingVertical: '2%'
    },

    informationLabel:{
        fontSize: 14,
        fontWeight: '500',
        color: '#4F4F4F',
        marginBottom: '2%'
    },

    informationContent:{
        fontSize: 16,
        color: '#363636'
    }
})