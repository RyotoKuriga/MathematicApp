import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function MultiplikationUndDivisionVonBrüchen() {
  const navigation = useNavigation();

  const math = '\\huge';
  const mathSmall = '\\large';
  const mathMid = '\\Large';

  const nextPage = () => {
    return (
      navigation.navigate('Doppelbrüche')
    );
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Multiplikation & Division von Brüchen
          </Text>

          <Text style={stylesTheorie.subHeader}>
            Multiplikation
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Multipliziert man zwei Brüche miteinander, multipliziert man Zähler mit Zähler und Nenner mit Nenner. Als Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{10}{7} \\cdot \\dfrac{2}{3} = \\dfrac{10 \\cdot 2}{7 \\cdot 3} = \\dfrac{20}{21}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{a}{b} \\cdot \\dfrac{c}{d} = \\dfrac{a \\cdot c}{b \\cdot d}`}
            />
          </View>

          <Text style={stylesTheorie.subHeader}>
            Division
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Um Brüche zu dividieren, ändert man den Divisor zu seinem Kehrwert und anstatt nun zu dividieren, multipliziert man die Glieder. Als Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{25}{4} : \\dfrac{5}{3} = \\dfrac{25}{4} \\cdot \\dfrac{3}{5} `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = \\dfrac{75}{20} = \\dfrac{15}{4}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Allgemein gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c} `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} = \\dfrac{a \\cdot d}{b \\cdot c}`}
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
  );
}
