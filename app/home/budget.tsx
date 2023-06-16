import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../resources/colors";
import { Plus } from "lucide-react-native";
import Progress from "react-native-circular-progress-indicator";

export default () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontFamily: "TT Commons DemiBold",
                fontSize: 24,
              }}>
              Monthly budget
            </Text>
            <TouchableOpacity>
              <Plus size={28} />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "TT Commons Medium",
              color: COLORS.primaryBlue,
              letterSpacing: 1,
              marginTop: 40,
              fontSize: 13,
            }}>
            SET BUDGETS
          </Text>
          <View style={{ rowGap: 24, marginTop: 28 }}>
            <Entry
              icon="📜"
              category="Subscriptions"
              totalBudget="500"
              totalSpent="300"
              currency="USD"
            />
            <Entry
              icon="🍉"
              category="Groceries"
              totalBudget="1245"
              totalSpent="934"
              currency="USD"
            />
            <Entry
              icon="🌵"
              category="Environment"
              totalBudget="234"
              totalSpent="456"
              currency="USD"
            />
            <Entry
              icon="🚕"
              category="Transportation"
              totalBudget="727"
              totalSpent="300"
              currency="USD"
            />
          </View>
          <Text
            style={{
              fontFamily: "TT Commons Medium",
              color: COLORS.primaryBlue,
              letterSpacing: 1,
              marginTop: 40,
              fontSize: 13,
            }}>
            UNSET BUDGETS
          </Text>
          <View style={{ rowGap: 24, marginTop: 28 }}>
            <Entry icon="🚕" category="Transportation" />
            <Entry icon="💰" category="Salary" />
            <Entry icon="🌵" category="Environment" />
            <Entry icon="🍄" category="Entertainment" />
            <Entry icon="🍉" category="Groceries" />
            <Entry icon="🚕" category="Transportation" />
            <Entry icon="🌵" category="Environment" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Entry = ({
  icon,
  category,
  totalBudget,
  totalSpent,
  currency,
}: {
  icon: string;
  category: string;
  totalBudget?: string;
  totalSpent?: string;
  currency?: string;
}) => {
  let spentPercentage = (+totalSpent / +totalBudget) * 100;

  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 20,
        alignItems: totalBudget ? "center" : "flex-start",
      }}>
      <Text style={{ paddingBottom: 8, fontSize: 22 }}>{icon}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: COLORS.borderBlue,
          borderBottomWidth: 1,
          paddingBottom: totalBudget ? 8 : 20,
        }}>
        <View
          style={{ gap: 3, transform: [{ translateY: totalBudget ? 0 : 6 }] }}>
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroundLight,
              fontSize: 16,
            }}>
            {category}
          </Text>
          {totalBudget && (
            <Text
              style={{
                fontFamily: "TT Commons Regular",
                color: COLORS.foregroudLightInactive,
              }}>
              {totalSpent} / {totalBudget} {currency}
            </Text>
          )}
        </View>
        {totalBudget && totalSpent && (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Text
              style={{
                color: COLORS.foregroudLightInactive,
                fontSize: 12,
                fontWeight: "500",
              }}>
              {/* {spentPercentage.toFixed()}% */}
            </Text>
            <Progress
              radius={16}
              value={spentPercentage}
              activeStrokeColor={
                spentPercentage > 100 ? COLORS.primaryRed : COLORS.primaryGreen
              }
              inActiveStrokeColor={
                spentPercentage > 100 ? COLORS.primaryRed : COLORS.primaryGreen
              }
              activeStrokeWidth={8}
              inActiveStrokeOpacity={0.2}
              progressValueFontSize={13}
              // showProgressValue={false}
              progressValueStyle={{ fontFamily: "TT Commons DemiBold" }}
            />
          </View>
        )}
        {!totalBudget && (
          <Text
            style={{
              fontSize: 14,
              fontFamily: "TT Commons Medium",
              color: COLORS.primaryBlue,
              letterSpacing: 1,
              transform: [{ translateY: 8 }],
            }}>
            SET
          </Text>
        )}
      </View>
    </View>
  );
};
