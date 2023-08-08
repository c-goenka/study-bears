import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const LocationComponent = ({ imageSource, name, hours, walk, onPressArrow }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={{fontWeight: "bold"}}>{name}</Text>
        <Text style={{color: "#009B00", fontWeight: "bold"}}>Open</Text>
        <Text>{hours}</Text>
        <Text>{walk} min walk</Text>
      </View>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={onPressArrow}>
            <Image
            source={require('../assets/arrow.png')}
            style={styles.arrow}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: '10',
  },
  textContainer: {
    flexDirection: 'col',
    alignItems: 'left',
  },
  image: {
    width: 95,
    height: 79,
    marginRight: 20,
    marginLeft: -5
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  arrowContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default LocationComponent;