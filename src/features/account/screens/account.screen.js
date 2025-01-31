import React, {useRef} from "react";
import {Dimensions} from 'react-native'
import LottieView from 'lottie-react-native';

import {  AccountCover, AccountContainer, AuthButton, Title, AnimatedBGWrapper } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component'
import { FadeInView } from '../../../components/animations/fade.animation'

export const AccountScreen = ({ navigation }) => {
  const animation = useRef(null);
  const { width, height } = Dimensions.get('window');
  return ( 
    <AnimatedBGWrapper>
        <LottieView
          ref={animation}
          autoPlay
          loop
          style={{ position: "absolute",
            width, 
            height, }}
          source={require("../../../../assets/food-bg.json")}
        />
        <Title>Meals To Go</Title>
        <Spacer size="large"/>
        <FadeInView>
        <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
      </FadeInView>
    </AnimatedBGWrapper> 
)};