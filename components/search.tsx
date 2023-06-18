import {
  StyleProp,
  TextInput,
  View,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../resources/colors";
import { Search, X } from "lucide-react-native";

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
  return (
    <View
      style={[
        style,
        {
          backgroundColor: COLORS.borderBlue,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 9,
          paddingHorizontal: 11,
          gap: 6,
        },
      ]}>
      <Search size={15} color={COLORS.foregroudLightInactive} />
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        placeholderTextColor={COLORS.foregroudLightInactive}
        style={{
          color: COLORS.foregroundLight,
        }}
      />
      {value && (
        <TouchableOpacity
          onPress={() => onChange("")}
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
        </TouchableOpacity>
      )}
    </View>
  );
};
