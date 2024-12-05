import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';


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
    <Card mode="elevated" elevation={10} style={styles.cardstyle1}>
        <Card.Cover  source={{ uri: photos[0] }} style={styles.cardCoverstyles}/>
        <Text> {name [0]} </Text>;
    </Card>
    
    );
} 

const styles = StyleSheet.create({
    container: {flex : 1, 
    padding: 20,
    },
    cardstyle1:{backgroundColor: 'pink', 
    padding:15, 
    borderRadius:20},
    cardstyle2:{backgroundColor: 'yellow', 
    padding:15, 
    borderRadius:20},
    cardCoverstyles: {padding: 5, 
    borderRadius:10,},
    })