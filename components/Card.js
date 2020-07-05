import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props =>{
return <View style={{...style.card,...props.style}}>{props.children}</View>
}

const style = StyleSheet.create({
    card:{
        margin:'5%',
        
        shadowColor:'black',
        shadowOffset:{width:0, height:3},
        shadowOpacity:0.3,
        shadowRadius:6,
        elevation:10,
        borderRadius:10,
        backgroundColor:'white',
        padding:20
    }
})

export default Card