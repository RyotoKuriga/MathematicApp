import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as math from 'mathjs';
import { ScaledSheet, moderateScale, verticalScale, scale } from 'react-native-size-matters';
import MathViewFallback from 'react-native-math-view/src/fallback';
import Slider from '@react-native-community/slider';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';

export function MultiplikationUndDivisionAutoUebung() {
  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [Result, setResult] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [SliderValue, setSliderValue] = useState(3);

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const mathText = '\\LARGE'

  const getRandomInt = (min, max, exclude) => {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (exclude.includes(num));
    return num;
  }

  const createExpression = () => {
    setSolution('');

    const vars = ['a', 'b', 'c'];
    const signs = ['*', '/']
    const amount = SliderValue;
    let expr = [];
    let sol;

    for (let i = 0; i < amount; i++) {
      const randomNum = getRandomInt(0, 10, [0, 1]);
      const randomVar = vars[getRandomInt(0, 2, [])];
      expr.push(randomNum + randomVar);

      if (i < amount - 1) {
        expr.push(signs[getRandomInt(0, 1, [])]);
      };
    };


    expr = expr.join('  ');
    
    


    sol = math.simplify(`${expr}`).toString();

    sol = sol.split(' ');
    sol = sol.join('');
    console.log(sol);
    sol = getFraction(sol);

    expr = expr.replace(/\*/g, ' \\times ');
    sol = sol.replace(/\*/g, ' ');


    setExpression(expr);
    setResult(sol);
  };

  const getFraction = (string) => {
    const array = string.split("");
    let space = false;
    let part1 = [];
    let part2 = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "/") {
            space = true;
        } else if (!space) {
            part2.push(array[i]);
        } else {
            part1.push(array[i]);
        }
    }

    part1 = part1.join("");
    part2 = part2.join("");

    console.log(part1 +'  ' + part2);

    if (part1.length === 0 || part2.length === 0) {
      return string;
    } else if (part1 == 1) {
      return part2;
    } else {
        
      return `\\dfrac{${part2}}{${part1}}`;
    }
  };

  const solveExpression = () => {
    setSolution(Result);
  }

  return (
    <View style={[styles.container, {backgroundColor: activeColors.background}]}>
      <View style={styles.containerExpression}>
        <Text style={[stylesScaled.text, {color: activeColors.text}]}>
          {Expression ? <MathViewFallback math={`${mathText} \\textcolor{${activeColors.text}}{${Expression}}`}/> : createExpression(isEnabled)}
        </Text>
      </View>

      <View style={styles.button1}>
        <Pressable onPress={solveExpression}>
          <Text style={[stylesScaled.text, {color: activeColors.text}]}>
            {Solution ? <MathViewFallback math={`${mathText} \\textcolor{${activeColors.text}}{${Solution}}`}/> : 'Lösung anzeigen'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.button2}>
        <Pressable onPress={() => createExpression(isEnabled)}>
          <Text style={[stylesScaled.text, {color: activeColors.text}]}>
            Ausdruck erstellen
          </Text>
        </Pressable>
      </View>

      <View style={[styles.toggleContainer, {borderColor: activeColors.text}]}>
        <View>
          <Text style={[styles.toggleText, {color: activeColors.text}]}>
            Anzahl Glieder
          </Text>
        </View>
        
        <View style={styles.switchContainer}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={2}
            maximumValue={4}
            minimumTrackTintColor="#E5CBC6"
            maximumTrackTintColor="#000000"
            step={1}
            value={SliderValue}
            onValueChange={value => {setSliderValue(value)}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  containerExpression: {
    padding: verticalScale(20),
    marginVertical: verticalScale(20),
  },
  button1: {
    position: 'absolute',
    top: verticalScale(170),
  },
  button2: {
    position: 'absolute',
    top: verticalScale(240),
  },
  text: {
    fontSize: scale(40),
  },
  vars: {
    position: 'absolute',
    fontSize: scale(20),
    marginTop: verticalScale(310),
  },
  switch: {
    position: 'absolute',
    marginTop: verticalScale(360),
  },
  switchContainer: {
    position: 'absolute',
    top: '50%',
  },
  toggleContainer:{
    alignItems: 'center',
    borderColor: 'black',
    height: 100,
    width: 300,
    borderWidth: 4,
    position: 'absolute',
    marginTop: verticalScale(320),
    backgroundColor: '',
    borderRadius: 20,
  },
  toggleText: {
    fontSize: 30,
  },
  slider: {
    
  }
});

const stylesScaled = ScaledSheet.create({
  text: {
    textAlign: 'center',
    fontSize: moderateScale(32),
  },
});
