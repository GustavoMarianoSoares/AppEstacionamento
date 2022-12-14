import React, {useEffect, useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from "./styles";
import Header from "../../components/Header";
import arrowback from "../../img/arrowback.png";
import api from '../../services/api';

export default function Detalhes({route, navigation}) {

    const value = route.params;

    let plate = JSON.stringify(value.plate)
    plate = JSON.parse(plate)

    let paid = JSON.stringify(value.paid)
    paid = JSON.parse(paid)

    let time = JSON.stringify(value.time)
    time = JSON.parse(time)

    let left = JSON.stringify(value.left)
    left = JSON.parse(left)

    const [text, setText] = useState('');

  return (
    <View>
        <Header />
        <View style={styles.container}>
            <TouchableOpacity onPress= { () => navigation.navigate('Historico', {text: plate})}>
                <Image
                    source={arrowback}
                />
            </TouchableOpacity>
            <View style={styles.infos}>
                <Text style={{color:'#9B9B9B'}}>PLACA</Text>
                <Text style={{color:'#00BCD4', fontSize: 38}}>{plate}</Text>
            </View>

            <View style={styles.infos}>
                <Text style={{color:'#9B9B9B'}}>STATUS</Text>
                <Text style={{color:'#0A261D', fontSize: 24}}>{left == true ? 'Não estacionado' : 'Estacionado' }</Text>
            </View>

            <View style={styles.infos}>
                <Text style={{color:'#9B9B9B'}}>TEMPO ATUAL</Text>
                <Text style={{color:'#0A261D', fontSize: 24}}>{time}</Text>
            </View>

            <View style={styles.infos}>
                <Text style={{color:'#9B9B9B'}}>PAGAMENTO</Text>
                <Text style={{color:'#0A261D', fontSize: 24}}>{paid == true ? 'Pago' : 'Não pago'}</Text>
            </View>
        </View>
    </View>
  );
}