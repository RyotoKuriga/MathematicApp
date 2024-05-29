import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function MultiplikationUndDivisionVonBrüchen() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Doppelbrüche')
    );
  }

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


          <MathJax
            html={`<div style='${divStyle}'>Multipliziert man zwei Brüche miteinander, multipliziert man Zähler mit Zähler und Nenner mit Nenner.<br><br>
            $\\dfrac{10}{7} \\cdot \\dfrac{2}{3} = \\dfrac{10 \\cdot 2}{7 \\cdot 3} = \\dfrac{20}{21}$ <br><br>
            Allgemein gilt: <br><br>
            $\\dfrac{a}{b} \\cdot \\dfrac{c}{d} = \\dfrac{a \\cdot c}{b \\cdot d}$ <br><br> 
            </div>`}      
          />

          <Text style={stylesTheorie.subHeader}>
            Division
          </Text>

          <MathJax
          html={`<div style='${divStyle}'>Um Brüche zu dividieren, ändert man den Divisor zu seinem Kehrwert und anstatt nun zu dividieren, multipliziert man die Glieder. Als Beispiel: <br><br>
          $\\dfrac{25}{4} : \\dfrac{5}{3} = \\dfrac{25}{4} \\cdot \\dfrac{3}{5} = \\dfrac{75}{20} = \\dfrac{15}{4}$ <br><br>
          Allgemein gilt: <br><br>
          $\\dfrac{a}{b} : \\dfrac{c}{d} = \\dfrac{a}{b} \\cdot \\dfrac{d}{c} = \\dfrac{a \\cdot d}{b \\cdot c}$ 
          </div>`}
          />


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