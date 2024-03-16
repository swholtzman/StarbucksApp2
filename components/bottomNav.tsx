import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from '@react-navigation/native';

export default function BottomNav() {
  return (
    <View>
      {/* bottom nav starts */}
      <View style={styles.bottomNav}>
        <View style={styles.bottomNavIcon}>
          <Image></Image>
          <Text></Text>
        </View>
        <View style={styles.bottomNavIcon}>
          <Image></Image>
          <Text></Text>
        </View>
        <View style={styles.bottomNavIcon}>
          <Image></Image>
          <Text></Text>
        </View>
        <View style={styles.bottomNavIcon}>
          <Image></Image>
          <Text></Text>
        </View>
      </View>
      {/* bottom nav ends */}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    backgroundColor: "white",

    flexDirection: "row",

    borderTopColor: "hsla(0, 0%, 60%, 0.5)",
    borderTopWidth: 0.5,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,

    padding: 32.5,
  },
  bottomNavIcon: {
    flexDirection: "column",
    color: "hsla(0, 0%, 50%, 0.5)",
  },
});
