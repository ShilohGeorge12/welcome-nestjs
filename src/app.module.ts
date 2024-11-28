import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsMiddleware } from './common/middlewares/songs/songs.middleware';
import { SongsController } from './songs/songs.controller';
import { SongsModule } from './songs/songs.module';

const MONGODB_URI: string = process.env.DATABASE_URL;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Ensure ConfigModule is available globally
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'), // Load from .env
      }),
      inject: [ConfigService], // Inject ConfigService
    }),
    // MongooseModule.forRoot(MONGODB_URI),
    SongsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SongsMiddleware).forRoutes(SongsController);
  }
}
