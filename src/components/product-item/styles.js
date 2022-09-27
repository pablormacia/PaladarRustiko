import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
        borderRudius:10,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: colors.primary
    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize:20,
    },
    item:{
        flex:1,
        justifyContent:'space-around'
    },
    price:{
        fontFamily: 'Lato-Bold'
    },
    detailContainer:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    detail:{
        fontFamily: 'Lato-Regular'
    }

});