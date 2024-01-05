import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { CompanyModule } from './company.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [CompanyModule,
  
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/infrastructure/graphql/company.graphql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
