import { BlurView } from "expo-blur";
import { View, Text, TouchableOpacity } from "react-native";
import { Landmark, Wallet, BarChart3, Plus } from "lucide-react-native";
import { COLORS } from "../resources/colors";
import { usePathname, useRouter } from "expo-router";
import { ReactNode, useState } from "react";

export const Tabs = () => {
  let pathname = usePathname();
  let router = useRouter();
  let [cachedPathname, setCachedPathname] = useState("");

  let handleCreate = () => {
    setCachedPathname(pathname);
    router.push("/create");
  };

  return (
    <BlurView
      intensity={70}
      tint="dark"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 84,
        flexDirection: "row",
        paddingLeft: 12,
        borderTopWidth: 1,
        borderTopColor: COLORS.borderBlue,
        paddingBottom: 18,
      }}>
      <TabItem
        name="Transactions"
        icon={<Landmark color={COLORS.foregroundLight} size={24} />}
        url="/home/transactions"
        pathname={pathname}
        previousPathname={cachedPathname}
      />
      <TabItem
        name="Budget"
        icon={<Wallet color={COLORS.foregroundLight} size={24} />}
        url="/home/budget"
        pathname={pathname}
        previousPathname={cachedPathname}
      />
      <TabItem
        name="Insights"
        icon={<BarChart3 color={COLORS.foregroundLight} size={24} />}
        url="/home/insights"
        pathname={pathname}
        previousPathname={cachedPathname}
      />
      <TouchableOpacity
        onPress={handleCreate}
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View
          style={{
            backgroundColor: COLORS.primaryBlue,
            width: 46,
            height: 46,
            borderRadius: 999,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Plus color={COLORS.foregroundLight} size={24} />
        </View>
      </TouchableOpacity>
    </BlurView>
  );
};

const TabItem = ({
  name,
  icon,
  url,
  pathname,
  previousPathname,
}: {
  name: string;
  icon: ReactNode;
  url: string;
  pathname: string;
  previousPathname: string;
}) => {
  let router = useRouter();
  let isActive =
    pathname === url || (pathname === "/create" && previousPathname === url);

  return (
    <TouchableOpacity
      onPress={() => router.push(url)}
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        opacity: isActive ? 1 : 0.4,
      }}>
      {icon}
      <Text
        style={{ color: COLORS.foregroundLight, fontSize: 12, marginTop: 4 }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
