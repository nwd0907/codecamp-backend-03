import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '733838029193-09eg89uhq4kk92l5pagud9b3bhi6uv58.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });
  }

  validate(accessToken, refreshToken, profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    return {
      email: profile.emails[0].value,
      password: '12093812093',
      name: profile.displayName,
      age: 0,
    };
  }
}
