import React from "react";
import {isAndroid} from '../utils';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens";
import { colors } from "../constants/themes";

const Stack = createNativeStackNavigator();

const CartNavigator =()=>{
    return(
        <Stack.Navigator 
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: colors.white,
                headerTitleStyle:{
                    fontFamily: 'Lato-Bold',
                }
               
            }}
            
            
        >
            <Stack.Screen
                name="Cart"
                component={Cart}

            />
        </Stack.Navigator>
    )
}

export default CartNavigator;