import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { MemberService } from "./member.service";
import { MemberDto } from "./member.dto";

@ApiTags('Member')
@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  getAllMembers() {
    return this.memberService.getMemberList();
  }


  @Post()
  addMember(
    @Body() dto: MemberDto,
  ) {
    return this.memberService.createMember(dto);
  }

  @Put()
  updateMember(
    @Param('id') id: number,
    @Body() dto: MemberDto,
  ) {
    return this.memberService.updateMember(id, dto);
  }

  @Delete()
  deleteMember(
    @Param('id') id: number
  ) {
    return this.memberService.deleteMember(id);
  }
}
