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

    const [apiValues, setApiValues] = useState([])

    useEffect(() =>{
        api.get(`/parking/${plate}`)
        .then((response) => {
          setApiValues(response.data)
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
            {apiValues.map(apiValues => 
                <TouchableOpacity style={styles.infosContainer} onPress= { () => navigation.navigate('Detalhes', {plate: plate, paid: apiValues.paid, time: apiValues.time, left: apiValues.left})}>
                    <Text style={styles.infosPlate}>TEMPO ATUAL</Text>
                    <Text style={styles.infosTime} key={apiValues.reservation}>
                        {apiValues.time}
                    </Text>

                    <Text style={styles.infosPlate}>PAGAMENTO</Text>

                    <Text style={styles.infosTime} key={apiValues.reservation}>
                        {apiValues.paid.toString()}
                    </Text>
                </TouchableOpacity>)}
        </ScrollView>
        </SafeAreaView>
    </View>
  );
}