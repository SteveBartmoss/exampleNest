import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ProjecstModule } from './projecst/projecst.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [TaskModule, ProjecstModule, UserModule],
})
export class AppModule {}
