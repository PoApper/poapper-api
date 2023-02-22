import { Module } from '@nestjs/common';
import { GithubController } from './github.controller';

@Module({
  imports: [],
  controllers: [GithubController],
})
export class GithubModule {}
