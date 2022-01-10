import { Controller, Get } from '@nestjs/common';
import { RepoService } from './repo.service';

@Controller()
export class AppController {
  constructor(private readonly repoService: RepoService) {}

  @Get()
  async getHello(): Promise<string> {
    return `Possui ${await this.repoService.MessageRepo.count()} mensagens`;
  }
}
