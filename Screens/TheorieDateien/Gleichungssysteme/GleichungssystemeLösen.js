import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import stylesTheorie from '../StylesTheorie';
import MathJax from 'react-native-mathjax';
import { useNavigation } from '@react-navigation/native';





export function GleichungssystemeLoesen() {
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
            Gleichungssyteme auflösen
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> Ein Gleichungssystem ist eine Sammlung von Gleichungen, die gemeinsam betrachtet werden, um die Werte der Unbekannten zu bestimmen. Ein einfaches Gleichungssystem wäre: <br><br>
            
            $\\begin{cases}
            2x + 3y = 10 \\\\
            4x - 2y = 8
            \\end{cases}$ <br><br>

            Durch die Tatsache, dass es zwei Gleichungen mit zwei Unbekannten ($x$, $y$) gibt, ist das Gleichungssystem eindeutig bestimmt, d.h. es gibt für jede Unbekannte genau eine Lösung. Wenn ein Gleichungssystem mehr Variablen als Gleichungen hat, ist es unterbestimmt, was bedeutet, dass es unendlich viele Lösungen gibt, die das Gleichungssystem erfüllen. Hat ein Gleichungssystem hingegen mehr Gleichungen als Variabeln, sind die Variablen eindeutig bestimmt. <br><br>

            $\\begin{cases}
            x + y - z = 19 \\\\
            3x -2y + 2z = 24
            \\end{cases}$ <br><br>
            $\\rightarrow$ 3 Variabeln & 2 Gleichungen <br> $\\rightarrow$ Variabeln sind nicht eindeutig bestimmt <br>$\\rightarrow$ es gibt unendlich viele Lösungen für das Gleichungssystem $\\rightarrow$ es ist unterbestimmt <br><br>

            $\\begin{cases}
            x + y - z = 19 \\\\
            3x -2y + 2z = 24 \\\\
            -2x + 9y + 5z = 12
            \\end{cases}$ <br><br>
            $\\rightarrow$ 3 Variabeln & 3 Gleichungen <br> $\\rightarrow$ das Gleichungssystem ist eindeutig bestimmt <br> $\\rightarrow$ für jede Variabel gibt es eine Lösung <br><br>

            $\\begin{cases}
            y - z = 1 \\\\
            5y + 3z = 14 \\\\
            9y + z = 13
            \\end{cases}$ <br><br>
            $\\rightarrow$ 2 Variabeln & 3 Gleichungen <br> $\\rightarrow$ das Gleichungssystem ist überbestimmt $\\rightarrow$ für jede Variabel gibt es eine Lösung

            Um ein Gleichungssystem zu lösen, gibt es viele Methoden. Die drei wichtigsten sind die Gleichsetzungsmethode, die Einsetzungsmethode und die Additionsmethode.
            </div>`}   
               
          />

          <Text style={stylesTheorie.subHeader}>
            Gleichsetzungsmethode
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> 
            Bei der Gleichsetzungsmethode wird bei zwei Gleichungen die selbe Variabel isoliert. Danach werden die Gleichungen einander gleichgesetzt und dann wird der Term aufgelöst. Als Beispiel: <br><br>
            $\\begin{cases}
            5x + 3y = 18 \\\\
            3x - 2y = 4
            \\end{cases}$ <br><br>
            $\\begin{cases}
            5x = 18 - 3y \\\\
            3x = 4 + 2y
            \\end{cases}$ <br><br>
            $\\begin{cases}
            x = \\dfrac{18}{5} - \\dfrac{3y}{5} \\\\
            x = \\dfrac{4}{3} + \\dfrac{2y}{3}
            \\end{cases}$ <br><br>
            $\\dfrac{18}{5} - \\dfrac{3y}{5} = x = \\dfrac{4}{3} + \\dfrac{2y}{3}$ <br><br>
            $\\dfrac{18}{5} - \\dfrac{3y}{5} =  \\dfrac{4}{3} + \\dfrac{2y}{3}$ <br><br>
            $54 - 9y = 20 + 10y$ <br><br>
            $34 = 19y$ <br><br>
            $\\dfrac{34}{19} = y$ <br><br>
            Da man nun den y-Wert kennt, kann man ihn in eine Gleichung einsetzen und so den x-Wert errechnen. <br><br>
            $3x = 4 + 2y$ <br><br>
            $3x = 4 + 2 \\cdot \\dfrac{34}{19}$ <br><br>
            $x = \\dfrac{4}{3} + \\dfrac{68}{57}$ <br><br>
            $x = \\dfrac{76}{57} + \\dfrac{68}{57}$ <br><br>
            $x = \\dfrac{144}{57}$ <br><br>
            $x = \\dfrac{48}{19}$

            </div>`}   
               
          />

          <Text style={stylesTheorie.subHeader}>
            Einsetzungsmethode
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> 
            Ähnlich wie bei der Gleichsetzungsmethode, formt man bei der Einsetzungsmethode eine Gleichung nach einer Variabeln auf. Diese Variabel wird dann in eine andere Gleichung eigesetzt. <br><br>
            $\\begin{cases}
            2x + y = 7 \\\\
            x - y = 1
            \\end{cases}$ <br><br>
            $\\begin{cases}
            2x + y = 7 \\\\
            -y = 1 - x
            \\end{cases}$ <br><br>
            $\\begin{cases}
            2x + y = 7 \\\\
            y = x - 1
            \\end{cases}$ <br><br>
            $2x + (x - 1) = 7$ <br><br>
            $3x - 1 = 7$ <br><br>
            $3x = 8$  <br><br>
            $x = \\dfrac{8}{3}$ <br><br>
            Da man nun eine Variabel kennt, lässt sich die zweite einfach berechnen. <br><br>
            $x - y = 1$ <br><br>
            $\\dfrac{8}{3} - y = 1$ <br><br>
            $-y = -\\dfrac{8}{3} + 1$ <br><br>
            $y = \\dfrac{8}{3} - 1$ <br><br>
            $y = \\dfrac{5}{3}$

            </div>`}   
               
          />

          <Text style={stylesTheorie.subHeader}>
            Additionsmethode
          </Text>

          <MathJax
            html={`<div style='${divStyle}'> 
            Gleichungssysteme können auch gelöst werden, indem man von einer Gleichung eine andere abzieht. Man erweitert eine der Gleichungen so, dass, wenn man sie mit der anderen Gleichung addiert (oder subtrahiert), eine Variabel verschwindet. Dies sieht dann wiefolgt aus: <br><br>
            $\\begin{cases}
            2x + 3y = 11 \\\\
            x - y = 3
            \\end{cases}$ <br><br>
            $\\begin{cases}
            2x + 3y = 11 \\\\
            3x - 3y = 9
            \\end{cases}$ <br><br>
            Nun zieht addiert man die linke Seite mit der linken Seite und die rechte Seite mit der rechten. <br><br>
            $2x + 3y + 3x - 3y = 11 + 9$ <br><br>
            $5x = 20$ <br><br>
            $x = 4$ <br><br>
            Aus der einen Variabeln ergibt sich die andere: <br><br>
            $x - y = 3$ <br><br>
            $4 - y = 3$ <br><br>
            $-y = -1$ <br><br>

            </div>`}   
               
          />

          

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}