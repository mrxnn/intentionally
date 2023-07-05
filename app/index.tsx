import { Redirect, useRouter } from "expo-router";
import { Text, View, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../resources/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import GradientCircle from "../resources/graphics/gradient-circle.png";
import { ChevronRight } from "lucide-react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Haptics from "expo-haptics";
import { FONTS } from "../resources/fonts";

SplashScreen.preventAutoHideAsync();

export default () => {
  let isFirstTime = true;
  let router = useRouter();
  if (!isFirstTime) return <Redirect href="/home/transactions" />;

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

      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            alignItems: "flex-end",
            marginTop: Platform.OS === "ios" ? 0 : 16,
          }}>
          <TouchableOpacity
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              router.push("/home/transactions");
            }}
            style={{
              backgroundColor: COLORS.backgroundGray,
              paddingVertical: 6,
              paddingHorizontal: 16,
              borderRadius: 999,
              flexDirection: "row",
              alignItems: "center",
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontSize: 12,
                fontFamily: FONTS.primaryMedium,
              }}>
              Skip
            </Text>
            <ChevronRight color={COLORS.foregroundLight} size={22} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: "auto",
            marginBottom: 20,
          }}>
          <Text
            style={{
              color: COLORS.primaryBlue,
              textTransform: "uppercase",
              fontSize: 11,
              letterSpacing: 1,
              fontFamily: FONTS.primaryMedium,
              marginBottom: 18,
            }}>
            Getting Started
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: FONTS.primarySemibold,
              letterSpacing: -0.4,
              color: COLORS.foregroundLight,
              marginBottom: 8,
            }}>
            Hello, Let's finish setting up the account
          </Text>

          <View
            style={{
              borderBottomColor: COLORS.borderBlue,
              borderBottomWidth: 1,
              paddingBottom: 14,
              paddingTop: 22,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontSize: 14,
                letterSpacing: -0.4,
                fontFamily: FONTS.primaryRegular,
              }}>
              Setup your profile
            </Text>
            <ChevronRight color={COLORS.foregroundLight} size={24} />
          </View>
          <View
            style={{
              borderBottomColor: COLORS.borderBlue,
              borderBottomWidth: 1,
              paddingBottom: 14,
              paddingTop: 22,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontSize: 14,
                letterSpacing: -0.4,
                fontFamily: FONTS.primaryRegular,
              }}>
              Customize categories
            </Text>
            <ChevronRight color={COLORS.foregroundLight} size={24} />
          </View>
          <View
            style={{
              paddingBottom: 14,
              paddingTop: 22,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontSize: 14,
                letterSpacing: -0.4,
                fontFamily: FONTS.primaryRegular,
              }}>
              Create your first goal
            </Text>
            <ChevronRight color={COLORS.foregroundLight} size={24} />
          </View>
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    </>
  );
};
