import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator  } from 'react-native';
import styles from "./styles";
import Header from "../../components/Header";
import api from '../../services/api';

export default function Saida({navigation}) {

  const [text, setText] = useState('');
  const [show, setShow] = useState(false)

  const showConfirmDialogPay = () => {
    return Alert.alert(
      "Confirmar o pagamento da placa abaixo?",
      `${text}`,
      [
        {
          text: "Confirmar",
          onPress: () => {
            const payPlate = () =>{
              api.post(`/parking/${text}/pay`)
              .then( () => 
              Alert.alert('Placa paga com sucesso',''), 
              setShow(true),
              setTimeout(() => {setShow(false)}
              , 1000))
              .catch( () => Alert.alert('Erro ao pagar a placa', '') )
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
      `${text}`,
      [
        {
          text: "Liberar Saída",
          onPress: () => {
            const quitPlate = () =>{
              api.post(`/parking/${text}/out`)
              .then( () => 
              Alert.alert('Placa pronta para saida',''), 
              setShow(true),
              setTimeout(() => {setShow(false)}
              , 1000))
              .catch( () => Alert.alert('Erro ao liberar a saida da placa', '') )
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

      <ActivityIndicator style={styles.loading}size="large" color="#26C6DA" animating={show}/>
      </View>
    </View>
  );
}