import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, Image} from 'react-native';

const FavoritesScreen = () => {
    return(
        <View style={styles.listContainer}>
        <ScrollView>
          {/* List of scrollable components */}
          {/* Add your scrollable components here */}
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