import {ScrollView, Text, StyleSheet, View, Image } from "react-native";

export function Contacto() {
  return (
    <View style={styles.container}>
      {/*Para saltos de linea {"\n"}*/}
      <ScrollView>
        <View style={styles.divcenterhoz}>
          <Text style={styles.titulo}>Edificaciones Aztecas</Text>
        </View>

        <View><Text style={styles.subtitulo}>
          Templos principales:
        </Text></View>
        <View>
          <Text style={styles.texto}>
            Los templos principalmente tenían una estructura de pirámide escalonada, con escaleras desde la base hasta la punta, estas construidas con espacio reducido para apoyar el pie, para verse obligados a bajar de lado y no darles la espalda a sus dioses.
            {"\n"}
            Sus principales templos fueron el Templo mayor dedicado a los dioses Huitzilopochtli y Tláloc.
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/20.jpg')}/></View>
          <Text style={styles.texto}>
            La pirámide del sol y la luna, a pesar de que fueron construidas por la cultura teotihuacana fueron también usados por los mexicas
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/16.jpg')}/></View>
          <Text style={styles.texto}>
            El templo del Quetzalcóatl 
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/17.jpg')}/></View>
          <Text style={styles.texto}>
            La gran pirámide de Cholula
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/18.jpg')}/></View>
          <Text style={styles.texto}>
            Tlatelolco
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/19.jpg')}/></View>
        </View>

        <View><Text style={styles.subtitulo}>
          Caracteristicas de sus construcciones:
        </Text></View>
        <View>
          <Text style={styles.texto}>
            Sus casas eran mayormente construidas de adobe de un tamaño reducido, sin embargo, también se usaban más variedad de materiales, tales como piedra, paja y madera, las casas de los plebeyos tendían a ser de un tamaño pequeño, mientas que las de la nobleza tendían a ser bastante más amplias, amuebladas y decoradas, normalmente se usaban tapetes de caña o petates para dormir o sentarse, así como normalmente no contaban con puertas al ser el robo muy poco común.
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/21.jpg')}/></View>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/22.jpg')}/></View>
          <Text style={styles.texto}>
            Normalmente la mayoría de las viviendas contaban con un temascal, una habitación de piedra de tamaño reducido con un pozo al centro, donde se colocaban piedras volcánicas calientes y agua, para producir vapor, se usaba para rituales y con fines curativos.
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/23.jpg')}/></View>
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
