import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';

export function Doppelbrueche() {
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('')
    );
  };

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
            Doppelbrüche
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Da Brüche nichts anderes als eine andere Schreibweise für eine Division sind, ist dies beim Doppelbruch auch nicht anders. Ein Doppelbruch ist ein Bruch mit einem Bruch als Nenner und einem Bruch als Zähler. Wir können nun diesen Doppelbruch zu einer Division umformen, um ihn auflösen zu können. Als Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{\\dfrac{2}{15}}{\\dfrac{5}{9}} = \\dfrac{2}{15} : \\dfrac{5}{9}} `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = \\dfrac{2}{15} \\cdot \\dfrac{9}{5} = \\dfrac{18}{75}}`}
            />
          </View>
          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um diesen Prozess zu beschleunigen, kann man sich die Regel <Text style={{ fontWeight: 'bold' }}>Außenglieder über Innenglieder</Text> merken. Man multipliziert die äußeren Glieder im Zähler, während man die inneren Glieder im Nenner multipliziert. Das sieht dann folgendermaßen aus:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\dfrac{\\dfrac{a}{b}}{\\dfrac{c}{d}} = \\dfrac{a \\cdot d}{b \\cdot c}}`}
            />
          </View>


          <View style={stylesTheorie.space}>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
