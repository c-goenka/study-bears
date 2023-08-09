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
});

export default FriendComponent;