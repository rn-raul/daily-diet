import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Plus, Pencil, Trash, Circle } from "lucide-react-native"
import { Status } from "@/@types/status";

type ItemData = {
    status: Status;
    hora: string;
    name: string;
}
type Props = {
    data: ItemData;
    onPressEdit: () => void;
}
export function CardItem({ data, onPressEdit }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressEdit}>
                <Text style={styles.hora}>{data.hora} | </Text>
            </TouchableOpacity>
            <Text style={styles.name}>{data.name}</Text>
        </View>
    )
}