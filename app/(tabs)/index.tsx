import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Typo from "@/components/typo";
import Button from "@/components/Button";
import { colors } from "@/constants/theme";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useAuth } from "@/context/authContext";

const Home = () => {
  const {user} = useAuth()
  console.log("User in home screen: ", user);
  
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}>Logout</Typo>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
