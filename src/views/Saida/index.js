import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert  } from 'react-native';
import styles from "./styles";
import Header from "../../components/Header";
import api from '../../services/api';

export default function Saida({navigation}) {

  const [text, setText] = useState('');

  const showConfirmDialogPay = () => {
    return Alert.alert(
      "Confirmar o pagamento da placa abaixo?",
      "",
      [
        {
          text: "Confirmar",
          onPress: () => {
            const payPlate = () =>{
              api.post(`/parking/${text}/pay`)
              .then( ({data}) => alert('Placa paga com sucesso') )
              .catch( ({e}) => alert('Erro ao pagar a placa') )
            }
            payPlate()
          },
        },
        {
          text: "Voltar",
        },
      ]
    );
  };

  const showConfirmDialogQuit = () => {
    return Alert.alert(
      "Confirma a saída do veiculo da placa abaixo?",
      "",
      [
        {
          text: "Liberar Saída",
          onPress: () => {
            const quitPlate = () =>{
              api.post(`/parking/${text}/out`)
              .then( ({data}) => alert('Placa pronta para saida') )
              .catch( ({e}) => alert('Erro ao liberar a saida da placa') )
            }
            quitPlate()
          },
        },
        {
          text: "Voltar",
        },
      ]
    );
  };

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
        autoCapitalize='characters'
        style={styles.textInput}
        placeholder="AAA-0000"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        maxLength={8}
      />

      <TouchableOpacity onPress={() => showConfirmDialogPay()} disabled = { text.length == 8 ? false : true } style={text.length == 8 ? styles.purpleButton : styles.disabledButton}>
        <Text style={text.length == 8 ? styles.whiteText : styles.grayText}>PAGAMENTO</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => showConfirmDialogQuit()} disabled = { text.length == 8 ? false : true } style={text.length == 8 ? styles.whiteButton : styles.disabledWhiteButton}>
        <Text style={text.length == 8 ? styles.purpleText : styles.grayText}>SAÍDA</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress= { () => navigation.navigate('Historico', {text: text})} disabled = { text.length == 8 ? false : true }>
        <Text style={styles.historic}>VER HISTÓRICO</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}