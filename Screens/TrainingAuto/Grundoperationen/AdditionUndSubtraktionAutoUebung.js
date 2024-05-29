import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Animated} from 'react-native';
import React, { useState, useEffect, useRef} from 'react';
import MathJax from 'react-native-mathjax';
import Slider from '@react-native-community/slider';

export function AdditionUndSubtraktionAutoUebung() {
  const divStyle = "font-size: 30px; background-color: 'white'; border: none; font-family: Arial; text-align: center; text-justify: center;";

  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [SliderStateParts, setSliderStateParts] = useState('');



  // Function for random number
  const getRandomNumber = (min, max, value) => {
    
    if (value === 'positiv') {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if ( value === 'negativ') {
      return -1 * (Math.floor(Math.random() * (max - min + 1)) + min);
    } else  {
      if (Math.random() > 0.5) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
      } else {
        return 1 * (Math.floor(Math.random() * (max - min + 1)) + min);
      }
    }
  };

  // Function for random operation
  const getRandomOperation = () => {
    const operations = ['+', '-'];
    return operations[getRandomNumber(0, 1, 'positiv')];
  };

  // Function for creation
  const createExpression = () => {
    setSolution(0);
    let type = getRandomNumber(1, 8, 'positiv');
    if (type < 2) {
      createExpressionWithoutBrackets();
    } else {
      createExpressionWithBrackets();
    };
  };

  const rewriteExpression = () => {
    const sign = Expression.split('')

    for (let i = 0; i <= Expression.length; i++) {
      if (sign[i] === '(') {
        if (sign[i - 2] === '-') {
          i++
          if (sign[i] !== NaN) {
            sign[i - 3] = '-';
          } else if (sign[i] === NaN) {
            sign[i - 3] = '+'
          } 
          while (sign[i] !== ')') {
            if (sign[i] === '+') {
              sign[i] = '-';             
            } else if (sign[i] === '-') {
              sign[i] = '+';            
            } 
            i++;
          };                                
        };
      };
    };

    

    return(sign.join(""));
  };

  // Function, to solve
  const solveExpression = () => {
    let newExpression = rewriteExpression();
    let result = {};
    let currentCoefficient = 0;
    let currentVariable = '';
    let currentSign = 1;
    let currentCoefficientList = [];
  
    const variables = ['x', 'y', 'z'];
    const parts = newExpression.split(' ');
  
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
  }



  
  

  const createExpressionWithBrackets = () => {
    const min = 3
    const max = 5
    const variables = ['x', 'y', 'z']; // Definiere die Variablen
    const expressionParts = [];
    const numberOfParts = getRandomNumber(min, max, 'positiv'); // Anzahl der Teile im Ausdruck
    
  
    for (let i = 0; i < numberOfParts; i++) {
      if (i !== 0) {
        expressionParts.push(getRandomOperation());
      };
  
      if (getRandomNumber(0, 1, 'positiv') === 1 && i > 0) {
        // Zufällig Klammern hinzufügen
        const numNumbersInBrackets = getRandomNumber(min, max - 2, 'positiv'); // zufällige Anzahl von Zahlen in den Klammern
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


  const createExpressionWithoutBrackets = () => {
    const min = SliderStateParts;
    const max = SliderStateParts;
    const variables = ['x', 'y', 'z']; // variabeln
    const expressionParts = [];
    const numberOfParts = getRandomNumber(min, max, 'positiv'); //anzahl ausdrücke
  
    for (let i = 0; i < numberOfParts; i++) {
        expressionParts.push(`${getRandomNumber(1, 100)}${variables[Math.floor(Math.random() * variables.length)]}`);
        if (i + 1 < numberOfParts) {
          expressionParts.push(`${getRandomOperation()}`)
        }
        
    }
  
    const expression = expressionParts.join(' ');
    setExpression(expression);
  };
    
  
  


  return (
    <View style={styles.container}>
      <View style={styles.containerExpression}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          {Expression ? Expression : createExpression()}
        </Text>
      </View>
  
      
      <View style={styles.button1}>
        <Pressable onPress={solveExpression}>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            {Solution ? Solution : 'Lösung anzeigen'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.button2}>
        <Pressable onPress={createExpression}>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            Ausdruck erstellen
          </Text>
        </Pressable>
      </View>

      <View style={styles.containerSliders}>

        <View style={styles.innerContainerSliders}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            maximumValue={4}
            minimumTrackTintColor="white"
            maximumTrackTintColor="grey"
            step={1}
            inverted='true'
          />

        </View>

        <View style={styles.innerContainerSliders}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            maximumValue={4}
            minimumTrackTintColor="white"
            maximumTrackTintColor="grey"
            step={1}
            inverted='true'
          />

        </View>

        <View style={styles.innerContainerSliders}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            maximumValue={4}
            minimumTrackTintColor="white"
            maximumTrackTintColor="grey"
            step={1}
            inverted='true'
          />

        </View>

        <View style={styles.innerContainerSliders}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            maximumValue={4}
            minimumTrackTintColor="white"
            maximumTrackTintColor="grey"
            step={1}
            inverted='true'
          />

        </View>

        
        
      </View>      
    </View>
    
  );
  
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerExpression: {
    padding: 40,
    marginVertical: 60,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    
  },
  containerSliders: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center', // Zentrieren des Containers horizontal
    paddingHorizontal: 20, // Horizontaler Abstand zum Rand
    bottom: '25%',
  },
  innerContainerSliders: {
    transform: [{rotateZ: '90deg'}],
    marginHorizontal: 15,
    height: 50,
    width: 50,
  },
  button1: {
    position: 'absolute',
    top: '35%',
  },
  button2: {
    position: 'absolute',
    top: '50%',
    
  },
  slider: {
    width: 200,
    height: 30,
    paddingHorizontal: 50, 
  }
});
