import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Card } from "react-native-paper";
import styled from 'styled-components/native';


import { SvgXml } from 'react-native-svg';
import star from '../../../../../assets/star'; 
import open from '../../../../../assets/open';


const Title = styled.Text `
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props)=> props.theme.fontSizes.body}; 
color: ${(props) => props.theme.colors.ui.success}; `

 const Address = styled.Text `
 font-family: ${(props) => props.theme.fonts.body};
 font-size: ${(props)=> props.theme.fontSizes.caption}; 
 color: ${(props) => props.theme.colors.ui.success}; `

 const Info = styled.View `
padding: ${(props) => props.theme.space[3]}; 
 `
 const Rating = styled.View `
 flex-direction: row;
 padding-top: ${(props) => props.theme.space[2]} ;
 padding-bottom: ${(props) => props.theme.space[2]} ;
 `
const Section = styled.View `
flex-direction: row;
align-items: center; 
  `
 const SectionEnd = styled.View `
 flex: 1;
 flex-direction: row;
 justify-content: flex-end; 
   `
const RestaurantCard = styled(Card) `
background-color: ${(props) => props.theme.colors.ui.card};
padding: ${(props) => props.theme.space[3]};
border-radius: ${(props) => props.theme.sizes[1]};
`
const RestaurantCardCover = styled(Card.Cover) `
 padding: ${(props) => props.theme.space[3]};
 border-radius: ${(props) => props.theme.sizes[1]};
 border-bottom: double;
`
export const RestaurantCardInfo = ({resturants ={}}) => { 
const {
    name = ['Gems Resturant', 'Tonys Resturant'],
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg' ],
    address  = '123 somewhere street',
    isOpenNow = true,
    rating = 4, 
    isClosedTemporarily= true ,
} = resturants

const ratingArray = Array.from(new Array(Math.floor(rating)))

    return ( 
    <RestaurantCard mode="elevated" elevation={10} >
        < RestaurantCardCover  source={{ uri: photos[0] }} /> 
        <Info>
        <Title> {name [0]} </Title>
        <Section>
        <Rating>
        {ratingArray.map(() => (
        <SvgXml xml={star} width={20} height={20} /> ))}
        </Rating>
        <SectionEnd> 
        {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text> )}
              <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </SectionEnd>
        </Section>
        <Address>{address}</Address>
        </Info>
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