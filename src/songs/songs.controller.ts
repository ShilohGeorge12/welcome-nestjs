import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { NewSongDto } from './dto/new-song-dto';
import { SongsService } from './songs.service';

@Controller('/api/songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  getSongs() {
    return this.songsService.getAllSongs();
  }

  @Get('/:id')
  getSong(@Param('id') id: string) {
    return this.songsService.getOneSong(id);
  }

  @Post()
  createSong(@Body() newSong: NewSongDto) {
    return this.songsService.createSong(newSong);
  }
}
