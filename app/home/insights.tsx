import { SafeAreaView, Text, View } from "react-native";
import { COLORS } from "../../resources/colors";

export default () => {
  return (
    <>
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
            Insights
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};
