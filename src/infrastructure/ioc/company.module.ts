import { Module } from '@nestjs/common';
import { CompanyService } from '../../domain/company.service';
import { CompanyController } from '../../application/controllers/company.controller';
import { Company } from '../../domain/models/company.model';
import { CompanyResolver } from '../../application/resolvers/company.resolver';

@Module({
  providers: [CompanyService, CompanyResolver],
  controllers: [CompanyController],
})
export class CompanyModule {}
