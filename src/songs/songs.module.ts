import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Song, songsSchema } from './entities/songs.entity';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Song.name, schema: songsSchema }]),
  ],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
