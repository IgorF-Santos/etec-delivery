import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'
    
function CustomTextInput({iconName, label, password, keyboardType, maxLength, error, onFocus=() => {}, onChangeText=() => {}}) {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassoword, setHidePassword] = useState(true);
    return (  
            <View style={TextInputStyle.mainContainer}>
                <View
                    style={[
                        TextInputStyle.inputContainer,                    
                        error ? TextInputStyle.errorBorder : 
                        isFocused ? TextInputStyle.focusedBorder : 
                        TextInputStyle.regularBorder                    
                    ]}
                >
                    <MaterialCommunityIcons name={iconName} color={'#f95e56'} size={28} />
                    <TextInput
                        placeholder={label}
                        style={TextInputStyle.input}
                        selectionColor='#f95e56'
                        maxLength={maxLength}
                        secureTextEntry={hidePassoword}
                        keyboardType={keyboardType}
                        placeholderTextColor={'#808080'}

                        // Função para quando o input receber foco, ou seja, quando for pressionado
                        onFocus={() => {
                            onFocus();
                            setIsFocused(true);
                        }}

                        // Função para quando o input perder o foco
                        onBlur={() => {                            
                            setIsFocused(false);
                        }}

                        // Função que é disparada todas as vezes em que o valor do input for alterado
                        onChangeText={onChangeText}
                    />

                    {/* 
                        Ícone para ver a senha
                        Só será exibido caso o parâmetro "password" seja verdadeiro/chamado quando o componente for importado
                    */}
                    {password &&
                        <MaterialCommunityIcons
                            name={hidePassoword ? 'eye-outline' : 'eye-off-outline'}
                            color={'#f95e56'}
                            size={28}
                            onPress={() => setHidePassword(!hidePassoword)}
                        />
                    }
                </View>

                    {/* 
                        Mensagem de erro
                        Só será exibida caso o parâmetro "errorS" seja verdadeiro/chamado quando o componente for importado
                    */}
                    {error && (
                        <Text style={TextInputStyle.errorLabel}>
                           {error}
                        </Text>
                    )}
            </View>
    );
}
export default CustomTextInput;


const TextInputStyle = StyleSheet.create({
    mainContainer:{
        marginBottom: '5%',
        width: '80%',
        alignSelf: 'center',
    },

    inputContainer:{
        width: '100%',                        
        height: 55,
        flexDirection: 'row',
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#363636',
        backgroundColor: '#FFFAFA',
        paddingHorizontal: '2%',
        alignItems: 'center',
    },

    input:{
        width: '80%',
        height: '100%',
        marginHorizontal: '1%',
        fontSize: 16,
        color: '#4F4F4F',
    },

    errorBorder: {
        borderWidth: 1.2,
        borderColor:'red'
    },

    focusedBorder:{
        borderBottomWidth: 1.2,
        borderBottomColor: '#f95e56'
    },

    regularBorder: {
        borderWidth: 0.4,
        borderColor:'#FFFAFA'
    },

    errorLabel:{
        color: 'red',
        fontSize: 12,
        marginLeft: '4%',
        marginTop: '0.8%'
    }
})