import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';

export function BinomischeFormeln() {
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('')
    );
  }

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const math = `\\huge \\textcolor{${activeColors.text}}{ `;
  const mathSmall = `\\large \\textcolor{${activeColors.text}}{ `;
  const mathMid = `\\Large \\textcolor{${activeColors.text}}{ `;

  const stylesTheorie = useStyles();

  return (
    <SafeAreaView style={{backgroundColor: activeColors.background}}>
      <ScrollView>
        <View style={[stylesTheorie.container, {backgroundColor: activeColors.background}]}>
          <Text style={stylesTheorie.header}>
            Binomische Formeln
          </Text>
          
          <Text style={stylesTheorie.subHeader}>
            Erste Binomische Formel
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die erste Binomische Formel lautet wie folgt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(a + b)^2 = a^2 + 2ab + b^2}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Sie kommt zustande, indem man die einzelnen Teile miteinander multipliziert.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(a + b)^2 = (a + b) \\cdot (a + b)}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= a^2 + ab + ab + b^2}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= a^2 + 2ab + b^2}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Setzt man Werte ein, sieht es dann so aus:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(8x + 3)^2 = (8x + 3)(8x + 3)}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= (8x)^2 + 2 \\cdot 8x \\cdot 3 + 3^2}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= 64x^2 + 48x + 9}`}
            />
          </View>

          <Text style={stylesTheorie.subHeader}>
            Zweite Binomische Formel
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die zweite Binomische Formel lautet wie folgt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(a - b)^2 = a^2 - 2ab + b^2}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Sie kommt wie die erste Binomische Formel durch Ausmultiplizieren zustande.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(a - b)^2 = (a - b) \\cdot (a - b)}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= a^2 - ab - ab + b^2}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= a^2 - 2ab + b^2}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Man beachte, dass nur das mittlere Glied negativ ist, denn das Quadrieren lässt auch die negativen Zahlen positiv werden. Setzt man hier einen Wert ein, lässt sich damit auch ebenso einfach rechnen.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(12 - 5qd)^2} `}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= (12 - 5qd)(12 - 5qd)}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= 12^2 - 2 \\cdot 12 \\cdot 5qd + (-5qd)^2}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= 144 - 120qd + 25q^2d^2}`}
            />
          </View>

          <Text style={stylesTheorie.subHeader}>
            Dritte Binomische Formel
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die dritte Binomische Formel lautet wie folgt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(a + b) \\cdot (a - b) = a^2 - b^2}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Sie kommt, wie die vorherigen Binomischen Formeln, vom Ausmultiplizieren.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(a + b) \\cdot (a - b)}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}=a^2 - ab + ab - b^2}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}=a^2 - b^2}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Das Auflösen einer dritten Binomischen Formel ist also sehr simpel.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}(15abc + 12q) \\cdot (15abc - 12q)}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= (15abc)^2 - (12q)^2}`}
            />
          </View>

          <View style={{height: 20}}></View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${mathMid}= 225a^2b^2c^2 - 144q^2}`}
            />
          </View>

          <View style={stylesTheorie.space}>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
