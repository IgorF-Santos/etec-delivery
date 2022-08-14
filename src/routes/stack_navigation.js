import { createStackNavigator } from '@react-navigation/stack';

import MyAccount from '../screens/my_account/index';

const Stack = createStackNavigator();

function StackNavigator() {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name={'Minha Conta'} component={MyAccount} />
        </Stack.Navigator>
    )
}

export default StackNavigator;