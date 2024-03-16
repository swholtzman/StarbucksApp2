// SignIn.js
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from 'aws-amplify';

import Header from "../components/header";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import Forgettable from "../components/greenPressable";
import StickyButton from "../components/greenButton";
import { useFormContext } from "./FormContext";

export default function SignIn() {
  const navigation = useNavigation();
  const { formData } = useFormContext();

  const signInHandler = async () => {
    const { email, password } = formData;
    try {
      const user = await Auth.signIn(email, password);
      console.log('Sign in success', user);
      navigation.navigate("Main"); // Adjust with your main screen route
    } catch (error) {
      console.error('error signing in', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <>
      <ScrollView>
        <Header
          title="Sign in to Rewards"
          iconName="close"
          functionHandler={() => navigation.goBack()}
        />
        <View style={styles.inputContainer}>
          <EmailInput inputName="email" title="Email" />
          <PasswordInput 
              inputName="password"
              class="password"
              title="Password"

              style={styles.inputLine}

              mainIcon={"visibility-off"}
              secondaryIcon={"visibility"}
              functionHandler={null}
            />
        </View>
        <View style={styles.forgettableContainer}>
          <Forgettable title="Forgot password?" />
          <Forgettable title="Forgot username?" />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <StickyButton title={"Sign in"} functionHandler={signInHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 97.5%)",
    alignItems: "center",
  },
  inputContainer: {
    padding: 25,
  },
  inputLine: {},
  forgettableContainer: {
    padding: 25,
    paddingTop: 30,

    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 200,
    height: 120,
  },
  forgettableLines: {
    marginBottom: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    right: 15,
  },
});
