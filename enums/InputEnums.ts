export enum InputEnums {
  login = 'login',
  password = 'password',
  textarea = 'textarea',
  email = 'email',
  phone = 'phone',
}

export enum WidthTypes {
  px = 'px',
  em = 'em',
  rem = 'rem',
  percent = '%',
  vw = 'vw',
  vh = 'vh',
  auto = 'auto',
}

export enum HeightTypes {
  px = 'px',
  em = 'em',
  rem = 'rem',
  percent = '%',
  vw = 'vw',
  vh = 'vh',
  auto = 'auto',
}

export type WidthEnumKeys = keyof typeof WidthTypes;
export type HeightEnumKeys = keyof typeof HeightTypes;
export type InputEnumKeys = keyof typeof InputEnums
