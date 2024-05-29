import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import { useNavigation } from '@react-navigation/native';
import MathView from 'react-native-math-view';





export function WasSindMengen() {
  const math = '\\huge'
  const mathSmall= '\\large'
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Zahlenmengen')
    );
  }

  return (
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Was sind Mengen?
          </Text>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Allgemeines
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Eine Menge ist eine Gruppe von verschiedenen Dingen. Man stellt Mengen oft durch einen Grossbuchstaben dar, der einen Strich hat. Zum Beispiel kann man alle Primzahlen in eine Menge zusammenfassen und diese mit einem Buchstaben kennzeichnen. Die einzelnen Primzahlen 2, 3, 5, 7, ... sind dann Elemente dieser Menge. Um zu zeigen, dass ein Element zu einer Menge gehört, schreibt man:
            </Text>
          </View>

          
          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} 5 \\in \\mathbb{P}`}
            />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              5 ist Element von P
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Wenn ein Element einer Menge nicht angehört, schreibt man: 
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} 6 \\notin \\mathbb{P}`}
            />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              6 ist kein Element von P
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Um zu zeigen, welche Elemente eine Menge besitzt, benutzt man geschweifte Klammern. Besitzt die Menge die Elemente 20, 40 und 60, so schreibt man:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\mathbb{M} = \\{20, 40, 60 \\}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Alles, was in geschweiften Klammern geschrieben wird, ist eine Menge. Es ist auch möglich, dass eine Menge keine Elemente besitzt. Solch eine Menge bezeichnet man als <Text style={stylesTheorie.marked}>"leere Menge"</Text>. Man schreibt dann:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\mathbb{A} = \\{\\}`}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Mengen können ebenso Teil einer anderen Menge sein.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\mathbb{G} = \\{\\mathbb{S}, \\mathbb{T}\\}`}
            />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              oder
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\mathbb{G} = \\{\\{10, 4\\}, \\{32\\}\\}`}
            />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Teilmengen
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Eine Teilmenge ist eine Menge, deren Elemente auch Elemente einer anderen Menge sind. Wenn alle Elemente der Menge A auch in der Menge B enthalten sind, dann ist A eine Teilmenge von B. Dies notiert man so:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={`${math} \\mathbb{A} \\subset \\mathbb{B}`}
            />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              A ist Teilmenge von B
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
            Nimmt man beispielsweise an, dass die Menge A die Elemente 3 und 6 enthält und die Menge B die Elemente 3, 6 und 9, dann ist A eine Teilmenge von B.
            </Text>
          </View>

          <View style={{alignItems: 'flex-start'}}>
            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={` ${math}\\mathbb{A} = \\{3, 6\\}
                `}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={` ${math}\\mathbb{B} = \\{3, 6, 9\\}
                `}
              />
            </View>
          </View>
          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math}\\mathbb{A} \\subset \\mathbb{B}
              `}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Dadurch, dass nicht alle Elemente, die in B enthalten sind, auch Elemente von A sind, ist B keine Teilmenge von A.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math}\\mathbb{B} \\not\\subset \\mathbb{A}
              `}
            />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              B ist keine Teilmenge von A
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Zu den Teilmengen einer Menge gehört auch immer die Menge selbst. A ist Teilmenge von A, B ist Teilmenge von B. 
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math}\\mathbb{A} \\subset \\mathbb{A}
              `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math}\\mathbb{B} \\subset \\mathbb{B}
              `}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
             Die Menge A besitzt insgesamt 4 Teilmengen.
            </Text>
          </View>

          

          <View style={{alignItems: 'flex-start'}}>
            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={` ${math} \\mathbb{A} = \\{3, 6\\}
                `}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={` ${math} \\mathbb{T}_1 = \\{3\\}
                `}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={` ${math} \\mathbb{T}_2 = \\{6\\}
                `}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={` ${math} \\mathbb{T}_3= \\{3, 6\\}
                `}
              />
            </View>

            <View style={stylesTheorie.mathExpression}>
              <MathView
                math={` ${math} \\mathbb{T}_4 = \\{\\}
                `}
              />
            </View>

          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Jede Menge besitzt die leere Menge und sich selbst als Teilmenge.
            </Text>
          </View>
          
          <View>
            <Text style={stylesTheorie.subHeader}>
              Grund- und Lösungsmenge
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Manche mathematische Probleme haben mehrere Lösungen. Diese Lösungen sind Teil der Lösungsmenge, die meistens mit dem Buchstaben L gekennzeichnet wird. Die Definitionsmenge, ist die Menge, welche angibt, welche Lösungen überhaupt existieren dürfen. Die Definitionsmenge wird mit dem Buchstaben D gekennzeichnet. Die Lösungsmenge ist eine Teilmenge der Definitionsmenge. Ist eine Lösung des mathematischen Problems kein Element der Definitionsmenge, dann ist es auch kein Element der Lösungsmenge. 
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math} \\mathbb{D} = \\{2, 4, 6, 8\\}
              `}
            />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              das ist die Definitionsmenge, welche für folgende Gleichung gilt:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math} 3x = 9
              `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math} x = 3
              `}
            />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              3 ist die einzige Lösung für x. 3 ist aber kein Element der Definitionsmenge, deswegen bleibt die Lösungsmenge leer.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math} \\mathbb{L} = \\{\\}
              `}
            />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Mengenbildung
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Es gibt zwei Wege, Mengen zu bilden. Die aufzählende Form, welche wir bisher nutzen, wird verwendet, wenn man es mit wenigen Elementen zu tun hat. Hat man es aber mit grossen, vielleicht sogar unendlich grossen Mengen zu tun, so bräuchte man eine Weile, diese in der aufzählenden Form zu notieren. Deswegen verwendet man in solchen Fällen die beschreibende Form. Diese funktioniert folgendermassen:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math} \\mathbb{L} = \\{x| x < 10\\}
              `}
            />
          </View>

          <View style={stylesTheorie.conainerMid}>
            <Text style={stylesTheorie.textMid}>
              L - ist die Menge aller - x - für die gilt - x ist kleiner als 10
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Erst notiert man den Mengennamen, hier L. Dann bestimmt man in den geschweifen Klammern, welche Variabel benutzt werden soll. Nach dem Strich bestimmt man, welche Eigenschaften x erfüllen muss. Will man das als beschreibende Form notieren, würde das in etwa so aussehen:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${mathSmall} \\mathbb{L} = \\{.., -10, -9, -2,124, 5, \\sqrt{35}\\}
              `}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Es  ist unmöglich, alle Elemente, die man in der beschreibenden Form notiert hat, in die aufzählende Form zu bringen, da die Menge unendlich gross ist. Nun kann man aber noch etwas machen in der beschreibenden Form, man kann angeben, welcher Grundmenge x angehören soll. So kann man als Beispiel sagen, dass die Grundmenge nur positive Zahlen enthält.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${mathSmall} \\mathbb{L} = \\{n | nur \\;positive \\; Zahlen\\}
              `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${mathSmall} \\mathbb{L} = \\{x \\in \\mathbb{G} | x < 10\\}
              `}
            />
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Die Bedinung kann auch in Worten formuliert werden. Wenn man die nun die Menge wieder in aufzählender Form notieren möchte, ist dies einfacher, jedoch auch nicht möglich, denn die Menge ist immer noch unendlich gross, da unendlich viele Kommazahlen noch in der Grundmenge enthalten sind.
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${mathSmall} \\mathbb{L} = \\{2, 4.3234, 5, \\sqrt{23}, etc.\\}
              `}
            />
          </View>

          <View>
            <Text style={stylesTheorie.subHeader}>
              Mächtigkeit einer Menge
            </Text>
          </View>

          <View style={stylesTheorie.paragraphContainer}>
            <Text style={stylesTheorie.text}>
              Je mehr Elemente eine Menge hat, desto mächtiger ist sie. Eine leere Menge hat eine Mächtigkeit von 0. Eine Menge mit 5 Elementen hat eine Mächtigkeit von 5. Möchte man die Mächtigkeit einer Menge notieren, dann macht man dies so:
            </Text>
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math} \\mathbb{Q} = \\{4, 5, 6\\}
              `}
            />
          </View>

          <View style={stylesTheorie.mathExpression}>
            <MathView
              math={` ${math} |\\mathbb{Q}| = 3
              `}
            />
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
  )
}