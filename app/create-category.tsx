import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../resources/colors";
import { Background } from "../components/background";
import { useRouter } from "expo-router";
import { Circle, SmilePlus, Baseline, X, List } from "lucide-react-native";

export default () => {
  let router = useRouter();

  return (
    <>
      <Background showBubble={false} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderBottomColor: COLORS.borderBlue,
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ width: 40, alignItems: "flex-start" }}>
          <X size={20} color={COLORS.foregroudLightInactive} />
        </TouchableOpacity>

        <Text
          style={{
            color: COLORS.foregroundLight,
            fontFamily: "TT Commons DemiBold",
            textAlign: "center",
            flex: 1,
            fontSize: 16,
          }}>
          Create a new category
        </Text>

        <View style={{ width: 40, justifyContent: "flex-end" }}>
          <Text
            style={{
              color: COLORS.primaryBlue,
              fontFamily: "TT Commons DemiBold",
              textAlign: "right",
              letterSpacing: 1,
            }}>
            SAVE
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          marginTop: 16,
        }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 20,
            borderBottomColor: COLORS.borderBlue,
            borderBottomWidth: 1,
          }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <Baseline size={18} color={COLORS.foregroundLight} />
            <Text
              style={{
                color: COLORS.foregroudLightInactive,
                fontFamily: "TT Commons Regular",
                fontSize: 16,
              }}>
              Category name
            </Text>
          </View>
          <TextInput
            placeholder="Required"
            placeholderTextColor={COLORS.foregroudLightInactive}
            style={{
              fontSize: 16,
              fontFamily: "TT Commons Medium",
              color: COLORS.foregroundLight,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 20,
            borderBottomColor: COLORS.borderBlue,
            borderBottomWidth: 1,
          }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <SmilePlus size={18} color={COLORS.foregroundLight} />
            <Text
              style={{
                color: COLORS.foregroudLightInactive,
                fontFamily: "TT Commons Regular",
                fontSize: 16,
              }}>
              Select an emoji
            </Text>
          </View>
          <TextInput
            value="🍉"
            placeholder="Required"
            placeholderTextColor={COLORS.foregroudLightInactive}
            style={{
              fontSize: 16,
              fontFamily: "TT Commons Medium",
              color: COLORS.foregroundLight,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 20,
          }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
            <List size={18} color={COLORS.foregroundLight} />
            <Text
              style={{
                color: COLORS.foregroudLightInactive,
                fontFamily: "TT Commons Regular",
                fontSize: 16,
              }}>
              Type of category
            </Text>
          </View>
          <TextInput
            value="Income"
            placeholder="Required"
            placeholderTextColor={COLORS.foregroudLightInactive}
            style={{
              fontSize: 16,
              fontFamily: "TT Commons Medium",
              color: COLORS.foregroundLight,
            }}
          />
        </View>
      </View>
    </>
  );
};
