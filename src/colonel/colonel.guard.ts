import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// A guard is an injectable class that implements the CanActivate interface. 
// It can be used to protect routes from unauthorized access.
// It can be attached to an individual route, or to the entire controller.

@Injectable()
export class ColonelGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // This is where you would put your logic to check if the user is authorized to access the route

    // Get the request object
    const request = context.switchToHttp().getRequest();

    // validate the request
    if (request.headers.authorization) {
        return true;
    }

    return false; // Set to true to allow access, and false to deny access
  }
}
