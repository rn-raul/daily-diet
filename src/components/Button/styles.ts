import { Theme } from "@/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8,
        width: '100%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.gray2
    },
    title: {
        fontSize: Theme.typography.fontSizes[1],
        color: Theme.colors.white,
        fontWeight: "bold"
    },
    label: {
        fontSize: Theme.typography.fontSizes[2],
        color: Theme.colors.gray1,
        marginBottom: 8
    }
})