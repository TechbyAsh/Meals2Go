import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';


const RestaurantCard = styled(Card) `
background-color: pink;
padding: 15px;
border-radius: 20px
`
const RestaurantCardCover = styled(Card.Cover) `
 padding: 15px ; 
 border-radius: 20px;
 border-bottom: double;
`
export const RestaurantCardInfo = ({resturants ={}}) => { 
const {
    name = ['Gems Resturant', 'Tonys Resturant'],
    icon,
    photos = ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg' ],
    address  = '123 somewhere street',
    isOpenNow = true,
    rating = 4, 
} = resturants

    return ( 
    <RestaurantCard mode="elevated" elevation={10} >
        <Text> {name [0]} </Text>;
        < RestaurantCardCover  source={{ uri: photos[0] }} /> 
    </RestaurantCard>
    
    );
} 

const styles = StyleSheet.create({
    container: {flex : 1, 
    padding: 20,
    },

    cardstyle2:{backgroundColor: 'yellow', 
    padding:15, 
    borderRadius:20},
})