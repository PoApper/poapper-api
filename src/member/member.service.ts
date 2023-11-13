import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from './member.entity';
import { MemberDto } from './member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}

  getMemberList() {
    return this.memberRepository.find();
  }

  getMember(id: number) {
    return this.memberRepository.findOneBy({ id: id });
  }

  createMember(dto: MemberDto) {
    return this.memberRepository.save(dto);
  }

  updateMember(id: number, dto: MemberDto) {
    return this.memberRepository.update(id, dto);
  }

  deleteMember(id: number) {
    return this.memberRepository.delete(id);
  }
}
