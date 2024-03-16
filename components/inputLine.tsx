import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

export default function InputLine({ title, mainIcon, secondaryIcon, functionHandler }) {
  const [icon, setIcon] = useState(mainIcon);

  const handleIconPress = () => {
    // Toggle between mainIcon and secondaryIcon
    setIcon((prevIcon) => (prevIcon === mainIcon ? secondaryIcon : mainIcon));

    // Optionally call additional handler if provided
    if (functionHandler) {
      functionHandler();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={title}
          placeholderTextColor="black"
        />
        <View style={styles.underline} />
      </View>
      <TouchableOpacity
        style={styles.icon}
        onPress={handleIconPress}
      >
        <MaterialIcons name={icon} size={20} color="grey" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    position: 'relative',
  },
  inputContainer: {
    flex: 1, 
    paddingRight: 35, 
  },
  input: {
    fontSize: 15,
    paddingVertical: 0, 
  },
  underline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -10,
    height: 1,
    backgroundColor: 'hsla(0, 0%, 50%, 0.2)', 
  },
  icon: {
    position: 'absolute',
    right: 10, 
    bottom: 10, 
  },
});
