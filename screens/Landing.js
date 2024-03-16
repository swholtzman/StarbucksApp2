// Landing.js in ./screens/Landing.js
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from '@react-navigation/native';

import Cards from "../components/cards";
import LandingHeader from "../components/landingHeader";
import StickyButton from "../components/greenButton";
import BottomNav from "../components/bottomNav";
import WhiteButton from "../components/whiteButton";

export default function App() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <View>
        <LandingHeader />
      </View>

      {/* body starts */}
      <View style={styles.bodyLanding}>
        <View style={styles.cardContainer}>
            <Cards />
        </View>

        <View style={styles.whiteButtonContainer}>
          <WhiteButton 
            title="Join now" 
            functionHandler={() => navigation.push('JoinNow')} 
          />
        </View>
      </View>
      {/* body ends */}

      {/* sticky button starts */}
      <View style={styles.buttonContainer}>
        <StickyButton 
          title={"Join now"}
          functionHandler={() => navigation.push('JoinNow')} />
      </View>
      {/* sticky button ends */}

      <View style={styles.bottomNavContainer}>
        <BottomNav />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 97.5%)",
    alignItems: "center",
  },
  bodyLanding: {
    flex: 1,
    width: "100%",
    padding: "5%",
    paddingHorizontal: "3.5%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  cardContainer: {
    flex: 1,
  },
  whiteButtonContainer: {
    minWidth: 100,
    height: 50,
    bottom: 245,
    alignItems: "flex-start",
    justifyContent: "flex-start",

  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 100,
    right: 15,
  },
  bottomNavContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
