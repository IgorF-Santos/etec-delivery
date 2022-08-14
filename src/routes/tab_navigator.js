import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home/index';
import Pedidos from '../screens/pedidos/index';
import Map from '../screens/map';

const Tab = createBottomTabNavigator();

function TabNavigator(){
    return(      
            <Tab.Navigator   
            screenOptions={{
                    tabBarStyle:{                         
                        height: 60,                        
                        backgroundColor: '#FFF',                        
                        bottom: '3%',
                        width: '90%',
                        alignSelf: 'center',
                        elevation: 8,
                        shadowColor: '#363636',
                        justifyContent: 'center',
                        borderRadius: 50,                        
                    },
                    tabBarActiveTintColor: '#f95e56',
                    tabBarInactiveTintColor: '#A9A9A9',
                    headerShown: false
                }}                                              
            >
                <Tab.Screen 
                    name="Home"                    
                    component={Home}
                    options={{                        
                        tabBarIcon: ({ color, focused }) => {
                            return(
                                <View style={{height: '100%', marginTop: focused? '10%' : '2%', justifyContent: 'center'}}>
                                    <Ionicons name={focused? "home" : 'home-outline'} color={color} size={focused? 30 : 26} />
                                </View>                          
                            );
                        },
                        tabBarLabel: ({focused}) => {
                            return(
                                <Text style={{color:'#A9A9A9', fontSize:12, marginBottom: '4%'}}>{focused? "" : "Início"}</Text>
                            );
                        },                        
                    }}
                />
                <Tab.Screen 
                    name="Locais"                    
                    component={Map}
                    options={{                        
                        tabBarIcon: ({ color, focused }) => {
                            return(
                                <View style={{height: '100%', marginTop: focused? '10%' : '2%', justifyContent: 'center'}}>
                                    <Ionicons name={focused? "navigate" : 'navigate-outline'} color={color} size={focused? 30 : 26} />
                                </View>
                            );
                        },
                        tabBarLabel: ({focused}) => {
                            return(
                                <Text style={{color:'#A9A9A9', fontSize:12, marginBottom: '4%'}}>{focused? "" : "Locais"}</Text>
                            );
                        },                        
                    }}
                />
                <Tab.Screen 
                    name="Pedidos"
                    component={Pedidos}
                    options={{                        
                        tabBarIcon: ({ color, focused }) => {
                            return(
                                <View style={{height: '100%', marginTop: focused? '10%' : '2%', justifyContent: 'center'}}>
                                    <Ionicons name={focused? "fast-food" : 'fast-food-outline'} color={color} size={focused? 30 : 26} />                  
                                </View>              
                            );
                        },                        
                        tabBarLabel: ({focused, color}) => {
                            return(                                
                                <Text style={{color:'#A9A9A9', fontSize:12, marginBottom: '4%'}}>{focused? "" : "Pedidos"}</Text>
                            );
                        },
                    }}
                />
            </Tab.Navigator>        
    )
}

export default TabNavigator;