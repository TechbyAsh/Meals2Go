import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "@/src/components/typography/text.component";



export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/images/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
  })`
    padding: ${(props) => props.theme.space[2]};
  `;

  export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: bold;
  padding-bottom: 40px;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.text.title};
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center; 
  padding: ${(props) => props.theme.space[2]};
`;

export const AnimatedBGWrapper = styled.View`
   flex: 1;  
   width: 100%;
  height: 100%;
  position: absoulte;
  justify-content: center;
  align-items: center; 
  `