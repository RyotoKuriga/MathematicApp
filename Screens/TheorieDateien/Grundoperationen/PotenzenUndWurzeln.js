import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';

export function PotenzenUndWurzeln() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const math = `\\huge \\textcolor{${activeColors.text}}{ `;
  const mathSmall = `\\large \\textcolor{${activeColors.text}}{ `;
  const mathMid = `\\Large \\textcolor{${activeColors.text}}{ `;
  const navigation = useNavigation();

  const stylesTheorie = useStyles();

  const nextPage = () => {
    return (
      navigation.navigate('Betrag')
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: activeColors.background}}>
      <ScrollView>
        <View style={[stylesTheorie.container, {backgroundColor: activeColors.background}]}>
          <Text style={stylesTheorie.header}>
            Potenzen und Wurzeln
          </Text>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Allgemeines
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Potenzen sind wiederholte Multiplikationen. Der Wert, der multipliziert wird, wird als <Text style={stylesTheorie.marked}>Basis</Text> bezeichnet. Die Anzahl, wie oft multipliziert wird, heisst <Text style={stylesTheorie.marked}>Exponent</Text> und das Ergebnis bezeichnet man als <Text style={stylesTheorie.marked}>Potenzwert</Text>. Potenzen mit einem Exponenten zweiter Ordnung werden als Quadrate bezeichnet. Wurzeln sind die Gegenoperationen zu Potenzen. Die Wurzel besteht aus dem <Text style={stylesTheorie.marked}>Wurzelexponenten</Text>, dem <Text style={stylesTheorie.marked}>Wurzelzeichen</Text> und dem <Text style={stylesTheorie.marked}>Radikanten</Text>. Das Ergebnis wird als <Text style={stylesTheorie.marked}>Wurzelwert</Text> bezeichnet. Die Wurzel mit dem Radikantenwert 2 bezeichnet man als Quadratwurzel. Wird der Wurzelexponent nicht geschrieben, ist die Quadratwurzel gemeint.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} x^y = z}`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Basis hoch Exponent = Potenzwert
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\sqrt[y]{x} = z}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\sqrt[2]{x} = \\sqrt{x}}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Ein Beispiel zum Potenzieren einer Zahl:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} 2^3 = 2 \\cdot 2 \\cdot 2 = 8}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Ein Beispiel zum Wurzelziehen einer Zahl:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\sqrt{64} = 8}`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Da 8 hoch 2 gleich 64 ergibt.
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Potenzen kann man oft noch im Kopf ausrechnen. Wurzeln jedoch werden schnell schwierig auszurechnen und sind oft irrational, weswegen man oft die Wurzeln einfach stehen lässt, was übersichtlicher ist.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\sqrt{5} = 2.2360...}`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              In diesem Fall würde man einfach Wurzel 5 notieren, statt der ungenauen Kommazahl.
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Potenziert man eine negative Zahl mit einer geraden Zahl, ergibt sich immer eine positive Zahl. Potenziert man jedoch eine negative Zahl mit einer ungeraden Zahl, ergibt sich wieder eine negative Zahl. Als Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} (-3)^2 = -3 \\cdot -3 = 9}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} (-3)^3 = -3 \\cdot -3 \\cdot -3 = -27}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wurzeln aus negativen Zahlen sind in der Menge der reellen Zahlen nicht möglich.
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wurzeln und Potenzen sind eigentlich dasselbe. Man kann jede Wurzel als Potenz darstellen, indem man den Wurzelexponenten als Kehrwert in den Exponenten schreibt.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\sqrt[n]{x} = x^{\\frac{1}{n}}}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\sqrt{5} = 5^{\\frac{1}{2}}}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\sqrt[5]{7} = 7^{\\frac{1}{5}}}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Für die Potenzregeln ist das sehr praktisch, denn so kann man einfacher mit Wurzeln und Potenzen rechnen.
            </Text>
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Potenzregeln
            </Text>
          </View>

          <Text style={stylesTheorie.subHeader}>
            Potenzgesetz für gleiche Basen
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Haben Potenzen die gleichen Basen und man multipliziert sie miteinander, kann man ihre Exponenten addieren.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} 9^3 \\cdot 9^2 = 9^5}`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Denn:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} (9 \\cdot 9 \\cdot 9) \\cdot (9 \\cdot 9)}`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Der Ausdruck kann auch ohne Klammern geschrieben werden (Assoziativgesetz). Und ist somit gleich:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} = 9 \\cdot 9 \\cdot 9 \\cdot 9 \\cdot 9}`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Und somit wiederum gleich:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} 9^5}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} a^n \\cdot a^m = a^{n + m}}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Umgekehrt gilt, dass wenn man Potenzen mit derselben Basis dividiert, der Exponent des Dividenden von dem des Divisors subtrahiert wird.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} 9^3 : 9^2 = 9^{3-2} = 9^1 = 9}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} a^n : a^m = a^{n - m}}`}
              />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Potenzregeln für Potenzen
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wird eine Potenz potenziert, multipliziert man die Exponenten miteinander.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} (3^2)^3 = (3 \\cdot 3) \\cdot (3 \\cdot 3) \\cdot (3 \\cdot 3)}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} =3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 3^6}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Hier wurde wieder das Assoziativgesetz angewendet, um die Klammern aufzulösen.
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} (a^n)^m = a^{n \\cdot m}}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Vor allem durch diese Rechenregel zeigt sich der Nutzen der Umformung der Wurzeln:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\sqrt{9} \\cdot 9^4 = 9^{\\frac{1}{2}} \\cdot 9^4} `}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} = 9^{\\frac{1}{2} \\cdot 4} = 9^2 = 81}`}
              />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Produktregel
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Potenz eines Produkts kann berechnet werden, indem man jeden Faktor einzeln potenziert.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} (4 \\cdot 3)^2 = 4^2 \\cdot 3^2} `}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} = 16 \\cdot 9 = 144}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              So gilt auch umgekehrt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} 2^2 \\cdot 3^2 = (2 \\cdot 3)^2}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} = 6^2 = 36}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} (a \\cdot b)^n = a^n \\cdot b^n}`}
              />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Quotientenregel
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wie bei der Produktregel gilt, dass man Dividend und Divisor, bzw. Zähler und Nenner, einzeln potenzieren kann.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} (9 : 3)^2 = 9^2 : 3^2} `}
              />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} = 81 : 9 = 9}`}
              />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\left (\\dfrac{9}{3} \\right)^2 = \\dfrac{9^2}{3^2}} `}
              />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} = \\dfrac{81}{9} = 9}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} (a : b)^n = a^n : b^n} `}
              />
          </View>
          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} = \\left( \\dfrac{a}{b} \\right)^n = \\dfrac{a^n}{b^n}}`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Pressable onPress={nextPage}>
              <Text style={stylesTheorie.link}>Nächstes Kapitel!</Text>
            </Pressable>
          </View>

          <View style={stylesTheorie.space}>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
