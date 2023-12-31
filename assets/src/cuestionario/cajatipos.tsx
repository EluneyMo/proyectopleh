import React  from "react"
import { View, Text, Image, StyleSheet } from 'react-native';

function Tipos() {
  return (
    <View  style={styles.container}>
      <Text style={styles.title}>Violencia de Género</Text>
      <Image source={require('../tipos/violenciagenero.jpeg')} style={styles.imagen} />
      <Text style={styles.descripcion}>
        La violencia por motivos de género es una práctica estructural que
        viola los derechos humanos y las libertades fundamentales.
        La violencia por motivos de género afecta gravemente a mujeres y personas LGBTI+. Se produce cuando sufren algún tipo de discriminación, agresión, hostigamiento o degradación por su identidad de género, expresión de género u orientación sexual.
        Violencia contra las mujeres y personas LGBTI+ es cualquier conducta (una acción, un insulto, una actitud, un silencio o una falta de colaboración) que produzca un daño a la persona por el solo hecho de ser mujer o persona LGBTI+. No se trata solo de agresiones físicas.
        Nada justifica el ejercicio de la violencia. La víctima nunca es culpable de la violencia que recibe. Si sos mujer o perteneces al colectivo de personas LGBTI+ y sufrís cualquier tipo de violencia, o corres peligro de sufrirla, tenés derecho a pedir ayuda y protección.
        La violencia de género puede afectar:
        Con esta guía vas a poder informarte acerca de los distintos tipos de violencia que se ejercen contra las mujeres y personas LGBTI+. Además, vas a poder conocer los derechos que tenés si sufrís violencia por motivos de género.

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  imagen: {
    width: 100,
    height: 150,
  },

  descripcion: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Tipos;

