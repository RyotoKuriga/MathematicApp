import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Animated} from 'react-native';
import React, { useState, useEffect, useRef} from 'react';
import MathJax from 'react-native-mathjax';
import Slider from '@react-native-community/slider';

export function AusklammernAuto() {
  const divStyle = "font-size: 30px; background-color: 'white'; border: none; font-family: Arial; text-align: center; text-justify: center;";

  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [Factor, setFactor] = useState('');
  const [Divided, setDivided] = useState('');



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
  }

  const findGCD = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
  };

  const checkGGT = (nums) => {
    if (nums.length === 0) {
        console.log("Die Liste ist leer");
        return;
    }

    let gcd = nums[0];
    for (let i = 1; i < nums.length; i++) {
        gcd = findGCD(gcd, nums[i]);
    }

    return gcd;
  };


  const createExpression = () => {
    setSolution(0);
    const min = 2;
    const max = 3;
    const variables = ['x', 'y', 'z']; // Definiere die Variablen
    const expressionParts = [];
    const expressionNums = [];
    const numberOfParts = getRandomNumber(min, max, 'positiv'); // Anzahl der Teile im Ausdruck
    setFactor(getRandomNumber(1, 10));
    let randomNumber = 0;

    for (let i = 0; i < numberOfParts; i++) {
        if (i !== 0) {
            expressionParts.push(getRandomOperation());
        }

        randomNumber = getRandomNumber(1, 20);
        expressionParts.push(`${randomNumber}${variables[Math.floor(Math.random() * variables.length)]}`);
        expressionNums.push(randomNumber * Factor);
    }

    console.log(expressionNums)
    setFactor(checkGGT(expressionNums));

    const dividedExpressionParts = expressionParts.map(part => {
        if (!isNaN(parseFloat(part))) {
            return parseFloat(part) / Factor;
        } else {
            return part;
        }
    });

    setDivided(dividedExpressionParts);

    const expression = expressionParts.join(' ');
    setExpression(expression);
};

  const solveExpression = () => {
    setSolution(`${Factor}(${Divided})`)



  }

    
  
  


  return (
    <View style={styles.container}>
      <View style={styles.containerExpression}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          {Expression ? Expression : createExpression}
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
  containerSliders: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
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