import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
    
function Offers({foodName, foodPrice, foodImage, background}) {    
    return (                                      
        <TouchableOpacity 
            style={[OffersStyle.button, {backgroundColor: background, }]}
            activeOpacity={0.9}
        >
            <View  style={OffersStyle.imageContainer}>
                <Image source={foodImage} resizeMode='center' style={{width: '100%', height: '100%'}} />
            </View>
            <View style={OffersStyle.labelContainer}>
                <Text style={OffersStyle.priceLabel}>R$ {foodPrice}</Text>
                <Text style={OffersStyle.foodNameLbael}>{foodName}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

export default Offers;

const OffersStyle = StyleSheet.create({
    button: {
        width: 200,
        justifyContent: 'space-between',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
        backgroundColor: '#FFF',
        elevation: 8,
        shadowColor: '#363636',         
    },

    imageContainer: {
        width: 170,
        height: 160,                    
        alignSelf: 'flex-end',
        backgroundColor: '#FFF',
        elevation: 8,
        shadowColor: '#363636',                    
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },

    labelContainer: {
        alignSelf: 'flex-start',                    
        backgroundColor: '#FFF',
        padding: '4%',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 8,
        shadowColor: '#363636',
        width: '60%',
    },

    priceLabel:{
        fontSize: 18, 
        fontWeight: '500',
        color: '#4F4F4F',
        alignSelf: 'flex-end'
    },

    foodNameLbael: {
        fontSize: 16,
        fontWeight: '500',
        color: '#696969',
        alignSelf: 'flex-start'
    }
})