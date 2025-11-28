import { TouchableOpacity, View,Text } from "react-native";
import { styles } from "./styles";


type CardPorcentageProps = {
    percentage: number;
};

export function CardPorcentage({ percentage }: CardPorcentageProps) {
    const backgroundColor = percentage >= 35 ? "#E5F0DB" : "#F4E6E7";
    return (
        <View style={[  styles.container, { backgroundColor } ]}>
            <TouchableOpacity>
                <Text style={styles.percentage}>{percentage}%</Text>
                <Text style={styles.subtitle}>das refeições dentro da dieta</Text>
            </TouchableOpacity>
        </View>
    )
}