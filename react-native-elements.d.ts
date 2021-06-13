type RecursivePartial<T> = {[P in keyof T]?: RecursivePartial<T[P]>};

declare module 'react-native-elements/dist/config/colors' {
  export interface Colors {
    background: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
  }
}
