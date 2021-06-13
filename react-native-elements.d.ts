import 'react-native-elements';
type RecursivePartial<T> = {[P in keyof T]?: RecursivePartial<T[P]>};

declare module 'react-native-elements' {
  export interface Colors {
    background: string;
  }

  export interface FullTheme {
    colors: RecursivePartial<Colors>;
  }
}
