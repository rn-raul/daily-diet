import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import {MaterialIcons} from "@react-native-vector-icons/material-icons"

type Props = {
    onPressBack?: () => void;
}
export function HeaderEstastisticas({ onPressBack }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressBack}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.containerHeader}>
                <Text style={styles.percentage}>90,86%</Text>
                <Text style={styles.subtitle}>das refeições dentro da dieta</Text>
            </View>
        </View>
    )
}