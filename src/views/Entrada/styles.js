import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container:{
    justifyContent: "center",
},

numberLabel:{
    color: '#9B9B9B',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 50,
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

greenButton:{
    backgroundColor: '#28DD91',
    borderRadius: 4,
    marginTop: 20,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
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

whiteText:{
    fontSize: 15,
    color: '#FFF',
},

grayText:{
    fontSize: 15,
    color: '#9B9B9B',
},

select: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
},

entry:{
    color: '#4DD0E1',
    fontSize: 20,
},

exit:{
    color: '#9B9B9B',
    fontSize: 20,
},

viewEntry:{
    borderBottomColor: '#4DD0E1',
    borderBottomWidth: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    padding: 50
},

viewExit:{
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    padding: 50
},
});