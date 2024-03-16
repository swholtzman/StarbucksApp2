// fNameInput.tsx 
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useFormContext } from "../screens/FormContext";

export default function FirstNameInput({ title, inputName }) {
  const { formData, setFormData } = useFormContext();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={title}
          placeholderTextColor="black"
          value={formData[inputName]}
          onChangeText={(text) => setFormData({ ...formData, [inputName]: text })}
        />
        <View style={styles.underline} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    position: "relative",
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
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -10,
    height: 1,
    backgroundColor: "hsla(0, 0%, 50%, 0.2)",
  },
});
