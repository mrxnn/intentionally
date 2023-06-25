import {
  StyleProp,
  TextInput,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../resources/colors";
import { Search, X } from "lucide-react-native";
import { useState } from "react";

export const SearchBox = ({
  value,
  onChange,
  placeholder,
  style,
}: {
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
}) => {
  let [focused, setFocused] = useState(false);

  return (
    <View
      style={[
        style,
        {
          backgroundColor: COLORS.borderBlue,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          height: 36,
          paddingLeft: 12,
        },
      ]}>
      <Search size={15} color={COLORS.foregroudLightInactive} />
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        placeholderTextColor={COLORS.foregroudLightInactive}
        style={{
          color: COLORS.foregroundLight,
          paddingVertical: 9,
          flex: 1,
        }}
      />
      {value && (
        <TouchableOpacity
          onPress={() => onChange("")}
          style={{
            paddingHorizontal: 11,
            height: "100%",
            justifyContent: "center",
          }}>
          <View
            style={{
              backgroundColor: COLORS.foregroundLight,
              borderRadius: 999,
              marginLeft: "auto",
              width: 16,
              height: 16,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <X size={12} color={COLORS.backgroundBlueDark} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
