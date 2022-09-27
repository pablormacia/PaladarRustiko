import React from "react";

import{View,Text,TouchableOpacity} from 'react-native';
import { styles } from "./styles";

const ProductItem = ({item, onSelected}) =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity 
            style= {styles.item}
            onPress={()=> onSelected(item)}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.detailContainer}>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <Text style={styles.detail}>Peso: {item.weight}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem;