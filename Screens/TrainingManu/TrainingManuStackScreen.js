import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function TrainingManuStackScreen() {
  const [openMenuId, setOpenMenuId] = React.useState(null);
  const navigation = useNavigation();
  

  const buttons = [
    { id: 1, text: 'Mengenlehre', subButtons: ['Mengen'] },
    { id: 2, text: 'Grundoperationen', subButtons: ['Addition und Subtraktion', 'Multiplikation und Division'] },
    { id: 3, text: 'Faktorisieren', subButtons: [' Ausklammern ',' Binomische Formeln '] },
    { id: 4, text: 'Bruchrechnen', subButtons: ['Was ist ein Bruch?', 'Addition & Subtraktion von Brüchen', 'Kürzen & Erweitern',  'Multiplikation & Division von Brüchen', 'Doppelbrüche'] },
    { id: 5, text: 'Gleichungssysteme', subButtons: ['Gleichungssysteme']},
    { id: 6, text: 'Lineare Funktionen', subButtons: [''] },
    { id: 7, text: 'Strahlensätze', subButtons: ['Die drei Strahlensätze', 'Zentrische Streckung'] },
    { id: 8, text: 'Stochastik', subButtons: ['Wahrscheinlichkeit', 'Statistik'] },
  ];

  

  const handleButtonPress = (buttonId) => {
    setOpenMenuId((prevId) => (prevId === buttonId ? null : buttonId));
  };


  const handleSubMenuButtonPress = (buttonId, option) => {
    return (
      navigation.navigate(option)
    );
  };

  
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {buttons.map((button) => (
          <View key={button.id}>
            <Pressable style={styles.buttons} onPress={() => handleButtonPress(button.id)}>
              <Text style={styles.text}>{button.text}</Text>
            </Pressable>
            {openMenuId === button.id && button.subButtons && (
              <View style={styles.subMenu}>
                {button.subButtons.map((subButton, index) => (
                  <Pressable
                    key={index}
                    style={styles.subMenuButton}
                    onPress={() => handleSubMenuButtonPress(button.id, subButton)}
                  >
                    <Text style={styles.subMenuButtonText}>{subButton}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
  text: {
    fontSize: 20, 
    color: 'white',
  },
  buttons: {
    backgroundColor: 'violet',
    margin: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  subMenu: {
    backgroundColor: 'lightblue',
    padding: 10,
    paddingBottom: 25,
    borderRadius: 5,
  },
  subMenuButton: {
    backgroundColor: 'pink',
    margin: 5,
    padding: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  subMenuButtonText: {
    color: 'white',
    fontSize: 20
  },
});