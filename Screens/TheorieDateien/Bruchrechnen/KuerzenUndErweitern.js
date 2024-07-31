import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function KuerzenUndErweitern() {
  const navigation = useNavigation();

  const math = '\\huge';
  const mathSmall = '\\large';
  const mathMid = '\\Large';

  const nextPage = () => {
    return (
      navigation.navigate('Multiplikation & Division von Brüchen')
    );
  };

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
              Um einen Term zu vereinfachen, kürzt man ihn. Man dividiert den Zähler und den Nenner mit derselben Zahl und verändert so den Wert des Bruches nicht. Als Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\dfrac{6}{8} = \\dfrac{6 : 2}{8 : 2} = \\dfrac{3}{4}`}
            />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              6/8 ist 0.75 und 3/4 ist ebenso 0.75, somit stimmt das vorher Berechnete. Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\dfrac{a \\cdot y}{b \\cdot y} = \\dfrac{a}{b}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um herauszufinden, welche Zahl man kürzen kann, nimmt man den größten gemeinsamen Teiler (ggT) des Zählers und des Nenners. Der ggT ist nämlich die Zahl, die man maximal kürzen kann. Der ggT von 6 und 8 ist 2, weswegen 2 die höchste Zahl ist, mit der man kürzen kann.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\dfrac{30}{9}`}
            />
          </View>

          <View style={stylesTheorie.containerMid}>
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

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              In diesem Beispiel kann man die gesamte Klammer (x + 2) kürzen, da sie sowohl im Nenner als auch im Zähler vorhanden ist.
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Hier wurde zuerst beim Nenner und beim Zähler ausgeklammert und danach das Glied $(x + 2)$ gekürzt.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{4z + 2y}{16z^2 + 16zy + 4y^2} `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = \\dfrac{4z + 2y}{(4z + 2y)^2} = \\dfrac{1}{4z + 2y}`}
            />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Bei dieser Umformung wurde die erste binomische Formel angewendet, um den Nenner zu vereinfachen, so dass man dann kürzen kann.
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um manche Terme kürzen zu können, muss man eine negative Zahl ausklammern.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{a - b}{b - a} = \\dfrac{a - b}{-1 \\cdot (-b + a)} `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = \\dfrac{a - b}{-1 \\cdot (a - b)} = \\dfrac{1}{-1} = -1`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Besitzt ein Term einen Bruch, kürzt man immer alle Glieder, um Ordnung zu behalten.
            </Text>
          </View>

          <Text style={stylesTheorie.subHeader}>
            Erweitern
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um verschiedene Brüche, die durch Addition und Subtraktion verbunden sind, zusammenzufassen, muss man die einzelnen Brüche erweitern. Das Erweitern ist die inverse Operation des Kürzens. Anstatt den Bruch im Nenner und im Zähler mit derselben Zahl zu dividieren, multipliziert man nun den Nenner und den Zähler mit derselben Zahl. Wir können so zum Beispiel den Bruch $\\frac{3}{4}$ auf 8-tel erweitern, indem wir den Nenner und den Zähler mit 2 multiplizieren.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\dfrac{3}{4} = \\dfrac{3 \\cdot 2}{4 \\cdot 2} = \\dfrac{6}{8}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\dfrac{a}{b} = \\dfrac{a \\cdot y}{b \\cdot y}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wenn man Brüche erweitert, kann man sie auf denselben Nenner bringen und sie somit bei Addition und Subtraktion zusammenfassen. Als Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{5x}{6} + \\dfrac{10x}{3} = \\dfrac{5x}{6} + \\dfrac{10x \\cdot 2}{3 \\cdot 2} `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = \\dfrac{5x}{6} + \\dfrac{20x}{6} = \\dfrac{25x}{6}`}
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
  );
}
