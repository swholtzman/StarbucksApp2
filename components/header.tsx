import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from '@react-navigation/native';

export default function Header({ title, iconName, functionHandler }) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={functionHandler}>
        <AntDesign name={iconName} size={25} color='grey' />
      </TouchableOpacity>

      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: "flex-start", 
    alignItems: 'flex-start', 

    width: "100%",
    
    paddingTop: 75, 
    paddingLeft: 15,
    borderBottomColor: "hsla(0, 0%, 50%, 0.5)",
    borderBottomWidth: 1.5,
  },
  headerText: {
    paddingTop: 15,
    paddingBottom: 15, 
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
});
