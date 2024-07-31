import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import MathView from 'react-native-math-view';
import { re } from 'mathjs';

export function BinomischeFormelnAuto() {

  const math = '\\LARGE';

  const [Solution, setSolution] = useState('');
  const [Result, setResult] = useState('');
  const [Expression, setExpression] = useState('');
  const [State, setState] = useState(false);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const solveExpression = () => {
    setSolution(Result);
  };

  const getRandomOperation = () => {
    const operations = ['+', '-'];
    return operations[getRandomNumber(0, 1)];
  };

  const toggleSwitch = () => {
    setState(previousState => !previousState);
    createExpression();
  };

  const createExpression = () => {
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 20);
    const operation = getRandomOperation();
    const vars = ['x', 'y'];
    setSolution(0);

    if (State) {
      setExpression(`${num1*num1}${vars[0]}^2 ${operation} ${2 * num1 * num2}${vars[0]}${vars[1]} + ${num2*num2}${vars[1]}^2`);
      setResult(`(${num1}${vars[0]} ${operation} ${num2}${vars[1]})^2`);
    } else {
      setExpression(`(${num1}${vars[0]} ${operation} ${num2}${vars[1]})^2`);
      setResult(`${num1*num1}${vars[0]}^2 ${operation} ${2 * num1 * num2}${vars[0]}${vars[1]} + ${num2*num2}${vars[1]}^2`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerExpression}>
        <MathView math={`${math} ${Expression}`} />
      </View>
      
      <View style={styles.button1}>
        <Pressable onPress={solveExpression}>
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            {Solution ? <MathView math={`${math} ${Solution}`} /> : 'Lösung anzeigen'}
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


      <View style={styles.toggleContainer}>
        <View>
          <Text style={styles.toggleText}>
            Fragen umkehren
          </Text>
        </View>

        <View style={styles.switchContainer}>
          <Switch
            trackColor={{ false: '#CEE0F5', true: '#81b0ff' }}
            thumbColor={State ? '#F4CFCC' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={State}
            style={styles.switch}
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
    backgroundColor: 'white',
  },
  containerExpression: {
    padding: 40,
    marginVertical: 60,
  },
  button1: {
    position: 'absolute',
    top: '30%',
  },
  button2: {
    position: 'absolute',
    top: '40%',
  },
  switch: {

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
    marginTop: 400,
    backgroundColor: '',
    borderRadius: 20,
  },
  toggleText: {
    fontSize: 30,
  }
});
