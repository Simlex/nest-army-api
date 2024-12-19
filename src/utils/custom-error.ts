// Create an interface for the AppError class
export interface IAppError {
  message: string;
  statusCode: number;
  errorCode: string;
}

// Create the AppError class
export class AppError extends Error {
  public readonly errorCode: string;
  public readonly statusCode: number;

  constructor({message, statusCode, errorCode}: IAppError) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, new.target.prototype); // Required for extending Error
    Error.captureStackTrace(this);
  }
}
