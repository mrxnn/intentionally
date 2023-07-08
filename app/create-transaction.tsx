import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { X } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../resources/colors";
import { Background } from "../components/background";
import { Banner } from "../components/banner";
import { format } from "date-fns";
import { Transaction, useGlobalStore } from "../stores/global.store";
import { FONTS } from "../resources/fonts";

const INPUT_HEIGHT = 60;
const INPUT_PADDING = 16;

export default () => {
  let router = useRouter();
  let amountInputRef = useRef(null);
  let [amount, setAmount] = useState("");
  let [account, setAccount] = useState("");
  let [category, setCategory] = useState("");
  let [period, setPeriod] = useState(() => format(new Date(), "dd MMMM yyyy"));
  let [note, setNote] = useState("");
  let categories = useGlobalStore((state) => state.categories);
  let accounts = useGlobalStore((state) => state.accounts);
  let addTransaction = useGlobalStore((state) => state.addTransaction);

  let handleCreate = () => {
    let transaction: Transaction = {
      amount: parseInt(amount),
      datetime: new Date(),
      description: note,
      currency: "USD",
      account: accounts.find((acc) => acc.name === account),
      category: categories.find((cat) => cat.name === category),
    };

    addTransaction(transaction);
    router.back();
  };

  useEffect(() => {
    amountInputRef?.current?.focus();
  }, []);

  useEffect(() => {
    setAccount(accounts[0].name);
    setCategory(categories[0].name);
  }, [account, categories]);

  return (
    <>
      <Background showBubble={true} />

      {/* header */}
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
          New Transaction
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
            SAVE
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
          {/* amount */}
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

          {/* account */}
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
                From
              </Text>
              <TextInput
                value={account}
                onChangeText={setAccount}
                placeholder="Account"
                placeholderTextColor={COLORS.foregroudLightInactive}
                style={{
                  fontFamily: FONTS.primaryMedium,
                  fontSize: 14,
                  color: COLORS.foregroudLightInactive,
                }}
              />
            </View>
            <View
              style={{
                height: 1,
                marginLeft: INPUT_PADDING,
                backgroundColor: "#394049",
              }}
            />
          </View>

          {/* category */}
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
                Category
              </Text>
              <TextInput
                value={category}
                onChangeText={setCategory}
                placeholder="Category"
                placeholderTextColor={COLORS.foregroudLightInactive}
                style={{
                  fontSize: 14,
                  fontFamily: FONTS.primaryMedium,
                  color: COLORS.foregroudLightInactive,
                }}
              />
            </View>
            <View
              style={{
                height: 1,
                marginLeft: INPUT_PADDING,
                backgroundColor: "#394049",
              }}
            />
          </View>

          {/* time created */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: INPUT_PADDING,
              height: INPUT_HEIGHT,
            }}>
            <View>
              <Text
                style={{
                  color: COLORS.foregroundLight,
                  fontFamily: FONTS.primaryMedium,
                  fontSize: 14,
                }}>
                Time created
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

        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Write a small note (optional)"
          placeholderTextColor={COLORS.foregroudLightInactive}
          style={{
            fontFamily: FONTS.primaryMedium,
            color: COLORS.foregroudLightInactive,
            backgroundColor: "#242B35",
            borderRadius: 8,
            marginTop: 16,
            paddingHorizontal: 16,
            paddingVertical: 16,
          }}
        />
      </View>
    </>
  );
};
