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
        backgroundColor: Theme[0].colors.gray2
    },
    title: {
        fontSize: Theme[0].typography.fontSizes[1],
        color: Theme[0].colors.white,
        fontWeight: "bold"
    },
    label: {
        fontSize: Theme[0].typography.fontSizes[2],
        color: Theme[0].colors.gray1,
        marginBottom: 8
    }
})