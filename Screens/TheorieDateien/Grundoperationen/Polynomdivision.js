import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function Polynomdivision() {
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
            Polynomdivision
          </Text>

          <MathJax
            html={`<div style='${divStyle}'>Bei der Polynomdivision teilt man ein Polynom durch ein anderes. Ein Polynom ist eine Kombination aus Gliedern mit unterschiedlichen Potenzen. Zum Beispiel: <br><br>
            $12x + 15x^2 + 4$ <br><br>
            $x - 2$ <br><br>
            Will man nun den ersten Term durch den zweiten dividieren, eignet sich die Polynomdivision, welche ähnlich zum schriftlich Dividieren ist. <br><br>Erst schreibt man die Division so auf, dass alle Potenzen nach ihrem Exponenten geordnet sind, die grösste Potenz kommt zuerst, danach die zweitgrösste, etc. <br><br>
            $(15x^2 + 12x + 4) : (x - 2) =$ ? <br> <br> Nun beginnt man die Division, indem man schaut, wie oft das Glied mit der grössten Potenz im Divisor mit dem grössten Glied im Dividend multiplizieren muss, so dass sie gleich gross sind. <br><br>
            $(15x^2 + 12x + 4) : (x - 2) =15x$ <br>
            $-(15x^2 + 30x)$
            
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