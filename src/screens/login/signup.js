import React, {useState} from 'react';
import { View, Text, StatusBar, ScrollView, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SignupScreenStyle from '../../styles/signup_screen_style';
import CustomTextInput from '../../components/textInput';
import Button from '../../components/button';


function SignUpScreen(){    
    const navigation = useNavigation();
    const [userName, setUserName] = useState(null);
    const [userCpf, setUserCpf] = useState(null);
    const [userPhone, setUserPhone] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState(null);
    const [errors, setErrors] = useState({});

    const userData = {
        user_name: userName,
        user_cpf: userCpf,
        user_phone: userPhone,
        user_email: userEmail,
        user_password: userPassword
    }

    const handleError = (errorMessage, input) => {
        setErrors(prevState => ({...prevState, [input]: errorMessage}));
    };

    const validateUserData = () => {
        Keyboard.dismiss();
        let validData = true;

        if(!userName){
            handleError('Insira seu nome completo!', 'userName');
            validData = false;            
        }
        else if(Object.keys(userName).length < 3){
            handleError('Por favor, insira um nome válido!', 'userName');
            validData = false;  
        }        
        if(!userCpf){
            handleError('Insira o seu CPF!', 'userCpf');
            validData = false;
        }
        else if(Object.keys(userCpf).length < 11){
            handleError('Por favor, insira um CPF válido!', 'userCpf');
            validData = false;
        }
        if(!userPhone){
            handleError('Insira o seu número de telefone!', 'userPhone');
            validData = false;
        }
        else if(Object.keys(userPhone).length < 11){
            handleError('Por favor, insira um CPF válido!', 'userPhone');
            validData = false;
        }
        if(!userEmail){
            handleError('Insira o seu E-mail!', 'userEmail');
            validData = false;
        }
        else if(!userEmail.match(/\S+@\S+\.\S+/)){
            handleError('Insira um e-mail válido', 'userEmail');
            validData = false;
        } 
        if(!userPassword){
            handleError('Crie uma senha forte!', 'userPassword');
            validData = false;
        }
        else if(Object.keys(userPassword).length < 8){
            handleError('A senha deve conter no mínimo 8 caracteres!', 'userPassword');
            validData = false;
        }
        if(!userPasswordConfirmation){
            handleError('Confirme sua senha!', 'userPasswordConfirmation');
            validData = false;
        }
        else if((userPasswordConfirmation !== userPassword)){
            handleError('As senhas não coincidem!', 'userPasswordConfirmation');
            validData = false;
        }

        if(validData){
            createAccount();
        }
    }

    // Função para salvar os dados do usuário no AsyncStorage
    async function createAccount(){
        try{
            await AsyncStorage.setItem('userData', JSON.stringify(userData)); 
            navigation.replace('TabBar');            
        }
        catch(error){
            Alert.alert('Erro', 'Ocorreu um erro ao criar a conta!');
        }
    }

    return(
        <KeyboardAvoidingView style={SignupScreenStyle.container}>
            <StatusBar style="dark" backgroundColor='#f95e56' />
            <ScrollView endFillColor={'#FFF'} keyboardShouldPersistTaps={'always'}>      

                {/* Container Secundário */}
                <View style={{height: '100%', paddingBottom: '15%'}}>

                    {/* Início Header */}
                    <View style={SignupScreenStyle.header}>                            
                        <Text style={SignupScreenStyle.welcomeText}>Criar Conta</Text>
                    </View>
                    {/* Fim Header */}

                    {/* Início Conteúdo Principal */}
                    <View style={{marginTop: '10%',}}>                        
                                       
                        {/* Início Custom TextInput Components */}
                        <CustomTextInput
                            iconName={'email-outline'}
                            label={'Nome completo'}
                            keyboardType={'email-address'}
                            maxLength={80}
                            error={errors.userName}
                            onFocus={() => {
                                handleError(null, 'userName')
                            }}
                            onChangeText={userName => setUserName(userName)}                            
                        />
                        <CustomTextInput
                            iconName={'email-outline'}
                            label={'CPF'}
                            keyboardType={'phone-pad'}
                            maxLength={11}
                            error={errors.userCpf}
                            onFocus={() => {
                                handleError(null, 'userCpf')
                            }}
                            onChangeText={(userCpf) => setUserCpf(userCpf)}
                        />
                        <CustomTextInput
                            iconName={'email-outline'}
                            label={'Telefone'}
                            keyboardType={'phone-pad'}
                            maxLength={11}
                            error={errors.userPhone}
                            onFocus={() => {
                                handleError(null, 'userPhone')
                            }}
                            onChangeText={(userPhone) => setUserPhone(userPhone)}
                        />
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
                         <CustomTextInput
                            iconName={'lock-outline'}
                            label={'Confirme sua senha'}
                            keyboardType={'default'}
                            maxLength={20}
                            password
                            error={errors.userPasswordConfirmation}
                            onFocus={() => {
                                handleError(null, 'userPasswordConfirmation')
                            }}
                            onChangeText={(userPasswordConfirmation) => setUserPasswordConfirmation(userPasswordConfirmation)}
                        />
                        {/* Fim Custom TextInput Components */}
                        
                        <Button
                            label='Entrar'
                            onPress={validateUserData}
                            iconName='location-enter'
                        />
                        
                        <Text
                            style={SignupScreenStyle.secondaryLabel}
                            onPress= {() => {
                                navigation.navigate('Login Screen');
                                Keyboard.dismiss();
                            }}
                        >
                            Já tem uma conta? Faça login
                        </Text>                             
                    </View>
                    {/* Início Conteúdo Principal */}

                </View>
                {/* Fim Container Secundário */}

            </ScrollView>           
        </KeyboardAvoidingView>
    );
}

export default SignUpScreen;