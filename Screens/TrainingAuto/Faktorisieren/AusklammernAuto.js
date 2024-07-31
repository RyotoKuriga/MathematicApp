import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import * as math from 'mathjs';
import MathView from 'react-native-math-view';
import { ScaledSheet, moderateScale, verticalScale, scale } from 'react-native-size-matters';

export function AusklammernAuto() {
  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [Factor, setFactor] = useState('');
  const [Divided, setDivided] = useState('');
  const [Brueche, setBrueche] = useState(false);
  const [Result, setResult] = useState('');

  const getRandomNumber = (min, max, value) => {
    if (value === 'positiv') {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (value === 'negativ') {
      return -1 * (Math.floor(Math.random() * (max - min + 1)) + min);
    } else {
      return (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * (max - min + 1)) + min);
    }
  };

  const getRandomOperation = () => {
    const operations = ['+', '-'];
    return operations[getRandomNumber(0, 1, 'positiv')];
  };

  const findGCD = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const checkGGT = (nums) => {
    if (nums.length === 0) return;

    let gcd = nums[0];
    for (let i = 1; i < nums.length; i++) {
      gcd = findGCD(gcd, nums[i]);
    }
    return gcd === -1 ? 1 : gcd;
  };

  const createExpression = () => {
    if (Brueche) {
      createExpressionWithoutVars();
    } else {
      createExpressionWithoutVars();
    };
  }

  const createExpressionWithVars = () => {
    setSolution('');
    const variables = ['a', 'b', 'c'];
    const terms = [];
    const numTerms = Math.floor(Math.random() * 2) + 2;

    for (let i = 0; i < numTerms; i++) {
        const coefficient = Math.floor(Math.random() * 19) + 1;
        let term = `${coefficient}`;

        variables.forEach(variable => {
            if (Math.random() > 0.5) {
                const exponent = Math.floor(Math.random() * 3) + 1;
                term += `${variable}`;
                if (exponent > 1) {
                    term += `^${exponent}`;
                }
            }
        });

        terms.push(term);
    };

    const expr = terms.join(' + ');
    setExpression(expr);
    console.log('Generated Expression:', expr);
    
    
    try {
        const simplified = math.simplify(`${expr}`).toString();
        console.log('Simplified Expression:', simplified);
        setResult(simplified);
    } catch (error) {
        console.error('Error simplifying expression:', error);
    };
  };

  const createExpressionWithoutVars = () => {
    setSolution('');
    const min = 2;
    const max = 3;
    const variables = ['x', 'y', 'z'];
    const expressionParts = [];
    const expressionNums = [];
    const numberOfParts = getRandomNumber(min, max, 'positiv');
    let randomNumber = 0;
    const multFactor = getRandomNumber(1, 5, 'positiv');
    let ggT = 0;

    for (let i = 0; i < numberOfParts; i++) {
        if (i !== 0) {
            expressionParts.push(getRandomOperation());
        }

        randomNumber = getRandomNumber(1, 20, 'positiv');
        randomNumber = randomNumber * multFactor;
        const variable = variables[i % variables.length];
        expressionParts.push(`${randomNumber}${variable}`);
        expressionNums.push(randomNumber);
    }

    // GGT berechnen
    if (numberOfParts === 2) {
        ggT = math.gcd(expressionNums[0], expressionNums[1]);
    } else {
        ggT = math.gcd(expressionNums[0], expressionNums[1], expressionNums[2]);
    }

    // Setze den GGT
    setFactor(ggT);

    // Teile die Ausdrucksteile durch den GGT
    let dividedExpressionParts = [];
    for (let i = 0; i < expressionNums.length; i++) {
        dividedExpressionParts[i] = expressionNums[i] / ggT;
    }

    // Erstelle den geteilten Ausdruck, einschließlich der Operatoren
    let dividedExpression = '';
    for (let i = 0; i < dividedExpressionParts.length; i++) {
        const variable = variables[i % variables.length];
        const operator = i === 0 ? '' : expressionParts[i * 2 - 1]; // Operator vor dem Term, außer beim ersten Term
        dividedExpression += `${operator} ${dividedExpressionParts[i]}${variable}`;
    }

    setDivided(dividedExpression.trim());
    setExpression(expressionParts.join(' '));

    console.log('Faktor: ' + ggT);
    console.log('Divided Expression: ' + dividedExpression);

    // Setze das Ergebnis
    if (ggT === 1) {
        setResult(expressionParts.join(' '));
    } else {
        setResult(`${ggT}(${dividedExpression.trim()})`);
    }
  };



  const solveExpression = () => {
    setSolution(Result);
  };

  const toggleSwitch = () => {
    setBrueche(!Brueche);
    createExpression();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerExpression}>
        <Text style={stylesScaled.text}>
          {Expression ? <MathView math={`\\Large ${Expression}`}/> : createExpression()}
        </Text>
      </View>

      <View style={styles.button1}>
        <Pressable onPress={solveExpression}>
          <Text style={stylesScaled.text}>
            {Solution ? <MathView math={`\\Large ${Solution}`}/> : 'Lösung anzeigen'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.button2}>
        <Pressable onPress={() => createExpression()}>
          <Text style={stylesScaled.text}>
            Ausdruck erstellen
          </Text>
        </Pressable>
      </View>

      {/* <View style={styles.toggleContainer}>
        <View>
          <Text style={styles.toggleText}>
            Variabeln
          </Text>
        </View>

        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: '#CEE0F5', true: '#81b0ff' }}
            thumbColor={Brueche ? '#F4CFCC' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={Brueche}
            style={styles.switch}
          />
        </View>
      </View> */}
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
  switch: {
    position: 'absolute',
    marginTop: verticalScale(320),
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

export default AusklammernAuto;
