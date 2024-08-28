import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';

export function Klammeransatz() {
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Binomische Formeln')
    );
  }

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const math = `\\huge \\textcolor{${activeColors.text}}{ `;
  const mathSmall = `\\large \\textcolor{${activeColors.text}}{ `;
  const mathMid = `\\Large \\textcolor{${activeColors.text}}{ `;

  const stylesTheorie = useStyles();

  return (
    <SafeAreaView style={{backgroundColor: activeColors.background}}>
      <ScrollView>
        <View style={[stylesTheorie.container, {backgroundColor: activeColors.background}]}>
          <Text style={stylesTheorie.header}>
            Klammeransatz
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Der Klammeransatz ist nützlich bei Trinomen, also dreigliedrigen Termen. Das erste Glied muss ein quadratisches Glied sein. Ein Trinom wäre zum Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} x^2 + 5x + 6}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Ausklammern kann man bei diesem Trinom nicht direkt, jedoch lässt sich ein Klammeransatz bilden, das bedeutet, dass man das Trinom mittels einer Multiplikation von zwei Klammern darstellt. Um den Klammeransatz zu bilden, sucht man erst die Primfaktoren, in die sich das letzte Glied zerlegen lässt. Die Primfaktoren von 6 sind 1, 2, 3 und 6. Nun sucht man einen Weg, dass diese Primfaktoren addiert den zweiten Koeffizienten ergeben, hier also 5.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathSmall} 1 + 2 = 3 \\neq 5}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathSmall} 1 + 3 = 4 \\neq 5}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathSmall} 1 + 6 = 7 \\neq 5}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}\\underline{\\underline{2 + 3 = 5}}}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Nun hat man die Zahlen gefunden, die in die Klammern eingesetzt werden müssen.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} (x + 2) \\cdot (x + 3)}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Multipliziert man diesen Klammeransatz aus, kommt man wieder auf den ursprünglichen Term, das bedeutet, man hat richtig ausgeklammert. Die allgemeine Form sieht dann folgendermaßen aus:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} x^2 + ax + c }`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = (x + m)(x + n)}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} x^2 - 5x + 6 }`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = (x - 2) \\cdot (x - 3)}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wichtig hierbei ist es, wie immer die Vorzeichen zu beachten. Welches Vorzeichen wo gesetzt wird, kann durch Ausprobieren herausgefunden werden.
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
