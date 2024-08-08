import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function LineareFunktionen3() {
  const navigation = useNavigation();

  const nextPage = () => {
    return navigation.navigate('Lineare Funktionen III');
  };

  const math = '\\huge';
  const mathSmall = '\\large';
  const mathMid = '\\large';

  return (
    <ScrollView>
      <View style={stylesTheorie.container}>
        <Text style={stylesTheorie.header}>
          Lineare Funktionen III
        </Text>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Es können sich zwei Funktionen schneiden. Um den Schnittpunkt zu berechnen, muss man die Eigenschaft nutzen, dass an diesem Punkt der x- und der y-Wert der einen Funktion gleich dem x- und y-Wert der anderen Funktion ist. Es gilt also, an dem Punkt, wo sich die Funktionen schneiden:
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x_1 = x_2 = x`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} \\text{ und } y_1 = y_2 = y`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Kennt man nun zwei Funktionen, kann man anhand ihrer Funktionsgleichungen berechnen, wo sie sich schneiden. Hierbei ist es wichtig, dass es sich nicht um parallele Funktionen handelt, denn diese würden sich nie schneiden. Als Beispiel die Funktionen f(x) = 8x - 5 und g(x) = -2x + 5. Da, wo sich die Funktionen schneiden, ihr y-Wert derselbe ist, kann man die Funktionen gleichsetzen.
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} f(x) = g(x)`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 8x - 5 = -2x + 5`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 10x - 5 = 5`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} 10x = 10`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} x = 1`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Jetzt kennt man den x-Wert des Schnittpunktes. Um nun den y-Wert herauszufinden, setzt man den x-Wert in eine Funktion ein. In welche Funktion man ihn einsetzt, ist egal.
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} f(x) = 8x - 5 \\quad (x = 1)`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} f(x) = 8 \\cdot 1 - 5`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} f(x) = 8 - 5`}
          />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} f(x) = 3`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Der y-Wert des Schnittpunktes beträgt also 3. Der Schnittpunkt liegt folglich bei S(1, 3).
          </Text>
        </View>


        <View style={stylesTheorie.space}></View>
      </View>
    </ScrollView>
  );
}
