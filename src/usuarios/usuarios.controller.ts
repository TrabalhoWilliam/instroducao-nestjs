import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuariosService } from './usuarios.service';
import { PrismaClient } from "@prisma/client";
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiBody } from '@nestjs/swagger';

@Controller('usuarios')
@ApiTags('Usuários') // Define uma seção na documentação
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) {}

    @Get()
    @ApiOperation({ summary: 'Lista todos os usuários' }) // Breve descrição
    @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.' })
    @ApiResponse({ status: 400, description: 'Erro na requisição.' })
    async getUsuarios(){
        return await this.usuariosService.getUsuarios();
    }

    @Post()
    @ApiOperation({ summary: 'Cria um usuario' }) // Breve descrição
    @ApiBody({ type: UsuarioDto }) // Define o corpo da requisição
    @ApiResponse({ status: 200, description: 'Sucesso.' })
    @ApiResponse({ status: 400, description: 'Erro na requisição.' })
    async postUsuarios( @Body() usuarioDto: UsuarioDto ) {
        return await this.usuariosService.postUsuarios(usuarioDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Altera um usuario' }) // Breve descrição
    @ApiBody({ type: UsuarioDto }) // Define o corpo da requisição
    @ApiResponse({ status: 200, description: 'Sucesso.' })
    @ApiResponse({ status: 400, description: 'Erro na requisição.' })
    async putUsuarios( @Param('id') id: number, @Body() usuarioDto: UsuarioDto ) {
        return await this.usuariosService.putUsuarios(id, usuarioDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Deleta um usuario' }) // Breve descrição
    @ApiResponse({ status: 200, description: 'Sucesso.' })
    @ApiResponse({ status: 400, description: 'Erro na requisição.' })
    async deleteUsuarios( @Param('id') id: number ) {
        return await this.usuariosService.deleteUsuarios(id);
    }

}
