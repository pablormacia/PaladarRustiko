import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";2
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions";


const Product = ({navigation,route}) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected);
    
    const addCartItem= ()=>{
        dispatch(addToCart(product))
    }

    const {id, title, description, price, weight} = product || {}

    return (
        <View style={styles.container}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>$ {product.price}</Text>
            <Text>Peso: {product.weight}</Text>
            <Button 
                title ="Agregar al carrito"
                onPress={addCartItem}
            />
        </View>
    )
};

export default Product;