import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
    
function MapPlaces({placeName, placeStars, placeAddress, placePhone, placeImage}) {
    const [heartIcon, setHeartIcon] = useState('heart-outline');
    
    return(
        <TouchableOpacity
            style={MapPlacesStyle.mainContainer}
            activeOpacity={0.9}    
        >
            <View style={MapPlacesStyle.imageContainer}>
                <Image source={placeImage} resizeMode='cover' style={{width: '100%', height: '100%'}} />
                <TouchableOpacity
                    style={MapPlacesStyle.heartIconContainer}
                    activeOpacity={0.8}

                    // Quando clicarmos no ícone, ele mudará de um coração vazio para um coração preenchido
                    onPress={() => heartIcon === 'heart-outline' ? setHeartIcon('heart') : setHeartIcon('heart-outline')}
                >
                    <Ionicons name={heartIcon} color={'#f95e56'} size={30} />
                </TouchableOpacity>
            </View>
            
            <View>
                <View style={MapPlacesStyle.placeTitleContainer}>
                    <Text style={MapPlacesStyle.placeTitle}>{placeName}</Text>     
                    <View style={MapPlacesStyle.starsContainer}>

                        {/* Length define a quantidade de vezes que o elemento será exibido */}
                        {Array.from({ length: placeStars }).map((_, index) => (
                            <Ionicons name={'star'} color={'#FFA500'} size={18} key={index}/>
                        ))}
                        
                    </View>  
                </View>
                <View style={MapPlacesStyle.placeDescriptionContainer}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={MapPlacesStyle.descriptionTitle}>Endereço: </Text>
                            <Text style={MapPlacesStyle.descriptionLabel}>{placeAddress}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={MapPlacesStyle.descriptionTitle}>Telefone: </Text>
                            <Text style={MapPlacesStyle.descriptionLabel}>{placePhone}</Text>
                        </View>
                    </View>                               
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default MapPlaces;

const MapPlacesStyle = StyleSheet.create({
    mainContainer:{
        width: 300,
        height: '95%',
        backgroundColor: '#FFF',
        elevation: 5,
        shadowColor: '#363636',
        borderRadius: 20,                
        overflow: 'hidden', 
    },

    imageContainer:{
        width: '96%',
        height: '60%',                                
        alignSelf:'center',
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#363636',
        backgroundColor: '#FFF',
        marginVertical: '3%',
    },

    heartIconContainer:{
        backgroundColor: '#e5e4e2',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: '#363636',
        padding: 10,
        position: 'absolute',
        top: 0,
        alignSelf: 'flex-end',        
    },

    placeTitleContainer:{
        marginHorizontal: '4%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '4%'
    },

    placeTitle:{
        fontSize: 16,
        fontWeight: '500',
        color: '#f95e56'
    },

    starsContainer:{
        flexDirection:'row',
        alignSelf: 'flex-end'
    },

    placeDescriptionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '4%'
    },

    descriptionTitle:{
        fontWeight: '600',
        color: '#4F4F4F'
    },

    descriptionLabel:{
        color: '#696969',
        fontWeight: '500'
    }
})