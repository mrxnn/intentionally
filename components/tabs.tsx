import { BlurView } from "expo-blur";
import { View, Text, TouchableOpacity } from "react-native";
import { Landmark, Wallet, BarChart3, Plus } from "lucide-react-native";
import { COLORS } from "../resources/colors";
import { usePathname, useRouter } from "expo-router";

export const Tabs = () => {
  let pathname = usePathname();
  let router = useRouter();

  return (
    <BlurView
      intensity={70}
      tint="dark"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 84,
        flexDirection: "row",
        paddingLeft: 12,
        borderTopWidth: 1,
        borderTopColor: COLORS.borderBlue,
        paddingBottom: 18,
      }}>
      <TouchableOpacity
        onPress={() => router.push("/home/transactions")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          opacity: pathname.endsWith("/transactions") ? 1 : 0.4,
        }}>
        <Landmark color={COLORS.foregroundLight} size={24} />
        <Text
          style={{ color: COLORS.foregroundLight, fontSize: 12, marginTop: 4 }}>
          Transactions
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/home/budget")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          opacity: pathname.endsWith("/budget") ? 1 : 0.4,
        }}>
        <Wallet color={COLORS.foregroundLight} size={24} />
        <Text
          style={{ color: COLORS.foregroundLight, fontSize: 12, marginTop: 4 }}>
          Budget
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/home/insights")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          opacity: pathname.endsWith("/insights") ? 1 : 0.4,
        }}>
        <BarChart3 color={COLORS.foregroundLight} size={24} />
        <Text
          style={{ color: COLORS.foregroundLight, fontSize: 12, marginTop: 4 }}>
          Insights
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/create")}
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View
          style={{
            backgroundColor: COLORS.primaryBlue,
            width: 46,
            height: 46,
            borderRadius: 999,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Plus color={COLORS.foregroundLight} size={24} />
        </View>
      </TouchableOpacity>
    </BlurView>
  );
};
