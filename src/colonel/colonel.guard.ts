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
    return false; // Set to true to allow access, and false to deny access
  }
}
