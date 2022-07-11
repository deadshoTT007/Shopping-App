import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const CartScreen = () => {

    const cartTotalAmount = useSelector(state=>state.cart.totalAmount)

    return (
        <View>
            <Text>{cartTotalAmount}</Text>
        </View>
    )
}

export default CartScreen
