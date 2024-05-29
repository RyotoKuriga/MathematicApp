import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function AdditionUndSubtraktionVonBrüchen() {
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
          

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}