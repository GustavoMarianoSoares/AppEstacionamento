import {StyleSheet, StatusBar} from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default StyleSheet.create({

containerTotal:{
    backgroundColor: '#4DD0E1',
    flex: 1,
},

whiteText:{
    color: '#FFF',
    fontSize: 25,
    marginTop: 40,
    marginLeft: 40,
},

container:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4DD0E1',
    paddingStart: 16,
    paddingEnd:16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingTop: statusBarHeight,
},

content:{
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
},
});