import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      altBackground: string;
      text: string;

      alt: string;
    };
  }
}
