import React, {useEffect} from 'react'
import { ScrollView, Text, Image, View, StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import colors from '../../constants/colors';
import { addToCart } from '../../store/actions/cart';

const ProductsDetailScreen = ({route,navigation}) => {

    const productId = route.params.productId;
    const productTitle = route.params.productTitle
    const product = useSelector(state=>state.products.availableProducts.find(product=>product.id === productId))
    const dispatch = useDispatch()

    console.log(productId,product,"id")
    useEffect(() => {
        navigation.setOptions({
          title: productTitle,
        });
      }, [productTitle, navigation]);

    return (
        <ScrollView>
        <View style={styles.productDetailContainer}>
        <Image resizeMode="contain" style={styles.image} source={{ uri:product.imageUrl }} />
        <View style={styles.detailContentContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Button onPress={()=>addToCart(product)} color={colors.primary} title="Add to Cart"/>
        </View>
        <Text>{product.description}</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
        borderRadius:8
    },
    productDetailContainer:{
        margin:20
    },
    detailContentContainer:{
        flexDirection:"row",
        marginTop:20,
        justifyContent:"space-between",
        alignItems:'center',
        marginBottom:30
    },
    title:{
        fontSize:18,
        // fontFamily:'open-sans-bold'
    }
})

export default ProductsDetailScreen
