import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { X } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../resources/colors";
import { Background } from "../components/background";
import { Banner } from "../components/banner";
import { format, getMonth, getYear, parse } from "date-fns";
import { useGlobalStore } from "../stores/global.store";
import { FONTS } from "../resources/fonts";

const INPUT_HEIGHT = 60;
const INPUT_PADDING = 16;

export default () => {
  let router = useRouter();
  let { icon, name } = useLocalSearchParams();
  let amountInputRef = useRef(null);
  let [amount, setAmount] = useState("");
  let [period, setPeriod] = useState(() => format(new Date(), "MMMM yyyy"));
  let categories = useGlobalStore((state) => state.categories);
  let addBudget = useGlobalStore((state) => state.addBudget);

  let handleCreate = () => {
    let month = getMonth(parse(period, "MMMM yyyy", new Date())) + 1;
    let year = getYear(parse(period, "MMMM yyyy", new Date()));

    let selectedCategory = categories.find((cat) => cat.name === name);
    let budgetForTheCategory = selectedCategory.budgets.find(
      (b) => b.month === month.toString() && b.year === year.toString()
    );

    addBudget(name as string, {
      total: +amount,
      spent: budgetForTheCategory?.spent || 0,
      currency: "USD",
      month: month.toString(),
      year: year.toString(),
    });

    router.back();
  };

  useEffect(() => {
    amountInputRef?.current?.focus();
  }, []);

  return (
    <>
      <Background showBubble={true} />

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
          style={{ width: 60, alignItems: "flex-start" }}>
          <X size={20} color={COLORS.foregroudLightInactive} />
        </TouchableOpacity>

        <Text
          style={{
            color: COLORS.foregroundLight,
            fontFamily: FONTS.primarySemibold,
            textAlign: "center",
            flex: 1,
            fontSize: 12,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}>
          {name}
        </Text>

        <TouchableOpacity
          onPress={handleCreate}
          style={{ width: 60, justifyContent: "flex-end" }}>
          <Text
            style={{
              color: COLORS.primaryBlue,
              fontFamily: FONTS.primarySemibold,
              textAlign: "right",
              letterSpacing: 1,
              fontSize: 12,
            }}>
            CREATE
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 20,
        }}>
        <View
          style={{
            backgroundColor: "#242B35",
            borderRadius: 8,
          }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: INPUT_PADDING,
                height: INPUT_HEIGHT,
              }}>
              <Text
                style={{
                  color: COLORS.foregroundLight,
                  fontFamily: FONTS.primaryMedium,
                  fontSize: 14,
                }}>
                Amount
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <TextInput
                  ref={amountInputRef}
                  value={amount}
                  keyboardType="numeric"
                  onChangeText={setAmount}
                  placeholder="0"
                  placeholderTextColor={COLORS.foregroudLightInactive}
                  style={{
                    fontFamily: FONTS.primaryMedium,
                    fontSize: 14,
                    color: COLORS.foregroudLightInactive,
                  }}
                />
                <Text
                  style={{
                    fontFamily: FONTS.primaryMedium,
                    fontSize: 14,
                    color: COLORS.primaryBlue,
                  }}>
                  USD
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 1,
                marginLeft: INPUT_PADDING,
                backgroundColor: "#394049",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: INPUT_PADDING,
              height: INPUT_HEIGHT,
            }}>
            <View style={{}}>
              <Text
                style={{
                  color: COLORS.foregroundLight,
                  fontFamily: FONTS.primaryMedium,
                  fontSize: 14,
                }}>
                Month
              </Text>
              <Text
                style={{
                  color: COLORS.foregroudLightInactive,
                  fontFamily: FONTS.primaryRegular,
                  fontSize: 13,
                }}>
                Month / Year
              </Text>
            </View>
            <TextInput
              value={period}
              onChangeText={setPeriod}
              placeholder="Required"
              placeholderTextColor={COLORS.foregroudLightInactive}
              style={{
                fontFamily: FONTS.primaryMedium,
                fontSize: 14,
                color: COLORS.foregroudLightInactive,
              }}
            />
          </View>
        </View>
        <Banner
          text="By default, your budgets will be continued to the next month."
          style={{
            marginTop: 16,
          }}
        />
      </View>
    </>
  );
};
