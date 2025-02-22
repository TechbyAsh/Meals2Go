import React, {useState , useContext, useRef} from "react";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput,ErrorContainer,
    Title, AnimationWrapper } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'



export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading  } = useContext(AuthenticationContext);
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
            <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">

          {!isLoading ? ( 
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton> 
          ):( <ActivityIndicator animating={true} color={MD2Colors.blue300} />) }
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
        </AccountBackground> )
};