import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import * as math from 'mathjs';
import { ScaledSheet, moderateScale, verticalScale, scale } from 'react-native-size-matters';

export function AdditionUndSubtraktionAutoUebung() {
  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => {
      createExpression(!previousState);
      return !previousState;
    });
  };

  const getRandomNumber = (min, max, value) => {
    if (value === 'positiv') {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (value === 'negativ') {
      return -1 * (Math.floor(Math.random() * (max - min + 1)) + min);
    } else {
      if (Math.random() > 0.5) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
      } else {
        return 1 * (Math.floor(Math.random() * (max - min + 1)) + min);
      }
    }
  };

  const getRandomOperation = () => {
    const operations = ['+', '-'];
    return operations[getRandomNumber(0, 1, 'positiv')];
  };

  const createExpression = (useVariables) => {
    setSolution('');
    if (useVariables) {
      createExpressionWithVars();
    } else {
      createExpressionWithoutVars();
    }
  };

  const rewriteExpression = () => {
    const sign = Expression.split('');

    for (let i = 0; i <= Expression.length; i++) {
      if (sign[i] === '(') {
        if (sign[i - 2] === '-') {
          i++;
          if (sign[i] !== NaN) {
            sign[i - 3] = '-';
          } else if (sign[i] === NaN) {
            sign[i - 3] = '+';
          }
          while (sign[i] !== ')') {
            if (sign[i] === '+') {
              sign[i] = '-';
            } else if (sign[i] === '-') {
              sign[i] = '+';
            }
            i++;
          }
        }
      }
    }

    return sign.join("");
  };

  const solveExpression = () => {
    let newExpression = rewriteExpression();
    let result = {};
    let currentCoefficient = 0;
    let currentVariable = '';
    let currentSign = 1;
    let currentCoefficientList = [];
    const variables = ['x', 'y', 'z'];
    const parts = newExpression.split(' ');

    if (!isEnabled) {
      try {
        setSolution(math.evaluate(Expression));
      } catch (error) {
        console.error("Error evaluating expression: ", error);
        setSolution("Invalid Expression");
      }
      return;
    }

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const sign = part.split('');
      if (part === '+' || part === '-') {
        currentSign = part === '-' ? -1 : 1;
        continue;
      }
      for (let j = 0; j < sign.length; j++) {
        if (sign[j] === '(' || sign[j] === ')') {
          continue;
        } else if (sign[j] === '-' || !isNaN(parseInt(sign[j]))) {
          currentCoefficientList.push(sign[j]);
        } else if (variables.includes(sign[j])) {
          currentVariable = sign[j];
          if (currentCoefficientList.length > 0) {
            currentCoefficient = parseInt(currentCoefficientList.join('')) * currentSign;
            if (result.hasOwnProperty(currentVariable)) {
              result[currentVariable] += currentCoefficient;
            } else {
              result[currentVariable] = currentCoefficient;
            }
            currentCoefficientList = [];
          } else {
            if (result.hasOwnProperty(currentVariable)) {
              result[currentVariable] += currentSign;
            } else {
              result[currentVariable] = currentSign;
            }
          }
        }
      }
    }

    const simplifiedExpression = Object.entries(result)
      .map(([variable, coefficient]) => {
        if (variable === '_constant') {
          return `${coefficient}`;
        } else {
          const term = `${coefficient}${variable}`;
          return coefficient < 0 ? term : term.replace('+', '');
        }
      })
      .join(' + ');

    newExpression = correctSolution(simplifiedExpression);
    setSolution(newExpression);
  };

  const correctSolution = (simplifiedExpression) => {
    let parts = simplifiedExpression.split('');
    let correctedParts = [...parts];
    let count = 0;

    for (let i = 0; i <= simplifiedExpression.length; i++) {
      if (parts[i] === '-' && parts[i - 2] === '+') {
        correctedParts.splice(i - 2 - count, 2);
        correctedParts.splice(i - 1 - count, 0, ' ');
        count++;
      }
    }
    return correctedParts.join("");
  };

  const createExpressionWithVars = () => {
    const min = 2;
    const max = 5;
    const variables = ['x', 'y', 'z'];
    const expressionParts = [];
    const numberOfParts = getRandomNumber(min, max, 'positiv');

    for (let i = 0; i < numberOfParts; i++) {
      if (i !== 0) {
        expressionParts.push(getRandomOperation());
      }

      if (getRandomNumber(0, 1, 'positiv') === 1 && i > 0) {
        const numNumbersInBrackets = getRandomNumber(min, max - 2, 'positiv');
        const bracketExpression = [];

        for (let j = 0; j < numNumbersInBrackets; j++) {
          bracketExpression.push(`${getRandomNumber(1, 100)}${variables[Math.floor(Math.random() * variables.length)]}`);
          if (j !== numNumbersInBrackets - 1) {
            bracketExpression.push(getRandomOperation());
          }
        }

        expressionParts.push(`(${bracketExpression.join(' ')})`);
      } else {
        expressionParts.push(`${getRandomNumber(1, 100)}${variables[Math.floor(Math.random() * variables.length)]}`);
      }
    }

    const expression = expressionParts.join(' ');
    setExpression(expression);
  };

  const createExpressionWithoutVars = () => {
    const min = 2;
    const max = 5;
    const expressionParts = [];
    const numberOfParts = getRandomNumber(min, max, 'positiv');

    for (let i = 0; i < numberOfParts; i++) {
      if (i !== 0) {
        expressionParts.push(getRandomOperation());
      }

      if (getRandomNumber(0, 1, 'positiv') === 1 && i > 0) {
        const numNumbersInBrackets = getRandomNumber(min, max - 2, 'positiv');
        const bracketExpression = [];

        for (let j = 0; j < numNumbersInBrackets; j++) {
          bracketExpression.push(`${getRandomNumber(1, 100)}`);
          if (j !== numNumbersInBrackets - 1) {
            bracketExpression.push(getRandomOperation());
          }
        }

        expressionParts.push(`(${bracketExpression.join(' ')})`);
      } else {
        expressionParts.push(`${getRandomNumber(1, 100)}`);
      }
    }

    const expression = expressionParts.join(' ');
    setExpression(expression);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerExpression}>
        <Text style={stylesScaled.text}>
          {Expression ? Expression : createExpression(isEnabled)}
        </Text>
      </View>

      <View style={styles.button1}>
        <Pressable onPress={solveExpression}>
          <Text style={stylesScaled.text}>
            {Solution ? Solution : 'Lösung anzeigen'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.button2}>
        <Pressable onPress={() => createExpression(isEnabled)}>
          <Text style={stylesScaled.text}>
            Ausdruck erstellen
          </Text>
        </Pressable>
      </View>

      <View style={styles.toggleContainer}>
        <View>
          <Text style={styles.toggleText}>
            Variabeln
          </Text>
        </View>

        <View style={styles.switchContainer}>
          <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
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
  switchContainer: {
    position: 'absolute',
    top: '60%',
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
  switch: {

  }
});

const stylesScaled = ScaledSheet.create({
  text: {
    textAlign: 'center',
    fontSize: moderateScale(32),
  },
});
