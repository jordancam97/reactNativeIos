/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const mapRef = useRef(null); // Crea un ref para el MapView

  return (
    <View
      style={styles.container}
    >
      <Text style={{fontSize:20, marginTop:90}}>Prueba</Text>
      <MapView
        ref={mapRef} // Asigna el ref aquí
        style={styles.map}
        userInterfaceStyle="light"
        provider={PROVIDER_GOOGLE}// Especifica que usarás Google Maps
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
