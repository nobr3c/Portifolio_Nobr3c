import { Controller, Get } from '@nestjs/common';
import { TecnologiaPrisma } from './tecnologia.prismar';
import { Tecnologia } from '@core';

@Controller('tecnologias')
export class TecnologiaController {
    constructor(private readonly repo: TecnologiaPrisma){}

    @Get()
    async obterTodas(): Promise<Tecnologia[]> {
        return this.repo.obterTodas()
    }

    @Get("destaques")
    async obterDestaques(): Promise<Tecnologia[]> {
        return this.repo.obterDestaques()
    }
}
