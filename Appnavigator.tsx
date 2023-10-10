// Por ejemplo, en AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './assets/src/home/Home';
import Panicbutton from './assets/src/panico/Panicbutton';
import Login from './assets/src/login/login';
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="PanicButton" component={Panicbutton} />
        {/* ... otras pantallas según tus necesidades */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
