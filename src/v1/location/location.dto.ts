import { IsString, IsOptional } from 'class-validator';

export class CreateLocationDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  address_line1: string;

  @IsOptional()
  @IsString()
  address_line2?: string;

  @IsOptional()
  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  state: string;

  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  postal_code: string;
}
