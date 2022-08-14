import { StyleSheet } from 'react-native';

const MapStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },

    calloutContainer:{
        padding: 5
    },

    calloutTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#f95e56',
        marginBottom: 12
    },

    calloutInformationContainer:{
        flexDirection: 'row',
        marginBottom: 8
    },

    calloutLabel:{
        fontWeight: '600',
        color: '#4F4F4F'
    },

    calloutDescription:{
        color: '#696969',
        fontWeight: '500'
    }
})

export default MapStyle;