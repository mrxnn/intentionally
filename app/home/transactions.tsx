import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../resources/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Transaction, useGlobalStore } from "../../stores/global.store";
import { TransactionBreakdownChart } from "../../components/transaction-breakdown-chart";
import { ChevronDown } from "lucide-react-native";
import { FONTS } from "../../resources/fonts";

export default () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView style={{ marginTop: 20 }}>
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
          fontFamily: FONTS.primarySemibold,
          letterSpacing: -0.4,
        }}>
        Dashboard
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
  let size = Object.entries(grouped).length;

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 32, paddingBottom: 110 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Text
          style={{
            fontFamily: FONTS.primaryMedium,
            color: COLORS.foregroundLight,
            letterSpacing: 1,
            fontSize: 12,
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
              fontSize: 13,
              fontFamily: FONTS.primaryMedium,
            }}>
            Sort By: Time
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ rowGap: 24, marginTop: 28 }}>
        {Object.entries(grouped).map(([category, transactions], idx) => (
          <Record
            key={category}
            icon={transactions[0].category.icon}
            category={category}
            noOfEntries={transactions.length}
            last={idx === size - 1}
            primaryAmount={{
              currency: "$",
              type: "prefix",
              value: transactions
                .map((t) => t.amount)
                .reduce((acc, curr) => acc + curr, 0),
            }}
            secondaryAmount={{
              currency: "LKR",
              type: "postfix",
              value:
                transactions
                  .map((t) => t.amount)
                  .reduce((acc, curr) => acc + curr, 0) * 311.07, // mutiply by the exchange rate
            }}
          />
        ))}
      </View>
    </View>
  );
};

type Amount = {
  value: number;
  currency: string;
  type: "prefix" | "postfix";
};

const Record = ({
  icon,
  category,
  noOfEntries,
  primaryAmount,
  secondaryAmount,
  last,
}: {
  icon: string;
  category: string;
  noOfEntries: number;
  primaryAmount: Amount;
  secondaryAmount?: Amount;
  last?: boolean;
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
          borderBottomWidth: last ? 0 : 0.6,
          paddingBottom: 8,
        }}>
        <View style={{ gap: 3 }}>
          <Text
            style={{
              fontFamily: FONTS.primaryRegular,
              color: COLORS.foregroundLight,
              fontSize: 14,
            }}>
            {category}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.primaryRegular,
              color: COLORS.foregroudLightInactive,
              fontSize: 13,
            }}>
            {noOfEntries} Entries
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: FONTS.primaryMedium,
              color: COLORS.foregroudLightInactive,
              fontSize: 13,
            }}>
            {(secondaryAmount.type === "prefix" && (
              <>
                {secondaryAmount?.currency} {secondaryAmount?.value.toFixed()}
              </>
            )) || (
              <>
                {secondaryAmount?.value.toFixed()} {secondaryAmount?.currency}
              </>
            )}
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
              fontFamily: FONTS.primaryMedium,
              color: COLORS.foregroundLight,
              fontSize: 13,
            }}>
            {(primaryAmount.type === "prefix" && (
              <>
                {primaryAmount?.currency} {primaryAmount?.value.toFixed()}
              </>
            )) || (
              <>
                {primaryAmount?.value.toFixed()} {primaryAmount?.currency}
              </>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};
