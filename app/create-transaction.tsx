import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../resources/colors";
import { Background } from "../components/background";
import { useRouter } from "expo-router";
import { ChevronDown } from "lucide-react-native";
import { FONTS } from "../resources/fonts";

export default () => {
  let router = useRouter();

  return (
    <>
      <Background />

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
              fontFamily: FONTS.primarySemibold,
              fontSize: 24,
            }}>
            Create
          </Text>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              backgroundColor: COLORS.backgroundGray,
              paddingVertical: 6,
              paddingHorizontal: 16,
              borderRadius: 999,
              flexDirection: "row",
              alignItems: "center",
              transform: [{ translateY: 16 }],
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontSize: 14,
                fontFamily: FONTS.primaryMedium,
              }}>
              Close
            </Text>
            <ChevronDown color={COLORS.foregroundLight} size={22} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
