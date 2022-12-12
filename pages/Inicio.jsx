import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import { useState } from "react";
import { ListItem } from "../components/ListItem";
import { color } from "react-native-reanimated";

export function Inicio() {
  return (
    <View style={styles.container}>
      {/*Para saltos de linea {"\n"}*/}
      <ScrollView>
        <View style={styles.divcenterhoz}><Text style={styles.titulo}>Cultura Azteca</Text></View>

        <View>
          <Text style={styles.texto}>
            Se conoce como Aztecas o Mexicas a uno de los principales pueblos mesoamericanos del periodo posclásico, siendo el pueblo con más territorio y poder en la región en esa época.
            {"\n"}
            El periodo histórico se dio durante los años 1000 al 1521, cuando se dio la caída de Tenochtitlan y con esta la colonización por parte de los españoles.
            {"\n"}
            En 1428 se dio una alianza entre 3 pueblos de la zona que son Tenochtitlan, Texcoco y Tlacopan, a esta alianza se le conoce como “triple alianza”
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/5.png')}/></View>
        </View>

        <View><Text style={styles.subtitulo}>Caracteristicas:</Text></View>
        <View>
          <Text style={styles.texto}>
            Eran un pueble guerrero y religioso, sus principales dioses eran Huitzilopochtli (dios del sol y de la guerra), Tláloc (dios de la lluvia), Tezcatlipoca, Quetzalcóatl, Centéotl, Mictlantecuhtli, Metzli, sin embargo como es costumbre al ser una cultura antigua su religión es politeísta y contaba con más dioses y a todos se les daba tributo en forma de sacrificios.
            {"\n"}
            Desarrollaron numerosas obras arquitectónicas y un sistema astronómico basado en el sol y la luna.
            {"\n"}
            Usaron múltiples residuos de culturas anteriores que en ese momento ya no se encontraban, como la Teotihuacán. 
          </Text>  
          <View style={styles.paraimag}><Image style={{width: '95%', height: 300,}} source={require('./image/6.jpg')}/></View>
          <Text style={styles.texto}>
            Su organización política y social se puede dividir en 
            {"\n"}
            Nobles guerreros pipiltin: o el punto mas alto, conformado por
            {"\n"}
            Tlatoani: gobernante o autoridad máxima
            {"\n"}
            Sacerdotes: personas cilras en historia y conocimientos
            {"\n"}
            Guerreros: destacados por su valor en la batalla, se dividían en guerreros águila y jaguar
            {"\n"}
            Nobles guerreros o pipiltin
            {"\n"}
            artesanos, campesinos y comerciantes	
            {"\n"}
            Esclavos
            {"\n"}
            Su economía se basaba principalmente en el intercambio de bienes por medio del trueque, se consideraba el cacao como una de las monedas de intercambio con mayor valor
            {"\n"}
            Su organización militar era formidable, llegando a abarcar en su punto mas fuerte prácticamente toda la zona de mesoamerica, usaban a los comerciantes y mercaderes para hacer labor de inteligencia, lo que seria el equivalente al espionaje.
            {"\n"}
            Su ejercito se integraba de plebeyos, y en menor numero guerreros provenientes de la nobleza.
            {"\n"}
            Sus principales armas eran macuahuitls, tepoztopillis, chimallis y el arco
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 175,}} source={require('./image/7.jpg')}/></View>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 100,}} source={require('./image/8.jpg')}/></View>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 500,}} source={require('./image/9.jpg')}/></View>
        </View>

        <View><Text style={styles.subtitulo}>Lengua:</Text></View>
        <View>
          <Text style={styles.texto}>
            Su lengua era el náhuatl y su forma de escritura era a base de símbolos
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 200,}} source={require('./image/10.png')}/></View>
        </View>
        
        <View><Text style={styles.subtitulo}>Comida:</Text></View>
        <View>
          <Text style={styles.texto}>
            Gran parte de su alimentación se basaba en cultivos, principalmente de Maíz, frijol, tomate, chile, papa, etc., siendo el maíz de los más importantes en su cultura.
            {"\n"}
            El maíz al ser el más importante, generalmente se usaba para gran parte de sus alimentos, siendo usado para tamales, tortillas y pozole, este último antiguamente se preparaba con carne humana.
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 500,}} source={require('./image/11.jpg')}/></View>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 500,}} source={require('./image/13.png')}/></View>
          <Text style={styles.texto}>
            Normalmente el maíz era complementado también con el frijol, este de igual manera siendo de los principales alimentos.
            {"\n"}
            A pesar de esto los aztecas también la caza y la pesca en una menor medida, principalmente de animales como, ciervos, conejos, iguanas, pescado y camarones. Incluso insectos, como saltamontes y gusano.
            {"\n"}
            El cacao era muy apreciado por los aztecas, y a parte de su utilización como moneda de cambio se usaba para la preparación de chocolate, hecho a base de agua, harina, pimienta, maíz y algunas especias, se cree que era similar al atole que podemos degustar actualmente.
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 500,}} source={require('./image/12.jpg')}/></View>

        </View>

        <View><Text style={styles.subtitulo}>Vestimenta:</Text></View>
        <View>
          <Text style={styles.texto}>
            Esta contaba con múltiples adornos, como anillos, collares, aretes, etc., y los principales materiales usados eran, plata, oro, garras de animales, plumas, huso, así como otras múltiples piedras preciosas.
            {"\n"}
            Las máscaras no eran un artilugio de uso cotidiano, se reservaban normalmente para rituales, en su forma representaban a un dios, y eran mayor mente fabricadas con arcilla y barro, así como adornadas con piedras preciosas.
            {"\n"}
            Los principales materiales usados en sus ropas eran a base de fibra de algodón (este normalmente reservado para la nobleza), ayate y eran elaboradas a partir del Maguey.
            {"\n"}
            La vestimenta para los hombres consistía en un taparrabos, si el hombre era de una mayor clase social tendía a ser adornado con flecos, y para la parte superior se usaba el tilmatli, siendo este una capa triangular, aunque este era mayormente reservado para el frio, de calzado se usaban sandalia (cactli).
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 500,}} source={require('./image/1.jpg')}/></View>
          <Text style={styles.texto}>
            La vestimenta para las mujeres consistía principalmente de una falda llamada Cueitl, acompañada en la parte superior por un Huipilli, el cual sería como una blusa sin manga, y de calzado eran el mismo que el del hombre
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 500,}} source={require('./image/2.jpg')}/></View>
          <Text style={styles.texto}>
            La vestimenta para los guerreros era similar a la de los hombres, siendo su principal diferencia el uso común de brazaletes en el brazo y antebrazo, asi como el uso de pieles de animales, los guerreros águila usaban un casco con forma de la cabeza de un águila, y los guerreros jaguar usaban pieles de este animal, todos los guerreros eran siempre axompañados por sus armas que son principalmente el macuahuitl, tepoztopillis, chimallis
          </Text>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 500,}} source={require('./image/3.jpg')}/></View>
          <View style={styles.paraimag}><Image style={{width: '95%', height: 500,}} source={require('./image/4.jpg')}/></View>
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
