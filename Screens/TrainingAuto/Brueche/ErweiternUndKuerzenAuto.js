import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import MathView from 'react-native-math-view';
import * as math from 'mathjs';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export function ErweiternUndKuerzenAuto() {

  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [Result, setResult] = useState('');

  const mathText = '\\LARGE';


  const getRandomNumber = (min, max) => {
    let num;
    do {
        num = math.randomInt(min, max);
    } while (num === 0);
    return num;
  };

  const findGCD = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };


  const createExpression = () => {
    createExpressionWithVars();
    

  };

  const createExpressionWithVars = () => {
    let num1 = getRandomNumber(-10, 10);
    let num2 = getRandomNumber(-10, 10);
    let factor = getRandomNumber(1, 30);
    const var1 = 'a';
    const varPotenzOben = getRandomNumber(2, 5);
    const varPotenzUnten = getRandomNumber(2, 5);
    let varPotenzResultOben = 0;
    let varPotenzResultUnten = 0;

    if (varPotenzOben > varPotenzUnten) {
      varPotenzResultUnten = 0;
      varPotenzResultOben = varPotenzOben - varPotenzUnten;
    } else if (varPotenzUnten > varPotenzOben) {
      varPotenzResultOben = 0;
      varPotenzResultUnten = varPotenzUnten - varPotenzOben;
    };

    


    num1 = num1 * factor;
    num2 = num2 * factor;
    factor = findGCD(num1, num2)
    
    setSolution('');

    setExpression(`\\dfrac{${num1} ${var1}^${varPotenzOben}}{${num2} ${var1}^${varPotenzUnten}}`);

    const expr = `(${num1} * ${var1}^${varPotenzOben}) / (${num2} * ${var1}^${varPotenzUnten})`;

    const simplified = math.simplify(expr, { num1, num2, var1, varPotenzOben, varPotenzUnten });

    console.log('---------------')
    console.log(simplified.toString());


    
    setResult(getFraction(simplified.toString()));
  };

  const createExpressionWithoutVars = () => {
    let num1 = getRandomNumber(-10, 10);
    let num2 = getRandomNumber(-10, 10);
    let factor = getRandomNumber(1, 30);
    let var1 = 'a';

    num1 = num1 * factor;
    num2 = num2 * factor;
    factor = findGCD(num1, num2)

    
    setSolution('');

    setExpression(`\\dfrac{${num1}}{${num2}}`);

    if (num2 / factor === 1) {
      setResult(`${num1 / factor}`)
    } else if (num1 > 0 && num2 < 0 || num2 > 0 && num1 < 0) {
      setResult(`-\\dfrac{${math.abs(num1 / factor)}}{${math.abs(num2 / factor)}}`)
    } else {
      setResult(`\\dfrac{${num1 / factor}}{${num2 / factor}}`)
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerExpression}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>
          {Expression ? <MathView math={`${mathText} ${Expression}`}/>  : 'Erstelle einen Ausdruck'}
        </Text>
      </View>

      <View style={styles.button1}>
        <Pressable onPress={solveExpression}>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            {Solution ? <MathView math={`${mathText} ${Solution}`}/> : 'Lösung anzeigen'}
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
    backgroundColor: 'white',
  },
  containerExpression: {
    padding: 40,
    marginVertical: 60,
  },
  button1: {
    position: 'absolute',
    top: '35%',
  },
  button2: {
    position: 'absolute',
    top: '50%',
  },
});

