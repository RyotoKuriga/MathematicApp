import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text } from 'react-native';
import MathView from 'react-native-math-view';
import stylesUebungen from '../StylesUebungen';

export function MengenNotationManu() {
  const mathMid = '\\normalsize';

  const AufgabenUndLoesungen = [
    {
      titel: "Notiere die Menge in aufzählender Form:",
      aufgabe: "a)\\ \\{x \\in  \\mathbb{N} \\mid x < 7  \\}",
      loesung: " x \\in \\{1, 2, 3, 4, 5, 6\\}",
    },
    {
      aufgabe: "b)\\ \\{q \\in  \\mathbb{N} \\mid q \\text{ ist ungerade und } \\leq 9  \\}",
      loesung: "q \\in \\{1, 3, 5, 7, 9\\}",
    },
    {
      aufgabe: "c)\\ \\{u \\in  \\mathbb{Z} \\mid -10 < u \\leq -5  \\}",
      loesung: "u \\in \\{ -9, -8, -7, -6, -5\\}",
    },
    {
      aufgabe: "d)\\ \\{z \\in \\mathbb{N}_0 \\mid z < 3\\}",
      loesung: "z \\in \\{0, 1, 2\\}",
    },
    {
      aufgabe: "e)\\ \\{i \\in \\mathbb{N} \\mid \\text{Menge aller Teiler von } 30\\}",
      loesung: "i \\in \\{1, 2, 3, 5, 6, 10, 15, 30\\}",
    },
    {
      aufgabe: "f)\\ \\{t \\in \\mathbb{P} \\mid t \\text{ ist eine Primzahl und } < 9\\}",
      loesung: "t \\in \\{2, 3, 5, 7\\}",
    },
    {
      titel: "Notiere die Menge in beschreibender Form:",
      aufgabe: "a)\\ n \\in \\{1, 3, 5, 7, ...\\}",
      loesung: "\\{n \\in \\mathbb{N} \\mid n \\text{ ist ungerade}\\}",
    }, 
    {
      aufgabe: "b)\\ z \\in \\{2, 4, 6, 8, 10\\}",
      loesung: "\\{z \\in \\mathbb{N} \\mid z \\text{ ist gerade und } \\leq 10\\}",
    },
    {
      aufgabe: "c)\\ x \\in \\{4, 8, 12, 16, 20\\}",
      loesung: "\\{x \\in \\mathbb{N} \\mid x \\text{ ist ein Vielfaches von 4 und } \\leq 20\\}",
    },
    {
      aufgabe: "d)\\ u \\in \\{1, 4, 9, 16, 25, 36\\}",
      loesung: "\\{u \\in \\mathbb{N} \\mid u \\text{ ist eine Quadratzahl und } \\leq 36\\}",
    },
    {
      titel: "Sind die Mengen identisch?",
      aufgabe: "a) \\mathbb{A} = \\{12, 6, 2\\},  \\mathbb{B} = \\{6, 2, 12\\}",
      loesung: "Ja, \\mathbb{A} = \\mathbb{B}"
    },
    {
      aufgabe: "b) \\mathbb{O} = \\{1, 2, 4\\}, \\mathbb{P} = \\{1, 4\\}",
      loesung: "Nein, \\mathbb{O} \\neq \\mathbb{P}",
    },
    {
      titel: "Setze das richtige Zeichen ein:",
      aufgabe: "a) \\{5\\} \\; \\square \\; \\{5, 10\\}",
      loesung: "\\subset",
    },
    {
      aufgabe: "b) 5 \\; \\square \\; \\{5, 10\\}",
      loesung: "\\in",
    },
    {
      aufgabe: "c) 3 \\; \\square \\; \\{3\\}",
      loesung: "\\in"
    },
    {
      aufgabe: "d) \\{6\\} \\; \\square \\; \\{0, 1, 3\\}",
      loesung: "\\not\\subset",
    },
    {
      aufgabe: "e) \\{3, 4\\} \\; \\square \\; \\{4, 5, 6\\}",
      loesung: "\\not\\subset"
    },
    {
      aufgabe: "f) 0 \\; \\square \\; \\{\\}",
      loesung: "\\not\\in"
    },
    {
      aufgabe: "g) 3 \\; \\square \\; \\{1, 2, 3\\}",
      loesung: "\\in"
    },
    {
      titel: "Notiere alle Teilmengen:",
      aufgabe: "a) \\{0, 1\\}",
      loesung: "\\{\\}, \\{0\\}, \\{1\\}, \\{0, 1\\}"
    },
    {
      aufgabe: "b) \\{3, 5, 7\\}",
      loesung: "\\{\\}, \\{3\\}, \\{5\\}, \\{7\\}, \\{3, 5\\}, \\{5, 7\\}, \\{3, 7\\}, \\{3, 5, 7\\}"
    },
    {
      aufgabe: "c)",
      aufgabeText: "Wie lautet die Formel, mit der man die Anzahl der Teilmengen einer Menge anhand ihrer Anzahl der Elemente berechnen kann?",
      loesung: "2^n, \\text{ wobei n die Mächtigkeit der Menge ist}",
      loesungText: ""
    },  
    {
      titel: "Überlege:",
      aufgabe: "a)",
      aufgabeText: "Gibt es eine Teilmenge einer leeren Menge?",
      loesung: "",
      loesungText: "Ja, denn eine Menge ist immer auch eine Teilmenge von sich selbst. So ist die einzige Teilmenge einer leeren Menge ebenfalls eine leere Menge."
    },
    {
      aufgabe: "b)",
      aufgabeText: "In welcher Menge sind die irrationalen Zahlen enthalten?",
      loesung: "",
      loesungText: "In der Menge der reellen Zahlen."
    },
    {
      aufgabe: "c)",
      aufgabeText: "Ist 3.666... eine irrationale Zahl?",
      loesung: "",
      loesungText: "Nein, ist sie nicht, denn sie wiederholt sich ab der ersten Nachkommastelle. Somit kann man sie als Bruch schreiben, was bedeutet, dass sie nicht irrational ist."
    },
    {
      aufgabe: "d)",
      aufgabeText: "Wenn A eine Teilmenge von B ist und B eine Teilmenge von A, ist A dann gleich B?",
      loesung: "",
      loesungText: "Ja, denn alle Elemente, die in A sind, sind auch in B und umgekehrt."
    },
    {
      aufgabe: "e)",
      aufgabeText: "Wenn man eine unendliche Menge in aufzählender Form notiert wie z.B. M = {1, 2, 3,...}, ist diese Menge dann eindeutig bestimmt?",
      loesung: "",
      loesungText: "Nein, ist sie nicht. Man nimmt an, dass das nächste Element 4 ist, jedoch kann es eine beliebige Zahl sein. Es gibt unendlich viele Folgen, die mit 1, 2 und 3 beginnen. Aus diesem Grund notiert man unendliche Mengen in beschreibender Form.",
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
                      math={item.loesung}
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
