import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function WasIstEinBruch() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const math = '\\huge'
  const mathSmall= '\\large'
  const mathMid = '\\Large'

  const nextPage = () => {
    return (
      navigation.navigate('Kürzen & Erweitern')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Was ist ein Bruch?
          </Text>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Allgemeines
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Ein Bruch ist eine verbesserte Darstellung der Division. Der Divident wird im Bruch Zähler gennant, den Divisor nennt man Nenner. Anstatt eines Doppelpunkts schreibt man einen Bruchstrich:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathSmall} Dividend : Divisor = \\dfrac{Zaehler}{Nenner}`}
              />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              Folglich funktioniert das Rechnen auch gleich:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} 20 : 10 = 2 = \\dfrac{20}{10}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Man kann jede Zahl als Bruch schreiben, indem man die Zahl als Zähler nimmt und 1 als Nenner. Zum Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} -6 = \\dfrac{-6}{1}\\quad 1 = \\dfrac{1}{1}\\quad \\pi = \\dfrac{\\pi}{1}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Der Nenner eines Bruches darf nicht null sein, da man sonst durch null dividieren würde, was nicht möglich ist.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\dfrac{x}{0} = unmöglich`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Tauscht man Nenner und Zähler, nennt man das einen Kehrwert.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\dfrac{a}{b} \\longrightarrow \\dfrac{b}{a}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math} \\dfrac{10}{3} \\longrightarrow \\dfrac{3}{10}`}
              />
          </View>

          <Text style={stylesTheorie.subHeader}>
            Addition & Subtraktion von Brüchen
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um zwei Brüche zu addieren oder zu subtrahieren, müssen sie den selben Nenner haben. Haben sie den selben Nenner führt man die linearen Operationen im Zähler aus, die  Werte im Nenner werden hierbei nicht addiert. Mehrere Brüche mit dem selbem Nenner, können somit zu einem Bruch zusammengefasst werden.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\dfrac{1}{5} + \\dfrac{1}{5} = \\dfrac{2}{5} = 2 : 5 = 0.4`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\dfrac{3}{2} + \\dfrac{7}{2} = \\dfrac{10}{2} = 10 : 2 = 5`}
              />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\dfrac{a}{b} + \\dfrac{c}{b} = \\dfrac{a+c}{b}`}
              />
          </View>

          
          <View style={stylesTheorie.conainerMid}>
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