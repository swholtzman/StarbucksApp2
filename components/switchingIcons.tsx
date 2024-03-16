// switchingIcons.tsx in ./components/switchingIcons.tsx
import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export default function SwitchingIcons({
    mainIcon,
    secondaryIcon,
    functionHandler,
  }) {
    const [icon, setIcon] = useState(mainIcon);
  
    const handleIconPress = () => {
      setIcon((prevIcon) => (prevIcon === mainIcon ? secondaryIcon : mainIcon));
  
      if (functionHandler) {
        functionHandler();
      }
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon} onPress={handleIconPress}>
          <AntDesign name={icon} size={20} color="grey" />
        </TouchableOpacity>
      </View>
    );
  }
  
const styles = StyleSheet.create({
  container: {},
  icon: {},
});
