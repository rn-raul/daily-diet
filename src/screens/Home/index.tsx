import { SectionList, View, Text } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { CardPercentage } from "../../components/CardPorcentage";
import { Button } from "@/components/Button";
import { Item } from "@/components/Item";
import { Status } from "@/types/Status";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();
  const DADOS = [
    {
      title: "18.08.23",
      data: [
        { id: "1", time: "08:00", description: "Café", status: Status.IN_DIET },
        {
          id: "2",
          time: "10:00",
          description: "Banana",
          status: Status.IN_DIET,
        },
        {
          id: "3",
          time: "12:00",
          description: "X - Tudo",
          status: Status.IN_DIET,
        },
        {
          id: "4",
          time: "15:00",
          description: "Salada",
          status: Status.IN_DIET,
        },
      ],
    },
    {
      title: "19.08.23",
      data: [
        {
          id: "5",
          time: "09:00",
          description: "Ovos",
          status: Status.OUT_OF_DIET,
        },
        {
          id: "6",
          time: "13:00",
          description: "Frango",
          status: Status.IN_DIET,
        },
      ],
    },
  ];
  const totalRefeicoes = DADOS.reduce(
    (total, secao) => total + secao.data.length,
    0
  );
  const refeicoesNaDieta = DADOS.reduce(
    (total, secao) =>
      total +
      secao.data.filter((item) => item.status === Status.IN_DIET).length,
    0
  );
  const porcentagem =
    totalRefeicoes > 0
      ? ((refeicoesNaDieta / totalRefeicoes) * 100).toFixed(2)
      : "0.00";
  return (
    <View style={styles.container}>
      <Header />
      <CardPercentage
        percentage={Number(porcentagem)}
        onPress={() => navigation.navigate("Estatisticas")}
      />
      <Button title="Nova Refeição" label="Refeições" icon="plus" />
      <View style={styles.listContainer}>
        <SectionList
          sections={DADOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item data={item} onPress={() => {}}/>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          SectionSeparatorComponent={() => (
            <View style={{ marginBottom: 12 }} />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </View>
    </View>
  );
}
