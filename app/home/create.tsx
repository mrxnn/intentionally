import { useCallback } from "react";
import { Redirect, Tabs, useRouter } from "expo-router";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../resources/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import GradientCircle from "../../resources/graphics/gradient-circle.png";
import { Landmark } from "lucide-react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

export default () => {
  return (
    <>
      <LinearGradient
        colors={[COLORS.backgroundBlueLight, COLORS.backgroundBlueDark]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <Image source={GradientCircle} style={{ position: "absolute" }} />
    </>
  );
};
