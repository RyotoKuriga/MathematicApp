import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../theme';
import { useContext } from 'react';
import { ThemeContext } from '../Context/themeContext';



export function Training() {
  const navigation = useNavigation();
  const [isPressedMuster, setIsPressedMuster] = useState(false);
  const [isPressedAuto, setIsPressedAuto] = useState(false);

  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const handleButtonPress = (buttonName) => {
    navigation.navigate(buttonName);
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: activeColors.background}]}>
      <View>
        <Pressable
          style={[styles.pressableContainer, {backgroundColor: theme.mode === 'dark' ? activeColors.background : activeColors.secondary, borderColor: theme.mode === 'dark' ? activeColors.text : activeColors.text}]}
          onPress={() => {
            setIsPressedMuster(true);
            setIsPressedAuto(false);
            handleButtonPress('TrainingManu');
          }}
          onPressOut={() => {setIsPressedMuster(false)}}>
            <Ionicons name={'trending-up-outline'} size={moderateScale(150)} color={theme.mode === 'dark' ? activeColors.text : activeColors.text}/>
        </Pressable>
        <Pressable
          style={[styles.pressableContainer, isPressedMuster && styles.pressablePressed, {backgroundColor: activeColors.background, borderColor: theme.mode === 'dark' ? activeColors.text : activeColors.text }]}
          onPress={() => {
            setIsPressedAuto(true);
            setIsPressedMuster(false);
            handleButtonPress('TrainingAuto');
          }}>
            <Ionicons name={'rocket-outline'} size={moderateScale(150)} color={theme.mode === 'dark' ? activeColors.text : activeColors.text}/>
        </Pressable>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  pressableContainer: {
    height: verticalScale(220),
    width: scale(220),
    borderRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: scale(10),
    marginTop: (20),
  },
  pressablePressed: {
    backgroundColor: 'darkgrey',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default Training;
