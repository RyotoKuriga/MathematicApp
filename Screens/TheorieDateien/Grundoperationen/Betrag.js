import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function Betrag() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Betrag
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Der Betrag eier Zahl ist der absolute Wert einer Zahl, also wie weit die Zahl von der Null entfernt ist. Man schreibt den Betrag, indem man zwei senkrechte Striche um das macht, was man zum Betrag machen will $\\rightarrow |x|$. <br>
            $|5| = 5$ <br><br>
            $|-x|= 5$ <br><br>
            $|23| = 23$ <br><br>
            $|-23| = 23$ <br><br>
            Der Betrag ist sehr simpel. Ist ein negatives Vorzeichen vorhanden, ändert man es zu einem positiven. Ist das Vorzeichen bereits positiv, ändert sich nichts.
            </div>`}      
          />

          <Text style={stylesTheorie.subHeader}>
            Betragsgleichungen lösen
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Um eine Betragsgleichung zu lösen, müssen wir die bestimmte Eigenschaft des Betrags berücksichtigen. Eine Betragsgleichung, die möglich ist, hat immer zwei Lösungen. Die Lösungen für die Betragsgleichung $|x|$ = a sind: <br><br>
            $x_1 = a$ <br><br>
            $x_2 = -a$ <br><br>
            Um nun eine Gleichung zu lösen, isoliert man erst den Betrag auf eine Seite, um dann zwischen den beiden Ergebnissen unterscheiden zu können. Als Beispiel: <br><br>
            $\\dfrac{|3x-2|}{2} = 2 \\qquad \\huge\\vert$ $\\cdot 2$ <br><br>
            $|3x-2| = 4 \\qquad \\huge \\vert$ Betrag auflösen <br><br>
            $(3x_1 - 2) = 4 \\qquad \\huge \\vert$ $+2$ <br><br>
            $3x_1 = 6 \\qquad \\huge \\vert$ $:3$ <br><br>
            $x_1 = 2$ <br><br>
            $-(3x_2 - 2) = 4 \\qquad \\huge \\vert$ $\\cdot (-1)$ <br><br>
            $3x_2 - 2 = -4 \\qquad \\huge \\vert$ $+2$ <br><br>
            $3x_2 = -2 \\qquad \\huge \\vert$ $:3$ <br><br>
            $x_2 = -\\dfrac{2}{3}$ <br><br>
            $\\mathbb{L} =$ {$-\\dfrac{2}{3}, 2$}

            
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