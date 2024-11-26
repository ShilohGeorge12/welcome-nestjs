export interface Song {
  _id: number;
  name: string;
}

export type NewSong = Omit<Song, '_id'>;
