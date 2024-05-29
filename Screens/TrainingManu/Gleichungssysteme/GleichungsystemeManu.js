import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import MathJax from 'react-native-mathjax';
import stylesTheorie from '../../TheorieDateien/StylesTheorie';

export function GleichungssystemeManu() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";

  const AufgabenUndLoesungen = [
    {
      titel: "Ist das Gleichungssystem eindeutig bestimmt?",
      aufgabe: "a) $\\begin{cases}4x + 7y = 10 \\\\6x - y = 7\\end{cases}$",
      loesung: "Ja, ist es.",
    },
    {
      aufgabe: "b) $\\begin{cases}14x - 5b + c = 0\\\\6a - b + 5c= 2\\end{cases}$",
      loesung: "Nein, ist es nicht."
    },
    {
      aufgabe: "c) $\\begin{cases}2x + 3y - z = 6 \\\\ 4x + y + 2z = 10 \\\\ 3x - 2y + 5z = 7\\end{cases}$",
      loesung: "Ja, ist es."
    },
    {
      aufgabe: "d) $\\begin{cases}5x - 2y + 3z = 12 \\\\ 3x + 4y - z = 5 \\\\ 2x - y + 2z = 9\\end{cases}$",
      loesung: "Ja, ist es."
    },
    {
      aufgabe: "e) $\\begin{cases}x + 2y - z + w = 5 \\\\ 3x - y + z - 2w = 7 \\\\ 2x + 3y + w = 4 \\\\ x - y + 2z - 3w = 1\\end{cases}$",
      loesung: "Ja, ist es."
    },
    {
      aufgabe: "f) $\\begin{cases}4x - 2y + 3z = 9 \\\\ 2x + y - 4z = -3\\end{cases}$",
      loesung: "Nein, ist es nicht."
    },
    {
      aufgabe: "g) $\\begin{cases}3x - y + 2z = 7 \\\\ 6x - 2y + 4z = 14 \\\\ 9x - 3y + 6z = 21\\end{cases}$",
      loesung: "Nein, ist es nicht. Die zweite und dritte Gleichung sind ein vielfaches der ersten Gleichung."
    },
    {
      aufgabe: "h) $\\begin{cases}2x - y + 3z = 6 \\\\ 4x + 2y - 6z = 12\\end{cases}$",
      loesung: "Nein, ist es nicht."
    },
    {
      aufgabe: "i) $\\begin{cases}x + 2y - z = 5 \\\\ 2x - y + z = 6\\end{cases}$",
      loesung: "Nein, ist es nicht."
    },
    {
      aufgabe: "j) $\\begin{cases}3x + 2y - z = 7 \\\\ 6x + 4y - 2z = 14\\end{cases}$",
      loesung: "Nein, ist es nicht."
    },
    {
      titel: "Löse die Gleichungssysteme. Die Methode ist irrelevant.",
      aufgabe: "a) $\\begin{cases}4x + 2y = 6 \\\\ 3x + 3y = 6\\end{cases}$",
      loesung: "$x = 1; y = 1$"
    },
    {
      aufgabe: "b) $\\begin{cases}2x - y = 3 \\\\ 3x + 2y = 8\\end{cases}$",
      loesung: "$x = 2; y = -1$"
    },
    {
      aufgabe: "c) $\\begin{cases}x + y = 5 \\\\ 2x - y = 3\\end{cases}$",
      loesung: "$x = 2; y = 3$"
    },
    {
      aufgabe: "d) $\\begin{cases}3x - 2y = 4 \\\\ 2x + 3y = 11\\end{cases}$",
      loesung: "$x = 2; y = 1$"
    },
    {
      aufgabe: "e) $\\begin{cases}2x + y = 7 \\\\ 3x - 2y = 4\\end{cases}$",
      loesung: "$x = 3; y = 1$"
    },
    {
      aufgabe: "f) $\\begin{cases}4x - 3y = 5 \\\\ x + 2y = 7\\end{cases}$",
      loesung: "$x = 2; y = 2$"
    },
    {
      aufgabe: "g) $\\begin{cases}5x - 2y = 8 \\\\ 3x + y = 7\\end{cases}$",
      loesung: "$x = 2; y = 1$"
    },
    {
      aufgabe: "h) $\\begin{cases}3x + 4y = 14 \\\\ 2x - 3y = -5\\end{cases}$",
      loesung: "$x = 2; y = 3$"
    },
    {
      aufgabe: "i) $\\begin{cases}2x + 3y = 11 \\\\ 4x - y = 7\\end{cases}$",
      loesung: "$x = 3; y = 2$"
    },
    {
      aufgabe: "j) $\\begin{cases}3x - 2y = 6 \\\\ x + 3y = 9\\end{cases}$",
      loesung: "$x = 3; y = 1$"
    },
    {
      aufgabe: "k) $\\begin{cases}x + y = 4 \\\\ 2x + 2y = 8\\end{cases}$",
      loesung: "$x = 2; y = 2$"
    },
    {
      aufgabe: "l) $\\begin{cases}2x - y = 5 \\\\ 3x + 2y = 11\\end{cases}$",
      loesung: "$x = 3; y = 1$"
    },
    {
      aufgabe: "m) $\\begin{cases}2x - y + z = 8 \\\\ 3x + 2y - z = 12 \\\\ x + 3y + 2z = 20\\end{cases}$",
      loesung: "$x = \\frac{7}{2}; y = 4; z = \\frac{5}{2}$"
    },
    {
      aufgabe: "n) $\\begin{cases}3x + 2y - z = 15 \\\\ 2x - y + 3z = 9 \\\\ x + 4y - 2z = 21\\end{cases}$",
      loesung: "$x = 3; y = 4; z = \\frac{1}{2}$"
    },
    {
      aufgabe: "o) $\\begin{cases}4x - y + 2z = 18 \\\\ 2x + 3y - z = 11 \\\\ x - 2y + 4z = 14\\end{cases}$",
      loesung: "$x = 5; y = \\frac{1}{2}; z = 3$"
    },
    {
      aufgabe: "p) $\\begin{cases}x + 2y - z = 10 \\\\ 3x - y + 3z = 22 \\\\ 2x + 4y + z = 16\\end{cases}$",
      loesung: "$x = 4; y = 3; z = 2$"
    },
    {
      aufgabe: "q) $\\begin{cases}2x - y + z = 13 \\\\ x + 3y - 2z = 7 \\\\ 3x + 2y + z = 25\\end{cases}$",
      loesung: "$x = \\frac{13}{2}; y = 3; z = \\frac{5}{2}$"
    },
    {
      aufgabe: "r) $\\begin{cases}3x + y - 2z = 16 \\\\ 2x - 3y + z = 8 \\\\ x + 2y + 3z = 27\\end{cases}$",
      loesung: "$x = 5; y = 4; z = 3$"
    },
    {
      aufgabe: "s) $\\begin{cases}x + 2y + 3z = 25 \\\\ 2x - y + z = 13 \\\\ 3x + 4y - 2z = 29\\end{cases}$",
      loesung: "$x = 6; y = 4; z = 3$"
    },
    {
      aufgabe: "t) $\\begin{cases}2x - 3y + z = 18 \\\\ x + y - 2z = 11 \\\\ 3x - 2y + 4z = 28\\end{cases}$",
      loesung: "$x = 5; y = 4; z = 3$"
    },
    {
      aufgabe: "u) $\\begin{cases}3x + 2y + z = 21 \\\\ 2x - y + 3z = 15 \\\\ x + 4y - 2z = 22\\end{cases}$",
      loesung: "$x = 4; y = 3; z = \\frac{5}{2}$"
    },
    {
      aufgabe: "v) $\\begin{cases}4x - 2y + 3z = 29 \\\\ 2x + 3y - z = 17 \\\\ x - y + 2z = 14\\end{cases}$",
      loesung: "$x = 6; y = 5; z = 4$"
    },
    {
      aufgabe: "w) $\\begin{cases}5x - y + 2z = 28 \\\\ 3x + 4y - z = 20 \\\\ 2x - 3y + 4z = 17\\end{cases}$",
      loesung: "$x = 5; y = 4; z = 3$"
    },
    {
      aufgabe: "x) $\\begin{cases}4x - y + 2z - w = 25 \\\\ 2x + 3y - z + 2w = 20 \\\\ x - 2y + 4z - 3w = 15 \\\\ 3x + 4y + 2z + w = 30\\end{cases}$",
      loesung: "$x = 3; y = 2; z = 4; w = 5$"
    },
    {
      aufgabe: "y) $\\begin{cases}2x - y + z + w = 10 \\\\ 3x + 2y - z - w = 15 \\\\ x + 3y + 2z + 2w = 25 \\\\ 4x - y + 3z - w = 20\\end{cases}$",
      loesung: "$x = 3; y = 2; z = 4; w = 5$"
    },
    {
      aufgabe: "z) $\\begin{cases}3x + 2y - z + w = 18 \\\\ 2x - y + 3z - 2w = 12 \\\\ x + 4y - 2z + 3w = 27 \\\\ 4x - y + 2z + w = 24\\end{cases}$",
      loesung: "$x = 4; y = 3; z = 2; w = 5$"
    },
    {
      titel: "Setzte Zahlen in die Formen ein, so dass das Gleichungssystem unendlich viele Lösungen hat.",
      aufgabe: "a) $\\begin{cases}x - 2y = 50 \\\\ \\triangle x + \\square y = 8\\end{cases}$",
      loesung: "$\\triangle = 3; \\square = -6$"
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
    <View>
      <SafeAreaView>
        <ScrollView>
          <View  style={stylesTheorie.container}>
          {AufgabenUndLoesungen.map((item, index) => (
            <View key={index}>
              {item.titel && <Text style={styles.title}>{item.titel}</Text>}
              <Pressable onPress={() => toggleLoesung(index)}>
                <MathJax html={`<div style='${divStyle}'>${item.aufgabe}</div>`} />
              </Pressable>
              {selectedLoesungen.includes(index) && (
                <MathJax html={`<div style='${divStyle}'>${item.loesung}</div>`} />
              )}
            </View>
          ))}
          </View>        
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
});
