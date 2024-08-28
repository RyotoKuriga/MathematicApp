import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';

export function Ausklammern() {
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const math = `\\huge \\textcolor{${activeColors.text}}{ `;
  const mathSmall = `\\large \\textcolor{${activeColors.text}}{ `;
  const mathMid = `\\Large \\textcolor{${activeColors.text}}{ `;

  const stylesTheorie = useStyles();

  const nextPage = () => {
    return (
      navigation.navigate('Mehrfaches Ausklammern')
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: activeColors.background}}>
      <ScrollView>
        <View style={[stylesTheorie.container, {backgroundColor: activeColors.background}]}>
          <Text style={stylesTheorie.header}>
            Ausklammern
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Ausklammern ist ein nützliches Mittel, um Gleichungen zu vereinfachen. Ausklammern basiert auf dem Distributivgesetz, welches folgendes besagt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} a \\cdot (b + c) = a \\cdot b + a \\cdot c}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die einzelnen Glieder werden hier jeweils ausmultipliziert und dann addiert. Wenn man ausklammert, zieht man einen Faktor aus mehreren Termen heraus. Hier ein Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} 3x + 6y = 3 \\cdot (x + 2y)}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wir haben hier 3 ausgeklammert. Dies ist ein vereinfachter Ausdruck. Man kann ebenso Variablen ausklammern:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathSmall} 360abc + 180ac = 180ac \\cdot (2b + 1)}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wichtig ist auch, dass hier die 1 in der Klammer nicht vergessen wird. Würde sie fehlen, dann hätte man falsch ausgeklammert. Um zu überprüfen, ob in einem Term richtig ausgeklammert wurde, kann man ihn wieder ausmultiplizieren und dann sollte der Wert wieder gleich dem ursprünglichen sein.
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Man kann auch mehr als nur zwei Glieder ausklammern:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} 35qd + 25q + 40d} `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = 5 \\cdot (7qd + 5q + 8d)}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Hier wurde 5 ausgeklammert, die Variablen konnten nicht ausgeklammert werden, da sie nicht in allen Gliedern enthalten sind. Es kann nur ausgeklammert werden, was in allen Gliedern enthalten ist. Es ist auch möglich, -1 auszuklammern, dies ist dann insbesondere bei manchen Brüchen nützlich, um sie kürzen zu können:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} a - b = -1 \\cdot (b - a)}`}
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
