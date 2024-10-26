export enum InputEnums {
  login = 'login',
  password = 'password',
  textarea = 'textarea',
  email = 'email',
  phone = 'phone',
}

export enum SizeTypes {
  px = 'px',
  em = 'em',
  rem = 'rem',
  '%' = '%',
  vw = 'vw',
  vh = 'vh',
  auto = 'auto',
  inherit = 'inherit',
}

export type SizeEnumKeys = keyof typeof SizeTypes
export type InputEnumKeys = keyof typeof InputEnums
