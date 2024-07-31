import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import MathView from 'react-native-math-view';

export function MengenZeichen() {
  const [number, setNumber] = useState('');
  const [set, setSet] = useState('');
  const [solution, setSolution] = useState(null);
  const [correct, setCorrect] = useState('');
  const [chosenSymbol, setChosenSymbol] = useState('');

  const math = '\\Huge';

  const getRandomNumberNum = (min, max) => {
    const decimalChance = Math.random();
    const endlessChance = Math.random();
    
    let num = (Math.random() * (max - min + 1) + min).toFixed(3);
    
    if (decimalChance < 0.25) {
      num = parseFloat(num).toFixed(3);
    } else if (endlessChance < 0.25 && !Number.isInteger(parseFloat(num))) {
      num = `${num}...`;
    } else {
      num = Math.floor(num).toString();
    }

    return num.toString();
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createExpression = () => {
    let number = getRandomNumberNum(-20, 20);
    if (Math.random() < 0.5) {
      number = `\\{${number}\\}`;
    }
    setNumber(number);
    setChosenSymbol('');  // Reset chosen symbol

    const selectedSet = getSet();
    setSet(selectedSet);

    const generatedSolution = getSolution(number, selectedSet);
    setSolution(generatedSolution);
  };

  const getSet = () => {
    const sets = ['\\mathbb{N}', '\\mathbb{Z}', '\\mathbb{Q}', '\\mathbb{R}'];
    return sets[getRandomNumber(0, sets.length - 1)];
  };

  const isInteger = (num) => {
    return typeof num === 'number' && isFinite(num) && Math.floor(num) === num;
  };

  const isPositive = (num) => {
    return num >= 0;
  };

  const isFakeEndless = (numStr) => {
    return numStr.includes('...');
  };

  const getSolution = (number, selectedSet) => {
    const hasBraces = number.includes('{') && number.includes('}');
    const parsedNumber = parseFloat(number.replace(/[{}...]/g, ''));

    if (hasBraces) {
      return (selectedSet === '\\mathbb{N}' || selectedSet === '\\mathbb{Z}' || selectedSet === '\\mathbb{Q}' || selectedSet === '\\mathbb{R}') ? '\\not\\subset' : '\\subset';
    }

    const isElementOfSet = (num, set) => {
      switch (set) {
        case '\\mathbb{N}':
          return isPositive(num) && isInteger(num);
        case '\\mathbb{Z}':
          return isInteger(num);
        case '\\mathbb{Q}':
          return !isNaN(num) && isFinite(num);
        case '\\mathbb{R}':
          return !isNaN(num);
        default:
          return false;
      }
    };

    if (isFakeEndless(number)) {
      return (selectedSet === '\\mathbb{R}') ? '\\in' : '\\notin';
    } else {
      return isElementOfSet(parsedNumber, selectedSet) ? '\\in' : '\\notin';
    }
  };

  const buttonPressed = (button) => {
    if (button === solution) {
      setCorrect('Richtig!');
    } else {
      setCorrect('Falsch!');
    }
    setChosenSymbol(button);  // Set chosen symbol
    setTimeout(() => {
      createExpression();
    }, 1000);
  };

  useEffect(() => {
    createExpression();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerCorrect}>
        <Text style={styles.textCorrect}>
          {correct}
        </Text>
      </View>

      <View style={styles.expression}>
        <MathView math={`${math} ${number} \\quad ${chosenSymbol ? chosenSymbol : '\\square'} \\quad ${set}`} />
      </View>

      <View style={styles.buttonGrid}>
        <View style={styles.buttons}>
          <Pressable onPress={() => buttonPressed('\\in')} style={({ pressed }) => [{ backgroundColor: pressed ? '#d3d3d3' : 'grey' }]}>
            <MathView math={`${math} \\in`} />
          </Pressable>
        </View>

        <View style={styles.buttons}>
          <Pressable onPress={() => buttonPressed('\\notin')} style={({ pressed }) => [{ backgroundColor: pressed ? '#d3d3d3' : 'grey' }]}>
            <MathView math={`${math} \\notin`} />
          </Pressable>
        </View>

        <View style={styles.buttons}>
          <Pressable onPress={() => buttonPressed('\\subset')} style={({ pressed }) => [{ backgroundColor: pressed ? '#d3d3d3' : 'grey' }]}>
            <MathView math={`${math} \\subset`} />
          </Pressable>
        </View>

        <View style={styles.buttons}>
          <Pressable onPress={() => buttonPressed('\\not\\subset')} style={({ pressed }) => [{ backgroundColor: pressed ? '#d3d3d3' : 'grey' }]}>
            <MathView math={`${math} \\not\\subset`} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  expression: {
    paddingVertical: 100,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '80%',
  },
  buttons: {
    justifyContent: 'center',
    backgroundColor: 'grey',
    margin: 10,
    width: '40%',
    padding: 10,
    alignItems: 'center',
  },
  containerCorrect: {
    marginTop: 20,
  },
  textCorrect: {
    fontSize: 30,
  }
});
