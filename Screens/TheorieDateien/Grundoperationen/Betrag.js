import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function Betrag() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('')
    );
  }

  const math = '\\huge'
  const mathSmall = '\\large'
  const mathMid = '\\Large'

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Betrag
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Der Betrag einer Zahl ist der absolute Wert einer Zahl, also wie weit die Zahl von der Null entfernt ist. Man schreibt den Betrag, indem man zwei senkrechte Striche um das macht, was man zum Betrag machen will $\\rightarrow |x|$.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math}|5| = 5`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math}|-5| = 5`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math}|23| = 23`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math}|-23| = 23`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Der Betrag ist sehr simpel. Ist ein negatives Vorzeichen vorhanden, ändert man es zu einem positiven. Ist das Vorzeichen bereits positiv, ändert sich nichts.
            </Text>
          </View>

          <Text style={stylesTheorie.subHeader}>
            Betragsgleichungen lösen
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um eine Betragsgleichung zu lösen, müssen wir die bestimmte Eigenschaft des Betrags berücksichtigen. Eine Betragsgleichung, die möglich ist, hat immer zwei Lösungen. Die Lösungen für die Betragsgleichung $|x| = a$ sind:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} x_1 = a`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} x_2 = -a`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um nun eine Gleichung zu lösen, isoliert man erst den Betrag auf eine Seite, um dann zwischen den beiden Ergebnissen unterscheiden zu können. Als Beispiel:
            </Text>
          </View>

          <View style={{alignItems: 'flex-start'}}>
            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\dfrac{|3x-2|}{2} = 2 \\quad \\large\\vert \\cdot 2`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} |3x-2| = 4 \\quad \\large\\vert \\text{Betrag auflösen}`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} (3x_1 - 2) = 4 \\quad \\large\\vert +2`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} 3x_1 = 6 \\quad \\large\\vert :3`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} x_1 = 2`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} -(3x_2 - 2) = 4 \\quad \\large\\vert \\cdot (-1)`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} 3x_2 - 2 = -4 \\quad \\large\\vert +2`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} 3x_2 = -2 \\quad \\large\\vert :3`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} x_2 = -\\dfrac{2}{3}`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\mathbb{L} = \\left\\{-\\dfrac{2}{3}, 2\\right\\}`}
              />
            </View>
          </View>
        </View>

        <View style={stylesTheorie.space}>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  )
}
