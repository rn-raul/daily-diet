import { Theme } from "@/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 49,
        backgroundColor: Theme[0].colors.white,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Theme[0].colors.gray5,
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    hora: {
        fontSize: Theme[0].typography.fontSizes[0],
        fontWeight: "bold",
        color: Theme[0].colors.gray2,
    },
    name: {
        fontSize: Theme[0].typography.fontSizes[2],
        color: Theme[0].colors.gray1,
        flex: 1,
    },
})