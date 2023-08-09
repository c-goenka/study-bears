import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import LocationComponent from  './LocationComponent';

const libraries = [
  { name: 'Moffit Library', latitude: 37.8725369, longitude: -122.2634115, hours: '9am - 9pm', walk: '5', pic: require('../assets/moffit.png') },
  { name: 'Music Library', latitude: 37.8704483, longitude: -122.2610574, hours: '9am - 5pm', walk: '3', pic: require('../assets/music.png') },
  { name: 'East Asian Library', latitude: 37.8735799, longitude: -122.2625545, hours: '9am - 5pm', walk: '7', pic: require('../assets/eastasian.png') },
  // Add more libraries with their coordinates
];

const FavoritesScreen = ({navigation}) => {
  const handleArrowPress = () => {
    navigation.navigate('Moffitt Library')
  };
    return(
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
    listContainer: {
        flex: 1,
        backgroundColor: 'white',
      },
});

export default FavoritesScreen;