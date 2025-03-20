import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';

@Module({
  imports: [DbModule, ProjetoModule, TecnologiaModule],
  controllers: [AppController],
})
export class AppModule {}
