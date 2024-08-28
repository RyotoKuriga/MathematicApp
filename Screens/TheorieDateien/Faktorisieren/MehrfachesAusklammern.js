import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';


export function MehrfachesAusklammern() {
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Klammeransatz')
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
            Mehrfaches Ausklammern
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bei einem Term mit mindestens 4 Gliedern kann manchmal mehrfach ausgeklammert werden.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} ax + ay + bx + by}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} =a(x + y) + b(x + y)}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}=(x + y)(a + b)}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.textMid}>
              Hier wurde erst a und b ausgeklammert und danach wurde die Klammer (x + y) ausgeklammert, da sie in beiden Gliedern vorkommt.
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Manchmal scheinen die Terme auf den ersten Blick nicht faktorisierbar, doch mit Umstellen ergibt sich manchmal doch eine Möglichkeit:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}36 + 20a - 9x + 5ax}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= 5ax + 20a - 9x + 36}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= 5a \\cdot (x + 4) - 9 \\cdot (x + 4)}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= (5a - 9)(x + 4)}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.textMid}>
              In diesem Beispiel wurden die Glieder im Term erst übersichtlicher geordnet, um dann einfacher ausklammern zu können.
            </Text>
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Pressable onPress={nextPage}>
              <Text style={stylesTheorie.link}>Nächstes Kapitel!</Text>
            </Pressable>

            <View style={stylesTheorie.space}>
            </View>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}
