import React from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import { FlatList } from "react-native";
import CartItem from "../../components/cart-item";
import {styles} from './styles';
import { useDispatch, useSelector } from "react-redux";
import { confirmCart, removeFromCart } from "../../store/actions";

const Cart = ({navigation})=>{
    const dispatch= useDispatch();
    const items = useSelector(state=>state.cart.items)
    const total = useSelector(state=>state.cart.total)

    const onDelete = (id)=>{
        dispatch(removeFromCart(id))
    }

    const onConfirm = ()=>{
        dispatch(confirmCart(items,total))
    }

    const renderItem = ({item}) => <CartItem  item={item} onDelete={onDelete}/>




    return(
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                style={items.length === 0 ?  styles.disabledButtonConfirm : styles.container}
                keyExtractor={item=>item.id.toString()}
            />
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm}
                    onPress={onConfirm}
                    disabled={items.length === 0}
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