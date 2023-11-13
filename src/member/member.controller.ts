import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { MemberService } from './member.service';
import { MemberDto } from './member.dto';

@ApiTags('Member')
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  getAllMembers() {
    return this.memberService.getMemberList();
  }

  @Get(':id')
  getMemberById(@Param('id') id: number) {
    return this.memberService.getMember(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  addMember(@Body() dto: MemberDto) {
    return this.memberService.createMember(dto);
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  updateMember(@Param('id') id: number, @Body() dto: MemberDto) {
    return this.memberService.updateMember(id, dto);
  }

  @Delete()
  @UseGuards(AuthGuard('jwt'))
  deleteMember(@Param('id') id: number) {
    return this.memberService.deleteMember(id);
  }
}
