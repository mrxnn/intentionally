import React, { ReactNode, useState } from "react";
import { useRouter } from "expo-router";
import { SmilePlus, Baseline, X, List } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../resources/colors";
import { Background } from "../components/background";

export default () => {
  let router = useRouter();
  let [name, setName] = useState("");
  let [emoji, setEmoji] = useState("🍉");
  let [type, setType] = useState("Income");

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
            fontSize: 16,
          }}>
          Create a new category
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
          paddingHorizontal: 20,
          flex: 1,
          marginTop: 16,
        }}>
        <Field
          title="Type"
          icon={<List size={18} />}
          value={type}
          onChange={setType}
        />
        <Field
          title="Name"
          icon={<Baseline />}
          value={name}
          onChange={setName}
        />
        <Field
          title="Emoji"
          icon={<SmilePlus />}
          value={emoji}
          onChange={setEmoji}
        />
      </View>
    </>
  );
};

const Field = ({
  value,
  onChange,
  title,
  icon,
}: {
  value: string;
  onChange: (v: string) => void;
  title: string;
  icon: ReactNode;
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderBottomColor: COLORS.borderBlue,
        borderBottomWidth: 1,
      }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 18 }}>
        {React.cloneElement(icon as any, {
          size: 20,
          color: COLORS.foregroundLight,
        })}
        <Text
          style={{
            color: COLORS.foregroudLightInactive,
            fontFamily: "TT Commons Regular",
            fontSize: 16,
          }}>
          {title}
        </Text>
      </View>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Required"
        placeholderTextColor={COLORS.foregroudLightInactive}
        style={{
          fontSize: 16,
          fontFamily: "TT Commons Medium",
          color: COLORS.foregroundLight,
        }}
      />
    </View>
  );
};
