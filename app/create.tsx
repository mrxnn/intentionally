import { SafeAreaView, Text, View } from "react-native";
import { COLORS } from "../resources/colors";
import { Background } from "../components/background";

export default () => {
  return (
    <>
      <Background />

      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}>
          <Text
            style={{
              color: COLORS.foregroundLight,
              fontFamily: "TT Commons DemiBold",
              fontSize: 24,
            }}>
            Create
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
