import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function MultiplikationUndDivision() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const math = '\\huge'
  const mathSmall = '\\large'
  const mathMid = '\\Large'

  const nextPage = () => {
    return (
      navigation.navigate('Potenzen & Wurzeln')
    );
  }

  const reference = () => {
    return(
      navigation.navigate('Was ist ein Bruch?')
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Multiplikation und Division
          </Text>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Allgemeines
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bei der Multiplikation gelten fast die gleichen Regeln wie bei der Addition und Subtraktion. Lediglich das Rechnen mit der Division kann in dieser Form schwierig sein. Es ist wesentlich einfacher, mit Brüchen zu rechnen. Die Zahlen, die man bei der Multiplikation miteinander <Text style={stylesTheorie.marked}>multipliziert</Text>, nennt man <Text style={stylesTheorie.marked}>Faktoren</Text>. Das Ergebnis bezeichnet man als <Text style={stylesTheorie.marked}>Produkt</Text>. Bei der Division ist die Zahl, die <Text style={stylesTheorie.marked}>dividiert</Text> wird, der <Text style={stylesTheorie.marked}>Dividend</Text>. Die Zahl, mit der man dividiert, nennt man <Text style={stylesTheorie.marked}>Divisor</Text> und das Ergebnis wird als <Text style={stylesTheorie.marked}>Quotient</Text> bezeichnet.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} x \\cdot y = z`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Faktor x Faktor = Produkt
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} x : y = z`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Dividend : Divisor = Quotient
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Es gelten die Regeln:
            </Text>
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Kommutativität
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Reihenfolge der Faktoren kann geändert werden, ohne das Ergebnis zu beeinflussen:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} 8 \\cdot 3 = 3 \\cdot 8 = 24`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} a \\cdot b = b \\cdot a`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bei der Division gilt das nicht. Der Divisor muss der Divisor bleiben und der Dividend der Dividend.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} 10 : 2 \\neq 2 : 10`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} a : b \\neq b : a`}
              />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Assoziativität
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Klammern können bei der Multiplikation von drei oder mehr Zahlen verschoben werden, ohne das Ergebnis zu verändern:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} (8 \\cdot 3) \\cdot 4 = 8 \\cdot (3 \\cdot 4) = 96`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} (a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} = a \\cdot b \\cdot c`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Dies gilt bei der Division wiederum nicht.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} (a : b) : c \\neq a : (b : c)`}
              />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Distributivität
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Multiplikation kann über eine Addition und über eine Subtraktion verteilt werden, solange sie in Klammern steht.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} 8 \\cdot (4 + 3) = 8 \\cdot 4 + 8 \\cdot 3`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} = 32 + 24 = 56`}
              />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} a \\cdot (b + c) = a \\cdot b + a \\cdot c`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Dies gilt wiederum nicht bei der Division:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} a : (b + c) \\neq a : b + a : c`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um ordentlich mit der Division zu rechnen, benutzt man Brüche.
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
