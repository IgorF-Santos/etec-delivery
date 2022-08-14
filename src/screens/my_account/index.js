import React, {useEffect, useState} from 'react';
import { Text, View, SafeAreaView, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


function MyAccount(){

    return(
        <SafeAreaView>
            <StatusBar style="dark" backgroundColor='#f95e56' />           
        </SafeAreaView>
    );
}

export default MyAccount;