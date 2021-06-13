import {Platform} from 'react-native';
import {colors} from 'react-native-elements';

export const createNebulaTheme = (darkMode: boolean) => {
  if (darkMode) {
    return {
      colors: {
        ...Platform.select({
          default: colors.platform.android,
          ios: colors.platform.ios,
        }),
        background: 'black',
      },
    };
  }

  return {
    colors: {
      ...Platform.select({
        default: colors.platform.android,
        ios: colors.platform.ios,
      }),
      background: 'white',
    },
  };
};
