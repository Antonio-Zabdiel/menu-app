import { Text, StyleSheet, View } from "react-native";
import MapView from 'react-native-maps'
import Circle from 'react-native-maps'

var locat = {
    latitude: 19.432899319086438, 
    longitude: -99.1332274758037,
};

export function Mapa() {
    return(
        <View>
            <MapView 
                style={styles.map}
                initialRegion={{
                    /*17.196160946616754, -108.3930000571495 */
                    //latitude: 15.920185290137738,
                    //longitude: -101.26456921311957,
                    latitude: 19.432899319086438, 
                    longitude: -99.1332274758037,
                    /*24.474774410434552, -96.17286459995714*/
                    latitudeDelta: 10.817894458495692,
                    longitudeDelta: 10.52724584856449,
                }}
            >
                <MapView.Circle 
                    center = {locat} 
                    radius = {500000}
                    strokeWidth = {1}
                    strokeColor="#FC0101"
                    fillColor="#f0afaf38"
                ></MapView.Circle>
            </MapView>

            <Text>
                {"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
            </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
  });