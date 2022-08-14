import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './stack_navigation';
import TabNavigator from './tab_navigator';
import LoginRoute from './loginl_route';

const Stack = createStackNavigator();

function MainRoute() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginRoute'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={'LoginRoute'} component={LoginRoute} />       
                <Stack.Screen name={'TabBar'} component={TabNavigator} />
                <Stack.Screen name={'StackNavigator'} component={StackNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute;