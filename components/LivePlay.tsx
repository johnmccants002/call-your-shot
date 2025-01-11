import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Play } from "@/types/Plays";

interface PlayProps {
  play: Play;
}

const LivePlay: React.FC<PlayProps> = ({ play }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Live Play Outcome</Text>

      <Text style={styles.description}>{play.result.description}</Text>
      <Text style={styles.details}>
        {`Event: ${play.result.event} | RBI: ${play.result.rbi}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    borderRadius: 8,
    marginVertical: 50,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  inning: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: "#FFD700",
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 5,
  },

  matchup: {
    fontSize: 16,
    color: "#B0C4DE",
  },
});

export default LivePlay;
