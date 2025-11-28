import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
  },
  containerHeader: {
    alignItems: "center",
  },
  percentage: {
    fontSize: Theme.typography.fontSizes[5],
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: Theme.typography.fontSizes[2],
    color: Theme.colors.gray2,
    textAlign: "center",
  },
});
