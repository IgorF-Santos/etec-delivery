import React, {useEffect} from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import dos components
import HomeStyle from '../../styles/home_style';
import FoodOptions from '../../components/food_options';
import Offers from '../../components/offers';
import Header from '../../components/header';

function Home() {   
  const navigation = useNavigation();

  useEffect(
    () =>
      navigation.addListener(() => {
        //Isso impede que o usuário navegue para a tela anterior utilizando os botões do aparelho
        e.preventDefault();                  
      }),
    [navigation]
  );
   
  return (
    <SafeAreaView style={HomeStyle.container}>
    <StatusBar style="dark" backgroundColor='#f95e56' />

    {/* Header */}
      <Header />
    {/* Fim Header */}

    {/* Label Principal */}
      <View style={HomeStyle.mainLabelContainer}>
        <Text style={HomeStyle.mainLabel}>Comidas saborosas para você</Text>
      </View>
    {/* Fim Label Principal */}

    {/* Container Sugestões */}
      <View style={HomeStyle.foodMainContainer}>
        <View style={HomeStyle.foodContainer}>
            <Text style={HomeStyle.foodContainerLabel}>
              Lanchinhos rápidos
            </Text>
          <View style={HomeStyle.foodButtons}>
            <FoodOptions
              iconName={'cake-variant-outline'}
              iconLabel={'Doces'}
            />
            <FoodOptions
              iconName={'glass-wine'}
              iconLabel={'Bebidas'}
            />
            <FoodOptions
              iconName={'hamburger'}
              iconLabel={'Salgados'}
            />                           
          </View>
        </View>              
      </View>
    {/* Fim Container Sugestões */}

    {/* Container offer */}
    <View style={HomeStyle.offerMainContainer}>
      <ScrollView
        contentContainerStyle={{ padding: '2%', }}
        horizontal={true}
        showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem
        pagingEnabled={true}
        snapToInterval={200} //Permite uma leve pausa a cada item -- o número entre chaves deve ser igual ao tamanho de cada componente dentro da scrollview
      >

        <Offers
          foodName={'Hamburguer'}
          foodPrice = {'6,99'}
          foodImage = {require('../../../assets/burger.png')}
          background={'#ef3038'}
        />
        <Offers
          foodName={'Pizza'}
          foodPrice = {'28,99'}
          foodImage = {require('../../../assets/pizza.png')}
          background={'#f95e56'}
        /> 
        <Offers
          foodName={'Sushi'}
          foodPrice = {'4,99'}
          foodImage = {require('../../../assets/sushi.png')}
          background={'#f95e56'}
        /> 
        <Offers
          foodName={'Espetinhos'}
          foodPrice = {'3,99'}
          foodImage = {require('../../../assets/meat.png')}
          background={'#ffa296'}
        /> 
        <Offers
          foodName={'Coxinhas'}
          foodPrice = {'1,99'}
          foodImage = {require('../../../assets/coxinhas.png')}
          background={'#ffc2b8'}
        /> 
        <Offers
          foodName={'Hot Dog'}
          foodPrice = {'4,99'}
          foodImage = {require('../../../assets/hot_dog.png')}
          background={'#fcc9b9'}
        /> 
        <Offers
          foodName={'Batatas Fritas'}
          foodPrice = {'8,99'}
          foodImage = {require('../../../assets/french_fries.png')}
          background={'#ffe0db'}
        /> 
        <Offers
          foodName={'Giga Combo'}
          foodPrice = {'18,99'}
          foodImage = {require('../../../assets/family_combo.png')}
          background={'#ffe4e1'}
        /> 
       
      </ScrollView>
    </View>
    {/* Fim Container offer */}

    {/* Footer */}
      {/* <View style={HomeStyle.footer} /> */}
    {/* Footer */}
    
  </SafeAreaView>
);
} 

export default Home;