import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "../../components/tabs";
import { Background } from "../../components/background";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />

      <Background />

      <Slot />

      <Tabs />
    </>
  );
}
