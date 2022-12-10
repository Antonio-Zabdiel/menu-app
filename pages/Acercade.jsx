import { Text, StyleSheet, View } from "react-native";
import { Mapa } from "../components/Mapa";

export function Acercade() {
  return (
    <View style={styles.container}>
      {/*Para saltos de linea {"\n"}*/}
      <View style={styles.divcenterhoz}>
        <Text style={styles.titulo}>Localizacion</Text>
      </View>

      <View><Text style={styles.subtitulo}>
        Localizacion:
      </Text></View>
      <View><Text style={styles.texto}>
        localizacion en texto
      </Text></View>

      <View><Text style={styles.subtitulo}>
        Mapa:
      </Text></View>
      <View>
        <Mapa></Mapa>
      </View>

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
