import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "./styles";
import logo from "../../img/logo.png";
import close from "../../img/close.png";
import Header from "../../components/Header";

export default function Menu({navigation}) {
  return (
      <View style={styles.containerTotal}>

      <View style={styles.container}>
        <View style={styles.content}>
            <Image
                source={logo}
            />
            <TouchableOpacity onPress= { () => navigation.navigate('Entrada')}>
              <Image
                  source={close}
              />
            </TouchableOpacity>
        </View>
      </View>
        <TouchableOpacity onPress= { () => navigation.navigate('Entrada')}>
          <Text style={styles.whiteText}>Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= { () => navigation.navigate('Saida')}>
          <Text style={styles.whiteText}>Saída</Text>
        </TouchableOpacity>
    </View>
  );
}