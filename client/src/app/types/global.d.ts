declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
