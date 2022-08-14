import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
    
function ListaPedidos({foodName, foodPrice, foodImage}) {
    // Será utilizado para aumentar ou diminuir a quantidade do pedido
    const [addOrder, setAddOrder] = useState(0);

    return (                                      
        <TouchableOpacity 
            style={ListaPedidosStyle.mainContainer}
            activeOpacity={0.9}
          >
            <View style={ListaPedidosStyle.imageContainer}>
              <Image source={foodImage} resizeMode='center' style={{width: '100%', height: '100%'}} />
            </View>

            <View style={ListaPedidosStyle.mainContent}>              
              <Text style={ListaPedidosStyle.foodName}>{foodName}</Text>
              <Text style={ListaPedidosStyle.foodPrice}>R$ {foodPrice}</Text>

              <View style={ListaPedidosStyle.buttonsOrderContainer}>
                <TouchableOpacity activeOpacity={0.8} style={ListaPedidosStyle.buttonOrder}
                  onPress={() => {
                    if(addOrder > 0 && addOrder <= 20){
                      setAddOrder(addOrder - 1);
                    }
                  }}
                >
                  <Ionicons name={'remove-circle-outline'} color={'#ff7c70'} size={36} />
                </TouchableOpacity>

                <Text style={ListaPedidosStyle.orderUnityLabel}>{addOrder}</Text>

                <TouchableOpacity activeOpacity={0.8} style={ListaPedidosStyle.buttonOrder}
                  onPress={() => {
                    if(addOrder >= 0 && addOrder < 20){
                      setAddOrder(addOrder + 1);                      
                    }
                      
                    
                  }}                  
                >
                  <Ionicons name={'add-circle-outline'} color={'#ff7c70'} size={36} />
                </TouchableOpacity>
              </View>
            </View>
        </TouchableOpacity>
        
    );
}

export default ListaPedidos;

const ListaPedidosStyle = StyleSheet.create({
  mainContainer:{
    width: '92%',
    height: 110,              
    backgroundColor: '#FFF',
    elevation: 5,
    shadowColor: '#363636',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: '1%',
    paddingLeft: '1%',
    marginVertical: '4%',
    flexDirection: 'row'
  },

  imageContainer:{                
    alignSelf: 'flex-start',
    backgroundColor: '#ff7c70',
    borderRadius: 50,
    elevation: 8,
    shadowColor: '#363636',
    width: 100,
    height: 100,
    elevation: 4,
    shadowColor: '#363636'
  },

  mainContent:{
    width: '60%',
    marginLeft: '5%',
  },

  foodName:{
    fontSize: 18,
    fontWeight: '600',
    color: '#4F4F4F'
  },

  foodPrice:{
    fontSize: 16,
    fontWeight: '500',
    color: '#ff7c70',
    marginTop: 5
  },

  buttonsOrderContainer:{
    flexDirection: 'row',
    width: '55%',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  buttonOrder:{
    elevation: 4,
    shadowColor: '#363636'
  },

  orderUnityLabel:{
    fontSize: 20,
    fontWeight: '500',
    color: '#4F4F4F'
  }
})