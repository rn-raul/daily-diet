import { Theme } from "@/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 89,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.colors.gray6,
        borderRadius: 8,
        marginBottom: 8,
        gap: 4,
    },
    number: {
        fontSize: Theme.typography.fontSizes[4],
        fontWeight: 'bold',
        color: Theme.colors.gray1
    },
    description: {
        fontSize: Theme.typography.fontSizes[1],
        color: Theme.colors.gray2
    }
})