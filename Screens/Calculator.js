import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Pressable, ScrollView, Text } from 'react-native';
import MathView from 'react-native-math-view';

export function Calculator() {
  const [latexExpr, setLatexExpr] = useState('');
  const [jsExpr, setJsExpr] = useState('');
  const [history, setHistory] = useState([]);
  const [angleMode, setAngleMode] = useState('rad'); // 'rad' for radians, 'deg' for degrees
  const [fontSize, setFontSize] = useState(20);
  const [cursorPos, setCursorPos] = useState(0);
  const [error, setError] = useState('');

  const scrollViewRef = useRef();

  const updateDisplayWithCursor = (latex) => {
    return latex.slice(0, cursorPos) + '|' + latex.slice(cursorPos);
  };

  const handlePress = (value, jsValue) => {
    console.log(jsExpr);
    setError('');
    let newLatexExpr, newJsExpr;
  
    // Check if the cursor is right after a function
    if (jsExpr.endsWith('Math.sin(') || jsExpr.endsWith('Math.cos(') || jsExpr.endsWith('Math.tan(') || jsExpr.endsWith('Math.log(')) {
      newLatexExpr = insertAtCursor(latexExpr, value);
      newJsExpr = jsExpr + value; // Just add the value inside the function
    } else {
      newLatexExpr = insertAtCursor(latexExpr, value);
      newJsExpr = insertAtJs(jsExpr, jsValue);
    }
  
    setLatexExpr(newLatexExpr);
    setJsExpr(newJsExpr);
    setCursorPos(cursorPos + value.length);
  };

  const handleClear = () => {
    setLatexExpr('');
    setJsExpr('');
    setCursorPos(0);
    setError('');
  };

  const handleDelete = () => {
    if (cursorPos > 0) {
      const newLatexExpr = removeAtCursor(latexExpr, cursorPos);
      const newJsExpr = removeAtCursor(jsExpr, cursorPos);
      const deletionLength = latexExpr.length - newLatexExpr.length;
      setLatexExpr(newLatexExpr);
      setJsExpr(newJsExpr);
      setCursorPos(cursorPos - deletionLength);
    }
  };

  const handleEqual = () => {
    try {
      const exprWithAngles = jsExpr.replace(/Math\.(sin|cos|tan)\((.*?)\)/g, (match, func, angle) => {
        if (angleMode === 'deg') {
          return `Math.${func}((${angle}) * Math.PI / 180)`;
        }
        return `Math.${func}(${angle})`;
      });
      const result = eval(exprWithAngles);
      const roundedResult = Math.round(result * 1000000) / 1000000;
      setHistory([...history, { latexExpr, result: roundedResult.toString() }]);
      setLatexExpr('');
      setJsExpr('');
      setCursorPos(0);
    } catch (e) {
      setError('Invalid Expression');
    }
  };

  const moveCursorLeft = () => {
    if (cursorPos > 0) {
      if (latexExpr.slice(cursorPos - 4, cursorPos) === 'sin(' || 
          latexExpr.slice(cursorPos - 4, cursorPos) === 'cos(' || 
          latexExpr.slice(cursorPos - 4, cursorPos) === 'tan(' || 
          latexExpr.slice(cursorPos - 4, cursorPos) === 'log(') {
        setCursorPos(cursorPos - 5);
      } else if (latexExpr.slice(cursorPos - 6, cursorPos) === '\\times') {
        setCursorPos(cursorPos - 6);
      } else {
        setCursorPos(cursorPos - 1);
      }
    }
  };
  
  const moveCursorRight = () => {
    if (cursorPos < latexExpr.length) {
      if (latexExpr.slice(cursorPos, cursorPos + 4) === 'sin(' || 
          latexExpr.slice(cursorPos, cursorPos + 4) === 'cos(' || 
          latexExpr.slice(cursorPos, cursorPos + 4) === 'tan(' || 
          latexExpr.slice(cursorPos, cursorPos + 4) === 'log(') {
        setCursorPos(cursorPos + 4);
      } else if (latexExpr.slice(cursorPos, cursorPos + 6) === '\\times') {
        setCursorPos(cursorPos + 6);
      } else {
        setCursorPos(cursorPos + 1);
      }
    }
  };
  
  const insertAtJs = (str, value) => {
    return str.slice(0, cursorPos) + value + str.slice(cursorPos);
  };
  
  const insertAtCursor = (str, value) => {
    return str.slice(0, cursorPos) + value + str.slice(cursorPos);
  };
  

  const removeAtCursor = (str, pos) => {
    if (pos >= 4 && str.slice(pos - 4, pos) === 'sin(') {
      return str.slice(0, pos - 5) + str.slice(pos);
    } else if (pos >= 4 && str.slice(pos - 4, pos) === 'cos(') {
      return str.slice(0, pos - 5) + str.slice(pos);
    } else if (pos >= 4 && str.slice(pos - 4, pos) === 'tan(') {
      return str.slice(0, pos - 5) + str.slice(pos);
    } else if (pos >= 4 && str.slice(pos - 4, pos) === 'log(') {
      return str.slice(0, pos - 5) + str.slice(pos);
    } else if (pos >= 6 && str.slice(pos - 6, pos) === '\\times') {
      return str.slice(0, pos - 6) + str.slice(pos);
    } else {
      return str.slice(0, pos - 1) + str.slice(pos);
    }
  };

  const factorial = (n) => {
    if (n < 0) return NaN;
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const handleAngleModeToggle = () => {
    setAngleMode(angleMode === 'rad' ? 'deg' : 'rad');
  };

  const increaseFontSize = () => {
    setFontSize(fontSize + 5);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize > 10 ? fontSize - 5 : fontSize);
  };

  const buttons = [
    { buttonValue: 'C', value: 'C', jsValue: '', action: handleClear },
    { buttonValue: 'dlt', value: 'dlt', jsValue: '', action: handleDelete },
    { buttonValue: '\\leftarrow', value: '\\leftarrow', jsValue: '', action: moveCursorLeft },
    { buttonValue: '\\rightarrow', value: '\\rightarrow', jsValue: '', action: moveCursorRight },
    { buttonValue: '\\sin', value: '\\sin(', jsValue: 'Math.sin(', action: null },
    { buttonValue: '\\cos', value: '\\cos(', jsValue: 'Math.cos(', action: null },
    { buttonValue: '\\tan', value: '\\tan(', jsValue: 'Math.tan(', action: null },
    { buttonValue: '\\pi', value: '\\pi', jsValue: 'Math.PI', action: null },
    { buttonValue: '\\frac{\\square}{\\square}', value: '\\frac{\\square}{\\square}', jsValue: '(', action: null },
    { buttonValue: 'x^\\square', value: 'x^\\square', jsValue: '^(', action: null },
    { buttonValue: '\\sqrt{\\square}', value: '\\sqrt{\\square}', jsValue: ')', action: null },
    { buttonValue: 'e', value: 'e', jsValue: 'Math.E', action: null },
    { buttonValue: '7', value: '7', jsValue: '7', action: null },
    { buttonValue: '8', value: '8', jsValue: '8', action: null },
    { buttonValue: '9', value: '9', jsValue: '9', action: null },
    { buttonValue: '/', value: '/', jsValue: '/', action: null },
    { buttonValue: '4', value: '4', jsValue: '4', action: null },
    { buttonValue: '5', value: '5', jsValue: '5', action: null },
    { buttonValue: '6', value: '6', jsValue: '6', action: null },
    { buttonValue: '\\times', value: '\\times', jsValue: '*', action: null },
    { buttonValue: '1', value: '1', jsValue: '1', action: null },
    { buttonValue: '2', value: '2', jsValue: '2', action: null },
    { buttonValue: '3', value: '3', jsValue: '3', action: null },
    { buttonValue: '-', value: '-', jsValue: '-', action: null },
    { buttonValue: '0', value: '0', jsValue: '0', action: null },
    { buttonValue: '.', value: '.', jsValue: '.', action: null },
    { buttonValue: '=', value: '=', jsValue: '', action: handleEqual },
    { buttonValue: '+', value: '+', jsValue: '+', action: null },
    { buttonValue: '(', value: '(', jsValue: '(', action: null },
    { buttonValue: ')', value: ')', jsValue: ')', action: null },
    { buttonValue: 'log', value: 'log(', jsValue: 'Math.log(', action: null },
    { buttonValue: '!', value: '!', jsValue: '!', action: null },
  ];
  

  const handleButtonPress = (button) => {
    if (button.action) {
      button.action();
    } else {
      handlePress(button.value, button.jsValue);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.angleModeButtonContainer}>
        <Pressable style={styles.angleModeButton} onPress={handleAngleModeToggle}>
          <MathView math={`\\${angleMode === 'rad' ? 'text{RAD}' : 'text{DEG}'}`} />
        </Pressable>
      </View>
      <View style={styles.fontSizeButtonsContainer}>
        <Pressable style={styles.fontSizeButton} onPress={increaseFontSize}>
          <Text style={styles.fontSizeButtonText}>A+</Text>
        </Pressable>
        <Pressable style={styles.fontSizeButton} onPress={decreaseFontSize}>
          <Text style={styles.fontSizeButtonText}>A-</Text>
        </Pressable>
      </View>
      <ScrollView
        style={styles.historyContainer}
        contentContainerStyle={styles.historyContentContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {history.map((item, index) => (
          <View key={index}>
            <View style={styles.historyItem}>
              <MathView
                math={`\\large ${item.latexExpr}`}
                style={[styles.historyExpression, { fontSize }]}
                resizeMode="contain"
              />
            </View>
            <View style={styles.historyItemResult}>
              <MathView
                math={`\\large = ${item.result}`}
                style={[styles.historyResult, { fontSize }]}
                resizeMode="contain"
              />
            </View>
          </View>
        ))}
        <View style={styles.placeholder}></View>
      </ScrollView>
      <View style={styles.currentDisplayContainer}>
        <MathView
          math={`\\large ${updateDisplayWithCursor(latexExpr)}`}
          style={[styles.currentDisplay, { fontSize }]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.grid}>
        {buttons.map((button, index) => (
          <Pressable
            key={index}
            style={styles.pressable}
            onPress={() => handleButtonPress(button)}
          >
            <MathView math={`\\large ${button.buttonValue}`} />
          </Pressable>
        ))}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  angleModeText: {
    fontSize: 12,
    fontWeight: 'bold',
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
  errorText: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
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
  historyItem: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  historyItemResult: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  historyExpression: {
    fontSize: 30,
    textAlign: 'left',
  },
  historyResult: {
    fontSize: 30,
    color: 'green',
    textAlign: 'right',
  },
  placeholder: {
    height: 10,
  },
  displayInput: {
    fontSize: 30,
    textAlign: 'left',
    width: '100%',
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 7,
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
    borderRadius: 7,
  },
});
