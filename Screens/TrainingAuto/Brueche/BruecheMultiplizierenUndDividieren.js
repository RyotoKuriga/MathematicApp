import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as math from 'mathjs';
import MathView from 'react-native-math-view';
import { ScaledSheet, moderateScale, verticalScale, scale } from 'react-native-size-matters';
import Slider from '@react-native-community/slider';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';

export function BruecheMultiplizierenUndDividieren() {
  const [Expression1, setExpression1] = useState('');
  const [Expression2, setExpression2] = useState('');
  const [Solution, setSolution] = useState('');
  const [Result, setResult] = useState('');
  const [Brueche, setBrueche] = useState(false);
  const [SliderValue, setSliderValue] = useState(3);

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];


  const getRandomInt = (min, max, exclude) => {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (exclude.includes(num));
    return num;
  }

  const getRandomOperation = () => {
    const operators = ['*', '/']
    return operators[getRandomInt(0, 1, [])];
  }

  const createExpression = () => {
    const nums = [];
    const amount = SliderValue;
    const min = 0;
    const max = 20;
    let expr = [];
    let operation;
    let calculation = [];
    let sol;

    setSolution('');
    
 
    for (let i = 0; i < amount; i++) {
      nums.push({oben: getRandomInt(min, max, [0]), unten: getRandomInt(min, max, [0, 1])});
      expr.push(`\\dfrac{${nums[i].oben}}{${nums[i].unten}}`);
      calculation.push(`(${nums[i].oben} / ${nums[i].unten})`)

      if (i < amount - 1) {
        operation = getRandomOperation();
        expr.push(`${operation}`);
        calculation.push(operation);
      }  
    };
    sol = math.simplify(`${calculation.join(' ')}`);
    console.log(sol.toString());
    sol = getFraction(sol.toString());

    expr = expr.join(' ');
    expr = expr.replace(/\*/g, '\\times');
    setExpression1(expr);
    setResult(sol);
  }

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

    if (part1.length === 0 || part2.length === 0) {
      return string;
    } else if (part1 == 1) {
      return part2;
    } else {
        const num1 = parseFloat(part1);
        const num2 = parseFloat(part2);

        if (num1 < 0 || num2 < 0) {
            return `-\\dfrac{${math.abs(num2)}}{${math.abs(num1)}}`;
        } else {
            return `\\dfrac{${num2}}{${num1}}`;
        }
      
    }
  };

  const solveExpression = () => {
    setSolution(Result);
  }



  return (
    <View style={[styles.container, {backgroundColor: activeColors.background}]}>
      <View style={styles.containerExpression}>
        <Text style={[stylesScaled.text, {color: activeColors.text}]}>
          {Expression1 ? <MathView math={`\\Large \\textcolor{${activeColors.text}}{${Expression1}}`}/> : createExpression()}
        </Text>
      </View>

      <View style={styles.containerExpression2}>
        <Text style={stylesScaled.text}>
          {Expression2 ? <MathView math={`\\Large \\textcolor{${activeColors.text}}{${Expression2}}`}/> : createExpression}
        </Text>
      </View>

      <View style={styles.button1}>
        <Pressable onPress={solveExpression}>
          <Text style={[stylesScaled.text, {color: activeColors.text}]}>
            {Solution ? <MathView math={`\\Large \\textcolor{${activeColors.text}}{${Solution}}`}/> : 'Lösung anzeigen'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.button2}>
        <Pressable onPress={createExpression}>
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
  containerExpression2: {
    padding: verticalScale(0),
    marginVertical: verticalScale(0),
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
    marginTop: verticalScale(320),
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
