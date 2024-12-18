import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { ComanyLoginDto, CompanyRegisterDto } from './dto/register.dto';
import { Response } from 'express';
import { CandidateLoginDto, CandidateRegisterDto } from './dto/candidate.dto';

@Controller('auths')
export class AuthsController {
  constructor(private service: AuthsService) {}
  //auth
  @Get('all-city')
  async getallCity() {
    return await this.service.getAllCity();
  }
  @Get('all-position')
  async getallPosition() {
    return await this.service.getAllPotion();
  }
  @Get('all-level')
  async getallLevel() {
    return await this.service.getAllLevel();
  }
  // Company
  @Post('register-company')
  async registerCompany(@Body() dto: CompanyRegisterDto) {
    return await this.service.registerCompany(dto);
  }
  @Post('login-company')
  async loginCompany(@Body() dto: ComanyLoginDto) {
    return await this.service.loginCompany(dto);
  }
  @Get('verify-email')
  async verifyEmailCompany(
    @Query('token') token: string,
    @Res() res: Response,
  ) {
    await this.service.verifyEmailCompany(token);
    return res.redirect('http://localhost:3000/login');
  }
  //Candidate
  @Post('register-candidate')
  async registerCandidate(@Body() dto: CandidateRegisterDto) {
    return await this.service.registerCandidate(dto);
  }
  @Get('verify-email-candidate')
  async verifyEmailCandidate(
    @Query('token') token: string,
    @Res() res: Response,
  ) {
    await this.service.verifyEmailCandidate(token);
    return res.redirect('http://localhost:3000/login');
  }
  @Post('login-candidate')
  async loginCandidate(@Body() dto: CandidateLoginDto) {
    return await this.service.loginCandidate(dto);
  }

  // Admin
  @Post('login-admin')
  async loginAdmin(@Body() dto: CandidateLoginDto) {
    return await this.service.loginAdmin(dto);
  }
}
