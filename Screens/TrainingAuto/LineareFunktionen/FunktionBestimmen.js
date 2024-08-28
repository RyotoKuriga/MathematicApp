import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import * as math from 'mathjs';
import MathView from 'react-native-math-view';
import { ScaledSheet, moderateScale, verticalScale, scale } from 'react-native-size-matters';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';

export function FunktionBestimmen() {
  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [Result, setResult] = useState('');

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const createExpression = () => {
    setSolution(0);

    const point1 = {
        x: math.randomInt(-10, 20),
        y: math.randomInt(-10, 20),
    };

    const point2 = {
        x: math.randomInt(-10, 10),
        y: math.randomInt(-10, 10),
    };

    while (point2.x === point1.x) {
        point2.x = math.randomInt(-10, 10);
    }

    const pointString = `P_1(${point1.x} ; ${point1.y}) \\ P_2(${point2.x} ; ${point2.y})`;
    setExpression(pointString);

    let m = math.simplify(`(${point1.y} - ${point2.y}) / (${point1.x} - ${point2.x})`).toString();
    let q = math.simplify(`${point1.y} - (${m} * ${point1.x})`).toString();

    m = getFraction(m);
    q = getFraction(q);

    if (parseFloat(q) > 0 || !q.includes('-')) {
        if (m === '0') {
            setResult(`y = ${q}`);
        } else if (m === '1') {
            setResult(`y = x + ${q}`);
        } else if (q === '0') {
            setResult(`y = ${m}x`);
        } else {
            setResult(`y = ${m}x + ${q}`);
        }
    } else {
        if (m === '0') {
            setResult(`y = ${q}`);
        } else if (m === '1') {
            setResult(`y = x ${q}`);
        } else if (q === '0') {
            setResult(`y = ${m}x`);
        } else {
            setResult(`y = ${m}x ${q}`);
        }
    }
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
          {Expression ? <MathView math={`\\Large \\textcolor{${activeColors.text}}{${Expression}}`}/> : createExpression()}
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
        <Pressable onPress={() => createExpression()}>
          <Text style={[stylesScaled.text, {color: activeColors.text}]}>
            Ausdruck erstellen
          </Text>
        </Pressable>
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
    top: verticalScale(280),
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
});

const stylesScaled = ScaledSheet.create({
  text: {
    textAlign: 'center',
    fontSize: moderateScale(32),
  },
});
