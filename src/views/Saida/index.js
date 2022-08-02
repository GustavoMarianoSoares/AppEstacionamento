import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import Header from "../../components/Header";
import api from '../../services/api';

export default function Saida({navigation}) {

  const [text, setText] = useState('');

  const payPlate = () =>{
    api.post(`/parking/${text}/pay`)
    .then( ({data}) => alert('Placa paga com sucesso') )
    .catch( ({e}) => alert('Erro ao pagar a placa') )
  }

  const quitPlate = () =>{
    api.post(`/parking/${text}/out`)
    .then( ({data}) => alert('Placa pronta para saida') )
    .catch( ({e}) => alert('Erro ao liberar a saida da placa') )
  }

  return (
    <View>
      <Header/>

      <View style={styles.select}>
        <TouchableOpacity onPress= { () => navigation.navigate('Entrada')}>
          <View style={styles.viewEntry}>        
            <Text style={styles.entry}>Entrada</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.viewExit}>
          <Text style={styles.exit}>Saida</Text>
        </View>
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

      <TouchableOpacity onPress={() => payPlate()} disabled = { text.length == 8 ? false : true } style={text.length == 8 ? styles.purpleButton : styles.disabledButton}>
        <Text style={text.length == 8 ? styles.whiteText : styles.grayText}>PAGAMENTO</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => quitPlate()} disabled = { text.length == 8 ? false : true } style={text.length == 8 ? styles.whiteButton : styles.disabledWhiteButton}>
        <Text style={text.length == 8 ? styles.purpleText : styles.grayText}>SAÍDA</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress= { () => navigation.navigate('Historico', {text: text})} disabled = { text.length == 8 ? false : true }>
        <Text style={styles.historic}>VER HISTÓRICO</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}