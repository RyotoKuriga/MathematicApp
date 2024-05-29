import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function LineareFunktionen2() {
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
            Lineare Funktionen II
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Kennt man die Koordinaten zweier Punkte, lässt sich die Geradengleichung von der Geraden bestimmen, welche durch beide Punkte geht. Man geht hier mit einem Algorithmus vor. <br><br> 
            <b> 1. $\\textbf{m}$ bestimmen</b> <br><br>
            Man kennt zwei Punkte mit den Koordinaten $P_1(-2; 2)$ und $P_2(4; -2)$. Um den Lösungsansatz verstehen zu können, zeichnet man die Punkte in ein Koordinatensystem ein.
            </div>`}      
          />

          {/* <View style={stylesTheorie.imageContainer}> 
            <Image source={require('./img/LineareFunktionen4.png')} style={{width: 335, height: 335}}/>
            </View> */}

          <MathJax
            html={`<div style='${divStyle}'> Man sucht die Funktion zur pinken Geraden $p(x) = mx + q$. $m$ ist die Steigung in Prozent, d.h. wieviel die Gerade nach unten geht, wenn sie eine bestimmte Distanz zurücklegt. Man kennt $a$ und $b$ und die Steigung ist als $\\frac{b}{a}$ definiert, es ist also sehr einfach die Steigung zu berechnen. Die Distanz $a$ ist die x-Koordinate vom Punkt $P_2$ minus der x-Koordinate vom Punkt $P_1$: <br><br>
            $a =  x_2 - x_1 = \\Delta x$<br><br>
            $a = 4 - (-2) = 4 + 2 = 6$ <br><br>
            Analog ist die Distanz $b$, gleich der y-Koordinaten vom Punkt $P_2$ minus der vom Punkt $P_1$. <br><br>
            $b = y_2 - y_1 = \\Delta y$ <br><br>
            $b = (-2) - 2 = -4$ <br><br>
            Das Dreieckssymbol bezeichnen wir als delta. Es gibt an, dass es sich um eine Differenz handelt. Demnach wäre $\\Delta u$ gleich $u_2 - u_1$. Um nun $m$ auszurechnen nehmen teilt man $\\Delta y$ bzw. die Strecke $b$ durch $\\Delta x$ bzw. der Strecke $a$. <br><br>
            $m = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{b}{a} = \\dfrac{-4}{6}  = -\\dfrac{2}{3}$ <br><br>
            Da man nun das m kennt, kann man nun $q$ ausrechnen. Um $q$ auszurechnen setzt man die Koordinaten eines Punktes in die Funktionsgleichung ein. Welchen Punkt man einsetzt, ist irrellevant. <br><br>
            $y = - \\dfrac{2}{3} x + q \\qquad \\huge \\vert$ $P_1$ einsetzen. <br><br>
            $2 = -\\dfrac{2}{3} \\cdot -2 + q \\quad \\huge \\vert$Vereinfachen <br><br>
            $2 = \\dfrac{4}{3} + q \\quad \\huge \\vert$$ -\\dfrac{4}{3}$ <br><br>
            $2 - \\dfrac{4}{3} = q \\quad \\huge \\vert$ Erweitern <br><br>
            $\\dfrac{6}{3} - \\dfrac{4}{3} = q \\quad \\huge \\vert$ Vereinfachen <br><br>
            $\\dfrac{2}{3} = q$ <br><br>
            Die Funktionsgleichung lautet demnach: <br><br>
            $f(x) = -\\dfrac{2}{3} x + \\dfrac{2}{3}$

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