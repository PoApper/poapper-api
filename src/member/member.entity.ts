import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MemberStatus } from './member.type';

@Entity('member')
export class MemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  name: string; // 홍길동

  @Column({ nullable: true })
  student_id: number; // 2023xxxx

  @Column({ nullable: true })
  github_id: string;

  @Column({ nullable: true })
  website_url: string;

  @Column({ type: 'text' })
  introduce_text: string;

  @Column()
  priority: number;

  @Column({ type: 'simple-array' })
  badge: string[]; // PoApper_pre, Vice President, BackEnd Mentor, ...

  @Column({ type: 'simple-array' })
  tags: string[]; // #LoveDjango, #LoveReact, ...

  @Column({ default: MemberStatus.active })
  status: MemberStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
