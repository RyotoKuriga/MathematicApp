import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text } from 'react-native';
import MathView from 'react-native-math-view';
import stylesUebungen from '../StylesUebungen';

export function LineareFunktionenManu() {
  const mathMid = '\\normalsize';

  const AufgabenUndLoesungen = [
    {
      titel: "Bestimme die Steigung der linearen Funktion:",
      aufgabe: "a)\\ y = 2x + 3",
      loesung: "",
      loesungText: "Die Steigung ist 2."
    },
    {
      aufgabe: "b)\\ y = -4x + 7",
      loesung: "",
      loesungText: "Die Steigung ist -4."
    },
    {
      aufgabe: "c)\\ y = 5x - 2",
      loesung: "",
      loesungText: "Die Steigung ist 5."
    },
    {
      aufgabe: "d)\\ y = -3x + 1",
      loesung: "",
      loesungText: "Die Steigung ist -3."
    },
    
    {
      titel: "Bestimme den y-Achsenabschnitt der linearen Funktion:",
      aufgabe: "a)\\ f(x) = 3x - 5",
      loesung: "",
      loesungText: "Der y-Achsenabschnitt ist -5."
    },
    {
      aufgabe: "b)\\ f(x) = -2x + 4",
      loesung: "",
      loesungText: "Der y-Achsenabschnitt ist 4."
    },
    {
      aufgabe: "c)\\ f(x) = 4x + 7",
      loesung: "",
      loesungText: "Der y-Achsenabschnitt ist 7."
    },
    {
      aufgabe: "d)\\ f(x) = -x + 3",
      loesung: "",
      loesungText: "Der y-Achsenabschnitt ist 3."
    },
    
    {
      titel: "Zeichne die lineare Funktion und bestimme zwei Punkte auf der Linie:",
      aufgabe: "a)\\ y = x + 2",
      loesung: "",
      loesungText: "Beispielpunkte auf der Linie: (0, 2) und (2, 4). Setze x = 0 und x = 2 in die Funktion ein, um die entsprechenden y-Werte zu finden."
    },
    {
      aufgabe: "b)\\ y = -x + 3",
      loesung: "",
      loesungText: "Beispielpunkte auf der Linie: (0, 3) und (1, 2). Setze x = 0 und x = 1 in die Funktion ein, um die entsprechenden y-Werte zu finden."
    },
    {
      aufgabe: "c)\\ y = 2x - 1",
      loesung: "",
      loesungText: "Beispielpunkte auf der Linie: (0, -1) und (1, 1). Setze x = 0 und x = 1 in die Funktion ein, um die entsprechenden y-Werte zu finden."
    },
    {
      aufgabe: "d)\\ y = -2x + 5",
      loesung: "",
      loesungText: "Beispielpunkte auf der Linie: (0, 5) und (2, 1). Setze x = 0 und x = 2 in die Funktion ein, um die entsprechenden y-Werte zu finden."
    },
    {
      aufgabe: "e)\\ y = 3x + 4",
      loesung: "",
      loesungText: "Beispielpunkte auf der Linie: (0, 4) und (1, 7). Setze x = 0 und x = 1 in die Funktion ein, um die entsprechenden y-Werte zu finden."
    },
    {
      aufgabe: "f)\\ y = -3x + 2",
      loesung: "",
      loesungText: "Beispielpunkte auf der Linie: (0, 2) und (1, -1). Setze x = 0 und x = 1 in die Funktion ein, um die entsprechenden y-Werte zu finden."
    },
    
    {
      titel: "Überprüfe, ob der Punkt auf der Linie liegt:",
      aufgabe: "a)\\ y = 2x + 1, Punkt (1, 3)",
      loesung: "",
      loesungText: "Ja, der Punkt liegt auf der Linie. Setze x = 1 in die Funktion ein: y = 2(1) + 1 = 3."
    },
    {
      aufgabe: "b)\\ y = -3x + 4, Punkt (-2, -2)",
      loesung: "",
      loesungText: "Nein, der Punkt liegt nicht auf der Linie. Setze x = -2 in die Funktion ein: y = -3(-2) + 4 = 10 und nicht -2."
    },
    {
      aufgabe: "c)\\ y = x - 5, Punkt (3, -2)",
      loesung: "",
      loesungText: "Ja, der Punkt liegt auf der Linie. Setze x = 3 in die Funktion ein: y = 3 - 5 = -2."
    },
    {
      aufgabe: "d)\\ y = 4x - 1, Punkt (0, -1)",
      loesung: "",
      loesungText: "Ja, der Punkt liegt auf der Linie. Setze x = 0 in die Funktion ein: y = 4(0) - 1 = -1."
    },
    {
      aufgabe: "e)\\ y = -2x + 3, Punkt (1, 1)",
      loesung: "",
      loesungText: "Ja, der Punkt liegt auf der Linie. Setze x = 1 in die Funktion ein: y = -2(1) + 3 = 1."
    },
    {
      aufgabe: "f)\\ y = 3x + 2, Punkt (2, 5)",
      loesung: "",
      loesungText: "Nein, der Punkt liegt nicht auf der Linie. Setze x = 2 in die Funktion ein: y = 3(2) + 2 = 8 und nicht 5."
    },
    
    {
      titel: "Finde die Gleichung der Linie:",
      aufgabe: "a)\\",
      aufgabeText: "Die Linie verläuft durch die Punkte (0, 1) und (2, 5)",
      loesung: "",
      loesungText: "Die Gleichung der Linie ist y = 2x + 1."
    },
    {
      aufgabe: "b)\\",
      aufgabeText: "Die Linie verläuft durch die Punkte (-1, -2) und (1, 4)",
      loesung: "",
      loesungText: "Die Gleichung der Linie ist y = 3x + 1."
    },
    {
      aufgabe: "c)\\",
      aufgabeText: "Die Linie verläuft durch die Punkte (1, 2) und (3, 8)",
      loesung: "",
      loesungText: "Die Gleichung der Linie ist y = 3x - 1."
    },
    {
      aufgabe: "d)\\",
      aufgabeText: "Die Linie verläuft durch die Punkte (2, 3) und (4, 7)",
      loesung: "",
      loesungText: "Die Gleichung der Linie ist y = 2x - 1."
    },
    
    {
      titel: "Textaufgaben zu linearen Funktionen:",
      aufgabe: "a)\\",
      aufgabeText: "Ein Taxiunternehmen berechnet eine Grundgebühr von 3 Franken und 2 Franken pro Kilometer. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 2x + 3, wobei x die Anzahl der Kilometer ist und y der Preis."
    },
    {
      aufgabe: "b)\\ ",
      aufgabeText: "Ein Telefonanbieter berechnet 10 Franken Grundgebühr und 0,05 Franken pro Minute. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 0,05x + 10, wobei x die Anzahl der Minuten ist und y der Preis."
    },
    {
      aufgabe: "c)\\ ",
      aufgabeText: "Ein Parkplatz kostet eine Grundgebühr von 1,50 Franken und zusätzlich 0,80 Franken pro Stunde. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 0,80x + 1,50, wobei x die Anzahl der Stunden ist und y der Preis."
    },
    {
      aufgabe: "d)\\ ",
      aufgabeText: "Ein Internetanbieter berechnet eine Grundgebühr von 15 Franken pro Monat und zusätzlich 0,10 Franken pro verbrauchtem GB. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 0,10x + 15, wobei x die Anzahl der verbrauchten GB ist und y der Preis."
    },
    {
      aufgabe: "e)\\ ",
      aufgabeText: "Ein Fitnessstudio berechnet eine Anmeldegebühr von 50 Franken und zusätzlich 20 Franken pro Monat. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 20x + 50, wobei x die Anzahl der Monate ist und y der Preis."
    },
    {
      aufgabe: "f)\\ ",
      aufgabeText: "Ein Streamingdienst berechnet eine monatliche Grundgebühr von 5 Franken und 2 Franken pro angesehenem Film. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 2x + 5, wobei x die Anzahl der angesehenen Filme ist und y der Preis."
    },
    {
      aufgabe: "g)\\ ",
      aufgabeText: "Ein Malerbetrieb berechnet eine Grundgebühr von 30 Franken und zusätzlich 12 Franken pro Quadratmeter Wandfläche. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 12x + 30, wobei x die Anzahl der Quadratmeter ist und y der Preis."
    },
    {
      aufgabe: "h)\\ ",
      aufgabeText: "Ein Autovermieter verlangt eine Tagesgebühr von 25 Franken und zusätzlich 0,20 Franken pro gefahrenen Kilometer. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 0,20x + 25, wobei x die Anzahl der Kilometer ist und y der Preis."
    },
    {
      aufgabe: "i)\\ ",
      aufgabeText: "Ein Gärtner berechnet eine Anfahrtspauschale von 10 Franken und zusätzlich 15 Franken pro Stunde Arbeit. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 15x + 10, wobei x die Anzahl der Stunden ist und y der Preis."
    },
    {
      aufgabe: "j)\\ ",
      aufgabeText: "Ein Reinigungsdienst verlangt eine Grundgebühr von 20 Franken und zusätzlich 5 Franken pro Quadratmeter gereinigter Fläche. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 5x + 20, wobei x die Anzahl der Quadratmeter ist und y der Preis."
    },
    {
      aufgabe: "k)\\ ",
      aufgabeText: "Ein Schreiner berechnet eine Basisgebühr von 40 Franken und zusätzlich 25 Franken pro Arbeitsstunde. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 25x + 40, wobei x die Anzahl der Stunden ist und y der Preis."
    },
    {
      aufgabe: "l)\\ ",
      aufgabeText: "Ein Fotograf berechnet eine Grundgebühr von 100 Franken und zusätzlich 10 Franken pro aufgenommenem Foto. Stelle die Kostenfunktion auf.",
      loesung: "",
      loesungText: "Die Kostenfunktion ist y = 10x + 100, wobei x die Anzahl der Fotos ist und y der Preis."
    },
    {
      titel: "Finde den Break-even-Point:",
      aufgabe: "a)\\ ",
      aufgabeText: "Ein Entwickler einer App muss für die Veröffentlichung einmalig 100 Franken Gebühr bezahlen. Ausserdem hat er Serverkosten von 0.1 Franken pro Nutzer. Er nimmt aber im Durchschnitt 2 Franken pro Nutzer ein. Ab wie vielen Nutzern ist der Break-even-Point erreicht und der Entwickler macht keinen Verlust mehr mit seiner App?",
      loesung: "",
      loesungText: "Die Ausgabefunktion lautet y = 0.1x + 100. Die Einnahmefunktion ist y = 2x, wobei bei beiden Funktionen x die Nutzer sind und y die Ein-/Ausnahmen. Um den Break-even-Point zu finden, sucht man den Schnittpunkt dieser Geraden, dazu setzt man sie gleich. Also ist der Punkt bei P(52.63; 105.26). Da es unmöglich ist, dass seine App 52.63 Nutzer hat, lohnt sich seine App erst ab 53 Nutzern."
    },{
      aufgabe: "b)\\ ",
      aufgabeText: "Ein Bäcker investiert 500 Franken in einen neuen Ofen. Jede Torte, die er backt, kostet ihn 5 Franken an Materialkosten. Er verkauft jede Torte für 20 Franken. Ab wie vielen Torten erreicht er den Break-even-Point?",
      loesung: "",
      loesungText: "Die Ausgabefunktion lautet y = 5x + 500. Die Einnahmefunktion ist y = 20x, wobei bei beiden Funktionen x die Anzahl der Torten ist und y die Einnahmen/Ausgaben. Um den Break-even-Point zu finden, setzt man die beiden Funktionen gleich: 5x + 500 = 20x. Durch Umstellen erhält man x = 33.33. Da es unmöglich ist, dass er 33.33 Torten backt, lohnt sich der Ofen erst ab 34 Torten."
    },
    {
      aufgabe: "c)\\ ",
      aufgabeText: "Ein Autor zahlt 200 Franken für das Lektorat seines Buches. Er hat ausserdem Druckkosten von 2 Franken pro Exemplar. Er verkauft jedes Buch für 12 Franken. Ab wie vielen verkauften Exemplaren erreicht er den Break-even-Point?",
      loesung: "",
      loesungText: "Die Ausgabefunktion lautet y = 2x + 200. Die Einnahmefunktion ist y = 12x, wobei bei beiden Funktionen x die Anzahl der verkauften Exemplare ist und y die Einnahmen/Ausgaben. Um den Break-even-Point zu finden, setzt man die beiden Funktionen gleich: 2x + 200 = 12x. Durch Umstellen erhält man x = 20. Er erreicht den Break-even-Point bei 20 verkauften Exemplaren."
    },
    {
      aufgabe: "d)\\ ",
      aufgabeText: "Ein Fotograf investiert 300 Franken in eine neue Kamera. Jedes Foto, das er ausdruckt, kostet ihn 0,5 Franken. Er verkauft jedes Foto für 5 Franken. Ab wie vielen verkauften Fotos erreicht er den Break-even-Point?",
      loesung: "",
      loesungText: "Die Ausgabefunktion lautet y = 0.5x + 300. Die Einnahmefunktion ist y = 5x, wobei bei beiden Funktionen x die Anzahl der verkauften Fotos ist und y die Einnahmen/Ausgaben. Um den Break-even-Point zu finden, setzt man die beiden Funktionen gleich: 0.5x + 300 = 5x. Durch Umstellen erhält man x = 66.67. Da es unmöglich ist, dass er 66.67 Fotos verkauft, lohnt sich die Kamera erst ab 67 Fotos."
    },
    {
      aufgabe: "e)\\ ",
      aufgabeText: "Ein Musiker zahlt 150 Franken für die Aufnahme eines Albums. Jede CD, die er produziert, kostet ihn 1.5 Franken. Er verkauft jede CD für 10 Franken. Ab wie vielen verkauften CDs erreicht er den Break-even-Point?",
      loesung: "",
      loesungText: "Die Ausgabefunktion lautet y = 1.5x + 150. Die Einnahmefunktion ist y = 10x, wobei bei beiden Funktionen x die Anzahl der verkauften CDs ist und y die Einnahmen/Ausgaben. Um den Break-even-Point zu finden, setzt man die beiden Funktionen gleich: 1.5x + 150 = 10x. Durch Umstellen erhält man x = 17.65. Da es unmöglich ist, dass er 17.65 CDs verkauft, lohnt sich das Album erst ab 18 CDs."
    },
    {
      aufgabe: "f)\\ ",
      aufgabeText: "Ein Maler zahlt 400 Franken für eine neue Ausrüstung. Jede Stunde, die er malt, kostet ihn 5 Franken. Er verdient 30 Franken pro Stunde. Ab wie vielen Stunden erreicht er den Break-even-Point?",
      loesung: "",
      loesungText: "Die Ausgabefunktion lautet y = 5x + 400. Die Einnahmefunktion ist y = 30x, wobei bei beiden Funktionen x die Anzahl der Stunden ist und y die Einnahmen/Ausgaben. Um den Break-even-Point zu finden, setzt man die beiden Funktionen gleich: 5x + 400 = 30x. Durch Umstellen erhält man x = 16. Er erreicht den Break-even-Point bei 16 Stunden."
    },
    
    {
      titel: "Löse die Gleichung nach y auf, so dass eine Funktion entsteht:",
      aufgabe: "c)\\ 3x - y = 9",
      loesung: "y = 3x - 9",
      loesungText: ""
    },
    {
      aufgabe: "d)\\ 5x + 2y = 10",
      loesung: "y = -\\dfrac{5}{2}x + 5",
      loesungText: ""
    },
    {
      aufgabe: "e)\\ 7y - 3x = 21",
      loesung: "y = \\dfrac{3}{7}x + 3",
      loesungText: ""
    },
    {
      aufgabe: "f)\\ -2x + 4y = 8",
      loesung: "y = \\dfrac{1}{2}x + 2",
      loesungText: ""
    },
    {
      aufgabe: "g)\\ 6x - 3y = 12",
      loesung: "y = 2x - 4",
      loesungText: ""
    },
    {
      aufgabe: "h)\\ 8y + 5x = 40",
      loesung: "y = -\\dfrac{5}{8}x + 5",
      loesungText: ""
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
