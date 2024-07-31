import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function WasIstEineFunktion() {
  const navigation = useNavigation();

  const nextPage = () => {
    return navigation.navigate('Lineare Funktionen I');
  };

  const math = '\\huge';
  const mathSmall = '\\large';
  const mathMid = '\\Large';

  return (
    <ScrollView>
      <View style={stylesTheorie.container}>
        <Text style={stylesTheorie.header}>
          Was ist eine Funktion?
        </Text>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Eine Funktion ist eine Zuordnung. Man ordnet jedem x ein y zu. Die Dinge, die zugeordnet werden, sind Teil der <Text style={stylesTheorie.marked}>Definitionsmenge</Text>. Die <Text style={stylesTheorie.marked}>Wertemenge</Text> ist die Menge, in welcher alle Zuordnungen liegen. Es gibt verschiedene Wege, eine Funktion aufzustellen. Man kann zum Beispiel sagen, dass man jedem x-Wert einen y-Wert zuteilen will, der doppelt so groß ist. Diese Funktion würde man so notieren:
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} y = 2x`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Ebenso kann man aber auch den Funktionswert (hier y) einfach als f(x) bezeichnen. Die Funktion nennt sich dann f und die Variable, von der sie abhängt, ist x.
          </Text>
        </View>

        <View style={stylesTheorie.mathExpression}>
          <MathView
            math={`${mathMid} y = f(x) = 2x`}
          />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Der Name der Funktion ist irrelevant. Sie könnte auch g(x) oder t(x) heißen.
          </Text>
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Man kann nun als Definitionsmenge die Menge M = {'{'}1, 2, 3, 4, 5{'}'} angeben. Setzt man diese Werte nun in eine Tabelle, ergeben sich die einzelnen Funktionswerte.
          </Text>
        </View>

        <View style={stylesTheorie.imageContainer}>
          <Image source={require('./img/Wertetabelle-2x.png')} style={{ width: 300, height: 320 }} />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Solch eine Tabelle nennt man Wertetabelle. Eine andere Darstellungsweise ist mithilfe eines Koordinatensystems. In diesem werden dann die einzelnen x-Werte den y-Werten zugeordnet.
          </Text>
        </View>

        <View style={stylesTheorie.imageContainer}>
          <Image source={require('./img/Funktion-2x.png')} style={{ width: 300, height: 600 }} />
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Die eingezeichneten Punkte sind die Punkte aus der Definitionsmenge. Die Wertemenge, die entsteht, hat also die Elemente: W = {'{'}2, 4, 6, 8, 10{'}'}. Meistens sind Funktionen aber für Zahlenmengen definiert. Die Definitionsmenge ist dann R {'(die Menge der reellen Zahlen)'} und die Wertemenge auch.
          </Text>
        </View>

        <View style={stylesTheorie.paragraphContainer}>
          <Text style={stylesTheorie.text}>
            Damit es eine Funktion ist, muss gelten, dass es zu jedem x-Wert genau einen y-Wert gibt. Ist ein x-Wert zweideutig, z.B. f(5) = -5 und f(5) = 5, handelt es sich nicht um eine Funktion. Die y-Werte dürfen aber mehrmals vorkommen, zum Beispiel darf f(-2) = 5 sein, aber auch f(1) = 5.
          </Text>
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
