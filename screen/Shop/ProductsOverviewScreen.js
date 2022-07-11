import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../../components/ProductItem'
import * as cartActions from '../../store/actions/cart'
import { HeaderButtons, Items } from 'react-navigation-header-buttons'
import HeaderButton from '../../UI/HeaderButton'


const ProductsOverviewScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const products = useSelector(state => state.products.availableProducts)
    const items = useSelector(state=>state.cart.items)
    console.log(items,"cart")

    const renderItem = (product) => {
        return (
            <ProductItem image={product.item.imageUrl}
                title={product.item.title}
                price={product.item.price}
                onCartAddHandler={() => dispatch(cartActions.addToCart(product.item))}
                productDetailsHandler={() => { navigation.navigate('ProductDetails',{ productId:product.item.id,productTitle:product.item.title }) }}
            />
        )
    }

    return (
        <FlatList style={{marginTop:20}} data={products} keyExtractor={(item) => item.id} renderItem={(item) => renderItem(item)} />
    )
}

export default ProductsOverviewScreen


