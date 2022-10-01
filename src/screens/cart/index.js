import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import { FlatList } from "react-native";
import { CartItem } from "../../components";
import {styles} from './styles';
import {cart} from "../../constants/data/cart";

const Cart = ({navigation})=>{
    const total=200;

    const onDelete = (id)=>{
        console.warn(id)
    }

    const renderItem = ({item}) => <CartItem  item={item} onDelete={onDelete}/>



    return(
        <View style={styles.container}>
            <FlatList
                data={cart}
                renderItem={renderItem}
                style={styles.containerList}
                keyExtractor={item=>item.id.toString()}
            />
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfitm}
                    onPress={()=>null}
                >
                    <Text style={styles.textButtonConfirn}>Confirmar</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.textTotal}>Total: {total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;