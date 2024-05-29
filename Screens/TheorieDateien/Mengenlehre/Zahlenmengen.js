import * as React from 'react';
import { View, Text,  SafeAreaView, ScrollView, Image, Pressable } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';


export function Zahlenmengen() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();
  const math = '\\huge'
  const mathSmall= '\\large'
  const mathMid = '\\Large'

  const nextPage = () => {
    return (
      navigation.navigate('Mengenoperationen')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Zahlenmengen
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Zahlenmengen sind Gruppen von Zahlen, die bestimmte Eigenschaften haben. Die wichtigsten Zahlenmengen sind:
            </Text>
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
            Natürliche Zahlen <MathView math={`${math} \\mathbb{N}`}/>
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Die Menge der natürlichen Zahlen, zu der alle positiven ganzen Zahlen gehören:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\mathbb{N} = \\{1, 2, 3, 4, ...\\} `}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Notiert man eine null unterhalb des Mengensymbols N, so gehört 0 auch zu dieser Menge.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\mathbb{N}_0 = \\{1, 2, 3, 4, ...\\} `}
            />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
            Ganze Zahlen <MathView math={`${math} \\mathbb{Z}`}/>
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Die Menge der ganzen Zahlen umfasst alle ganzen Zahlen.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\mathbb{Z} = \\{..., -1, 0, 1, ...\\} `}
            />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Rationale Zahlen <MathView math={`${math} \\mathbb{Q}`}/>
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Die Menge der rationalen Zahlen, bei der jede Zahl als Bruch dargestellt werden kann.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid} \\mathbb{Q} = \\{..., -\\dfrac{4}{3}, 1.25, 6.9, ...\\} `}
            />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Reele Zahlen <MathView math={`${math} \\mathbb{R}`}/>
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Menge der reellen Zahlen, in welcher auch irrationale (d.h. endlose) Zahlen dargestellt werden können:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathSmall} \\mathbb{R} = \\{...,-2, 1.2,  \\pi, \\sqrt{2}, \\sqrt{3}, e, ...\\} `}
            />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Teilmengen
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wichtig ist, dass wenn eine Zahl zu einer Zahlenmenge gehört, sie auch Teil aller übergeordneten Zahlenmengen ist.
              Es gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\mathbb{N} \\subset \\mathbb{N}_0 \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R} `}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            <MathView math={`${mathMid} N`}/> ist Teilmenge von <MathView math={`${mathMid} N_0`}/>, <MathView math={`${mathMid} N_0`}/> Teilmenge von <MathView math={`${mathMid} Z`}/>, etc.. Im Klartext bedeutet das, dass z.B. die Zahl 5 sowohl Element von <MathView math={`${mathMid} N`}/> als auch von allen anderen Zahlenmengen ist.
            </Text>
          </View>

        

          <View style={stylesTheorie.imageContainer}>
            <Image source={require('./img/circles.png')} style={{width: 350, height: 350}}/>
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Pressable onPress={nextPage}>
              <Text style={stylesTheorie.link}>Nächstes Kapitel!</Text>
            </Pressable>
          </View>

          <View style={stylesTheorie.space}>

          </View>

          

        </View>
      </ScrollView>
    </SafeAreaView>
    

  );

}



