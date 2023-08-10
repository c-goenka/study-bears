import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const FriendComponent = ({ imageSource, name, onPressArrow }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={onPressArrow} style={styles.clickContainer}>
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
    backgroundColor: '#E6E6E6',
    borderRadius: '10',
  },
  textContainer: {
    flexDirection: 'col',
    alignItems: 'left',
  },
  image: {
    width: 59,
    height: 59,
    marginRight: 25,
    marginLeft: -5
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
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
  clickContainer: {
    width: 50,
    height: 50,
    left: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FriendComponent;