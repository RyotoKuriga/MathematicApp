import { View, Pressable, Text, StyleSheet, Linking, Alert, Share, Animated, Easing, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Slider from '@react-native-community/slider';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function SettingsScreen() {
  const [music, setMusic] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [textSize, setTextSize] = useState(18);
  const animation = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  const size = windowWidth / 5;
  const color = 'black';

  const switchMusic = () => {
    setMusic(!music);
  };

  const openMailApp = () => {
    const email = 'goetzenberger.tristan@bks-campus.ch';
    const subject = 'Mitteilung an Entwickler';
    const body = 'Ich möchte dem Entwickler folgendes mitteilen:';

    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Fehler', 'Mail-App kann nicht geöffnet werden');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('Fehler aufgetreten', err));
  };

  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Endlich unendlich Mathe!',
        url: 'https://hierWebseiteEinfügen.com',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert('Fehler', error.message);
    }
  };

  const animateIcon = () => {
    setShowInfo(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const resetAnimation = () => {
    Animated.timing(textOpacity, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        setShowInfo(false);
      });
    });
  };

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [8, -150], // Adjust this value to move the icon higher or lower
  });

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-120, -40], // Adjust this value to move the icon horizontally to the center
  });

  return (
    <View style={styles.container}>
      {showInfo ? (
        <View style={styles.infoContainer}>
          <Pressable onPress={resetAnimation}>
            <Animated.View style={[styles.iconContainer, { transform: [{ translateY }, { translateX }] }]}>
              <Ionicons name="information-circle-outline" size={size} color={color} />
            </Animated.View>
          </Pressable>
          <Animated.Text style={[styles.infoText, { opacity: textOpacity, fontSize: textSize }]}>
            Hast du einen Fehler entdeckt oder eine Rückmeldung? Dann schreib mir doch eine E-Mail!
          </Animated.Text>
        </View>
      ) : (
        <View style={styles.optionContainer}>
          <Pressable
            style={styles.option}
            onPress={animateIcon}
          >
            <Ionicons name="information-circle-outline" size={size} color={color} />
            <Text style={[styles.optionText, { fontSize: textSize }]}>Info</Text>
          </Pressable>
          <Pressable
            style={styles.option}
            onPress={switchMusic}
          >
            {music ? <Ionicons name="volume-high-outline" size={size} color={color} /> : <Ionicons name="volume-mute-outline" size={size} color={color} />}
            <Text style={[styles.optionText, { fontSize: textSize }]}>Musik</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.option,
              pressed && styles.pressed,
            ]}
            onPress={openMailApp}
          >
            <Ionicons name="mail-outline" size={size} color={color} />
            <Text style={[styles.optionText, { fontSize: textSize }]}>Kontakt</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.option,
              pressed && styles.pressed,
            ]}
            onPress={shareApp}
          >
            <Ionicons name="share-social-outline" size={size} color={color} />
            <Text style={[styles.optionText, { fontSize: textSize }]}>Teilen</Text>
          </Pressable>
          <Slider
            style={{ width: 250, height: 40 }}
            minimumValue={10}
            maximumValue={30}
            value={textSize}
            onValueChange={(value) => setTextSize(value*1.5)}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    width: '90%',
    height: windowHeight / 1.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  option: {
    alignItems: 'center',
    width: '50%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  pressed: {
    backgroundColor: 'grey',
  },
  optionText: {
    color: 'black',
    marginTop: 10,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    position: 'absolute',
  },
  infoText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    lineHeight: 25,
  },
  backButton: {
    marginTop: 20,
    alignItems: 'center',
  },
});
