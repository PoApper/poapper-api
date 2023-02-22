import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from './member.entity';
import { MemberDto } from './member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private memoryRepository: Repository<MemberEntity>,
  ) {}

  getMemberList() {
    return this.memoryRepository.find();
  }

  createMember(dto: MemberDto) {
    return this.memoryRepository.save(dto);
  }

  updateMember(id: number, dto: MemberDto) {
    return this.memoryRepository.update(id, dto);
  }

  deleteMember(id: number) {
    return this.memoryRepository.delete(id);
  }
}
