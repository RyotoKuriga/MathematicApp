import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text } from 'react-native';
import MathView from 'react-native-math-view';
import stylesUebungen from '../StylesUebungen';
import { colors } from '../../../theme';
import { ThemeContext } from '../../../Context/themeContext';
import { useContext } from 'react';
import useStylesUebungen from '../StylesUebungen';

export function Grundoperationen() {
  const mathMid = '\\Large';

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const stylesUebungen = useStylesUebungen();

  const AufgabenUndLoesungen = [
    {
      "titel": "Vereinfache den Term",
      "aufgabe": "a)\\ 10y + 5y",
      "loesung": "15y"
    },
    {
      "aufgabe": "b)\\ 12z - 4z",
      "loesung": "8z"
    },
    {
      "aufgabe": "c)\\ 3a \\cdot 4b",
      "loesung": "12ab"
    },
    {
      "aufgabe": "d)\\ \\dfrac{16m}{4m}",
      "loesung": "4"
    },
    {
      "aufgabe": "e)\\ (2x + 3x) \\cdot 4",
      "loesung": "20x"
    },
    {
      "aufgabe": "f)\\ 5a + 3a - 2a",
      "loesung": "6a"
    },
    {
      "aufgabe": "g)\\ \\dfrac{20b + 10b}{5b}",
      "loesung": "6"
    },
    {
        "aufgabe": "h)\\ 7c \\cdot 2c \\cdot c",
        "loesung": "14c^3"
    },
    {
        "aufgabe": "i)\\ 8d \\cdot (3 + 2)",
        "loesung": "40d"
    },
    {
        "aufgabe": "j)\\ (24e - 6e)/3e",
        "loesung": "6"
    },
    {
        "aufgabe": "k)\\ 9f \\cdot f \\cdot f",
        "loesung": "9f^3"
    },
    {
        "aufgabe": "l)\\ (2g + 3g) \\cdot (4g - g)",
        "loesung": "15g^2"
    },
    {
        "aufgabe": "m)\\ \\dfrac{30h \\cdot h}{5h}",
        "loesung": "6h"
    },
    {
        "aufgabe": "n)\\ 5i \\cdot (2i + 3)",
        "loesung": "10i^2 + 15i"
    },
    {
        "aufgabe": "o)\\ 4j + 3j - 2j + j",
        "loesung": "6j"
    },
    {
        "aufgabe": "p)\\ (3k^2 + 2k) \\cdot k",
        "loesung": "3k^3 + 2k^2"
    },
    {
        "aufgabe": "q)\\ \\dfrac{45m^2 - 15m}{5m}",
        "loesung": "9m - 3"
    },
    {
        "aufgabe": "r)\\ 2n(3n + 4) - 5n^2",
        "loesung": "6n^2 + 8n - 5n^2"
    },
    {
        "aufgabe": "s)\\ \\dfrac{10p^3 + 15p^2}{5p}",
        "loesung": "2p^2 + 3p"
    },
    {
        "aufgabe": "t)\\ (4q + 6q^2) \\cdot (q - 2)",
        "loesung": "4q^2 - 8q + 6q^3 - 12q^2"
    },
    {
        "aufgabe": "u)\\ 7r^2 \\cdot \\dfrac{2r}{3r}",
        "loesung": "\\dfrac{14r^3}{3r} = \\dfrac{14r^2}{3}"
    },
    {
        "aufgabe": "v)\\ (5s + 2)(s - 1)",
        "loesung": "5s^2 - 5s + 2s - 2 = 5s^2 - 3s - 2"
    },
    {
        "aufgabe": "w)\\ \\dfrac{8t^3 + 4t^2 - 2t}{2t}",
        "loesung": "4t^2 + 2t - 1"
    },
    {
        "aufgabe": "x)\\ (3u - 2)(u^2 + u + 1)",
        "loesung": "3u^3 + u^2 + u - 2"
    },
    {
        "aufgabe": "y)\\ \\dfrac{15v^4 - 5v^3 + 10v^2}{5v^2}",
        "loesung": "3v^2 - v + 2"
    },
    {
        "aufgabe": "z)\\ (4w^3 - 2w + 1) \\cdot (2w - 1)",
        "loesung": "8w^4 - 8w^3 + 4w + 1"
    },
    {
      "titel": "Vereinfache den Term Teil 2",
      "aufgabe": "a)\\ 14x + 6x",
      "loesung": "20x"
    },
    {
        "aufgabe": "b)\\ 18y - 7y",
        "loesung": "11y"
    },
    {
        "aufgabe": "c)\\ 2a \\cdot 5b",
        "loesung": "10ab"
    },
    {
        "aufgabe": "d)\\ \\dfrac{25m}{5m}",
        "loesung": "5"
    },
    {
        "aufgabe": "e)\\ (3x + 4x) \\cdot 3",
        "loesung": "21x"
    },
    {
        "aufgabe": "f)\\ 8a + 2a - 5a",
        "loesung": "5a"
    },
    {
        "aufgabe": "g)\\ \\frac{30b + 15b}{5b}",
        "loesung": "9"
    },
    {
        "aufgabe": "h)\\ 6c \\cdot 3c \\cdot c",
        "loesung": "18c^3"
    },
    {
        "aufgabe": "i)\\ 5d \\cdot (4 + 3)",
        "loesung": "35d"
    },
    {
        "aufgabe": "j)\\ \\dfrac{35e - 10e}{5e}",
        "loesung": "5"
    },
    {
        "aufgabe": "k)\\ 10f \\cdot f \\cdot f",
        "loesung": "10f^3"
    },
    {
        "aufgabe": "l)\\ (3g + 4g) \\cdot (2g - g)",
        "loesung": "7g^2"
    },
    {
        "aufgabe": "m)\\ \\dfrac{40h \\cdot h}{10h}",
        "loesung": "4h"
    },
    {
        "aufgabe": "n)\\ 4i \\cdot (3i + 2)",
        "loesung": "12i^2 + 8i"
    },
    {
        "aufgabe": "o)\\ 5j + 2j - 3j + j",
        "loesung": "5j"
    },
    {
        "aufgabe": "p)\\ (4k^2 + 3k) \\cdot k",
        "loesung": "4k^3 + 3k^2"
    },
    {
        "aufgabe": "q)\\ \\dfrac{50m^2 - 20m}{10m}",
        "loesung": "5m - 2"
    },
    {
        "aufgabe": "r)\\ 3n(4n + 5) - 6n^2",
        "loesung": "12n^2 + 15n - 6n^2"
    },
    {
        "aufgabe": "s)\\ \\dfrac{15p^3 + 20p^2}{5p}",
        "loesung": "3p^2 + 4p"
    },
    {
        "aufgabe": "t)\\ (5q + 7q^2) \\cdot (q - 3)",
        "loesung": "5q^2 - 15q + 7q^3 - 21q^2"
    },
    {
        "aufgabe": "u)\\ 8r^2 \\cdot \\dfrac{3r}{4r}",
        "loesung": "\\dfrac{24r^3}{4r} = 6r^2"
    },
    {
        "aufgabe": "v)\\ (6s + 3)(s - 2)",
        "loesung": "6s^2 - 9s - 6"
    },
    {
        "aufgabe": "w)\\ \\dfrac{12t^3 + 6t^2 - 3t}{3t}",
        "loesung": "4t^2 + 2t - 1"
    },
    {
        "aufgabe": "x)\\ (4u - 3)(u^2 + u + 2)",
        "loesung": "4u^3 + u^2 + 5u - 6"
    },
    {
        "aufgabe": "y)\\ \\dfrac{18v^4 - 6v^3 + 12v^2}{6v^2}",
        "loesung": "3v^2 - v + 2"
    },
    {
        "aufgabe": "z)\\ (5w^3 - 3w + 2) \\cdot (3w - 1)",
        "loesung": "15w^4 - 8w^3 + 4w + 2"
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
    <View style={{backgroundColor: activeColors.background}}>
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
          <View style={{height: 200}}></View>  
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
