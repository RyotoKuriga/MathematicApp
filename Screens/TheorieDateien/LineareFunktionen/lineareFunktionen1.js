import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function LineareFunktionen1() {
  const navigation = useNavigation();

  const nextPage = () => {
    return navigation.navigate('Lineare Funktionen II');
  };

  const math = '\\huge';
  const mathSmall = '\\large';
  const mathMid = '\\Large';

  return (
    <ScrollView>
      <View style={stylesTheorie.container}>
        <Text style={stylesTheorie.header}>
          Lineare Funktionen I
        </Text>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Eine lineare Funktion hat die Normalform:
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} y = f(x) = mx + q`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            m ist die Steigung der Geraden und q der y-Achsenabschnitt. Ist m positiv, ist die Gerade steigend. Ist m negativ, ist die Gerade fallend. q ist der y-Achsenabschnitt, d.h. dass die y-Achse an diesem Punkt geschnitten wird.
          </Text>
        </View>

        <View style={stylesTheorie.imageContainer}>
          <Image source={require('./img/LineareFunktionen1.png')} style={{ width: 310, height: 1000 }} />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Da q nichts am Steigungswinkel der Funktion verändert, ist jede Gerade zueinander parallel, die dasselbe m hat. So ist z.B. die Gerade f(x) = 3x - 2 parallel zur Geraden g(x) = 3x + 4. Ist m = 0, dann ist die Funktion parallel zur y-Achse.
          </Text>
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Eine lineare Funktion in einem Graphen zu erkennen, ist einfach, es muss eine Gerade sein. Eine lineare Funktion anhand der Funktionsgleichung zu erkennen, ist ebenso simpel. Eine lineare Wertetabelle auch. Um sagen zu können, ob es sich um eine lineare Funktion handelt, benötigt man drei Punkte. Werte in der Wertetabelle sind schlussendlich nichts anderes als Punkte auf dem Graphen.
          </Text>
        </View>

        <View style={stylesTheorie.imageContainer}>
          <Image source={require('./img/WertetabelleLineareFunktion1.png')} style={{ width: 150, height: 175 }} />
        </View>

        <View style={{ height: 20 }}></View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Man sieht sich nun an, wie groß die Abstände zwischen den einzelnen Funktionswerten sind. Zwischen 2 und 6 besteht ein Abstand von 4, zwischen 6 und 10 auch wieder. Es handelt sich also um eine lineare Funktion. m ist dann übrigens ebenso 4 und q = 2. Wie man mathematisch darauf kommt, steht im nächsten Kapitel. So sieht die Funktion in einem Koordinatensystem aufgezeichnet aus:
          </Text>
        </View>

        <View style={stylesTheorie.imageContainer}>
          <Image source={require('./img/LineareFunktionen3.png')} style={{ width: 250, height: 450 }} />
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid}`}
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
  );
}
