import { Tecnologia } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TecnologiaProvider {
    constructor(private readonly prisma: PrismaProvider){}

    async obterTodas(): Promise<Tecnologia[]> {
        return this.prisma.tecnologia.findMany()
    }
}
