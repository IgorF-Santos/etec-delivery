import { StyleSheet } from 'react-native';

const AccountStyle = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor:' #FFF',        
    },

    header: {
        width: '100%',        
        justifyContent: 'space-between',
        paddingHorizontal: '4%',
        height: 200,
        backgroundColor: '#f95e56',
        borderBottomRightRadius: 50,
        elevation: 8,
        shadowColor: '#363636',
        overflow: 'hidden'
    },

    topButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }, 

    backButton:{        
        marginTop: 20, 
    },

    accountIconContainer: {
        position: 'absolute',
        right: -40,
        top: 70
    },

    welcomeTextContainer:{        
        alignSelf: 'flex-start',
        marginBottom: '4%'
    },

    welcomeText: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: '600'
    },

    userInformationContainer:{
        marginTop: '2%',        
    },

    versionContainer:{
        alignSelf: 'center',
        marginTop: '60%'
        
    },
    versionLabel:{
        fontSize: 14,
        fontWeight: '500',
        color: '#4F4F4F'
    }
})


export default AccountStyle;