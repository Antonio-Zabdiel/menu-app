import {ScrollView, Text, StyleSheet, View } from "react-native";
import { Mapa } from "../components/Mapa";

export function Acercade() {
  return (
    <View style={styles.container}>
      {/*Para saltos de linea {"\n"}*/}
      <ScrollView>
        <View style={styles.divcenterhoz}>
          <Text style={styles.titulo}>Localizacion</Text>
        </View>

        <View><Text style={styles.subtitulo}>
          Localizacion:
        </Text></View>
        <View><Text style={styles.texto}>
          Se hubicaron principalmente en el centro de México, y habarcando la mayor parte de mesoamerica se adueñaron de gran parte del territorio mesoamericano, donde estan los actuales estados de México, Veracruz, Puebla, Oaxaca, Guerrero, Chiapas, Hidalgo y parte del territorio actual de Guatemala
        </Text></View>

        <View><Text style={styles.subtitulo}>
          Mapa:
        </Text></View>
        <View>
          <Mapa></Mapa>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444444",
  },
  texto:{
    color: "#EDEDED",
    marginLeft: "5%",
    marginRight: "5%",
    fontSize: 17.5,
    textAlign: 'justify',
  },
  divcenterhoz:{
    backgroundColor: "#DA0037",
    alignItems: "center",
  },
  titulo:{
    margin: "5%",
    fontSize: 40,
    color: "#171717",
    fontWeight: 'bold',
  },
  subtitulo:{
    fontSize: 27.5,
    marginLeft: "5%",
    color: "#EDEDED",
    textDecorationLine: 'underline'
  },
  paraimag:{
    alignItems: "center",
  },
});
