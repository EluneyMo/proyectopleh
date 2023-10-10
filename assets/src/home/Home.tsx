import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../../../firebase/firebase';
import Botonpanico from './botonpanico';
import React from 'react';

import { View, Text, Button as RNButton, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './types';
import AppNavigator from "../../../Appnavigator"
const auth = getAuth(appFirebase);

Type '["Preguntas"]' is not assignable to type '[screen: "Login"]'.
        Type '"Preguntas"' is not assignable to type '"Login"'.
  Overload 2 of 2, '(options: { key: string; params?: { correoUsuario: string; } | undefined; merge?: boolean | undefined; } | { name: "Home"; key?: string | undefined; params: { correoUsuario: string; }; merge?: boolean | undefined; } | { ...; } | { ...; } | { ...; } | { ...; }): void', gave the following error.
    Argument of type 'string' is not assignable to parameter of type '{ key: string; params?: { correoUsuario: string; } | undefined; merge?: boolean | undefined; } | { name: "Home"; key?: string | undefined; params: { correoUsuario: string; }; merge?: boolean | undefined; } | { ...; } | { ...; } | { ...; } | { ...; }'.ts(2769)interface HomeProps {
  route: RouteProp<RootStackParamList, "Home">;
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  const { correoUsuario } = route.params || {};

  const handlePress = () => {
    navigation.navigate('Panico');
  };
  const presionar=()=>{
    //funciondebotondeabi
    navigation.navigate('Preguntas');
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Después de cerrar sesión, navegar a la pantalla de inicio de sesión
      navigation.navigate('Login'); // Ajusta la ruta según tu estructura
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido {correoUsuario}</Text>
      <RNButton title="Cerrar Sesión" onPress={handleSignOut} />
      <Botonpanico title="BOTONPANICO" onPress={handlePress} />
      <Button title='Preguntas' onPress={presionar}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Home;
