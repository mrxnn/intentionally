import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../resources/colors";
import { Account, useGlobalStore } from "../../stores/global.store";
import { ChevronDown, CreditCard } from "lucide-react-native";

export default () => {
  let accounts = useGlobalStore((state) => state.accounts);

  return (
    <>
      <SafeAreaView>
        <Header />
        <ScrollView style={{ paddingHorizontal: 16, marginTop: 20 }}>
          <View style={{ borderRadius: 8, backgroundColor: "#212832" }}>
            {accounts.map((account, idx) => (
              <AccountCard key={idx} {...account} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
          fontSize: 24,
          fontFamily: "TT Commons DemiBold",
          letterSpacing: -0.4,
        }}>
        Accounts
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
          By date
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

export const AccountCard = (account: Account) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}>
      <CreditCard size={20} />
      <Text
        style={{
          color: COLORS.foregroundLight,
          fontFamily: "TT Commons Medium",
          fontSize: 16,
        }}>
        {account.name}
      </Text>
      <View
        style={{
          marginLeft: "auto",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}>
        <Text
          style={{
            color: COLORS.foregroudLightInactive,
            fontFamily: "TT Commons DemiBold",
          }}>
          {account.amount}
        </Text>
        <Text
          style={{
            color: COLORS.foregroudLightInactive,
            fontFamily: "TT Commons DemiBold",
          }}>
          {account.currency}
        </Text>
      </View>
    </View>
  );
};
