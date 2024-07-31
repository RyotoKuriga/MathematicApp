import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import * as math from 'mathjs';
import MathView from 'react-native-math-view';
import { ScaledSheet, moderateScale, verticalScale, scale } from 'react-native-size-matters';

export function SchnittpunktBestimmen() {
  const [Expression1, setExpression1] = useState('');
  const [Expression2, setExpression2] = useState('');
  const [Solution, setSolution] = useState('');
  const [Result, setResult] = useState('');
  const [Brueche, setBrueche] = useState(false);

  const getRandomIntExcept = (min, max, exceptions) => {
    let num;
    do {
        num = math.randomInt(min, max);
    } while (exceptions.includes(num));
    return num;
};

  const createExpression = () => {
    setSolution('');

    const function1 = {m: getRandomIntExcept(-10, 20, [0, 1]), q: getRandomIntExcept(-10, 20, [0, 1])};
    const function2 = {m: getRandomIntExcept(-10, 20, [0, 1]), q: getRandomIntExcept(-10, 20, [0, 1])};
    
    while (function1.m === function2.m) {
      function2.m = math.randomInt(-10, 10);
    };

    while (function1.q === function2.q) {
      function2.q = math.randomInt(-10, 10);
    }

    let x;
    let y;

    x = math.simplify(`(${function2.q} - ${function1.q}) / (${function1.m} - ${function2.m})`).toString();
    y = math.simplify(`${function1.m} * ${x} + ${function1.q}`).toString();

    if(Brueche) {
      while (!math.isInteger(eval(x)) || !math.isInteger(eval(y))) {
        console.log('hi')
        const function1 = {m: getRandomIntExcept(-10, 20, [0, 1]), q: getRandomIntExcept(-10, 20, [0, 1])};
        const function2 = {m: getRandomIntExcept(-10, 20, [0, 1]), q: getRandomIntExcept(-10, 20, [0, 1])};

        x = math.simplify(`(${function2.q} - ${function1.q}) / (${function1.m} - ${function2.m})`).toString();
        y = math.simplify(`${function1.m} * ${x} + ${function1.q}`).toString();
      }
    }

    if (function1.q < 0 && function2.q < 0) {
      setExpression1(`f_1(x) = ${function1.m}x ${function1.q}`);
      setExpression2(`f_2(x) = ${function2.m}x ${function2.q}`);
    } else if (function2.q < 0) {
      setExpression1(`f_1(x) = ${function1.m}x + ${function1.q}`);
      setExpression2(`f_2(x) = ${function2.m}x ${function2.q}`);
    } else if (function1.q < 0) {
      setExpression1(`f_1(x) = ${function1.m}x ${function1.q}`);
      setExpression2(`f_2(x) = ${function2.m}x + ${function2.q}`);
    } else {
      setExpression1(`f_1(x) = ${function1.m}x + ${function1.q}`);
      setExpression2(`f_2(x) = ${function2.m}x + ${function2.q}`);
    };

    

    x = getFraction(x);
    y = getFraction(y);

    setResult(`S(${x}; ${y})`);
    
  }

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

  const toggleSwitch = () => {
    setBrueche(!Brueche);
    createExpression();
  }

  
  

  const solveExpression = () => {
    setSolution(Result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerExpression}>
        <Text style={stylesScaled.text}>
          {Expression1 ? <MathView math={`\\Large ${Expression1}`}/> : createExpression}
        </Text>
      </View>

      <View style={styles.containerExpression2}>
        <Text style={stylesScaled.text}>
          {Expression2 ? <MathView math={`\\Large ${Expression2}`}/> : createExpression}
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
        <Pressable onPress={createExpression}>
          <Text style={stylesScaled.text}>
            Ausdruck erstellen
          </Text>
        </Pressable>
      </View>
      <View style={styles.toggleContainer}>
        <View>
          <Text style={styles.toggleText}>
            Nur ganze Zahlen
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
  containerExpression2: {
    padding: verticalScale(0),
    marginVertical: verticalScale(0),
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
