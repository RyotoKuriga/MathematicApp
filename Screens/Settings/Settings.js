import { View, Pressable, Text, StyleSheet, Linking, Alert, Share, Dimensions } from 'react-native';
import React, { useState, useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { DarkModeContext } from '../DarkModeContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export function SettingsScreen() {
  const { toggleTheme } = useContext(DarkModeContext);
  const { theme } = useContext(DarkModeContext);

  const [showInfo, setShowInfo] = useState(false);
  const [textSize, setTextSize] = useState(30);
  const [color, setColor] = useState('black');

  const size = windowWidth / 5;

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
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      Alert.alert('Fehler', error.message);
    }
  };

  const showInfoText = () => {
    setShowInfo(!showInfo);
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer, styles.topSpacing]}>
      <View style={styles.optionContainer}>
        <View style={styles.iconContainer}>
          <Pressable style={styles.option} onPress={showInfoText}>
            <Ionicons name="information-circle-outline" size={size} color={color} />
            <Text style={[styles.optionText, { fontSize: textSize, color }]}>Info</Text>
          </Pressable>
          {showInfo && (
            <View style={{height: 300}}>

              <Text style={[styles.infoText, { fontSize: textSize, color }]}>
                Die App soll Schülern helfen, die Mathematik-Basics zu lernen, ich hoffe, sie kann dir helfen! Hast du einen Fehler entdeckt oder eine Rückmeldung? Dann schreib mir doch eine E-Mail!
              </Text>
            </View>     
          )}
        </View>
        {!showInfo && (
          <>
            <Pressable
              style={({ pressed }) => [styles.option, pressed && styles.pressed]}
              onPress={openMailApp}
            >
              <Ionicons name="mail-outline" size={size} color={color} />
              <Text style={[styles.optionText, { fontSize: textSize, color }]}>Kontakt</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [styles.option, pressed && styles.pressed]}
              onPress={shareApp}
            >
              <Ionicons name="share-social-outline" size={size} color={color} />
              <Text style={[styles.optionText, { fontSize: textSize, color }]}>Teilen</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSpacing: {
    marginTop: -60,
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#2C2D30',
  },
  optionContainer: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100, // Adjust this height as needed
  },
  option: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  pressed: {
    backgroundColor: 'grey',
  },
  optionText: {
    marginTop: 10,
  },
  infoText: {
    textAlign: 'center',
    lineHeight: 25,
    paddingTop: 10,
  },
});

