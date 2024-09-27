import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";

const AdjustMeditaiton = () => {
  const { setDuration } = useContext(TimerContext);
  const handlePress = (duration: number) => {
    setDuration(duration);
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
                handlePress(10);
              }}
              containerStyles="mb-5"
            />
            <CustomButton
              title="5minutes"
              onPress={() => {
                handlePress(5 * 60);
              }}
              containerStyles="mb-5"
            />
            <CustomButton
              title="10minutes"
              onPress={() => {
                handlePress(10 * 60);
              }}
              containerStyles="mb-5"
            />
            <CustomButton
              title="15minutes"
              onPress={() => {
                handlePress(15 * 60);
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
