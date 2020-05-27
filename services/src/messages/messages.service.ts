import { Injectable, Global } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly repository: Repository<Message>,
  ) {}

  async create(data: Message): Promise<Message> {
    data.sentAt = new Date;

    return await this.repository.save(data);
  }

  async list(): Promise<Message[]> {
    return await this.repository.find();
  }
}

export default MessagesService;
