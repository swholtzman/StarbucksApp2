import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { useNavigation } from '@react-navigation/native';

export default function ComponentName({ title, functionHandler }) {
  return (
    <View style={styles.forgettable}>
        <TouchableOpacity onPress={functionHandler} style={styles.forgetPressable}>
            <Text style={styles.forgetText}>
                { title }
            </Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    forgettable: {},
    forgetPressable: {
    },
    forgetText: {
        color: "hsl(142, 100%, 22.5%)",
        fontWeight: '600',
        fontSize: 15,
    },
});