import { FlatList, Text, StyleSheet, View } from "react-native";
import { useState } from "react";
import { ListItem } from "../components/ListItem";
import { color } from "react-native-reanimated";

export function Inicio() {
  return (
    <View style={styles.container}>
      {/*Para saltos de linea {"\n"}*/}
      <View style={styles.divcenterhoz}>
        <Text style={styles.titulo}>Cultura Azteca</Text>
      </View>

      <View><Text style={styles.subtitulo}>
          Caracteristicas:
      </Text></View>
      <View><Text style={styles.texto}>
        Caracteristicas de a cultura
      </Text></View>

      <View><Text style={styles.subtitulo}>
          Lengua:
      </Text></View>
      <View><Text style={styles.texto}>
        Lengua de la cultura
      </Text></View>
      
      <View><Text style={styles.subtitulo}>
          Comida:
      </Text></View>
      <View><Text style={styles.texto}>
        Comida tipica
      </Text></View>

      <View><Text style={styles.subtitulo}>
          Vestimenta:
      </Text></View>
      <View><Text style={styles.texto}>
        Veztimenta tipica
      </Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444444",
    //alignItems: "center",
    //justifyContent: "center",
  },
  texto:{
    fontFamily: "Arial",
    color: "#EDEDED",
    marginLeft: "5%",
    fontSize: 17.5,
  },
  divcenterhoz:{
    backgroundColor: "#DA0037",
    alignItems: "center",
  },
  titulo:{
    margin: "5%",
    fontSize: 40,
    fontWeight: "Arial",
    color: "#171717",
    fontWeight: 'bold',
  },
  subtitulo:{
    fontSize: 27.5,
    marginLeft: "5%",
    color: "#DA0037",
    textDecorationLine: 'underline'
  },
});
