import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../resources/colors";
import { useGlobalStore } from "../../stores/global.store";
import { ChevronDown } from "lucide-react-native";

export default () => {
  let accounts = useGlobalStore((state) => state.accounts);

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={{ paddingHorizontal: 16 }}>
          {accounts.map((account, idx) => (
            <Text
              key={idx}
              style={{
                color: COLORS.foregroundLight,
                fontFamily: "TT Commons Regular",
              }}>
              {JSON.stringify(account, null, 2)}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
      }}>
      <Text
        style={{
          color: COLORS.foregroundLight,
          fontSize: 20,
          fontFamily: "TT Commons Medium",
          letterSpacing: -0.4,
        }}>
        Transactions
      </Text>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: COLORS.backgroundGray,
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}>
        <Text
          style={{
            color: COLORS.foregroundLight,
            fontSize: 14,
            fontFamily: "TT Commons Medium",
          }}>
          November
        </Text>
        <ChevronDown
          size={16}
          color={COLORS.foregroundLight}
          style={{ transform: [{ translateY: 1.2 }] as any }}
        />
      </TouchableOpacity>
    </View>
  );
};
