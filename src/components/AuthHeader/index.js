import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} hitSlop={20}>
        <Image
          source={require('../../assets/iconback.png')}
          style={styles.image}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
