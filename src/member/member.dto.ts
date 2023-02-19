import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MemberDto {
  @IsNotEmpty()
  @ApiProperty({ required: true })
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  readonly student_id: number;

  @ApiProperty()
  readonly github_id: string;

  @ApiProperty()
  readonly website_url: string;

  @ApiProperty()
  readonly introduce_text: string;

  @ApiProperty()
  readonly priority: number;

  @ApiProperty()
  readonly badge: string[];
}
