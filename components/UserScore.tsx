import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";

interface UserScoreProps {
  profilePicture: string; // URL of the user's profile picture
  username: string; // The user's display name
  score: number; // The user's current score
}

const UserScore: React.FC<UserScoreProps> = ({
  profilePicture,
  username,
  score,
}) => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: profilePicture }}
          resizeMode="cover"
          style={styles.profileImage}
        />
      </View>

      {/* Username and Score */}
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.score}>Score: {score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 15,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flexDirection: "column",
  },
  username: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  score: {
    color: "#FFF",
    fontSize: 14,
  },
});

export default UserScore;
