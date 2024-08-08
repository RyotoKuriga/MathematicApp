import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function GleichungssystemeLoesen() {
  const math = '\\huge';
  const mathMid = '\\Large';
  const navigation = useNavigation();

  const nextPage = () => {
    return navigation.navigate('NextPage'); // replace 'NextPage' with the actual page name
  };

  return (
    <ScrollView>
      <View style={stylesTheorie.container}>
        <Text style={stylesTheorie.header}>
          Gleichungssysteme auflösen
        </Text>

        <View>
          <Text style={stylesTheorie.subHeader}>
            Einleitung
          </Text>
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Ein Gleichungssystem ist eine Sammlung von Gleichungen, die gemeinsam betrachtet werden, um die Werte der Unbekannten zu bestimmen. Ein einfaches Gleichungssystem wäre:
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${math} \\begin{cases} 2x + 3y = 10 \\\\ 4x - 2y = 8 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Durch die Tatsache, dass es zwei Gleichungen mit zwei Unbekannten (x, y) gibt, ist das Gleichungssystem eindeutig bestimmt, d.h. es gibt für jede Unbekannte genau eine Lösung. Wenn ein Gleichungssystem mehr Variablen als Gleichungen hat, ist es unterbestimmt, was bedeutet, dass es unendlich viele Lösungen gibt, die das Gleichungssystem erfüllen. Hat ein Gleichungssystem hingegen mehr Gleichungen als Variablen, sind die Variablen eindeutig bestimmt.
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} x + y - z = 19 \\\\ 3x - 2y + 2z = 24 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.containerMid}>
          <Text style={stylesTheorie.textMid}>
            3 Variablen & 2 Gleichungen → Variablen sind nicht eindeutig bestimmt → es gibt unendlich viele Lösungen → unterbestimmt
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} x + y - z = 19 \\\\ 3x -2y + 2z = 24 \\\\ -2x + 9y + 5z = 12 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.containerMid}>
          <Text style={stylesTheorie.textMid}>
            3 Variablen & 3 Gleichungen → das Gleichungssystem ist eindeutig bestimmt → für jede Variable gibt es eine Lösung
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} y - z = 1 \\\\ 5y + 3z = 14 \\\\ 9y + z = 13 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.containerMid}>
          <Text style={stylesTheorie.textMid}>
            2 Variablen & 3 Gleichungen → das Gleichungssystem ist überbestimmt → für jede Variable gibt es eine Lösung
          </Text>
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Um ein Gleichungssystem zu lösen, gibt es viele Methoden. Die drei wichtigsten sind die Gleichsetzungsmethode, die Einsetzungsmethode und die Additionsmethode.
          </Text>
        </View>

        <View>
          <Text style={stylesTheorie.subHeader}>
            Gleichsetzungsmethode
          </Text>
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Bei der Gleichsetzungsmethode wird bei zwei Gleichungen dieselbe Variable isoliert. Danach werden die Gleichungen einander gleichgesetzt und dann wird der Term aufgelöst. Als Beispiel:
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} 5x + 3y = 18 \\\\ 3x - 2y = 4 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} 5x = 18 - 3y \\\\ 3x = 4 + 2y \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} x = \\dfrac{18}{5} - \\dfrac{3y}{5} \\\\ x = \\dfrac{4}{3} + \\dfrac{2y}{3} \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\dfrac{18}{5} - \\dfrac{3y}{5} = \\dfrac{4}{3} + \\dfrac{2y}{3}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 54 - 9y = 20 + 10y`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 34 = 19y`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\dfrac{34}{19} = y`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Da man nun den y-Wert kennt, kann man ihn in eine Gleichung einsetzen und so den x-Wert errechnen.
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 3x = 4 + 2 \\cdot \\dfrac{34}{19}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x = \\dfrac{4}{3} + \\dfrac{68}{57}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x = \\dfrac{76}{57} + \\dfrac{68}{57}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x = \\dfrac{144}{57}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x = \\dfrac{48}{19}`}
          />
        </View>

        <View>
          <Text style={stylesTheorie.subHeader}>
            Einsetzungsmethode
          </Text>
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Ähnlich wie bei der Gleichsetzungsmethode, formt man bei der Einsetzungsmethode eine Gleichung nach einer Variablen um. Diese Variable wird dann in eine andere Gleichung eingesetzt.
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} 2x + y = 7 \\\\ x - y = 1 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} 2x + y = 7 \\\\ -y = 1 - x \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} 2x + y = 7 \\\\ y = x - 1 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 2x + (x - 1) = 7`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 3x - 1 = 7`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 3x = 8`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x = \\dfrac{8}{3}`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Da man nun eine Variable kennt, lässt sich die zweite einfach berechnen.
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x - y = 1`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\dfrac{8}{3} - y = 1`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} -y = -\\dfrac{8}{3} + 1`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} y = \\dfrac{8}{3} - 1`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} y = \\dfrac{5}{3}`}
          />
        </View>

        <View>
          <Text style={stylesTheorie.subHeader}>
            Additionsmethode
          </Text>
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Gleichungssysteme können auch gelöst werden, indem man von einer Gleichung eine andere abzieht. Man erweitert eine der Gleichungen so, dass, wenn man sie mit der anderen Gleichung addiert (oder subtrahiert), eine Variable verschwindet. Dies sieht dann wie folgt aus:
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} 2x + 3y = 11 \\\\ x - y = 3 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\begin{cases} 2x + 3y = 11 \\\\ 3x - 3y = 9 \\end{cases}`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Nun addiert man die linke Seite mit der linken Seite und die rechte Seite mit der rechten.
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 2x + 3y + 3x - 3y = 11 + 9`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 5x = 20`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x = 4`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Aus der einen Variable ergibt sich die andere:
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x - y = 3`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 4 - y = 3`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} -y = -1`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} y = 1`}
          />
        </View>

        <View style={stylesTheorie.containerMid}>
          <Pressable onPress={nextPage}>
            <Text style={stylesTheorie.link}>Nächstes Kapitel!</Text>
          </Pressable>
        </View>

        <View style={stylesTheorie.space}></View>
      </View>
    </ScrollView>
  );
}
