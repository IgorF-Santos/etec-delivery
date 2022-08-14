import React, {useState} from 'react';
import { View, Text, StatusBar, Keyboard, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreenStyle from '../../styles/login_screen_style';
import Button from '../../components/button';
import CustomTextInput from '../../components/textInput';

function LoginScreen(){    
    const navigation = useNavigation();    
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [errors, setErrors] = useState({});
    
    const handleError = (errorMessage, input) => {
        setErrors(prevState => ({...prevState, [input]: errorMessage}));
    };

    const validateUserData = () => {
        Keyboard.dismiss();
        let validData = true;
        if(!userEmail){
            handleError('Insira o seu E-mail!', 'userEmail');
            validData = false;
        }
        else if(!userEmail.match(/\S+@\S+\.\S+/)){
            handleError('Insira um e-mail válido', 'userEmail');
            validData = false;
        } 
        if(!userPassword){
            handleError('Insira sua senha!', 'userPassword');
            validData = false;
        }

        if(validData){
            doLogin();
        }
    }

    // Função para ercuperar os dados do usuário salvos no AsyncStorage
    async function doLogin(){
        try{
            let jsonSavedUserData = await AsyncStorage.getItem('userData');
            let parsedSavedUserData = JSON.parse(jsonSavedUserData);
        
            if(userEmail === parsedSavedUserData.user_email && userPassword === parsedSavedUserData.user_password){
                navigation.replace('TabBar');
            }
            else{
                Alert.alert('Erro', 'Usuário ou senha incorretos!');
            }
        }
        catch(error){
            Alert.alert('Erro', 'Ocorreu um erro ao realizar o login!');
        }
    }

    return(
        <KeyboardAvoidingView style={LoginScreenStyle.container}>
            <StatusBar style="dark" backgroundColor='#f95e56' />
            <ScrollView endFillColor={'#FFF'} keyboardShouldPersistTaps={'always'}>      

                {/* Container Secundário */}
                <View style={{height: '100%', paddingBottom: '15%'}}>

                    {/* Início Header */}
                    <View style={LoginScreenStyle.header}>                            
                        <Text style={LoginScreenStyle.welcomeText}>Bem-vindo (a)</Text>
                    </View>
                    {/* Fim Header */}

                    {/* Início Conteúdo Principal */}
                    <View style={{marginTop: '10%',}}>
                        <Text style={LoginScreenStyle.mainLabel}>Acesse sua conta</Text>

                        {/* Início Custom TextInput Components */}
                        <CustomTextInput
                            iconName={'email-outline'}
                            label={'E-mail'}
                            keyboardType={'email-address'}
                            maxLength={50}
                            error={errors.userEmail}
                            onFocus={() => {
                                handleError(null, 'userEmail')
                            }}
                            onChangeText={(userEmail) => setUserEmail(userEmail)}
                        />
                        <CustomTextInput
                            iconName={'lock-outline'}
                            label={'Senha'}
                            keyboardType={'default'}
                            maxLength={20}
                            password
                            error={errors.userPassword}
                            onFocus={() => {
                                handleError(null, 'userPassword')
                            }}
                            onChangeText={(userPassword) => setUserPassword(userPassword)}
                        />
                        {/* Fim Custom TextInput Components */}
                        
                        <Button
                            label='Entrar'
                            onPress={validateUserData}
                            iconName='location-enter'
                        />
                        
                        <Text
                            style={LoginScreenStyle.secondaryLabel}
                            onPress= {() => {                              
                              navigation.navigate('SignUp Screen');
                                Keyboard.dismiss();
                            }}
                        >
                            Nao tem uma conta? Criar conta
                        </Text>                             
                    </View>
                    {/* Início Conteúdo Principal */}

                </View>
                {/* Fim Container Secundário */}

            </ScrollView>           
        </KeyboardAvoidingView>
    );
}
export default LoginScreen;