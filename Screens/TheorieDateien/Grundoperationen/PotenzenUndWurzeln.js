import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function PotenzenUndWurzeln() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Betrag')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Potenzen und Wurzeln
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>Potenzen sind wiederholte Multiplikationen. Der Wert, der multipliziert wird, wird als <b>Basis</b> bezeichent. Die Anzahl, wie oft multipliziert wird, heisst <b>Exponent</b> und das Ergebnis bezeichnet man als <b>Potenzwert</b>. Potenzen mit einem Exponenten zweiter Ordnung werden als Quadrate bezeichnet. Die Wurzel besteht aus dem <b>Wurzelexponenten</b> (WE), dem <b>Wurzelzeichen</b> und dem <b>Radikanten</b>. Das Ergebis wird als <b>Wurzelwert</b> bezeichnet. Die zweite Wurzel bezeichnet man als Quadratwurzel. Wird der Wurzelexponent nicht geschrieben ist die Quadratwurzel gemeint. <br><br>
            $Basis^{Exponenenten} = Potenzwert$ <br><br>
            $\\sqrt[\\Large{WE}]{Radikant} = Wurzelwert$ <br><br>
            $\\sqrt[2]{x} = \\sqrt{x}$ <br><br>
            Potenziert man eine negative Zahl mit einer geraden Zahl, ergibt sich immer eine positive Zahl. Potenziert man jedoch eine negative Zahl mit einer ungeraden Zahl ergibt sich wieder eine negative Zahl. Als Beispiel: <br><br>
            $(-3)^2 = -3 \\cdot -3 = 9$
            $(-3)^3 = -3 \\cdot -3 \\cdot -3 = -27$ <br><br>
            Wurzeln aus negativen Zahlen sind in der Menge der reelen Zahlen nicht möglich. <br><br>
             Wurzeln und Potenzen sind eigentlich dasselbe. Man kann nämlich jede Wurzel als Potenz darstellen, indem man den Wurzelexponenten als Kehrwert in den Exponenten schreibt. <br><br>
            $\\sqrt[n]x = x^{\\frac{1}{n}}$ <br><br>
            $\\sqrt[2]{16} = \\sqrt[2]{2^4} = 2^{\\frac{4}{2}} =2^2 = 4$ <br><br>
            Allgemein gilt:
            $\\sqrt[n]{a^m} = a^{\\frac{m}{n}}$ <br><br>
            Für die Potenzregeln ist das sehr praktisch, denn so kann man einfacher mit Wurzeln und Potenzen rechnen.
            </div>`}      
          />
          <Text style={stylesTheorie.subHeader}>
            Potenzregeln
          </Text>

          <MathJax
            html={`<div style='${divStyle}'><b>Potenzgesetz für gleiche Basen</b> <br>
            Haben Potenzen die gleichen Basen und man multipliziert sie miteinander, addiert man ihre Exponenten. <br><br>
            $9^3 \\cdot 9^2 = 9^5$ <br><br>
            Denn: $(9 \\cdot 9 \\cdot 9) \\cdot (9 \\cdot 9)$ kann auch ohne Klammern geschrieben werden (Assoziativgesetz). Und ist somit gleich: $9 \\cdot 9 \\cdot 9 \\cdot 9 \\cdot 9$. Und somit wiederum gleich $9^5$ <br><br>
            Allgemein gilt: <br><br>
            $a^n \\cdot a^m = a^{n + m}$ <br><br>
            Umgekehrt gilt, dass wenn man Potenzen mit der selben Basis dividiert, der Exponent des Dividenden von dem des Divisors subtrahiert wird. <br><br>
            $9^3 : 9^2 = 9^{3-2} = 9^1 = 9$ <br><br>
            Allgemein gilt: <br><br>
            $a^n : a^m = a^{n - m}$ <br><br>
            <b>Potenzregeln für Potenzen</b> <br>
            Wird eine Potenz potenziert, multipliziert man die Exponenten miteinander. <br><br>
            $(3^2)^3 = (3 \\cdot 3) \\cdot (3 \\cdot 3) \\cdot (3 \\cdot 3)$ <br><br>
            $=3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 3^6$ <br><br>
            Hier wurde wieder das Assoziativgesetz angewendet, um die Klammern aufzulösen. <br><br>
            Allgemein gilt: <br><br>
            $(a^n)^m = a^{n \\cdot m}$ <br><br>
            Hier kommt der Nutzen der Umformung von Wurzeln in Brüche besonders zum Vorschein. Als Beispiel: <br><br>
            $\\sqrt{9} \\cdot 9^4 = 9^{\\frac{1}{2}} \\cdot 9^4 = 9^{\\frac{1}{2} \\cdot 4} = 9^2 = 81$ <br><br>
            <b>Produktregel</b> <br>
            Die Potenz einer Produktmenge kann berechnet werden, indem man jeden Faktor einzeln potenziert. <br><br>
            $(4 \\cdot 3)^2 = 4^2 \\cdot 3^2 = 16 \\cdot 9 = 144$ <br><br>
            Allgemein gilt: <br><br>
            $(a \\cdot b)^n = a^n \\cdot b^n$ <br><br>
            
            <b>Quotientenregel</b>
            Wie die bei der Produktregel gilt, dass man Dividend und Divisor, bzw. Zähler und Nenner einzeln potenzieren kann. <br><br>
            $(9 : 3)^2 = 9^2 : 3^2 = 81 : 9 = 9$ <br><br>
            $(9 : 3)^2 = 3^2 = 9$ <br><br>
            $\\left (\\dfrac{9}{3} \\right)^2 = \\dfrac{9^2}{3^2} = \\dfrac{81}{9} = 9$<br><br>
            Allgemein gilt: <br><br>
            $(a : b)^n = a^n : b^n = \\left( \\dfrac{a}{b} \\right)^n = \\dfrac{a^n}{b^n}$ <br><br>
            Wichtig anzumerken ist noch, dass die Produkt- und die Quotientenregel nur für Multiplikation und Division gelten, nicht für Addition und Subtraktion.
            </div>`}      
          />

          <View style={stylesTheorie.conainerMid}>
            <Pressable onPress={nextPage}>
              <Text style={stylesTheorie.link}>Nächstes Kapitel!</Text>
            </Pressable>
          </View>
          

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}