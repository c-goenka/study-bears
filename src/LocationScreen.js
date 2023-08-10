import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, Image} from 'react-native';

const LocationScreen = ({navigation}) => {
    const img = require("../assets/empty-heart.png")
    let fav = false
    const [imageAsset, setImageAsset] = useState(img)
  
    const handleImageChange = () => {
        fav = !fav;
        if (fav) {
            setImageAsset(require("../assets/heart.png"))
        } else {
            setImageAsset(require("../assets/empty-heart.png"))
        }
    }
    return(
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.favContainer}>
                <TouchableOpacity onPress={handleImageChange}>
                    <Image source={imageAsset} style={styles.fav}></Image>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/moffitt-large.png')} style={styles.image}></Image>
            <Text style={styles.description}>
                Moffitt Library, located next to Memorial Glade, is one of the busiest 
                libraries on campus. The library includes the Copy Center, Free Speech 
                Movement Café, and convenient access to the collections in the Main (Gardner) 
                Stacks. Reserved for UC Berkeley students and faculty, Moffitt is food- and 
                drink-friendly, serves students of all majors, and is open the longest hours.
            </Text>
            <Text style={styles.hours}>
            Mon: 9am - 9pm {'\n'}
            Tue:  9am - 9pm {'\n'}
            Wed: 9am - 9pm {'\n'}
            Thur: 9am - 9pm {'\n'}
            Fri: 9am - 5pm {'\n'}
            Sat: 9am - 5pm {'\n'}
            Sun: 1pm - 9pm
            </Text>
            <View style={styles.iconsList}>
                <Image source={require('../assets/cafe.png')} style={styles.icon}></Image>
                <Image source={require('../assets/outlet.png')} style={styles.icon}></Image>
                <Image source={require('../assets/nap.png')} style={styles.icon}></Image>
                <Image source={require('../assets/restroom.png')} style={styles.icon}></Image>
                <Image source={require('../assets/wheelchair.png')} style={styles.icon}></Image>
            </View>
            {/* <View style={styles.navButtonContainer}>
                <TouchableOpacity>
                    <View style={styles.navButton}>
                        <Text style={styles.text}>Navigate</Text>
                    </View>
                </TouchableOpacity>
            </View> */}
        </ScrollView>
    </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    favContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        marginBottom: -15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fav: {
        width: 30,
        height: 30,
    },
    image: {
        width: 300,
        height: 250,
        margin: 35,
    },
    description: {
        flex: 1,
        padding: 20,
        marginTop: -20
    },
    hours: {
        flex: 1,
        fontWeight: 'bold',
        padding: 20,
        marginTop: -15
    },
    iconsList: {
        flex: 1,
        flexDirection: 'row',
        margin: 15,
        marginBottom: 70
    },
    icon: {
        flex: 1,
        width: 45,
        height: 45,
        resizeMode: 'contain'
    },
    navButton: {
        width: 97,
        height: 31,
        backgroundColor: '#00A3FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default LocationScreen;