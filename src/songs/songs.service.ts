import { Model } from 'mongoose';
import { NewSong } from 'src/interface';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Song } from './entities/songs.entity';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<Song>) {}

  // private songs = [
  //   {
  //     _id: 1,
  //     name: 'song1',
  //   },
  //   {
  //     _id: 2,
  //     name: 'song2',
  //   },
  //   {
  //     _id: 3,
  //     name: 'song3',
  //   },
  // ];

  getAllSongs() {
    // return this.songs;
    return this.songModel.find();
  }

  getOneSong(id: string) {
    return this.songModel.findOne({ _id: id });
    // return this.songs.find((song) => song._id === id);
  }

  createSong(newSong: NewSong) {
    // const newSongId = this.songs.length + 1;
    // this.songs = [...this.songs, { ...newSong, _id: newSongId }];
    // return this.songs.find((song) => song._id === newSongId);
    return this.songModel.create(newSong);
  }
}
