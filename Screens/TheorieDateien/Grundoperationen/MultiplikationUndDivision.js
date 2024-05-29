import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function MultiplikationUndDivision() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

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

          <MathJax
            html={`<div style='${divStyle}'> Bei der Multiplikation gelten fast gleiche Regeln wie bei der Addition und Subtraktion. Lediglich das Rechnen mit der Division kann in dieser Form schwierig sein. Es ist wesentlich einfacher mit Brüchen zu rechnen. Die Zahlen, die man bei der Multiplikation miteinander multipliziert nennt man <b>Faktoren</b>. Das Ergebnis bezeichnet man als <b>Produkt</b>. Bei der Division ist die Zahl, die dividiert wird, der <b>Dividend</b>. Die Zahl, mit der man dividiert, nennt man <b>Divisor</b> und das Ergebnis wird als <b>Quotient</b> bezeichnet.  <br><br>
            Faktor $\\cdot$ Faktor $=$ Produkt <br><br>
            Dividend $:$ Divisor $=$ Quotient <br><br>
            <b>Kommutativität</b>: Die Reihenfolge der Faktoren kann geändert werden, ohne das Ergebnis zu beeinflussen: <br><br>
            $8 \\cdot 3 = 3 \\cdot 8 = 24$ <br><br>
            Allgemein gilt: <br><br>
            $a \\cdot b = b \\cdot a$ <br><br>
            Bei der Division gilt das nicht. Der Divisor muss der Divisior bleiben und der Dividend der Dividend. <br><br>
            $a : b \\neq b : a$ <br><br>
            <b>Assoziativität</b> Die Klammern können bei der Multiplikation von drei oder mehr Zahlen verschoben werden, ohne das Ergebnis zu verändern: <br><br>
            $(8 \\cdot 3) \\cdot 4 = 8 \\cdot (3 \\cdot 4) = 96$ <br><br>
            Allgemein gilt: <br><br>
            $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c) = a \\cdot b \\cdot c$ <br><br>
            Dies gilt bei der Division wiederum nicht. <br><br>
            <b>Distributivität</b>: Die Multiplikation kann über eine Addition und über eine Subtraktion verteilt werden, solange sie in Klammern steht. <br><br>
            $8 \\cdot (4 + 3) = 8 \\cdot 4 + 8 \\cdot 3$ <br><br> 
            $= 32 + 24 = 56$ <br><br>
            Allgemein gilt: <br><br>
            $a \\cdot (b + c) = a \\cdot b + a \\cdot c$ <br><br>
            Dies gilt wieder nicht bei der Distribution: <br><br>
            $a : (b + c) \\neq a : b + a : c$
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