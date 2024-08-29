import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from '../screen/onboading/First'
import Second from "../screen/onboading/Second";

const Stack = createNativeStackNavigator();
function Onboading() {
    return (
      <Stack.Navigator>
        <Stack.Screen
            name="First"
            component={First}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Second"
            component={Second}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    )
  }


  export default Onboading
