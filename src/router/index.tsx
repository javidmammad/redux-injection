import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "../screens/Splash";
import { SCREEN } from "./screens";

const Stack = createStackNavigator()
const screenOptions:{} = {
    gestureEnabled: false,
    headerShown: false,
}
export const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={SCREEN.SPLASH_SCREEN} component={SplashScreen}/>
        </Stack.Navigator>
    )
}