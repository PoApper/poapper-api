import { Response } from 'express';
import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthLoginUserDto, AuthRegisterUserDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private awsCognitoService: AuthService) {}

  @Post('/register')
  async register(@Body() authRegisterUserDto: AuthRegisterUserDto) {
    return await this.awsCognitoService.registerUser(authRegisterUserDto);
  }

  @Post('/login')
  async login(
    @Body() authLoginUserDto: AuthLoginUserDto,
    @Res() res: Response,
  ) {
    const cognitoAuth = await this.awsCognitoService.authenticateUser(
      authLoginUserDto,
    );

    res.setHeader(
      'Set-Cookie',
      `Authentication=${cognitoAuth['accessToken']}; HttpOnly; Path=/;`,
    );
    return res.send();
  }

  @Get('check')
  @UseGuards(AuthGuard('jwt'))
  checkAuth() {
    return 'You authenticated!';
  }
}
