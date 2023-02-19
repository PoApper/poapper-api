import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MemberStatus } from './member.type';

@Entity()
export class MemberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  name: string; // 홍길동

  @Column()
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
  badge: string[];

  @Column({ default: MemberStatus.unknown })
  status: MemberStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
