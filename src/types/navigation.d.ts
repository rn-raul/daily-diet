export type RootStackParamList = {
  Home: undefined;
  Estatisticas: undefined;
  Create: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}