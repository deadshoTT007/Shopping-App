import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductsOverviewScreen from './screen/Shop/ProductsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProductsDetailScreen from './screen/Shop/ProductsDetailScreen';
import cartReducer from './store/reducers/cart';
import {composeWithDevTools} from 'redux-devtools-extension';
import HeaderButton from './UI/HeaderButton'
import CartScreen from './screen/Shop/CartScreen';
 
const Stack = createNativeStackNavigator();


import products from './store/reducers/products';
import colors from './constants/colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const rootReducer = combineReducers({
  products: products,
  cart: cartReducer
})



const store = createStore(rootReducer, composeWithDevTools());

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductsOverview" >
          <Stack.Screen name="ProductsOverview"
            options={({navigation})=>({ title: "All Products", headerTintColor: "#fff", headerStyle: { backgroundColor: colors.primary }, 
          headerRight:()=>(<HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item title="Cart" iconName="md-cart"
              onPress={()=>navigation.navigate('CartScreen')}
              />
          </HeaderButtons>
          )
          })}
            component={ProductsOverviewScreen} />
        <Stack.Screen name="ProductDetails"
            options={{   headerTintColor: "#fff", headerStyle: { backgroundColor: colors.primary } }}
            component={ProductsDetailScreen} />

<Stack.Screen name="CartScreen"
            options={{   headerTintColor: "#fff", headerStyle: { backgroundColor: colors.primary } }}
            component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
