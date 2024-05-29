import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import MathJax from 'react-native-mathjax';
import stylesTheorie from '../../TheorieDateien/StylesTheorie';

export function MengenNotationManu() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";

  const AufgabenUndLoesungen = [
    {
      titel: "Notiere die Menge in aufzählender Form:",
      aufgabe: "a) $\\{x \\in  \\mathbb{N} | x < 7  \\}$",
      loesung: " $x \\in \\{1, 2, 3, 4, 5, 6\\}$",
    },
    {
      aufgabe: "b) $\\{q \\in  \\mathbb{N} | q$ ist ungerade und $ \\leq 9  \\}$",
      loesung: "$q \\in \\{1, 3, 5, 7, 9\\}$",
    },
    {
      aufgabe: "c) $\\{u \\in  \\mathbb{Z} | -10 < u \\leq -5  \\}$",
      loesung: "$x \\in \\{ -9, -8, -7, -6, -5\\}$",
    },
    {
      aufgabe: "d) $\\{z \\in \\mathbb{N}_0\\ | z < 3\\}$",
      loesung: "$z \\in \\{0, 1, 2\\}$",
    },
    {
      aufgabe: "e) $\\{i \\in \\mathbb{N} | $Menge aller Teiler von 30$\\}$",
      loesung: "$i \\in \\{1, 2, 3, 4, 5, 6, 10, 15, 30\\}$",
    },
    {
      aufgabe: "f) $\\{t \\in \\mathbb{Q}|t$ ist eine Primzahl und $< 9\\}$",
      loesung: "$t \\in \\{2, 3, 5, 7\\}$",
    },
    {
      titel: "Notiere die Menge in beschreibender Form:",
      aufgabe: "a) $n \\in \\{1, 3, 5, 7, ...\\}$",
      loesung: "$\\{n \\in \\mathbb{N} | n$ ist ungerade$\\}$",
    }, 
    {
      aufgabe: "b) $z \\in \\{2, 4, 6, 8, 10\\}$",
      loesung: "$\\{z \\in \\mathbb{N} | z$ ist gerade und $\\leq 10\\}$",
    },
    {
      aufgabe: "c) $x \\in \\{4, 8, 12, 16, 20\\}$",
      loesung: "$\\{x \\in \\mathbb{N} | x$ ist ein vielfaches von 4 und $\\leq 20\\}$",
    },
    {
      aufgabe: "d) $u \\in \\{1, 4, 9, 16, 25, 36\\}$",
      loesung: "$\\{u \\in \\mathbb{N} | u$ ist eine Quadratzahl und $\\leq 36\\}$",
    },
    {
      titel: "Sind die Mengen identisch?",
      aufgabe: "a) $\\mathbb{A} = \\{12, 6, 2\\}$,  $\\mathbb{B} = \\{6, 2, 12\\}$",
      loesung: "Ja, $\\mathbb{A} = \\mathbb{B}$"
    },
    {
      aufgabe: "b) $\\mathbb{O} = \\{1, 2, 4\\}$, $\\mathbb{P} = \\{1, 4\\}$",
      loesung: "Nein, $\\mathbb{O} \\neq \\mathbb{P}$",
    },
    {
      titel: "Setze das richtige Zeichen ein:",
      aufgabe: "a) $\\{5\\} \\; \\square \\; \\{5, 10\\}$",
      loesung: "$\\subset$, da die erste Menge mit dem Element 5 eine Teilmenge der zweiten Menge ist.",
    },
    {
      aufgabe: "b) $5 \\; \\square \\; \\{5, 10\\}$",
      loesung: "$\\in$, da 5 ein Element von der Menge $\\{5, 10\\}$ ist.",
    },
    {
      aufgabe: "c) $3 \\; \\square \\; \\{3\\}$",
      loesung: "$\\in$"
    },
    {
      aufgabe: "d) $\\{6\\} \\; \\square \\; \\{0,1,3\\}$",
      loesung: "$\\not\\subset$",
    },
    {
      aufgabe: "e) $\\{3, 4\\} \\; \\square \\; \\{4, 5, 6 \\}$",
      loesung: "$\\not\\subset$"
    },
    {
      aufgabe: "f) $0 \\; \\square \\; \\{\\}$",
      loesung: "$\\not\\in$"
    },
    {
      aufgabe: "g) $3 \\; \\square \\; \\{1, 2, 3\\}$",
      loesung: "$\\in$"
    },
    {
      titel: "Notiere alle Teilmengen:",
      aufgabe: "a) $\\{0, 1\\}$",
      loesung: "$\\{\\}, \\{0\\}, \\{1\\}, \\{0, 1\\}$"
    },
    {
      aufgabe: "b) $\\{3, 5, 7\\}$",
      loesung: "$\\{\\}, \\{3\\}, \\{5\\}, \\{7\\}, \\{3, 5\\}, \\{5, 7\\}, \\{3, 7\\},$ <br>$ \\{3, 5, 7\\}$"
    },
    {
      aufgabe: "c) Wie lautet die Formel, mit der man die Anzahl Teilmengen einer Menge anhand ihrer Anzahl Elemente berechnen kann?",
      loesung: "$2^n, n =$ Mächtigkeit der Menge"
    },
    {
      titel: "Berechne:",
      aufgabe: "a) $\\mathbb{T} = \\{1, 3, 5, 7, 9\\}, $<br>$ \\; \\; \\; \\, \\mathbb{S} = \\{2, 3, 4, 5\\}$ <br> $\\; \\; \\; \\, \\mathbb{S} \\; \\cup \\; \\mathbb{T}$",
      loesung: "$\\underline{\\mathbb{S} \\; \\cup \\; \\mathbb{T} = \\{1, 2, 3, 5, 6, 7, 9\\}}$"
    },
    {
      aufgabe: "b) $\\mathbb{P} = \\{1, 3, 5, 7, 9\\}, $<br>$ \\; \\; \\; \\mathbb{U} = \\{2, 3, 4, 5\\}$ <br> $\\; \\; \\; \\mathbb{P} \\; \\cap \\; \\mathbb{U}$",
      loesung: "$\\underline{\\mathbb{P} \\; \\cap \\; \\mathbb{U} = \\{3, 5\\}} $"  
    },
    {
      aufgabe: "c) $\\mathbb{P} = \\{1, 3, 5, 7, 9\\}, $<br>$ \\; \\; \\; \\mathbb{U} = \\{2, 3, 4, 5\\}, $<br>$ \\; \\; \\; \\mathbb{H} = \\{2, 3, 7, 8\\}$ <br> $\\; \\; \\; (\\mathbb{P} \\; \\cap \\; \\mathbb{U}) \\; \\backslash \\; \\mathbb{H} $  ",
      loesung: "$\\underline{(\\mathbb{P} \\; \\cap \\; \\mathbb{U}) \\; \\backslash \\; \\mathbb{H} = \\{5\\}}$"  
    },
    {
      titel: "Verständnis",
      aufgabe: "a) Gibt es eine Teilmenge von einer leeren Menge?",
      loesung: "Ja, denn eine Menge ist immer auch eine Teilmenge von sich selbst. So ist die einzige Teilmenge von einer leeren Menge, auch eine leere Menge."
    },
    {
      aufgabe: "b) In welcher Menge sind die irrationalen Zahlen enthalten",
      loesung: "In der Menge der reelen Zahlen."
    },
    {
      aufgabe: "c) Ist 3.$\\overline{6}$ eine irrationale Zahl?.",
      loesung: "Nein, ist sie nicht, denn sie wiederholt sich ab der ersten Kommastelle. Somit kann man sie als Bruch schreiben, was bedeutet, dass sie nicht irrational ist."
    },
    {
      aufgabe: "d) Wenn $\\mathbb{A} \\subset \\mathbb{B}$ und $\\mathbb{B} \\subset \\mathbb{A}$, ist dann $\\mathbb{A} = \\mathbb{B}$?",
      loesung: "Ja, denn alle Elemente die in $\\mathbb{A}$ enthalten sind, sind in $\\mathbb{B}$ enthalten und so auch umgekehrt."
    },
    {
      aufgabe: "e) Wenn man eine endlose Menge in der aufzählenden Form notiert, wie z.B. {1, 2, 3, ...}, ist diese Menge dann eindeutig?",
      loesung: "Nein ist sie nicht. Man nimmt an, dass das nächste Element 4 ist, jedoch kann es eine beliebige Zahl sein. Es gibt unendlich viele Folgen, die mit 1, 2 und 3 beginnen. Aus diesem Grund notiert man endlose Mengen in der beschreibenden Form."
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
