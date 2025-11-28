import { StyleSheet } from "react-native";
import { Theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 64,
  },
  content: {
    flex: 1,
    width: "100%",
    marginTop: 32,
    backgroundColor: Theme.colors.white,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: Theme.typography.fontSizes[1],
    fontWeight: "bold",
    color: Theme.colors.gray1,
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  halfCard: {
    width: "48%",
    backgroundColor: Theme.colors.gray6,
    borderRadius: 9,
    padding: 16,
    alignItems: "center",
  },
  number: {
    fontSize: Theme.typography.fontSizes[4],
    fontWeight: "bold",
    color: Theme.colors.gray1,
  },
  description: {
    fontSize: Theme.typography.fontSizes[1],
    color: Theme.colors.gray2,
    textAlign: "center",
  },
});
