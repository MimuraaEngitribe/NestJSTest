import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company } from './models/company.model';
import { CompanyResolver } from './company.resolver';

@Module({
  providers: [CompanyService, CompanyResolver],
  controllers: [CompanyController],
})
export class CompanyModule {}
