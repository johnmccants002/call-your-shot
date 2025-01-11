import { Button, StyleSheet, View } from "react-native";

import Games from "@/components/screens/Games";
import Ticker from "@/components/Ticker";
import { useState } from "react";

export default function HomeScreen() {
  const [value, setValue] = useState(123456);
  return <Games />;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
