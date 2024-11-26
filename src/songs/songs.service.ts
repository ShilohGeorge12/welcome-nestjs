import { NewSong, Song } from 'src/interface';

import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private songs: Song[] = [
    {
      _id: 1,
      name: 'song1',
    },
    {
      _id: 2,
      name: 'song2',
    },
    {
      _id: 3,
      name: 'song3',
    },
  ];

  getAllSongs(): Song[] {
    return this.songs;
  }

  getOneSong(id: number): Song {
    return this.songs.find((song) => song._id === id);
  }

  createSong(newSong: NewSong): Song {
    const newSongId = this.songs.length + 1;
    this.songs = [...this.songs, { ...newSong, _id: newSongId }];
    return this.songs.find((song) => song._id === newSongId);
  }
}
