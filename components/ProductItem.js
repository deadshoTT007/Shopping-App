import React from 'react'
import { View, Image, Text, Button, Platform, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import colors from '../constants/colors'

const ProductItem = (props) => {

    let TouchableComp = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComp = TouchableNativeFeedback
    }

    const { image, price,  title, onCartAddHandler, productDetailsHandler } = props;


    return (
        <View style={styles.container} >
            <TouchableComp onPress={productDetailsHandler} useForeground  style={styles.touchable} >
                <View style={styles.product} >
            <Image style={styles.productImage} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.buttonContainer}>
                 <View style={{marginRight:10}}>
                 <Button color={colors.primary} onPress={onCartAddHandler} title="Add to Cart" />
                     </View>  
                     <View style={{marginLeft:10}}>
                <Button color={colors.primary}  onPress={productDetailsHandler} title="View Details" />  
                     </View>
            </View>
            </View>
        </TouchableComp>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        padding:20,
       
    },
    productImage:{
        width:"100%",
        height:200,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
    }, 
    title:{
        marginVertical:10,
        fontSize:16
    },
    price:{
        marginBottom:10,
        fontSize:14
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    touchable:{
     

        },
        container:{
            // padding: 20,
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
            shadowColor:"#000",
            shadowOpacity:0.2,
            overflow:'hidden',
            shadowRadius:8,
            shadowOffset: { width:0, height:2 },
            elevation:5,
            backgroundColor:"#fff",
            margin:20,
            marginTop:0,
        }

})

export default ProductItem
