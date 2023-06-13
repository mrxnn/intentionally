import { Stack, SplashScreen } from "expo-router";
import { useFont } from "../hooks/useFont";

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
      }}
    />
  );
}
