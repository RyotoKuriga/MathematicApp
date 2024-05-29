import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Animated} from 'react-native';
import React, { useState, useEffect, useRef} from 'react';
import MathJax from 'react-native-mathjax';
import Slider from '@react-native-community/slider';

export function MengenoperationenUebung() {
  const divStyle = "font-size: 30px; background-color: 'white'; border: none; font-family: Arial";

  const [ExpressionSets, setExpressionSets] = useState('');
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

  const rewriteSet = (set) => {
    let rewrittenSet = [];

    for (let i = 0; i < set.length; i++) {
      if (isNaN(set[i])) {
        rewrittenSet[i] = `$\\mathbb{${set[i]}} = \\{`;
      } else if (!isNaN(set[i])) {  
        if (i + 1 === set.length) {
          rewrittenSet[i] = `${set[i]}`;
        } else {
          rewrittenSet[i] = `${set[i]}, `;
        }
      };
    };

    rewrittenSet.push('\\}$ <br><br>')

    return rewrittenSet.join('');

  };
  
  const rewriteExpression = (expression, operations) => {
    let rewrittenExpression = ['$'];
    for (let i = 0; i < expression.length; i++) {
      if (operations.includes(expression[i])) {
        if (expression[i] === operations[0]) {
          rewrittenExpression.push('\\cap')
        } else if (expression[i] === operations[1])  {
          rewrittenExpression.push('\\cup')
        } else if (expression[i] === operations[2]) {
          rewrittenExpression.push('\\backslash')
        }
      } else {
        rewrittenExpression.push(expression[i])
      }
    }
    rewrittenExpression.push('$');

    return rewrittenExpression;

  }
  


  const createSets = () => {
    let sets = [];
    let setsVisual = [];
    const setAmount = 4;
    const setNames = ['A', 'B', 'C', 'D'];
    function isDuplicate(set, num) {
        return set.includes(num);
    }

    function isDuplicateSet(set, letter) {
      for (let i = 0; i < set.length; i++) {
          if (set[i][0] === letter) {
              return true;
          }
      }
      return false;
  }

    for (let i = 0; i < setAmount; i++) {
        sets.push([]);

        let randomSet;
        do {
            randomSet = setNames[getRandomNumber(0, setNames.length - 1)];
        } while (isDuplicateSet(sets, randomSet));

        sets[i].push(randomSet);

        const setElements = getRandomNumber(1, 4);

        for (let j = 0; j < setElements; j++) {
            let randomNumber;
            do {
                randomNumber = getRandomNumber(1, 15);
            } while (isDuplicate(sets[i], randomNumber));
            sets[i].push(randomNumber);
        }
        setsVisual[i] = rewriteSet(sets[i]);
    }

    setExpressionSets(setsVisual.join(''));

    console.log(sets);

    createExpression(sets)
  };

  const getRandomOperation = (operations) => {
    return operations[Math.floor(Math.random() * operations.length)];
  }

  const createExpression = (sets) => {
    const operations = ['Schnittmenge', 'Vereinigungsmenge', 'Restmenge']
    let expressionParts = [];
    let rewrittenExpression = [];

    for (let i = 0 ; i < sets.length; i++) {
      if (i !== 0) {
        expressionParts.push(getRandomOperation(operations));
      };

      expressionParts.push(sets[i][0] )
    }

    console.log(expressionParts)

    rewrittenExpression = rewriteExpression(expressionParts, operations)

    setExpression(rewrittenExpression.join(' '));
  }


  const solveExpression = () => {

  }


  


  return (
    <View>
      <MathJax
        html={
          `<div style='${divStyle}'>
            ${ExpressionSets}
          </div>`
        }
      />

      <MathJax
        html={
          `<div style='${divStyle}'>
            ${Expression}
          </div>`
        }
      />

      <View style={styles.container}>

        <Slider
          style={{width: 200, height: 40}}
          minimumValue={1}
          maximumValue={4}
          minimumTrackTintColor="pink"
          maximumTrackTintColor="grey"
          step={1}
          renderStepNumber='true'

        />
      
    

        <View style={styles.containerExpression}>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
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
          <Pressable onPress={createSets}>
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              Ausdruck erstellen
            </Text>
          </Pressable>
        </View>
      </View>


    </View>
    
    
  );
  
  

}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    alignItems: 'center',
    flexDirection: 'column',
  },
  containerExpression: {
    padding: 40,
    marginVertical: 60,
    position: 'absolute',
    top: '10%',
  },
  containerExpressionSets: {
    padding: 40,
    marginVertical: 60,
    position: 'absolute',
    top: '-10%',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    
  },
  button1: {
    position: 'absolute',
    top: 100,
  },
  button2: {
    position: 'absolute',
    top: 200,   
  },
});