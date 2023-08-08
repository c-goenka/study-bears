import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const libraries = [
  { name: 'Moffit Library', latitude: 37.8725369, longitude: -122.2634115, description: ['Open', <br />, '9am-9pm']},
  { name: 'Doe Library', latitude: 37.872211, longitude: -122.2618116 },
  { name: 'Business Library', latitude: 37.8714692, longitude: -122.2560199 },
  { name: 'Music Library', latitude: 37.8704483, longitude: -122.2610574 },
  { name: 'Life Sciences Library', latitude: 37.871144, longitude: -122.2618197 },
  { name: 'East Asian Library', latitude: 37.8735799, longitude: -122.2625545 },
  { name: 'Soda Hall', latitude: 37.8755981, longitude: -122.2613614 },
  // Add more libraries with their coordinates
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Half - Map */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.871963,
            longitude:-122.259901,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {libraries.map((library, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: library.latitude,
                longitude: library.longitude,
              }}
              title={library.name}
              description={library.description}
            />
          ))}
        </MapView>
      </View>

      {/* Bottom Half - List */}
      <View style={styles.listContainer}>
        <ScrollView>
          {/* List of scrollable components */}
          {/* Add your scrollable components here */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
});

export default HomeScreen;
