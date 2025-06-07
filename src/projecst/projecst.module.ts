import { Module } from '@nestjs/common';
import { ProjecstController } from './projecst.controller';

@Module({
  controllers: [ProjecstController]
})
export class ProjecstModule {}
