import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import * as math from 'mathjs';
import { ScaledSheet, moderateScale, verticalScale, scale } from 'react-native-size-matters';
import MathView from 'react-native-math-view';

export function MengenoperationenUebung() {

  const mathMid = '\\Large';
  const math = '\\Huge';

  const [set1, setSet1] = useState([]);
  const [set2, setSet2] = useState([]);
  const [Operation, setOperation] = useState('');
  const [Solution, setSolution] = useState('');

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createExpression = () => {
    setSolution('');
    setSet1(sortNumbers(createSet()));
    setSet2(sortNumbers(createSet()));
    setOperation(getOperation());
  }

  const solveExpression = () => {
    let result = [];

    if (Operation === '\\cup') {
      result = [...new Set([...set1, ...set2])];
    } else if (Operation === '\\cap') {
      result = set1.filter(value => set2.includes(value));
    } else if (Operation === '\\backslash') {
      result = set1.filter(value => !set2.includes(value));
    }

    result = sortNumbers(result);
    console.log(result);
    setSolution(`\\{ ${(result.join(', '))} \\}`);
  }

  const sortNumbers = (set) => {
    return set.sort((a, b) => a - b);
  }

  const getOperation = () => {
    const operations = ['\\cap', '\\cup', '\\backslash'];
    return operations[getRandomNumber(0, operations.length - 1)];
  }

  const createSet = () => {
    const minLength = 3;
    const maxLength = 5;
    const length = getRandomNumber(minLength, maxLength);
    const elementMin = -9;
    const elementMax = 9;
    const set = [];
  
    while (set.length < length) {
      let randomNum = getRandomNumber(elementMin, elementMax);
      while (set.includes(randomNum)) {
        randomNum = getRandomNumber(elementMin, elementMax);
      }
      set.push(randomNum);
    }
  
    return set;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerSet1}>
        <MathView math={`${mathMid} \\mathbb{A} = \\{ ${set1.join(', ')} \\}`} />
      </View>

      <View style={styles.containerSet2}>
        <MathView math={`${mathMid} \\mathbb{B} = \\{ ${set2.join(', ')} \\}`} />
      </View>

      <View style={styles.containerExpression}>
        <MathView math={`${math} \\mathbb{A} ${math} ${Operation} ${math} \\mathbb{B}`} />
      </View>

      <View style={styles.containerSolution}>
        <Pressable onPress={solveExpression}>
          <Text style={styles.text}>
            {Solution ? <MathView math={`${mathMid} ${Solution}`} /> : 'Lösung anzeigen'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.containerButtonCreate}>
        <Pressable onPress={createExpression}>
          <Text style={styles.text}>
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
    padding: 20,
    marginVertical: verticalScale(20),
  },
  containerSet1: {
    paddingTop: 40,
  },
  containerSet2: {
    marginTop: 40,
  },
  containerButtonCreate: {
    marginTop: 60,
  },
  text: {
    fontSize: 30,
  },
});

const stylesScaled = ScaledSheet.create({
  text: {
    textAlign: 'center',
    fontSize: moderateScale(32),
  },
});
