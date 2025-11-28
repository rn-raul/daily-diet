import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/Home";
import { Create } from "@/screens/Create";
import { Estatisticas } from "@/screens/Estatisticas";


const Stack = createNativeStackNavigator();

export function StackRouter() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Estatisticas" component={Estatisticas} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
}