import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View, Animated } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Theorie } from './Screens/Theorie';
import { SettingsScreen } from './Screens/Settings/Settings';
import { Training } from './Screens/Training';
import { QuickTraining } from './Screens/QuickTraining';
import { Calculator } from './Screens/Calculator';

import { Zahlenmengen } from './Screens/TheorieDateien/Mengenlehre/Zahlenmengen';
import { WasSindMengen } from './Screens/TheorieDateien/Mengenlehre/WasSindMengen';
import { Mengenoperationen } from './Screens/TheorieDateien/Mengenlehre/Mengenoperationen';

import { WasIstEinBruch } from './Screens/TheorieDateien/Bruchrechnen/WasIstEinBruch';
import { KuerzenUndErweitern } from './Screens/TheorieDateien/Bruchrechnen/KuerzenUndErweitern';
import { AdditionUndSubtraktionVonBrüchen } from './Screens/TheorieDateien/Bruchrechnen/AdditionUndSubtraktionVonBrüchen';
import { MultiplikationUndDivisionVonBrüchen } from './Screens/TheorieDateien/Bruchrechnen/MultiplikationUndDivisionVonBrüchen';
import { Doppelbrüche } from './Screens/TheorieDateien/Bruchrechnen/Doppelbrüche';

import { Ausklammern } from './Screens/TheorieDateien/Faktorisieren/Ausklammern';
import { MehrfachesAusklammern } from './Screens/TheorieDateien/Faktorisieren/MehrfachesAusklammern';
import { Klammeransatz } from './Screens/TheorieDateien/Faktorisieren/Klammeransatz';
import { BinomischeFormeln } from './Screens/TheorieDateien/Faktorisieren/BinomischeFormeln';

import { AdditionUndSubtraktion } from './Screens/TheorieDateien/Grundoperationen/AdditionUndSubtraktion';
import { MultiplikationUndDivision } from './Screens/TheorieDateien/Grundoperationen/MultiplikationUndDivision';
import { PotenzenUndWurzeln } from './Screens/TheorieDateien/Grundoperationen/PotenzenUndWurzeln';
import { Betrag } from './Screens/TheorieDateien/Grundoperationen/Betrag';
import { Polynomdivision } from './Screens/TheorieDateien/Grundoperationen/Polynomdivision';

import { WasIstEineFunktion } from './Screens/TheorieDateien/LineareFunktionen/WasIstEineFunktion';
import { LineareFunktionen1 } from './Screens/TheorieDateien/LineareFunktionen/lineareFunktionen1';
import { LineareFunktionen2 } from './Screens/TheorieDateien/LineareFunktionen/lineareFunktionen2';
import { LineareFunktionen3 } from './Screens/TheorieDateien/LineareFunktionen/lineareFunktionen3';

import { GleichungssystemeLoesen } from './Screens/TheorieDateien/Gleichungssysteme/GleichungssystemeLösen';

import { Wahrscheinlichkeit } from './Screens/TheorieDateien/Stochastik/Wahrscheinlichkeit';

//ÜbungenAuto

import { TrainingManuStackScreen } from './Screens/TrainingManu/TrainingManuStackScreen';
import { TrainingAutoStackScreen } from './Screens/TrainingAuto/TrainingAutoStackScreen';

import { MengenSchreibweise } from './Screens/TrainingAuto/Mengen/MengenSchreibweise';
import { MengenZeichen } from './Screens/TrainingAuto/Mengen/MengenZeichen';
import { MengenoperationenUebung } from './Screens/TrainingAuto/Mengen/MengenoperationenUebung';

import { AdditionUndSubtraktionAutoUebung } from './Screens/TrainingAuto/Grundoperationen/AdditionUndSubtraktionAutoUebung';
import { MultiplikationUndDivisionAutoUebung } from './Screens/TrainingAuto/Grundoperationen/MultiplikationUndDivisionAutoUebung';
import { AusklammernAuto } from './Screens/TrainingAuto/Faktorisieren/AusklammernAuto';

//ÜbungenManu

import { MengenNotationManu } from './Screens/TrainingManu/Mengen/MengennotationManu';
import { BinomischeFormelnManu } from './Screens/TrainingManu/Faktorisieren/BinomischeFormelnManu';
import { AusklammernManu } from './Screens/TrainingManu/Faktorisieren/AusklammernManu';
import { GleichungssystemeManu } from './Screens/TrainingManu/Gleichungssysteme/GleichungsystemeManu';

const Tab = createBottomTabNavigator();
const ScreenStack = createNativeStackNavigator();

function TheorieStackScreen() {
  const screens = [
    { name: 'Zahlenmengen', component: Zahlenmengen },
    { name: 'Was sind Mengen?', component: WasSindMengen },
    { name: 'Mengenoperationen', component: Mengenoperationen},

    { name: 'Was ist ein Bruch?', component: WasIstEinBruch},
    { name: 'Kürzen & Erweitern', component: KuerzenUndErweitern},
    { name: 'Addition & Subtraktion von Brüchen', component: AdditionUndSubtraktionVonBrüchen},
    { name: 'Multiplikation & Division von Brüchen', component: MultiplikationUndDivisionVonBrüchen},
    { name: 'Doppelbrüche', component: Doppelbrüche},

    { name: 'Ausklammern', component: Ausklammern},
    { name: 'Mehrfaches Ausklammern', component: MehrfachesAusklammern},
    { name: 'Klammeransatz', component: Klammeransatz},
    { name: 'Binomische Formeln', component: BinomischeFormeln},

    { name: 'Addition & Subtraktion', component: AdditionUndSubtraktion},
    { name: 'Multiplikation & Division', component: MultiplikationUndDivision},
    { name: 'Potenzen & Wurzeln', component: PotenzenUndWurzeln},
    { name: 'Betrag', component: Betrag},
    { name: 'Polynomdivision', component: Polynomdivision},
    
    { name: 'Was ist eine Funktion?', component: WasIstEineFunktion},
    { name: 'Lineare Funktionen I', component: LineareFunktionen1},
    { name: 'Lineare Funktionen II', component: LineareFunktionen2},
    { name: 'Lineare Funktionen III', component: LineareFunktionen3},

    { name: 'Gleichungssysteme auflösen', component: GleichungssystemeLoesen},

    { name: 'Wahrscheinlichkeit', component: Wahrscheinlichkeit},
  ];

  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen 
        name='Theorie' 
        component={Theorie}
        options={{
          headerShown: true, // Navigationsleiste
        }}
      />
      {screens.map(({ name, component }) => (
        <ScreenStack.Screen 
          key={name}
          name={name} 
          component={component}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Theorie')}>
                <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
      ))}
    </ScreenStack.Navigator>
  );
}

function TrainingChoice() {
  const screens = [
    { name: 'TrainingManu', component: TrainingManuStackScreen },
    { name: 'TrainingAuto', component: TrainingAutoStackScreen },

    //auto

    { name: 'Mengennotation', component: MengenSchreibweise},
    { name: 'Mengenzeichen', component: MengenZeichen },
    { name: 'Addition und Subtraktion', component: AdditionUndSubtraktionAutoUebung},
    { name: 'Multiplikation und Division', component: MultiplikationUndDivisionAutoUebung},
    { name: 'Mengenoperationenübung', component: MengenoperationenUebung},

    { name: '  Ausklammern  ', component: AusklammernAuto},

    //manu

    { name: 'Mengen', component: MengenNotationManu},
    { name: ' Binomische Formeln ', component: BinomischeFormelnManu},
    { name: ' Ausklammern ', component: AusklammernManu},
    { name: 'Gleichungssysteme', component: GleichungssystemeManu}
  ];

  return (
    <ScreenStack.Navigator>
      <ScreenStack.Screen 
        name='Training' 
        component={Training}
        options={{
          headerShown: true,
        }}
      />
      {screens.map(({ name, component }) => (
        <ScreenStack.Screen 
          key={name}
          name={name} 
          component={component}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            ),
          })}
        />
      ))}
    </ScreenStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <ScreenStack.Navigator
      screenOptions={{
        headerTitle: 'Einstellungen',
      }}      
    >
      <ScreenStack.Screen name="Settings" component={SettingsScreen} />

    </ScreenStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={false}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconSize = focused ? 35 : 28;
            switch (route.name) {
              case 'Theorie':
                iconName = focused ? 'book' : 'book-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              case 'Calculator':
                iconName = focused ? 'calculator' : 'calculator-outline';
                break;
              case 'Training':
                iconName = focused ? 'barbell' : 'barbell-outline';
                break;
              case 'QuickTraining':
                iconName = focused ? 'flash' : 'flash-outline';
                break;
            }
            return <Ionicons name={iconName} color={'black'} size={iconSize}/>;
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'white', // Vordergrundfarbe der TabBar
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 30,
            height: 60,
            borderRadius: 30,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: -5 },
            elevation: 10,
            borderTopWidth: 0,
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            zIndex: 1
          },
        })}
        tabBarBackground={() => (
          <View style={{
            position: 'relative',
            left: 0,
            right: 10,
            bottom: 10,
            height: 100,
            backgroundColor: 'black',
            zIndex: 0
          }} />
        )}
      >
        <Tab.Screen name="Theorie" component={TheorieStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Training" component={TrainingChoice} options={{ headerShown: false }} />
        <Tab.Screen name="QuickTraining" component={QuickTraining} options={{ headerShown: false }} />
        <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
