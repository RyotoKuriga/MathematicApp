import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import MathView from 'react-native-math-view';
import stylesUebungen from '../StylesUebungen';

export function BinomischeFormelnManu() {
  const mathMid = '\\normalsize';

  const AufgabenUndLoesungen = [
    {
      titel: "Fülle die Lücken:",
      aufgabe: "a) 81x^2 - \\square + 1 = (\\square - \\square)^2",
      loesung: "81x^2 - 18x + 1 = (9x - 1)^2",
    },
    {
      aufgabe: "b) x^2 - 16x + \\square = (\\square - \\square)^2",
      loesung: "x^2 - 16x + 64 = (x - 8)^2"
    },
    {
      aufgabe: "c) 4x^4 + \\square + 4 = (\\square + \\square)^2",
      loesung: "4x^4 + 8x^2 + 4 = (2x^2 + 2)^2"
    },
    {
      aufgabe: "d) 16a^2 - \\square = (\\square + 8b)(\\square - 8b)",
      loesung: "16a^2 - 64b^2 = (4a + 8b)(4a - 8b)"
    },
    {
      aufgabe: "e) \\square + \\square + 16u^2 = (12q + \\square)^2",
      loesung: "144q^2 + 96qu + 16u^2 = (12q + 4u)^2"
    },
    {
      aufgabe: "f) 100x^2 - \\square + \\square = (\\square - 2)^2",
      loesung: "100x^2 - 40x + 4 = (10x - 2)^2"
    },
    {
      titel: "Verwandle in ein Produkt:",
      aufgabe: "a) 4a^2 + 4ab + b^2 = \\square",
      loesung: "(2a + b)^2"
    },
    {
      aufgabe: "b) 9x^2 + 12x + 16 = \\square",
      loesung: "(3x + 4)^2"
    },
    {
      aufgabe: "c) 25x^2 + 20x + 4 = \\square",
      loesung: "(5x + 2)^2"
    },
    {
      aufgabe: "d) 36x^2 - 12x + 1 = \\square",
      loesung: "(6x - 1)^2"
    },
    {
      aufgabe: "e) 81x^2 - 90x + 25 = \\square",
      loesung: "(9x - 5)^2"
    },
    {
      aufgabe: "f) 4x^2 - 12x + 9 = \\square",
      loesung: "(2x - 3)^2"
    },
    {
      aufgabe: "g) 16x^2 + 32x + 16 = \\square",
      loesung: "(4x + 4)^2"
    },
    {
      aufgabe: "h) 9x^2 - 24x + 16 = \\square",
      loesung: "(3x - 4)^2"
    },
    {
      aufgabe: "i) 36x^2 + 48x + 16 = \\square",
      loesung: "(6x + 4)^2"
    },
    {
      aufgabe: "j) 64x^2 - 64x + 16 = \\square",
      loesung: "(8x - 4)^2"
    },
    {
      aufgabe: "k) 81x^2 - 16y^2 = \\square",
      loesung: "(9x + 4y)(9x - 4y)"
    },
    {
      titel: "Multipliziere aus:",
      aufgabe: "a) (5x + 4)^2",
      loesung: "25x^2 + 40x + 16"
    },
    {
      aufgabe: "b) (5x + 4)^2",
      loesung: "25x^2 + 40x + 16"
    },
    {
      aufgabe: "c) (3x - 1)^2",
      loesung: "9x^2 - 6x + 1"
    },
    {
      aufgabe: "d) (4x + 4)(4x - 4)",
      loesung: "16x^2 - 16"
    },
    {
      aufgabe: "e) (7o + 3)^2",
      loesung: "49o^2 + 42o + 9"
    },
    {
      aufgabe: "f) (6b - 4)^2",
      loesung: "36b^2 - 48b + 16"
    },
    {
      aufgabe: "g) (3x + 1)^2",
      loesung: "9x^2 + 6x + 1"
    },
    {
      aufgabe: "h) (8a - 4)^2",
      loesung: "64a^2 - 64a + 16"
    },
    {
      aufgabe: "i) (6x + 4)(6x - 4)",
      loesung: "36x^2 - 16"
    },
    {
      aufgabe: "j) (3x - 4)^2",
      loesung: "9x^2 - 24x + 16"
    },
    {
      aufgabe: "k) (2z + 2)^2",
      loesung: "4z^2 + 8z + 4"
    },
    {
      titel: "Klammere erst aus und bilde dann das Binom:",
      aufgabe: "a) 32x^2 + 36x + 8",
      loesung: "2(4x + 3)^2"
    },
    {
      aufgabe: "b) 18x^2 - 30x + 12",
      loesung: "6(3x - 2)^2"
    },
    {
      aufgabe: "c) 20x^2 - 125",
      loesung: "5(2x + 5)(2x - 5)"
    },
    {
      aufgabe: "d) 72x^2 - 48x + 8",
      loesung: "8(3x - 2)^2"
    },
    {
      aufgabe: "e) 50x^2 + 40x + 10",
      loesung: "10(5x + 1)^2"
    },
    {
      aufgabe: "f) 24x^2 - 60x + 36",
      loesung: "12(2x - 3)^2"
    },
    {
      aufgabe: "g) 45x^2 + 60x + 15",
      loesung: "15(3x + 1)^2"
    },
    {
      aufgabe: "h) 16x^2 - 8x + 1",
      loesung: "(4x - 1)^2"
    },
    {
      aufgabe: "i) 28x^2 + 84x + 49",
      loesung: "7(2x + 3)^2"
    },
    {
      aufgabe: "j) 63x^2 - 54x + 9",
      loesung: "9(3x - 1)^2"
    },
    {
      aufgabe: "k) 15x^2 - 40x + 25",
      loesung: "5(3x - 2)^2"
    },
    {
      aufgabe: "l) a^2 - 121",
      loesung: "(a + 11)(a - 11)"
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
    <View style={{ backgroundColor: 'white' }}>
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
          <View style={{ height: 200, backgroundColor: 'white' }} />
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
