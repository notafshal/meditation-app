import { View, Text, Pressable } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const AdjustMeditaiton = () => {
  const handlePress = (duration: number) => {
    router.back();
  };
  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Text>Test</Text>
        <Pressable
          onPress={() => {
            router.back();
          }}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-white text-center font-bold text-3xl mb-8">
            Adjust your meditaion duration
          </Text>
          <View>
            <CustomButton
              title="10seconds"
              onPress={() => {
                console.log(handlePress(10));
              }}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5minutes"
              onPress={() => {
                console.log(handlePress(5 * 60));
              }}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10minutes"
              onPress={() => {
                console.log(handlePress(10 * 60));
              }}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15minutes"
              onPress={() => {
                console.log(handlePress(15 * 60));
              }}
              containerStyles="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditaiton;
