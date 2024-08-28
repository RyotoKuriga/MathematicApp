import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';
import { useContext } from 'react';
import { ThemeContext } from '../../../Context/themeContext';
import { colors } from '../../../theme';
import useStyles from '../StylesTheorie';

export function Mengenoperationen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  

  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const math = `\\huge \\textcolor{${activeColors.text}}{ `;
  const mathSmall = `\\large \\textcolor{${activeColors.text}}{ `;
  const mathMid = `\\Large \\textcolor{${activeColors.text}}{ `;
  const navigation = useNavigation();

  const stylesTheorie = useStyles();

  const nextPage = () => {
    return navigation.navigate('');
  };
 
  return (
    <SafeAreaView style={{backgroundColor: activeColors.background}}>
      <ScrollView >
        <View style={[stylesTheorie.container, {backgroundColor: activeColors.background}]}>
          <Text style={stylesTheorie.header}>
            Mengenoperationen
          </Text>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Allgemeines
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Ähnlich wie mit Zahlen kann man auch mit Mengen operieren. Die drei wichtigsten Mengenoperationen sind folgende:
            </Text>
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Schnittmenge <MathView math={`${mathMid} \\bigcap}`} />
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bildet man eine Schnittmenge, so kreiert man eine neue Menge, die aus allen gemeinsamen Elementen der beiden geschnittenen Mengen besteht. Das heisst, dass alle Elemente, die in A und in B enthalten sind, in der Schnittmenge auch enthalten sind. Als Beispiel:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathMid} \\mathbb{A} = \\{1, 6, 12, 16, 18\\}}`} />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathMid} \\mathbb{B} = \\{5, 6, 9, 12, 18\\}}`} />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Nun bildet man die Menge C, {"\n"} welche der Menge A {"\n"}geschnitten mit B entspricht.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathMid} \\mathbb{C} = \\mathbb{A} \\cap \\mathbb{B} = \\{6, 12, 18\\}}`} />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathMid} \\mathbb{C} = \\{6, 12, 18\\}}`} />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Schnittmengenoperation ist kommutativ. A geschnitten mit B ist dasselbe wie B geschnitten mit A.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${math} \\mathbb{A} \\cap \\mathbb{B} = \\mathbb{B} \\cap \\mathbb{A}}`} />
          </View>

          <View style={stylesTheorie.imageContainer}>
            <Image source={theme.mode === 'dark' ? require('./img/Schnittmenge-dark.png') : require('./img/Schnittmenge.png')} style={{ width: 330, height: 250 }} />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Vereinigungsmenge <MathView math={`${mathMid} \\bigcup}`} />
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bildet man eine Vereinigungsmenge, so kreiert man eine neue Menge, die aus allen Elementen der beiden vereinigten Mengen besteht. Als Beispiel:
            </Text>
          </View>

          <View style={{ alignItems: 'flex-start' }}>
            <View style={stylesTheorie.mathExpression}>
              <MathView math={`${mathMid} \\mathbb{A} = \\{-2, -1, 0\\}}`} />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView math={`${mathMid} \\mathbb{B} = \\{1, 2\\}}`} />
            </View>
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Nun vereinigt man die Mengen zu einer neuen Menge, die man jetzt beispielsweise C nennt.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathSmall} \\mathbb{C} = \\mathbb{A} \\cup \\mathbb{B} = \\{-2, -1, 0, 1, 2\\}}`} />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathSmall} \\mathbb{C} = \\{-2, -1, 0, 1, 2\\}}`} />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wenn man zwei Mengen, die dasselbe Element beinhalten, vereinigt, dann ist das Element nicht doppelt in der vereinigten Menge, da sich alle Elemente in einer Menge voneinander unterscheiden müssen.
            </Text>
          </View>

          <View style={{ alignItems: 'flex-start' }}>
            <View style={stylesTheorie.mathExpression}>
              <MathView math={`${mathMid} \\mathbb{A} = \\{1, 2\\}}`} />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView math={`${mathMid} \\mathbb{B} = \\{2, 3\\}}`} />
            </View>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathMid} \\mathbb{A} \\cup \\mathbb{B} = \\{1, 2, 3\\}}`} />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Und nicht:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathMid} \\mathbb{A} \\cup \\mathbb{B} = \\{1, 2, 2, 3\\}}`} />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Vereinigungsmengenoperation ist wie die Schnittmengenoperation kommutativ. A vereinigt mit B ist dasselbe wie B vereinigt mit A.
            </Text>
          </View>

          <View style={stylesTheorie.imageContainer}>
            <Image source={theme.mode === 'dark' ? require('./img/Vereinigungsmenge-dark.png') : require('./img/Vereinigungsmenge.png')} style={{ width: 330, height: 250 }} />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Differenzmenge <MathView math={`${mathMid} \\setminus}`} />
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bildet man eine Differenzmenge aus zwei Mengen, dann bildet man eine Menge, welche alle Elemente der ersten Menge enthält, ausser die, die in der zweiten Menge sind.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${math} \\mathbb{A} = \\{1, 2, 3, 4, 5\\}}`} />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${math} \\mathbb{B} = \\{2, 4\\}}`} />
          </View>

          <View style={stylesTheorie.containerMid}>
            <Text style={stylesTheorie.textMid}>
              Nun bildet man die {"\n"} Differenzmenge. {"\n"} Man spricht: A ohne B
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${mathMid} \\mathbb{C} = \\mathbb{A} \\setminus \\mathbb{B} = \\{1, 3, 5\\}}`} />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Alle Elemente, die in Menge B enthalten sind, dürfen nach dieser Operation nicht mehr in der Endmenge enthalten sein.
              Die Differenzmengenoperation ist keine kommutative Operation, d.h. A ohne B ist nicht dasselbe wie B ohne A.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView math={`${math} \\mathbb{A} \\setminus \\mathbb{B} \\neq \\mathbb{B} \\setminus \\mathbb{A}}`} />
          </View>

          <View style={stylesTheorie.imageContainer}>
            <Image source={theme.mode === 'dark' ? require('./img/Differenzmenge-dark.png') : require('./img/Differenzmenge.png')} style={{ width: 330, height: 250 }} />
          </View>

          <View style={stylesTheorie.space}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
