import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 102,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    percentage: {
        fontSize: Theme.typography.fontSizes[5],
        fontWeight: "bold",
        textAlign: 'center',
    },
    subtitle: {
        fontSize: Theme.typography.fontSizes[2],
        color: Theme.colors.gray2,
        textAlign: 'center',
    }
})