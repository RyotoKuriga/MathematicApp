import { StyleSheet, Text, View, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import * as math from 'mathjs';
import MathView from 'react-native-math-view';
import { ScaledSheet, moderateScale, verticalScale, scale } from 'react-native-size-matters';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';

export function GleichungssystemeAufloesen() {
  const [Expression1, setExpression1] = useState('');
  const [Expression2, setExpression2] = useState('');
  const [Solution1, setSolution1] = useState('');
  const [Solution2, setSolution2] = useState('');
  const [Result1, setResult1] = useState('');
  const [Result2, setResult2] = useState('');
  const [Brueche, setBrueche] = useState(true);
  const [Elements, setElements] = useState(0);
  const [isSolution, setIsSolution] = useState(false);

  const getRandomIntExcept = (min, max, exceptions) => {
    let num;
    do {
        num = math.randomInt(min, max);
    } while (exceptions.includes(num));
    return num;
  };

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const createExpression = () => {
    setIsSolution(false);
    if (Brueche) {
      createExpressionWithoutDecimals();
    } else {
      createExpressionWithDecimals();
    };
  }

  const createExpressionWithoutDecimals = () => {
    setSolution1(''); 
    setSolution2(''); 
    setElements(2);

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let matrix, ergebnisMatrix, solution1, solution2;
    let isSingular = true;

    while (isSingular) {
        solution1 = getRandomInt(-30, 30);
        solution2 = getRandomInt(-30, 30);

        matrix = [
            [getRandomIntExcept(-20, 20, [0]), getRandomIntExcept(-20, 20, [0])],
            [getRandomIntExcept(-20, 20, [0]), getRandomIntExcept(-20, 20, [0])]
        ];

        ergebnisMatrix = [
            matrix[0][0] * solution1 + matrix[0][1] * solution2,
            matrix[1][0] * solution1 + matrix[1][1] * solution2
        ];

        try {
            const det = math.det(matrix);
            if (det !== 0) {
                isSingular = false;
            }
        } catch (error) {
            isSingular = true;
        }
    }

    if (matrix[0][1] < 0 && matrix[1][1] < 0) {
      setExpression1(`${ergebnisMatrix[0]} = ${matrix[0][0]}a - ${Math.abs(matrix[0][1])}b`);
      setExpression2(`${ergebnisMatrix[1]} = ${matrix[1][0]}a - ${Math.abs(matrix[1][1])}b`);
    } else if (matrix[0][1] < 0) {
      setExpression1(`${ergebnisMatrix[0]} = ${matrix[0][0]}a - ${Math.abs(matrix[0][1])}b`);
      setExpression2(`${ergebnisMatrix[1]} = ${matrix[1][0]}a + ${matrix[1][1]}b`);
    } else if (matrix[1][1] < 0) {
      setExpression1(`${ergebnisMatrix[0]} = ${matrix[0][0]}a + ${matrix[0][1]}b`);
      setExpression2(`${ergebnisMatrix[1]} = ${matrix[1][0]}a - ${Math.abs(matrix[1][1])}b`);
    } else {
      setExpression1(`${ergebnisMatrix[0]} = ${matrix[0][0]}a + ${matrix[0][1]}b`);
      setExpression2(`${ergebnisMatrix[1]} = ${matrix[1][0]}a + ${matrix[1][1]}b`);
    };
    

    

    setResult1(solution1);
    setResult2(solution2);
  };

  const createExpressionWithDecimals = () => {
    setSolution1(''); 
    setSolution2(''); 
    setElements(2);

    const getRandomIntExcept = (min, max, except) => {
        let num;
        do {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (except.includes(num));
        return num;
    };

    let matrix, ergebnisMatrix, x;
    let isSingular = true;

    while (isSingular) {
        try {
            matrix = [];
            ergebnisMatrix = [];

            for (let i = 0; i < Elements; i++) {
                const row = [];
                for (let j = 0; j < Elements; j++) {
                    row.push(getRandomIntExcept(-20, 20, [0]));
                }
                matrix.push(row);
                ergebnisMatrix.push(math.randomInt(-20, 20));
            }

            // Überprüfen, ob die Matrix singulär ist
            const det = math.det(matrix);
            if (det !== 0) {
                isSingular = false;
            }
        } catch (error) {
            console.error("Fehler beim Überprüfen der Matrix: ", error);
            isSingular = true;
        }
    }

    try {
      if (matrix[0][1] < 0 && matrix[1][1] < 0) {
        setExpression1(`${ergebnisMatrix[0]} = ${matrix[0][0]}a - ${Math.abs(matrix[0][1])}b`);
        setExpression2(`${ergebnisMatrix[1]} = ${matrix[1][0]}a - ${Math.abs(matrix[1][1])}b`);
      } else if (matrix[0][1] < 0) {
        setExpression1(`${ergebnisMatrix[0]} = ${matrix[0][0]}a - ${Math.abs(matrix[0][1])}b`);
        setExpression2(`${ergebnisMatrix[1]} = ${matrix[1][0]}a + ${matrix[1][1]}b`);
      } else if (matrix[1][1] < 0) {
        setExpression1(`${ergebnisMatrix[0]} = ${matrix[0][0]}a + ${matrix[0][1]}b`);
        setExpression2(`${ergebnisMatrix[1]} = ${matrix[1][0]}a - ${Math.abs(matrix[1][1])}b`);
      } else {
        setExpression1(`${ergebnisMatrix[0]} = ${matrix[0][0]}a + ${matrix[0][1]}b`);
        setExpression2(`${ergebnisMatrix[1]} = ${matrix[1][0]}a + ${matrix[1][1]}b`);
      };

      x = math.lusolve(matrix, ergebnisMatrix);

      setResult1(x[0]);
      setResult2(x[1]);
    } catch (error) {
        console.error("Fehler beim Lösen des Gleichungssystems: ", error);
    }
  };



  const toggleSwitch = () => {
    setBrueche(!Brueche);
    createExpression();
  }

  
  

  const solveExpression = () => {
    setIsSolution(true);
    setSolution1(Result1);
    setSolution2(Result2);
  }

  return (
    <View style={[styles.container, {backgroundColor: activeColors.background}]}>
      <View style={styles.containerExpression}>
        <Text style={[stylesScaled.text, {color: activeColors.text}]}>
          {Expression1 ? <MathView math={`\\Large \\textcolor{${activeColors.text}}{${Expression1}}`}/> : createExpression()}
        </Text>
      </View>

      <View style={styles.containerExpression2}>
        <Text style={[stylesScaled.text, {color: activeColors.text}]}>
          {Expression2? <MathView math={`\\Large \\textcolor{${activeColors.text}}{${Expression2}}`}/> : createExpression}
        </Text>
      </View>

      <View style={styles.button1}>
        <Pressable onPress={solveExpression}>
          <Text style={[stylesScaled.text, {color: activeColors.text}]}>
            {isSolution ? <MathView math={`\\Large \\textcolor{${activeColors.text}}{a = ${Solution1}}`}/> : 'Lösung anzeigen'}
          </Text>
        </Pressable>
      </View>
      
      <View style={styles.button3}>
        <Text style={[stylesScaled.text, {color: activeColors.text}]}>
          {isSolution ? <MathView math={`\\Large \\textcolor{${activeColors.text}}{b = ${Solution2}}`}/> : ''}
        </Text>
      </View>

      <View style={styles.button2}>
        <Pressable onPress={createExpression}>
          <Text style={[stylesScaled.text, {color: activeColors.text}]}>
            Ausdruck erstellen
          </Text>
        </Pressable>
      </View>
      <View style={[styles.toggleContainer, {borderColor: activeColors.text}]}>
        <View>
          <Text style={[styles.toggleText, {color: activeColors.text}]}>
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
    marginTop: verticalScale(360),
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

  },
  button3: {
    position: 'absolute',
    top: verticalScale(210),
  }
});

const stylesScaled = ScaledSheet.create({
  text: {
    textAlign: 'center',
    fontSize: moderateScale(32),
  },
});
