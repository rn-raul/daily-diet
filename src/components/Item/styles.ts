import { Theme } from "@/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 49,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Theme.colors.gray5,
        paddingHorizontal: 16,
        gap: 8
    },
    time: {
        fontSize: Theme.typography.fontSizes[0],
        fontWeight: 'bold',
        color: Theme.colors.gray2
    },
    description: {
        fontSize: Theme.typography.fontSizes[2],
        color: Theme.colors.gray2,
        flex: 1
    }
})