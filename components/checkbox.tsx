import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";

import { Feather } from "@expo/vector-icons";

const Checkbox = ({
  text,
  caption,
  onPress,
  isChecked,
  containerStyle,
  textStyle,
  checkboxStyle,
}) => {
    const animatedWidth = useRef(new Animated.Value(0)).current;
    const startAnimation = () => {
        const toValue = isChecked ? 0 : 20;
        Animated.timing(animatedWidth, {
            toValue: toValue,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
            startAnimation();
            onPress();
        }}
        style={[
          styles.checkbox,
          isChecked && styles.checkboxSelected,
          checkboxStyle,
        ]}
      >
        <Animated.View style={{width: animatedWidth}}>
            <Feather name="check" size={20} style={styles.icon} />
        </Animated.View>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.buttonTitle}>{text}</Text>
        <Text style={styles.buttonCaption}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  checkbox: {
    borderColor: "hsl(142, 100%, 22.5%)",
    borderWidth: 1.25,
    borderRadius: 7.5,
    height: 25,
    width: 25,
  },
  checkboxSelected: {
    backgroundColor: "hsl(142, 100%, 22.5%)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    top: 1,
    left: 0.5,
    color: "white",
  },
  textContainer: {
    paddingLeft: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  buttonCaption: {
    paddingTop: 10,
    fontSize: 12,
    color: "hsl(0, 0%, 40%)",
  },
});

export default Checkbox;
