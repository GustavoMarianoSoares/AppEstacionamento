import React, {useEffect, useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import styles from "./styles";
import Header from "../../components/Header";
import arrowback from "../../img/arrowback.png";
import api from '../../services/api';

export default function Historico({route, navigation}) {

    const value = route.params;
    let plate = JSON.stringify(value.text)
    plate = JSON.parse(plate)

    const [teste, setTeste] = useState([])

    useEffect(() =>{
        api.get(`/parking/${plate}`)
        .then((response) => {
          setTeste(response.data)
      })
    }, [])

  return (
    <View>
        <Header />
    
        <View style={styles.content}>
            <TouchableOpacity onPress= { () => navigation.navigate('Saida')}>
              <Image
                  source={arrowback}
              />
            </TouchableOpacity>

            <Text style={styles.blueText}>Placa {plate}</Text>
        </View>
        <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
            {teste.map(teste => 
                <TouchableOpacity style={styles.infosContainer}>
                    <Text style={styles.infosPlate}>TEMPO ATUAL</Text>
                    <Text style={styles.infosTime} key={teste.reservation}>
                        {teste.time}
                    </Text>
                </TouchableOpacity>)}
        </ScrollView>
        </SafeAreaView>
    </View>
  );
}