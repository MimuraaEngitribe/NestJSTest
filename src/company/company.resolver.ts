import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './models/company.model';
import { CompanyInput } from './models/Company.input.model';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private companyService: CompanyService) {}

  @Mutation(() => Company)
  async create(
        @Args('company') company: CompanyInput
    ): Promise<Company> {
    return this.companyService.createCompany({ id:company.id, name:company.name });
  }

  @Query(() => Company)
  async getCompany(@Args('id') id: number): Promise<Company> {
    return this.companyService.findCompanyById(id);
  }

  @Mutation(() => Company)
  async update(
    @Args('id') id: number,
    @Args('company') company: CompanyInput
  ): Promise<Company> {
    return this.companyService.updateCompany(id, {name:company.name});
  }

  @Mutation(() => Company)
  async delete(@Args('id') id: number): Promise<Company> {
    return this.companyService.deleteCompany(id);
  }
}