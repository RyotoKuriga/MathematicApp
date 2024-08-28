import { View, Pressable, Text, StyleSheet, Linking, Alert, Share, Dimensions, SafeAreaView, TouchableOpacity, ScrollView, } from 'react-native';
import React, { useState, useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemeContext } from '../../Context/themeContext';
import { colors } from '../../theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;

export function SettingsScreen() {
  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
  });

  const navigation = useNavigation();

  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const [showInfo, setShowInfo] = useState(false);
  const [textSize, setTextSize] = useState(30);
  const [hellButton, setHellButton] = useState(true);
  const [dunkelButton, setDunkelButton] = useState();
  const [SystemButton, setSystemButton] = useState();
  
  const size = windowWidth / 5;

  const handleSwitch = () => {
    updateTheme();
  }

  const openMailApp = () => {
    const email = 'goetzenberger.tristan@bks-campus.ch';
    const subject = 'Fehler in Radian';
    const body = 'Ich habe folgenden Fehler gefunden:';

    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Fehler', 'Mail-App kann nicht geöffnet werden');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('Fehler aufgetreten', err));
  };

  const openMailAppKontakt = () => {
    const email = 'goetzenberger.tristan@bks-campus.ch';
    const subject = 'Kontakt';
    const body = 'Ich möchte dem Entwickler folgendes mitteilen:';

    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Fehler', 'Mail-App kann nicht geöffnet werden');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch((err) => console.error('Fehler aufgetreten', err));
  };

  const shareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Endlich unendlich Mathe!',
        url: 'https://hierWebseiteEinfügen.com',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      Alert.alert('Fehler', error.message);
    }
  };

  const handleNutzungsbedingungen = () => {

    Linking.openURL('https://www.privacypolicies.com/live/f08af075-80cb-4b65-8df6-2c67de56473d');

  }

  const showInfoText = () => {
    setShowInfo(!showInfo);
  };

  const appearanceChange = (button) => {
    if (button === 'Dunkel') {
      updateTheme({mode: 'dark'});
      setHellButton(false);
      setDunkelButton(true);
      setSystemButton(false);
    } else if (button === 'Hell'){
      updateTheme({mode: 'light'});
      setDunkelButton(false);
      setHellButton(true);
      setSystemButton(false);
    } else {
      updateTheme({system: true});
      setDunkelButton(false);
      setHellButton(false);
      setSystemButton(true);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: activeColors.background }}>
      <ScrollView contentContainerStyle={styles.content}>
        {/*<View style={[styles.section, { paddingTop: 4, }]}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.sectionBody}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={[styles.profile, {backgroundColor: activeColors.primary}]}>
              <Image
                alt=""
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                }}
                style={styles.profileAvatar} />
              <View style={styles.profileBody}>
                <Text style={[styles.profileName, {color: activeColors.text}]}>Dea Bayer</Text>
                <Text style={styles.profileHandle}>john@example.com</Text>
              </View>
              <FeatherIcon
                color="#bcbcbc"
                name="chevron-right"
                size={22} />
            </TouchableOpacity>
          </View>
        </View> */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Info</Text>
          <View style={[styles.sectionBody]}>
            <View style={[styles.rowWrapper, styles.rowFirst, styles.rowLast, {backgroundColor: activeColors.primary, borderColor: activeColors.tertary}]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AppInfo')
                }}
                style={styles.row}>
                <Text style={[styles.rowLabel, {color: activeColors.text}]}>App-Info</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Darstellung</Text>
          <View style={[styles.sectionBody]}>
          <View style={[styles.rowWrapper, styles.rowFirst, {backgroundColor: activeColors.secondary, borderColor: activeColors.tertary}]}>
            <Pressable onPress={() => appearanceChange('Hell')}>
                <View style={styles.row}>
                  <Ionicons name={'sunny-outline'} color={activeColors.text} size={20}/>
                  <Text style={[styles.rowLabel, {color: activeColors.text}]}>  Hell   </Text>
                  
                  <View style={styles.rowSpacer} />
                  
                    <Ionicons name={hellButton ? 'checkmark-circle' : 'ellipse-outline'} color={activeColors.text} size={35}/>
                  
                </View>
              </Pressable>
            </View>
            <View style={[styles.rowWrapper, {backgroundColor: activeColors.secondary, borderColor: activeColors.tertary}]}>
              <Pressable onPress={() => appearanceChange('Dunkel')}>
                <View style={styles.row}>
                <Ionicons name={'moon'} color={activeColors.text} size={20}/>
                  <Text style={[styles.rowLabel, {color: activeColors.text}]}>  Dunkel  </Text>         
                  <View style={styles.rowSpacer} />
                  
                    <Ionicons name={dunkelButton ? 'checkmark-circle' : 'ellipse-outline'} color={activeColors.text} size={35}/>         
                </View>
              </Pressable>
            </View>
            <View style={[styles.rowWrapper, styles.rowLast, {backgroundColor: activeColors.secondary, borderColor: activeColors.tertary}]}>
              <Pressable onPress={() => appearanceChange('System')}>
                <View style={styles.row}>
                
                  <Ionicons name={'phone-portrait-outline'} color={activeColors.text} size={20}/>
                  <Text style={[styles.rowLabel, {color: activeColors.text}]}>  System  </Text>
                  
                  <View style={styles.rowSpacer} />
                  
                    <Ionicons name={SystemButton ? 'checkmark-circle' : 'ellipse-outline'} color={activeColors.text} size={35}/>
                  
                </View>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ressourcen</Text>
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst, {backgroundColor: activeColors.secondary, borderColor: activeColors.tertary}]}>
              <TouchableOpacity
                onPress={() => {
                  openMailAppKontakt();
                }}
                style={styles.row}>
                <Text style={[styles.rowLabel, {color: activeColors.text}]}>Kontakt</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>
            <View style={[styles.rowWrapper, {backgroundColor: activeColors.secondary, borderColor: activeColors.tertary}]}>
              <TouchableOpacity
                onPress={() => {
                  openMailApp();
                }}
                style={styles.row}>
                <Text style={[styles.rowLabel, {color: activeColors.text}]}>Fehler melden</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity> 
            </View>
            {/* <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  rateApp();
                }}
                style={styles.row}>
                <Text style={styles.rowLabel}>Rate in App Store</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View> */}
            <View style={[styles.rowWrapper, styles.rowLast, {backgroundColor: activeColors.secondary, borderColor: activeColors.tertary}]}>
              <TouchableOpacity
                onPress={() => {
                  handleNutzungsbedingungen();
                }}
                style={styles.row}>
                <Text style={[styles.rowLabel, {color: activeColors.text}]}>Nutzungsbedingungen</Text>
                <View style={styles.rowSpacer} />
                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={19} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.contentFooter}>Radian, App Version 1.08 #57395</Text>
        <View style={{height: 80}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'center',
  },
  /** Content */
  content: {
    paddingHorizontal: 16,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#a69f9f',
  },
  /** Section */
  section: {
    paddingVertical: 12,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  /** Profile */
  profile: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileBody: {
    marginRight: 'auto',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  /** Row */
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ababab',
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowLabelLogout: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#dc2626',
  },
});
