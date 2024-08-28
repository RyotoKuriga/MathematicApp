import React, { act, useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import MathView from 'react-native-math-view';
import stylesUebungen from '../StylesUebungen';
import { colors } from '../../../theme';
import { ThemeContext } from '../../../Context/themeContext';
import { useContext } from 'react';
import useStylesUebungen from '../StylesUebungen';

export function AusklammernManu() {
  const mathMid = '\\large';

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const stylesUebungen = useStylesUebungen();

  const AufgabenUndLoesungen = [
    {
      titel: "Klammere den kleinsten gemeinsamen Teiler aus:",
      aufgabe: "a) 12x - 4",
      loesung: "4(3x - 1)",
    },
    {
      aufgabe: "b) 8x - 4y - 16z",
      loesung: "4(2x - y - 4z)",
    },
    {
      aufgabe: "c) 17a + 51",
      loesung: "17(a + 3)",
    },
    {
      aufgabe: "d) 15x - 10x + 5",
      loesung: "5(x + 1)",
    },
    {
      aufgabe: "e) 144u + 48x",
      loesung: "48(3u + x)",
    },
    {
      aufgabe: "f) 36v - 36x - 6z",
      loesung: "6(6(v - x) - z)",
    },
    {
      aufgabe: "g) 1000u + 10000v + 100q",
      loesung: "100(10(u + 10v) + q)",
    },
    {
      aufgabe: "h) 95a - 5",
      loesung: "5(19a - 1)",
    },
    {
      aufgabe: "i) 17x - 1",
      loesung: "17x - 1",
    },
    {
      aufgabe: "j) 42z - 21",
      loesung: "21(2z - 1)",
    },
    {
      aufgabe: "k) 80a - 50b - 30c - 20d",
      loesung: "10(2(4a - d) - 5b - 3d)",
    },
    {
      titel: "Klammere nun auch Variablen aus:",
      aufgabe: "a) a^5 + a^3",
      loesung: "a^3(a^2 + 1)",
    },
    {
      aufgabe: "b) 2x^4 + 4x^2",
      loesung: "2x^2(x^2 + 2)",
    },
    {
      aufgabe: "c) 3y^3 - 6y",
      loesung: "3y(y^2 - 2)",
    },
    {
      aufgabe: "d) 4z^6 - 8z^3",
      loesung: "4z^3(z^3 - 2)",
    },
    {
      aufgabe: "e) 5w^4 + 5w^2",
      loesung: "5w^2(w^2 + 1)",
    },
    {
      aufgabe: "f) 6u^5 - 9u^2",
      loesung: "3u^2(2u^3 - 3)",
    },
    {
      aufgabe: "g) 7x^4 - 14x^2",
      loesung: "7x^2(x^2 - 2)",
    },
    {
      aufgabe: "h) 8y^3 + 16y",
      loesung: "8y(y^2 + 2)",
    },
    {
      aufgabe: "i) 9z^6 - 27z^3",
      loesung: "9z^3(z^3 - 3)",
    },
    {
      aufgabe: "j) 10w^4 + 20w^2",
      loesung: "10w^2(w^2 + 2)",
    },
    {
      aufgabe: "k) 11u^5 - 22u^2",
      loesung: "11u^2(u^3 - 2)",
    },
    {
      aufgabe: "l) 44a^2 - 22b^2",
      loesung: "22(2a^2 - b^2)",
    },
    {
      aufgabe: "m) 4x^6 - 12x^4 + 8x^2",
      loesung: "4x^2(x^4 - 3x^2 + 2)",
    },
    {
      aufgabe: "n) 9y^4 - 6y^3 - 27y^2",
      loesung: "3y^2(y^2 - 2y - 9)",
    },
    {
      aufgabe: "o) 16z^8 + 40z^6 + 24z^4",
      loesung: "8z^4(2z^4 + 5z^2 + 3)",
    },
    {
      titel: "Klammere aus und klammere doppelt aus:",
      aufgabe: "a) 4x^3 + 8x^2 - 5x - 10",
      loesung: "(x + 2)(4x^2 - 5)",
    },
    {
      aufgabe: "b) 6x^4 - 9x^3 + 12x^2 - 18x",
      loesung: "3x(2x - 3)(x^2 + 2)",
    },
    {
      aufgabe: "c) 12x^4 + 18x^3 - 24x^2 - 36x",
      loesung: "6x(2x + 3)(x^2 - 2)",
    },
    {
      aufgabe: "d) 20x^4 - 30x^3 + 40x^2 - 60x",
      loesung: "10x(2x - 3)(x^2 + 2)",
    },
    {
      aufgabe: "e) 18x^{10} + 24x^8 - 27x^6 - 36x^4",
      loesung: "3x^4(3x^2 + 4)(2x^4 - 3)",
    },
    {
      titel: "Bilde den Klammeransatz:",
      aufgabe: "a) x^2 + 3x + 2",
      loesung: "(x + 1)(x + 2)",
    },
    {
      aufgabe: "b) x^2 + 8x - 9",
      loesung: "(x + 9)(x - 1)",
    },
    {
      aufgabe: "c) 3x^2 - 12x + 9",
      loesung: "3(x - 3)(x - 1)",
    },
    {
      aufgabe: "d) 4x^2 - 4x - 8",
      loesung: "4(x - 2)(x + 1)",
    },
    {
      aufgabe: "e) x^2 - 5x + 6",
      loesung: "(x - 2)(x - 3)",
    },
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
    <View style={{ backgroundColor: activeColors.background }}>
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
                      math={`${mathMid} ${item.loesung}`}
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
          <View style={{ height: 200}} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mathView: {
    marginVertical: 10,
    fontSize: 20, // Adjust the font size as needed
  },
});
