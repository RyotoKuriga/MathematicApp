import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';


export function LineareFunktionen2() {
  const navigation = useNavigation();

  const nextPage = () => {
    return navigation.navigate('Lineare Funktionen III');
  };

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const math = `\\huge \\textcolor{${activeColors.text}}{ `;
  const mathSmall = `\\large \\textcolor{${activeColors.text}}{ `;
  const mathMid = `\\Large \\textcolor{${activeColors.text}}{ `;

  const stylesTheorie = useStyles();

  return (
    <SafeAreaView style={{backgroundColor: theme.mode === 'dark' ? activeColors.background : 'white'}}>
      <ScrollView>
        <View style={[stylesTheorie.container, {backgroundColor: theme.mode === 'dark' ? activeColors.background : 'white'}]}>
          <Text style={stylesTheorie.header}>
            Lineare Funktionen II
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Kennt man die Koordinaten zweier Punkte, lässt sich die Geradengleichung der Geraden bestimmen, welche durch beide Punkte geht. Man geht hier mit einem Algorithmus vor.
            </Text>
          </View>

          <View style={stylesTheorie.subHeaderContainer}>
            <Text style={stylesTheorie.subHeader}>
              1. m bestimmen
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Man kennt zwei Punkte mit den Koordinaten P1(-2; 2) und P2(4; -2). Um den Lösungsansatz verstehen zu können, zeichnet man die Punkte in ein Koordinatensystem ein.
            </Text>
          </View>

          <View style={stylesTheorie.imageContainer}>
            <Image source={theme.mode === 'dark' ? require('./img/LineareFunktionen4-dark.png') : require('./img/LineareFunktionen4.png')} style={{ width: 290, height: 290 }} />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Man sucht die Funktion zur pinken Geraden p(x) = mx + q. m ist die Steigung, das heißt, wie viel die Gerade nach unten geht, wenn sie eine bestimmte Distanz zurücklegt. Man kennt a und b und die Steigung ist als <MathView math={`\\large \\frac{b}{a}`} /> definiert. Es ist also sehr einfach, die Steigung zu berechnen. Die Distanz a ist die x-Koordinate vom Punkt P2 minus der x-Koordinate vom Punkt P1:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} a = x_2 - x_1 = \\Delta x}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} a = 4 - (-2) = 4 + 2 = 6}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Analog ist die Distanz b gleich der y-Koordinate vom Punkt P2 minus der y-Koordinate vom Punkt P1.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} b = y_2 - y_1 = \\Delta y}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} b = (-2) - 2 = -4}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Das Dreieckssymbol bezeichnen wir als Delta. Es gibt an, dass es sich um eine Differenz handelt. Demnach wäre Delta-y gleich y2 - y1. Um nun m auszurechnen, teilt man Delta-y bzw. die Strecke b durch Delta-x bzw. die Strecke a.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} m = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{b}{a} = \\dfrac{-4}{6} = -\\dfrac{2}{3}}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Da man nun das m kennt, kann man nun q ausrechnen. Um q auszurechnen, setzt man die Koordinaten eines Punktes in die Funktionsgleichung ein. Man setzt den x-Wert des Punktes in x ein und den y-Wert des Punktes in y. Welchen Punkt man einsetzt, ist irrelevant.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} y = -\\dfrac{2}{3} x + q \\quad \\text{(P}_1\\text{ einsetzen)}}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} 2 = -\\dfrac{2}{3} \\cdot -2 + q}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} 2 = \\dfrac{4}{3} + q \\quad -\\dfrac{4}{3}}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} 2 - \\dfrac{4}{3} = q \\quad \\text{Erweitern}}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{6}{3} - \\dfrac{4}{3} = q \\quad \\text{Vereinfachen}}`}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\dfrac{2}{3} = q}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Funktionsgleichung lautet demnach:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} f(x) = -\\dfrac{2}{3} x + \\dfrac{2}{3}}`}
            />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Pressable onPress={nextPage}>
              <Text style={stylesTheorie.link}>Nächstes Kapitel!</Text>
            </Pressable>
          </View>

          <View style={stylesTheorie.space}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
