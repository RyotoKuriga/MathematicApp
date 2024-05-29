import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function MengenZeichen() {
  const divStyle = "font-size: 45px; background-color: 'white'; border: none; font-family: Arial; text-align: center; text-justify: center;";
  const divStyleButtons = "font-size: 40px; background-color: 'grey'; border: none; font-family: Arial; text-align: center; text-justify: center;";
  const [Expression, setExpression] = useState('');

  function formatNumber(number) {
    
    return parseFloat(number.toFixed(3));
  } 

  function generateRandomNumber() {
    let type = Math.floor(Math.random() * 2);
    let randomCase = Math.floor(Math.random() * 6) + 1;
    let randomNumber1 = Math.floor(Math.random() * 51);
    let randomNumber2 = Math.floor(Math.random() * 20);
    let tempNum;
    let number; 
    let set;

    switch (randomCase) {
      case 1:
          randomNumber1 = formatNumber(randomNumber1);
          set = ['N'];
          break;
      case 2:
          randomNumber1 = formatNumber(randomNumber1 * -1);
          set = ['N', 'Z'];
          break;
      case 3:
          tempNum = Math.random() * 51 / (10 * randomNumber2);
          randomNumber1 = formatNumber(tempNum);
          set = ['N', 'Z', 'Q'];
          break;
      case 4:
          tempNum = randomNumber1 / (Math.random() * 51 / -randomNumber2);
          randomNumber1 = formatNumber(tempNum);
          set = ['N', 'Z', 'Q'];
          break;
      case 5:
          tempNum = Math.random() * 51 / (10 * randomNumber2);
          randomNumber1 = `${formatNumber(tempNum)}...`;
          set = ['N', 'Z', 'Q', 'R'];
      case 6:
          tempNum = Math.random() * 51 / (10 * randomNumber2);
          randomNumber1 = `${formatNumber(tempNum)}...`;
          set = ['N', 'Z', 'Q', 'R'];
  }

    

    

    if ( type ) {
      number = `\\{${randomNumber1}\\}`;

    } else {
      number = randomNumber1;
    };

    return { number, set};
  }

  function generateRandomZahlenmenge() {
    let type = Math.floor(Math.random() * 4) + 1;

    switch (type) {
      case 1:
        return 'N';
      case 2:
        return 'Z';
      case 3:
        return 'Q';
      case 4:
        return 'R'
    };


  }

  function createExpression() {
    let menge = generateRandomZahlenmenge();
    let num = generateRandomNumber();


    setExpression(`$${num.number} \\quad \\square \\quad \\mathbb{${menge}}$`);

    return num;
  }

  function solveExpression(sign) {
    let num = createExpression();
    let bool = checkIfCorrect(sign, num);
  }

  function checkIfCorrect(sign, num) {

  }


  return (
    <View>
      <View>
        <MathJax
          html={`<div style='${divStyle}'>
                    <div style='text-align: center;'> <br><br><br>
                      ${Expression}
                    </div>
                  </div>`}
        />
      </View>
      
      <View style={styles.container}>
        <View style={styles.row}>

          <Pressable style={styles.button} onPress={() => solveExpression('\\subset')}>
          
            <MathJax
            html={`
            <div style='${divStyleButtons}; display: flex; align-items: center; justify-content: center; height: 100%;'>
              <div style='text-align: center;'>$\\subset$</div>
            </div>
          `}      
            />
          </Pressable>

          <Pressable style={styles.button} onPress={() => solveExpression('\\in')}>
            <MathJax
              html={`
              <div style='${divStyleButtons}; display: flex; align-items: center; justify-content: center; height: 100%;'>
                <div style='text-align: center;'>$\\in$</div>
              </div>
            `}      
              />     
              
          </Pressable>

          <Pressable style={styles.button} onPress={() => solveExpression('\\not\\subset')}>
            <MathJax
              html={`
              <div style='${divStyleButtons}; display: flex; align-items: center; justify-content: center; height: 100%;'>
                <div style='text-align: center;'>$\\not\\subset$</div>
              </div>
            `}      
              />
          </Pressable>

          <Pressable style={styles.button} onPress={() => solveExpression('\\notin')}>
            <MathJax
              html={`
              <div style='${divStyleButtons}; display: flex; align-items: center; justify-content: center; height: 100%;'>
                <div style='text-align: center;'>$\\notin$</div>
              </div>
            `}      
              />
          </Pressable>

        </View>
      </View>

      

      

    </View>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'grey',
    width: 120,
    height: 120,
    margin: 20
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

