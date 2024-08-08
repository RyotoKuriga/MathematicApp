import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { View, Pressable, ScrollView, Text, Appearance, StyleSheet } from 'react-native';
//import MathView from 'react-native-math-view';
import * as math from 'mathjs';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import MathViewFallback from 'react-native-math-view/src/fallback';

export function Calculator() {
  const [theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    setTheme(scheme.colorScheme);
  });

  const buttons = [
    { buttonValue: 'C', value: 'C' },
    { buttonValue: 'dlt', value: 'dlt' },
    { buttonValue: '\\leftarrow', value: '\\leftarrow' },
    { buttonValue: '\\rightarrow', value: '\\rightarrow' },
    { buttonValue: ' math.sin(', value: '\\sin(' },
    { buttonValue: ` math.cos(`, value: '\\cos(' },
    { buttonValue: ` math.tan(`, value: '\\tan(' },
    { buttonValue: `(${math.pi})`, value: '\\pi' },
    { buttonValue: `math.asin(`, value: '\\text{asin(}' },
    { buttonValue: `math.acos(`, value: '\\text{acos(}' },
    { buttonValue: `math.atan(`, value: '\\text{atan(}' },
    { buttonValue: `(${math.e})`, value: 'e' },
    { buttonValue: '', value: '\\frac{\\square}{\\square}' },
    { buttonValue: 'x^\\square', value: 'x^\\square' },
    { buttonValue: '\\sqrt{\\square}', value: '\\sqrt{\\square}' },
    { buttonValue: `(i)`, value: 'i' },
    { buttonValue: '7', value: '7' },
    { buttonValue: '8', value: '8' },
    { buttonValue: '9', value: '9' },
    { buttonValue: '/', value: '/' },
    { buttonValue: '4', value: '4' },
    { buttonValue: '5', value: '5' },
    { buttonValue: '6', value: '6' },
    { buttonValue: '*', value: ' \\times ' },
    { buttonValue: '1', value: '1' },
    { buttonValue: '2', value: '2' },
    { buttonValue: '3', value: '3' },
    { buttonValue: '-', value: '-' },
    { buttonValue: '0', value: '0' },
    { buttonValue: '.', value: '.' },
    { buttonValue: '=', value: '=' },
    { buttonValue: '+', value: '+' },
    { buttonValue: '(', value: '(' },
    { buttonValue: ')', value: ')' },
    { buttonValue: 'math.log10(', value: '\\log(' },
    { buttonValue: '!', value: '!' },
  ];

  const [ExpressionList, setExpressionList] = useState(['|']);
  const [MathExpressionList, setMathExpressionList] = useState(['|']);
  const [Expression, setExpression] = useState('');
  const [MathExpression, setMathExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [history, setHistory] = useState([]);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [pressedButtonIndex, setPressedButtonIndex] = useState(null);
  const [switchState, setSwitchState] = useState(0);
  const [gradSwitchState, setGradSwitchState] = useState(0);
  const [lastTrigButton, setLastTrigButton] = useState(null);
  const [trigClickCount, setTrigClickCount] = useState(0);

  const scrollViewRef = useRef();

  const handleInput = (button) => {
    const { value, buttonValue } = button;

    const updatedList = [...ExpressionList];
    const updatedMathList = [...MathExpressionList];
    updatedList.splice(cursorPosition, 0, value);
    updatedMathList.splice(cursorPosition, 0, buttonValue);
    setExpressionList(updatedList);
    setMathExpressionList(updatedMathList);

    setCursorPosition(cursorPosition + 1);

    setMathExpression(updatedMathList.join(''));
    setExpression(updatedList.join(''));
    consoleLogs();
  };

  const consoleLogs = () => {
    console.log('ExpressionList: ' + ExpressionList.join(''));
    console.log('MathExpressionList: ' + MathExpressionList.join(''));
    console.log('Math-Expression: ' + MathExpression);
    console.log('CursorPosition: ' + cursorPosition);
    console.log('--------------------------------------------------');
  };

  const calculateExpression = () => {
    try {
      let result;
      const cleanedExpression = Expression.replace('|', '');
      let cleanedMathExpression = MathExpression.replace('|', '');

      cleanedMathExpression = cleanedMathExpression.replace(/ sin\(/g, ' math.sin(');
      cleanedMathExpression = cleanedMathExpression.replace(/asin\(/g, 'math.asin(');
      cleanedMathExpression = cleanedMathExpression.replace(/ cos\(/g, ' math.cos(');
      cleanedMathExpression = cleanedMathExpression.replace(/acos\(/g, 'math.acos(');
      cleanedMathExpression = cleanedMathExpression.replace(/ tan\(/g, ' math.tan(');
      cleanedMathExpression = cleanedMathExpression.replace(/atan\(/g, 'math.atan(');
      cleanedMathExpression = cleanedMathExpression.replace(/log10\(/g, 'math.log10(');
      cleanedMathExpression = cleanedMathExpression.replace(/pi/g, 'math.pi');
      cleanedMathExpression = cleanedMathExpression.replace(/e/g, 'math.e');

      if (gradSwitchState === 1) {
        cleanedMathExpression = cleanedMathExpression.replace(/math\.sin\((.*?)\)/g, (_, angle) => `math.sin(${toRadians(angle)})`);
        cleanedMathExpression = cleanedMathExpression.replace(/math\.asin\((.*?)\)/g, (_, angle) => `math.asin(${toRadians(angle)})`);
        cleanedMathExpression = cleanedMathExpression.replace(/math\.cos\((.*?)\)/g, (_, angle) => `math.cos(${toRadians(angle)})`);
        cleanedMathExpression = cleanedMathExpression.replace(/math\.acos\((.*?)\)/g, (_, angle) => `math.acos(${toRadians(angle)})`);
        cleanedMathExpression = cleanedMathExpression.replace(/math\.tan\((.*?)\)/g, (_, angle) => `math.tan(${toRadians(angle)})`);
        cleanedMathExpression = cleanedMathExpression.replace(/math\.atan\((.*?)\)/g, (_, angle) => `math.atan(${toRadians(angle)})`);
      }

      console.log('Cleaned MathExpression:', cleanedMathExpression);

      const specialCases = {
        'math.sin(math.pi)': 0,
        'math.sin(0)': 0,
        'math.cos(math.pi)': -1,
        'math.cos(0)': 1,
        'math.tan(0)': 0,
        'math.log(1)': 0,
      };

      if (specialCases[cleanedMathExpression] !== undefined) {
        result = specialCases[cleanedMathExpression];
      } else {
        if (switchState === 0) {
          result = math.simplify(cleanedMathExpression);
          result = math.format(result, { notation: 'fixed' });
          result = getFraction(result);
        } else if (switchState === 1) {
          result = math.simplify(cleanedMathExpression);
          result = math.evaluate(`${result}`);
        } else {
          result = math.simplify(cleanedMathExpression);
          result = math.evaluate(`${result}`);
          result = math.format(result, { notation: 'exponential' });
        }

        if (result >= 1000000000000 || result <= -1000000000000) {
          result = math.format(result, { notation: 'exponential' });
        }
      }

      if (Math.abs(result) < 1e-10) result = 0;

      setSolution(result.toString());
      setHistory([...history, { expression: cleanedExpression, result: result.toString() }]);
      setExpressionList(['|']);
      setMathExpressionList(['|']);
      setMathExpression('|');
      setCursorPosition(0);
    } catch (error) {
      console.log('Error:', error);
      setSolution('Error');
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

  const handlePress = () => {
    setSwitchState((prev) => (prev + 1) % 3);
  };

  const getButtonStyle = () => {
    switch (switchState) {
      case 0:
        return { backgroundColor: '#FAB89C' };
      case 1:
        return { backgroundColor: '#BAFA9B' };
      case 2:
        return { backgroundColor: '#9BBFFA' };
      default:
        return { backgroundColor: '#FAB89C' };
    }
  };

  const getButtonText = () => {
    switch (switchState) {
      case 0:
        return 'Brüche';
      case 1:
        return 'Dezimal';
      case 2:
        return 'Exponent';
      default:
        return 'Brüche';
    }
  };

  const handleGradPress = () => {
    setGradSwitchState((prev) => (prev + 1) % 2);
  };

  const getGradButtonText = () => {
    return gradSwitchState === 0 ? 'Rad' : 'Grad';
  };

  const getGradButtonStyle = () => {
    return gradSwitchState === 0 ? { backgroundColor: '#5C66E6' } : { backgroundColor: '#E6C95C' };
  };

  const clearExpression = () => {
    setExpressionList(['|']);
    setMathExpressionList(['|']);
    setMathExpression('|');
    setCursorPosition(0);
  };

  const toRadians = (angle) => {
    return gradSwitchState === 0 ? angle : angle * (Math.PI / 180);
  };

  const deleteSign = () => {
    if (cursorPosition > 0) {
      const updatedList = [...ExpressionList];
      const updatedMathList = [...MathExpressionList];

      console.log(cursorPosition);
      console.log(ExpressionList);
      console.log(MathExpressionList);

      if (ExpressionList[cursorPosition + 1] === '}' && ExpressionList[cursorPosition - 1] === '^{' &&
        MathExpressionList[cursorPosition + 1] === ')' && MathExpressionList[cursorPosition - 1] === '^(') {
        updatedList.splice(cursorPosition - 1, 1);
        updatedMathList.splice(cursorPosition - 1, 1);
        updatedList.splice(cursorPosition, 1);
        updatedMathList.splice(cursorPosition, 1);
        setCursorPosition(cursorPosition - 1);
      } else if (ExpressionList[cursorPosition + 1] === '}' && ExpressionList[cursorPosition - 1] === '\\sqrt{' && MathExpressionList[cursorPosition + 1] === ')^0.5)' && MathExpressionList[cursorPosition - 1] === '((') {
        updatedList.splice(cursorPosition - 1, 1);
        updatedMathList.splice(cursorPosition - 1, 1);
        updatedList.splice(cursorPosition, 1);
        updatedMathList.splice(cursorPosition, 1);
        setCursorPosition(cursorPosition - 1);
      } else if (ExpressionList[cursorPosition + 1] === '}{' && ExpressionList[cursorPosition - 1] === '\\dfrac{' && ExpressionList[cursorPosition + 2] === '}' && MathExpressionList[cursorPosition + 1] === ')/(' && MathExpressionList[cursorPosition - 1] === '((' && MathExpressionList[cursorPosition + 2] === '))') {
        updatedList.splice(cursorPosition - 1, 1);
        updatedMathList.splice(cursorPosition - 1, 1);
        updatedList.splice(cursorPosition, 2);
        updatedMathList.splice(cursorPosition, 2);
        setCursorPosition(cursorPosition - 1);
      } else if (ExpressionList[cursorPosition - 1] === '}{' && MathExpressionList[cursorPosition - 1] === ')/(') {
        return;
      } else if (ExpressionList[cursorPosition - 1] === '\\dfrac{' && MathExpressionList[cursorPosition - 1] === '((') {
        return;
      } else if (ExpressionList[cursorPosition - 1] === '}' && MathExpressionList[cursorPosition - 1] === '))') {
        return;
      }
      else {
        updatedList.splice(cursorPosition - 1, 1);
        updatedMathList.splice(cursorPosition - 1, 1);
        setCursorPosition(cursorPosition - 1);
      }

      setExpressionList(updatedList);
      setMathExpressionList(updatedMathList);
      setMathExpression(updatedMathList.join(''));
      setExpression(updatedList.join(''));
    }

    consoleLogs();
  };

  const moveCursorLeft = () => {
    if (cursorPosition > 0) {
      const updatedList = [...ExpressionList];
      const updatedMathList = [...MathExpressionList];
      const temp = updatedList[cursorPosition - 1];
      updatedList[cursorPosition - 1] = updatedList[cursorPosition];
      updatedList[cursorPosition] = temp;
      const tempMath = updatedMathList[cursorPosition - 1];
      updatedMathList[cursorPosition - 1] = updatedMathList[cursorPosition];
      updatedMathList[cursorPosition] = tempMath;
      setExpressionList(updatedList);
      setMathExpressionList(updatedMathList);
      setCursorPosition(cursorPosition - 1);
      setMathExpression(updatedMathList.join(''));
      setExpression(updatedList.join(''));
    }
  };

  const moveCursorRight = () => {
    if (cursorPosition < ExpressionList.length - 1) {
      const updatedList = [...ExpressionList];
      const updatedMathList = [...MathExpressionList];
      const temp = updatedList[cursorPosition + 1];
      updatedList[cursorPosition + 1] = updatedList[cursorPosition];
      updatedList[cursorPosition] = temp;
      const tempMath = updatedMathList[cursorPosition + 1];
      updatedMathList[cursorPosition + 1] = updatedMathList[cursorPosition];
      updatedMathList[cursorPosition] = tempMath;
      setExpressionList(updatedList);
      setMathExpressionList(updatedMathList);
      setCursorPosition(cursorPosition + 1);
      setMathExpression(updatedMathList.join(''));
      setExpression(updatedList.join(''));
    }
  };

  const handleExponent = () => {
    if (cursorPosition === 0) return;

    const prevChar = MathExpressionList[cursorPosition - 1];
    if (!prevChar.match(/[0-9\}i]/)) return;

    const updatedExpressionList = [...ExpressionList];
    const updatedMathExpressionList = [...MathExpressionList];

    updatedExpressionList.splice(cursorPosition, 0, '^{');
    updatedMathExpressionList.splice(cursorPosition, 0, '^(');
    updatedExpressionList.splice(cursorPosition + 2, 0, '}');
    updatedMathExpressionList.splice(cursorPosition + 2, 0, ')');

    setExpressionList(updatedExpressionList);
    setMathExpressionList(updatedMathExpressionList);
    setCursorPosition(cursorPosition + 1);

    setExpression(updatedExpressionList.join(''));
    setMathExpression(updatedMathExpressionList.join(''));
    consoleLogs();
  };

  const handleSquareRoot = () => {
    const updatedExpressionList = [...ExpressionList];
    const updatedMathExpressionList = [...MathExpressionList];

    updatedExpressionList.splice(cursorPosition, 0, '\\sqrt{');
    updatedMathExpressionList.splice(cursorPosition, 0, '((');
    updatedExpressionList.splice(cursorPosition + 2, 0, '}');
    updatedMathExpressionList.splice(cursorPosition + 2, 0, ')^0.5)');

    setExpressionList(updatedExpressionList);
    setMathExpressionList(updatedMathExpressionList);
    setCursorPosition(cursorPosition + 1);

    setExpression(updatedExpressionList.join(''));
    setMathExpression(updatedMathExpressionList.join(''));
    consoleLogs();
  };

  const handleFraction = () => {
    const updatedExpressionList = [...ExpressionList];
    const updatedMathExpressionList = [...MathExpressionList];

    updatedExpressionList.splice(cursorPosition, 0, '\\dfrac{');
    updatedMathExpressionList.splice(cursorPosition, 0, '((');
    updatedExpressionList.splice(cursorPosition + 2, 0, '}{');
    updatedMathExpressionList.splice(cursorPosition + 2, 0, ')/(');
    updatedExpressionList.splice(cursorPosition + 3, 0, '}');
    updatedMathExpressionList.splice(cursorPosition + 3, 0, '))');

    setExpressionList(updatedExpressionList);
    setMathExpressionList(updatedMathExpressionList);
    setCursorPosition(cursorPosition + 1);

    setExpression(updatedExpressionList.join(''));
    setMathExpression(updatedMathExpressionList.join(''));
    consoleLogs();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.historyContainer}
        contentContainerStyle={styles.historyContentContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {history.map((item, index) => (
          <View key={index}>
            <MathViewFallback math={`\\large ${item.expression}`} />

            <View style={styles.historySolution}>
              <MathViewFallback math={`\\large = ${item.result}`} />
            </View>

            <View style={styles.historyContentSpace}></View>
          </View>
        ))}
        <View style={styles.historySpace}></View>
      </ScrollView>

      <View style={styles.currentDisplayContainer}>
        <MathViewFallback
          math={`\\large ${ExpressionList.join('')}`}
          style={[styles.currentDisplay, { fontSize: moderateScale(20) }]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.grid}>
          {buttons.map((button, index) => (
            <Pressable
              key={index}
              style={[
                styles.pressable,
                pressedButtonIndex === index && styles.pressablePressed
              ]}
              onPress={() => {
                if (button.value === '\\leftarrow') {
                  moveCursorLeft();
                } else if (button.value === '\\rightarrow') {
                  moveCursorRight();
                } else if (button.value === 'C') {
                  clearExpression();
                } else if (button.value === '=') {
                  calculateExpression();
                } else if (button.value === 'dlt') {
                  deleteSign();
                } else if (button.value === '\\frac{\\square}{\\square}') {
                  handleFraction();
                } else if (button.value === 'x^\\square') {
                  handleExponent();
                } else if (button.value === '\\sqrt{\\square}') {
                  handleSquareRoot();
                }
                else {
                  handleInput(button);
                }
              }}
              onPressIn={() => setPressedButtonIndex(index)}
              onPressOut={() => setPressedButtonIndex(null)}
            >
              <MathViewFallback math={`\\normalsize ${button.value}`} />
            </Pressable>
          ))}
        </View>
        <View style={styles.subButtonsView}>
          <Pressable style={[styles.subButtons, getGradButtonStyle()]} onPress={handleGradPress}>
            <Text style={styles.subButtonsText}>
              {getGradButtonText()}
            </Text>
          </Pressable>

          <Pressable style={[styles.subButtons, getButtonStyle()]} onPress={handlePress}>
            <Text style={styles.subButtonsText}>
              {getButtonText()}
            </Text>
          </Pressable>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: verticalScale(50),
  },
  angleModeButtonContainer: {
    position: 'absolute',
    top: verticalScale(10),
    left: scale(10),
  },
  angleModeButton: {
    padding: moderateScale(5),
    backgroundColor: '#dcdcdc',
    borderRadius: scale(5),
  },
  fontSizeButtonsContainer: {
    position: 'absolute',
    top: verticalScale(10),
    right: scale(10),
    flexDirection: 'row',
  },
  fontSizeButton: {
    padding: moderateScale(5),
    backgroundColor: '#dcdcdc',
    borderRadius: scale(5),
    marginLeft: scale(5),
  },
  fontSizeButtonText: {
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  currentDisplayContainer: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: verticalScale(10),
    backgroundColor: '#f0f0f0',
    padding: moderateScale(10),
    height: verticalScale(50), // Basierend auf einem ursprünglichen Verhältnis von 10% der Bildschirmhöhe
    justifyContent: 'center',
  },
  currentDisplay: {
    fontSize: moderateScale(40),
  },
  historyContainer: {
    width: '80%',
    alignSelf: 'center',
    flexGrow: 1,
    maxHeight: verticalScale(100), // Basierend auf einem ursprünglichen Verhältnis von 10% der Bildschirmhöhe
    backgroundColor: '#f0f0f0',
    padding: moderateScale(10),
    marginBottom: verticalScale(10),
    marginTop: -20,
  },
  historyContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  placeholder: {
    height: verticalScale(10),
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignSelf: 'center',
    width: '80%',
    height: '70%',
  },
  pressable: {
    width: scale(60), // Beispiel: 18% der Bildschirmbreite
    height: verticalScale(30), // Beispiel: 10% der Bildschirmhöhe
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: scale(5),
    marginVertical: verticalScale(3.5),
    borderRadius: scale(7),
  },
  pressablePressed: {
    backgroundColor: '#ECE6E2',
  },
  historySpace: {
    height: verticalScale(20),
  },
  historySolution: {
    alignItems: 'flex-end',
    marginVertical: verticalScale(5),
  },
  historyContentSpace: {
    height: verticalScale(10),
  },
  subButtonsView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    height: verticalScale(50),
    flexDirection: 'row',
  },
  subButtons: {
    width: scale(130), // Beispiel: 39% der Bildschirmbreite
    height: verticalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: scale(5),
    marginTop: verticalScale(50),
    borderRadius: scale(7),
  },
  subButtonsText: {
    fontSize: moderateScale(24),
  }
});

