import React, {useEffect} from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//import HomeStyle from '../../styles/home_style';

function Home() {  
  return (
    <SafeAreaView>
      <StatusBar style="dark" backgroundColor='#f95e56' />
    </SafeAreaView>
  );
} 

export default Home;