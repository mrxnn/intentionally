import { Tabs, usePathname } from "expo-router";
import { Landmark, Wallet, BarChart3 } from "lucide-react-native";
import { COLORS } from "../../resources/colors";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  let pathname = usePathname();

  return (
    <>
      <StatusBar style="light" />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            position: "absolute",
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarBackground: () => (
            <BlurView intensity={60} tint="dark" style={{ flex: 1 }} />
          ),
        }}>
        <Tabs.Screen
          name="transactions"
          options={{
            tabBarLabelPosition: "below-icon",
            tabBarLabel: "Transactions",
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: COLORS.foregroundLight,
            tabBarInactiveTintColor: COLORS.foregroudLightInactive,
            tabBarIcon: () => (
              <Landmark
                size={24}
                color={COLORS.foregroundLight}
                style={{
                  opacity: pathname.endsWith("/transactions") ? 1 : 0.4,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="budget"
          options={{
            tabBarLabelPosition: "below-icon",
            tabBarLabel: "Budget",
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: COLORS.foregroundLight,
            tabBarInactiveTintColor: COLORS.foregroudLightInactive,
            tabBarIcon: () => (
              <Wallet
                size={24}
                color={COLORS.foregroundLight}
                style={{
                  opacity: pathname.endsWith("/budget") ? 1 : 0.4,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="insights"
          options={{
            tabBarLabelPosition: "below-icon",
            tabBarLabel: "Insights",
            tabBarLabelStyle: {
              fontSize: 12,
            },
            tabBarActiveTintColor: COLORS.foregroundLight,
            tabBarInactiveTintColor: COLORS.foregroudLightInactive,
            tabBarIcon: () => (
              <BarChart3
                size={24}
                color={COLORS.foregroundLight}
                style={{
                  opacity: pathname.endsWith("/insights") ? 1 : 0.4,
                }}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
