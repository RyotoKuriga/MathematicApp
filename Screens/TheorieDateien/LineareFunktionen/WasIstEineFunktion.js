import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function WasIstEineFunktion() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Lineare Funktionen I')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Was ist eine Funktion?
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Eine Funktion ist eine Zuordnung. Man ordnet jedem x ein y zu. Die Dinge, die zugeordnet werden, sind Teil der <b>Definitionsmenge</b>. Die <b>Wertemenge</b> ist die Menge, in welcher alle Zuordnungen liegen. Es gibt verschiedene Wege eine Funktion aufzustellen. Man kann zum Beispiel sagen, dass man jedem x-Wert einen y-Wert zuteilen will, der doppelt so gross ist. Diese Funktion würde man so notieren: <br><br>
            $y = 2x$ <br><br>
            Ebenso kann man aber auch den Funktionswert (hier y) einfach als f(x) bezeichnen. Die Funktion nennt sich dann f und die Variabel von der sie abhängt ist x. <br><br>
            $ y = f(x) = 2x$ <br><br>
            Der Name der Funktion ist irrelevant. Sie könnte auch g(x) oder t(x) heissen. <br><br>
            Man kann nun als Definitionsmenge die Menge $\\mathbb{M} = \\{1, 2, 3, 4, 5\\}$ angeben. Setzt man diese Werte nun in eine Tabelle ergeben sich die einzelnen Funktionswerte. 
            </div>`}      
          />

          {/*
          <View style={stylesTheorie.imageContainer}>
            <Image source={require('Rodion\Screens\TheorieDateien\LineareFunktionen\img\Wertetabelle-2x.png')} style={{width: 150, height: 325}}/>
          </View> */}

          <MathJax
            html={`<div style='${divStyle}'> Solch eine Tabelle nennt man Wertetabelle. Eine andere Darstellungsweise ist mithilfe eines Koordinatensystems. In diesem werden dann die einzelnen x-Werte den y-Werten zugeordet.
            </div>`}      
          />
          {/*
          <View style={stylesTheorie.imageContainer}>
            <Image source={require('./img/Funktion-2x.png')} style={{}}/>
          </View> */}

          <MathJax
            html={`<div style='${divStyle}'> Die Punkte A bis E sind die Funktionswerte die aus der Definitionsmenge $\\mathbb{M}$ entstehen. Die Wertemenge, die entsteht, hat also die Elemente: $\\mathbb{W}$ $=$ {$2, 4, 6, 8, 10$}. <br>
            Meistens sind Funktionen aber für Zahlenmengen definiert. Die Definitionsmenge ist dann $\\mathbb{R}$ und die Wertemenge auch. <br><br>
            Damit es eine Funktion ist, muss gelten, dass es zu jedem x-Wert genau einen y-Wert gibt. Ist ein x-Wert zweideutig, z.B. f(5) = -5 und f(5) = 5 handelt es sich nicht um eine Funktion. Die y-Werte dürfen aber mehrmals vorkommen, zum Beispiel darf f(-2) = 5 sein aber auch f(1) = 5.
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