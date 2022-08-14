import React, {useEffect, useState} from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import AccountStyle from '../../styles/my_account_styles';
import UserInformation from '../../components/user_information';
import {expo} from '../../../app.json';

function MyAccount(){
    const navigation = useNavigation();
    const [userData, setUserData] = useState('')

    // Função para carregar os dados do usuário do AsyncStorage
    useEffect(() => {        
        const doLogin = async () => {
            try{
                let jsonSavedUserData = await AsyncStorage.getItem('userData');
                let parsedSavedUserData = JSON.parse(jsonSavedUserData);               
                setUserData(parsedSavedUserData);
            }
            catch(error){
                Alert.alert('Erro', 'Ocorreu um erro ao carregar seus dados!');
            }
        };
      
        doLogin();
      }, [])

    return(
        <SafeAreaView style={AccountStyle.container}>
            <StatusBar style="dark" backgroundColor='#f95e56' />
            <View style={AccountStyle.header}>
                <View style={AccountStyle.topButtonsContainer}>            
                    <TouchableOpacity 
                        style={AccountStyle.backButton}
                        activeOpacity={0.6}
                        onPress= {() => {navigation.navigate('TabBar')}}
                    >
                        <Ionicons name={"arrow-undo"} color={'#FFF'} size={28} />
                    </TouchableOpacity>
                    <View style={AccountStyle.accountIconContainer}>
                        <Ionicons name={"person-circle-outline"} color={'#FFF'} size={160} />
                    </View>
                </View>
                <View style={AccountStyle.welcomeTextContainer}>
                    <Text style={AccountStyle.welcomeText}>Olá, Usuário</Text>
                </View>
            </View>
            <View style={AccountStyle.userInformationContainer}>
               <UserInformation 
                    informationLabel={'Nome'}
                    informationContent={userData.user_name}
                    iconName={'person'}
               />
               <UserInformation 
                    informationLabel={'CPF'}
                    informationContent={userData.user_cpf}
                    iconName={'reorder-three'}
               />
               <UserInformation 
                    informationLabel={'Telefone'}
                    informationContent={userData.user_phone}
                    iconName={'call'}
               />

                <UserInformation 
                    informationLabel={'E-mail'}
                    informationContent={userData.user_email}
                    iconName={'mail'}
               />
            </View>

            <View style={AccountStyle.versionContainer}>
                <Text style={AccountStyle.versionLabel}>Versão {expo.version}</Text>
            </View>
        </SafeAreaView>
    );
}

export default MyAccount;