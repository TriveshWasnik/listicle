import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: '100%',
  },
  image: {
    width: '100%',
    height: 210,
  },
  titleContainer: {
    marginVertical: 55,
  },
  title: {
    fontSize: 38,
    fontWeight: '600',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    color: colors.blue,
    textAlign: 'center',
    marginTop: 30,
  },
});
