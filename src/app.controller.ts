import { Controller, UseGuards, Request, Get } from '@nestjs/common'
import { ManagementClient, User } from 'auth0'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth } from '@nestjs/swagger'

@Controller('api/v1')
export class AppController {
  constructor() {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req: any) {
    const authZero = new ManagementClient({
      domain: process.env.AUTH0_DOMAIN,
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      scope: '',
    })

    const response = await authZero
      .getUser({ id: req.user.sub })
      .then((user: User) => {
        return user
      })
      .catch(err => {
        return err
      })

    return response
  }
}
