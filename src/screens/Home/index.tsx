import { SectionList, View, Text } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { CardPorcentage } from "../../components/CardPorcentage";
import { Button } from "@/components/Button";
import { CardItem } from "@/components/CardItem";
import { Status } from "@/@types/status";
const sections = [
    {
        title: "28/11/2025",
        data: [
            { id: "1", hora: "08:00", name: "Café da manhã", status: Status.IN_DIET },
            { id: "2", hora: "12:00", name: "Almoço"    , status: Status.OUT_OF_DIET },
        ],
    },
    {
        title: "27/11/2025",
        data: [
            { id: "3", hora: "19:00", name: "Jantar", status: Status.IN_DIET },
        ],
    },
    {
        title: "26/11/2025",
        data: [
            { id: "4", hora: "08:00", name: "Café da manhã", status: Status.IN_DIET },
        ],
    },
    {
        title: "25/11/2025",
        data: [
            { id: "5", hora: "12:00", name: "Almoço", status: Status.OUT_OF_DIET },
        ],
    }, {
        title: "24/11/2025",
        data: [
            { id: "6", hora: "19:00", name: "Jantar", status: Status.IN_DIET },
        ],
    }
];
export function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <CardPorcentage percentage={40.32} />
            <Button title="Nova Refeição" label="Refeições" icon="Plus" />
            <View style={styles.listContainer}>
                <SectionList
                sections={sections}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardItem data={item} onPressEdit={() => {}} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                renderSectionHeader={({ section }) => (
                    <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 8, marginTop: 16 }}>{section.title}</Text>
                )}
            />
            </View>
        </View>
    )
}