import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsMiddleware } from './common/middlewares/songs/songs.middleware';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule, SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SongsMiddleware).forRoutes(SongsController);
  }
}
