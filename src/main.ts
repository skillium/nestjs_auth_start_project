import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as dotenv from 'dotenv'
dotenv.config()

import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filters/exception-filters/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()
  app.useGlobalFilters(new HttpExceptionFilter())

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API')
    .setDescription('Restful API')
    .setVersion('1.0')
    .setSchemes('http', 'https')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('', app, document)

  await app.listen(process.env.PORT || 3001)
}
bootstrap()
