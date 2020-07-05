import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = props =>{
    return(
    <View style={style.header}>
        <Text style={style.headerText}>{props.title}</Text>
    </View>
    )
}

const style = StyleSheet.create({
    header:{
        width:'100%',
        height: 90,
        paddingTop: 36,
        backgroundColor:'#2a9df4',
        alignItems:'center',
        justifyContent: 'center'
    },
    headerText:{
      //  fontFamily:'someinterestingfont',
        fontSize:30,
        color:'black'
    }
})

export default Header