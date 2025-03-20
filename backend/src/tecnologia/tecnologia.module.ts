import { Module } from '@nestjs/common';
import { TecnologiaController } from './tecnologia.controller';
import { TecnologiaProvider } from './tecnologia.provider';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [TecnologiaController],
  providers: [TecnologiaProvider],
  imports: [DbModule],
})
export class TecnologiaModule {}
