import { StyleSheet, Dimensions } from 'react-native';
import MathJax from 'react-native-mathjax';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const stylesTheorie = StyleSheet.create({
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
    fontSize: 24,
    lineHeight: 36,
  },
  header: {
    fontSize: windowWidth/12,
    fontWeight: 'bold',
    color: 'black',
    padding: 20,
    marginBottom: -20,
    textAlign: 'center',
    
  },
  mathExpression: {
    paddingBottom: 20,
  },
  paragraphContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 30,
  },
  link: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
    fontFamily: 'Arial',
    lineHeight: 30,
    margin: 20,
    backgroundColor: 'white',
    color: 'blue',
  },
  conainerMid: {
    alignItems: 'center',
    marginHorizontal: 35,
  },
  textMid: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '300',
    paddingBottom: 20,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  marked: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500',
  },
  space: {
    height: 100,
    width: 200
  }
});

export default stylesTheorie;