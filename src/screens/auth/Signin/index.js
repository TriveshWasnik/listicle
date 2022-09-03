import React from 'react';
import {ScrollView, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {styles} from './styles';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  const onSignUp = () => {
    console.log('Clicked');
  };
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="********" isPassword />
      <Button title="Sign In" style={styles.button} />
      <Seperator text="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.footerLink} onPress={onSignUp}>
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signin;
