import { useFonts } from "expo-font";
import {
  useFonts as useInter,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import {
  useFonts as useSpaceGrotesk,
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";

export const useFont = () => {
  let [fontsLoaded] = useFonts({
    "TT Commons Thin": require("../resources/fonts/tt-commons/TT-Commons-Thin.otf"),
    "TT Commons ExtraLight": require("../resources/fonts/tt-commons/TT-Commons-ExtraLight.otf"),
    "TT Commons Light": require("../resources/fonts/tt-commons/TT-Commons-Light.otf"),
    "TT Commons Regular": require("../resources/fonts/tt-commons/TT-Commons-Regular.otf"),
    "TT Commons Medium": require("../resources/fonts/tt-commons/TT-Commons-Medium.otf"),
    "TT Commons DemiBold": require("../resources/fonts/tt-commons/TT-Commons-DemiBold.otf"),
    "TT Commons Bold": require("../resources/fonts/tt-commons/TT-Commons-Bold.otf"),
    "TT Commons ExtraBold": require("../resources/fonts/tt-commons/TT-Commons-ExtraBold.otf"),
    "TT Commons Black": require("../resources/fonts/tt-commons/TT-Commons-Black.otf"),
  });

  let [circular] = useFonts({
    "Circular Book": require("../resources/fonts/circular/book.otf"),
    "Circular Medium": require("../resources/fonts/circular/medium.otf"),
    "Circular Bold": require("../resources/fonts/circular/bold.otf"),
    "Circular Black": require("../resources/fonts/circular/black.otf"),
  });

  const [interLoaded] = useInter({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const [spaceGroteskLoaded] = useSpaceGrotesk({
    SpaceGrotesk_300Light,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
  });

  return fontsLoaded && interLoaded && spaceGroteskLoaded && circular;
};

export const FONTS = {
  primaryRegular: "Circular Book",
  primaryMedium: "Circular Medium",
  primarySemibold: "Circular Bold",
  primaryBold: "Circular Black",
};
