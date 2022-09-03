import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {styles} from './styles';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {
    console.log('Clicked');
  };
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Trivesh Wasnik" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="********" isPassword />

      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>
      <Button title="Sign Up" style={styles.button} />
      <Seperator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Already have an account?
        <Text style={styles.footerLink} onPress={onSignIn}>
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signup;
