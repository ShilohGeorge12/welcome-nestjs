import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SongsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Songs middleware');
    next();
  }
}
