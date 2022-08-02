import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container:{
    justifyContent: "center",
},

numberLabel:{
    color: '#9B9B9B',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
},

textInput:{
    backgroundColor: '#FFFBE6',
    borderRadius: 4,
    fontSize: 30,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center'
},

purpleButton:{
    backgroundColor: '#A769B2',
    borderRadius: 4,
    marginTop: 20,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
},

whiteButton:{
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginTop: 20,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: '#A769B2',
},

disabledButton:{
    backgroundColor: '#DADADA',
    borderRadius: 4,
    marginTop: 20,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
},

disabledWhiteButton:{
    backgroundColor: '#FFF',
    borderRadius: 4,
    marginTop: 20,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: '#DADADA',
},

purpleText:{
    fontSize: 15,
    color: '#A769B2',
},

whiteText:{
    fontSize: 15,
    color: '#FFF',
},

grayText:{
    fontSize: 15,
    color: '#9B9B9B',
},

historic:{
    color: '#00BCD4',
    marginTop: 20,
    textAlign: "center",
},

select: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
},

entry:{
    color: '#9B9B9B',
    fontSize: 20,
},

exit:{
    color: '#4DD0E1',
    fontSize: 20,
},

viewEntry:{
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    padding: 50
},

viewExit:{
    borderBottomColor: '#4DD0E1',
    borderBottomWidth: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    padding: 50
},

loading:{
    marginTop: 50
},
});