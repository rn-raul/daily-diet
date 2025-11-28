import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

type CardPercentageProps = {
  percentage: number;
  onPress?: () => void;
};

export function CardPercentage({ percentage, onPress }: CardPercentageProps) {
  const backgroundColor = percentage >= 50 ? "#E5F0DB" : "#F4E6E7";
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.percentage}>{percentage}%</Text>
      <Text style={styles.subtitle}>das refeições dentro da dieta</Text>
    </TouchableOpacity>
  );
}
