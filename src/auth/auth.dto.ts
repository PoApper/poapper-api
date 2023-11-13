export class AuthLoginUserDto {
  readonly email: string;
  readonly password: string;
}

export class AuthRegisterUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}
