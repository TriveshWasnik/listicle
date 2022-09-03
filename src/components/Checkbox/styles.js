import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';
export const styles = StyleSheet.create({
  container: {
    borderColor: colors.gray,
    borderRadius: 4,
    borderWidth: 1,
    width: 22,
    height: 22,
  },
  innerContainer: {
    backgroundColor: colors.gray,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});
