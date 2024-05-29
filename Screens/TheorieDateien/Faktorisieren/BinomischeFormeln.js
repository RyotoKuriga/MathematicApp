import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function BinomischeFormeln() {
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
            Binomische Formeln
          </Text>
          
          <Text style={stylesTheorie.subHeader}>
            Erste Binomische Formel
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Die erste Binomische Formel lautet wiefolgt: <br><br>
            $(a + b)^2 = a^2 + 2ab + b^2$ <br><br> 
            Sie kommt zustande, indem man die einzelnen Teile miteinander multipliziert. <br><br>
            $(a + b)^2 = (a + b) \\cdot (a-b)$ <br><br>
            $= a^2 + ab + ab + b^2$ <br><br>
            $= a^2 + 2ab + b^2$ <br><br>
            Setzt man Werte ein, sieht es dann so aus: <br><br>
            $(8x + 3)^2 = (8x + 3)(8x + 3)$ <br><br>
            $= (8x)^2 + 2 \\cdot 8x \\cdot 3 + 3^2$ <br><br>
            $= 64x^2 + 48x + 9$ 
            </div>`}      
          />

          <Text style={stylesTheorie.subHeader}>
            Zweite Binomische Formel
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Die zweite Binomische Formel lautet wiefolgt: <br><br>
            $(a - b)^2 = a^2 - 2ab + b^2$ <br><br>
            Sie kommt wie die erste Binomische Formel durch ausmultiplizieren zustande. <br><br>
            $(a - b)^2 = (a - b) \\cdot (a-b)$ <br><br>
            $= a^2 - ab - ab + b^2$ <br><br>
            $= a^2 - 2ab + b^2$ <br><br>
            Man beachte, dass nur das mittlere Glied negativ ist, denn das Quadrieren lässt auch die negativen Zahlen positiv werden. Setzt man hier einen Wert ein, lässt sich damit auch ebenso einfach rechnen. <br><br>
            $(12 - 5qd)^2 = (12 - 5qd)(12 - 5qd)$ <br><br>
            $= 12^2 - 2 * 12 * 5qd + (-5qd)^2$ <br><br>
            $= 144 - 120qd + 25q^2d^2$
            </div>`}      
          />

          <Text style={stylesTheorie.subHeader}>
            Dritte Binomische Formel
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Die dritte Binomische Formel lautet wiefolgt: <br><br>
            $(a + b) \\cdot (a - b) = a^2 - b^2$ <br><br>
            Sie kommt, wie die vorherigen Binomischen Formeln,  vom ausmultiplizieren. <br><br>
            $(a + b) \\cdot (a - b)$ <br><br>
            $=a^2 - ab + ab - b^2$ <br><br>
            $=a^2 - b^2$ <br><br>
            Das auflösen einer dritten Binomischen Formel sehr also sehr simpel. <br><br>
            $(15abc + 12q) \\cdot (15abc - 12q)$ <br><br>
            $= (15abc)^2 - (12q)^2$ <br><br>
            $= 225a^2b^2c^2 - 144q^2$

            </div>`}      
          />


          

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}