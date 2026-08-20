import { IsEmail, IsInt, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  id!: string;

  @IsString()
  @MinLength(2)
  name!: string;

  @IsEmail()
  email!: string;

  @IsInt()
  @Min(18)
  @Max(100)
  age!: number;
}
