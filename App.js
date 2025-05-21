import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './components/OnBoarding';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer linking={false}>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnBoarding}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          name="Account"
          component={Account}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


