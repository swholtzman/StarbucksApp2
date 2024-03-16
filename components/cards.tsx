import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

const CARD_WIDTH = 280;
const CARD_MARGIN = 20;
const SNAP_INTERVAL = CARD_WIDTH + CARD_MARGIN;


export default function Cards() {
  const images = [
    {
      src: require("../assets/Slide1.png"),
      caption:
        "Let us treat you -- earn and redeem Stars for free drinks, food and more.",
    },
    {
      src: require("../assets/Slide2.png"),
      caption: "Quick and easy payment, right from the app.",
    },
    {
      src: require("../assets/Slide3.png"),
      caption: "Stop in on your birthday for a special treat on the house.",
    },
    {
      src: require("../assets/Slide4.png"),
      caption:
        "Enjoy Bonus Star challenges, Double Star Days, and exclusive games.",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.rewardsText}>STARBUCKS REWARDS</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.rewardsScroll}
        snapToInterval={SNAP_INTERVAL}
        snapToAlignment="start"
        decelerationRate="fast"
      >
        {images.map((image, index) => (
          <View key={index} style={styles.card}>
            <Image source={image.src} style={styles.image} />
            <Text style={styles.caption}>{image.caption}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 97.5%)",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: 0,
    paddingLeft: 0,
    overflow: 'visible',
  },
  rewardsText: {
    paddingBottom: "4%",

    fontSize: 12,
    fontWeight: "bold",
    color: "hsl(0, 0%, 35%)",
    
  },
  rewardsScroll: {
    flexDirection: "row",
    overflow: 'visible',
  },
  card: {
    width: 300,
    paddingRight: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 5,
  },
  caption: {
    paddingTop: 15,
    lineHeight: 20,

    color: "#000",
    // fontWeight: 'bold',
    textAlign: "left",
  },
});
