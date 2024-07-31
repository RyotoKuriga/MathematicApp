import { StyleSheet, Text, View, Pressable, TextInput, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import MathView from 'react-native-math-view';
import { Animated } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export function QuickTraining() {
  const [Expression, setExpression] = useState('');
  const [Solution, setSolution] = useState('');
  const [userInput, setUserInput] = useState('');
  const [inputStyle, setInputStyle] = useState(styles.input);
  const [countdown, setCountdown] = useState(0);
  const [showCountdown, setShowCountdown] = useState(false);
  const [challengeActive, setChallengeActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); // Set to 5 for testing, change to 60 for real use
  const [correctCount, setCorrectCount] = useState(0);
  const [progress] = useState(new Animated.Value(1));
  const [showResultBox, setShowResultBox] = useState(false);
  const [buttonColor, setButtonColor] = useState('white');
  const [keyColors, setKeyColors] = useState({});

  // Function for random number
  const getRandomNumber = (min, max, value) => {
    if (value === 'positiv') {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (value === 'negativ') {
      return -1 * (Math.floor(Math.random() * (max - min + 1)) + min);
    } else {
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
  };

  // Function to create an expression with brackets
  const createExpressionWithBrackets = () => {
    const min = 2;
    const max = 3;
    const expressionParts = [' '];
    const numberOfParts = getRandomNumber(min, max, 'positiv');

    for (let i = 0; i < numberOfParts; i++) {
      if (i !== 0) {
        expressionParts.push(getRandomOperation());
      }

      if (getRandomNumber(0, 1, 'positiv') === 1 && i > 0) {
        const numNumbersInBrackets = getRandomNumber(min, max - 2, 'positiv');
        const bracketExpression = [];
        i++;

        for (let j = 0; j < numNumbersInBrackets; j++) {
          bracketExpression.push(`${getRandomNumber(-20, 20)}`);
          if (j !== numNumbersInBrackets - 1) {
            bracketExpression.push(getRandomOperation());
          }
        }

        expressionParts.push(`(${bracketExpression.join(' ')})`);
      } else {
        expressionParts.push(`${getRandomNumber(-20, 20)}`);
      }
    }

    const expression = expressionParts.join(' ');
    setExpression(expression);
    setSolution(eval(expression));
  };

  // Function to handle user input
  const handleInput = (value) => {
    setButtonColor(buttonColor === 'blue' ? 'red' : 'blue'); // Ändert die Farbe bei jedem Drücken
    const newInput = userInput + value;
    setUserInput(newInput);

    if (parseInt(newInput) === Solution) {
      setCorrectCount(correctCount + 1);
      setUserInput('Richtig!');
      setInputStyle(styles.inputCorrect);

      setTimeout(() => {
        setUserInput('');
        setInputStyle(styles.input);
        createExpressionWithBrackets();
      }, 1000);
    }
  };

  // Function to clear the last character in user input
  const handleBackspace = () => {
    setUserInput(userInput.slice(0, -1));
  };

  // Function to handle the challenge start
  const handleStartChallenge = () => {
    setUserInput('');
    setShowCountdown(true);
    setCountdown(3);
  };

  // Countdown logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && showCountdown) {
      setShowCountdown(false);
      setChallengeActive(true);
      setTimeRemaining(20);
      setCorrectCount(0);
      progress.setValue(1);
      Animated.timing(progress, {
        toValue: 0,
        duration: 20000,
        useNativeDriver: false,
      }).start();
    }
  }, [countdown, showCountdown]);

  useEffect(() => {
    if (challengeActive && timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      setChallengeActive(false);
      setShowResultBox(true);
    }
  }, [challengeActive, timeRemaining]);

  useEffect(() => {
    createExpressionWithBrackets();
  }, []);

  const handlePressIn = (num) => {
    setKeyColors((prevColors) => ({ ...prevColors, [num]: '#d3d3d3' }));
  };

  const handlePressOut = (num) => {
    setKeyColors((prevColors) => ({ ...prevColors, [num]: 'white' }));
  };

  return (
    <View style={styles.container} onTouchStart={Keyboard.dismiss}>
      {showCountdown && (
        <View style={styles.countdownOverlay}>
          <Text style={styles.countdownText}>{countdown}</Text>
        </View>
      )}
      {showResultBox && (
        <View style={styles.resultBox}>
          <Pressable style={styles.closeButton} onPress={() => setShowResultBox(false)}>
            <Text style={styles.closeButtonText}>✖</Text>
          </Pressable>
          <Text style={styles.resultText}>Du hast {correctCount} Aufgaben in einer Minute richtig gelöst!</Text>
        </View>
      )}
      
      <View style={styles.containerExpression}>
        <Text style={styles.expressionText}>
          {Expression}
        </Text>
      </View>

      <Pressable style={inputStyle} onPress={Keyboard.dismiss}>
        <Text style={userInput ? styles.inputText : styles.placeholderText}>
          {userInput || "Antwort eingeben!"}
        </Text>
      </Pressable>

      <View style={styles.keypad}>
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, '-', 0].map((num) => (
          <Pressable
            key={num}
            style={[styles.key, {backgroundColor: keyColors[num] || 'white'}]}
            onPress={() => handleInput(num.toString())}
            onPressIn={() => handlePressIn(num)}
            onPressOut={() => handlePressOut(num)}
          >
            <Text style={styles.keyText}>{num}</Text>
          </Pressable>
        ))}
        <Pressable
          style={[styles.key, {backgroundColor: keyColors['backspace'] || 'white'}]}
          onPress={handleBackspace}
          onPressIn={() => handlePressIn('backspace')}
          onPressOut={() => handlePressOut('backspace')}
        >
          <MathView
            math={'\\huge \\leftarrow'}
          />
        </Pressable>
      </View>
      {!challengeActive && (
        <Pressable style={styles.startChallenge} onPress={handleStartChallenge}>
          <Text style={styles.startChallengeText}>
            Starte die Herausforderung!
          </Text>
        </Pressable>
      )}
      {challengeActive && (
        <View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, { width: progress.interpolate({
            inputRange: [0, 1],
            outputRange: ['100%', '0%']
          }) }]} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  containerExpression: {

  },
  input: {
    borderWidth: moderateScale(2),
    padding: moderateScale(10),
    marginVertical: verticalScale(20),
    width: scale(250),
    fontSize: moderateScale(24),
    textAlign: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: 'white',
    height: verticalScale(50),
    justifyContent: 'center',
  },
  inputText: {
    fontSize: moderateScale(24),
    color: 'black',
    textAlign: 'center',
  },
  placeholderText: {
    fontSize: moderateScale(24),
    color: 'gray',
    textAlign: 'center',
  },
  inputCorrect: {
    borderWidth: moderateScale(2),
    borderColor: '#3DF43E',
    padding: moderateScale(10),
    marginVertical: verticalScale(10),
    width: scale(80),
    fontSize: moderateScale(24),
    textAlign: 'center',
    borderRadius: moderateScale(10),
    backgroundColor: '#2CF570',
    height: verticalScale(50),
    justifyContent: 'center',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: scale(300),
  },
  key: {
    borderWidth: moderateScale(2),
    borderColor: 'black',
    height: moderateScale(70),
    width: scale(70),
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(5),
    borderRadius: moderateScale(5),
  },
  keyText: {
    fontSize: moderateScale(24),
  },
  expressionText: {
    fontSize: moderateScale(30),
  },
  startChallenge: {
    height: verticalScale(40),
    width: scale(75),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(5),
    marginTop: verticalScale(15),
    borderRadius: moderateScale(7),
  },
  startChallengeText: {
    fontSize: moderateScale(20),
    color: 'white',
  },
  countdownOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  countdownText: {
    fontSize: moderateScale(100),
    color: 'white',
  },
  progressBarContainer: {
    height: verticalScale(40),
    width: scale(75),
    backgroundColor: 'white',
    borderWidth: moderateScale(2),
    borderColor: 'black',
    margin: moderateScale(5),
    marginTop: verticalScale(15),
    borderRadius: moderateScale(7),
    overflow: 'hidden',
  },
  progressBar: {
    height: '104%',
    width: '104%',
    backgroundColor: 'black',
    borderRadius: moderateScale(4),
  },
  resultBox: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    backgroundColor: 'white',
    borderWidth: moderateScale(2),
    borderColor: 'black',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    zIndex: 2,
  },
  closeButton: {
    position: 'absolute',
    top: verticalScale(10),
    right: verticalScale(10),
  },
  closeButtonText: {
    fontSize: moderateScale(24),
    color: 'black',
  },
  resultText: {
    fontSize: moderateScale(24),
    textAlign: 'center',
  },
});

