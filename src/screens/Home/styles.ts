import { StyleSheet } from "react-native";
import { Theme } from "@/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.white,
        paddingHorizontal: 24,
        paddingTop: 64
    },
    listContainer:{
        flex: 1,
        width: '100%',
        marginTop: 24,
    },
    separator: {
        width: "100%",
        marginVertical: 8,
    },
    sectionHeader: {
        fontSize: Theme.typography.fontSizes[3],
        fontWeight: 'bold',
        color: Theme.colors.gray1,
    },
})