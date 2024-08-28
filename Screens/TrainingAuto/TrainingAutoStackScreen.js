import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme';
import { ThemeContext } from '../../Context/themeContext';
import { useContext } from 'react';

export function TrainingAutoStackScreen() {
  const [openMenuIds, setOpenMenuIds] = React.useState({});
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const buttons = [
    { id: 1, text: 'Mengenlehre', subButtons: ['Mengenoperationenübung'] },
    { id: 2, text: 'Grundoperationen', subButtons: ['Addition und Subtraktion', 'Multiplikation und Division'] },
    { id: 3, text: 'Faktorisieren', subButtons: ['  Ausklammern  ', '  Binomische Formeln  '] },
    { id: 4, text: 'Bruchrechnen', subButtons: ['Erweitern & Kürzen', 'Brüche addieren & subtrahieren', 'Brüche multiplizieren & dividieren', ' Doppelbrüche '] },
    { id: 5, text: 'Gleichungssysteme', subButtons: ['Gleichungssysteme lösen'] },
    { id: 6, text: 'Lineare Funktionen', subButtons: ['Funktionen bestimmen', 'Schnittpunkt bestimmen'] },
    /*{ id: 7, text: 'Strahlensätze', subButtons: ['Die drei Strahlensätze', 'Zentrische Streckung'] },
    { id: 8, text: 'Stochastik', subButtons: ['Wahrscheinlichkeit', 'Statistik'] },*/
  ];

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

  return (
    <ScrollView style={[styles.scrollView, {backgroundColor: activeColors.background}]}>
      {buttons.map((button) => (
        <View key={button.id}>
          <View style={[styles.outerBorder, {borderColor: activeColors.text}]}>
            <Pressable style={[styles.innerBorder, {backgroundColor: activeColors.background}]} onPress={() => handleButtonPress(button.id, button.subButtons.length)}>
              <Text style={[styles.text, {color: activeColors.text}]}>{button.text}</Text>
            </Pressable>
          </View>
          {openMenuIds[button.id] && (
            <View style={{ overflow: 'hidden' }}>
              <Animated.View style={[{ height: openMenuIds[button.id] }, styles.animatedContainer]}>
                {button.subButtons.map((subButton, index) => (
                  <View style={{backgroundColor: activeColors.background}}>
                    <Pressable
                      key={index}
                      style={[styles.subMenuButton, {backgroundColor: activeColors.background}, {borderColor: activeColors.text}]}
                      onPress={() => handleSubMenuButtonPress(subButton)}
                    >
                      <Text style={[styles.subMenuButtonText, {color: activeColors.text}]}>{subButton}</Text>
                    </Pressable>
                  </View>
                  
                ))}
              </Animated.View>
            </View>
          )}
        </View>
      ))}
      <View style={{height: 100}}></View>
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
    borderColor: 'black',
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
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
});

export default TrainingAutoStackScreen;
