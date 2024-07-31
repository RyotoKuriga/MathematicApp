import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const stylesUebungen = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  mathText: {
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  taskContainer: {
    padding: 10,
    alignItems: 'flex-start', // Linksbündig ausrichten
  },
  titleContainer: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  },
  solutionText: {
    fontSize: 20,
  }
  
});

export default stylesUebungen;