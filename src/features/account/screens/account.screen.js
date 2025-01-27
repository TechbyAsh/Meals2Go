import React, {useRef} from "react";
import LottieView from 'lottie-react-native';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component'

export const AccountScreen = ({ navigation }) => {
  const animation = useRef(null);
  return ( 
    <AccountBackground>
        <AccountCover />
        <AnimationWrapper>
        <LottieView
          ref={animation}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
        <Title>Meals To Go</Title>
        <Spacer size="large"/>
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
    </AccountBackground> )
};