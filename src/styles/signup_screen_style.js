import { StyleSheet } from 'react-native';

const SignUpScreenStyle = StyleSheet.create({
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

    welcomeText:{
        color: '#FFF',
        fontWeight: '500',
        fontSize: 24,
        marginBottom: '6%',
        alignSelf: 'flex-end'
    },

    mainLabel:{
        color: '#4F4F4F',
        fontWeight: '500',
        fontSize: 20,
        alignSelf: 'center',
        marginRight: '5%',
        marginBottom: '10%'
    },

    secondaryLabel:{
        color: '#4F4F4F',
        fontWeight: '500',
        fontSize: 14,
        marginTop: '5%',
        alignSelf: 'center'
    }
});

export default SignUpScreenStyle;