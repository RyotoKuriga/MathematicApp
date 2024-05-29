import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function AdditionUndSubtraktion() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Multiplikation & Division')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Addition und Subtraktion
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>Addition und Subtraktion sind beide lineare Operationen. Subtraktion ist genauer gesagt dasselbe wie Addition, jedoch mit einem negativen Vorzeichen. Addiert man zwei Zahlen, summiert man ihre Werte. Die Zahlen, die man addiert, nennt man <b>Summanden</b>. Das Ergebnis wird als <b>Summe</b> bezeichnet. Bei der Subtraktion bezeichnet man die Zahl, von der man etwas abzieht, als <b>Minuend</b>. Der <b>Subtrahend</b> ist die Zahl, die man von der anderen abzieht und die <b>Differenz</b> ist das Ergebnis.<br><br>
            Summand $+$ Summand $=$ Summe <br><br>
            Minuend $-$ Subtrahend $=$ Differenz <br><br>
            Bei der Addition und Subtraktion gelten folgende Hauptregeln: <br><br>
            <b>Kommutativität</b>: Die Reihenfolge der Operation kann geändert werden, ohne das Ergebnis zu beeinflussen. <br><br>
            $7 + 3 = 3 + 7 = 10$ <br><br>
            Allgemein gilt: <br><br>
            $a + b = b + a$ <br><br>
            Nun ist es wichtig, die Vorzeichen zu beachten. Die Vorzeichen sind ein Teil der Zahl und müssen somit auch mitvertauscht werden. <br><br>
            $7 + (-3) = 7 - 3 = -3 + 7 = 4$ <br><br>
            $7 - 3 = 4 \\neq -4 = 3 - 7$<br><br>
            <b>Assoziativität</b>: Der Klammeraudruck, welcher immer zuerst ausgerechnet wird, kann bei einer Addition von drei oder mehr Zahlen verschoben werden, ohne das Ergebnis zu beeinflussen: <br><br>
            $(7 + 3) + 10 = 7 + (3 + 10) = 20$ <br><br>
            Allgemein gilt: <br><br>
            $(a + b) + c = a + (b + c)$ <br><br>
            $ = a + b + c$ <br><br>
            Hier ist auch das Vorzeichen wichtig. Steht ein Minus vor der Klammer, bedeutet das, dass die gesamte Klammer von der vorherigen Zahl abgezogen wird und nicht nur der erste Wert. Daraus folgt dann: <br><br>
            $7 - (3 + 10) = 7 - 3 - 10$ <br><br>
            $= 7 - 13 = -6$ <br><br>
            Allgemein gilt: <br><br>
            $a - (b + c) = a - b - c$ <br><br>
            Die Vorzeichen in der Klammer wechseln ihren Wert.
            
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