import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      lightBackground: string;
      lightText: string;
      text: string;

      main: string;
    };
    borders: {
      main: string;
    };
  }
}
