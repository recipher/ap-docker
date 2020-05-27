import { Controller, Body, Post, Get } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.entity';

interface MessageResponse { message: Message; }
interface MessagesResponse { messages: Message[]; }

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly service: MessagesService,
  ) {}

  @Post()
  async create(@Body('message') data: Message): Promise<MessageResponse> {
    const message = await this.service.create(data);
    return { message };
  }

  @Get()
  async list(): Promise<MessagesResponse> {
    const messages = await this.service.list();
    return { messages };
  }
}
