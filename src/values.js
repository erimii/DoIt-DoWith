import { Dimensions } from 'react-native';


const gridWidth = (Dimensions.get('window').width - 7 * 16)/6;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export {windowWidth, gridWidth, windowHeight}