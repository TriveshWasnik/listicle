import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: '36%',
    backgroundColor: colors.darkGray,
    borderRadius: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 15,
    marginBottom: 40,
  },
  image: {
    width: 30,
    height: 30,
  },
});
