import { BlurView } from "expo-blur";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Landmark, Wallet, Plus, LayoutList } from "lucide-react-native";
import { COLORS } from "../resources/colors";
import { usePathname, useRouter } from "expo-router";
import { ReactNode, useState } from "react";
import * as Haptics from "expo-haptics";

export const Tabs = () => {
  let pathname = usePathname();
  let router = useRouter();
  let [cachedPathname, setCachedPathname] = useState("");

  let handleCreate = () => {
    setCachedPathname(pathname);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push("/create-transaction");
  };

  return (
    <TabContainer>
      <TabItem
        name="Transactions"
        icon={<LayoutList color={COLORS.foregroundLight} size={24} />}
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
        name="Accounts"
        icon={<Landmark color={COLORS.foregroundLight} size={24} />}
        url="/home/accounts"
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
    </TabContainer>
  );
};

const TabItem = ({
  name,
  icon,
  url,
  pathname,
  previousPathname,
  style,
}: {
  name: string;
  icon: ReactNode;
  url: string;
  pathname: string;
  previousPathname: string;
  style?: StyleProp<ViewStyle>;
}) => {
  let router = useRouter();
  let isActive =
    pathname === url ||
    (pathname.startsWith("/create") && previousPathname === url);

  return (
    <TouchableOpacity
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        router.push(url);
      }}
      style={[
        style,
        {
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          opacity: isActive ? 1 : 0.4,
        },
      ]}>
      {icon}
      <Text
        style={{ color: COLORS.foregroundLight, fontSize: 11, marginTop: 4 }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const TabContainer = ({ children }: { children: ReactNode }) => {
  let styles: StyleProp<ViewStyle> = {
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
  };

  if (Platform.OS === "ios") {
    return (
      <BlurView intensity={70} tint="dark" style={styles}>
        {children}
      </BlurView>
    );
  }

  return (
    <View style={{ ...styles, backgroundColor: COLORS.backgroundBlueDark }}>
      {children}
    </View>
  );
};
