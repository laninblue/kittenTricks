import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@kitten/theme';
import {
  Button,
  Text,
} from '@kitten/ui';
import {
  SignInForm2,
  SignInForm2Data,
  SocialAuth,
} from '@src/components/auth';
import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '@src/components/common';
import {
  imageSignIn4Bg,
  ImageSource,
} from '@src/assets/images';

interface ComponentProps {
  onForgotPasswordPress: () => void;
  onSignInPress: (formData: SignInForm2Data) => void;
  onSignUpPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
  onTwitterPress: () => void;
}

export type SignIn4Props = ThemedComponentProps & ComponentProps;

interface State {
  formData: SignInForm2Data;
}

class SignIn4Component extends React.Component<SignIn4Props, State> {

  public state: State = {
    formData: undefined,
  };

  private backgroundImage: ImageSource = imageSignIn4Bg;

  private onForgotPasswordButtonPress = () => {
    this.props.onForgotPasswordPress();
  };

  private onSignInButtonPress = () => {
    this.props.onSignInPress(this.state.formData);
  };

  private onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

  private onGoogleButtonPress = () => {
    this.props.onGooglePress();
  };

  private onFacebookButtonPress = () => {
    this.props.onFacebookPress();
  };

  private onTwitterButtonPress = () => {
    this.props.onTwitterPress();
  };

  private onFormDataChange = (formData: SignInForm2Data) => {
    this.setState({ formData });
  };

  public render(): React.ReactNode {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={this.backgroundImage.imageSource}>
          <View style={themedStyle.headerContainer}>
            <Text
              style={themedStyle.helloLabel}
              category='h1'>
              Hello
            </Text>
            <Text
              style={themedStyle.signInLabel}
              category='s1'>
              Sign in to your account
            </Text>
          </View>
          <SignInForm2
            style={themedStyle.formContainer}
            onForgotPasswordPress={this.onForgotPasswordButtonPress}
            onDataChange={this.onFormDataChange}
          />
          <Button
            style={themedStyle.signInButton}
            textStyle={textStyle.button}
            size='giant'
            disabled={!this.state.formData}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <SocialAuth
            style={themedStyle.socialAuthContainer}
            iconStyle={themedStyle.socialAuthIcon}
            hint='Or Sign In using Social Media'
            onGooglePress={this.onGoogleButtonPress}
            onFacebookPress={this.onFacebookButtonPress}
            onTwitterPress={this.onTwitterButtonPress}
          />
          <Button
            style={themedStyle.signUpButton}
            textStyle={themedStyle.signUpText}
            appearance='ghost'
            activeOpacity={0.75}
            onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignIn4 = withStyles(SignIn4Component, (theme: ThemeType) => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  socialAuthContainer: {
    marginTop: 32,
  },
  helloLabel: {
    color: 'white',
    ...textStyle.headline,
  },
  signInLabel: {
    marginTop: 16,
    color: 'white',
    ...textStyle.subtitle,
  },
  socialAuthIcon: {
    tintColor: 'white',
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
  signUpText: {
    color: 'white',
    ...textStyle.subtitle,
  },
}));

