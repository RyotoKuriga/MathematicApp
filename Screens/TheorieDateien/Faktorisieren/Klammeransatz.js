import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function Klammeransatz() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Binomische Formeln')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Klammeransatz
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>Der Klammeransatz ist nützlich bei Trinomen, also dreigliedrigen Termen. Das erste Glied muss ein quadratisches Glied sein. Ein Trinom wäre z.B.: <br><br>
            $x^2 + 5x + 6$ <br><br>
            Ausklammern kann man bei diesem Trinom nicht direkt, jedoch lässt sich ein Klammeransatz bilden, das bedeutet, dass man den Trinom mittels einer Multiplikation von zwei Klammern darstellt. Um den Klammeransatz zu bilden, sucht man erst die Primfaktoren, in die sich das letzte Glied zerlegen lassen kann. Die Primfaktoren von 6 sind 1, 2, 3 und 6. Nun sucht man einen Weg, dass diese Primfaktoren addiert den zweiten Koeffizienten ergeben, hier also 5. <br><br>
            $1 + 2 = 3 \\neq 5$ <br><br>
            $1 + 3 = 4 \\neq 5$ <br><br>
            $1 + 6 = 7 \\neq 5$ <br><br>
            $\\underline{\\underline{2 + 3 = 5}}$ <br><br>
            Nun hat man die Zahlen gefunden, die in die Klammern eingesetzt werden müssen. <br><br>
            $(x + 2)\\cdot(x + 3)$ <br><br>
            Multipliziert man diesen Klammeransatz aus, kommt man wieder auf den ursprünglichen Term, das bedeutet, man hat richtig ausgeklammert. Die allgemeine Form sieht dann folgendermassen aus: <br><br>
            $x^2 + ax + c = (x + m)(x + n)$ <br><br>
            Wichtig hierbei ist es wie immer die Vorzeichen zu beachten. $x^2 - 5x + 6$ augeklammert ist nämlich $(x - 2) \\cdot (x - 3)$. Welches Vorzeichen, wo gesetzt wird, kann durch ausprobieren herausgefunden werden. 
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