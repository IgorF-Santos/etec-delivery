import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',      
    },

    mainLabelContainer:{      
      marginTop: 20,
      marginLeft: 15,
      alignSelf: 'flex-start',
      flexWrap: 'nowrap',
      maxWidth: '70%'
    },

    mainLabel: {
      fontSize: 28,
      fontWeight: '500',
      color: '#1c1c1c'
    },

    foodMainContainer: {      
      alignItems: 'center',
      justifyContent: 'space-around',
      //height: 300,
      marginTop: '8%',
    },

    foodContainer:{
      backgroundColor: '#ffccc4',
      width: '88%',
      paddingVertical: 4,
      borderRadius: 20,
      height: 112,
      elevation: 8,
      shadowColor: '#363636'
    },

    foodContainerLabel:{
      fontSize: 16,
      color: '#4F4F4F',
      fontWeight: '500',
      marginLeft: 20,
      marginBottom: 4
    },

    foodButtons:{
      flexDirection: 'row',
      justifyContent: 'space-around'
    },

    offerMainContainer:{      
      height: 280,
      marginTop: '8%',      
    },

    ofertaContainer: {
      height: '100%',
      width: '55%',
      borderWidth: 1,
    },

  });

export default HomeStyle;