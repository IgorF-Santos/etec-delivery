import React, { useState, useEffect } from 'react';
import { Text,View, SafeAreaView, Alert, StatusBar, FlatList } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

import MapStyle from '../../styles/map_styles';
import MapPlaces from '../../components/mapPlaces';
import { MapLocations } from './map_locations';

function Map(){

    {/* Script para ter acesso à localização atual do usuário */}
    {/* Script retirado da documentação do expo (https://docs.expo.dev/versions/latest/sdk/location/) */}
        const [location, setLocation] = useState(null);
        const [errorMsg, setErrorMsg] = useState(null);
    
        useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('É preciso fornecer acesso à localização para exibir os restaurantes');
                Alert('É preciso fornecer acesso à localização para exibir os restaurantes');
            return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta:  0.014,
                    longitudeDelta: 0.014
                });
        })();
        }, []);
            
    {/* Fim Script para ter acesso à localização atual do usuário */}


    {/* Componente utilizado para espaçamento entre os itens da FlatList */}
        const flatListSeparator = () => {
            return(
                <View style={{height: '100%', width: 20}}/>
            )
        }
    {/* Fim Componente */}


    return(
        <SafeAreaView style={MapStyle.container}>
            <StatusBar style="dark" backgroundColor='#f95e56' />
            <MapView 
                style={{width: '100%', height: '98%'}}
                region={location}
                userInterfaceStyle={'light'}
                showsUserLocation={true} // exibe o ícone da localização do usuário
                showsCompass={true} // exibe a ícone de bússola
                loadingEnabled={true} // ícone de loading
                loadingIndicatorColor={'#ff7c70'}
                zoomControlEnabled={false} // desativa ícones de zomm
                toolbarEnabled={false} // desativa os botões de redirecionamento para o Google Maps
            >

        {/* 
              o método 'map' serve para realizar  uma função em um array, e o retorno desse método é um novo array,
              sem modificar o array original.
              Aqui estamos dizendo que para cada item no array de objetos 'FoodArray', retorne o nosso componente 'ListaPedidos',
              preenchendo-o com as informações do array (foodName, foodprice e foodImage)
        */}
                {MapLocations.map((item) => {
                    return(
                        <Marker
                            key={item.id}
                            coordinate={item.coords}
                            pinColor={'orange'} 
                            /* 
                                * Cores aceitas em PinColor:

                                red (default)
                                tomato
                                orange
                                yellow
                                gold
                                wheat
                                tan
                                linen
                                green
                                blue / navy
                                aqua / teal / turquoise
                                violet / purple / plum
                                indigo
                            */
                           image={require('../../../assets/pin_icon.png')}
                        >
                            <Callout>
                                <View style={MapStyle.calloutContainer}>
                                    <Text style={MapStyle.calloutTitle}>{item.placeName}</Text>
                                    <View style={MapStyle.calloutInformationContainer}>
                                        <Text style={MapStyle.calloutLabel}>Endereço: </Text>
                                        <Text style={MapStyle.calloutDescription}>{item.placeAddress}</Text>
                                    </View>
                                    <View style={MapStyle.calloutInformationContainer}>
                                        <Text style={MapStyle.calloutLabel}>Telefone: </Text>
                                        <Text style={MapStyle.calloutDescription}>{item.placePhone}</Text>
                                    </View>
                                </View>
                            </Callout>
                        </Marker>
                    );
                })}
            </MapView>            

            <View style={{width: '100%', position: 'absolute', bottom: 60, height: 250, flex: 1, alignSelf: 'center', flexGrow: 1, paddingHorizontal: '2%'}}>

                <FlatList
                    data={MapLocations}
                    renderItem={({item}) => (
                        <MapPlaces
                            placeName={item.placeName}
                            placeAddress={item.placeAddress}
                            placePhone={item.placePhone}
                            placeStars={item.placeStars}
                            placeImage={item.placeImage}
                        />
                    )}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={flatListSeparator} // Espaço que separa cada item da flat list
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} // Esconde a barra de rolagem
                    progressViewOffset={8}
                />
    
            </View>
        </SafeAreaView>
    )
}

export default Map;
