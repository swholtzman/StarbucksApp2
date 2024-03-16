// sectionHeader.tsx in ./components/sectionHeader.tsx
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function ComponentName({ title, iconName }) {
  return (
    <View style={styles.container}> 
        <Text style={styles.sectionHeader}>{ title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "hsla(142, 100%, 20%, 0.2)",
    borderBottomWidth: 4,
  },
  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 20,
    fontWeight: '500',
  },

});