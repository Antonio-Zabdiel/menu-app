import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Contacto } from "./pages/Contacto";
import { Acercade } from "./pages/Acercade";
import { Inicio } from "./pages/Inicio";
import {StyleSheet} from 'react-native';
import { View } from "react-native-web";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="Cultura" options={{headerTitle: "Azteca", }} component={Inicio}/>
        <Menu.Screen name="Edificaciones" component={Contacto} />
        <Menu.Screen name="Localización" component={Acercade} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}
