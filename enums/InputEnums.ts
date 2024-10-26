export enum InputEnums {
  login = 'login',
  password = 'password',
  textarea = 'textarea',
  email = 'email',
  phone = 'phone',
}
export type InputEnumKeys = keyof typeof InputEnums
