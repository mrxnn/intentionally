import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../resources/colors";
import GradientCircle from "../resources/graphics/gradient-circle.png";

export const Background = ({ showBubble = true }: { showBubble?: boolean }) => {
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

      {showBubble && (
        <Image source={GradientCircle} style={{ position: "absolute" }} />
      )}
    </>
  );
};
