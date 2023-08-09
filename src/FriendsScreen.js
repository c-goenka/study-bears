import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import FriendComponent from  './FriendComponent';

const friends = [
    { name: 'Chetan' }, { name: 'Nathan' }, { name: 'Ariam' }, { name: 'Eric' }
];

const FriendsScreen = ({navigation}) => {
  const handleArrowPress = () => {
    // Handle arrow click logic here
    navigation.navigate("Chetan's Favorites")
  };
    return(
      <View style={styles.listContainer}>
        <ScrollView>
          {/* List of scrollable components */}
          {friends.map((friend) => (
            <FriendComponent
              imageSource={require('../assets/user.png')}
              name={friend.name}
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

export default FriendsScreen;