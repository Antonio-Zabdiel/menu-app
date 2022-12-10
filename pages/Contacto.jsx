import { Text, StyleSheet, View } from "react-native";

export function Contacto() {
  return (
    <View style={styles.container}>
      {/*Para saltos de linea {"\n"}*/}
      <View style={styles.divcenterhoz}>
        <Text style={styles.titulo}>Edificaciones Aztecas</Text>
      </View>

      <View><Text style={styles.subtitulo}>
        Templos principales:
      </Text></View>
      <View><Text style={styles.texto}>
        templos principales con imagenes kilo
      </Text></View>

      <View><Text style={styles.subtitulo}>
        Caracteristicas de sus construcciones:
      </Text></View>
      <View><Text style={styles.texto}>
      Caracteristicas de sus construcciones
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
