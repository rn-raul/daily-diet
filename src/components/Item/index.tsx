import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Status } from "@/types/Status";
import { StatusIcon } from "../StatusIcon";

type ItemData = {
  status: Status;
  id: string;
  time: string;
  description: string;
};
type Props = {
  data: ItemData;
  onPress: () => void;
};
export function Item({ data, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.time}>{data.time} | </Text>
      <Text style={styles.description}>{data.description}</Text>
      <StatusIcon status={data.status} />
    </TouchableOpacity>
  );
}
