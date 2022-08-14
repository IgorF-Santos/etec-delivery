import { View, SafeAreaView, StatusBar, ScrollView } from 'react-native';

import PedidosStyle from '../../styles/pedidos_style';
import Header from '../../components/header';
import ListaPedidos from '../../components/lista_pedidos';
import { FoodArray } from './food_array';

function Pedidos() {
  return (
    <SafeAreaView style={PedidosStyle.container}>      
      <StatusBar style="dark" backgroundColor='#f95e56' />

      {/* Header */}
        <Header />
      {/* Fim Header */}

      <View style={PedidosStyle.pedidosContainer}>
        <ScrollView
          contentContainerStyle={{paddingTop: '2%'}}
          showsVerticalScrollIndicator={false} // não exibir a barra de rolagem
        >
          {
            /* 
              o método 'map' serve para realizar  uma função em um array, e o retorno desse método é um novo array,
              sem modificar o array original.
              Aqui estamos dizendo que para cada item no array de objetos 'FoodArray', retorne o nosso componente 'ListaPedidos',
              preenchendo-o com as informações do array (foodName, foodprice e foodImage)
            */
          }
          {FoodArray.map((item) => {
            return(            
              <ListaPedidos 
                key={item.id} // chave de identificação para cada objeto do array
                foodName={item.foodName}
                foodPrice={item.foodPrice}
                foodImage={item.foodImage}
              />
            );
          })
          }

        </ScrollView>
      </View>

    </SafeAreaView>
  );
} 

export default Pedidos;