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
];

const HomeScreen = ({navigation}) => {
  const handleLeftIconPress = () => {
    navigation.navigate('Favorites');
  };
  const handleRightIconPress = () => {
    navigation.navigate('Friends')
  };
  const handlePullUpIconPress = () => {
    navigation.navigate('All Locations')
  };
  const handleArrowPress = () => {
    navigation.navigate('Moffitt Library')
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
          showsUserLocation={true}>
          <TouchableOpacity onPress={handleLeftIconPress}>
            <View style={styles.iconContainerLeft}>
                <Image source={require('../assets/fav.png')} style={styles.icon}/>
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={handleRightIconPress}>
            <View style={styles.iconContainerRight}>
                <Image source={require('../assets/friends.png')} style={styles.icon}/>
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

      {/* <View style={styles.showLocationsList}>
        <TouchableOpacity onPress={handlePullUpIconPress}>
          <Text style={{fontSize: 13, color: 'blue'}}>All Locations</Text>
        </TouchableOpacity>
      </View> */}

      <View style={styles.searchContainer}>
        {/* <Image source={require('../assets/search.png')} style={styles.search}/>
        <Text>Search</Text> */}
        <TouchableOpacity onPress={handlePullUpIconPress}>
          <Text style={{fontSize: 13, color: 'blue', fontWeight: 'bold', textDecorationLine: 'underline'}}>All Locations</Text>
        </TouchableOpacity>
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
  searchContainer: {
    flex: 0.1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  showLocationsList: {
    flex: 0.07,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showLocationsListButton: {
    width: 98,
    height: 7,
    backgroundColor: 'black',
    borderRadius: 10
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
  menu: {
    width: 17,
    height: 17,
    resizeMode: 'contain'
  },
  search: {
    width: 12,
    height: 12,
    marginRight: 5
  },
});

export default HomeScreen;
