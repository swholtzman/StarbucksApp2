// whiteButton.tsx in ./components/whiteButton.tsx
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from '@react-navigation/native';

export default function WhiteButton({ title, functionHandler }) {
  return (
    <View>
      {/* join now button starts */}
      <View>
        <TouchableOpacity onPress={functionHandler} style={styles.bodyButtons}>
          <Text style={styles.boldText}>{ title }</Text>
        </TouchableOpacity>
      </View>
      {/* join now button ends */}
    </View>
  );
}

const styles = StyleSheet.create({
  bodyButtons: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,

    paddingHorizontal: 15,
    paddingVertical: 7.5,
  },
  boldText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
