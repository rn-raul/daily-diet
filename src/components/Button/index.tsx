import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { Icon } from "../Icon";

type Props = {
    title: string;
    label?: string;
    icon?: 'Plus' | 'Pencil' | 'Trash';
}
export function Button({ title, label, icon }: Props) {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <TouchableOpacity style={styles.container}>
                {
                    <Icon name={icon} />
                }
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}