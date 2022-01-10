import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './database/models/user.entity';
import { Message } from './database/models/message.entity';

@Injectable()
class RepoService {
  constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Message) public readonly MessageRepo: Repository<Message>,
  ) {}
}

export { RepoService };
