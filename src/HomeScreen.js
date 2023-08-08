import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import LocationComponent from  './LocationComponent';

const libraries = [
  { name: 'Moffit Library', latitude: 37.8725369, longitude: -122.2634115, hours: '9am - 9pm', walk: '5', pic: require('../assets/moffit.png') },
  { name: 'Doe Library', latitude: 37.872211, longitude: -122.2618116, hours: '9am - 5pm', walk: '2', pic: require('../assets/doe.png') },
  { name: 'Business Library', latitude: 37.8714692, longitude: -122.2560199, hours: '9am - 5pm', walk: '5', pic: require('../assets/bus.png') },
  { name: 'Music Library', latitude: 37.8704483, longitude: -122.2610574, hours: '9am - 5pm', walk: '3', pic: require('../assets/music.png') },
  { name: 'Life Sciences Library', latitude: 37.871144, longitude: -122.2618197, hours: '9am - 5pm', walk: '10', pic: require('../assets/lifesci.png') },
  { name: 'East Asian Library', latitude: 37.8735799, longitude: -122.2625545, hours: '9am - 5pm', walk: '7', pic: require('../assets/eastasian.png') },
  { name: 'Soda Hall', latitude: 37.8755981, longitude: -122.2613614, hours: '9am - 6pm', walk: '10', pic: require('../assets/moffit.png') },
  // Add more libraries with their coordinates
];

const HomeScreen = ({navigation}) => {
  const handleLeftIconPress = () => {
    navigation.navigate('Favorites');
  };

  const handleRightIconPress = () => {
    navigation.navigate('Friends')
  };
  const handleArrowPress = () => {
    // Handle arrow click logic here
  };
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
          showsUserLocation={true}
          provider="google">
          <TouchableOpacity onPress={handleLeftIconPress} style={styles.iconContainerLeft}>
            <View>
              <Image source={require('../assets/fav.png')} style={styles.icon}/>
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={handleRightIconPress} style={styles.iconContainerRight}>
            <View>
              <Image source={require('../assets/friends.png')} style={styles.icon} />
            </View>
          </TouchableOpacity>
          {libraries.map((library, index) => (
            <Marker key={index} coordinate={{latitude: library.latitude, longitude: library.longitude,}}>
              <Callout>
                <View>
                  <Text style={{fontWeight: "bold"}}>{library.name}</Text>
                  <Text style={{color: "#009B00", fontWeight: "bold"}}>Open</Text>
                  <Text>{library.hours}</Text>
                  <Text>{library.walk} min walk</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>

      {/* Bottom Half - List */}
      <View style={styles.listContainer}>
        <ScrollView>
          {/* List of scrollable components */}
          {libraries.map((library) => (
            <LocationComponent
              imageSource={library.pic}
              name={library.name}
              hours={library.hours}
              walk={library.walk}
              onPressArrow={handleArrowPress}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  iconContainerLeft: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerRight: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
});

export default HomeScreen;
