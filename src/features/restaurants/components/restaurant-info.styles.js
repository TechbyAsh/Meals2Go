import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text `
font-family: ${(props) => props.theme.fonts.body};
font-size: ${(props)=> props.theme.fontSizes.caption}; 
color: ${(props) => props.theme.colors.ui.success}; `

export const Info = styled.View `
padding: ${(props) => props.theme.space[3]}; `

export const Icon = styled.Image`
 width: 15px;
 height: 15px;
`;

export const Rating = styled.View `
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]} ;
padding-bottom: ${(props) => props.theme.space[2]} ;
`
export const Section = styled.View `
flex-direction: row;
align-items: center; 
 `
 export const SectionEnd = styled.View `
flex: 1;
flex-direction: row;
justify-content: flex-end; 
  `
  export const RestaurantCard = styled(Card) `
background-color: ${(props) => props.theme.colors.ui.card};
padding: ${(props) => props.theme.space[2]};
border-radius: ${(props) => props.theme.sizes[0]};
`
export const RestaurantCardCover = styled(Card.Cover) `
padding: ${(props) => props.theme.space[0]};
border-radius: ${(props) => props.theme.sizes[0]};
`