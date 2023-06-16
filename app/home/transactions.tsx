import { useRouter } from "expo-router";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { COLORS } from "../../resources/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronDown } from "lucide-react-native";

export default () => {
  let router = useRouter();

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            alignItems: "flex-end",
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={{
              backgroundColor: COLORS.backgroundGray,
              paddingVertical: 6,
              paddingHorizontal: 16,
              borderRadius: 999,
              flexDirection: "row",
              alignItems: "center",
              transform: [{ translateY: 16 }],
            }}>
            <Text
              style={{
                color: COLORS.foregroundLight,
                fontSize: 14,
                fontFamily: "TT Commons Medium",
              }}>
              This month
            </Text>
            <ChevronDown color={COLORS.foregroundLight} size={22} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView style={{ marginTop: -90 }}>
        <BarChart />
        <Records />
      </ScrollView>
    </>
  );
};

const BarChart = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 40,
      }}>
      <View style={{ gap: 28, position: "relative" }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", opacity: 0.1 }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            1.8
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", opacity: 0.2 }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            1.6
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", opacity: 0.4 }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            1.4
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", opacity: 0.7 }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            1.2
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            1.0
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            0.8
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            0.6
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            0.4
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            0.2
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              height: 1,
              width: 12,
              backgroundColor: "gray",
              marginRight: 6,
            }}
          />
          <Text
            style={{
              color: "gray",
              fontSize: 12,
              fontFamily: "TT Commons Medium",
            }}>
            0.0
          </Text>
        </View>
      </View>

      <View style={{ alignSelf: "flex-end", marginLeft: 12 }}>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            letterSpacing: -0.4,
            opacity: 0.6,
            fontFamily: "TT Commons Medium",
          }}>
          Income
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "800",
            fontFamily: "TT Commons Bold",
            fontSize: 18,
            marginTop: 2,
          }}>
          $12,000
        </Text>
        <View
          style={{ position: "relative", marginTop: 8, overflow: "hidden" }}>
          <LinearGradient
            colors={[COLORS.primaryBlue, "#0F4888"]}
            style={{
              width: 80,
              height: 240,
              borderRadius: 4,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: -10,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
              gap: 8,
            }}>
            {Array.from({ length: 40 }).map((el, i) => (
              <View
                key={i}
                style={{
                  width: "200%",
                  height: 1,
                  backgroundColor: "#C7CBD0",
                  opacity: 0.8,
                  transform: [{ rotate: "-12deg" }, { translateX: -4 }],
                }}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={{ alignSelf: "flex-end" }}>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            letterSpacing: -0.4,
            opacity: 0.6,
            fontFamily: "TT Commons Medium",
          }}>
          Expenses
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "800",
            fontFamily: "TT Commons Bold",
            fontSize: 18,
          }}>
          $8,200
        </Text>
        <View
          style={{
            width: 80,
            height: 180,
            backgroundColor: COLORS.borderBlue,
            borderRadius: 4,
            marginTop: 8,
          }}
        />
      </View>

      <View style={{ alignSelf: "flex-end" }}>
        <Text
          style={{
            color: "white",
            fontSize: 14,
            letterSpacing: -0.4,
            opacity: 0.6,
            fontFamily: "TT Commons Medium",
          }}>
          Balance
        </Text>
        <Text
          style={{
            color: "white",
            fontWeight: "800",
            fontFamily: "TT Commons Bold",
            fontSize: 18,
          }}>
          $1,130
        </Text>
        <View
          style={{
            width: 80,
            height: 40,
            backgroundColor: COLORS.borderBlue,
            borderRadius: 4,
            marginTop: 8,
          }}
        />
      </View>
    </View>
  );
};

const Records = () => {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Text
          style={{
            fontFamily: "TT Commons Medium",
            color: COLORS.foregroundLight,
            letterSpacing: 1,
          }}>
          TODAY
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: COLORS.backgroundGray,
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 999,
            flexDirection: "row",
            alignItems: "center",
          }}>
          <Text
            style={{
              color: COLORS.foregroundLight,
              fontSize: 14,
              fontFamily: "TT Commons Medium",
            }}>
            Sort By: Time
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ rowGap: 24, marginTop: 28 }}>
        <Record icon="📜" category="Subscriptions" noOfEntries={4} />
        <Record icon="🍉" category="Groceries" noOfEntries={9} />
        <Record icon="🚕" category="Transportation" noOfEntries={2} />
        <Record icon="💰" category="Salary" noOfEntries={2} />
        <Record icon="🌵" category="Environment" noOfEntries={4} />
        <Record icon="🍄" category="Entertainment" noOfEntries={2} />
        <Record icon="🍉" category="Groceries" noOfEntries={9} />
        <Record icon="🚕" category="Transportation" noOfEntries={2} />
      </View>
    </View>
  );
};

const Record = ({
  icon,
  category,
  noOfEntries,
}: {
  icon: string;
  category: string;
  noOfEntries: number;
}) => {
  return (
    <View style={{ flexDirection: "row", columnGap: 20, alignItems: "center" }}>
      <Text style={{ paddingBottom: 8, fontSize: 22 }}>{icon}</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomColor: COLORS.borderBlue,
          borderBottomWidth: 1,
          paddingBottom: 8,
        }}>
        <View style={{ gap: 3 }}>
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroundLight,
              fontSize: 16,
            }}>
            {category}
          </Text>
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroudLightInactive,
            }}>
            {noOfEntries} Entries
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroudLightInactive,
            }}>
            21 €
          </Text>
          <View
            style={{
              width: 4,
              height: 4,
              backgroundColor: category.startsWith("S")
                ? "tomato"
                : COLORS.foregroudLightInactive,
              borderRadius: 999,
            }}
          />
          <Text
            style={{
              fontFamily: "TT Commons Regular",
              color: COLORS.foregroundLight,
            }}>
            $ 18
          </Text>
        </View>
      </View>
    </View>
  );
};
