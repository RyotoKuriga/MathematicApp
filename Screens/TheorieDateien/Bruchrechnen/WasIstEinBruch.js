import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathViewFallback from 'react-native-math-view/src/fallback';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';

export function WasIstEinBruch() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const math = `\\huge \\textcolor{${activeColors.text}}{ `;
  const mathSmall = `\\large \\textcolor{${activeColors.text}}{ `;
  const mathMid = `\\Large \\textcolor{${activeColors.text}}{ `;

  const stylesTheorie = useStyles();

  const nextPage = () => {
    return (
      navigation.navigate('Kürzen & Erweitern')
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: activeColors.background}}>
      <ScrollView>
        <View style={[stylesTheorie.container, {backgroundColor: activeColors.background}]}>
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
            Ein Bruch ist eine verbesserte Darstellung der Division. Der Divident wird im Bruch Zähler genannt, den Divisor nennt man Nenner. Anstatt eines Doppelpunkts schreibt man einen Bruchstrich:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                math={`${mathSmall} \\text{Dividend} : \\text{Divisor} = \\dfrac{\\text{Z\\"ahler}}{\\text{Nenner}}}`}
              />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              Folglich funktioniert das Rechnen auch gleich:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                math={`${math} 20 : 10 = 2 = \\dfrac{20}{10}}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Man kann jede Zahl als Bruch schreiben, indem man die Zahl als Zähler nimmt und 1 als Nenner. Zum Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                math={`${mathMid} -6 = \\dfrac{-6}{1}\\quad 1 = \\dfrac{1}{1}\\quad \\pi = \\dfrac{\\pi}{1}}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Der Nenner eines Bruches darf nicht null sein, da man sonst durch null dividieren würde, was nicht möglich ist.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                math={`${mathMid} \\dfrac{x}{0} = unmöglich}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Tauscht man Nenner und Zähler, nennt man das einen Kehrwert.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                math={`${math} \\dfrac{a}{b} \\longrightarrow \\dfrac{b}{a}}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                math={`${math} \\dfrac{10}{3} \\longrightarrow \\dfrac{3}{10}}`}
              />
          </View>

          <Text style={stylesTheorie.subHeader}>
            Wieso Brüche, wenn man doch die Division nutzen kann?
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
              <Text style={stylesTheorie.text}>
                  Brüche bringen den wesentlichen Vorteil, dass sie eindeutig und leicht leserlich sind. Die Division führt oft zu Dezimalstellen und es ist anstrengend, mit ihr zu rechnen – der Bruch hingegen bleibt exakt. Ein Drittel, geschrieben als
              </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                  math={`${math} \\dfrac{1}{3}}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
              <Text style={stylesTheorie.text}>
                  ist eindeutig und unveränderlich. Es bleibt ein Drittel und zeigt klar, dass es sich um einen Teil von drei gleich großen Teilen handelt. Ausserdem ist es wesentlich einfacher, mit Brüchen zu rechnen, wie die folgenden Kapitel zeigen.
              </Text>
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
              <MathViewFallback
                math={`${mathMid} \\dfrac{1}{5} + \\dfrac{1}{5} = \\dfrac{2}{5} = 2 : 5 = 0.4}`}
              />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                math={`${mathMid} \\dfrac{3}{2} + \\dfrac{7}{2} = \\dfrac{10}{2} = 10 : 2 = 5}`}
              />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathViewFallback
                math={`${mathMid} \\dfrac{a}{b} + \\dfrac{c}{b} = \\dfrac{a+c}{b}}`}
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