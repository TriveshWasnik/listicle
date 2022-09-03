import React, {useState} from 'react';
import {Text} from 'react-native';

const Hello = ({theme}) => {
  const [isBig, setIsBig] = useState(false);
  const changeState = () => {
    setIsBig(currentState => !currentState);
  };

  return (
    <Text
      onPress={changeState}
      style={{
        fontSize: isBig ? 20 : 14,
        color: theme === 'dark' ? 'gray' : 'blue',
      }}>
      This is Hello
    </Text>
  );
};
export default Hello;
