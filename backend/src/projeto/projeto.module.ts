import { Module } from '@nestjs/common';
import { ProjetoPrisma } from './projeto.prisma';
import { ProjetoController } from './projeto.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  providers: [ProjetoPrisma],
  controllers: [ProjetoController],
  imports: [DbModule],
})
export class ProjetoModule {}
