import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity} from "react-native";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInAnonymously, updatePassword, confirmPasswordReset ,EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import "firebase/auth"
import {LinearGradient} from "expo-linear-gradient"
import appFirebase from "../../../firebase/firebase";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native";
import { FirebaseError } from "firebase/app";
import "firebase/auth"
import Toast from "react-native-toast-message";
const auth = getAuth(appFirebase);
const cambiocon=()=>{
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const route = useRoute();
  const [newPasswordError, setNewPasswordError] = useState('');
const handleChangePassword = async () => {
  try {
      await auth.confirmPasswordReset(route.params?.resetToken, newPassword);
      console.log('Contraseña cambiada correctamente');
        navigation.navigate('Login' as never)
     
  } catch (error:any) {
    console.error('Error al cambiar la contraseña:', error.message);
  }
};
  return(
    <LinearGradient
    colors={['darkmagenta', 'darkviolet']}
    style={styles.container}
    >
    <View style={styles.container}>
      
      <Text style={styles.header}>PLEH</Text>
    <Text style={styles.textito}>Nueva Contraseña</Text>
    <TextInput
      placeholder="Ingresa tu nueva contraseña"
      secureTextEntry
      value={newPassword}
      onChangeText={setNewPassword}
      style={newPasswordError ? styles.inputError : styles.input}

    />
    {newPasswordError ? (
      <Text style={styles.errorText}>{newPasswordError}</Text>
    ) : null}
    <Button title="Cambiar Contraseña" onPress={handleChangePassword} />
  </View>
  
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  textito: {
    color:"white",
    textAlign:"center"
  },
  input: {
    height: 40,
    width: 350,
    display:"flex",
    alignSelf:"center",
    justifyContent:"center",
    alignItems: "center",
    alignContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius:20
  },
  inputError: {
    borderRadius:20,
    height: 40,
    width: 400,
    display:"flex",
    alignSelf:"center",
    justifyContent:"center",
    alignItems: "center",
    alignContent: "center",
    borderColor: 'red',
    borderWidth: 1,
  },
  header: {
    color:"white",
    fontFamily:"ArchivoBlack-Regular",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 16,
    justifyContent:"center",
    textAlign:"center"
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
export default cambiocon;