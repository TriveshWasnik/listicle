import React from 'react';
import {Text} from 'react-native';

class Table extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBig: false,
    };
  }

  changeState = () => {
    this.setState({isBig: !this.state.isBig});
  };

  render() {
    return (
      <Text
        onPress={this.changeState}
        style={{fontSize: this.state.isBig ? 20 : 14}}>
        This is Table
      </Text>
    );
  }
}

export default Table;
