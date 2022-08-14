import React, {useState} from 'react';
import { View, Text, StatusBar, ScrollView, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignUpScreen(){        

    return(
        <KeyboardAvoidingView>
            <StatusBar style="dark" backgroundColor='#f95e56' />          
        </KeyboardAvoidingView>
    );
}

export default SignUpScreen;