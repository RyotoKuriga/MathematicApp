import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function KuerzenUndErweitern() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const math = '\\huge'
  const mathSmall= '\\large'
  const mathMid = '\\Large'

  const nextPage = () => {
    return (
      navigation.navigate('Multiplikation & Division von Brüchen')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Kürzen & Erweitern
          </Text>
          <Text style={stylesTheorie.subHeader}>
            Kürzen
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Um einen Term zu vereinfach, kürzt man ihn. Man dividiert den Zähler und den Nenner mit der selben Zahl und verändert so den Wert des Bruches nicht. Als Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\dfrac{6}{8} = \\dfrac{6 : 2}{8 : 2} = \\dfrac{3}{4}`}
              />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              6/8 ist 0.75 und 3/4 ist ebenso 0.75, somit stimmt das vorher berechnete. Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\dfrac{a \\cdot y}{b \\cdot y} = \\dfrac{a}{b}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um herauszufinden, welche Zahl man kürzen kann nimmt man den grössten gemeinsamen Teiler (ggT) des Zählers und des Nenners. Der ggT ist nämlich die Zahl, die man maximal kürzen kann. Der ggT von 6 und 8 ist 2, weswegen 2 die höchste Zahl ist, mit der man kürzen kann.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\dfrac{30}{9}`}
              />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              Der ggT von 30 und 9 ist 3. Nun kann man mit 3 kürzen.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\dfrac{10}{3}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um konsequent kürzen zu können, muss man zuerst sowohl den Nenner wie auch den Zähler faktorisiert haben, denn oft besteht die Möglichkeit zu kürzen, man sieht sie aber nicht.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathSmall} \\dfrac{2x + 4}{3x + 6} = \\dfrac{2 \\cdot (x + 2)}{3 \\cdot (x + 2)} = \\dfrac{2}{3}`}
              />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              In diesem Beispiel kann man die gesamte Klammer (x + 2) kürzen, da sie sowohl im Nenner als auch im Zähler vorhanden ist.
            </Text>
          </View>

          

          <MathJax
            html={`<div style='${divStyle}'>

            Hier wurde zuerst beim Nenner und beim Zähler ausgeklammert und danach das Glied $(x + 2)$ gekürzt. <br><br>
            $\\dfrac{4z + 2y}{16z^2 + 16zy + 4y^2} = \\dfrac{4z + 2y}{(4z + 2y)^2} $ <br><br> $= \\underline{\\underline{\\dfrac{1}{4z + 2y}}}$ <br><br>
            Bei dieser Umformung wurde die erste binomische Formel angewendet, um den Nenner zu vereinfachen, so dass man dann kürzen kann. <br><br>
            Um manche Terme kürzen zu können, muss man eine negative Zahl ausklammern. <br><br>
            $\\dfrac{a - b}{b - a} = \\dfrac{a-b}{-1 \\cdot (-b + a)}$ <br><br>
            $= \\dfrac{a - b}{-1 \\cdot (a - b)} = \\dfrac{1}{-1} = \\underline{\\underline{-1}}$ <br><br>
            Besitz ein Term einen Bruch, kürzt man immer alle Glieder, um Ordnung zu behalten.
            </div>`}      
          />

          <Text style={stylesTheorie.subHeader}>
            Erweitern
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>Um verschiedene Brüche, die durch Addition und Subtraktion verbunden sind, zusammenzufassen, muss man die einzelnen Brüche erweitern. Das Erweitern ist die inverse Operation des Kürzens, anstatt den Bruch im Nenner und im Zähler mit der selben Zahl zu dividieren, multipliziert man nun den Nenner und den Zähler mit der selben Zahl. Wir können so z.B. den Bruch $\\frac{3}{4}$ auf 8-tel erweitern indem wir den Nenner und den Zähler mit 2 multiplizieren. <br><br>
            $\\dfrac{3}{4} = \\dfrac{3 \\cdot 2}{4 \\cdot 2} = \\dfrac{6}{8}$ <br><br>
            Allgemein gilt:
            $\\dfrac{a}{b} = \\dfrac{a \\cdot y}{b \\cdot y}$ <br><br>
            Wenn man Brüche Erweitert, kann man sie auf den selben Nenner bringen und sie somit bei Addition und Subtraktion zusammenfassen. Als Beispiel: <br><br>
            $\\dfrac{5x}{6} + \\dfrac{10x}{3} = \\dfrac{5x}{6} + \\dfrac{10x \\cdot 2}{3 \\cdot 2}$ <br><br>
            $= \\dfrac{5x}{6} + \\dfrac{20x}{6} = \\underline{\\underline{\\dfrac{25x}{6}}}$ <br><br>
            Hier wurde das Glied $\\frac{10x}{3}$ mit 2 erweitert und dann wurden lediglich die Zähler addidiert.
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