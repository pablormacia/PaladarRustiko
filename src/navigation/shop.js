import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, Product } from "../screens";
import {colors} from '../constants/themes';

const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Categories"
        screenOptions={{
            headerStyle: {
                // backgroundColor:isAndroid ? colors.background : colors.secondary;
                backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle:{
                fontFamily: 'Lato-Bold',
                //centrar?
            }
           
        }}
        >
            <Stack.Screen 
            name="Categories" 
            component={Categories} 
            options={{
                //headerShown: false,
                title: 'Paladar Rustiko'
            }}
            />
            <Stack.Screen 
            name="Products" 
            component={Products}
            options={({route})=>({
                title:route.params.name,
            })} 
            />
            <Stack.Screen 
            name="Product" 
            component={Product} 
            options={({route})=>({
                title:route.params.name,
            })} 
            />
        </Stack.Navigator>
    )
}

export default ShopNavigator;