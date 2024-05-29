import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Animated} from 'react-native';
import React, { useState, useEffect, useRef} from 'react';
import MathJax from 'react-native-mathjax';


export function MultiplikationUndDivisionAutoUebung() {
  const divStyle = "font-size: 30px; background-color: 'white'; border: none; font-family: Arial; text-align: center; text-justify: center;";

  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');

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

  const getRandomOperation = () => {
    const operations = ['*', '/'];
    return operations[getRandomNumber(0, 1, 'positiv')];
  };

  const turnReadable = (expression) => {
    let simbol = expression.split(''); 
    for (let i = 0; i < expression.length; i++) {
      if (simbol[i] !== ' ') {
        console.log('bananna')
      }
      console.log(simbol[i])
    }
  }



  const createExpression = () => {
    const min = 2;
    const max = 4;
    const variables = ['a', 'b', 'c']; // Definiere die Variablen
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
    expression = turnReadable(Expression);
  };

    

  const solveExpression = () => {

  }
    
  
  


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
  button1: {
    position: 'absolute',
    top: '60%',
  },
  button2: {
    position: 'absolute',
    top: '80%',
    
  },
});