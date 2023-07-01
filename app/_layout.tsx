import { Text } from "react-native";
import { Stack } from "expo-router";
import { useFont } from "../lib/useFont";

export default function Layout() {
  let fontsLoaded = useFont();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="create-transaction"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="create-category"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="create-budget"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
