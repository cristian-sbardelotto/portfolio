import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      altBackground: string;
      text: string;
      altText: string;

      alt: string;
    };
    borders: {
      mainLight: string;
    };
  }
}
