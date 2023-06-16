import { Stack, SplashScreen } from "expo-router";
import { useFont } from "../lib/useFont";

export default function Layout() {
  let fontsLoaded = useFont();

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="create"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
