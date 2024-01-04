import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './models/company.model';

@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}
  
    @Post()
    create(@Body() company: Company) {
      const data = {id: company.id, name:company.name};
      return this.companyService.createCompany(data);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() company: Company) {
      return this.companyService.updateCompany(+id, company);
    }

    @Get()
    findAll() {
      return this.companyService.findAllCompanies();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.companyService.findCompanyById(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.companyService.deleteCompany(+id);
    }
}