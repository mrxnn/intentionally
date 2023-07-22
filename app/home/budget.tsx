import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../resources/colors";
import { ChevronDown, Plus } from "lucide-react-native";
import Progress from "react-native-circular-progress-indicator";
import { SearchBox } from "../../components/search";
import { Category, useGlobalStore } from "../../stores/global.store";
import { Banner } from "../../components/banner";
import { FONTS } from "../../resources/fonts";

export default () => {
  let router = useRouter();
  let [search, setSearch] = useState("");
  let categories = useGlobalStore((state) => state.categories);
  let budgets = categories
    .filter((category) => category.budgets?.length > 0)
    .map((category) => {
      let budget = category.budgets.find(
        (b) => b.month === "7" && b.year === "2023"
      );
      return {
        ...budget,
        ...category,
      };
    })
    .filter((bc) => bc.total);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{
            paddingHorizontal: 16,
            paddingTop: Platform.OS === "ios" ? 16 : 40,
          }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontSize: 20,
                fontFamily: FONTS.primarySemibold,
                letterSpacing: -0.4,
              }}>
              Monthly budget
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
          <SearchBox
            value={search}
            onChange={setSearch}
            placeholder="Search"
            style={{ marginTop: 20 }}
          />
          <Text
            style={{
              fontFamily: FONTS.primaryMedium,
              color: COLORS.primaryBlue,
              letterSpacing: 1,
              marginTop: 40,
              fontSize: 12,
            }}>
            SET BUDGETS
          </Text>
          <View style={{ rowGap: 24, marginTop: 28 }}>
            {(budgets.length > 0 &&
              budgets.map((bc, idx) => <BudgetItem key={idx} {...bc} />)) || (
              <Banner
                title="Setup a budget"
                text="You haven't setup a budget for this month. To create a budget, pick the categories from the list below."
              />
            )}
          </View>
          <Text
            style={{
              fontFamily: FONTS.primaryMedium,
              color: COLORS.primaryBlue,
              letterSpacing: 1,
              marginTop: 40,
              fontSize: 12,
            }}>
            UNSET BUDGETS
          </Text>
          <View style={{ rowGap: 24, marginTop: 28 }}>
            {categories.map((category, idx) => (
              <CategoryItem
                key={idx}
                {...category}
                isLast={categories.length === idx + 1}
              />
            ))}
          </View>
          <TouchableOpacity
            style={{
              marginLeft: 40,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: COLORS.backgroundGray,
              paddingHorizontal: 8,
              paddingVertical: 8,
              alignSelf: "flex-start",
              marginTop: 16,
              borderRadius: 8,
              gap: 4,
            }}
            onPress={() => router.push("/create-category")}>
            <Plus size={16} />
            <Text
              style={{
                fontSize: 12,
                fontFamily: FONTS.primaryMedium,
                color: COLORS.primaryBlue,
                letterSpacing: 1,
                transform: [{ translateY: 0.4 }],
              }}>
              NEW CATEGORY
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const BudgetItem = ({
  icon,
  name,
  total,
  spent,
  currency,
}: {
  icon: string;
  name: string;
  total: number;
  spent: number;
  currency: string;
}) => {
  let spentPercentage = (spent / total) * 100;

  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 20,
        alignItems: "center",
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
          paddingBottom: 8,
        }}>
        <View style={{ gap: 3 }}>
          <Text
            style={{
              fontFamily: FONTS.primaryRegular,
              color: COLORS.foregroundLight,
              fontSize: 15,
            }}>
            {name}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.primaryRegular,
              color: COLORS.foregroudLightInactive,
              fontSize: 13,
            }}>
            {spent} / {total} {currency}
          </Text>
        </View>
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
            progressValueStyle={{ fontFamily: FONTS.primarySemibold }}
          />
        </View>
      </View>
    </View>
  );
};

const CategoryItem = ({
  icon,
  name,
  isLast,
}: Category & { isLast: boolean }) => {
  let router = useRouter();

  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 20,
        alignItems: "flex-start",
      }}>
      <Text style={{ paddingBottom: 8, fontSize: 22 }}>{icon}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: COLORS.borderBlue,
          borderBottomWidth: isLast ? 0 : 1,
          paddingBottom: 20,
        }}>
        <View style={{ gap: 3, transform: [{ translateY: 6 }] }}>
          <Text
            style={{
              fontFamily: FONTS.primaryRegular,
              color: COLORS.foregroundLight,
              fontSize: 14,
            }}>
            {name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/create-budget",
              params: {
                icon,
                name,
              },
            })
          }>
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.primaryMedium,
              color: COLORS.primaryBlue,
              letterSpacing: 1,
              transform: [{ translateY: 8 }],
            }}>
            CREATE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
