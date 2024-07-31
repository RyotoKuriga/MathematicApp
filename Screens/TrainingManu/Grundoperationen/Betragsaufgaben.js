import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text } from 'react-native';
import MathView from 'react-native-math-view';
import stylesUebungen from '../StylesUebungen';

export function Betragsaufgaben() {
  const mathMid = '\\Large';

  const AufgabenUndLoesungen = [
    
    {
      "titel": "Löse die Betragsgleichung",
      "aufgabe": "a)\\ |x - 3| = 5",
      "loesung": "x_1 = 8; x_2 = -2"
    },
    {
        "aufgabe": "b)\\ |2x + 1| = 7",
        "loesung": "x_1 = 3; x_2 = -4"
    },
    {
        "aufgabe": "c)\\ |3x - 4| = 2",
        "loesung": "x_1 = 2; x_2 = \\frac{2}{3}"
    },
    {
        "aufgabe": "d)\\ |4x + 5| = 9",
        "loesung": "x_1 = 1; x_2 = -\\frac{7}{2}"
    },
    {
        "aufgabe": "e)\\ |5x - 6| = 4",
        "loesung": "x_1 = 2; x_2 = \\frac{2}{5}"
    },
    {
        "aufgabe": "f)\\ |6x + 7| = 13",
        "loesung": "x_1 = 1; x_2 = -\\frac{20}{6}"
    },
    {
        "aufgabe": "g)\\ |x + 8| = 12",
        "loesung": "x_1 = 4; x_2 = -20"
    },
    {
        "aufgabe": "h)\\ |2x - 3| = 9",
        "loesung": "x_1 = 6; x_2 = -3"
    },
    {
        "aufgabe": "i)\\ |3x + 4| = 7",
        "loesung": "x_1 = 1; x_2 = -\\frac{11}{3}"
    },
    {
        "aufgabe": "j)\\ |4x - 2| + 3 = 8",
        "loesung": "x_1 = \\frac{7}{4}; x_2 = -\\frac{1}{4}"
    },
    {
        "aufgabe": "k)\\ 2|5x + 1| = 14",
        "loesung": "x_1 = \\frac{6}{5}; x_2 = -\\frac{8}{5}"
    },
    {
        "aufgabe": "l)\\ |2x + 5| - 4 = 3",
        "loesung": "x_1 = 1; x_2 = -4"
    },
    {
        "aufgabe": "m)\\ 3|x - 4| = 15",
        "loesung": "x_1 = 9; x_2 = -1"
    },
    {
        "aufgabe": "n)\\ |4x + 1| = 2x + 5",
        "loesung": "x_1 = 2; x_2 = -3"
    },
    {
        "aufgabe": "o)\\ |3x - 2| = 2x + 4",
        "loesung": "x_1 = 6; x_2 = -2"
    },
    {
        "aufgabe": "p)\\ 2|x + 3| + 1 = 9",
        "loesung": "x_1 = 2; x_2 = -8"
    },
    {
        "aufgabe": "q)\\ |5x - 7| = x + 9",
        "loesung": "x_1 = 4; x_2 = -2"
    },
    {
        "aufgabe": "r)\\ |6x + 4| - 2x = 10",
        "loesung": "x_1 = 1; x_2 = -\\frac{7}{2}"
    },
    {
        "aufgabe": "s)\\ 3|2x - 5| = 18",
        "loesung": "x_1 = 7; x_2 = -\\frac{4}{3}"
    },
    {
        "aufgabe": "t)\\ |x + 6| + 2 = 5x",
        "loesung": "x_1 = 1; x_2 = -2"
    },
    {
        "aufgabe": "u)\\ 2|3x - 1| = 4x + 10",
        "loesung": "x_1 = 3; x_2 = -\\frac{8}{5}"
    },
    {
        "aufgabe": "v)\\ |4x + 3| = 2x + 7",
        "loesung": "x_1 = 2; x_2 = -5"
    },
    {
        "aufgabe": "w)\\ |2x - 4| + x = 10",
        "loesung": "x_1 = 4; x_2 = -2"
    },
    {
        "aufgabe": "x)\\ |5x + 2| - 3x = 8",
        "loesung": "x_1 = 3; x_2 = -5"
    },
    {
        "aufgabe": "y)\\ |3x - 4| = x + 8",
        "loesung": "x_1 = 6;x_2 = -2"
    },
    {
        "aufgabe": "z)\\ |6x + 5| = 2x + 11",
        "loesung": "x_1 = 1; x_2 = -4"
    }
    
  ];

  const [selectedLoesungen, setSelectedLoesungen] = useState([]);

  const toggleLoesung = (index) => {
    const selectedIndex = selectedLoesungen.indexOf(index);
    let newSelectedLoesungen = [...selectedLoesungen];
    if (selectedIndex === -1) {
      newSelectedLoesungen.push(index);
    } else {
      newSelectedLoesungen.splice(selectedIndex, 1);
    }
    setSelectedLoesungen(newSelectedLoesungen);
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView>
          <View style={stylesUebungen.container}>
            {AufgabenUndLoesungen.map((item, index) => (
              <View key={index}>
                {item.titel && (
                  <View style={stylesUebungen.titleContainer}>
                    <Text style={stylesUebungen.title}>{item.titel}</Text>
                  </View>
                )}

                <View style={stylesUebungen.taskContainer}>
                  <Pressable onPress={() => toggleLoesung(index)}>
                    <MathView
                      math={`${mathMid} ${item.aufgabe}`}
                      style={stylesUebungen.mathText}
                    />
                    {item.aufgabeText && (
                      <Text style={stylesUebungen.taskText}>{item.aufgabeText}</Text>
                    )}
                  </Pressable>
                </View>
                
                {selectedLoesungen.includes(index) && (
                  <View style={stylesUebungen.solutionContainer}>
                    <MathView
                      math={`\\Large ${item.loesung}`}
                      style={stylesUebungen.mathText}
                    />
                    {item.loesungText && (
                      <Text style={stylesUebungen.solutionText}>{item.loesungText}</Text>
                    )}
                  </View>
                )}             
              </View>           
            ))}           
          </View>  
          <View style={{height: 200, backgroundColor: 'white'}}></View>  
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
