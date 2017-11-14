import { Dimensions, } from 'react-native';
const window = Dimensions.get('window');
export const appStyle = {
  navBar: {
    backgroundColor: '#68efad',
    borderBottomWidth: 0
  },
  header: {
    marginBottom: 50,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
  },
  text: {
    fontSize: 18,
  },
  error: {
    color: 'red',
    fontSize: 11,
    textAlign: 'center',
    height: 21
  },
  textField: {
    height: 30, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: 240,
    margin: 2,
    padding: 4
  },
	button: {
    borderWidth: 1,
		padding:2,
		width: 120,
		height: 30,
    alignItems: 'center',
  },
	wrapper: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#ddd',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  containerBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
 	menu: {
  	flex: 1,
  	width: window.width,
	  height: window.height,
  	padding: 20,
	},
  scrollSection: {
    flex: 0.8
  },
  listItem: {
    height: 40,
    justifyContent: 'center'
  },
  navItem: {
    width:40,
  },
  navTitle: {
    color: 'black'
  }
}
