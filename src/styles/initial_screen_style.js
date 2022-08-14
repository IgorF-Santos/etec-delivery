import { StyleSheet } from 'react-native';

const InitialScreenStyle = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex: 1,        
    },

    header:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        height: 100,
        backgroundColor: '#f95e56',
        borderBottomRightRadius: 80,
        elevation: 15,
        shadowColor: '#363636'
    },

    footer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        height: 100,
        backgroundColor: '#f95e56',
        borderTopLeftRadius: 80,
        elevation: 15,
        shadowColor: '#363636',
        position: 'absolute',
        bottom: 0
    },

    mainContent:{
        alignSelf: 'center',
        justifyContent: 'center',
        width: '80%',
        justifyContent: 'space-around',
        marginVertical: '50%'
    },

    mainLabel:{
        color: '#ef3038',
        fontWeight: '500',
        fontSize: 28
    },

    secondaryLabel:{
        color: '#363636',
        fontWeight: '500',
        fontSize: 26
    },

    entryButton:{
        backgroundColor:'#f95e56',                        
        alignSelf: 'flex-end',
        alignItems: 'center',
        padding: '3%',
        borderRadius: 50,
        elevation: 5,
        shadowColor: '#363636',
        marginTop: '15%'
    }
});

export default InitialScreenStyle;