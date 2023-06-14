import { Image, SafeAreaView, Text, View } from "react-native";
import { COLORS } from "../../resources/colors";
import { LinearGradient } from "expo-linear-gradient";
import GradientCircle from "../../resources/graphics/gradient-circle.png";

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

      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}>
          <Text
            style={{
              color: COLORS.foregroundLight,
              fontFamily: "TT Commons DemiBold",
              fontSize: 24,
            }}>
            Insights
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
