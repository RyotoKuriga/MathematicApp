import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Animated, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

export function TrainingManuStackScreen() {
  const [openMenuIds, setOpenMenuIds] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const buttons = [
    { id: 1, text: 'Mengenlehre', subButtons: ['Mengen'] },
    { id: 2, text: 'Grundoperationen', subButtons: ['Grundoperationen', 'Potenzrechnen', 'Betragsaufgaben'] },
    { id: 3, text: 'Faktorisieren', subButtons: [' Ausklammern ', ' Binomische Formeln '] },
    { id: 4, text: 'Bruchrechnen', subButtons: ['Bruchrechnen', 'Bruchrechnen'] },
    { id: 5, text: 'Gleichungssysteme', subButtons: ['Gleichungssysteme'] },
    { id: 6, text: 'Lineare Funktionen', subButtons: [' Lineare Funktionen '] },
    /*{ id: 7, text: 'Strahlensätze', subButtons: ['Die drei Strahlensätze', 'Zentrische Streckung'] },
    { id: 8, text: 'Stochastik', subButtons: ['Wahrscheinlichkeit', 'Statistik'] },*/
  ];

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunched = await AsyncStorage.getItem('hasLaunchedTrainingScreen');
        if (hasLaunched === null) {
          setModalVisible(true);
          await AsyncStorage.setItem('hasLaunchedTrainingScreen', 'true');
        }
      } catch (error) {
        console.error("Error checking if first launch", error);
      }
    };

    checkFirstLaunch();
  }, []);

  const handleButtonPress = (buttonId, subButtonsCount) => {
    const subButtonHeight = 65;
    const subButtonMargin = 30;
    const totalSubButtonHeight = subButtonHeight + subButtonMargin;
    const newMenuIds = { ...openMenuIds };

    if (openMenuIds[buttonId]) {
      Animated.timing(openMenuIds[buttonId], {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        delete newMenuIds[buttonId];
        setOpenMenuIds(newMenuIds);
      });
    } else {
      newMenuIds[buttonId] = new Animated.Value(0);
      setOpenMenuIds(newMenuIds);
      Animated.timing(newMenuIds[buttonId], {
        toValue: subButtonsCount * totalSubButtonHeight,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleSubMenuButtonPress = (option) => {
    navigation.navigate(option);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.scrollView}>
      {buttons.map((button) => (
        <View key={button.id}>
          <View style={styles.outerBorder}>
            <Pressable style={styles.innerBorder} onPress={() => handleButtonPress(button.id, button.subButtons.length)}>
              <Text style={styles.text}>{button.text}</Text>
            </Pressable>
          </View>
          {openMenuIds[button.id] && (
            <View style={{ overflow: 'hidden' }}>
              <Animated.View style={[{ height: openMenuIds[button.id] }, styles.animatedContainer]}>
                {button.subButtons.map((subButton, index) => (
                  <Pressable
                    key={index}
                    style={styles.subMenuButton}
                    onPress={() => handleSubMenuButtonPress(subButton)}
                  >
                    <Text style={styles.subMenuButtonText}>{subButton}</Text>
                  </Pressable>
                ))}
              </Animated.View>
            </View>
          )}
        </View>
      ))}
      <View style={{height: 100}}></View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text>Willkommen! Hier findest du vorgefertigte Übungen zu den Themen in der Theorie. Um Lösungen der Aufgaben anzuzeigen, tippe einfach auf die Aufgabe drauf!</Text>
          <Button title="Schliessen" onPress={closeModal} />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 22,
    color: 'black',
  },
  outerBorder: {
    borderWidth: 3,
    borderColor: 'darkblue',
    borderRadius: 5,
    margin: 20,
    marginHorizontal: 30,
    marginBottom: 10,
    backgroundColor: 'linear-gradient(145deg, rgba(135,222,213,1) 0%, rgba(155,140,195,1) 100%)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  innerBorder: {
    backgroundColor: '#C0B8DE',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  animatedContainer: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 5,
    marginBottom: 10,
  },
  subMenuButton: {
    backgroundColor: '#C0B8DE',
    borderWidth: 2,
    borderColor: 'darkblue',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 40,
    borderRadius: 5,
  },
  subMenuButtonText: {
    color: 'black',
    fontSize: 18,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default TrainingManuStackScreen;
