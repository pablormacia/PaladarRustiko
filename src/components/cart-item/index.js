import React from "react";
import{View,Text,TouchableOpacity} from 'react-native';
import { styles } from "./styles";
import {colors} from "../../constants/themes";
import {Ionicons} from "@expo/vector-icons";


const CartItem = ({item, onDelete}) =>{
    return(
        <View style={styles.container}>
            <View styles={styles.headerContainer}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity onPress={()=>onDelete(item.id)}>
                    <Ionicons name="trash" size={24} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartItem;