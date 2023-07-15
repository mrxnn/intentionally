import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../resources/colors";
import { Account, useGlobalStore } from "../../stores/global.store";
import { ChevronDown, CreditCard } from "lucide-react-native";
import { FONTS } from "../../resources/fonts";

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
        paddingTop: Platform.OS === "ios" ? 16 : 40,
      }}>
      <Text
        style={{
          color: COLORS.foregroundLight,
          fontSize: 20,
          fontFamily: FONTS.primarySemibold,
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
            fontSize: 13,
            fontFamily: FONTS.primaryMedium,
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
      <CreditCard size={20} color={COLORS.primaryBlue} />
      <Text
        style={{
          color: COLORS.foregroundLight,
          fontFamily: FONTS.primaryMedium,
          fontSize: 14,
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
            fontFamily: FONTS.primarySemibold,
            fontSize: 13,
          }}>
          {account.amount}
        </Text>
        <Text
          style={{
            color: COLORS.foregroudLightInactive,
            fontFamily: FONTS.primarySemibold,
            fontSize: 13,
          }}>
          {account.currency}
        </Text>
      </View>
    </View>
  );
};
