import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Pressable, ScrollView, Text } from 'react-native';
import MathView from 'react-native-math-view';
import * as math from 'mathjs';

export function Calculator() {
  const buttons = [
    { buttonValue: 'C', value: 'C' },
    { buttonValue: 'dlt', value: 'dlt' },
    { buttonValue: '\\leftarrow', value: '\\leftarrow' },
    { buttonValue: '\\rightarrow', value: '\\rightarrow' },
    { buttonValue: '${math.sin(}', value: '\\sin(' },
    { buttonValue: `${math.cos}`, value: '\\cos(' },
    { buttonValue: `${math.tan}`, value: '\\tan(' },
    { buttonValue: `${math.pi}`, value: '\\pi' },
    { buttonValue: '\\frac{\\square}{\\square}', value: '\\frac{\\square}{\\square}' },
    { buttonValue: 'x^\\square', value: 'x^\\square' },
    { buttonValue: '\\sqrt{\\square}', value: '\\sqrt{\\square}' },
    { buttonValue: `${math.e}`, value: 'e' },
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
    { buttonValue: 'log', value: '\\log' },
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

  const scrollViewRef = useRef();

  const handleInput = (button) => {
    const { value, buttonValue } = button;

    // Add the new value before the cursor
    const updatedList = [...ExpressionList];
    const updatedMathList = [...MathExpressionList];
    updatedList.splice(cursorPosition, 0, value);
    updatedMathList.splice(cursorPosition, 0, buttonValue);
    setExpressionList(updatedList);
    setMathExpressionList(updatedMathList);

    // Update the cursor position
    setCursorPosition(cursorPosition + 1);

    // Generate the math expression
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
      const cleanedMathExpression = MathExpression.replace('|', '');

      if (switchState === 0) {
        result = math.simplify(cleanedMathExpression);
      } else if (switchState === 1) {
        result = math.evaluate(cleanedMathExpression);
      } else {
        result = math.evaluate(cleanedMathExpression);
        result = math.format(parseInt(result), { notation: 'exponential' });
      }

      setSolution(result.toString());
      setHistory([...history, { expression: cleanedExpression, result: result.toString() }]);
      setExpressionList(['|']);
      setMathExpressionList(['|']);
      setMathExpression('|');
      setCursorPosition(0);
    } catch (error) {
      setSolution('Error');
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

  const clearExpression = () => {
    setExpressionList(['|']);
    setMathExpressionList(['|']);
    setMathExpression('|');
    setCursorPosition(0);
  };

  const deleteSign = () => {
    if (cursorPosition > 0) {
      const updatedList = [...ExpressionList];
      const updatedMathList = [...MathExpressionList];
      updatedList.splice(cursorPosition - 1, 1);
      updatedMathList.splice(cursorPosition - 1, 1);
      setExpressionList(updatedList);
      setMathExpressionList(updatedMathList);
      setCursorPosition(cursorPosition - 1);
      setMathExpression(updatedMathList.join(''));
      setExpression(updatedList.join(''));
    }
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

  const handleTrigonometry = (button) => {
    const { value, buttonValue } = button;
  
    // Add the new value before the cursor
    const updatedList = [...ExpressionList];
    const updatedMathList = [...MathExpressionList];
  
    // Add the trigonometric function and update the lists
    updatedList.splice(cursorPosition, 0, value);
    updatedMathList.splice(cursorPosition, 0, buttonValue);
    setExpressionList(updatedList);
    setMathExpressionList(updatedMathList);
  
    // Update the cursor position
    setCursorPosition(cursorPosition + value.length);
  
    setMathExpression(updatedMathList.join(''));
    setExpression(updatedList.join(''));
    consoleLogs();
  };
  

  /*const handlePiAndE = (button) => {
    const { value, buttonValue } = button;
    
    // Add the new value before the cursor
    const updatedList = [...ExpressionList];
    const updatedMathList = [...MathExpressionList];
  
    // Check if the previous character is a number
    if (cursorPosition > 0 && /\d/.test(ExpressionList[cursorPosition - 1])) {
      updatedList.splice(cursorPosition, 0, '\\times');
      updatedMathList.splice(cursorPosition, 0, '\\*');
      // Update the cursor position
      setCursorPosition(cursorPosition + 1);
    }
  
    // Increment the cursor position before inserting pi or e
    const newCursorPosition = cursorPosition + 1;
  
    updatedList.splice(newCursorPosition, 0, value);
    updatedMathList.splice(newCursorPosition, 0, buttonValue);
    setExpressionList(updatedList);
    setMathExpressionList(updatedMathList);
  
    // Update the cursor position
    setCursorPosition(newCursorPosition + 1);
  
    setMathExpression(updatedMathList.join(''));
    setExpression(updatedList.join(''));
    consoleLogs();
  };*/

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
            <MathView math={`\\large ${item.expression}`} />
            
            <View style={styles.historySolution}>
              <MathView math={`\\large = ${item.result}`} />
            </View>  

            <View style={styles.historyContentSpace}></View>
          </View>
        ))}
        <View style={styles.historySpace}></View>
      </ScrollView>
      

      <View style={styles.currentDisplayContainer}>
        <MathView
          math={`\\large ${ExpressionList.join('')}`}
          style={[styles.currentDisplay, { fontSize: 20 }]}
          resizeMode="contain"
        />
      </View>
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
              } /*else if (button.value === 'e' || button.value === '\\pi') {
                handlePiAndE(button);
              }*/else if (button.value === 'sin(') {
                handleTrigonometry(button);
              } else {
                handleInput(button);
              }
            }}
            onPressIn={() => setPressedButtonIndex(index)}
            onPressOut={() => setPressedButtonIndex(null)}
          >
            <MathView math={`\\large ${button.value}`} />
          </Pressable>
        ))}
      </View>
      <View style={styles.subButtonsView}>
        <Pressable style={styles.subButtons}>
          <Text style={styles.subButtonsText}>
            Grad
          </Text>
        </Pressable>

        <Pressable style={[styles.subButtons, getButtonStyle()]} onPress={handlePress}>
          <Text style={styles.subButtonsText}>
            {getButtonText()}
          </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  angleModeButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  angleModeButton: {
    padding: 5,
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
  },
  fontSizeButtonsContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
  },
  fontSizeButton: {
    padding: 5,
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    marginLeft: 5,
  },
  fontSizeButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  currentDisplayContainer: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    height: 60,
    justifyContent: 'center',
  },
  currentDisplay: {
    fontSize: 40,
  },
  historyContainer: {
    width: '80%',
    alignSelf: 'center',
    flexGrow: 1,
    maxHeight: 100,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
  },
  historyContentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  placeholder: {
    height: 10,
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignSelf: 'center',
  },
  pressable: {
    width: '18%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
    borderRadius: 7,
  },
  pressablePressed: {
    backgroundColor: '#ECE6E2',
  },
  historySpace: {
    height: 20,
  },
  historySolution: {
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  historyContentSpace: {
    height: 10,
  },
  subButtonsView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
  },
  subButtons: {
    width: '39%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
    borderRadius: 7,
  },
  subButtonsText: {
    fontSize: 30,
  }
});
