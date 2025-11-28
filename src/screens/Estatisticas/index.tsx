import { View, Text } from "react-native";
import { styles } from "./styles";
import { HeaderEstastisticas } from "@/components/HeaderEstastisticas";
import { CardEstastisticas } from "@/components/CardEstastisticas";
import { useNavigation } from "@react-navigation/native";




export function Estatisticas() {
  const navigation = useNavigation();

  const percentage = 65; // Example percentage value
  const backgroundColor = percentage >= 50 ? "#E5F0DB" : "#F4E6E7";
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <HeaderEstastisticas onPressBack={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.title}>Estatísticas gerais</Text>
        <CardEstastisticas
          number={20}
          description="melhor sequência de pratos dentro da dieta"
        />
        <CardEstastisticas number={109} description="refeições registradas" />
        <View style={styles.row}>
          <View style={styles.halfCard}>
            <Text style={styles.number}>99</Text>
            <Text style={styles.description}>refeições dentro da dieta</Text>
          </View>
          <View style={styles.halfCard}>
            <Text style={styles.number}>10</Text>
            <Text style={styles.description}>refeições fora da dieta</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
