import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CommonButton = ({
    mainContainer,
    ButtonContainer,
    ButtonTitle,
    ButtonTitleStyle,
    OnPress
}) => {
    const navigation=useNavigation();

    const handleNavigation=()=>{
        navigation.navigate(OnPress)
    }
  return (
    <View style={[styles.ViewContainer,mainContainer]}>
      <TouchableOpacity style={[styles.OpacityContainer,ButtonContainer]} onPress={()=>{handleNavigation()}}>
        <Text style={[styles.title,ButtonTitleStyle]}>{ButtonTitle}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CommonButton

const styles = StyleSheet.create({
    ViewContainer:{
       paddingVertical:10,
       paddingHorizontal:20, 
    },
    OpacityContainer:{
        backgroundColor:"#2C3E50",
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:16,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:16,
        lineHeight:20,
        fontWeight:"700",
        textAlign:"center",
        color:"white"
    }
})