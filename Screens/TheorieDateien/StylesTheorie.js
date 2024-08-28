import { StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { act, useContext } from 'react';
import { ThemeContext } from '../../Context/themeContext';
import { colors } from '../../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const useStyles = () => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      backgroundColor: 'white',
      alignItems: 'center'
    },
    imageContainer: {
      alignItems: 'center'
    },
    text: {
      fontSize: scale(20),
      lineHeight: verticalScale(30),
      textAlign: 'left',
      color: activeColors.text,
    },
    header: {
      fontSize: scale(24),
      fontWeight: 'bold',
      color: 'black',
      padding: moderateScale(10),
      marginBottom: scale(-10),
      textAlign: 'center',
      color: activeColors.text,
    },
    mathExpression: {
      paddingBottom: moderateScale(10),
    },
    paragraphContainer: {
      marginLeft: scale(10),
      marginRight: scale(10),
      paddingBottom: moderateScale(20),
      textAlign: 'left',
    },
    link: {
      fontSize: scale(20),
      fontWeight: 'normal',
      fontFamily: 'Arial',
      lineHeight: verticalScale(32),
      margin: moderateScale(10),
      backgroundColor: activeColors.backgroundColor,
      color: 'blue',
    },
    conainerMid: {
      alignItems: 'center',
      marginHorizontal: moderateScale(35),
    },
    textMid: {
      fontSize: scale(24),
      fontStyle: 'italic',
      fontWeight: '300',
      paddingBottom: moderateScale(10),
      textAlign: 'center',
      paddingHorizontal: moderateScale(10),
      color: activeColors.text,
    },
    subHeader: {
      fontSize: scale(28),
      fontWeight: '600',
      color: 'black',
      margin: moderateScale(10),
      textAlign: 'center',
      color: activeColors.text,
    },
    marked: {
      fontSize: scale(20),
      lineHeight: verticalScale(30),
      fontWeight: '500',
      color: activeColors.text,
    },
    space: {
      height: verticalScale(100),
      width: scale(200),
    }
  });
};

export default useStyles;
