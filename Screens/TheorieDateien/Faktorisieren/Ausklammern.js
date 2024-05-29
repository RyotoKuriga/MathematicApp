import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function Ausklammern() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Mehrfaches Ausklammern')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Ausklammern
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>Ausklammern ist ein nützliches Mittel um Gleichungen zu vereinfachen. Ausklammern basiert auf dem Distributivgesetz, welches folgendes besagt: <br><br>
            $a \\cdot (b + c) = a \\cdot b + a \\cdot c$ <br><br>
            Die einzelnen Glieder werden hier jeweils ausmultipliziert und dann addiert. Wenn man ausklammert, zieht man einen Faktor aus mehreren Termen heraus. Hier ein Beispiel: <br><br>
            $3x + 6y = 3 \\cdot (x + 2y)$ <br><br>
            Wir haben hier 3 ausgeklammert. Dies ist ein vereinfachter Ausdruck. <br><br>
            Man kann ebenso Variabeln ausklammern: <br><br>
            $360abc + 180ac = 180ac \\cdot (2b + 1)$ <br><br>
            Wichtig ist auch, dass hier die 1 in der Klammer nicht vergessen wird. Würde sie fehlen, dann hätte man falsch ausgeklammert, denn um zu überprüfen, ob in einem Term richtig ausgeklammert wurde, kann man ihn wieder ausmultiplizieren und dann sollte der Wert wieder gleich dem ursprünglichem sein. <br><br>
            Man kann auch mehr als nur zwei Glieder ausklammern: <br><br>
            $35qd + 25q + 40d$ <br><br>
            $= 5 \\cdot (7qd + 5q + 8d)$ <br><br>
            Hier wurde 5 ausgeklammert, die Variabeln konnten nicht ausgeklammert werden, da sie nicht in allen Gliedern enthalten sind. Es kann nur augeklammert werden, was in allen Gliedern enthalten ist. <br><br>
            Es ist auch möglich -1 auszuklammern, dies ist dann insbesondere bei manchen Brüchen nützlich, um sie kürzen zu können. <br><br>
            $a - b = -1 \\cdot (b - a)$ 
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