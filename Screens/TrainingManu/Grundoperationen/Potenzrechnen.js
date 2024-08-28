import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text } from 'react-native';
import MathView from 'react-native-math-view';
import stylesUebungen from '../StylesUebungen';
import { colors } from '../../../theme';
import { ThemeContext } from '../../../Context/themeContext';
import { useContext } from 'react';
import useStylesUebungen from '../StylesUebungen';

export function Potenzrechnen() {
  const mathMid = '\\Large';

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const stylesUebungen = useStylesUebungen();

  const AufgabenUndLoesungen = [
    
    {
      "titel": "Vereinfache den Term",
      "aufgabe": "a)\\ m^2 \\cdot m^3",
      "loesung": "m^5"
    },
    {
        "aufgabe": "b)\\ \\dfrac{n^5}{n^2}",
        "loesung": "n^3"
    },
    {
        "aufgabe": "c)\\ (a^3)^2",
        "loesung": "a^6"
    },
    {
        "aufgabe": "d)\\ p^4 \\cdot p",
        "loesung": "p^5"
    },
    {
        "aufgabe": "e)\\ \\dfrac{q^6}{q^3}",
        "loesung": "q^3"
    },
    {
        "aufgabe": "f)\\ (r^2)^4",
        "loesung": "r^8"
    },
    {
        "aufgabe": "g)\\ s^3 \\cdot s^2 \\cdot s",
        "loesung": "s^6"
    },
    {
        "aufgabe": "h)\\ \\dfrac{t^5}{t}",
        "loesung": "t^4"
    },
    {
        "aufgabe": "i)\\ (u^4)^3",
        "loesung": "u^12"
    },
    {
        "aufgabe": "j)\\ v^6 \\cdot v^2",
        "loesung": "v^8"
    },
    {
        "aufgabe": "k)\\ \\dfrac{w^8}{w^4}",
        "loesung": "w^4"
    },
    {
        "aufgabe": "l)\\ (x^2)^5",
        "loesung": "x^{10}"
    },
    {
        "aufgabe": "m)\\ y^3 \\cdot y \\cdot y^2",
        "loesung": "y^6"
    },
    {
        "aufgabe": "n)\\ \\dfrac{z^7}{z^2}",
        "loesung": "z^5"
    },
    {
        "aufgabe": "o)\\ (a^3 b^2)^2",
        "loesung": "a^6 b^4"
    },
    {
        "aufgabe": "p)\\ \\dfrac{m^5 n^3}{m^2 n}",
        "loesung": "m^3 n^2"
    },
    {
        "aufgabe": "q)\\ (p^2 q^3)^3",
        "loesung": "p^6 q^9"
    },
    {
        "aufgabe": "r)\\ m^4 \\cdot m^2 \\cdot m",
        "loesung": "m^7"
    },
    {
        "aufgabe": "s)\\ \\dfrac{t^9}{t^3 t^2}",
        "loesung": "t^4"
    },
    {
        "aufgabe": "t)\\ (x^5 y^2)^2",
        "loesung": "x^{10} y^4"
    },
    {
        "aufgabe": "u)\\ u^3 \\cdot u^4 \\cdot u",
        "loesung": "u^8"
    },
    {
        "aufgabe": "v)\\ \\dfrac{w^{10}}{w^5 w^2}",
        "loesung": "w^3"
    },
    {
        "aufgabe": "w)\\ (z^6 a^2)^2",
        "loesung": "z^12 a^4"
    },
    {
        "aufgabe": "x)\\ m^2 \\cdot n^2 \\cdot m^3",
        "loesung": "m^5 n^2"
    },
    {
        "aufgabe": "y)\\ \\dfrac{p^7 q^4}{p^3 q^2}",
        "loesung": "p^4 q^2"
    },
    {
        "aufgabe": "z)\\ (r^3 s^2 t)^3",
        "loesung": "r^9 s^6 t^3"
    },
    {
      "titel": "Vereinfache den Term Teil 2",
      "aufgabe": "a)\\ a^3 \\cdot a^2",
      "loesung": "a^5"
    },
    {
        "aufgabe": "b)\\ \\dfrac{b^4}{b^2}",
        "loesung": "b^2"
    },
    {
        "aufgabe": "c)\\ (c^2)^3",
        "loesung": "c^6"
    },
    {
        "aufgabe": "d)\\ d^5 \\cdot d^2",
        "loesung": "d^7"
    },
    {
        "aufgabe": "e)\\ \\dfrac{e^6}{e^3}",
        "loesung": "e^3"
    },
    {
        "aufgabe": "f)\\ (f^2)^5",
        "loesung": "f^10"
    },
    {
        "aufgabe": "g)\\ g^3 \\cdot g^4",
        "loesung": "g^7"
    },
    {
        "aufgabe": "h)\\ \\dfrac{h^7}{h^2}",
        "loesung": "h^5"
    },
    {
        "aufgabe": "i)\\ (i^3)^2",
        "loesung": "i^6"
    },
    {
        "aufgabe": "j)\\ j^4 \\cdot j^3",
        "loesung": "j^7"
    },
    {
        "aufgabe": "k)\\ \\dfrac{k^5}{k^2}",
        "loesung": "k^3"
    },
    {
        "aufgabe": "l)\\ (l^2)^4",
        "loesung": "l^8"
    },
    {
        "aufgabe": "m)\\ m^2 \\cdot m^3 \\cdot m",
        "loesung": "m^6"
    },
    {
        "aufgabe": "n)\\ \\dfrac{n^8}{n^3}",
        "loesung": "n^5"
    },
    {
        "aufgabe": "o)\\ (o^2 p)^3",
        "loesung": "o^6 p^3"
    },
    {
        "aufgabe": "p)\\ \\dfrac{p^6 q^2}{p^3 q}",
        "loesung": "p^3 q"
    },
    {
        "aufgabe": "q)\\ (q^3 r^2)^2",
        "loesung": "q^6 r^4"
    },
    {
        "aufgabe": "r)\\ r^4 \\cdot r^2 \\cdot r",
        "loesung": "r^7"
    },
    {
        "aufgabe": "s)\\ \\dfrac{s^9}{s^3 s}",
        "loesung": "s^5"
    },
    {
        "aufgabe": "t)\\ (t^2 u^3)^2",
        "loesung": "t^4 u^6"
    },
    {
        "aufgabe": "u)\\ u^3 \\cdot u^2 \\cdot u^4",
        "loesung": "u^9"
    },
    {
        "aufgabe": "v)\\ \\dfrac{v^8}{v^2 v^3}",
        "loesung": "v^3"
    },
    {
        "aufgabe": "w)\\ (w^3 x^2)^2",
        "loesung": "w^6 x^4"
    },
    {
        "aufgabe": "x)\\ x^2 \\cdot y^2 \\cdot x^3",
        "loesung": "x^5 y^2"
    },
    {
        "aufgabe": "y)\\ \\dfrac{y^6 z^4}{y^2 z^2}",
        "loesung": "y^4 z^2"
    },
    {
        "aufgabe": "z)\\ (z^3 a^2 b)^2",
        "loesung": "z^6 a^4 b^2"
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
