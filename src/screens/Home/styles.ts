import { StyleSheet } from "react-native";
import { Theme } from "@/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme[0].colors.white,
        paddingHorizontal: 24,
        paddingTop: 64
    },
    listContainer:{
        flex: 1,
        width: '100%',
        marginTop: 24,
        marginBottom: 16
    }
})