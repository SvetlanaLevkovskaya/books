declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
