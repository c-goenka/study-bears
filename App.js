import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import FavoritesScreen from './src/FavoritesScreen';
import FriendsScreen from './src/FriendsScreen';
import FriendsFavoritesScreen from './src/FriendsFavoritesScreen';
import LocationsListScreen from './src/LocationsListScreen';
import LocationScreen from './src/LocationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="All Locations" component={LocationsListScreen} />
        <Stack.Screen name="Moffitt Library" component={LocationScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        <Stack.Screen name="Friends" component={FriendsScreen} />
        <Stack.Screen name="Chetan's Favorites" component={FriendsFavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;