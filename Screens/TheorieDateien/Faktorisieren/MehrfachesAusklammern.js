import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';

export function MehrfachesAusklammern() {
  const divStyle = "font-size: 20px; background-color: 'white'; border: none; font-family: Arial";
  const navigation = useNavigation();

  const nextPage = () => {
    return (
      navigation.navigate('Klammeransatz')
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={stylesTheorie.container}>
          <Text style={stylesTheorie.header}>
            Mehrfaches Ausklam-mern
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Bei einem Term mit mindestens 4 Gliedern kann manchmal mehrfach ausgeklammert werden. <br><br>
            $ax + ay + bx + by$ <br><br>
            $=a(x + y) + b(x + y)$ <br><br>
            $=(x + y)(a + b)$ <br><br>
            Hier wurde erst a und b ausgeklammert und danach wurde die Klammer (x + y) ausgeklammert, da sie in beiden Gliedern vorkommt. <br><br>
            Manchmal scheinen die Terme auf den ersten Blick nicht faktorisierbar, doch mit umstellen ergibt sich manchmal doch eine Möglichkeit. <br><br>
            $36 + 20a - 9x + 5ax$ <br><br>
            $= 5ax + 20a - 9x + 36$ <br><br>
            $= 5a \\cdot (x + 4) - 9 \\cdot (x + 4)$ <br><br>
            $= (5a - 9)(x + 4)$ <br><br>
            In diesem Beispiel wurden die Glieder im Term erst übersichtlicher geordnet, um dann einfacher ausklammern zu können.
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