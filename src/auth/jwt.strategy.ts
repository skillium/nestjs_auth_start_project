import { passportJwtSecret } from 'jwks-rsa'
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 1
      audience: process.env.AUTH0_AUDIENCE,
      issuer: `${process.env.AUTH0_DOMAIN}/`,
    })
  }

  async validate(payload: any, done: VerifiedCallback) {
    if (!payload) {
      done(new UnauthorizedException(), false) // 2
    }

    return done(null, payload)
  }
}
