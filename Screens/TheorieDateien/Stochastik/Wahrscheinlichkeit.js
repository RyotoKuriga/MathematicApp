import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function Wahrscheinlichkeit() {
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
            Wahrscheinlichkeit P
          </Text>


          <Text style={stylesTheorie.subHeader}>
            Begriffe
          </Text>
          

          <MathJax
            html={`<div style='${divStyle}'>
            <b>Zufallsexperiment</b> <br><br>
            Ein Zufallsexperiment muss mindestens zwei Ergebnisse besitzten, denn gibt es nur einen Ausgang, ist dieser nicht zufällig. Ausserdem ist ein Zufallsexperiment beliebig oft durchführbar. Ein Zufallsexperiment benötigt ein Zufallsgerät, z.B. das Münzwerfen oder Würfeln. <br><br>
            <b>Laplace-Experiment</b> <br><br>
            Ein Zufallsexperiment, bei dem alle Ausgänge gleich wahrscheinlich sind. <br><br>
            <b>Experimentsstufen</b> <br><br>
            Je öfters das Experiment durchgeführt wird, desto mehr Stufen hat es. Würfelt man einmal, so hat man ein einstufiges Experiment, würfelt man zehnml, so handelt es sich um ein zehnstufiges Zufallsexperiment. <br><br>
            <b>Baumdiagramm</b> <br><br>
            Um ein Zufallsexperiment grafisch darzustellen, benutzt man das Baumdiagramm. 
            </div>`}      
          />

          <View style={stylesTheorie.imageContainer}> 
            <Image source={require('./img/Baumdiagramm.png')} style={{width: 335, height: 500}}/>
          </View>

          <MathJax
            html={`<div style='${divStyle}'>
            Ein Baumdiagramm besteht aus Ästen und Knoten. Die Knoten symbolisieren ein Ereignis und die Äste einen Pfad. <br><br>
            <b>Ergebnismenge $\\Omega$ </b> <br><br>
            Die Ergebnismenge oder auch der Ergebnisraum ist die Menge aller möglichen Ausgänge eines Zufallsexperimentes. Bei einem Würfel wäre die Erbenismenge $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$. <br><br>
            <b>Ereignismenge $\\mathbb{E}$</b> <br><br>
            Die Ereignismenge bzw. das Ereignis ist eine Teilmenge der Ergebnismenge, $\\mathbb{E} \\subset \\Omega$. Die Ereignismenge, ist die Menge von einem bestimmten Ereignis, z.B. dass eine ungerade Zahl gewürfelt wird. Die Ereignismenge wäre dann $\\mathbb{E} = \\{1, 3, 5\\}$. Die Gegenereignismenge bzw. das Gegenereignis wird mit einem Strich über dem E geschrieben ($\\overline{E}$) und ist auch eine Teilmenge der Ergebnismenge, doch beinhaltet alle Elemente, die nicht in der Ereignismenge sind. Das Gegenereignis davon, dass eine ungerade Zahl gewürfelt wird, ist das Ereignis, dass eine gerade Zahl gewürfelt wird. Also $\\overline{E} = {2, 4, 6}$<br><br>
            <b>Wahrscheinlichkeit eines Ereignisses</b>
            Die Wahrscheinlicheit eines Ereignisses wird folgendermassen notiert: $P(\\mathbb{E})$. Hier wird die Wahrscheinlichkeit des Ergeignisses bzw. der Ereignismenge bestimmt. Die Gegenwahrscheinlichekeit ($P(\\overline{\\mathbb{E}})$) ist die Wahrscheinlichkeit des Gegenereignisses, also die Wahrscheinlichkeit, dass das Ereignis $\\mathbb{E}$ nicht eintritt. <br><br>
            </div>`}      
          />

          <Text style={stylesTheorie.subHeader}>
            Beispielrechnung
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>
            Ein Glücksrad ist in 24 gleichgrosse Sektoren unterteil, die von 1 bis 24 nummeriert sind. Das Rad einmal gedreht. Wie hoch ist die Wahrscheinlichkeit, dass man eine Primzahl würfelt? <br><br>
            Es handelt sich um ein Laplace-Experiment, da jedes Ergebnis gleich wahrscheinlich ist. Um dieses Problem zu lösen, muss man erstmals feststellen, welche Elemente in Ergebnismenge $\\Omega$ enthalten sind. Alle ganzen Zahlen von 1 bis 24 sind Elemente der Ergebnismenge.<br><br>
            $\\Omega = \\{n \\in \\mathbb{N} | 1 \\leq n \\leq 24\\}$ <br><br>
            Nun sucht man die Primzahlen in diesem Bereich und schreibt sie in die Ereignismenge. <br><br>
            $\\mathbb{E} = \\{2, 3, 5, 7, 11, 13, 17, 19, 23\\}$ <br><br>
            Um jetzt die Wahrscheinlichkeit einer Primzahl als Ergebnis zu berechnen, teilt man die Mächtigkeit (d.h. die Anzahl der Elemente) der Ereignismenge durch die Mächtigkeit der Ergebnismenge. <br><br>
            $\\dfrac{|\\mathbb{E}|}{|\\Omega|} = \\dfrac{9}{24} = 27.5\\%$ <br><br>
            Die Wahrscheinlichkeit, dass der Zeiger eines Glücksrades mit 24 Feldern auf einer Primzahl landet, liegt bei 27.5%. Das Gegenereignis, also dass der Zeiger bei einer nicht-Primzahl landet, liegt bei der Gegenwahrscheinlichkeit, also bei $1 - 0.375 = 0.625 = 62.5\\%.$
            </div>`}      
          />


          

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}