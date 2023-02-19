import {
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from "./member.entity";

@Injectable()
export class MemberService {
  constructor (
    @InjectRepository(MemberEntity)
    private memoryRepository: Repository<MemberEntity>,
  ) {}

  getMemberList() {
    return this.memoryRepository.find();
  }
}