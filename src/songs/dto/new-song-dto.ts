import { IsNotEmpty, IsString } from 'class-validator';

export class NewSongDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
