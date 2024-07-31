import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

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
        style={[styles.pressableContainerLeft, isPressedMuster && styles.pressablePressed]}
        onPress={() => {
          setIsPressedMuster(true);
          setIsPressedAuto(false);
          handleButtonPress('TrainingManu');
        }}
        onPressOut={() => setIsPressedMuster(false)}>
        <View style={{marginVertical: 40}}></View>
        <View style={styles.textContainer}>
          <Text style={styles.verticalText}>M</Text>
          <Text style={styles.verticalText}>A</Text>
          <Text style={styles.verticalText}>N</Text>
          <Text style={styles.verticalText}>U</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.pressableContainerRight, isPressedAuto && styles.pressablePressed]}
        onPress={() => {
          setIsPressedAuto(true);
          setIsPressedMuster(false);
          handleButtonPress('TrainingAuto');
        }}
        onPressOut={() => setIsPressedAuto(false)}>
        <View style={{marginVertical: 40}}></View>
        <View style={styles.textContainer}>
          <Text style={styles.verticalText}>A</Text>
          <Text style={styles.verticalText}>U</Text>
          <Text style={styles.verticalText}>T</Text>
          <Text style={styles.verticalText}>O</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressableContainerLeft: {
    width: scale(200),
    height: verticalScale(650),
    alignItems: 'center',
    backgroundColor: '#C0B8DE',
    marginHorizontal: scale(7),
  },
  pressableContainerRight: {
    width: scale(200),
    height: verticalScale(650),
    alignItems: 'center',
    backgroundColor: '#E5CBC6',
    marginHorizontal: scale(7),
  },
  pressablePressed: {
    backgroundColor: 'darkgrey',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalText: {
    fontSize: moderateScale(70),
  },
});

export default Training;
