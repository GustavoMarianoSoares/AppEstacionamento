import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import Header from "../../components/Header";
import api from '../../services/api';

export default function Entrada({navigation}) {

  const [text, setText] = useState('');

  const postPlate = () =>{
    api.post('/parking', {
      plate: text
    }).then( ({data}) => alert('Placa cadastrada com sucesso') )
    .catch( ({e}) => alert('Erro ao cadastrar a placa'))
  }

  return (
    <View>
      <Header/>

      <View style={styles.select}>
        <View style={styles.viewEntry}>
          <Text style={styles.entry}>Entrada</Text>
        </View>
        <TouchableOpacity onPress= { () => navigation.navigate('Saida')}>
          <View style={styles.viewExit}>
            <Text style={styles.exit}>Saida</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.numberLabel}>Número da placa:</Text>

      <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="AAA-0000"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        maxLength={8}
      />

      <TouchableOpacity onPress={() => postPlate()} disabled = { text.length == 8 ? false : true } style={text.length == 8 ? styles.greenButton : styles.disabledButton}>
        <Text style={text.length == 8 ? styles.whiteText : styles.grayText}>CONFIRMAR ENTRADA</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}