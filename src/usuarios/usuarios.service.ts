import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsuariosService {

    constructor(private readonly prisma: PrismaService) {} // Certifique-se de que o PrismaService está aqui

    async getUsuarios(){
        return this.prisma.usuario.findMany();
    }

    async postUsuarios(usuarioDto: UsuarioDto){
        return this.prisma.usuario.create({ data: {...usuarioDto} });
    }

    async putUsuarios( id: number, usuarioDto: UsuarioDto ){
        return this.prisma.usuario.update({ where: { id }, data: usuarioDto });
    }

    async deleteUsuarios( id: number ){
        return this.prisma.usuario.delete({ where: { id } });
    }

}
