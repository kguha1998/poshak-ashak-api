import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigurationService } from 'src/helpers/configuration.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {

  constructor(private configService: ConfigurationService) {
    super({
      clientID: configService.google_client_id,
      clientSecret: configService.google_secret_key,
      callbackURL: configService.getGoogleCallBackURL(),
      scope: ['email', 'profile'],
    });
  }

  async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { name, emails, photos } = profile
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken
    }
    done(null, user);
  }
}