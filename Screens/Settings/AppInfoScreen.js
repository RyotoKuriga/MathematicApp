import {Text, View, StyleSheet} from 'react-native';
import { colors } from '../../theme';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/themeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { im } from 'mathjs';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export function AppInfoScreen () {

  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: activeColors.background}]}>
    <View>
      <View style={[styles.textContainer]}>
        <Text style={[styles.text, {color: activeColors.text}]}>
          Die App wurde im Rahmen einer Maturaarbeit entwickelt, um grundlegenden mathematischen Stoff leicht zugänglich zu machen. Es ist möglich, dass noch Fehler bestehen; falls dies so ist - oder bei anderen Anmerkungen - würde ich mich über eine Rückmeldung freuen.
        </Text>
        <Text style={[styles.text, {color: activeColors.text}]}>
          Der Entwickler Tristan
        </Text>
      </View>    
    </View>

    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    margin: verticalScale(20)
  },
  text: {
    fontSize: moderateScale(20),
    lineHeight: verticalScale(30),
    textAlign: 'center',
  }

})
