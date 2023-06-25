import React, { ReactNode, useState } from "react";
import { useRouter } from "expo-router";
import { SmilePlus, Baseline, X, List } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../resources/colors";
import { Background } from "../components/background";

export default () => {
  let router = useRouter();
  let [emoji, setEmoji] = useState("🍉");
  let [name, setName] = useState("");
  let [type, setType] = useState("");

  let handleCreate = () => {
    console.log({ name, emoji, type });
    router.back();
  };

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
          style={{ width: 40, alignItems: "flex-start" }}>
          <X size={20} color={COLORS.foregroudLightInactive} />
        </TouchableOpacity>

        <Text
          style={{
            color: COLORS.foregroundLight,
            fontFamily: "TT Commons DemiBold",
            textAlign: "center",
            flex: 1,
            fontSize: 14,
            letterSpacing: 1,
          }}>
          NEW CATEGORY
        </Text>

        <TouchableOpacity
          onPress={handleCreate}
          style={{ width: 40, justifyContent: "flex-end" }}>
          <Text
            style={{
              color: COLORS.primaryBlue,
              fontFamily: "TT Commons DemiBold",
              textAlign: "right",
              letterSpacing: 1,
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor: "#394049",
              borderBottomWidth: 1,
              paddingHorizontal: 12,
              height: 54,
            }}>
            <View style={{}}>
              <Text
                style={{
                  color: COLORS.foregroundLight,
                  fontFamily: "TT Commons Medium",
                  fontSize: 16,
                }}>
                Icon
              </Text>
              <Text
                style={{
                  color: COLORS.foregroudLightInactive,
                  fontFamily: "TT Commons Regular",
                }}>
                Select an emoji
              </Text>
            </View>
            <TextInput
              value={emoji}
              onChangeText={setEmoji}
              placeholder="Required"
              placeholderTextColor={COLORS.foregroudLightInactive}
              style={{
                fontFamily: "TT Commons Medium",
                fontSize: 16,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomColor: "#394049",
              borderBottomWidth: 1,
              paddingHorizontal: 12,
              height: 54,
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontFamily: "TT Commons Medium",
                fontSize: 16,
              }}>
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Required"
              placeholderTextColor={COLORS.foregroudLightInactive}
              style={{
                fontFamily: "TT Commons Medium",
                fontSize: 16,
                color: COLORS.foregroudLightInactive,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 12,
              height: 54,
            }}>
            <View style={{}}>
              <Text
                style={{
                  color: COLORS.foregroundLight,
                  fontFamily: "TT Commons Medium",
                  fontSize: 16,
                }}>
                Type
              </Text>
              <Text
                style={{
                  color: COLORS.foregroudLightInactive,
                  fontFamily: "TT Commons Regular",
                }}>
                Income / Expense
              </Text>
            </View>
            <TextInput
              value={type}
              onChangeText={setType}
              placeholder="Required"
              placeholderTextColor={COLORS.foregroudLightInactive}
              style={{
                fontFamily: "TT Commons Medium",
                fontSize: 16,
                color: COLORS.foregroudLightInactive,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};
