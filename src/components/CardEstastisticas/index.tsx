import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    number: number;
    description: string;
}
export function CardEstastisticas({ number, description }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}