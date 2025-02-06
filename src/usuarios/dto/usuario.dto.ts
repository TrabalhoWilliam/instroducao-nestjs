import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UsuarioDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Fulano', description: 'Nome do usuário' })
  nome: string;

  @ApiProperty({ example: '1', description: 'ID do usuário' })
  id: number;

  @IsInt()
  @ApiProperty({ example: '19', description: 'Idade do usuário' })
  idade: number;

}