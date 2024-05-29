import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function Doppelbrüche() {
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
            Doppelbrüche
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>Da Brüche nichts anderes als eine andere Schreibweise für eine Division sind, ist dies beim Doppelbruch auch nicht anders. Ein Doppelbruch ist ein Bruch mit einem Bruch als Nenner und einer Bruch als Zähler. Wir können nun diesen Doppelbruch zu einer Division umformen, um ihn auflösen zu können. <br><br>
            $\\dfrac{\\dfrac{2}{15}}{\\dfrac{5}{9}} = \\dfrac{2}{15} : \\dfrac{5}{9} = \\dfrac{2}{15} \\cdot \\dfrac{9}{5} = \\dfrac{18}{75}$ <br><br>
            Um diesen Prozess zu beschleunigen, kann man sich die Regel <b> Aussenglieder über Innenglieder </b> merken. Man multipliziert die äusseren Glieder im Zähler, während man die inneren Glieder im Nenner multipliziert. Das sieht dann folgendermassen aus: <br><br>
            $\\dfrac{\\dfrac{a}{b}}{\\dfrac{c}{d}} = \\dfrac{a \\cdot d}{b \\cdot c}$
            </div>`}      
          />
          

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}