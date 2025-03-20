import { Tecnologia } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaPrisma {
    constructor(private readonly prisma: PrismaProvider){}

    async obterTodas(): Promise<Tecnologia[]> {
        return this.prisma.tecnologia.findMany()
    }

    async obterDestaques(): Promise<Tecnologia[]> {
        return this.prisma.tecnologia.findMany({
            where: {
                destaque: true,
            },
        })
    }
}
