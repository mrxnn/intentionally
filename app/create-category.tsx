import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { X } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../resources/colors";
import { Background } from "../components/background";
import { useGlobalStore } from "../stores/global.store";
import { FONTS } from "../resources/fonts";

const INPUT_HEIGHT = 60;
const INPUT_PADDING = 16;

export default () => {
  let router = useRouter();
  let emojiInputRef = useRef(null);
  let addCategory = useGlobalStore((state) => state.addCategory);
  let [icon, setIcon] = useState("");
  let [name, setName] = useState("");
  let [type, setType] = useState<"Income" | "Expense">("Income");

  let handleCreate = () => {
    addCategory({ icon, name, type });
    router.back();
  };

  useEffect(() => {
    emojiInputRef?.current?.focus();
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
          style={{ width: 40, alignItems: "flex-start" }}>
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
          }}>
          NEW CATEGORY
        </Text>

        <TouchableOpacity
          onPress={handleCreate}
          style={{ width: 40, justifyContent: "flex-end" }}>
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
          <View style={{}}>
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
                  Icon
                </Text>
                <Text
                  style={{
                    color: COLORS.foregroudLightInactive,
                    fontFamily: FONTS.primaryRegular,
                    fontSize: 13,
                  }}>
                  Select an emoji
                </Text>
              </View>
              <TextInput
                ref={emojiInputRef}
                value={icon}
                onChangeText={setIcon}
                placeholder="Required"
                placeholderTextColor={COLORS.foregroudLightInactive}
                style={{
                  fontFamily: FONTS.primaryMedium,
                  fontSize: 14,
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
                Name
              </Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Required"
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
                Type
              </Text>
              <Text
                style={{
                  color: COLORS.foregroudLightInactive,
                  fontFamily: FONTS.primaryRegular,
                  fontSize: 13,
                }}>
                Income / Expense
              </Text>
            </View>
            <TextInput
              value={type}
              onChangeText={(v) => setType(v as typeof type)}
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
      </View>
    </>
  );
};
