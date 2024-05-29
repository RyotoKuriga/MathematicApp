import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function MengenSchreibweise() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const alphabetBig = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  const alphabetSmall = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const NumberMenge = ['N', 'Z'];
  
  
  
  const [Menge, setMenge] = useState('');
  const [Solution, setSolution] = useState('');

  function pickRandomLetter(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  function pickRandomNumberMenge(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  function generateRandomNumber() {
    const num = Math.random() > 0.5 ? Math.floor(Math.random() * 12) + 1 : Math.floor(Math.random() * -12) - 1;
    return num;
  }

  function generateSign() {
    let state = Math.floor(Math.random() * 4) + 1;
    if ( state === 1) {
      return '<'
    } else if ( state === 2) {
      return '>';
    } else if ( state === 3) {
      return '\\leq';
    } else if ( state === 4) {
      return '\\geq';
    }
  };

  function setInterval(zahlenmenge, num1, num2, variable) {
    
    let sign1 = generateSign();
    let sign2 = generateSign();
    let state = Math.floor(Math.random() * 3) + 1;
    

    if ( zahlenmenge === 'N') {
      num1 = num1 > 0 ? num1 : num1 * -(1);
      num2 = num2 > 0 ? num2 : num2 * -(1);

      if ( state === 1) {
        return `${variable} ${sign1} ${num1}` 
      } else if ( state === 2) {
        return `${num1} ${sign1} ${variable}`;
      } else if ( state === 3) {
        return `${num1} ${sign1} ${variable} ${sign2} ${num2}`;
      } 
      
    } else {
      if ( state === 1) {
        return `${variable} ${sign1} ${num1}`
      } else if ( state === 2) {
        return `${num1} ${sign1} ${variable}`;
      } else if ( state === 3) {
        return `${num1} ${sign1} ${variable} ${sign2} ${num2}`;
      } 
    }

  };


  function randomMengeGenerator() {    
    let nameMenge = pickRandomLetter(alphabetBig);
    let zahlenmenge = pickRandomNumberMenge(NumberMenge);
    let num1 = generateRandomNumber();
    let num2 = generateRandomNumber();
    let variable = pickRandomLetter(alphabetSmall);
    
    let Menge = `$\\mathbb{${nameMenge}} = \\{${variable} \\in \\mathbb{${zahlenmenge}} \\, \\,| \\, \\, ${setInterval(zahlenmenge, num1, num2. variable)}\\} $`;
    setMenge(Menge);

    convertBeschreibend(nameMenge, num1, num2);
  };

  function convertBeschreibend(nameMenge, num1, num2, variable) {
    let aufzaehlendeForm = [];
    let bedingung = setInterval();
    switch (bedingung) {
      case `${variable} > ${num1}`:
        for (let i = num1 + 1; i <= 12; i++) {
          aufzaehlendeForm.push(i);
        }
        break;
      case `${variable} < ${num1}`:
        // Füge alle Zahlen kleiner als num1 zur aufzählenden Form hinzu
        for (let i = -12; i < num1; i++) {
          aufzaehlendeForm.push(i);
        }
        break;
      // Füge weitere Fälle hinzu, wenn nötig
    }
    
    // Erstelle die aufzählende Form als String
    let aufzaehlendeFormString = aufzaehlendeForm.join(', ');
    
    // Setze die aufzählende Form in den Zustand
    setSolution(`$\\mathbb{${nameMenge}} = \\{${aufzaehlendeFormString}\\}$`);
  }
  

  return (
    <SafeAreaView>
      <ScrollView>
      <MathJax
  // HTML content with MathJax support
        html={
          "$sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$<br><p>This is an equation</p>"
        }
        // MathJax config option
        mathJaxOptions={{
          messageStyle: "none",
          extensions: ["tex2jax.js"],
          jax: ["input/TeX", "output/HTML-CSS"],
          tex2jax: {
            inlineMath: [
              ["$", "$"],
              ["\\(", "\\)"],
            ],
            displayMath: [
              ["$$", "$$"],
              ["\\[", "\\]"],
            ],
            processEscapes: true,
          },
          TeX: {
            extensions: [
              "AMSmath.js",
              "AMSsymbols.js",
              "noErrors.js",
              "noUndefined.js",
            ],
          },
        }}
      />
      </ScrollView>

      <Pressable onPress={randomMengeGenerator}>
        <Text>
          okkkkkkkkkkay
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}