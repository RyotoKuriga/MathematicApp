import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function AdditionUndSubtraktion() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const math = '\\huge'
  const mathSmall = '\\large'
  const mathMid = '\\Large'

  const nextPage = () => {
    return (
      navigation.navigate('Multiplikation & Division')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Addition und Subtraktion
          </Text>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Allgemeines
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Addition und Subtraktion sind beide lineare Operationen. Subtraktion ist genauer gesagt dasselbe wie Addition, jedoch mit einem negativen Vorzeichen. Addiert man zwei Zahlen, summiert man ihre Werte. Die Zahlen, die man <Text style={stylesTheorie.marked}>addiert</Text>, nennt man <Text style={stylesTheorie.marked}>Summanden</Text>. Das Ergebnis wird als <Text style={stylesTheorie.marked}>Summe</Text> bezeichnet. Bei der Subtraktion bezeichnet man die Zahl, von der man etwas abzieht, als <Text style={stylesTheorie.marked}>Minuend</Text>. Der <Text style={stylesTheorie.marked}>Subtrahend</Text> ist die Zahl, die man von der anderen abzieht und die <Text style={stylesTheorie.marked}>Differenz</Text> ist das Ergebnis.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} x + y = z`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Summand + Summand = Summe
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} x - y = z`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Minuend - Subtrahend = Differenz
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bei der Addition und Subtraktion gelten folgende Hauptregeln:
            </Text>
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Kommutativität
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Reihenfolge der Glieder kann geändert werden, ohne das Ergebnis zu beeinflussen.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} 7 + 3 = 3 + 7 = 10`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} a + b = b + a`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Nun ist es wichtig, die Vorzeichen zu beachten. Die Vorzeichen sind ein Teil der Zahl und müssen somit auch mitvertauscht werden.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} 7 - 3 = -3 + 7 = 4`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Und nicht:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} 7 - 3 = 4 \\neq 3 - 7 = -4`}
              />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Assoziativität
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Der Klammerausdruck, welcher immer zuerst ausgerechnet wird, kann bei einer Addition von drei oder mehr Zahlen verschoben werden, ohne das Ergebnis zu beeinflussen:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathSmall} (7 + 3) + 10 = 7 + (3 + 10) = 20`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathSmall} (a + b) + c = a + (b + c)`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathSmall} = a + b + c`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Hier ist auch das Vorzeichen wichtig. Steht ein Minus vor der Klammer, bedeutet das, dass die gesamte Klammer von der vorherigen Zahl abgezogen wird und nicht nur der erste Wert. Daraus folgt dann:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathSmall} 7 - (3 + 10) = 7 - 3 - 10 = -6`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} a - (b + c) = a - b - c`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Steht ein Minus vor der Klammer, wechseln alle Werte in der Klammer ihre Vorzeichen. Plus wird zu Minus und Minus zu Plus.
            </Text>
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
