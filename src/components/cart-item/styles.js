import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderRadius:5,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 120
    },
    contentContainer: {
        flex:1,
        borderRadius:10,
        shadowColor:"#CCC",
        shadowOpacity: 0.25,
        shadowOffset: {Width:0, height:2},
        shadowRadius: 5,
        elevation: 4,
        justifyContent: 'center',
        alignItems:'center',
        padding:10

    },
    title: {
        fontFamily: 'Lato-Bold',
        fontSize:20,
    },
    headerContainer:{

    },
    quantity:{

    },
    price: {

    }

});