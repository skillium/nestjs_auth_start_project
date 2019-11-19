import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { MongoError } from 'mongodb';
import { Error } from 'mongoose';

import { FilterResult } from '../filter-result';

@Catch()
export class MongoDbExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError | Error.ValidationError, host: ArgumentsHost) {
    let result: FilterResult;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    result = {
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    response.status(400).json(result);
  }
}
