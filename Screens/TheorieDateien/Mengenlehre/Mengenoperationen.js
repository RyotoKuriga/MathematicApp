import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';

export function Mengenoperationen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const navigation = useNavigation();
  const math = '\\huge'
  const mathSmall= '\\large'
  const mathMid = '\\Large'

  

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
            Mengenoperationen
          </Text>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Ähnlich wie mit Zahlen, kann man auch mit Mengen operieren. Die drei wichtigstens Mengenoperationen sind folgende:
            </Text>
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
            Schnittmenge <MathView math={`${mathMid} \\bigcap`}/>
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Bildet man eine Schnittmenge, so kreiert man eine neue Menge, die aus allen gemeinsamen Elementen der beiden geschnittenen Mengen besteht. Das heisst, dass alle Elemente, die in A und in B enthalten sind, in der Schnittmenge auch enthalten sind. Als Beispiel:
            </Text>
          </View>
          

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              Nun bildet man die Menge C, welche die Menge A geschitten mit B entspricht.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid}\\mathbb{C} = \\mathbb{A} \\cap \\mathbb{B} = \\{6, 12, 18\\}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid}\\mathbb{C} = \\{6, 12, 18\\}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Die Schnittmengenoperation ist kommutativ. A geschnitten mit B ist das selbe wie B geschnitten mit A.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${math}\\mathbb{A} \\cap \\mathbb{B} = \\mathbb{B} \\cap \\mathbb{A}`}
              />
          </View>

          <View style={stylesTheorie.imageContainer}>
            <Image source={require('./img/Schnittmenge.png')} style={{width: windowWidth, height: windowHeight/3}}/>
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Vereinigungsmenge <MathView math={`${mathMid} \\bigcup`}/>
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bildet man eine Vereinigungs-menge, so kreiert man eine neue Menge, die aus allen Elementen der beiden vereinigten Mengen besteht. Als Beispiel:            
            </Text>
          </View>

          <View style={{alignItems: 'flex-start'}}>
            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\mathbb{A} = \\{-2, -1, 0\\}`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\mathbb{B} = \\{ 1, 2\\}`}
              />
            </View>
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              Nun vereinigt man die Mengen zu einer neuen Menge, die man jetzt beispielsweise C nennt.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathSmall} \\mathbb{C} = \\mathbb{A} \\cup \\mathbb{B} = \\{-2, -1, 0, 1, 2\\}`}
              />
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathSmall} \\mathbb{C} = \\{-2, -1, 0, 1, 2\\}`}
              />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Wenn zwei Mengen, die das selbe Element beinhalten, vereinigt, dann ist das Element nicht doppelt in der vereinigten Menge, da sich alle Elemente in einer Menge voneinander unterscheiden müssen.          
            </Text>
          </View>

          <View style={{alignItems: 'flex-start'}}>
            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\mathbb{A} = \\{1, 2\\}`}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\mathbb{B} = \\{2, 3\\}`}
              />
            </View>
          </View>

          <View style={stylesTheorie.mathExpression}>
              <MathView
                math={`${mathMid} \\mathbb{A} \\cup \\mathbb{B} = \\{ 1, 2, 3\\}`}
              />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              Und nicht:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
                math={`${mathMid} \\mathbb{A} \\cup \\mathbb{B} = \\{ 1, 2, 2, 3\\}`}
              />              
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Vereinigungsmengenopertation ist wie die Schnittmengenoperation kommutativ. A vereinigt mit B ist das selbe wie B geschitten mit A.        
            </Text>
          </View>

          <View style={stylesTheorie.imageContainer}>
            <Image source={require('./img/Vereinigungsmenge.png')} style={{width: 350, height: 280}}/>
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Differenzmenge <MathView math={`${mathMid} /`}/>
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Bildet man eine Differenzmenge aus zwei Mengen, dann bildet man eine Menge, welche alle Elemente der ersten Menge entält, ausser die der zweiten Menge.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
                math={`${math} \\mathbb{A} = \\{1, 2, 3, 4, 5\\}`}
              />              
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
                math={`${math} \\mathbb{B} = \\{2, 4\\}`}
              />              
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
                Nun bildet man die Differenzmenge. Man spricht: A ohne B
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
                math={`${math} \\mathbb{C} = \\mathbb{A} \\setminus \\mathbb{B} = \\{1, 3, 5\\}`}
              />              
          </View>

          

          <MathJax
            html={`<div>




            <b>Restmenge/Differenzmenge $\\large \\backslash$</b> <br><br>
            Bildet man eine Differenzmenge, dann kreiert man eine Menge, deren Elemente teil der ersten Menge sind, aber nicht Teil der zweiten Menge. Als Beispiel: <br><br>
            Man hat die Mengen <br><br>
            $\\mathbb{A} = \\{1, 2, 3, 4, 5\\}$ und <br><br>
            $\\mathbb{B} = \\{2, 4\\}$. <br><br<
            Nun bildet man die Differenzmenge. <br><br>
            $\\mathbb{A} \\setminus \\mathbb{B} = {1, 3, 5}$ <br><br>
            Man sagt: $\\mathbb{A}$ ohne $\\mathbb{B}$. <br><br>
            Alle Elemente, die in Menge $\\mathbb{B}$ enthalten sind, dürfen nach dieser Operation nicht mehr in der Endmenge enthalten sein. Dies kann man nun in beschreibender Form so notieren: <br><br>
            $\\mathbb{A} \\setminus \\mathbb{B} = \\{x \\in \\mathbb{N} | x \\in \\mathbb{A} \\land x \\notin \\mathbb{B}\\}$ <br><br>
            Die Differenzmengenoperation ist keine kommutative Operation. <br><br>
            $\\mathbb{A} \\setminus \\mathbb{B} \\neq \\mathbb{B} \\setminus \\mathbb{A}$
            

            </div>`}      
          />


          

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}