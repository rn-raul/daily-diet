import { NavigationContainer } from "@react-navigation/native";
import { StackRouter } from "./StackRouter";
export function Routes(){
    return (
        <NavigationContainer>
            <StackRouter />
        </NavigationContainer>
    )
}