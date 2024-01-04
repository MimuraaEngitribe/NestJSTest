import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Company } from './models/company.model';

@Module({
  providers: [CompanyService],
  controllers: [CompanyController],
})
export class CompanyModule {}
