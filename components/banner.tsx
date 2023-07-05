import { View, Text, StyleProp, ViewStyle } from "react-native";
import { AlertCircle, HelpCircle } from "lucide-react-native";
import { COLORS } from "../resources/colors";
import { FONTS } from "../resources/fonts";

export const Banner = ({
  type = "info",
  title,
  text,
  style,
}: {
  type?: "info" | "warning";
  title?: string;
  text: string;
  style?: StyleProp<ViewStyle>;
}) => {
  let icon;
  if (type === "info") {
    icon = (
      <HelpCircle
        size={20}
        style={{
          color: COLORS.primaryBlue,
          transform: [{ translateY: title ? 0 : 3 }] as any,
        }}
      />
    );
  } else if (type === "warning") {
    icon = (
      <AlertCircle
        size={20}
        style={{
          color: COLORS.primaryRed,
          transform: [{ translateY: title ? 0 : 3 }] as any,
        }}
      />
    );
  }

  return (
    <View
      style={[
        style,
        {
          backgroundColor: COLORS.backgroundGray,
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 8,
          flexDirection: "row",
          gap: 12,
        },
      ]}>
      {icon}
      <View style={{ flex: 1 }}>
        {title && (
          <Text
            style={{
              color: COLORS.foregroundLight,
              fontFamily: FONTS.primarySemibold,
              fontSize: 14,
              lineHeight: 20,
              marginBottom: 4,
            }}>
            {title}
          </Text>
        )}
        <Text
          style={{
            color: COLORS.foregroudLightInactive,
            fontFamily: FONTS.primaryMedium,
            fontSize: 14,
            lineHeight: 20,
          }}>
          {text}
        </Text>
      </View>
    </View>
  );
};
