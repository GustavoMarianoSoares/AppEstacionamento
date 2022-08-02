import React from 'react';
import styles from './styles'
import logo from "../../img/logo.png";
import menu from "../../img/menu.png";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Image
                source={logo}
            />
            <TouchableOpacity onPress= { () => navigation.navigate('Menu')}>
              <Image
                  source={menu}
              />
            </TouchableOpacity>
        </View>
    </View>
  );
}