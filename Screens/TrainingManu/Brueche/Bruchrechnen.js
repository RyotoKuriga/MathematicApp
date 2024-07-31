import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, Pressable, Text } from 'react-native';
import MathView from 'react-native-math-view';
import stylesUebungen from '../StylesUebungen';

export function Bruchrechnen() {
  const mathMid = '\\Large';

  const AufgabenUndLoesungen = [
    {
      "titel": "Vereinfache den Bruch",
      "aufgabe": "a)\\ \\dfrac{10}{20}",
      "loesung": "\\dfrac{1}{2}"
    },
    {
        "aufgabe": "b)\\ \\dfrac{15}{25}",
        "loesung": "\\dfrac{3}{5}"
    },
    {
        "aufgabe": "c)\\ \\dfrac{24}{24}",
        "loesung": "1"
    },
    {
        "aufgabe": "d)\\ \\dfrac{21}{28}",
        "loesung": "\\dfrac{3}{4}"
    },
    {
        "aufgabe": "e)\\ \\dfrac{30}{45}",
        "loesung": "\\dfrac{2}{3}"
    },
    {
        "aufgabe": "f)\\ \\dfrac{36}{48}",
        "loesung": "\\dfrac{3}{4}"
    },
    {
        "aufgabe": "g)\\ \\dfrac{40t}{60t^2}",
        "loesung": "\\dfrac{2}{3t}"
    },
    {
        "aufgabe": "h)\\ \\dfrac{50}{75}",
        "loesung": "\\dfrac{2}{3}"
    },
    {
        "aufgabe": "i)\\ \\dfrac{60}{90}",
        "loesung": "\\dfrac{2}{3}"
    },
    {
        "aufgabe": "j)\\ \\frac{42}{56}",
        "loesung": "\\dfrac{3}{4}"
    },
    {
        "aufgabe": "k)\\ \\dfrac{25a}{100a}",
        "loesung": "\\dfrac{1}{4}"
    },
    {
        "aufgabe": "l)\\ \\dfrac{45q}{60}",
        "loesung": "\\dfrac{3q}{4}"
    },
    {
        "aufgabe": "m)\\ \\dfrac{81}{108ab}",
        "loesung": "\\dfrac{3}{4ab}"
    },
    {
        "aufgabe": "n)\\ \\dfrac{55}{110m}",
        "loesung": "\\dfrac{1}{2m}"
    },
    {
        "titel": "Addiere und subtrahiere die Brüche",
        "aufgabe": "a)\\ \\frac{1}{2} + \\frac{1}{3}",
        "loesung": "\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}"
    },
    {
        "aufgabe": "b)\\ \\frac{3}{4} - \\frac{1}{4}",
        "loesung": "\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}"
    },
    {
        "aufgabe": "c)\\ \\frac{5}{6} + \\frac{1}{3}",
        "loesung": "\\frac{5}{6} + \\frac{2}{6} = \\frac{7}{6}"
    },
    {
        "aufgabe": "d)\\ \\frac{7}{8} - \\frac{3}{8}",
        "loesung": "\\frac{7}{8} - \\frac{3}{8} = \\frac{4}{8} = \\frac{1}{2}"
    },
    {
        "aufgabe": "e)\\ \\frac{2}{5} + \\frac{3}{10}",
        "loesung": "\\frac{4}{10} + \\frac{3}{10} = \\frac{7}{10}"
    },
    {
        "aufgabe": "f)\\ \\frac{9}{10} - \\frac{2}{5}",
        "loesung": "\\frac{9}{10} - \\frac{4}{10} = \\frac{5}{10} = \\frac{1}{2}"
    },
    {
        "aufgabe": "g)\\ \\frac{3}{7} + \\frac{2}{7}",
        "loesung": "\\frac{3}{7} + \\frac{2}{7} = \\frac{5}{7}"
    },
    {
        "aufgabe": "h)\\ \\frac{5}{9} - \\frac{1}{9}",
        "loesung": "\\frac{5}{9} - \\frac{1}{9} = \\frac{4}{9}"
    },
    {
        "aufgabe": "i)\\ \\frac{4}{5} + \\frac{1}{10}",
        "loesung": "\\frac{8}{10} + \\frac{1}{10} = \\frac{9}{10}"
    },
    {
        "aufgabe": "j)\\ \\frac{7}{12} - \\frac{1}{4}",
        "loesung": "\\frac{7}{12} - \\frac{3}{12} = \\frac{4}{12} = \\frac{1}{3}"
    },
    {
        "aufgabe": "k)\\ \\frac{3a}{4} + \\frac{2a}{4}",
        "loesung": "\\frac{3a}{4} + \\frac{2a}{4} = \\frac{5a}{4}"
    },
    {
        "aufgabe": "l)\\ \\frac{5b}{6} - \\frac{b}{3}",
        "loesung": "\\frac{5b}{6} - \\frac{2b}{6} = \\frac{3b}{6} = \\frac{b}{2}"
    },
    {
        "aufgabe": "m)\\ \\frac{2c}{5} + \\frac{3c}{10}",
        "loesung": "\\frac{4c}{10} + \\frac{3c}{10} = \\frac{7c}{10}"
    },
    {
        "aufgabe": "n)\\ \\frac{4d}{7} - \\frac{d}{14}",
        "loesung": "\\frac{8d}{14} - \\frac{d}{14} = \\frac{7d}{14} = \\frac{d}{2}"
    },
    {
        "aufgabe": "o)\\ \\frac{5e}{8} + \\frac{3e}{16}",
        "loesung": "\\frac{10e}{16} + \\frac{3e}{16} = \\frac{13e}{16}"
    },
    {
        "aufgabe": "p)\\ \\frac{7f}{9} - \\frac{2f}{9}",
        "loesung": "\\frac{7f}{9} - \\frac{2f}{9} = \\frac{5f}{9}"
    },
    {
        "aufgabe": "q)\\ \\frac{3x}{5} + \\frac{x}{10}",
        "loesung": "\\frac{6x}{10} + \\frac{x}{10} = \\frac{7x}{10}"
    },
    {
        "aufgabe": "r)\\ \\frac{4y}{7} - \\frac{y}{14}",
        "loesung": "\\frac{8y}{14} - \\frac{y}{14} = \\frac{7y}{14} = \\frac{y}{2}"
    },
    {
        "aufgabe": "s)\\ \\frac{5z}{8} + \\frac{z}{16}",
        "loesung": "\\frac{10z}{16} + \\frac{z}{16} = \\frac{11z}{16}"
    },
    {
        "aufgabe": "t)\\ \\frac{6a}{11} - \\frac{2a}{11}",
        "loesung": "\\frac{6a}{11} - \\frac{2a}{11} = \\frac{4a}{11}"
    },
    {
        "aufgabe": "u)\\ \\frac{7b}{12} + \\frac{3b}{6}",
        "loesung": "\\frac{7b}{12} + \\frac{6b}{12} = \\frac{13b}{12}"
    },
    {
        "aufgabe": "v)\\ \\frac{8c}{13} - \\frac{2c}{13}",
        "loesung": "\\frac{8c}{13} - \\frac{2c}{13} = \\frac{6c}{13}"
    },
    {
        "aufgabe": "w)\\ \\frac{9d}{14} + \\frac{3d}{7}",
        "loesung": "\\frac{9d}{14} + \\frac{6d}{14} = \\frac{15d}{14}"
    },
    {
        "aufgabe": "x)\\ \\frac{10e}{15} - \\frac{4e}{15}",
        "loesung": "\\frac{10e}{15} - \\frac{4e}{15} = \\frac{6e}{15} = \\frac{2e}{5}"
    },
    {
        "aufgabe": "y)\\ \\frac{11f}{18} + \\frac{5f}{18}",
        "loesung": "\\frac{11f}{18} + \\frac{5f}{18} = \\frac{16f}{18} = \\frac{8f}{9}"
    },
    {
        "aufgabe": "z)\\ \\frac{12g}{20} - \\frac{3g}{20}",
        "loesung": "\\frac{12g}{20} - \\frac{3g}{20} = \\frac{9g}{20}"
    },
    {
      "titel": "Multipliziere und dividiere die Brüche",
      "aufgabe": "a)\\ \\frac{1}{2} \\cdot \\frac{3}{4}",
      "loesung": "\\frac{1 \\cdot 3}{2 \\cdot 4} = \\frac{3}{8}"
    } ,
    {
        "aufgabe": "b)\\ \\frac{2}{3} / \\frac{4}{5}",
        "loesung": "\\frac{2}{3} \\cdot \\frac{5}{4} = \\frac{2 \\cdot 5}{3 \\cdot 4} = \\frac{10}{12} = \\frac{5}{6}"
    },
    {
        "aufgabe": "c)\\ \\frac{3}{4} \\cdot \\frac{2}{5}",
        "loesung": "\\frac{3 \\cdot 2}{4 \\cdot 5} = \\frac{6}{20} = \\frac{3}{10}"
    },
    {
        "aufgabe": "d)\\ \\frac{5}{6} / \\frac{7}{8}",
        "loesung": "\\frac{5}{6} \\cdot \\frac{8}{7} = \\frac{5 \\cdot 8}{6 \\cdot 7} = \\frac{40}{42} = \\frac{20}{21}"
    },
    {
        "aufgabe": "e)\\ \\frac{4}{5} \\cdot \\frac{3}{2}",
        "loesung": "\\frac{4 \\cdot 3}{5 \\cdot 2} = \\frac{12}{10} = \\frac{6}{5}"
    },
    {
        "aufgabe": "f)\\ \\frac{7}{8} / \\frac{5}{6}",
        "loesung": "\\frac{7}{8} \\cdot \\frac{6}{5} = \\frac{7 \\cdot 6}{8 \\cdot 5} = \\frac{42}{40} = \\frac{21}{20}"
    },
    {
        "aufgabe": "g)\\ \\frac{9}{10} \\cdot \\frac{4}{3}",
        "loesung": "\\frac{9 \\cdot 4}{10 \\cdot 3} = \\frac{36}{30} = \\frac{6}{5}"
    },
    {
        "aufgabe": "h)\\ \\frac{6}{7} / \\frac{3}{4}",
        "loesung": "\\frac{6}{7} \\cdot \\frac{4}{3} = \\frac{6 \\cdot 4}{7 \\cdot 3} = \\frac{24}{21} = \\frac{8}{7}"
    },
    {
        "aufgabe": "i)\\ \\frac{2}{9} \\cdot \\frac{3}{4}",
        "loesung": "\\frac{2 \\cdot 3}{9 \\cdot 4} = \\frac{6}{36} = \\frac{1}{6}"
    },
    {
        "aufgabe": "j)\\ \\frac{5}{12} / \\frac{7}{8}",
        "loesung": "\\frac{5}{12} \\cdot \\frac{8}{7} = \\frac{5 \\cdot 8}{12 \\cdot 7} = \\frac{40}{84} = \\frac{20}{42} = \\frac{10}{21}"
    },
    {
        "aufgabe": "k)\\ \\frac{3}{5} \\cdot \\frac{5}{6}",
        "loesung": "\\frac{3 \\cdot 5}{5 \\cdot 6} = \\frac{15}{30} = \\frac{1}{2}"
    },
    {
        "aufgabe": "l)\\ \\frac{8}{9} / \\frac{2}{3}",
        "loesung": "\\frac{8}{9} \\cdot \\frac{3}{2} = \\frac{8 \\cdot 3}{9 \\cdot 2} = \\frac{24}{18} = \\frac{4}{3}"
    },
    {
        "aufgabe": "m)\\ \\frac{7}{10} \\cdot \\frac{10}{7}",
        "loesung": "\\frac{7 \\cdot 10}{10 \\cdot 7} = \\frac{70}{70} = 1"
    },
    {
        "aufgabe": "n)\\ \\frac{4}{11} / \\frac{8}{11}",
        "loesung": "\\frac{4}{11} \\cdot \\frac{11}{8} = \\frac{4 \\cdot 11}{11 \\cdot 8} = \\frac{44}{88} = \\frac{1}{2}"
    },
    {
        "aufgabe": "o)\\ \\frac{3a}{5} \\cdot \\frac{2b}{7}",
        "loesung": "\\frac{3a \\cdot 2b}{5 \\cdot 7} = \\frac{6ab}{35}"
    },
    {
        "aufgabe": "p)\\ \\frac{4x}{9} / \\frac{2y}{3}",
        "loesung": "\\frac{4x}{9} \\cdot \\frac{3}{2y} = \\frac{4x \\cdot 3}{9 \\cdot 2y} = \\frac{12x}{18y} = \\frac{2x}{3y}"
    },
    {
        "aufgabe": "q)\\ \\frac{5m}{12} \\cdot \\frac{4n}{15}",
        "loesung": "\\frac{5m \\cdot 4n}{12 \\cdot 15} = \\frac{20mn}{180} = \\frac{mn}{9}"
    },
    {
        "aufgabe": "r)\\ \\frac{6p}{13} / \\frac{3q}{4}",
        "loesung": "\\frac{6p}{13} \\cdot \\frac{4}{3q} = \\frac{6p \\cdot 4}{13 \\cdot 3q} = \\frac{24p}{39q} = \\frac{8p}{13q}"
    },
    {
        "aufgabe": "s)\\ \\frac{2a}{7b} \\cdot \\frac{3c}{4d}",
        "loesung": "\\frac{2a \\cdot 3c}{7b \\cdot 4d} = \\frac{6ac}{28bd} = \\frac{3ac}{14bd}"
    },
    {
        "aufgabe": "t)\\ \\frac{5x}{8y} / \\frac{10z}{16w}",
        "loesung": "\\frac{5x}{8y} \\cdot \\frac{16w}{10z} = \\frac{5x \\cdot 16w}{8y \\cdot 10z} = \\frac{80xw}{80yz} = \\frac{xw}{yz}"
    },
    {
        "aufgabe": "u)\\ \\frac{9m}{10n} \\cdot \\frac{5p}{3q}",
        "loesung": "\\frac{9m \\cdot 5p}{10n \\cdot 3q} = \\frac{45mp}{30nq} = \\frac{3mp}{2nq}"
    },
    {
        "aufgabe": "v)\\ \\frac{8r}{11s} / \\frac{4t}{5u}",
        "loesung": "\\frac{8r}{11s} \\cdot \\frac{5u}{4t} = \\frac{8r \\cdot 5u}{11s \\cdot 4t} = \\frac{40ru}{44st} = \\frac{10ru}{11st}"
    },
    {
        "aufgabe": "w)\\ \\frac{7a}{6b} \\cdot \\frac{2c}{5d}",
        "loesung": "\\frac{7a \\cdot 2c}{6b \\cdot 5d} = \\frac{14ac}{30bd} = \\frac{7ac}{15bd}"
    },
    {
        "aufgabe": "x)\\ \\frac{12x}{14y} / \\frac{6z}{7w}",
        "loesung": "\\frac{12x}{14y} \\cdot \\frac{7w}{6z} = \\frac{12x \\cdot 7w}{14y \\cdot 6z} = \\frac{84xw}{84yz} = \\frac{xw}{yz}"
    },
    {
        "aufgabe": "y)\\ \\frac{11p}{13q} \\cdot \\frac{7r}{5s}",
        "loesung": "\\frac{11p \\cdot 7r}{13q \\cdot 5s} = \\frac{77pr}{65qs}"
    },
    {
        "aufgabe": "z)\\ \\frac{10a}{9b} / \\frac{5c}{3d}",
        "loesung": "\\frac{10a}{9b} \\cdot \\frac{3d}{5c} = \\frac{10a \\cdot 3d}{9b \\cdot 5c} = \\frac{30ad}{45bc} = \\frac{2ad}{3bc}"
    },
    {
        "titel": "Vereinfache die Doppelbrüche",
        "aufgabe": "a)\\ \\dfrac{\\frac{1}{2}}{\\frac{3}{4}}",
        "loesung": "\\dfrac{1}{2} \\cdot \\frac{4}{3} = \\frac{4}{6} = \\frac{2}{3}"
    },
    {
        "aufgabe": "b)\\ \\dfrac{\\frac{2}{3}}{\\frac{4}{5}}",
        "loesung": "\\dfrac{2}{3} \\cdot \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}"
    },
    {
        "aufgabe": "c)\\ \\dfrac{\\frac{3}{4}}{\\frac{2}{5}}",
        "loesung": "\\dfrac{3}{4} \\cdot \\frac{5}{2} = \\frac{15}{8}"
    },
    {
        "aufgabe": "d)\\ \\dfrac{\\frac{5}{6}}{\\frac{7}{8}}",
        "loesung": "\\dfrac{5}{6} \\cdot \\frac{8}{7} = \\frac{40}{42} = \\frac{20}{21}"
    },
    {
        "aufgabe": "e)\\ \\dfrac{\\frac{4}{5}}{\\frac{3}{2}}",
        "loesung": "\\dfrac{4}{5} \\cdot \\frac{2}{3} = \\frac{8}{15}"
    },
    {
        "aufgabe": "f)\\ \\frac{\\frac{7}{8}}{\\frac{5}{6}}",
        "loesung": "\\dfrac{7}{8} \\cdot \\frac{6}{5} = \\frac{42}{40} = \\frac{21}{20}"
    },
    {
        "aufgabe": "g)\\ \\frac{\\frac{9}{10}}{\\frac{4}{3}}",
        "loesung": "\\dfrac{9}{10} \\cdot \\frac{3}{4} = \\frac{27}{40}"
    },
    {
        "aufgabe": "h)\\ \\dfrac{\\frac{6}{7}}{\\frac{3}{4}}",
        "loesung": "\\dfrac{6}{7} \\cdot \\frac{4}{3} = \\frac{24}{21} = \\frac{8}{7}"
    },
    {
        "aufgabe": "i)\\ \\dfrac{\\frac{2}{9}}{\\frac{3}{4}}",
        "loesung": "\\dfrac{2}{9} \\cdot \\frac{4}{3} = \\frac{8}{27}"
    },
    {
        "aufgabe": "j)\\ \\dfrac{\\frac{5}{12}}{\\frac{7}{8}}",
        "loesung": "\\dfrac{5}{12} \\cdot \\frac{8}{7} = \\frac{40}{84} = \\frac{20}{42} = \\frac{10}{21}"
    },
    {
        "aufgabe": "k)\\ \\dfrac{\\frac{3}{5}}{\\frac{5}{6}}",
        "loesung": "\\dfrac{3}{5} \\cdot \\frac{6}{5} = \\frac{18}{25}"
    },
    {
        "aufgabe": "l)\\ \\dfrac{\\frac{8}{9}}{\\frac{2}{3}}",
        "loesung": "\\dfrac{8}{9} \\cdot \\frac{3}{2} = \\frac{24}{18} = \\frac{4}{3}"
    },
    {
        "aufgabe": "m)\\ \\dfrac{\\frac{7}{10}}{\\frac{10}{7}}",
        "loesung": "\\dfrac{7}{10} \\cdot \\frac{7}{10} = \\frac{49}{100}"
    },
    {
        "aufgabe": "n)\\ \\dfrac{\\frac{4}{11}}{\\frac{8}{11}}",
        "loesung": "\\dfrac{4}{11} \\cdot \\frac{11}{8} = \\frac{4}{8} = \\frac{1}{2}"
    },


    
  ];

  const [selectedLoesungen, setSelectedLoesungen] = useState([]);

  const toggleLoesung = (index) => {
    const selectedIndex = selectedLoesungen.indexOf(index);
    let newSelectedLoesungen = [...selectedLoesungen];
    if (selectedIndex === -1) {
      newSelectedLoesungen.push(index);
    } else {
      newSelectedLoesungen.splice(selectedIndex, 1);
    }
    setSelectedLoesungen(newSelectedLoesungen);
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <SafeAreaView>
        <ScrollView>
          <View style={stylesUebungen.container}>
            {AufgabenUndLoesungen.map((item, index) => (
              <View key={index}>
                {item.titel && (
                  <View style={stylesUebungen.titleContainer}>
                    <Text style={stylesUebungen.title}>{item.titel}</Text>
                  </View>
                )}

                <View style={stylesUebungen.taskContainer}>
                  <Pressable onPress={() => toggleLoesung(index)}>
                    <MathView
                      math={`${mathMid} ${item.aufgabe}`}
                      style={stylesUebungen.mathText}
                    />
                    {item.aufgabeText && (
                      <Text style={stylesUebungen.taskText}>{item.aufgabeText}</Text>
                    )}
                  </Pressable>
                </View>
                
                {selectedLoesungen.includes(index) && (
                  <View style={stylesUebungen.solutionContainer}>
                    <MathView
                      math={`\\Large ${item.loesung}`}
                      style={stylesUebungen.mathText}
                    />
                    {item.loesungText && (
                      <Text style={stylesUebungen.solutionText}>{item.loesungText}</Text>
                    )}
                  </View>
                )}             
              </View>           
            ))}           
          </View>  
          <View style={{height: 200, backgroundColor: 'white'}}></View>  
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
