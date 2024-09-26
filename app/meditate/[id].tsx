import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import meditationImages from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/CustomButton";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const [secondsRemain, setSecondsRemain] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);
  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (secondsRemain === 0) {
      setIsMeditating(false);
      return;
    }
    timerId = setTimeout(() => {
      setSecondsRemain(secondsRemain - 1);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [secondsRemain, isMeditating]);
  return (
    <View className="flex-1">
      <ImageBackground
        source={meditationImages[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => {
              router.back();
            }}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800">00:{secondsRemain}</Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton
              title="Start Meditation"
              onPress={() => setIsMeditating(true)}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
