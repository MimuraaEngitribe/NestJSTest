import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CompanyService {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createCompany(data: {id: number, name: string }) {
    return this.prisma.company.create({ 
      data: {
        id: data.id,
        name: data.name
      }
    });
  }

  async findAllCompanies() {
    return this.prisma.company.findMany();
  }

  async findCompanyById(id: number) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  async updateCompany(id: number, data: { name: string }) {
    return this.prisma.company.update({ where: { id }, data });
  }

  async deleteCompany(id: number) {
    return this.prisma.company.delete({ where: { id } });
  }
}