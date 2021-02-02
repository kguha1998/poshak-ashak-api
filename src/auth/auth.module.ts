import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { GoogleStrategy } from './auth-strategies/google.strategy';
import { SharedModule } from 'src/helpers/shared.module';

@Module({
    imports: [SharedModule],
    controllers: [
        AuthController,],
    providers: [
        AuthService,GoogleStrategy
    ]
})
export class AuthModule { }
