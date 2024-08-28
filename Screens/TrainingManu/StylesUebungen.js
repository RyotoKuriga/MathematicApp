import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme';
import { ThemeContext } from '../../Context/themeContext';
import { useContext } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const useStylesUebungen = () => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: activeColors.background,
    alignItems: 'flex-start',
  },
  mathText: {
    textAlign: 'left',
    alignSelf: 'stretch',
    color: activeColors.text,
  },
  taskContainer: {
    padding: 10,
    alignItems: 'flex-start', // Linksbündig ausrichten
  },
  titleContainer: {
    padding: 10,
    backgroundColor: activeColors.background,
    marginBottom: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: activeColors.text
  },
  solution: {
    fontSize: 20,
    backgroundColor: 'white',
    border: 'none',
    fontFamily: 'Arial',
    textAlign: 'left', // Linksbündig ausrichten
  },
  solutionContainer: {
    paddingLeft: 40,
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 20,
  },
  taskText: {
    fontSize: 20,
    color: activeColors.text
  },
  solutionText: {
    fontSize: 20,
    color: activeColors.text
  }
  
});
};

export default useStylesUebungen;