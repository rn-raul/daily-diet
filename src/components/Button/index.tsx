import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { Plus, Pencil, Trash } from "lucide-react-native";

type Props = {
  icon?: "plus" | "pencil" | "trash";
  title: string;
  label?: string;
};
export function Button({ title, label, icon }: Props) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity style={styles.container}>
        {icon === icon ? <Plus color="#fff" size={18} /> : undefined}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
