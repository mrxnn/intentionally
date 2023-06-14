import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "../../components/tabs";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />

      <Slot />

      <Tabs />
    </>
  );
}
