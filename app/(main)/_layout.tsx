import { Stack } from "expo-router";
import React from "react";

type Props = {};

const Layout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Today's Games", // Title for the screen
          headerStyle: {
            backgroundColor: "#121212", // Match the dark theme background
          },
          headerTintColor: "#FFD700", // Match the gold text color
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="game/[id]"
        options={{
          title: "Game Details",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#FFD700",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
        }}
      />
    </Stack>
  );
};

export default Layout;
