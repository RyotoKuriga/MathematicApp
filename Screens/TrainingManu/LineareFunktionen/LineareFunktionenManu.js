import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import MathJax from 'react-native-mathjax';
import stylesTheorie from '../../TheorieDateien/StylesTheorie';

export function LineareFunktionenManu() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";

  const AufgabenUndLoesungen = [
    {
      titel: "Finde die lineare Funktion, welche durch beide Punkte geht:",
      aufgabe: "a) $P_1(5; 4) P_2(4;3)$",
      loesung: "$f(x) = x - 1$",
    },
    {
      aufgabe: "b) $P_1(-3; -7) P_2(9; 3)",
      loesung: "$f(x) = \\frac{5}{6}x - \\frac{9}{2}$"
    },
    {
      aufgabe: "c) $P_1(-6; 3) P_2(6; 3)$",
      loesung: "$f(x) = 3$"
    },
    {
      aufgabe: "c) $P_1(0; -2) P_2(4; 2)$",
      loesung: "$f(x) = x - 2$"
    },
    {
      aufgabe: "d) $P_1(-4; 0) P_2(8; 6)$",
      loesung: "$f(x) = \\frac{3}{4}x + 3$"
    },
    {
      aufgabe: "e) $P_1(1; 4) P_2(5; 8)$",
      loesung: "$f(x) = x + 3$"
    },
    {
      aufgabe: "f) "
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
