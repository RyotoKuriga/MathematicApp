import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Training() {
  const navigation = useNavigation();
  const [isPressedMuster, setIsPressedMuster] = useState(false);
  const [isPressedAuto, setIsPressedAuto] = useState(false);

  const handleButtonPress = (buttonName) => {
    navigation.navigate(buttonName);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.pressableContainer, isPressedMuster && styles.pressablePressed]}
        onPress={() => {
          setIsPressedMuster(true);
          setIsPressedAuto(false);
          handleButtonPress('TrainingManu');
        }}
        onPressOut={() => setIsPressedMuster(false)}>
        <Text>
          Musterübungen
        </Text>
      </Pressable>
      <Pressable
        style={[styles.pressableContainer, isPressedAuto && styles.pressablePressed]}
        onPress={() => {
          setIsPressedAuto(true);
          setIsPressedMuster(false);
          handleButtonPress('TrainingAuto');
        }}
        onPressOut={() => setIsPressedAuto(false)}>
        <Text>
          Autoübungen
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressableContainer: {
    width: 300,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginVertical: 10,
  },
  pressablePressed: {
    backgroundColor: 'darkgrey', // dunklere Farbe beim Drücken
  },
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});


