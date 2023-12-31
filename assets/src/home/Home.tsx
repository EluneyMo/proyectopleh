import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../../../firebase/firebase';
import Botonpanico from './botonpanico';
import React, {useState, useEffect} from 'react';
import { DocumentData, DocumentReference, getFirestore, doc, setDoc, getDoc, collection } from 'firebase/firestore';
import { TextInput, Modal, View, Text, Button as RNButton, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './types';
const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);
interface HomeProps {
  route: RouteProp<RootStackParamList, "PLEH">;
  navigation: StackNavigationProp<RootStackParamList, 'PLEH'>;
}

const Home: React.FC<HomeProps> = ({ route, navigation }) => {
  const { correoUsuario } = route.params || {};
  const [modalVisible, setModalVisible] = useState(false);
  const [contacto, setContacto] = useState('');
  useEffect(() => {
    const verificarContacto = async () => {
      try {
        if (auth.currentUser && !auth.currentUser.isAnonymous) {
          const userCollection = collection(db, 'usuarios');
          const userDocRef = doc(userCollection, auth.currentUser.uid);

          const userDocSnapshot = await getDoc(userDocRef);
          if (!userDocSnapshot.exists() || !userDocSnapshot.data()?.contacto) {
            setModalVisible(true);
          }
        }
      } catch (error) {
        console.error('Error al verificar el contacto:', error);
      }
    };

    verificarContacto();
  }, [auth.currentUser]);

  
  const handlePress = () => {
    navigation.navigate('Panico');
  };

  const presionar = () => {
    navigation.navigate('Preguntas' as never);
  };

  const usuarioCambio = () => {
    navigation.navigate('Usuario' as never);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  };

  const handleGuardarContacto = async () => {
    try {
      if (auth.currentUser) {
        const userCollection = collection(db, 'numeros');
        const userDoc = doc(userCollection, auth.currentUser.uid);
        await setDoc(userDoc, { contacto }, { merge: true });
        setModalVisible(false);
      } else {
        console.error('Usuario no autenticado');
      }
    } catch (error) {
      console.error('Error al guardar el contacto en Firebase:', error);
    }
  };
  const expertos=()=>{
    navigation.navigate("Expertos" as never);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText} >Bienvenido {correoUsuario}</Text>
  
      <div style={styles.divblanco}>
      <Text style={styles.Preguntastext}>  Encuntra expertos para acesorar tu caso  </Text>
      </div>
      <TouchableOpacity onPress={expertos
      } style={styles.Preguntas}>
              <Text style={styles.buttonText}>Expertos</Text>
      </TouchableOpacity>

      

      <TouchableOpacity onPress={handlePress} style={styles.panic}>
      <Image 
       source={require('../../img/logo-boton.png')}
       style={styles.botonpanico}
       resizeMode="contain" />
      </TouchableOpacity>
      <div style={styles.divblanco}>
      <Text style={styles.Preguntastext}> Mantente informado </Text>
      </div>
      
      <TouchableOpacity onPress={presionar} style={styles.Preguntas}>
              <Text style={styles.buttonText}>Informacion</Text>
      </TouchableOpacity>
      <div style={styles.divblanco}>
      <Text style={styles.Preguntastext}>  Mira tu usuario aqui  </Text>
      </div>
      <TouchableOpacity onPress={usuarioCambio} style={styles.Preguntas}>
              <Text style={styles.buttonText}>Usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignOut} style={styles.botonpreguntas}>
              <Text style={styles.buttonText}>Cerrar session</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Ingrese un número de contacto:</Text>
            <TextInput
              style={styles.input}
              placeholder="Número de contacto"
              onChangeText={(text) => setContacto(text)}
            />
            <TouchableOpacity onPress={handleGuardarContacto} style={styles.button}>
              <Text style={styles.buttonText}>Guardar cotacto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    <Text style={styles.footer}>Esta aplicacion fue desarrollada durante el trasncurso del año por Eluney Morales, Levilla Abril, Abigail Mercado, Alen Salazar y Juan Molina para ayudar a las victimas de abuso</Text>
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
    fontSize: 60,
    marginBottom: 20,
  },
  panic:{
    height:70,
    width:70,
    alignItems:"flex-end",
    alignSelf:"flex-end",
    
    position:"absolute"
  },
  botonpanico:{
    width:"100%",
    height:"100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  button: {
    justifyContent: 'space-between',
    backgroundColor: "purple",
    color:"white",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
  },
  Preguntas: {
    backgroundColor: 'purple',
    color: "white",
    borderRadius: 10, 
    padding: 15,
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  footer: {
    fontSize: 10,
    color: 'black',
    
  },
  botonpreguntas: {
    color: "white", 
    backgroundColor: 'purple',
    borderRadius: 40,
    padding: 15,
    margin: 10,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  Preguntastext: {
    fontSize: 18,
  },
  divblanco: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 15,
    margin: 10,
  }
});

export default Home;