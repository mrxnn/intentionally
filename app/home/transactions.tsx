import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../resources/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Transaction, useGlobalStore } from "../../stores/global.store";
import { TransactionBreakdownChart } from "../../components/transaction-breakdown-chart";
import { ChevronDown } from "lucide-react-native";

export default () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <TransactionBreakdownChart income={1500} expenses={900} />
        <Records />
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

type GroupedTransactions = {
  [category: string]: Transaction[];
};

const Records = () => {
  let transactions = useGlobalStore((state) => state.transactions);
  let grouped: GroupedTransactions = transactions
    .filter((t) => t.datetime.getMonth() === 6)
    .reduce((acc, transaction) => {
      let category = transaction.category.name;
      if (!acc[category]) acc[category] = [];
      acc[category].push(transaction);
      return acc;
    }, {});

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 32 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Text
          style={{
            fontFamily: "TT Commons Medium",
            color: COLORS.foregroundLight,
            letterSpacing: 1,
          }}>
          TODAY
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
          }}>
          <Text
            style={{
              color: COLORS.foregroundLight,
              fontSize: 14,
              fontFamily: "TT Commons Medium",
            }}>
            Sort By: Time
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ rowGap: 24, marginTop: 28 }}>
        {Object.entries(grouped).map(([category, transactions]) => (
          <Record
            key={category}
            icon={transactions[0].category.icon}
            category={category}
            noOfEntries={transactions.length}
          />
        ))}
      </View>
    </View>
  );
};

const Record = ({
  icon,
  category,
  noOfEntries,
}: {
  icon: string;
  category: string;
  noOfEntries: number;
}) => {
  return (
    <View style={{ flexDirection: "row", columnGap: 20, alignItems: "center" }}>
      <Text style={{ paddingBottom: 8, fontSize: 22 }}>{icon}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomColor: COLORS.borderBlue,
          borderBottomWidth: 1,
          paddingBottom: 8,
        }}>
        <View style={{ gap: 3 }}>
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroundLight,
              fontSize: 16,
            }}>
            {category}
          </Text>
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroudLightInactive,
            }}>
            {noOfEntries} Entries
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroudLightInactive,
            }}>
            21 €
          </Text>
          <View
            style={{
              width: 4,
              height: 4,
              backgroundColor: category.startsWith("S")
                ? "tomato"
                : COLORS.foregroudLightInactive,
              borderRadius: 999,
            }}
          />
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroundLight,
            }}>
            $ 18
          </Text>
        </View>
      </View>
    </View>
  );
};
