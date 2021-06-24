import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    white: '#FFFFFF',
    mainBackground: '#e1e4e8',
    listItemBackground: '#0366d6',
    error: '#d73a4a',
    backgroundLight: '#fff',
  },
  fontSizes: {
    body: 16,
    subheading: 18,
    appBar: 20,
    heading: 22
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  dimensions : {
    appBarMinHeight: 80,
    avatarHeight: 60,
    avatarWidth: 60
  }
};

export default theme;