import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../resources/colors";
import { formatNumber } from "../lib/utils";

export const TransactionBreakdownChart = ({
  income,
  expenses,
}: {
  income: number;
  expenses: number;
}) => {
  // Determine the maximum value between income and expenses
  let maxValue = Math.max(income, expenses);

  // Calculate the scale factor based on the maximum value
  let scaleFactor = maxValue !== 0 ? 240 / maxValue : 0;

  // Scale the income and expenses values accordingly
  let scaledIncome = income * scaleFactor;
  let scaledExpenses = expenses * scaleFactor;
  let scaledBalance = (income - expenses) * scaleFactor;

  // Calculate the range and interval for the Y-axis values
  let range = Math.ceil(maxValue); // Round up to the nearest multiple of 7
  let interval = range / 6;

  // Generate the Y-axis values
  let axisLabels = Array.from({ length: 7 }).map((_, index) =>
    Math.round(interval * index)
  );

  // Add one extra to the axis label list just for the UI
  let extra1 = axisLabels[axisLabels.length - 1];
  let extra2 = axisLabels[axisLabels.length - 2];
  let difference = extra1 - extra2;
  axisLabels.push(extra1 + difference);

  return (
    <View
      style={{
        marginLeft: 16,
        paddingLeft: 8,
        flexDirection: "row",
        backgroundColor: "#212832",
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
      }}>
      <View
        style={{
          flex: 1,
          paddingTop: 16,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}>
        <Bar title="Income" value={income} height={scaledIncome} gradient />
        <Bar title="Expenses" value={expenses} height={scaledExpenses} />
        <Bar title="Balance" value={income - expenses} height={scaledBalance} />
      </View>

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "column-reverse",
          paddingTop: 12,
        }}>
        {axisLabels.map((value, idx) => (
          <Measurement key={idx} value={formatNumber(value)} />
        ))}
      </View>
    </View>
  );
};

const Bar = ({
  title,
  value,
  height,
  gradient,
}: {
  title: string;
  value: number;
  height: number;
  gradient?: boolean;
}) => {
  return (
    <View style={{ alignSelf: "flex-end" }}>
      <Text
        style={{
          color: "white",
          fontSize: 14,
          letterSpacing: -0.4,
          opacity: 0.6,
          fontFamily: "TT Commons Medium",
        }}>
        {title}
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "TT Commons Bold",
          fontSize: 18,
          marginBottom: 8,
        }}>
        ${value}
      </Text>
      {gradient && (
        <View
          style={{
            position: "relative",
            overflow: "hidden",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}>
          <LinearGradient
            colors={[COLORS.primaryBlue, "#0F4888"]}
            style={{
              width: 80,
              height: height,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: -12,
              left: 0,
              right: 0,
              bottom: 0,
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
                  transform: [{ rotate: "-15deg" }, { translateX: -4 }],
                }}
              />
            ))}
          </View>
        </View>
      )}
      {gradient || (
        <LinearGradient
          colors={["#373C46", "#2C313B"]}
          style={{
            width: 80,
            height: Math.abs(height),
            backgroundColor: "#393E48",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
      )}
    </View>
  );
};

const Measurement = ({ value }: { value: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 6,
      }}>
      <Text
        style={{
          color: COLORS.foregroudLightInactive,
          fontFamily: "TT Commons Medium",
          fontSize: 12,
        }}>
        {value}
      </Text>
      <View
        style={{
          height: 1,
          width: 12,
          backgroundColor: COLORS.foregroudLightInactive,
        }}
      />
    </View>
  );
};
