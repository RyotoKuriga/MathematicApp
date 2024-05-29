import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function LineareFunktionen3() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Lineare Funktionen III')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Lineare Funktionen III
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Es können sich zwei Funktionen schneiden. Um den Schnittpunkt zu berechnen, muss man die Eigenschaft nutzen, dass an diesem Punkt der $x$- und der $y$-Wert der einen Funktion, gleich dem $x$- und $y$-Wert der anderen Funktion ist. Es gilt also, an dem Punkt, wo sich die Funktionen schneiden: <br><br>
            $x_1 = x_2 = x$ und $y_1 = y_2 = y$ <br><br>
            Kennt man nun zwei Funktionen, kann man anhand ihrer Funktionsgleichungen berechnen, wo sie sich schneiden. Hierbei ist es wichtig, dass es sich nicht um parallele Funktionen handelt, denn diese würden sich nie schneiden. Als Beispiel die Funktionen $f(x) = 8x - 5$ und $g(x) = -2x + 5$ Da, da wo sich die Funktionen schneiden, ihr y-Wert der selbe ist, kann man die Funktionen gleichsetzen.<br><br>
            $f(x) = g(x)$ <br><br>
            $8x - 5 = -2x + 5 \\quad \\huge \\vert$$+5; +2x$ <br><br>
            $10x = 5 \\quad \\huge \\vert$$:2$  <br><br>
            $x = \\dfrac{1}{2}$ <br><br>
            Jetzt kennt man den $x$-Wert. Um nun den $y$-Wert herauszufinden, setzt man den x-Wert in eine Funktion ein. In welche man ihn einsetzt, ist egal. <br><br>
            $f(x) = 8x - 5 \\quad \\huge \\vert$$x$ einsetzten <br><br>
            $f(x) = 8 \\cdot \\dfrac{1}{2} -5 \\quad \\huge \\vert$Vereinfachen <br><br>
            $f(x) = -1$ <br><br>
            Der $y$-Wert des Schnittpunktes beträgt also -1. Der Schnittpunkt liegt folgend bei $S(\\frac{1}{2}; -1)$.

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