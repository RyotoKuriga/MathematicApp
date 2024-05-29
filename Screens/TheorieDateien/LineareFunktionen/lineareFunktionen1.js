import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function LineareFunktionen1() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Lineare Funktionen II')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Lineare Funktionen I
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>Eine lineare Funktion hat die Normalform <br><br>
            $y = f(x) = mx + q$ <br><br>
            $m$ ist die Steigung der Geraden und $q$ der y-Achsenabschnitt. Ist m positiv, ist die gerade steigend. Ist m negativ, ist die gerade fallend. $q$ ist der y-Achsenabschnitt, d.h. dass die y-Achse an diesem Punkt geschnitten wird.
            </div>`}      
          />
          {/*
          <View style={stylesTheorie.imageContainer}> 
            <Image source={require('./img/LineareFunktionen1.png')} style={{width: 335, height: 1070}}/>
          </View>
          */}


          {/* <View style={stylesTheorie.imageContainer}> 
            <Image source={require('./img/LineareFunktionen2.png')} style={{width: 335, height: 1060}}/>
        </View> */}

          <MathJax
            html={`<div style='${divStyle}'>$\\qquad$ <br><br>
            Da $q$ nichts am Steigungswinkel der Funktion verändert, ist jede Gerade zueinander parallel, die das selbe $m$ hat. So ist z.B die Gerade $f(x) = 3x - 2$ parallel zur Geraden $g(x) = 3x + 4$. Ist m = 0, dann ist die Funktion parallel zur y-Achse. <br><br>
            Eine lineare Funktion in einem Graphen zu erkennen, ist einfach, es muss eine Gerade sein. Eine lineare Funktion anhand der Funktionsgleichung zu erkennen, ist ebenso simpel. Eine lineare Wertetabelle auch. Um sagen zu können, ob es sich um eine lineare Funktion handelt, benötigt man drei Punkte. Werte in der Wertetabelle sind schlussendlich nichts anderes als Punkte auf dem Graphen.
            </div>`}      
          />

          {/*<View style={stylesTheorie.imageContainer}> 
            <Image source={require('./img/WertetabelleLineareFunktion1.png')} style={{width: '50%', height: 200}}/>
      </View> */}

          {/*<MathJax
            html={`<div style='${divStyle}'>Man sieht sich nun an, wie gross die Abstände zwischen den einzelnen Funktionswerten sind. Zwischen 2 und 6 besteht  ein Abstand von 4, zwischen 6 und 10 auch wieder. Es handelt sich also um eine lineare Funktion. $m$ ist dann übrigens ebenso $4$ und $q = 2$. Wie man mathematisch darauf kommt, steht im nächsten Kapitel.
            </div>`}      
    /> */}
    {/*
          <View style={stylesTheorie.imageContainer}> 
            <Image source={require('./img/LineareFunktionen3.png')} style={{width: 335, height: 560}}/>
  </View> */}

          <MathJax
            html={`<div style='${divStyle}'><br><br>
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