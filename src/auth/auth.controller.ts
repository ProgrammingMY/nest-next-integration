import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

interface ISignInReqest {
    username: string,
    password: string
}

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: ISignInReqest) {
        return this.authService.signIn(signInDto.username, signInDto.password)
    }
}
