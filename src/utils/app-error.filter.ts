import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
} from '@nestjs/common';
import { Response } from 'express';
import { AppError } from './custom-error';

@Catch(AppError)
// This filter will catch all instances of AppError, and return a 400 status code with the error message and error code
export class AppErrorFilter implements ExceptionFilter {
  catch(exception: AppError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(400).json({
      statusCode: exception.statusCode,
      message: exception.message,
      errorCode: exception.errorCode,
    });
  }
}
