import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles= StyleSheet.create({
    containers:{
        flex:1,
        backgroundColor:colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    disabledButtonConfirm: {
        backgroundColor: colors.gray,

    }
})