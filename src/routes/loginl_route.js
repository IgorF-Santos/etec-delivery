import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from '../screens/login/index';
import LoginScreen from '../screens/login/login';
import SignUpScreen from '../screens/login/signup'

const Stack = createStackNavigator();

function LoginRoute() {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={'InitialScreen'} component={InitialScreen} />
            <Stack.Screen name={'Login Screen'} component={LoginScreen} />
            <Stack.Screen name={'SignUp Screen'} component={SignUpScreen} />
        </Stack.Navigator>
    )
}

export default LoginRoute;